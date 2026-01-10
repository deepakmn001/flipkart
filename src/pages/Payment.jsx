import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ShieldCheck, Truck, RotateCcw, CheckCircle } from "lucide-react";

/* LOCAL UPI LOGOS */
import phonepe from "../assets/upi/phonepe.jpg";
import gpay from "../assets/upi/gpay.webp";
import paytm from "../assets/upi/paytm.png";
import bhim from "../assets/upi/bhim.png";

/* UPI CONFIG */
const upiApps = [
  { id: "phonepe", name: "PhonePe", logo: phonepe },
  { id: "gpay", name: "Google Pay", logo: gpay },
  { id: "paytm", name: "Paytm", logo: paytm },
  {
    id: "amazonpay",
    name: "Amazon Pay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg",
  },
  { id: "bhim", name: "BHIM UPI", logo: bhim },
];

const Payment = () => {
  const { state } = useLocation();
  const product = state?.product;
  const address = state?.address;

  const [selectedUpi, setSelectedUpi] = useState("phonepe");
  const [upiId, setUpiId] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!product || !address) {
    return <div className="p-6 text-center">Invalid payment flow</div>;
  }

  const selectedApp = upiApps.find((u) => u.id === selectedUpi);

  const isUpiValid = upiId.includes("@") && upiId.length > 6;

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      {/* HEADER */}
      <div className="bg-white px-4 py-3 border-b">
        <h1 className="text-lg font-semibold">Payments</h1>
        <div className="flex gap-6 text-xs text-gray-500 mt-2">
          <span>1 Address</span>
          <span>2 Order Summary</span>
          <span className="text-[#2874f0] font-semibold">3 Payment</span>
        </div>
      </div>

      {/* BODY */}
      <div className="flex-1 px-4 py-4 space-y-4">
        {/* UPI OPTIONS */}
        <div className="bg-white rounded shadow">
          <h2 className="px-4 py-3 font-semibold border-b">Pay using UPI</h2>

          {upiApps.map((upi) => (
            <div
              key={upi.id}
              onClick={() => {
                setSelectedUpi(upi.id);
                setConfirmed(false);
              }}
              className={`flex items-center gap-4 px-4 py-4 cursor-pointer border-b last:border-b-0 ${
                selectedUpi === upi.id ? "bg-blue-50" : ""
              }`}
            >
              <input type="radio" checked={selectedUpi === upi.id} readOnly />
              <img src={upi.logo} alt={upi.name} className="h-6 w-20 object-contain" />
              <span className="font-medium">{upi.name}</span>
            </div>
          ))}
        </div>

        {/* UPI ID INPUT */}
        <div className="bg-white rounded shadow p-4">
          <label className="text-sm font-semibold block mb-2">
            Enter UPI ID
          </label>
          <input
            value={upiId}
            onChange={(e) => {
              setUpiId(e.target.value);
              setConfirmed(false);
            }}
            placeholder="example@upi"
            className="w-full border px-3 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
          />
          <p className="text-xs text-gray-500 mt-1">
            You will receive a payment request on this UPI ID
          </p>
        </div>

        {/* CONFIRMATION CARD */}
        {isUpiValid && (
          <div className="bg-green-50 border border-green-300 rounded p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-600" />
              <p className="font-semibold text-green-700">
                Confirm Payment Details
              </p>
            </div>

            <p className="text-sm">
              <strong>Name:</strong> {address.name}
            </p>
            <p className="text-sm">
              <strong>UPI ID:</strong> {upiId}
            </p>
            <p className="text-sm">
              <strong>App:</strong> {selectedApp.name}
            </p>

            <button
              onClick={() => setConfirmed(true)}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold"
            >
              Confirm & Proceed
            </button>
          </div>
        )}

        {/* TRUST */}
        <div className="flex justify-around text-xs text-gray-600 mt-4">
          <div className="flex flex-col items-center">
            <ShieldCheck /> Secure
          </div>
          <div className="flex flex-col items-center">
            <Truck /> Fast
          </div>
          <div className="flex flex-col items-center">
            <RotateCcw /> Easy Returns
          </div>
        </div>
      </div>

      {/* CONTINUE BUTTON */}
      <div className="bg-white p-4 border-t">
        <button
          disabled={!confirmed}
          onClick={() =>
            alert(
              `✅ Payment Request Sent\n\nName: ${address.name}\nUPI: ${upiId}\nApp: ${selectedApp.name}`
            )
          }
          className={`w-full py-3 rounded font-semibold text-base ${
            confirmed
              ? "bg-[#fb641b] text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Payment;
