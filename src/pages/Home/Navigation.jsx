// src/pages/Home/Navigation.jsx
import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-[#fdf7f1] text-[#4a372f] shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">Pet Connect</div>
      <div className="space-x-6 text-md font-medium">
        <a href="/" className="text-[#4a372f] hover:text-[#bb6939]">Home</a>
        <a href="#community" className="text-[#4a372f] hover:text-[#bb6939]">Community</a>
        <a href="/news" className="text-[#4a372f] hover:text-[#bb6939]">News</a>
        <a href="#footer" className="text-[#4a372f] hover:text-[#bb6939]">Contact Us</a>
      </div>
    </nav>
  );
}
