
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import SolutionsSection from '@/components/SolutionsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
