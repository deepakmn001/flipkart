import React, { useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartCount = 1;

  return (
    <header className="bg-[#2874f0] sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Menu Icon */}
          <button className="lg:hidden text-white hover:opacity-80 transition-opacity">
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-1">
            <h1 className="text-white font-bold text-xl italic">Flipkart</h1>
            <span className="text-yellow-400 text-xs font-semibold">Plus</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Products, Brands and More"
                className="w-full px-4 py-2.5 rounded-sm text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2874f0]" size={20} />
            </div>
          </div>

          {/* Cart */}
          <button className="relative text-white hover:opacity-80 transition-opacity">
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