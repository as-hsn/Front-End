import React from "react";
import HeroImage from "../assets/hero-image.jpg";
import CartoonImage from "../assets/cartoon-image.png";
import playButton from "../assets/play-button.png";
import mobileButton from "../assets/mobile-play-button.png";

const ResponsiveHero = () => {
  return (
    <div
      className="relative w-full h-[650px] bg-cover bg-center"
      id="home"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Transparent Overlay for ALL Screens */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative flex items-start h-full w-full px-6 md:px-12 lg:px-24">
        {/* Big and Medium Screen Content */}
        <div className="hidden md:block bg-white p-6 md:p-8 w-full md:w-[450px] lg:w-[530px] lg:h-[373px] mt-12 md:mt-24 md:h-[373px] shadow-lg">
          {/* Header */}
          <h2 className="text-blue-500 mt-8 text-lg md:text-xl font-semibold">
            Assarain Food Products L.L.C.
          </h2>

          {/* Title */}
          <h1 className="text-gray-800 font-semibold text-2xl md:text-3xl lg:text-4xl mt-3 leading-tight">
            Oman Best Food Distributor <br />
            Natural, Organic, Specialty, <br />
            And Fresh.
          </h1>

          {/* Button */}
          <button className="mt-6 bg-custom-dark-blue text-white px-6 py-3 font-semibold rounded hover:bg-blue-600 transition duration-300">
            REQUEST A QUOTE
          </button>
        </div>

        <div className="relative bg-custom-blue bg-opacity-50 p-6 md:p-8 w-full md:w-[200px] lg:w-[200px] mt-12 md:mt-24 shadow-lg border border-blue-600 hidden md:block">
          {/* Large Image */}
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={CartoonImage}
              alt="Description"
              className="w-32 h-auto mt-10"
            />

            {/* Smaller Image centered on top */}
            <img
              src={playButton} // Replace with the second image path
              alt="Description"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-auto lg:-mt-[34%] -ml-4 md:-mt-[34%]" // Adjust size and positioning
            />
          </div>

          {/* Description */}
          <p className="text-left mt-4 text-white">
            Video of a Warehouse How Our Distribution Process Work…
          </p>

          <a
            href="#"
            className="text-custom-dark-blue font-semibold text-lg hover:text-gray-600 underline decoration-white"
          >
            Read More
          </a>
        </div>

        {/* Small Screen Transparent Blue Background Content */}
        <div className="block md:hidden absolute inset-0 bg-custom-nave-blue bg-opacity-60"></div>
        <div className="block md:hidden relative w-full mt-72 px-4">
          {/* Header */}
          <h2 className="text-white text-lg font-semibold">
            Assarain Food Products L.L.C.
          </h2>

          {/* Title */}
          <h1 className="text-white font-semibold text-3xl mt-3 leading-tight">
            Oman Best Food <br />
            Distributor Natural, <br />
            Organic, Specialty, And Fresh.
          </h1>

          {/* Button */}
          <button className="mt-6 bg-custom-light-blue text-white px-6 py-3 font-medium rounded hover:bg-blue-50 transition duration-300">
            REQUEST A QUOTE
          </button>

          {/* Video Section */}

          <div className="relative mt-8">
  <p className="text-white text-left flex items-center">
    <img
      src={mobileButton}
      alt="Video"
      className="w-4 h-full object-cover mr-2" // Add margin to space the image from the text
    />
    Video of a Warehouse How Our Distribution Process Work…
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;
