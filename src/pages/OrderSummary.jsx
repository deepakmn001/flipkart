import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import plusAssured from "../assets/assure.png";
import trustBadge from "../assets/trust.png";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const product = state?.product;
  const address = state?.address || {};

  if (!product) return null;

  const savings = product.originalPrice - product.discountedPrice;

  return (
    <div className="bg-[#f1f3f6] min-h-[100dvh] flex flex-col">

      {/* 🔵 HEADER */}
      <div className="bg-white border-b px-3 py-3">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-lg">←</button>
          <span className="text-sm font-semibold text-[#212121]">
            Order Summary
          </span>
        </div>

        {/* STEPS */}
        <div className="flex items-center justify-between mt-3 text-[11px] text-gray-500">
          <Step label="Address" />
          <Line />
          <Step label="Order Summary" active />
          <Line />
          <Step label="Payment" />
        </div>
      </div>

      {/* 📍 ADDRESS */}
      <div className="bg-white mt-2 px-3 py-3">
        <p className="text-xs font-semibold mb-1">Delivered to:</p>
        <p className="text-xs text-gray-600">
          {address.city || ""} {address.state || ""}
        </p>
      </div>

      {/* 🛒 PRODUCT (EXACT HEIGHT FIXED) */}
      <div className="bg-white mt-2 px-3 py-3 flex gap-3 min-h-[96px] items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-[64px] h-[64px] object-contain mt-1"
        />

        <div className="flex-1">
          <p className="text-[13px] leading-[16px] text-[#212121] line-clamp-2">
            {product.name}
          </p>

          {/* ✅ FLIPKART ASSURED – FINAL FIX */}
        <img
  src={plusAssured}
  alt="Flipkart Assured"
  className="mt-1"
  style={{
    height: "80px",
    width: "50px",
    objectFit: "contain",
  }}
/>


          <div className="flex items-center gap-2 mt-2 text-[12px]">
            <span>Qty: 1</span>
            <span className="text-green-600 font-semibold">
              {product.discount}% off
            </span>
            <span className="line-through text-gray-400">
              ₹{product.originalPrice}
            </span>
            <span className="font-semibold">
              ₹{product.discountedPrice}
            </span>
          </div>
        </div>
      </div>

      {/* 💰 PRICE DETAILS */}
      <div className="bg-white mt-2 px-3 py-3">
        <p className="text-sm font-semibold mb-2">Price Details</p>

        <Row label="Price (1 item)" value={`₹${product.originalPrice}`} />
        <Row label="Discount" value={`-₹${savings}`} green />
        <Row label="Delivery Charges" value="FREE Delivery" green />

        <hr className="my-2" />

        <Row
          label="Total Amount"
          value={`₹${product.discountedPrice}`}
          bold
        />

        <p className="text-[11px] text-green-600 mt-1">
          You will save ₹{savings} on this order
        </p>
      </div>

      {/* 🔒 SAFE & SECURE (66px exact) */}
      <div className="bg-[#f1f3f6] px-3 py-3">
        <div className="bg-white h-[66px] flex items-center gap-3 px-3 text-[12px] text-gray-600">
          <img src={trustBadge} className="h-[22px]" />
          <span>
            Safe and secure payments. Easy returns.
            <br />
            100% Authentic products.
          </span>
        </div>
      </div>

      {/* 🟠 BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-3 py-2 flex items-center">
        <div className="flex-1">
          <p className="text-[11px] line-through text-gray-400">
            ₹{product.originalPrice}
          </p>
          <p className="text-sm font-semibold">
            ₹{product.discountedPrice}
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/payment", { state: { product, address } })
          }
          className="bg-[#fb641b] text-white px-6 py-2 rounded text-sm font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

/* 🔹 HELPERS */
const Step = ({ label, active }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px]
      ${active ? "bg-[#2874f0] text-white" : "border border-gray-400"}`}
    >
      {active ? "2" : ""}
    </div>
    <span className={active ? "text-[#2874f0] font-semibold" : ""}>
      {label}
    </span>
  </div>
);

const Line = () => <div className="flex-1 h-[1px] bg-gray-300 mx-1" />;

const Row = ({ label, value, green, bold }) => (
  <div className={`flex justify-between text-xs mb-1 ${bold ? "font-semibold" : ""}`}>
    <span>{label}</span>
    <span className={green ? "text-green-600" : ""}>{value}</span>
  </div>
);

export default OrderSummary;
