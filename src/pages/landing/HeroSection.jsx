import React from 'react';
import bgPattern from '../../assets/bgw&b.png';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative bg-[#ffffff] py-16 md:py-24 lg:py-10 overflow-hidden">
      {/* Background pattern */}
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
        {/* LEFT TEXT SECTION */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Taking care<br />
            for your <span className="bg-gradient-to-r from-[#B27E57] to-[#C0A086] bg-clip-text text-transparent">Smart</span><br />
            pet !
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0">
            Human–canine bonding is the relationship between dogs and humans.
          </p>
          <a
            style={{
              boxShadow:
                'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            }}
            href="#"
            className="bg-gradient-to-t from-[#5B4033] to-[#B27E57] hover:from-[#33231b] hover:to-[#8b6344] hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold transition duration-300 inline-block hover:scale-105"
          >
            Explore more &gt;
          </a>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/707dbd6cf06b223f79134f54661275942534d203?placeholderIfAbsent=true"
            alt="Shape Background"
            className="absolute w-fit h-full rounded-3xl z-10"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7ba535aa1c4ffa4ef4e0a52a077a421c443e99f6?placeholderIfAbsent=true"
            alt="Pet care"
            className="relative w-full max-w-md h-auto rounded-3xl z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
