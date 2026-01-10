import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../mockData";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 11,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white mt-2">
      {/* HEADER */}
      <div className="flex items-center justify-between px-[12px] py-[12px] border-b">
        <h2 className="text-[14px] font-bold text-[#2874f0]">
          Deals of the Day
        </h2>

        <div className="flex items-center gap-2 text-[12px]">
          <Clock size={14} />
          <span>
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="bg-red-500 text-white px-2 py-[2px] rounded text-[10px] font-bold">
            SALE IS LIVE
          </span>
        </div>
      </div>

      {/* 🔥 PRODUCTS GRID — FLIPKART EXACT */}
      <div className="grid grid-cols-2 gap-[8px] px-[12px] py-[12px] justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
