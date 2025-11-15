// src/components/content/chapter01/HazardousSection.tsx
import { AlertCircle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { DataSourceIndicator, useHybridContent } from "@/hooks/useHybridContent";

const HAZARDOUS_FALLBACK = {
  intro: 'Anti-cancer chemotherapy and a few other drug groups (antiviral drugs, hormones, some bioengineered drugs, and other miscellaneous drugs) are considered hazardous drugs (HDs) due to the below-mentioned characteristics.',
  properties: [
    'Carcinogenicity',
    'Teratogenicity or developmental toxicity',
    'Reproductive toxicity',
    'Organ toxicity at low doses',
    'Genotoxicity',
    'Structure and toxicity profiles of new drugs that mimic existing drugs determined hazardous by the above criteria'
  ]
};

export const HazardousSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'hazardous',
    fallbackData: HAZARDOUS_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard 
        title="Properties of Hazardous Drugs" 
        icon={<AlertCircle className="w-6 h-6 text-amber-600" />}
        variant="warning"
      >
        <p className="text-slate-700 leading-relaxed mb-4">{data.intro}</p>
        <ul className="space-y-2">
          {data.properties.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-amber-600 font-bold mt-1">⚠️</span>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </ContentCard>
    </>
  );
};