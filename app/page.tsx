'use client';

import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TrustSection from '@/components/TrustSection';
import MenuSection from '@/components/MenuSection';
import ExperienceSection from '@/components/ExperienceSection';
import WhyUstadisSection from '@/components/WhyUstadisSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import ReservationSection from '@/components/ReservationSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <main className="relative bg-secondary min-h-screen pb-20 md:pb-0">
      <CustomCursor />
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <TrustSection />
      <MenuSection />
      <ExperienceSection />
      <WhyUstadisSection />
      <GallerySection />
      <LocationSection />
      <ReservationSection />
      <FinalCTA />
      
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
