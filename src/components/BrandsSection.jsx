import React from "react";
import logo1 from "../assets/brands/brand1.png";
import logo2 from "../assets/brands/brand2.png";
import logo3 from "../assets/brands/brand3.png";
import logo4 from "../assets/brands/brand4.png";
import logo5 from "../assets/brands/brand5.png";
import logo6 from "../assets/brands/brand6.png";
import logo7 from "../assets/brands/brand7.png";
import logo8 from "../assets/brands/brand8.png";
import logo9 from "../assets/brands/brand9.png";
import logo10 from "../assets/brands/brand10.png";
import logo11 from "../assets/brands/brand11.png";
import logo12 from "../assets/brands/brand12.png";
import logo13 from "../assets/brands/brand13.png";

const brands = [
  { name: "Freshly Foods", logo: logo1 },
  { name: "Watties", logo: logo2 },
  { name: "Lutosa", logo: logo3 },
  { name: "Happy Cow", logo: logo4 },
  { name: "Sutas", logo: logo5 },
  { name: "Fonterra", logo: logo6 },
  { name: "Unilever", logo: logo7 },
  { name: "Leprino Foods", logo: logo8 },
  { name: "Gourmet Foods", logo: logo9 },
  { name: "Minstrel", logo: logo10 },
  { name: "Campagna", logo: logo11 },
  { name: "Maestro Foods", logo: logo12 },
  { name: "Olam", logo: logo13 },
];

const BrandsSection = () => {
  return (
    <div className="px-4 py-8 bg-gray-50"
    
    id="brands">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-custom-nave-blue mb-8 md:mb-14 mt-4">
        Our{" "}
        <span className="relative inline-block">
          Brands
          <span className="absolute bottom-0 -mb-2 left-0 transform -translate-x-1/2 w-14 h-[3px] md:w-24 md:h-[4px] bg-blue-500"></span>
        </span>
      </h2>

      <p className="text-center text-gray-600 mb-8 max-w-screen-md mx-auto leading-relaxed sm:leading-snug sm:text-base md:text-lg">
        Our way forward strategy is to work with more international brands and
        leverage our sales expertise and marketing skills in the market for the
        development of the brand & gain market share. Below are some of our
        brand partners in the Retail & Foodservices sectors.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
        {brands.map((brand, index) => (
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-auto object-contain"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
