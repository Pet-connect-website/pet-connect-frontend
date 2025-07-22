import React from 'react';
import logo from '../../assets/logo.png';

export default function Navigation() {
  return (
    <nav className="bg-[#CEC3B8] text-[#4a372f] shadow-md py-4 px-6 flex justify-between items-center">
      <a href="/">
        <img src={logo} alt="Pet Connect Logo" className="h-20 w-auto" />
      </a>
      <div className="space-x-6 text-md font-medium">
        <a href="/" className="text-[#4a372f] hover:text-[#bb6939]">Home</a>
        <a href="#community" className="text-[#4a372f] hover:text-[#bb6939]">Community</a>
        <a href="#footer" className="text-[#4a372f] hover:text-[#bb6939]">Contact Us</a>
        <a href="/news" className="text-[#4a372f] hover:text-[#bb6939]">News</a>
      </div>
    </nav>
  );
}
