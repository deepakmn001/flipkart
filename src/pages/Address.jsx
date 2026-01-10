import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  if (!product) {
    return <div className="p-6 text-center">No product selected</div>;
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] pb-[80px]">
      {/* 🔵 HEADER */}
      <div className="bg-white border-b px-3 py-3 flex items-center gap-2">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <h1 className="text-sm font-semibold">Add delivery address</h1>
      </div>

      {/* 🔢 STEPS */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#2874f0] font-semibold">
            <span className="step active">1</span> Address
          </span>
          <span>
            <span className="step">2</span> Order Summary
          </span>
          <span>
            <span className="step">3</span> Payment
          </span>
        </div>
      </div>

      {/* 📝 FORM */}
      <div className="px-4 py-4 space-y-4">
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

      {/* 🟠 FIXED SAVE BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button
          onClick={() =>
            navigate("/order-summary", {
              state: { product, address: form },
            })
          }
          className="w-full bg-[#fb641b] text-white py-3 rounded-sm font-semibold text-base active:scale-95"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default Address;
