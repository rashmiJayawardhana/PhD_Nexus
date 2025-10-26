// src/components/home/HeroSection.tsx
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 via-transparent to-purple-100/50" />
    
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <HeroContent />
      <HeroImage />
    </div>
  </section>
);