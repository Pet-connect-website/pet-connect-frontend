import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for scroll-reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const JoinCommunitySection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Join the PetConnect Community
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0">
            Whether you're a pet lover, a rescuer, or just someone who cares—PetConnect welcomes you. Make a difference in the lives of animals and the people who love them.
          </p>
          <a
            href="#"
            style={{
              boxShadow:
                'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            }}
            className="bg-gradient-to-t from-[#5B4033] to-[#B27E57] hover:from-[#33231b] hover:to-[#8b6344] hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4A3428] hover:scale-105"
          >
            Join us
          </a>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d8bc45d7fd36172f1b826e4e270031ed1582309d?placeholderIfAbsent=true"
            alt="Community Pets"
            className="w-full max-w-md h-auto rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
