// FILE: src/components/content/chapter04/11MedicalSurveillanceSection.tsx
import { Heart, Activity, TrendingUp } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import medical from '../../../assets/medical.png';

const MEDICAL_FALLBACK = {
  surveillanceIntro: 'Medical surveillance is a vital program...',
  programElements: [{number: 1, title: '...', description: '...'}], // abbreviated
  keyBenefits: [{icon: '🛡️', title: '...', description: '...'}],
  importantNote: 'Medical surveillance acts as...'
};

export const MedicalSurveillanceSection = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
    sectionId: 'medical',
    fallbackData: MEDICAL_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Medical Surveillance" icon={<Heart className="w-6 h-6 text-indigo-600" />} variant="info">
        <div className="space-y-6">
          <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed text-base">{data.surveillanceIntro}</p>
          </div>

          <div className="flex justify-center my-6">
            <img src={medical} alt="Medical surveillance" className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white" style={{ maxHeight: '400px' }} />
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Activity className="w-6 h-6 text-indigo-600" />
              Program Elements
            </h5>
            <div className="space-y-4">
              {data.programElements.map((element: any, idx: number) => (
                <div key={idx} className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {element.number}
                    </span>
                    <div>
                      <h6 className="font-semibold text-indigo-900 mb-2 text-base">{element.title}</h6>
                      <p className="text-sm text-slate-700 mb-3">{element.description}</p>
                      {element.items && (
                        <ul className="space-y-2 text-sm text-slate-700 ml-4">
                          {element.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-indigo-600">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {element.note && (
                        <div className="mt-3 bg-blue-50 rounded-lg p-4">
                          <p className="text-sm text-slate-700"><strong>Note:</strong> {element.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Key Benefits
            </h5>
            <div className="grid md:grid-cols-2 gap-4">
              {data.keyBenefits.map((benefit: any, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-5 shadow-sm">
                  <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">{benefit.icon}</span>
                    {benefit.title}
                  </h6>
                  <p className="text-sm text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <InfoBox type="note"><strong>Important:</strong> {data.importantNote}</InfoBox>
        </div>
      </ContentCard>
    </>
  );
};

export default MedicalSurveillanceSection;