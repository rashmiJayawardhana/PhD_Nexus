// src/components/content/chapter01/EpidemiologySection.tsx
import { ContentCard } from "../ContentCard";
import { StatCard } from "../StatCard";
import { DataSourceIndicator, useHybridContent } from "@/hooks/useHybridContent";

const EPIDEMIOLOGY_FALLBACK = {
  intro: 'Cancer is a global health concern. It causes one in six deaths (16.8%) globally. GLOBACAN cancer statistics reported 20 million new cases and 9.7 million deaths in 2022. Over 35 million new cancer cases and a 77% increment in incidence is predicted by 2050 compared to the year 2022.',
  stats: {
    lung: { number: '2.5M', label: 'Lung Cancer Cases (12.4%)', color: 'bg-red-100' },
    breast: { number: '2.3M', label: 'Breast Cancer Cases (11.6%)', color: 'bg-pink-100' },
    colorectal: { number: '1.9M', label: 'Colorectal Cancer (9.6%)', color: 'bg-blue-100' }
  },
  details: 'Lung cancer is the most widely prevalent cancer globally (2.5 million cases; 12.4% new cases) and female breast cancer ranked second (2.3 million cases, 11.6%), followed by colorectal cancer (1.9 million cases, 9.6%), prostate cancer (1.5 million cases, 7.3%), and stomach cancer (970 000 cases, 4.9%). The incidence and deaths are increasing in Asia.',
  sriLanka: {
    males: 'Oral (lip, tongue, mouth), trachea, bronchus and lung, colorectal (colon and rectum), esophagus, and prostate cancers were common. Lip, tongue, and mouth cancers represented 15% of all male cancers.',
    females: 'Breast, thyroid, colon, ovarian, and cervical cancers were commonly prevalent. Breast cancers were prominent at 27% of all female cancers.'
  }
};

export const EpidemiologySection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'epidemiology',
    fallbackData: EPIDEMIOLOGY_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Cancer Epidemiology" icon={<span className="text-2xl">📊</span>} variant="highlight">
        <p className="text-slate-700 leading-relaxed mb-6">{data.intro}</p>
        
        <h4 className="font-bold text-slate-900 mb-4">Global Cancer Statistics (2022)</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatCard number={data.stats.lung.number} label={data.stats.lung.label} color={data.stats.lung.color} />
          <StatCard number={data.stats.breast.number} label={data.stats.breast.label} color={data.stats.breast.color} />
          <StatCard number={data.stats.colorectal.number} label={data.stats.colorectal.label} color={data.stats.colorectal.color} />
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-6 mt-2">{data.details}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-xl">👨</span> Males in Sri Lanka
            </h4>
            <p className="text-sm text-slate-700">{data.sriLanka.males}</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-5 border-2 border-pink-200">
            <h4 className="font-bold text-pink-900 mb-3 flex items-center gap-2">
              <span className="text-xl">👩</span> Females in Sri Lanka
            </h4>
            <p className="text-sm text-slate-700">{data.sriLanka.females}</p>
          </div>
        </div>
      </ContentCard>
    </>
  );
};