import React from 'react';
import niroshaImg from '../../assets/nirosha.png';
import spcaImg from '../../assets/kandy-spca.png';
import isuruImg from '../../assets/isuru.png';

export default function CommunitySection() {
  return (
    <section id="community" className="py-10 px-4 text-center bg-[#d5c8bb]">
      <h2 className="text-3xl font-bold mb-6">Community Engagement Section</h2>
      <div className="bg-[#f7eeea] max-w-3xl mx-auto p-6 rounded-3xl shadow-md text-left space-y-4">
        <div className="flex items-center gap-3">
          <img src={niroshaImg} className="w-10 h-10 rounded-full" alt="Nirosha" />
          <p className="font-semibold">What’s the best food for senior cats?</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={spcaImg} className="w-10 h-10 rounded-full" alt="Kandy SPCA" />
          <p className="font-semibold">Free vaccinations this weekend</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={isuruImg} className="w-10 h-10 rounded-full" alt="Isuru" />
          <p className="font-semibold">We adopted Max from PetConnect – here’s our story</p>
        </div>
        <div className="text-center mt-4">
          <button className="bg-[#4b2f25] text-white px-4 py-2 rounded">Visit wall</button>
          <p className="mt-2">Click here to visit wall and start discussion</p>
        </div>
      </div>
    </section>
  );
}
