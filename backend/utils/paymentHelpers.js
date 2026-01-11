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

function buildRedirectUrl(payType, upi, amt, tid, tn) {
  return `upi://pay?pa=${encodeURIComponent(upi)}
&pn=Flipkart
&am=${amt}
&cu=INR
&tn=${encodeURIComponent(tn)}
&tr=${tid}`;
}


/* ✅ SINGLE createPayment (ONLY ONE) */
export const createPayment = (input) => {
  const { amount, payType, upi, min_amount, max_amount } = input;
  if (!amount || !payType || !upi) throw new Error("missing_parameters");

  let amtF = toFloat(amount);
  const minF = toFloat(min_amount);
  const maxF = toFloat(max_amount);

  if (minF !== null && amtF < minF) amtF = minF;
  if (maxF !== null && amtF > maxF) amtF = maxF;

  const amtStr = Number.isInteger(amtF) ? String(amtF) : amtF.toFixed(2);

  const tid = genTid();
  const tn = genTransactionNote(payType);
  const redirect = buildRedirectUrl(payType, upi, amtStr, tid, tn);

  return {
    tid,
    amount: amtStr,
    redirect_url: redirect,
    status: "created",
  };
};
