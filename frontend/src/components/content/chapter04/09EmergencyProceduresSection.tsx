// FILE: src/components/content/chapter04/09EmergencyProceduresSection.tsx
import { AlertTriangle, Heart } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { ProcedureList } from '../ProcedureList';
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import emergency from '../../../assets/emergency.png';

const EMERGENCY_FALLBACK = {
  emergencyIntro: 'Dermal contamination and inhalation...',
  criticalRequirement: 'All HCWs and personnel...',
  responseIntro: 'Direct skin or eye contact...',
  emergencySteps: ['...']
};

export const EmergencyProceduresSection = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
    sectionId: 'emergency',
    fallbackData: EMERGENCY_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Emergency Procedures" icon={<AlertTriangle className="w-6 h-6 text-red-600" />} variant="warning">
        <div className="space-y-6">
          <div className="bg-linear-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed mb-4 text-base">{data.emergencyIntro}</p>
            <InfoBox type="critical"><strong>Critical Requirement:</strong> {data.criticalRequirement}</InfoBox>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-600" />
              Emergency Response Steps
            </h5>
            <p className="text-slate-700 mb-4">{data.responseIntro}</p>
            <ProcedureList items={data.emergencySteps} variant="red" />
          </div>

          <div className="flex justify-center my-6">
            <img src={emergency} alt="Emergency procedures" className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white" style={{ maxHeight: '400px' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
              <div className="text-3xl mb-2">🚿</div>
              <h6 className="font-bold text-blue-900 text-sm mb-1">Skin Contact</h6>
              <p className="text-xs text-slate-600">Remove PPE & wash immediately</p>
            </div>
            <div className="bg-linear-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
              <div className="text-3xl mb-2">👁️</div>
              <h6 className="font-bold text-purple-900 text-sm mb-1">Eye Exposure</h6>
              <p className="text-xs text-slate-600">Flush 15+ minutes</p>
            </div>
            <div className="bg-linear-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
              <div className="text-3xl mb-2">📋</div>
              <h6 className="font-bold text-green-900 text-sm mb-1">Documentation</h6>
              <p className="text-xs text-slate-600">Report & document</p>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
  );
};

export default EmergencyProceduresSection;