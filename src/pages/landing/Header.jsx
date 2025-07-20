import React, { useState } from 'react';

function Header() {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24 ">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/36538bcab2b4a50bc90f1192648c07fa35297c2a?placeholderIfAbsent=true"
            alt="PetConnect Logo"
            className="h-[60px] w-[60px] md:h-[150px] md:w-[150px]"
          />
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#core-features"
            className="text-gray-600 hover:text-[#5B4033] transition duration-300 font-medium hover:border-b-2 hover:border-[#B27E57]"
          >
            CORE FEATURES
          </a>
          <a
            href="#about-us"
            className="text-gray-600 hover:text-[#5B4033] transition duration-300 font-medium  hover:border-b-2 hover:border-[#B27E57]"
          >
            ABOUT US
          </a>
          <a
            href="#contact-us"
            className="text-gray-600 hover:text-[#5B4033] transition duration-300 font-medium  hover:border-b-2 hover:border-[#B27E57]"
          >
            CONTACT US
          </a>
          <button className="border border-[#5B4033] text-[#5B4033] px-4 py-2 text-sm rounded-full font-semibold transition duration-300 hover:text-white hover:bg-gradient-to-t hover:from-[#5B4033] hover:to-[#B27E57] hover:shadow-lg">
            SIGN IN
          </button>
          <button className="bg-gradient-to-t from-[#5B4033] to-[#B27E57] text-white px-4 py-2 text-sm rounded-full font-semibold hover:from-[#33231b] hover:to-[#8b6344] transition duration-300 hover:shadow-lg">
            REGISTER
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            aria-label="Open menu"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div id="mobile-menu" className="hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center space-y-4 py-6">
            <a href="#core-features" className="text-gray-600 hover:text-[#E67E22] transition duration-300 font-medium hover:border-b-2 hover:border-[#E67E22]">CORE FEATURES</a>
            <a href="#about-us" className="text-gray-600 hover:text-[#E67E22] transition duration-300 font-medium hover:border-b-2 hover:border-[#E67E22]">ABOUT US</a>
            <a href="#contact-us" className="text-gray-600 hover:text-[#E67E22] transition duration-300 font-medium hover:border-b-2 hover:border-[#E67E22]">CONTACT US</a>
            <button className="border border-[#E67E22] text-[#E67E22] px-4 py-2 text-sm rounded-full font-semibold hover:bg-[#E67E22] hover:text-white transition duration-300 w-4/5">
              SIGN IN
            </button>
            <button className="bg-[#E67E22] text-white px-4 py-2 text-sm rounded-full font-semibold hover:bg-[#D35400] transition duration-300 w-4/5">
              REGISTER
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
