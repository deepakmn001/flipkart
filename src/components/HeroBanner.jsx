import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#0b5ed7] via-[#2874f0] to-[#0b5ed7]">
      
      {/* MOBILE FIRST BANNER */}
      <div className="px-3 py-6 text-center sm:hidden">
        <p className="text-white text-xs font-semibold tracking-wide">
          FESTIVE SPECIAL
        </p>

        <h1 className="text-white text-2xl font-extrabold mt-1">
          CHRISTMAS SALE
        </h1>

        <p className="text-yellow-300 text-sm font-semibold mt-1">
          Upto 70% Off
        </p>

        <button className="mt-4 bg-yellow-400 text-[#2874f0] font-bold px-6 py-2 rounded active:scale-95 transition">
          Shop Now
        </button>
      </div>

      {/* DESKTOP / TABLET BANNER */}
      <div className="hidden sm:flex items-center justify-between max-w-screen-xl mx-auto px-8 py-16">
        
        {/* LEFT */}
        <div>
          <p className="text-white text-sm font-semibold">
            FESTIVE SEASON DEALS
          </p>

          <h1 className="text-white text-5xl font-extrabold mt-2 leading-tight">
            CHRISTMAS <br /> MEGA SALE
          </h1>

          <p className="text-yellow-300 text-xl font-bold mt-3">
            Upto 70% Off on Top Brands
          </p>

          <button className="mt-6 bg-yellow-400 text-[#2874f0] font-bold px-8 py-3 rounded hover:bg-yellow-300 transition">
            Shop Now
          </button>
        </div>

        {/* RIGHT DECOR */}
        <div className="relative">
          <div className="w-40 h-40 bg-yellow-400 rounded-xl flex items-center justify-center rotate-6 shadow-lg">
            <span className="text-[#2874f0] text-6xl font-extrabold italic">
              f
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
