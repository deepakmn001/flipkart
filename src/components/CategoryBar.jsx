import React from "react";
import {
  Grid3x3,
  Percent,
  Smartphone,
  Shirt,
  Laptop,
  Home,
} from "lucide-react";
import { categories } from "../mockData";

const iconMap = {
  "grid-3x3": Grid3x3,
  percent: Percent,
  smartphone: Smartphone,
  shirt: Shirt,
  laptop: Laptop,
  home: Home,
};

const CategoryBar = () => {
  return (
    <div className="bg-white border-b sticky top-0 z-40">
      <div className="w-full">
        {/* MOBILE FIRST SCROLL BAR */}
        <div className="flex gap-4 px-3 py-3 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <button
                key={category.id}
                className="flex flex-col items-center gap-1 min-w-[72px] active:scale-95 transition"
              >
                {/* ICON CIRCLE */}
                <div className="relative w-14 h-14 rounded-full bg-[#eef3ff] flex items-center justify-center">
                  <Icon size={24} className="text-[#2874f0]" />

                  {category.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* TEXT */}
                <span className="text-[11px] leading-tight font-medium text-gray-800 text-center">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
