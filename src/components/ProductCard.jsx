import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!product?.id) return;
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="
        bg-white border border-gray-200 rounded
        cursor-pointer overflow-hidden
        active:scale-[0.98] transition
        sm:hover:-translate-y-1 sm:hover:shadow-lg
      "
    >
      {/* IMAGE */}
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-2">
        <img
          src={product?.image}
          alt={product?.name}
          loading="lazy"
          className="max-h-full object-contain"
        />
      </div>

      {/* DETAILS */}
      <div className="px-3 py-2 space-y-1.5">
        {/* NAME */}
        <h3 className="text-xs text-gray-800 line-clamp-2 leading-snug">
          {product?.name}
        </h3>

        {/* PRICE ROW */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            ₹{product?.discountedPrice}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product?.originalPrice}
          </span>
          <span className="text-xs font-semibold text-green-600">
            {product?.discount}% off
          </span>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-[1px] rounded text-[10px] font-semibold">
            {product?.rating}
            <Star size={10} fill="white" />
          </div>

          <span className="text-[10px] text-gray-500">
            ({product?.ratingCount?.toLocaleString()})
          </span>
        </div>

        {/* DELIVERY */}
        <p className="text-[10px] text-gray-600 font-medium">
          Free Delivery
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
