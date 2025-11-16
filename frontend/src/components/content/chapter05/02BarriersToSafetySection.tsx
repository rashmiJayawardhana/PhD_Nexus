// FILE: src/components/content/chapter05/02BarriersToSafetySection.tsx
// Updated to use hybrid content from Firebase
// ============================================

import { Award, TrendingDown, AlertTriangle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

// Fallback data - complete barriers section
const BARRIERS_FALLBACK = {
  introduction: 'The literature reported multifactorial causes of ineffective compliance with safety guidelines. The common contributing factors include frequency of utilization, handling large quantities of doses and complex drug regimens, inadequate knowledge and training, poor attitudes toward safety precautions, insufficient supervision on handling, multitasking and work pressure, staff shortage, interpersonal influences, personal factors, unsafe working environment (e.g., unavailable/limited PPE, CSTD and other facilities and budgeting constraints)[36].',
  
  criticalFinding: 'Statistically significant correlations have been observed between the prevalence of adverse effects and heavy workload, staff shortage, poor knowledge and practice, drug handling characteristics, and poor attitude towards safety measures. Among these factors, insufficient knowledge and training are the most frequently associated with occupational exposure and related adverse effects[36-38].',
  
  barrierCategories: {
    organizational: {
      title: 'Organizational Factors',
      color: 'red',
      items: [
        'Increased workload and patient count',
        'Staff shortage',
        'Insufficient supervision',
        'Limited PPE availability',
        'Lack of engineering controls (BSC, CSTD)',
        'Budget constraints',
        'Poor workplace safety climate'
      ]
    },
    knowledge: {
      title: 'Knowledge and Training Factors',
      color: 'orange',
      items: [
        'Inadequate knowledge of safe handling',
        'Insufficient training opportunities',
        'Lack of ongoing education',
        'Unavailability of routine training programs',
        'Poor understanding of exposure risks'
      ]
    },
    practice: {
      title: 'Practice and Behavioral Factors',
      color: 'amber',
      items: [
        'Poor attitudes toward safety measures',
        'Low self-efficacy in handling HDs',
        'Conflict between professional image and safety',
        'Prioritizing social roles over professional safety',
        'Reliance on clinical wisdom instead of guidelines',
        'Non-compliance with PPE use',
        'Unsafe practices (e.g., priming with chemotherapy)'
      ]
    },
    environmental: {
      title: 'Environmental Factors',
      color: 'yellow',
      items: [
        'Technical issues with devices',
        'Drug spills during handling',
        'Complex drug regimens',
        'High-dose drug handling',
        'Interpersonal influences'
      ]
    }
  },
  
  empiricalStudiesIntro: 'Table 15: Empirical studies on barriers to safe handling of chemotherapy',
  empiricalStudies: {
    study1: {
      title: 'Integrative Review[39]',
      variant: 'blue',
      keyFinding: 'Nurses\' adherence to the guidelines on handling chemotherapy is lower than the recommended level.',
      contributingFactors: [
        'Insufficient PPE and knowledge in handling',
        'Poor practice (priming syringes/IV lines with chemotherapy solutions)',
        'Ineffective use of PPE',
        'Lack of monitoring and low self-efficacy',
        'Increased patient count and poor workplace safety climate',
        'Drug spills, not using CSTDs, technical issues with devices'
      ],
      impact: 'Education interventions statistically significantly increased knowledge and compliance with safety measures, and decreased the frequency of spills.'
    },
    study2: {
      title: 'Descriptive Cross-sectional Study[40]',
      variant: 'purple',
      findings: 'Nurses reported high exposure knowledge, self-efficacy, perceived risk, interpersonal influences, and workplace safety climate. They also reported moderate barriers to the use of PPE and conflict of interest.',
      significantFinding: 'The number of patients per day is significantly associated with the use of HD precautions.'
    },
    study3: {
      title: 'Cross-sectional Study[41]',
      variant: 'teal',
      associatedFactors: [
        'Age and working experience',
        'Having heard about cytotoxic drugs',
        'Training on handling cytotoxic drugs',
        'Practice of handling chemotherapy among HCWs'
      ]
    },
    study4: {
      title: 'Qualitative Study[42]',
      variant: 'indigo',
      culturalFactors: [
        'Nurses report that the use of PPE is an obstacle to professional image and performance',
        'Nurses prioritized social roles over professional roles',
        'Belief that clinical wisdom was necessary to prevent occupational exposure to chemotherapy toxicity'
      ]
    }
  },
  
  mostSignificantBarrier: 'Research consistently shows that insufficient knowledge and training are the most frequently associated factors with occupational exposure and related adverse effects. This finding emphasizes the critical importance of comprehensive education programs in improving safety compliance.',
  
  criticalImplications: 'Addressing barriers to safe handling requires a multifaceted approach that includes organizational support, adequate resources, comprehensive training programs, and fostering a culture of safety. Education interventions have proven effective in improving compliance and reducing adverse effects, making them a priority intervention.'
};

type ColorKey = 'red' | 'orange' | 'amber' | 'yellow';

const BarrierCategory: React.FC<{
  title: string;
  items: string[];
  color: ColorKey;
}> = ({ title, items, color }) => {
  const colors: Record<ColorKey, { bg: string; border: string; text: string; icon: string }> = {
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', icon: 'text-red-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', icon: 'text-orange-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', icon: 'text-amber-600' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', icon: 'text-yellow-600' },
  };

  const style = colors[color];

  return (
    <div className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4`}>
      <h5 className={`font-bold ${style.text} mb-3 flex items-center gap-2`}>
        <AlertTriangle className={`w-5 h-5 ${style.icon}`} />
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className={`${style.icon} font-bold mt-0.5`}>×</span>
            <span className="text-sm text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EmpiricalStudyCard: React.FC<{
  study: any;
}> = ({ study }) => {
  const variants: Record<string, { bg: string; border: string; badge: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-600" },
    teal: { bg: "bg-teal-50", border: "border-teal-200", badge: "bg-teal-600" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-600" },
  };

  const style = variants[study.variant] || variants.blue;

  return (
    <div className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4 hover:shadow-lg transition-shadow`}>
      <div className="flex items-start gap-3 mb-3">
        <span className={`${style.badge} text-white text-xs px-3 py-1 rounded-full font-semibold shrink-0`}>
          {study.title}
        </span>
      </div>
      <div className="text-sm text-slate-700 space-y-2">
        {study.keyFinding && <p><strong>Key Finding:</strong> {study.keyFinding}</p>}
        {study.contributingFactors && (
          <>
            <p className="mt-2"><strong>Contributing Factors:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
              {study.contributingFactors.map((factor: string, idx: number) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </>
        )}
        {study.impact && <p className="mt-2"><strong>Impact:</strong> {study.impact}</p>}
        {study.findings && <p>{study.findings}</p>}
        {study.significantFinding && <p className="mt-2"><strong>Significant Finding:</strong> {study.significantFinding}</p>}
        {study.associatedFactors && (
          <>
            <p><strong>Associated Factors:</strong> Knowledge of handling cytotoxic drugs is associated with:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
              {study.associatedFactors.map((factor: string, idx: number) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </>
        )}
        {study.culturalFactors && (
          <>
            <p><strong>Cultural and Professional Factors:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
              {study.culturalFactors.map((factor: string, idx: number) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export const BarriersToSafetySection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-05',
    sectionId: 'barriers',
    fallbackData: BARRIERS_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Introduction */}
      <ContentCard 
        title="Barriers to Following Safety Precautions" 
        icon={<TrendingDown className="w-6 h-6 text-red-600" />}
        variant="warning"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            {data.introduction}
          </p>

          <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
            <p className="text-slate-800 text-sm font-semibold">
              <strong>Critical Finding:</strong> {data.criticalFinding}
            </p>
          </div>
        </div>
      </ContentCard>

      {/* Categories of Barriers */}
      <ContentCard 
        title="Categories of Barriers" 
        icon={<span className="text-2xl">🚧</span>}
      >
        <div className="space-y-4">
          {Object.values(data.barrierCategories).map((category: any, idx) => (
            <BarrierCategory
              key={idx}
              title={category.title}
              color={category.color as ColorKey}
              items={category.items}
            />
          ))}
        </div>
      </ContentCard>

      {/* Empirical Studies Table */}
      <ContentCard 
        title="Empirical Evidence: Barriers to Safe Handling" 
        icon={<span className="text-2xl">📚</span>}
        variant="info"
      >
        <p className="text-slate-700 mb-4 text-sm italic">
          {data.empiricalStudiesIntro}
        </p>

        <div className="space-y-3">
          {Object.values(data.empiricalStudies).map((study: any, idx) => (
            <EmpiricalStudyCard key={idx} study={study} />
          ))}
        </div>

        <div className="mt-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-200">
          <h5 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Most Significant Barrier
          </h5>
          <p className="text-slate-700 text-sm">
            {data.mostSignificantBarrier}
          </p>
        </div>
      </ContentCard>

      {/* Key Takeaways */}
      <InfoBox type="critical">
        <strong>Critical Implications for Practice:</strong> {data.criticalImplications}
      </InfoBox>
    </>
  );
};

export default BarriersToSafetySection;