import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        bg-white
        border border-[#f0f0f0]
        box-border
        cursor-pointer
        overflow-hidden
        relative
        text-center
        select-none

        w-[202px]
        h-[341px]

        p-4
        font-['Roboto','Helvetica','Arial',sans-serif]
      "
    >
      {/* 🖼 IMAGE */}
      <div className="flex items-center justify-center h-[150px]">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[140px] object-contain"
        />
      </div>

      {/* 📦 DETAILS */}
      <div className="space-y-[4px] text-left">

        {/* NAME */}
        <p className="text-[12px] leading-[16px] text-[#2874f0] line-clamp-2">
          {product.name}
        </p>

        {/* DISCOUNT */}
        <div className="flex items-center gap-1 text-[11px]">
          <span className="text-green-600 font-semibold">
            {product.discount}% off
          </span>
          <span className="text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold text-[#212121]">
            ₹{product.discountedPrice}
          </span>

          <span className="text-[10px] bg-[#2874f0] text-white px-1 rounded">
            Assured
          </span>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1">
          <span className="flex items-center gap-[2px] bg-green-600 text-white text-[10px] px-1 rounded">
            {product.rating}
            <Star size={10} fill="white" />
          </span>

          <span className="text-[10px] text-gray-500">
            {product.ratingCount} Ratings
          </span>
        </div>

        {/* DELIVERY */}
        <p className="text-[10px] text-gray-600">
          Free Delivery in Two Days
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
