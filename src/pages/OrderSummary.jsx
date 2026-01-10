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
    <div className="min-h-screen bg-[#f1f3f6] flex flex-col items-center">

      {/* 🔵 HEADER */}
      <div className="w-full bg-white border-b">
        <div className="max-w-[412px] mx-auto px-[12px] py-[12px]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="text-[18px] font-semibold"
            >
              ←
            </button>
            <h1 className="text-[14px] font-semibold text-[#212121]">
              Order Summary
            </h1>
          </div>

          {/* STEPS */}
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
        <div className="max-w-[412px] mx-auto px-[12px] py-3 space-y-3">

          {/* 📍 DELIVERY ADDRESS */}
          <div className="bg-white p-[12px]">
            <p className="text-[12px] font-semibold mb-1 text-[#212121]">
              Delivered to:
            </p>
            <p className="text-[12px] text-gray-600 leading-[16px]">
              {address.name}, {address.area}, {address.city},{" "}
              {address.state} - {address.pincode}
            </p>
          </div>

          {/* 🛒 PRODUCT ROW (381px × ~75px) */}
          <div className="bg-white p-[12px] flex gap-3 items-center">
            {/* IMAGE */}
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[60px] object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1">
              <p className="text-[12px] leading-[16px] text-[#212121] line-clamp-2">
                {product.name}
              </p>

              <img
                src={plusAssured}
                alt="Assured"
                className="h-[14px] mt-1"
              />

              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 text-[12px] font-semibold">
                  {product.discount}% off
                </span>
                <span className="line-through text-gray-400 text-[12px]">
                  ₹{product.originalPrice}
                </span>
                <span className="font-semibold text-[14px]">
                  ₹{product.discountedPrice}
                </span>
              </div>

              <p className="text-[11px] text-gray-500 mt-1">
                Qty: 1
              </p>
            </div>
          </div>

          {/* 💰 PRICE DETAILS (386px × ~189px) */}
          <div className="bg-white p-[12px]">
            <p className="text-[13px] font-semibold mb-2">
              Price Details
            </p>

            <div className="flex justify-between text-[12px] mb-1">
              <span>Price (1 item)</span>
              <span>₹{product.originalPrice}</span>
            </div>

            <div className="flex justify-between text-[12px] mb-1 text-green-600">
              <span>Discount</span>
              <span>-₹{savings}</span>
            </div>

            <div className="flex justify-between text-[12px] mb-1">
              <span>Delivery Charges</span>
              <span className="text-green-600">FREE Delivery</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-[13px] font-semibold">
              <span>Total Amount</span>
              <span>₹{product.discountedPrice}</span>
            </div>

            <p className="text-[11px] text-green-600 mt-1">
              You will save ₹{savings} on this order
            </p>
          </div>

          {/* 🔒 TRUST */}
          <div className="bg-white p-[12px] flex justify-center">
            <img
              src={trustBadge}
              alt="Safe and secure payments"
              className="h-[28px]"
            />
          </div>

        </div>
      </div>

      {/* 🟠 CONTINUE BUTTON (56px height) */}
      <div className="w-full bg-white border-t sticky bottom-0">
        <div className="max-w-[412px] mx-auto p-[12px]">
          <button
            onClick={() =>
              navigate("/payment", { state: { product, address } })
            }
            className="w-full h-[48px] bg-[#fb641b] text-white text-[14px] font-semibold rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
