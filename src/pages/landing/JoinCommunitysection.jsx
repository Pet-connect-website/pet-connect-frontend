import React from 'react';

// Join Community Section Component
const JoinCommunitySection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">Join the PetConnect Community</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0">
            Whether you're a pet lover, a rescuer, or just someone who cares—PetConnect welcomes you. Make a difference in the lives of animals and the people who love them.
          </p>
          <a href="#" className="bg-gradient-to-t from-[#5B4033] to-[#B27E57]   hover:from-[#33231b] hover:to-[#8b6344] hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4A3428]  ">Join us</a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Image - Replaced with provided image src */}
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/d8bc45d7fd36172f1b826e4e270031ed1582309d?placeholderIfAbsent=true" alt="Community Pets" className="w-full max-w-md h-auto rounded-3xl"/>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
