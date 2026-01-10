import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../mockData";
import { Star, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [emblaRef] = useEmblaCarousel({ loop: true });

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  const images = [product.image, product.image, product.image];

  return (
    <div className="bg-[#f1f3f6] min-h-screen pb-[70px]">
      {/* 🔵 TOP BAR */}
      <div className="sticky top-0 z-50 bg-[#2874f0] flex items-center gap-3 px-3 py-2 text-white">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <span className="font-bold">Flipkart</span>
      </div>

      {/* 🖼 IMAGE CAROUSEL */}
      <div className="bg-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="min-w-full flex justify-center p-4">
                <img
                  src={img}
                  alt=""
                  className="h-[260px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-1 pb-2">
          {images.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-gray-400"
            />
          ))}
        </div>

        <p className="text-center text-sm text-red-600 font-semibold">
          Only 4 Left in Stock
        </p>
      </div>

      {/* 📦 PRODUCT INFO */}
      <div className="bg-white mt-2 p-3">
        <h1 className="text-sm font-semibold leading-snug">
          {product.name}
        </h1>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">
          <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-[2px] text-xs rounded">
            {product.rating}
            <Star size={12} fill="white" />
          </span>
          <span className="text-xs text-gray-500">
            {product.ratingCount} Ratings
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold">
            ₹{product.discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.originalPrice}
          </span>
          <span className="text-green-600 text-sm font-semibold">
            {product.discount}% off
          </span>
        </div>

        {/* OFFER TIMER */}
        <div className="mt-3 border rounded p-2 text-sm">
          ⏰ Offer ends in <span className="text-orange-600 font-semibold">15 min</span>
        </div>
      </div>

      {/* 📊 EXTRA INFO */}
      <div className="bg-white mt-2 divide-y">
        <div className="p-3 text-sm">🚀 5000+ sold in last 7 days</div>
        <div className="p-3 grid grid-cols-3 text-xs text-center gap-2">
          <div>🔁 7 Days Replacement</div>
          <div>🚫 No COD</div>
          <div>⭐ Plus Assured</div>
        </div>
        <div className="p-3 text-sm">🛡 1 Year Manufacturer Warranty</div>
      </div>

      {/* 🟠 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex h-[60px]">
        <button className="w-1/2 font-semibold">
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/address", { state: { product } })}
          className="w-1/2 bg-[#fb641b] text-white font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
