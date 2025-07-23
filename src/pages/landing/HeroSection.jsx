import React from 'react';
import bgPattern from '../../assets/bgw&b.png';
function HeroSection() {
  return (
    <section 
      className="relative bg-[#ffffff] py-16 md:py-24 lg:py-10 overflow-hidden "
    >
      {/* Background pattern with opacity */}
      <div
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Taking care<br/>
            for your <span className="bg-gradient-to-r from-[#B27E57] to-[#C0A086] bg-clip-text text-transparent">Smart</span><br/>
            pet !
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0">
            Human–canine bonding is the relationship between dogs and humans.
          </p>
          <a href="#" className="bg-gradient-to-t from-[#5B4033] to-[#B27E57]   hover:from-[#33231b] hover:to-[#8b6344] hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4A3428]  ">Explore more &gt;</a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          {/* Background shape - Replaced with provided image src */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/707dbd6cf06b223f79134f54661275942534d203?placeholderIfAbsent=true"
            alt="Shape Background"
            className="absolute  w-fit h-full  rounded-3xl z-10 "
          />
          {/* Foreground image - Replaced with provided image src */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7ba535aa1c4ffa4ef4e0a52a077a421c443e99f6?placeholderIfAbsent=true"
            alt="Pet care"
            className="relative w-full max-w-md h-auto rounded-3xl  z-0"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
