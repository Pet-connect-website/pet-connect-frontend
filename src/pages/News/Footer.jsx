import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#4b2f25] text-white py-6 px-4 text-center text-sm">
      <p className="mb-2">(616)-459-8622</p>
      <p className="mb-2">2125 Howard Street, Grand Rapids, MI, Michigan</p>
      <div className="flex justify-center gap-6 my-4">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Instagram</a>
      </div>
      <p>© All rights reserved & design with love by Bhumi</p>
    </footer>
  );
}
