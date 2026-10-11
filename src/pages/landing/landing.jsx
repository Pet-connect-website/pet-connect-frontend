import React, { useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CoreFeatures from './CoreFeatures';
import TestimonialsSection from './TestimonialsSection';
import JoinCommunitySection from './JoinCommunitysection';
import Footer from './Footer';

// Main App component
const Landing = () => {
  useEffect(() => {
    const handleScroll = () => {
      var cards = document.querySelectorAll('.Card');
      cards.forEach(card => {
        var position = card.getBoundingClientRect();
        // Checking if the element is in the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          card.style.animation = 'fadeIn 2s ease-out forwards, filling 10s ease-in-out infinite';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-inter bg-[#ffffff] text-gray-800 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* What is Pet Connect? Section */}
        <AboutSection />

        {/* Core Features Section */}
        <CoreFeatures />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Join the PetConnect Community Section */}
        <JoinCommunitySection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Landing;
