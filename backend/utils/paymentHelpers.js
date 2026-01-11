import crypto from "crypto";

function toFloat(v) {
  if (!v) return null;
  v = String(v).replace(/[^\d.]/g, "");
  return v === "" ? null : parseFloat(v);
}

function genTid() {
  return "cw" + Date.now() + crypto.randomBytes(5).toString("hex");
}

function genTransactionNote(payType) {
  if (["paytm", "phonepe"].includes(payType)) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const c = chars[Math.floor(Math.random() * chars.length)];
    return c + Math.floor(100 + Math.random() * 900);
  }
  return "1" + crypto.randomBytes(2).toString("hex");
}

function buildRedirectUrl(payType, upi, amt, tid, tn, payeeName) {
  if (payType === "gpay") {
    return `tez://upi/pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(payeeName)}
&tr=${tid}&am=${amt}&cu=INR&tn=${encodeURIComponent(tn)}&url=&mode=02&purpose=00&orgid=951`;
  }

  if (payType === "phonepe") {
    const amountInPaise = Math.round(parseFloat(amt) * 100);
    const payload = {
      contact: { vpa: upi, type: "VPA" },
      p2pPaymentCheckoutParams: {
        note: "आपके बैंक खाते में प्राप्त करें",
        isByDefaultKnownContact: true,
        initialAmount: amountInPaise,
        currency: "INR",
        checkoutType: "DEFAULT",
        transactionContext: "p2p"
      }
    };
    const encoded = Buffer.from(JSON.stringify(payload)).toString("base64");
    return `phonepe://native?data=${encodeURIComponent(encoded)}&id=p2ppayment`;
  }

  if (payType === "paytm") {
    return `paytmmp://cash_wallet?pa=${encodeURIComponent(upi)}&am=${amt}
&tn=${encodeURIComponent(tn)}&pn=${encodeURIComponent(payeeName)}&cu=INR`;
  }

  // fallback generic UPI
  return `upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(payeeName)}
&tr=${tid}&am=${amt}&cu=INR&tn=${encodeURIComponent(tn)}`;
}

/* ✅ SINGLE createPayment (FINAL VERSION) */
export const createPayment = (input) => {
  const { amount, payType, upi, min_amount, max_amount, payeeName } = input;
  if (!amount || !payType || !upi) throw new Error("missing_parameters");

  let amtF = toFloat(amount);
  const minF = toFloat(min_amount);
  const maxF = toFloat(max_amount);

  if (minF !== null && amtF < minF) amtF = minF;
  if (maxF !== null && amtF > maxF) amtF = maxF;

  const amtStr = Number.isInteger(amtF) ? String(amtF) : amtF.toFixed(2);

  const tid = genTid();
  const tn = genTransactionNote(payType);
  const redirect = buildRedirectUrl(payType, upi, amtStr, tid, tn, payeeName || upi);

  // ✅ Signature + Expiry (tamper-proof)
  const hmac_secret = process.env.HMAC_SECRET || "replace_this_with_env_secret";
  const expires = Math.floor(Date.now() / 1000) + 60; // 60 seconds TTL
  const payload_obj = { redirect, tid, exp: expires };
  const payload = Buffer.from(JSON.stringify(payload_obj)).toString("base64");
  const sig = crypto.createHmac("sha256", hmac_secret).update(payload).digest("hex");

  return {
    tid,
    amount: amtStr,
    redirect_url: redirect,
    payload,
    sig,
    expires,
    status: "created",
  };
};
