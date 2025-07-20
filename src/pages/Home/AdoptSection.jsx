import React from 'react';
import petsGroup from '../../assets/petsGroup.png';

export default function AdoptSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-10 bg-[#e2e2e2] px-6">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Adopt a Pet</h2>
        <p className="font-medium mb-6">
          Find your perfect companion – whether you’re giving a home to a rescued pet or buying from a verified owner
        </p>
        <button className="bg-[#4b2f25] text-white py-2 px-4 rounded">Adopt now</button>
      </div>
      <img src={petsGroup} alt="pets" className="w-56 mt-6 md:mt-0" />
    </section>
  );
}
