import React from "react";
import videoFile from "../assets/video/cargo-video.mp4"

const CareerPage = () => {
  return (
    <div className="bg-blue-100 bg-opacity-70"
  
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 z-10">
        {/* Video Section */}
        <div className="relative w-full overflow-hidden mb-10">
          <video
          
            src={videoFile}
            poster="https://image.made-in-china.com/226f3j00mCcYofIGhAgz/Cheapest-Shipping-Company-Air-Cargo-Air-Freight-to-Karachi-Pakistan.webp" 
            className="w-full h-auto shadow-lg"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div   id="careers" className="text-center z-10">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-custom-nave-blue mb-8 md:mb-14 mt-4">
        Join Our{" "}
        <span className="relative inline-block">
          Team
          <span className="absolute bottom-0 -mb-4 -left-8 transform -translate-x-1/2 w-14 h-[3px] md:w-24 md:h-[4px] bg-blue-500"></span>
        </span>
      </h2>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:w-[80%] lg:w-[65%] mx-auto z-10">
            We offer attractive prospects for fresh graduates as well as for
            experienced professionals to be part of a fast-growing, progressive 
            organization. You will have the opportunity to work with our
            multinational business partners and gain the opportunity to work
            with some of the best brands in the world and gain the latest
            know-how in the FMCG business.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 md:w-[80%] lg:w-[65%] mx-auto z-10">
            We are looking to recruit talented individuals to join our
            workforce. If you are highly motivated, goal-oriented and thrive on
            challenges, do get in touch with us.
          </p>

          {/* Apply Now Button */}
          <a
            href="#"
            className="inline-block bg-custom-nave-blue text-white px-6 py-3 font-medium rounded z-10 hover:bg-blue-800 transition duration-300"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;