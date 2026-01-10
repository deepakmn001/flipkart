import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../mockData";
import { ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// ICONS
import returns from "../assets/return.png";
import nocost from "../assets/nocost.png";
import plusAssured from "../assets/assured.png";
import flipkarticon from "../assets/flipkart.png";
import flipkartLogo from "../assets/flipkart.png";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  if (!product) return null;

  const images = product.images || [product.image];

  return (
    <div className="bg-[#f1f3f6] min-h-screen pb-[56px]">

   


      {/* 🖼 IMAGE SLIDER */}
      <div className="bg-white">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center items-center py-[30px]"
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-[290px] h-[350px] object-contain"
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

        <p className="text-center text-[12px] text-[#212121] font-semibold pb-2">
          Only <span className="text-red-600">4</span> Left in Stock
        </p>
      </div>

      {/* 📦 PRODUCT TITLE */}
      <div className="bg-white mt-2 p-[12px]">
        <h1 className="text-[14px] leading-[20px] font-normal text-[#212121]">
          {product.name}
        </h1>

        {/* ASSURED */}
        <img
          src={plusAssured}
          alt="Flipkart Assured"
          className="h-[20px] mt-2"
        />

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[14px] font-bold text-green-600">
            {product.discount}% off
          </span>
          <span className="line-through text-gray-400 text-[14px]">
            ₹{product.originalPrice}
          </span>
          <span className="text-[20px] font-bold text-[#212121]">
            ₹{product.discountedPrice}
          </span>
        </div>
      </div>

      {/* ⏰ OFFER TIMER */}
      <div className="bg-white mt-2 p-[12px] text-[12px]">
        Offer ends in{" "}
        <span className="text-orange-600 font-semibold">
          16 min 19 sec
        </span>
      </div>

      {/* 📈 SOLD INFO */}
      <div className="bg-white mt-2 px-[12px] py-[10px] text-[12px] flex items-center gap-2">
        <img src={plusAssured} className="h-[18px]" />
        <span>5875+ Sold in Last 7 Days</span>
      </div>

      {/* 🔁 ICON ROW */}
      <div className="bg-white mt-2 grid grid-cols-3 text-[11px] text-center py-3">
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
      <div className="bg-white mt-2 p-[12px] text-[12px] flex items-center gap-2">
        <img src={flipkarticon} className="h-6" />
        <span>1 Year Manufacturer Warranty</span>
      </div>

      {/* 🟠 BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex h-[56px]">
        <button className="w-1/2 font-semibold text-[14px]">
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/address", { state: { product } })}
          className="w-1/2 bg-[#fb641b] text-white font-semibold text-[14px] active:scale-95"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
