import React, { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = 1;

  return (
    <header className="bg-[#2874f0] sticky top-0 z-50">
      
      {/* 🔵 TOP BAR */}
      <div className="flex items-center justify-between px-3 py-2">
        
        {/* MENU */}
        <Menu size={22} className="text-white" />

        {/* LOGO */}
        <div className="flex items-start gap-[2px] leading-none">
          <span className="text-white font-bold italic text-[18px]">
            Flipkart
          </span>
          <div className="flex flex-col -mt-[2px]">
            <span className="text-[10px] italic text-white">Plus</span>
            <span className="text-yellow-400 text-[9px] font-bold -mt-[2px]">
              ✦
            </span>
          </div>
        </div>

        {/* CART */}
        <div className="relative">
          <ShoppingCart size={22} className="text-white" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="px-3 pb-2">
        <div className="flex bg-white rounded-sm overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Products, Brands and More"
            className="flex-1 px-3 py-2 text-sm outline-none"
          />
          <button className="bg-white px-3 flex items-center justify-center">
            <Search size={18} className="text-[#2874f0]" />
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
