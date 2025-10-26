// src/components/content/chapter01/CancerOverviewSection.tsx
import { chapter1Data } from "@/data/emoduleContent/chapter1Data";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";

export const CancerOverviewSection: React.FC = () => (
  <>
    <ContentCard 
      title="Overview of Cancer" 
      icon={<span className="text-2xl">🔬</span>}
      variant="info"
    >
      <p className="text-slate-700 leading-relaxed mb-4">
        {chapter1Data.cancerOverview.definition}
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {chapter1Data.cancerOverview.types.map((type, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 border-2 border-slate-200 shadow-sm">
            <h4 className="font-bold text-teal-700 mb-2">{type.name}</h4>
            <p className="text-sm text-slate-600">{type.description}</p>
          </div>
        ))}
      </div>
    </ContentCard>

    <InfoBox type="tip">
      <strong>Key Terminology:</strong> Primary cancer is localized and does not spread, while secondary cancer 
      (metastasis) refers to cancer cells spreading to new sites through blood and lymph systems.
    </InfoBox>
  </>
);