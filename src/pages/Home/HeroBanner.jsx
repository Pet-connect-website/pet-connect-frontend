import React from 'react';
import heroBannerImg from '../../assets/HeroBanner.png';
import catDogImg from '../../assets/catDog.png';

export default function HeroBanner({ username = 'John' }) {
  return (
    <section className="bg-[#ded3ca] py-20 px-4 text-center relative overflow-hidden min-h-[400px]">
      {/* Left decorative image - now at bottom left */}
      <img
        src={catDogImg}
        alt="Decorative cat and dog"
        className="absolute left-0 bottom-0 w-1/4 max-w-xs h-auto opacity-20 pointer-events-none"
      />

      {/* Right side banner image */}
      <img
        src={heroBannerImg}
        alt="PetConnect banner"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 max-w-xs h-auto opacity-100 pointer-events-none"
      />

      {/* Centered content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
        <h1 className="text-4xl font-bold text-[#4b2f25] mb-4">
          Welcome back, <span className="text-black">{username}</span>!
        </h1>
        
        <p className="text-2xl relative z-20">
          Glad to see you again on <span className="font-bold text-orange-500">PetConnect</span>
        </p>
      </div>
    </section>
  );
}