import React from 'react';
import img1 from "../assets/news-img-1.png"
import img2 from "../assets/news-img-2.png"
import img3 from "../assets/news-img-3.png"

const FeaturedNews = () => {
  const newsItems = [
    {
      image: img1,
      title: 'The Art of Sourcing: How We Find the Freshest Ingredients for You',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      image: img2,
      title: 'Food Safety Matters: Our Rigorous Standards for Quality Assurance',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      image: img3,
      title: 'Healthy Eating Made Easy: Tips for a Balanced Diet with Our Products',
      date: 'September 20, 2023',
      link: '#',
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50"
    id='news'
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-custom-nave-blue mb-8 md:mb-14 mt-4">
        Featured Assarain{" "}
        <span className="relative inline-block">
          News
          <span className="absolute bottom-0 -mb-4 -left-36 transform -translate-x-1/2 w-14 h-[3px] md:w-24 md:h-[4px] bg-blue-500"></span>
        </span>
      </h2>
       
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:w-[80%] lg:w-[65%] mx-auto z-10">
        We offer attractive prospects for fresh graduates as well as for experienced professionals to be part
          of a fast-growing, progressive organization. You will have the opportunity to work with our
          multinational business partners and gain the opportunity to work with some of the best brands in the
          world and gain the latest know-how in the FMCG business.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-blue-600 text-sm font-semibold mb-2">Insights</h3>
              <h4 className="text-custom-nave-blue text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm mb-4">{item.date}</p>
              <a
                href={item.link}
                className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;