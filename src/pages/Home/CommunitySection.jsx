import React from 'react';
import niroshaImg from '../../assets/nirosha.png';
import spcaImg from '../../assets/kandy-spca.png';
import isuruImg from '../../assets/isuru.png';

export default function CommunitySection() {
  return (
    <section id="community" className="py-10 px-4 text-center bg-[#d5c8bb]">
      <h2 className="text-3xl font-bold mb-6">Community Engagement Section</h2>
      <div className="bg-[#f7eeea] max-w-3xl mx-auto p-6 rounded-3xl shadow-md text-left space-y-6">
        {/* Entry 1 */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center w-24">
            <img src={niroshaImg} className="w-12 h-12 rounded-full" alt="Nirosha" />
            <span className="text-xs font-semibold mt-2 lowercase">nirosha</span>
          </div>
          <p className="font-semibold flex-1">What’s the best food for senior cats?</p>
        </div>
        {/* Entry 2 */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center w-24">
            <img src={spcaImg} className="w-12 h-12 rounded-full" alt="Kandy SPCA" />
            <span className="text-xs font-semibold mt-2 lowercase">kandy spca</span>
          </div>
          <p className="font-semibold flex-1">Free vaccinations this weekend</p>
        </div>
        {/* Entry 3 */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center w-24">
            <img src={isuruImg} className="w-12 h-12 rounded-full" alt="Isuru" />
            <span className="text-xs font-semibold mt-2 lowercase">isuru</span>
          </div>
          <p className="font-semibold flex-1">We adopted Max from PetConnect – here’s our story</p>
        </div>
        {/* Button */}
        <div className="text-center mt-4">
          <a href="/commwall">
            <button className="bg-[#4b2f25] text-white px-4 py-2 rounded">Visit wall</button>
          </a>
          <p className="mt-2">Click here to visit wall and start discussion</p>
        </div>
      </div>
    </section>
  );
}
