import React from "react";
import image1 from '../assets/about-us-1.png'

const AboutUs = () => {
  return (
    <>
    <div className="bg-white text-gray-700 py-12 px-6 md:px-20"
    id="about-us"
    >
      {/* Header */}
      <div className="text-center mb-12">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-custom-nave-blue mb-8 md:mb-14 mt-4">
        About{" "}
        <span className="relative inline-block">
          Us
          <span className="absolute bottom-0 -mb-2 -left-8 transform -translate-x-1/2 w-14 h-[3px] md:w-24 md:h-[4px] bg-blue-500"></span>
        </span>
      </h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-600">
          In acknowledgement of the basic premise that good food leads to good
          health and well-being, Assarain Food Products LLC, occupies a place of
          pride among the market leaders in the Omani industry of Fast Moving
          Consumer Goods (FMCG), founded on a reputation built over four decades
          of excellence in food products and operations. Setting high benchmarks
          for other local competitors, we are the first FMCG sales and
          distribution company to acquire ISO 22000:2005 Certification for Food
          Safety Management Systems within the Sultanate.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="text-left pt-6">
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">200+</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">Global Brands</h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-left border-t-2 border-gray-200 pt-6 lg:border-t-0">
          
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">20+</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">Warehouses</h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-left border-t-2 border-gray-200 pt-6 lg:border-t-0">
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">85,000+</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">
            Pallet Capacity
          </h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-left border-t-2 border-gray-200 pt-6">
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">300+</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">Own Vehicles</h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>

        {/* Card 5 */}
        <div className="text-left border-t-2 border-gray-200 pt-6">
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">1000+</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">
            Skilled Employees
          </h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>

        {/* Card 6 */}
        <div className="text-left border-t-2 border-gray-200 pt-6">
          <h3 className="text-[#00a6e5] text-5xl font-normal mb-2">Omni</h3>
          <h4 className="text-xl font-medium text-custom-dark-blue mb-1">
            Channel Coverage
          </h4>
          <p className="text-sm text-gray-600">
            We use a hub and spoke distribution platform covering Oman with our
            Head Office and main stores located in Muscat.
          </p>
        </div>
      </div>
    </div>


    <div className="bg-custom-nave-blue sm:h-[73rem] lg:h-[42rem] text-white">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Title and Quote Section */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-snug">
            Assarain Food Products L.L.C.
          </h1>
          <p className="text-lg italic leading-relaxed">
            “Food, in the end, in our own tradition, is something holy. It's not
            about nutrients and calories. <br /> It's about sharing. It's about
            honesty. It's about identity.”
          </p>
          <p className="text-lg font-semibold mt-2 text-custom-blue">
            Louise Fresco
          </p>
        </div>

        {/* Text and Image Container */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="md:w-2/3 md:pr-8 leading-relaxed">
          <p className="text-left text-base md:text-base mb-4 md:w-[87%]">

            Our commitment to maintaining high standards, delivering superior quality food products and services and the unwavering trust placed in us by our ever-increasing loyal customer base reflects our desire and effort to provide only the best in handling, storage, logistics and distribution of a wide range of premium food products. Since our inception in 1975, we have grown from strength to strength through diversification of our operations, new brand acquisition, and participation of major tenders.
            </p>
            <p className="text-left text-base md:text-base mb-4 md:w-[87%]">
            At Assarain Food Products, we are importers, distributors and suppliers of a wide variety of food products and our portfolio includes frozen food products, poultry, meat, French fries, further processed products, etc. We have an established presence as a market leader, offering a unique basket of products both suitable for B2B (business to business) and B2C (business to consumer) in the food and consumer products market. We have the unique advantage of providing a full range of branded and commodity products that are suitable to our customers and this is what makes us stand apart from our competitors, who focus only on certain product categories.​
            </p>

          </div>

          {/* Image on the Right */}
          <div className=" md:block lg:w-1/3 h-96">
            <img
              src={image1}
              alt="Fruit Vendor"
              className="h-full object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;