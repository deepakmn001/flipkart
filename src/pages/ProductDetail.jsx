import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../mockData";
import { ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// ✅ ICON IMPORTS (src/assets se)
import returns from "../assets/return.png";        // 7 days replacement
import nocost from "../assets/nocost.png";        // No COD
import plusAssured from "../assets/assured.png";  // Flipkart Assured
import flipkarticon from "../assets/flipkart.png"; // Warranty icon / sold icon

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [emblaRef] = useEmblaCarousel({ loop: false });

  if (!product) return null;

  const images = product.images || [product.image];

  return (
    <div className="bg-[#f1f3f6] min-h-screen pb-[60px]">

      {/* 🔵 TOP BAR */}
      <div className="sticky top-0 z-50 bg-[#2874f0] flex items-center gap-3 px-3 py-2 text-white">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <span className="font-semibold">Flipkart</span>
      </div>

      {/* 🖼 IMAGE SLIDER */}
      <div className="bg-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center items-center py-4"
              >
                <img
                  src={img}
                  alt={product.name}
                  className="h-[240px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 pb-2">
          {images.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>

        <p className="text-center text-sm text-gray-800 font-semibold pb-2">
          Only <span className="text-red-600">4</span> Left in Stock
        </p>
      </div>

      {/* 📦 PRODUCT TITLE + ASSURED */}
      <div className="bg-white mt-2 px-3 py-3">
        <h1 className="text-sm font-medium leading-snug text-gray-900">
          {product.name}
        </h1>

        {/* ✅ FLIPKART ASSURED */}
        <img
          src={plusAssured}
          alt="Flipkart Assured"
          className="h-5 mt-2"
        />

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-green-600 font-bold text-sm">
            {product.discount}% off
          </span>
          <span className="line-through text-gray-400">
            ₹{product.originalPrice}
          </span>
          <span className="text-xl font-bold">
            ₹{product.discountedPrice}
          </span>
        </div>
      </div>

      {/* ⏰ OFFER TIMER */}
      <div className="bg-white mt-2 p-3 text-sm">
        ⏰ Offer ends in{" "}
        <span className="text-orange-600 font-semibold">
          16 min 19 sec
        </span>
      </div>

     {/* 📈 SOLD INFO + ASSURED */}
<div className="bg-white mt-2 p-3 text-sm flex items-center gap-2">
  <img
    src={plusAssured}
    alt="Flipkart Assured"
    className="h-5"
  />
  <span>5875+ Sold in Last 7 Days</span>
</div>


      {/* 🔁 ICON ROW */}
      <div className="bg-white mt-2 grid grid-cols-3 text-xs text-center py-3">
        <div>
          <img src={returns} className="h-6 mx-auto mb-1" />
          7 days Replacement
        </div>
        <div>
          <img src={nocost} className="h-6 mx-auto mb-1" />
          No Cash On Delivery
        </div>
        <div>
          <img src={plusAssured} className="h-6 mx-auto mb-1" />
          Plus (F-Assured)
        </div>
      </div>

      {/* 🛡 WARRANTY */}
      <div className="bg-white mt-2 p-3 text-sm flex items-center gap-2">
        <img src={flipkarticon} className="h-6" />
        <span>1 Year Manufacturer Warranty</span>
      </div>

      {/* 🟠 BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex h-[56px]">
        <button className="w-1/2 font-semibold">
          Add to Cart
        </button>
        <button className="w-1/2 bg-[#fb641b] text-white font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
