import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../mockData";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 10,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white mt-2">
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-3 border-b">
        <h2 className="text-base font-bold text-gray-900">
          Deals of the Day
        </h2>

        <div className="flex items-center gap-1 text-[11px] font-semibold">
          <Clock size={14} className="text-gray-600" />
          <span className="bg-gray-900 text-white px-1.5 py-0.5 rounded">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          :
          <span className="bg-gray-900 text-white px-1.5 py-0.5 rounded">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          :
          <span className="bg-gray-900 text-white px-1.5 py-0.5 rounded">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* SALE BADGE */}
      <div className="px-3 py-2">
        <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          SALE LIVE
        </span>
      </div>

      {/* MOBILE SCROLL PRODUCTS */}
      <div className="flex gap-3 px-3 overflow-x-auto no-scrollbar sm:hidden">
        {products.map((product) => (
          <div key={product.id} className="min-w-[160px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="px-3 py-4 sm:text-center">
        <button className="w-full sm:w-auto bg-[#2874f0] text-white font-semibold py-2 px-8 rounded active:scale-95 transition">
          View All Deals
        </button>
      </div>
    </section>
  );
};

export default DealsSection;
