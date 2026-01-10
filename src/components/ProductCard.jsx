import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white border border-gray-200"
    >
      {/* IMAGE */}
      <div className="aspect-[3/4] flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain max-h-[140px]"
        />
      </div>

      {/* DETAILS */}
      <div className="px-2 pb-2 space-y-[2px]">
        {/* NAME */}
        <p className="text-[12px] text-[#2874f0] leading-snug line-clamp-2">
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
        <div className="flex items-center gap-1">
          <span className="text-[15px] font-bold">
            ₹{product.discountedPrice}
          </span>

          <span className="text-[11px] bg-blue-600 text-white px-1 rounded">
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
