import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages Import
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import ProcessPage from './pages/ProcessPage';
import TechStackPage from './pages/TechStackPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/tech" element={<TechStackPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}