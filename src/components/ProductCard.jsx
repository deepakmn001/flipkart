import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Safety guard (prevents crash if product/id missing)
  const handleNavigate = () => {
    if (!product?.id) return;
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="bg-white rounded-sm border border-gray-200 overflow-hidden cursor-pointer
                 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-4">
        {/* Product Image */}
        <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded">
          <img
            src={product?.image}
            alt={product?.name}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-2">
          {/* Product Name */}
          <h3 className="text-sm text-gray-800 line-clamp-3 leading-tight hover:text-[#2874f0] transition-colors">
            {product?.name}
          </h3>

          {/* Discount */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-green-600">
              {product?.discount}% Off
            </span>
            <span className="text-sm text-gray-400 line-through">
              ₹{product?.originalPrice}
            </span>
          </div>

          {/* Price + Assured */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product?.discountedPrice}
            </span>

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='20' viewBox='0 0 60 20'%3E%3Crect width='60' height='20' rx='2' fill='%2326A541'/%3E%3Ctext x='4' y='14' font-family='Arial' font-size='10' font-weight='bold' fill='white'%3EAssured%3C/text%3E%3C/svg%3E"
              alt="Assured"
              className="h-5"
            />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
              <span>{product?.rating}</span>
              <Star size={12} fill="white" />
            </div>

            <span className="text-xs text-gray-500">
              ({product?.ratingCount?.toLocaleString()} Ratings)
            </span>
          </div>

          {/* Delivery */}
          <p className="text-xs text-gray-600 font-medium">
            Free Delivery in Two Days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
