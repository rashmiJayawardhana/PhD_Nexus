// src/components/home/HeroContent.tsx
import { ArrowRight } from 'lucide-react';
import { InfoCards } from './InfoCards';
import { Button } from '../common/Button';

interface HeroContentProps {
  onGetStarted: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onGetStarted }) => (
  
  <div className="space-y-6">
    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
      Safe handling<br />
      <span className="text-teal-600">Chemotherapy</span>
    </h1>
    <p className="text-xl text-slate-700">A guide for oncology nurses</p>
    <p className="text-slate-600 leading-relaxed">
      Education material of a tailored educational intervention
    </p>

    <Button variant="primary" icon={ArrowRight} onClick={onGetStarted} className="group">
      Get Started
    </Button>

    <InfoCards />
  </div>
);
