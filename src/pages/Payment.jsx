import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/* PAYMENT LOGOS */
import visa from "../assets/visa.png";
import mastercard from "../assets/mas.png";
import rupay from "../assets/rupay.png";
import razorpay from "../assets/raz.png";
import pci from "../assets/pcc.png";

/* UPI LOGOS */
import phonepe from "../assets/upi/phonepe.jpg";
import paytm from "../assets/upi/paytm.png";
import offerBanner from "../assets/ban.png";
import trustStrip from "../assets/tr.png";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const address = state?.address;

  // 👉 SAME UPI ID (agar same account me payment chahiye)
  const PHONEPE_UPI = "8521328193@fam";
  const PAYTM_UPI = "8521328193@fam";

  const [selected, setSelected] = useState("phonepe");

  if (!product || !address) return null;

  // ✅ PAYMENT HANDLER (IMPORTANT)
  const handlePayment = async () => {
  try {
    const upiId = selected === "phonepe" ? PHONEPE_UPI : PAYTM_UPI;
    const res = await fetch("http://localhost:5000/api/payment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: product.discountedPrice,
        payType: selected,
        upi: upiId,
        min_amount: "10",
        max_amount: "5000",
      }),
    });
    const data = await res.json();
    if (data.redirect_url) {
      window.location.href = data.redirect_url;
    }
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="min-h-[100dvh] bg-[#f1f3f6] flex flex-col">

      {/* 🔵 HEADER */}
      <div className="bg-white border-b px-3 py-3">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-lg">←</button>
          <span className="text-sm font-semibold text-[#212121]">Payments</span>
        </div>

        <div className="flex justify-between text-[11px] text-gray-400 mt-3">
          <span>1 Address</span>
          <span>2 Order Summary</span>
          <span className="text-[#2874f0] font-semibold">3 Payment</span>
        </div>
      </div>

      {/* 🟡 OFFER BANNER */}
      <div className="bg-white mt-2 px-3 py-3">
        <img
          src={offerBanner}
          alt="Offer Banner"
          className="w-full h-[72px] object-cover rounded"
        />
      </div>

      {/* ⏰ TIMER */}
      <div className="bg-white px-3 py-2 text-center text-sm">
        Offer ends in{" "}
        <span className="text-orange-600 font-semibold">11min 20sec</span>
      </div>

      {/* 💳 UPI OPTIONS */}
      <div className="bg-white mt-2">
        <UpiRow
          active={selected === "phonepe"}
          onClick={() => setSelected("phonepe")}
          logo={phonepe}
          name="PhonePe"
        />
        <UpiRow
          active={selected === "paytm"}
          onClick={() => setSelected("paytm")}
          logo={paytm}
          name="Paytm"
        />
      </div>

      {/* 💰 PRICE DETAILS */}
      <div className="bg-white mt-3 px-3 py-3">
        <p className="text-sm font-semibold mb-2">Price Details</p>

        <Row label="Price (1 item)" value={`₹${product.originalPrice}`} />
        <Row label="Delivery Charges" value="FREE" green />

        <hr className="my-2" />

        <Row
          label="Amount Payable"
          value={`₹${product.discountedPrice}`}
          bold
        />
      </div>

      {/* 🔒 TRUST STRIP */}
      <div className="bg-white mt-3 px-3 py-9">
        <img
          src={trustStrip}
          alt="Secure & Authentic Payments"
          className="w-full h-[194px] object-contain"
        />
      </div>

      {/* 💳 PAYMENT PROVIDERS */}
      <div className="bg-white px-3 py-3 border-t">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <img src={visa} className="h-[22px]" />
          <img src={mastercard} className="h-[22px]" />
          <img src={rupay} className="h-[22px]" />
          <img src={pci} className="h-[22px]" />
          <img src={razorpay} className="h-[22px]" />
        </div>
      </div>

      {/* 🟠 BOTTOM BAR */}
      <div className="mt-auto bg-white border-t px-3 py-2 flex items-center">
        <div className="flex-1">
          <p className="text-[11px] line-through text-gray-400">
            ₹{product.originalPrice}
          </p>
          <p className="text-sm font-semibold">
            ₹{product.discountedPrice}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="bg-[#fb641b] text-white px-8 py-2 rounded text-sm font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

/* 🔹 COMPONENTS */

const UpiRow = ({ active, onClick, logo, name }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-4 border-b cursor-pointer ${
      active ? "bg-blue-50" : ""
    }`}
  >
    <div
      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
        active ? "border-[#2874f0]" : "border-gray-400"
      }`}
    >
      {active && <div className="w-2 h-2 bg-[#2874f0] rounded-full" />}
    </div>

    <img src={logo} className="h-[28px] w-[90px] object-contain" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const Row = ({ label, value, green, bold }) => (
  <div className={`flex justify-between text-sm mb-1 ${bold ? "font-semibold" : ""}`}>
    <span>{label}</span>
    <span className={green ? "text-green-600" : ""}>{value}</span>
  </div>
);

export default Payment;
