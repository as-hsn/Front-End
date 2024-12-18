import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-normal mb-4">
            Delivered on time with no hassle.
          </h3>
          {/* Social Icons */}
          <div className="flex mt-10 justify-center lg:justify-start space-x-6">
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="https://www.linkedin.com/in/hassan-arif-838b63268" aria-label="LinkedIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start space-y-4">
          <h3 className="lg:-ml-48 text-xl font-normal text-center lg:text-left">
            Keep Up To Date
          </h3>
          <div className="relative flex flex-col w-full lg:w-80">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-custom-nave-blue text-white placeholder-white border border-white lg:-ml-48 focus:outline-none focus:ring-2 focus:ring-blue"
            />

            {/* Button Container */}

            <button className="lg:absolute lg:bottom-0 lg:right-0 w-fit lg:w-auto bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition duration-300 sm:mt-4 sm:w-full mt-6 max-w-fit">
              SIGN ME UP!
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-300">
          <p>
            Copyright &copy; 2023 - Assarain Food Products L.L.C. Design &
            Developed by <span className="font-semibold">Hassan Arif</span>
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy
            </a>
            <span>/</span>
            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="#" className="hover:text-blue-400 transition">
              Site map
            </a>
            <span>/</span>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
