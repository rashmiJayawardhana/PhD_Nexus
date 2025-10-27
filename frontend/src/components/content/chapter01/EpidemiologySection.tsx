// src/components/content/chapter01/EpidemiologySection.tsx
import { chapter1Data } from "@/data/emoduleContent/chapter1Data";
import { ContentCard } from "../ContentCard";
import { StatCard } from "../StatCard";

export const EpidemiologySection: React.FC = () => (
  <>
    <ContentCard 
      title="Cancer Epidemiology" 
      icon={<span className="text-2xl">📊</span>}
      variant="highlight"
    >
      <p className="text-slate-700 leading-relaxed mb-6">
        Cancer is a global health concern. It causes one in six deaths (16.8%) globally. GLOBACAN cancer statistics 
        reported 20 million new cases and 9.7 million deaths in 2022. Over 35 million new cancer cases and a 77% 
        increment in incidence is predicted by 2050 compared to the year 2022.
      </p>

      <h4 className="font-bold text-slate-900 mb-4">Global Cancer Statistics (2022)</h4>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <StatCard number="2.5M" label="Lung Cancer Cases (12.4%)" color="bg-red-100" />
        <StatCard number="2.3M" label="Breast Cancer Cases (11.6%)" color="bg-pink-100" />
        <StatCard number="1.9M" label="Colorectal Cancer (9.6%)" color="bg-blue-100" />
      </div>
      <p className="text-slate-700 leading-relaxed mb-6 mt-2">
        Lung cancer is the most widely prevalent cancer globally (2.5 million cases; 12.4% new cases) and female breast cancer ranked second (2.3 million cases, 11.6%), followed by colorectal cancer (1.9 million cases, 9.6%), prostate cancer (1.5 million cases, 7.3%), and stomach cancer (970 000 cases, 4.9%). The incidence and deaths are increasing in Asia. 
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span className="text-xl">👨</span> Males in Sri Lanka
          </h4>
          <p className="text-sm text-slate-700">{chapter1Data.epidemiology.sriLanka.males}</p>
        </div>

        <div className="bg-pink-50 rounded-lg p-5 border-2 border-pink-200">
          <h4 className="font-bold text-pink-900 mb-3 flex items-center gap-2">
            <span className="text-xl">👩</span> Females in Sri Lanka
          </h4>
          <p className="text-sm text-slate-700">{chapter1Data.epidemiology.sriLanka.females}</p>
        </div>
      </div>
    </ContentCard>
  </>
);