// FILE: src/components/content/chapter04/EmergencyProceduresSection.tsx
import { AlertTriangle, Heart } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import emergency from '../../../assets/emergency.png';
import { ProcedureList } from '../ProcedureList';

export const EmergencyProceduresSection = () => (
    <>
      <ContentCard 
        title="Emergency Procedures for Personnel Contamination with HDs" 
        icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
        variant="warning"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed mb-4 text-base">
              Dermal contamination and inhalation of HDs are considered the primary sources of occupational exposure 
              to them. Many HDs are absorbed through the skin, mucous membrane and respiratory system. Therefore, 
              procedures must be in place to address personnel contamination and protocols for medical attention must 
              be developed before any direct contact occurs.
            </p>

            <InfoBox type="critical">
              <strong>Critical Requirement:</strong> All HCWs and personnel handling HD must be aware of emergency 
              procedures for direct contact with HDs and receiving medical attention. All HDs handling areas must 
              consist of essential facilities such as emergency kits/suppliers for emergency treatment (e.g., PPE, 
              soap, eyewash, sterile saline for irrigation), as well as access to running water.
            </InfoBox>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-600" />
              Emergency Response Steps
            </h5>
            <p className="text-slate-700 mb-4">
              Direct skin or eye contact, or contamination of protective equipment or clothing, should be treated 
              according to the following steps:
            </p>

            <ProcedureList
              items={[
                "Immediately remove the contaminated gloves or gown and clothes",
                "Immediately cleanse the affected skin with soap and water",
                "Perform decontamination based on the safety data sheet for the agent of exposure",
                "In the case of eye exposure, flood the affected eye at an eyewash fountain or with water or isotonic eyewash (e.g., Normal saline) designated for that purpose for at least 15 minutes",
                "Protocols for emergency procedures should be maintained at the designated sites (e.g., places to eye irrigation [eyewash fountain], shower for accidental spills)",
                "Medical personnel should perform a physical examination for acute findings at the site of exposure (e.g., skin or inhalation), focusing on the target organs of the drug or drugs involved",
                "Obtaining blood for baseline investigations (e.g., complete blood counts, liver function tests) among exposed HCWs helps determine future changes. In terms of laboratory results, a specimen collected immediately after exposure is almost as good as a pre-exposure specimen",
                "Appropriate follow-up times can be determined based on the drug's half-life and, for example, the expected nadir of blood counts",
                "Exposure-related incidence needs to be immediately informed and needs to seek medical advice as soon as possible, and before the end of the duty shift",
                "Document the exposure in the employee's medical record"
              ]}
              variant="red"
            />
          </div>

          <div className="flex justify-center my-6">
            <img
              src={emergency}
              alt="Emergency procedures equipment and stations"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-red-100 rounded-lg p-3 text-center">
            <p className="text-xs text-red-900 font-medium italic">
              🚨 Emergency response equipment and procedures
            </p>
          </div>

          {/* Quick Response Guide */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
              <div className="text-3xl mb-2">🚿</div>
              <h6 className="font-bold text-blue-900 text-sm mb-1">Skin Contact</h6>
              <p className="text-xs text-slate-600">Remove PPE & wash with soap/water immediately</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
              <div className="text-3xl mb-2">👁️</div>
              <h6 className="font-bold text-purple-900 text-sm mb-1">Eye Exposure</h6>
              <p className="text-xs text-slate-600">Flush for 15+ minutes at eyewash station</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
              <div className="text-3xl mb-2">📋</div>
              <h6 className="font-bold text-green-900 text-sm mb-1">Documentation</h6>
              <p className="text-xs text-slate-600">Report & document in medical record</p>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
);

export default EmergencyProceduresSection;