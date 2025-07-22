import React from 'react';
import Navigation from './Navigation';
import HeroBanner from './HeroBanner';
import AdoptSection from './AdoptSection';
import LatestPosts from './LatestPosts';
import CommunitySection from './CommunitySection';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';

export default function Home({ username }) {
  return (
    <>
      <Navigation />
      <HeroBanner username={username} />
      <AdoptSection />
      <LatestPosts />
      <CommunitySection />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
