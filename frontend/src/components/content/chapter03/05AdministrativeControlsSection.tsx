// FILE: src/components/content/chapter03/05AdministrativeControlsSection.tsx
import { ClipboardList, BookCheck } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

const ADMINISTRATIVE_FALLBACK = {
  levelIntro: 'Level 04 administrative controls include safe work practices, and their content is outlined below[1119329]. Further, Chapter 04 describes the administrative controls that apply to nursing practice.',
  
  chapterReference: 'Chapter 04 provides detailed descriptions of administrative controls specifically applicable to nursing practice when handling hazardous drugs.',
  
  measures: [
    'Safe work procedures/ SOPs for all tasks and activities involving HDs[32].',
    'Procedures for the use of BSC/ isolators',
    'Requirements for providing, selecting, using, maintaining, and disposing of PPE',
    'Appropriate personal hygiene-related activities (e.g., proper handwashing), prohibiting risk behaviours (e.g., eating, drinking, smoking, applying personal care products, and storing food in HD handling areas or during handling HDs)',
    'Reporting and response procedures for accidental exposure, a spill, or the uncontrolled release of HDs',
    'Procedures for identification, removal, cleanup, and disposal of HD waste, including any materials that contact/ contaminated with HD, or anything contaminated by excreta from a patient treated with HDs',
    'Reduce the number of times HDs are handled',
    'Limit access and restrict participants to the areas where HDs are present',
    'Implement protective reassignment',
    'Training personnel in handling HDs',
    'Medical Surveillance'
  ]
};

export const AdministrativeControlsSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-03',
    sectionId: 'administrative',
    fallbackData: ADMINISTRATIVE_FALLBACK
  });

  const colors = [
    'indigo', 'purple', 'teal', 'blue', 'red', 
    'orange', 'green', 'yellow', 'pink', 'cyan', 'violet'
  ];

  return (
    <>
      <DataSourceIndicator source={source} />
      
      <ContentCard 
        title="Level 4: Administrative Controls" 
        icon={<ClipboardList className="w-6 h-6 text-indigo-600" />}
        variant="info"
      >
        <div className="space-y-5">
          <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-indigo-100">
            <p className="text-slate-700 leading-relaxed text-base">
              {data.levelIntro}
            </p>
          </div>

          <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300 shadow-md">
            <h5 className="font-bold text-indigo-900 mb-4 text-lg flex items-center gap-2">
              <BookCheck className="w-6 h-6" />
              Administrative Control Measures
            </h5>
            <div className="space-y-3">
              {data.measures.map((measure: string, idx: number) => {
                const color = colors[idx % colors.length];
                return (
                  <div key={idx} className={`bg-white rounded-lg p-4 shadow-sm border-l-4 border-${color}-500`}>
                    <div className="flex items-start gap-3">
                      <span className={`bg-${color}-100 text-${color}-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0`}>
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-700">{measure}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Categories Highlight */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
              <div className="text-3xl mb-2">📋</div>
              <h6 className="font-bold text-blue-900 text-sm mb-1">Procedures & SOPs</h6>
              <p className="text-xs text-slate-600">Written protocols for all HD tasks</p>
            </div>
            <div className="bg-linear-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
              <div className="text-3xl mb-2">🧼</div>
              <h6 className="font-bold text-green-900 text-sm mb-1">Hygiene & Safety</h6>
              <p className="text-xs text-slate-600">Personal practices & risk prevention</p>
            </div>
            <div className="bg-linear-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
              <div className="text-3xl mb-2">🎓</div>
              <h6 className="font-bold text-purple-900 text-sm mb-1">Training & Surveillance</h6>
              <p className="text-xs text-slate-600">Staff education & health monitoring</p>
            </div>
          </div>

          <InfoBox type="note">
            <strong>Chapter Reference:</strong> {data.chapterReference}
          </InfoBox>
        </div>
      </ContentCard>
    </>
  );
};

export default AdministrativeControlsSection;