import React, { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = 1;

  return (
    <header className="bg-[#2874f0] sticky top-0 z-50">
      <div className="w-full">

        {/* TOP BAR (MOBILE FIRST) */}
        <div className="flex items-center justify-between px-3 py-2">
          {/* MENU */}
          <button className="text-white active:scale-95 transition">
            <Menu size={22} />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-1">
            <h1 className="text-white font-bold text-lg italic">
              Flipkart
            </h1>
            <span className="text-yellow-400 text-[10px] font-semibold">
              Plus
            </span>
          </div>

          {/* CART */}
          <button className="relative text-white active:scale-95 transition">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* SEARCH BAR (FULL WIDTH – MOBILE) */}
        <div className="px-3 pb-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products"
              className="w-full px-4 py-2.5 rounded text-sm focus:outline-none"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2874f0]"
            />
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center gap-6 max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center gap-1">
            <h1 className="text-white font-bold text-xl italic">
              Flipkart
            </h1>
            <span className="text-yellow-400 text-xs font-semibold">
              Plus
            </span>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="w-full px-4 py-2.5 rounded-sm text-sm focus:outline-none"
              />
              <Search
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2874f0]"
              />
            </div>
          </div>

          <button className="relative text-white">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
