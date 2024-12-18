import React from 'react';
import svg1 from '../assets/contact-form-svg-1.png'
import svg2 from '../assets/contact-form-svg-2.png'
import svg3 from '../assets/contact-form-svg-3.png'

const ContactForm = () => {
  return (
    <section className="bg-blue-50 py-12 px-4"
    
    >
      <h2 id='contact' className="text-center text-3xl md:text-[2.6rem] font-medium text-custom-nave-blue mb-8 md:mb-14 mt-4">
        Call Us or Fill{" "}
        <span className="relative inline-block">
          the Form
          <span className="absolute bottom-0 -mb-4 -left-8 transform -translate-x-1/2 w-14 h-[3px] md:w-18 md:h-[4px] bg-blue-500"></span>
        </span>
      </h2>
      <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-6 md:w-[80%] lg:w-[65%] mx-auto z-10">
      Get in touch with us easily. Whether you have questions, feedback, or inquiries, we're here to assist you. Contact our team through the provided methods, and we'll respond promptly.
          </p>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Information Section */}
        <div className="w-full lg:w-1/3 space-y-8 mt-20">
          {/* Contact Number */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded">
              <img src={svg1} alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">+968 1234 5678</h3>
              <p className="text-gray-600">Don't hesitate to contact us!</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded">
            <img src={svg2} alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Working Time</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 - 19:00 / Closed on Weekends</p>
            </div>
          </div>

          {/* Company Headquarters */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded">
            <img src={svg3} alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Company Headquarters</h3>
              <p className="text-gray-600">123 Main Street, Muscat, Oman</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-2/3 p-8"
        id='suppliers'
        
        >

          {/* Radio Buttons */}
          <div id='retailers' className="flex items-left justify-start space-x-4 mb-6">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                name="userType"
                value="supplier"
                className="text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span>I am a Supplier</span>
            </label>
            <label id='location' className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                name="userType"
                value="retailer"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>I am a Retailer</span>
            </label>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3  bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Address and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3  bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3  bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3  bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="items-left justify-start">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-custom-nave-blue text-white font-normal rounded-md hover:bg-blue-700 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;