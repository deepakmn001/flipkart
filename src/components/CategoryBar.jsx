import React from 'react';
import { Grid3x3, Percent, Smartphone, Shirt, Laptop, Home } from 'lucide-react';
import { categories } from '../mockData';

const iconMap = {
  'grid-3x3': Grid3x3,
  'percent': Percent,
  'smartphone': Smartphone,
  'shirt': Shirt,
  'laptop': Laptop,
  'home': Home
};

const CategoryBar = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around py-4 overflow-x-auto">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                className="flex flex-col items-center gap-2 min-w-[80px] hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center relative">
                  <Icon size={28} className="text-[#2874f0]" />
                  {category.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {category.badge}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-800">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;