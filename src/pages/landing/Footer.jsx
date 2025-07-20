import React from 'react';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-[#5B4033] text-gray-300 py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-8 w-full">
        {/* Contact Info */}
        <div className="mb-4 md:mb-0 flex-1 w-full">
          <p className="text-lg sm:text-xl font-bold text-white mb-2">PetConnect</p>
          <p className="text-sm mt-2">
            (616)-459-8622<br/>
            2125 Howard Street, Grand Rapids, MI Michigan
          </p>
          <p className="text-sm font-bold text-stone-300 mt-6">Follow on social</p>
          <div className="flex space-x-4 mt-2 justify-center md:justify-start">
            <a href="#" className="hover:text-white transition duration-300">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/728d40688c4e080a04144f9e1ef46bfc838c80e6?placeholderIfAbsent=true" alt="Social media icon" className="w-8 h-8 rounded-full"/>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/557a2913effbd5ad80ed2d5021911714e1ac461e?placeholderIfAbsent=true" alt="Social media icon" className="w-8 h-8 rounded-full"/>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end flex-1 max-w-lg w-full mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-right">Join us as NGO Volunteer</h2>
          <div className="w-full bg-white shadow-lg p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              placeholder="Type your email address here"
              className="w-full sm:flex-1 p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B27E57]"
            />
            <button className="bg-gradient-to-t from-[#5B4033] to-[#B27E57] text-white px-4 py-2 text-sm rounded-full font-semibold hover:from-[#33231b] hover:to-[#8b6344] transition duration-300 hover:shadow-lg">Submit now</button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 my-8"/>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © all rights reserved & design with love by bharat
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm text-stone-300">
          <a href="#services" className="hover:text-white transition duration-300">our services</a>
          <a href="#about-us" className="hover:text-white transition duration-300">About us</a>
          <a href="#shipping" className="hover:text-white transition duration-300">Shipping</a>
          <a href="#faq" className="hover:text-white transition duration-300">FAQ</a>
          <a href="#contact-us" className="hover:text-white transition duration-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
