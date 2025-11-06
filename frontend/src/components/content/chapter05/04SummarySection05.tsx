// FILE: src/components/content/chapter05/SummarySection05.tsx
// Chapter 5 specific summary implementation
// ============================================
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary05.png';
import summaryImage2 from '../../../assets/home.png';

export const SummarySection05: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 05 Summary',
    description: [
      'A wide variety of practices affect occupational exposure and the safe handling of chemotherapy. Those include increased patient count, frequent drug utilization, handling an increased amount and quantity of doses, complex drug regimens, inadequate knowledge and training, poor attitudes toward safety measures, insufficient supervision on handling, multitasking and work pressure, staff shortage, interpersonal influences, personal factors, unsafe working environment and limited facilities. Adequate knowledge and training are frequently associated with occupational exposure and related adverse effects.',
      'Literature reports that education and training programs enhance compliance with safety guidelines and reduce occupational exposure and related AEs. Web-based online courses, educational modules, safety guidelines, demonstrations, re-demonstrations, videos, PowerPoint presentations, seminars, and workshops were common tools used in education programs to improve knowledge, attitude and performance in handling cytotoxic drugs among nurses.'
    ],
    keyPoints: [
      '🚧 Barrier Categories: Four main groups - Organizational (workload, staff shortage, budget), Knowledge/Training (inadequate education, lack of programs), Practice/Behavioral (poor attitudes, low self-efficacy), and Environmental (technical issues, complex regimens)',
      
      '📚 Most Critical Barrier: Insufficient knowledge and training are THE most frequently associated factors with occupational exposure and adverse effects - making education the #1 priority intervention',
      
      '🔍 Multifactorial Causes: Barriers include increased patient count, frequent drug utilization, handling large doses, complex regimens, inadequate knowledge, poor attitudes, insufficient supervision, multitasking, work pressure, staff shortage, interpersonal influences, unsafe environment, and limited facilities',
      
      '✅ Education Effectiveness: 88.9% of studies show strong association between educational interventions and safe handling improvements - Better compliance + Lower adverse effects',
      
      '💻 Top Educational Methods: Web-based courses, e-learning modules, blended learning (most suitable for nurses), educational modules, safety protocols, demonstrations, videos, workshops, mobile apps - ALL show statistically significant improvements',
      
      '🌍 LMIC Recommendations: E-learning modules HIGHLY recommended - Cost-effective, addresses lack of opportunities, supports lifelong learning and CPD. Blended learning is MOST suitable method for nurses',
      
      '📈 Proven Improvements: Education interventions significantly improve: (1) Knowledge of safe handling, (2) Compliance with guidelines, (3) Proper PPE use, (4) Self-efficacy, (5) Nursing performance, (6) Attitudes toward safety, (7) Confidence levels, (8) Reduction in drug spills',
      
      '🎯 Success Factors: High participant satisfaction (54-74%), significant theoretical knowledge improvement, enhanced practical skills, better safety attitudes, increased confidence, sustained behavior change',
      
      '⚠️ Key Challenges: Technology access/connectivity issues, limited interaction in online formats, structural barriers to implementation, need for motivation, some prefer traditional methods',
      
      '⭐ Best Practice Formula: Combine multiple methods (e-learning + face-to-face) + Interactive elements + Ongoing support + Regular assessments + CPD + Organizational backing = SUCCESS',
      
      '📊 Research Evidence: Multiple study types confirm effectiveness - Systematic reviews (88.9% positive), RCTs (statistically significant improvements), qualitative studies (54% positive perception), pre-post studies (high satisfaction)',
      
      '🎓 Blended Learning: 54% of nurses prefer blended approach - Combines teacher-centered and student-centered methods, refreshes knowledge, preserves time, facilitates discussions, supports lifelong learning',
      
      '💡 Key Finding: Self-directed modules considered alternative to face-to-face sessions for achieving better practice in handling chemotherapy',
      
      '🔑 The 4 Pillars: (1) Organizational support + (2) Adequate resources + (3) Comprehensive training + (4) Culture of safety = Effective barrier management',
      
      '🌟 Bottom Line: Education interventions are PRIORITY intervention - Consistently demonstrate effectiveness in improving knowledge, compliance, and safety practices. E-learning + blended learning = Most cost-effective solutions for LMICs'
    ],
    images: [
      {
        src: summaryImage,
        alt: 'Barriers to Safety and Education Impact Visual Summary',
        caption: 'Factors affecting safety compliance and the power of education',
        size: 'full',
        objectFit: 'contain'
      },
      {
        src: summaryImage2,
        alt: 'Healthcare professionals in safe handling practice',
        caption: 'Education empowers healthcare workers for safer practices',
        size: 'full',
        objectFit: 'contain'
      }
    ],
    variant: 'gradient',
    imageLayout: 'grid'
  };

  return <SummarySection data={summaryData} />;
};