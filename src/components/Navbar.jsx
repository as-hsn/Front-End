import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
       
        <div>
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="h-12"
            />
          </a>
        </div>

      
        <div className="flex items-center space-x-6">
        
          <div className="hidden md:flex items-center space-x-6">
            <a href="#suppliers" className="text-gray-500 hover:text-blue-500">
              For Suppliers
            </a>
            <a href="#retailers" className="text-gray-500 hover:text-blue-500">
              For Retailer
            </a>
            <a href="#location" className="text-gray-500 hover:text-blue-500">
              Location
            </a>
            <div className="relative flex flex-col items-center">
              <a
                href="#quote"
                className="text-blue-500 border border-blue-500 rounded-md px-4 py-2 font-semibold hover:bg-blue-500 hover:text-white"
              >
                REQUEST A QUOTE
              </a>
              
              {/* Search Icon Below */}
              <button className="absolute bottom-[-50px] text-gray-500 hover:text-blue-500">
                <GoSearch size={20} />
              </button>
            </div>
          </div>
          {/* Mobile View: Search Icon and Hamburger Menu */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="text-gray-500 hover:text-blue-500">
              <GoSearch size={24} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-1" />

      {/* Center Links: Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <a
            href="#home"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            About Us
          </a>
          <a
            href="#services"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            What We Do
          </a>
          <a
            href="#brands"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            Brands
          </a>
          <a
            href="#news"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            News
          </a>
          <a
            href="#careers"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            Careers
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Center Links - Hidden on Mobile Screens */}
      <div className="hidden md:flex space-x-8 ml-5">
        <a
          href="#home"
          className="text-blue-500 border-b-2 border-blue-500 pb-2 font-medium"
        >
          Home
        </a>
        <a href="#about-us" className="text-gray-500 hover:text-blue-500 pb-2">
          About Us
        </a>
        <a href="#services" className="text-gray-500 hover:text-blue-500 pb-2">
          What We Do
        </a>
        <a href="#brands" className="text-gray-500 hover:text-blue-500 pb-2">
          Brands
        </a>
        <a href="#news" className="text-gray-500 hover:text-blue-500 pb-2">
          News
        </a>
        <a href="#careers" className="text-gray-500 hover:text-blue-500 pb-2">
          Careers
        </a>
        <a href="#contact" className="text-gray-500 hover:text-blue-500 pb-2">
          Contact Us
        </a>
      </div>
    </nav>
  );
}