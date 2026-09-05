import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeWork from './components/HowWeWork';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FounderSection from './components/FounderSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const openAuditModal = () => setIsAuditOpen(true);
  const closeAuditModal = () => setIsAuditOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <Navbar onOpenAudit={openAuditModal} />
      <main>
        <Hero onOpenAudit={openAuditModal} />
        <TrustStats />
        <Services />
        <WhyChooseUs />
        <HowWeWork />
        <TechStack />
        <Testimonials />
        <FounderSection />
        <CTASection onOpenAudit={openAuditModal} />
      </main>
      <Footer />
      <AuditModal isOpen={isAuditOpen} onClose={closeAuditModal} />
    </div>
  );
}