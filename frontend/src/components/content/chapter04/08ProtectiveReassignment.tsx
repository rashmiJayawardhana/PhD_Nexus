// FILE: src/components/content/chapter04/08ProtectiveReassignmentSection.tsx
import { Shield, Users, Heart } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import caution from '../../../assets/caution.png';

const REASSIGNMENT_FALLBACK = {
  whyReassignment: 'Teratogenicity and reproductive effects are characteristics of HDs...',
  employerIntro: 'Employers have a responsibility to ensure workers understand the risks...',
  employerResponsibilities: ['...'], // abbreviated for space
  reassignmentExamples: ['...'],
  atRiskCategories: ['...'],
  alternativeOptions: ['...']
};

export const ProtectiveReassignmentSection = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
    sectionId: 'reassignment',
    fallbackData: REASSIGNMENT_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Protective Reassignment" icon={<Users className="w-6 h-6 text-amber-600" />} variant="warning">
        <div className="space-y-6">
          <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
            <h5 className="font-bold text-red-900 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Why Protective Reassignment?
            </h5>
            <p className="text-slate-700 leading-relaxed">{data.whyReassignment}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Shield className="w-5 h-5 text-indigo-600" />
              Employer Responsibilities
            </h5>
            <p className="text-slate-700 mb-4">{data.employerIntro}</p>

            <div className="space-y-4">
              {data.employerResponsibilities.map((resp: string, idx: number) => (
                <div key={idx} className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 pt-1">{resp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center my-6">
            <img src={caution} alt="Protective reassignment" className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white" style={{ maxHeight: '400px' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-pink-50 to-red-50 rounded-lg p-5 border-2 border-pink-300">
              <h6 className="font-bold text-pink-900 mb-3">👶 At-Risk Categories</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.atRiskCategories.map((cat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300">
              <h6 className="font-bold text-green-900 mb-3">✅ Alternative Options</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.alternativeOptions.map((opt: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
  );
};

export default ProtectiveReassignmentSection;