import React from "react";

import categoriesImg from "../assets/categories.png";
import offerImg from "../assets/offer.png";
import mobilesImg from "../assets/mobiles.jpg";
import fashionImg from "../assets/fashion.png";
import electronicsImg from "../assets/electronics.png";

const CategoryBar = () => {
  const data = [
    { id: 1, name: "Categories", img: categoriesImg },
    { id: 2, name: "Offer Zone", img: offerImg },
    { id: 3, name: "Mobiles", img: mobilesImg },
    { id: 4, name: "Fashion", img: fashionImg },
    { id: 5, name: "Electronics", img: electronicsImg },
  ];

  return (
    <div className="bg-white border-b">
      <div className="flex items-start justify-between px-2 py-2 overflow-x-auto no-scrollbar">
        {data.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center min-w-[64px] active:scale-95 transition"
          >
            {/* ICON (EXACT SIZE LIKE FLIPKART) */}
            <img
              src={item.img}
              alt={item.name}
              className="w-[52px] h-[52px] object-contain"
            />

            {/* TEXT (EXACT SIZE & GAP) */}
            <span className="text-[12px] mt-[2px] font-normal text-gray-900 text-center">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
