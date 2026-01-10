import React from "react";
import banner from "../assets/banner.jpg";

const HeroBanner = () => {
  return (
    <section className="bg-white">
      <img
        src={banner}
        alt="Christmas Sale"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default HeroBanner;
