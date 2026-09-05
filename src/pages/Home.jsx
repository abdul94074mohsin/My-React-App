import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';

export default function Home({ onOpenAudit }) {
  return (
    <>
      <Hero onOpenAudit={onOpenAudit} />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
    </>
  );
}