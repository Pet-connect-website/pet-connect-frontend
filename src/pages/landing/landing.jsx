import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CoreFeatures from './CoreFeatures';
import TestimonialsSection from './TestimonialsSection';
import JoinCommunitySection from './JoinCommunitysection';
import Footer from './Footer';

// Main App component
const Landing = () => {
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
