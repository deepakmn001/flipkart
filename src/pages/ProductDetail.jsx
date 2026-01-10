import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { products } from "../mockData";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">
        Product not found
      </div>
    );
  }

  // 👇 same image multiple times (future me real gallery aayegi)
  const images = [product.image, product.image, product.image];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT: IMAGE CAROUSEL */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center items-center"
                  >
                    <img
                      src={img}
                      alt={product.name}
                      className={`max-h-[420px] object-contain transition-transform duration-300 ${
                        zoom ? "scale-125" : "scale-100"
                      }`}
                      onMouseEnter={() => setZoom(true)}
                      onMouseLeave={() => setZoom(false)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <ChevronRight />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
                {product.rating}
                <Star size={14} fill="white" />
              </div>
              <span className="text-gray-500 text-sm">
                ({product.ratingCount.toLocaleString()} Ratings)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.discountedPrice}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.originalPrice}
              </span>
              <span className="text-green-600 font-semibold">
                {product.discount}% Off
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-[#ff9f00] text-white px-8 py-3 font-semibold rounded">
                ADD TO CART
              </button>
              <button
  onClick={() =>
    navigate("/address", {
      state: { product },
    })
  }
  className="bg-[#fb641b] text-white px-8 py-3 font-semibold rounded"
>
  BUY NOW
</button>

            </div>

            <p className="mt-6 text-sm text-gray-600">
              🚚 Free Delivery in 2 Days
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
