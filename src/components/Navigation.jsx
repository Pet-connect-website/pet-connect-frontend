import React from 'react';
import logo from '../assets/logo.png';

export default function Navigation() {
  return (
    <nav 
     style={{
      boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
     }}
     className="bg-[#f4e8dc] text-[#4a372f] shadow-md py-1 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <a href="/">
        <img src={logo} alt="Pet Connect Logo" className="h-20 w-auto" />
      </a>
      <div className="space-x-6 text-md font-medium">
        <a href="/" className="text-[#4a372f] hover:text-[#bb6939]">Home</a>
        <a href="/commwall" className="text-[#4a372f] hover:text-[#bb6939]">Community</a>
        <a href="#footer" className="text-[#4a372f] hover:text-[#bb6939]">Contact Us</a>
        <a href="/news" className="text-[#4a372f] hover:text-[#bb6939]">News</a>
      </div>
    </nav>
  );
}
