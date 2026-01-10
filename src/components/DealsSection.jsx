import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../mockData';

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 10,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Deals of the Day</h2>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={24} className="text-gray-600" />
            <div className="flex items-center gap-1">
              <div className="bg-gray-800 text-white px-3 py-1 rounded font-bold text-lg">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-gray-800 font-bold">:</span>
              <div className="bg-gray-800 text-white px-3 py-1 rounded font-bold text-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-gray-800 font-bold">:</span>
              <div className="bg-gray-800 text-white px-3 py-1 rounded font-bold text-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Sale Live Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-red-600 text-white font-bold text-lg px-8 py-2 rounded-full animate-pulse">
            SALE IS LIVE
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-[#2874f0] text-white font-semibold px-12 py-3 rounded-sm hover:bg-[#1c5db8] transition-colors">
            View All Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;