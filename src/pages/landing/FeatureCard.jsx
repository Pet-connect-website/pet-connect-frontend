import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function FeatureCard({ title, description, icon }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          observer.unobserve(ref.current); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: 'easeOut',
          },
        },
      }}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }}
      className="Card p-8 text-center relative overflow-hidden rounded-3xl transition duration-300 bg-[#cec3b87c] w-full"
    >
      {/* Paw Print Background */}
      <div
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23E0E0E0" opacity="0.3"><path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-3 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm6 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM12 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px',
          opacity: 0.1,
        }}
      ></div>

      <img
        src={icon}
        alt={`${title} icon`}
        className="w-16 h-16 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <a
        href="#"
        className="border border-[#5B4033] text-[#5B4033] px-4 py-2 text-sm rounded-full font-semibold transition duration-300 hover:text-white hover:bg-gradient-to-t hover:from-[#5B4033] hover:to-[#B27E57] hover:shadow-lg"
      >
        Explore more &gt;
      </a>
    </motion.article>
  );
}

export default FeatureCard;
