import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">

      {/* HEADER */}
      <div className="bg-white px-4 py-3 border-b">
        <h1 className="text-lg font-semibold">Order Summary</h1>

        {/* STEPPER */}
        <div className="flex gap-6 text-xs text-gray-500 mt-2">
          <span>1 Address</span>
          <span className="text-[#2874f0] font-semibold">2 Order Summary</span>
          <span>3 Payment</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-4 space-y-4">

        {/* DELIVERY ADDRESS */}
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm font-semibold mb-1">Delivered to:</p>
          <p className="text-sm text-gray-600">
            {address.name}, {address.area}, {address.city}, {address.state} - {address.pincode}
          </p>
        </div>

        {/* PRODUCT CARD */}
        <div className="bg-white p-4 rounded shadow-sm flex gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-contain"
          />

          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-2">
              {product.name}
            </p>

            <p className="text-xs text-green-600 font-semibold mt-1">
              {product.discount}% off
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold">₹{product.discountedPrice}</span>
              <span className="line-through text-gray-400 text-sm">
                ₹{product.originalPrice}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-1">Qty: 1</p>
          </div>
        </div>

        {/* PRICE DETAILS */}
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="font-semibold mb-3">Price Details</p>

          <div className="flex justify-between text-sm mb-2">
            <span>Price (1 item)</span>
            <span>₹{product.originalPrice}</span>
          </div>

          <div className="flex justify-between text-sm mb-2 text-green-600">
            <span>Discount</span>
            <span>-₹{savings}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">FREE</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between font-semibold">
            <span>Total Amount</span>
            <span>₹{product.discountedPrice}</span>
          </div>

          <p className="text-xs text-green-600 mt-2">
            You will save ₹{savings} on this order
          </p>
        </div>

        {/* TRUST BADGE */}
        <div className="bg-white p-3 text-xs text-gray-600 rounded shadow-sm">
          🔒 Safe and secure payments · Easy returns · 100% authentic products
        </div>
      </div>

      {/* CONTINUE BUTTON */}
      <div className="bg-white p-4 border-t">
        <button
          onClick={() =>
            navigate("/payment", {
              state: { product, address },
            })
          }
          className="w-full bg-[#fb641b] text-white py-3 font-semibold rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
