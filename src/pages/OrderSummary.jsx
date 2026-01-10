import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import trustBadge from "../assets/trust.png";
import plusAssured from "../assets/assure.png";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const product = state?.product;
  const address = state?.address;

  if (!product || !address) {
    return <div className="p-6 text-center">Invalid order</div>;
  }

  const savings = product.originalPrice - product.discountedPrice;

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col items-center">

      {/* 🔵 HEADER */}
      <div className="w-full bg-white border-b">
        <div className="max-w-[420px] mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="text-lg font-semibold"
            >
              ←
            </button>
            <h1 className="text-base font-semibold">Order Summary</h1>
          </div>

          <div className="flex justify-between text-[11px] text-gray-400 mt-2">
            <span>1 Address</span>
            <span className="text-[#2874f0] font-semibold">
              2 Order Summary
            </span>
            <span>3 Payment</span>
          </div>
        </div>
      </div>

      {/* 🔽 CONTENT */}
      <div className="flex-1 w-full">
        <div className="max-w-[420px] mx-auto px-3 py-3 space-y-3">

          {/* 📍 DELIVERY ADDRESS */}
          <div className="bg-white p-3 rounded">
            <p className="text-xs font-semibold mb-1">Delivered to:</p>
            <p className="text-xs text-gray-600 leading-snug">
              {address.name}, {address.area}, {address.city},{" "}
              {address.state} - {address.pincode}
            </p>
          </div>

          {/* 🛒 PRODUCT CARD */}
          <div className="bg-white p-3 rounded flex gap-3">

            {/* LEFT */}
            <div className="flex flex-col items-center w-20">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain"
              />
              <img
                src={plusAssured}
                alt="Flipkart Assured"
                className="h-4 mt-1"
              />
            </div>

            {/* RIGHT */}
            <div className="flex-1">
              <p className="text-xs font-medium leading-snug line-clamp-2">
                {product.name}
              </p>

              <p className="text-xs text-green-600 font-semibold mt-1">
                {product.discount}% off
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-sm">
                  ₹{product.discountedPrice}
                </span>
                <span className="line-through text-gray-400 text-xs">
                  ₹{product.originalPrice}
                </span>
              </div>

              <p className="text-[11px] text-gray-500 mt-1">
                Qty: 1
              </p>
            </div>
          </div>

          {/* 💰 PRICE DETAILS */}
          <div className="bg-white p-3 rounded">
            <p className="text-sm font-semibold mb-2">Price Details</p>

            <div className="flex justify-between text-xs mb-1">
              <span>Price (1 item)</span>
              <span>₹{product.originalPrice}</span>
            </div>

            <div className="flex justify-between text-xs mb-1 text-green-600">
              <span>Discount</span>
              <span>-₹{savings}</span>
            </div>

            <div className="flex justify-between text-xs mb-1">
              <span>Delivery Charges</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-sm font-semibold">
              <span>Total Amount</span>
              <span>₹{product.discountedPrice}</span>
            </div>

            <p className="text-[11px] text-green-600 mt-1">
              You will save ₹{savings} on this order
            </p>
          </div>

          {/* 🔒 TRUST */}
          <div className="bg-white p-3 rounded flex justify-center">
            <img
              src={trustBadge}
              alt="Safe and secure payments"
              className="h-7 object-contain"
            />
          </div>

        </div>
      </div>

      {/* 🟠 CONTINUE BUTTON */}
      <div className="w-full bg-white border-t sticky bottom-0">
        <div className="max-w-[420px] mx-auto p-3">
          <button
            onClick={() =>
              navigate("/payment", { state: { product, address } })
            }
            className="w-full bg-[#fb641b] text-white py-3 text-sm font-semibold rounded"
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  );
};

export default OrderSummary;
