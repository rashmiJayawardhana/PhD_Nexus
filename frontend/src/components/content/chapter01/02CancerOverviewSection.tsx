// src/components/content/chapter01/CancerOverviewSection.tsx
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import cells from '../../../assets/cells.png';
import cell from '../../../assets/cell.png';
import { DataSourceIndicator, useHybridContent } from "@/hooks/useHybridContent";

const OVERVIEW_FALLBACK = {
  definition: "Cancer is the generic name for neoplasms/tumors. Tumors are of two types, benign and cancerous. Benign tumors grow slowly and usually do not invade other tissues or convert to cancer. Cancerous tumors are referred to as malignant tumors and demonstrate uncontrolled cell division and the potential to invade surrounding tissues by destroying normal cells. Cancers may be developed in solid or liquid tissues.",
  types: [
    { name: "Solid Cancers", description: "Abnormal cells create a mass or lump (e.g., breast and prostate cancers). Many types of cancers belong to solid cancers." },
    { name: "Liquid Cancers", description: "Abnormal cell buildup in blood, bone marrow, and lymphatic system (e.g., leukemia, myeloma)" },
    { name: "Primary Cancer", description: "First-developed cancer, localized, not tend to spread to other organs" },
    { name: "Secondary Cancer/Metastasis", description: "Growth of primary cancer at a new site with the distribution of cancer cells through blood and lymph" }
  ],
  infoBoxContent: 'Primary cancer is localized and does not spread, while secondary cancer (metastasis) refers to cancer cells spreading to new sites through blood and lymph systems.'
};

export const CancerOverviewSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'overview',
    fallbackData: OVERVIEW_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard 
        title="Overview of Cancer" 
        icon={<span className="text-2xl">🔬</span>}
        variant="info"
      >
        <p className="text-slate-700 leading-relaxed mb-4">{data.definition}</p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {data.types.map((type, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border-2 border-slate-200 shadow-sm">
              <h4 className="font-bold text-teal-700 mb-2">{type.name}</h4>
              <p className="text-sm text-slate-600">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center m-8 gap-5">
          <img src={cells} alt="Cancer cells" className="rounded-xl shadow-xl max-w-md w-auto border-2 border-slate-200" />
          <img src={cell} alt="Cancer cell" className="rounded-xl shadow-xl max-w-md w-auto border-2 border-slate-200" />
        </div>
      </ContentCard>

      <InfoBox type="tip">
        <strong>Key Terminology:</strong> {data.infoBoxContent}
      </InfoBox>
    </>
  );
};