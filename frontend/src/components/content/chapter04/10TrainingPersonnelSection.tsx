// FILE: src/components/content/chapter04/10TrainingPersonnelSection.tsx
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import training from '../../../assets/training.png';

const TRAINING_FALLBACK = {
  trainingIntro: 'All staff who handle cytotoxic drugs...',
  coreKnowledge: ['...'],
  practicalSkills: ['...'],
  isoppGuidelines: ['...'],
  evaluationIntro: 'Following the training...',
  requiredRecords: ['...'],
  trainingScheduleNote: 'Initial training when first assigned...'
};

export const TrainingPersonnelSection = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
    sectionId: 'training',
    fallbackData: TRAINING_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Training Personnel" icon={<GraduationCap className="w-6 h-6 text-green-600" />} variant="success">
        <div className="space-y-6">
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed text-base">{data.trainingIntro}</p>
          </div>

          <div className="flex justify-center my-6">
            <img src={training} alt="Training" className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white" style={{ maxHeight: '400px' }} />
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
              Training Content
            </h5>
            <p className="text-slate-700 mb-4">Content should include:</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-500 shadow-sm">
                  <h6 className="font-semibold text-green-900 mb-2">📖 Core Knowledge</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.coreKnowledge.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-l-4 border-blue-500 shadow-sm">
                  <h6 className="font-semibold text-blue-900 mb-2">🛠️ Practical Skills</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.practicalSkills.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-l-4 border-purple-500 shadow-sm">
                <h6 className="font-semibold text-purple-900 mb-2">⭐ ISOPP Guidelines</h6>
                <ul className="space-y-2 text-sm text-slate-700">
                  {data.isoppGuidelines.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
            <h5 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg">
              <Users className="w-6 h-6" />
              Evaluation and Records
            </h5>
            <p className="text-slate-700 mb-4">{data.evaluationIntro}</p>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-amber-900 mb-3">Required Records:</h6>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-slate-700">
                  {data.requiredRecords.slice(0, 3).map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm text-slate-700">
                  {data.requiredRecords.slice(3).map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <InfoBox type="tip"><strong>Training Schedule:</strong> {data.trainingScheduleNote}</InfoBox>
        </div>
      </ContentCard>
    </>
  );
};

export default TrainingPersonnelSection;