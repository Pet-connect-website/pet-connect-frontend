import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TestimonialCard = ({ quote, name, role, quoteIcon }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          observer.unobserve(ref.current); // Only animate once
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
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: 'easeOut' },
        },
      }}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }}
      className="bg-white p-8 text-center rounded-3xl shadow-md transition duration-1000"
    >
      <img
        src={quoteIcon}
        alt="Quote icon"
        className="w-12 h-auto mx-auto mb-4"
      />
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{role}</p>
    </motion.article>
  );
};

export default TestimonialCard;
