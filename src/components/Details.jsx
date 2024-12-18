import React from 'react'
import image from '../assets/third-section.jpg'

function Details() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#003366] text-white"
    id='services'
    >
      {/* Left Section */}
      <div className="md:w-1/2 px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-normal mb-10">
  We Give You Complete <br /> Control Of Your <br /> Distribution.
</h1>


        <div className="flex flex-col md:flex-row gap-8">
          {/* Warehouse Solutions */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Warehouse Solutions</h2>
            <p className="text-sm mb-8">
              We use a hub and spoke distribution platform covering Oman with our
              Head Office and main stores located in Muscat.
            </p>
            <a
              href="#"
              className="text-[#00a6e5] font-medium uppercase hover:underline"
            >
              Read More
            </a>
          </div>

          {/* Logistics Solutions */}
          <div className="md:border-l md:pl-6">

            <h2 className="text-xl font-semibold mb-2">Logistics Solutions</h2>
            <p className="text-sm mb-8">
              We use a hub and spoke distribution platform covering Oman with our
              Head Office and main stores located in Muscat.
            </p>
            <a
              href="#"
              className="text-[#00a6e5] font-medium uppercase hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative h-[450px]">
        <img
          src={image} 
          alt="Warehouse Worker"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Details