import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
    house: "",
    area: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!product) {
    return <div className="p-6 text-center">No product selected</div>;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      {/* HEADER */}
      <div className="bg-white px-4 py-3 border-b">
        <h1 className="text-lg font-semibold">Add delivery address</h1>

        {/* STEPS */}
        <div className="flex gap-6 text-xs text-gray-500 mt-2">
          <span className="text-[#2874f0] font-semibold">1 Address</span>
          <span>2 Order Summary</span>
          <span>3 Payment</span>
        </div>
      </div>

      {/* FORM */}
      <div className="flex-1 px-4 py-4 space-y-4">
        <input
          name="name"
          placeholder="Full Name *"
          className="checkout-input"
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile number *"
          className="checkout-input"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode *"
          className="checkout-input"
          onChange={handleChange}
        />

        <div className="flex gap-3">
          <input
            name="city"
            placeholder="City *"
            className="checkout-input flex-1"
            onChange={handleChange}
          />

          <select
            name="state"
            className="checkout-input flex-1"
            onChange={handleChange}
          >
            <option value="">State *</option>
            <option>Andhra Pradesh</option>
            <option>Delhi</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
          </select>
        </div>

        <input
          name="house"
          placeholder="House No., Building Name *"
          className="checkout-input"
          onChange={handleChange}
        />

        <input
          name="area"
          placeholder="Road name, Area, Colony *"
          className="checkout-input"
          onChange={handleChange}
        />
      </div>

      {/* FIXED BOTTOM BUTTON */}
      <div className="bg-white p-4 border-t">
        <button
          onClick={() =>
      navigate("/order-summary", {
  state: { product, address: form },
})
          }
          
          className="w-full bg-[#fb641b] text-white py-3 rounded font-semibold text-base"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default Address;
