import React from 'react';

function AboutSection() {
  return (
     <section id="about-us" className="bg-[#CEC3B8] py-16 md:py-24 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          {/* Image - Replaced with provided image src */}
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/8faa99d047b1c88f58240f5ea117c8e1b7be02f2?placeholderIfAbsent=true" alt="Pet Connect community" className="w-full max-w-md h-auto rounded-3xl"/>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">What is Pet Connect?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            PetConnect is a community-driven web platform designed to support pet care, animal welfare, and social responsibility. Whether you're a pet owner, volunteer, or simply a kind soul who wants to help animals in need—PetConnect is your space.
          </p>
          <a href="#" className="bg-gradient-to-t from-[#5B4033] to-[#B27E57]   hover:from-[#33231b] hover:to-[#8b6344] hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4A3428] transition duration-300 inline-block">Explore more &gt;</a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
