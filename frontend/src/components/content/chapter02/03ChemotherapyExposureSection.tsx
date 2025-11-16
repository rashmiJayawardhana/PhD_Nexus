// src/components/content/chapter02/03ChemotherapyExposureSection.tsx
import { Target, AlertCircle } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import chemotherapy from '../../../assets/chemotheraphy.png';

// Fallback data - matches migration structure EXACTLY
const ROUTES_FALLBACK = {
  mainIntro: 'Chemotherapy exposure routes typically include inhalation, dermal, ingestion, and needle prick injuries[9,11,12,27] (Figure 03). Inhalation via droplets, particulates, vapors, and dermal contamination are more common[12,30].',
  
  surfaceContamination: 'Most work surfaces are contaminated with HDs[11]. Biological Safety Cabinets (BSCs), countertops, equipment, floors, and other surfaces were identified as highly contaminated areas[22]. Inappropriate handling predominantly causes surface and dermal contamination.',
  
  vialContamination: 'Contamination of the outside of the vials/drug containers, also reported during the filling process, can cause damage or leaking during the transportation of drugs[11].',
  
  aerosolRisk: 'Manipulation, administration, and spill management are the primary risk activities in the generation of aerosols or inhalable particles[11,12,24]. Drug particles on contaminated surfaces may also become airborne particles after drying. Thus, surface contamination is a risk of inhalation[11].',
  
  ingestionRisk: 'Inadvertent ingestion is possible with contamination of food and beverages with cytotoxic drugs. Therefore, preparing, storing, or consuming food and drink at work should be avoided.',
  
  needleStickRisk: 'Also, needlestick injuries are another potential route of exposure, and sufficient care must be taken in drug preparation and administration.',
  
  activitiesIntro: 'Possible opportunities for exposure based on activity are outlined below (Table 8) [9,11,12,24]:',
  
  inhalationRoute: [
    'Droplets',
    'Particulates',
    'Vapors',
    'Aerosols from manipulation',
    'Dried surface particles becoming airborne'
  ],
  
  dermalRoute: [
    'Contaminated work surfaces',
    'Drug vial exteriors',
    'Spills and splashes',
    'Contaminated PPE',
    'Patient excreta handling'
  ],
  
  ingestionRoute: [
    'Contaminated food/beverages',
    'Hand-to-mouth transfer',
    'Eating in work areas',
    'Improper hand hygiene'
  ],
  
  needleStickRoute: [
    'Drug preparation',
    'Administration',
    'Disposal activities',
    'Improper handling techniques'
  ],
  
  exposureActivitiesTable: {
    headers: {
      col0: "Activity",
      col1: "The potential source of exposure"
    },
    rows: {
      row0: {
        col0: "Receipt",
        col1: "Contact drug residuals present on drug containers, individual dosage units, outer containers, work surfaces, or floors"
      },
      row1: {
        col0: "Dispensing",
        col1: "Counting or repackaging tablets and capsules"
      },
      row2: {
        col0: "Compounding and other manipulations",
        col1: "<ul><li>Counting out individual, uncoated oral doses and tablets from multidose bottles</li><li>Unit-dosing uncoated tablets in a unit-dose machine</li><li>Crushing or splitting tablets or opening capsules to make unit doses or oral liquid doses</li><li>Compounding potent powders into custom-dosage capsules</li><li>Pouring oral or topical liquids from one container to another</li><li>Weighing or mixing components</li><li>Reconstitute powdered or lyophilized HDs and further dilute either the reconstituted powder or concentrated liquid forms of HDs</li><li>Withdrawing or diluting injectable HDs from parenteral containers</li><li>Priming HDs from syringes or IV tubes</li><li>Contact HD residue is present on Personal Protective Equipment (PPE) or other garments</li><li>Deactivating, decontaminating, cleaning, and disinfecting areas contaminated with or suspected to be contaminated with HDs</li><li>Maintenance activities for potentially contaminated equipment and devices</li></ul>"
      },
      row3: {
        col0: "Administration",
        col1: "<ul><li>Generating aerosols during administration of HDs by various routes (e.g., injection, irrigation, oral, inhalation, or topical application)</li><li>Performing specific specialized procedures (e.g., intraperitoneal injection or bladder installation)</li><li>Priming the IV set with a drug-containing solution in inappropriate places (e.g., patient bedside) (Priming should be done in the pharmacy)</li><li>Contact measurable concentrations of drugs present on drug vial exteriors, work surfaces, floors, and final drug products (bottles, bags, cassettes, and syringes)</li><li>Leakage of tubing, IV bags, or syringes</li><li>Spiking IV bags and changing IV tubing</li></ul>"
      },
      row4: {
        col0: "Patient-care activities",
        col1: "Handling excreta (e.g., urine, faeces, sweat, or vomit) or excreta materials (e.g., clothing, dressings, linens, materials)"
      },
      row5: {
        col0: "Spills",
        col1: "Spill generation, management, and disposal (cleaning up spills)"
      },
      row6: {
        col0: "Transport",
        col1: "Moving HDs within a healthcare setting"
      },
      row7: {
        col0: "Cleaning",
        col1: "Decontaminating and cleaning drug preparation or clinical areas"
      },
      row8: {
        col0: "Waste",
        col1: "Handling contaminated waste generated at any step of the preparation or administration process\n\nCollection and disposal of HD/trace contaminated waste"
      }
    }
  },
  
  importantReminder: 'ALL activities involving hazardous drugs require appropriate PPE and adherence to safety guidelines. The risk level indicates relative exposure potential, not permission to reduce precautions. Every step requires vigilance and proper safety measures.'
};

// Helper to convert table
function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers).sort().map(k => table.headers[k]);
  const rows = Object.keys(table.rows).sort().map(rowKey => {
    const row = table.rows[rowKey];
    return Object.keys(row).sort().map(k => row[k]);
  });
  return { headers, rows };
}

export const ChemotherapyExposureSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-02',
    sectionId: 'routes',
    fallbackData: ROUTES_FALLBACK
  });

  const exposureTable = tableToArray(data.exposureActivitiesTable);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Main Introduction Card */}
      <ContentCard 
        title="Chemotherapy Exposure Routes and Risk Activities" 
        icon={<Target className="w-6 h-6 text-red-600" />}
        variant="warning"
      >
        <div className="space-y-4">
          <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200">
            <h5 className="font-bold text-red-900 mb-3">🎯 Main Exposure Routes</h5>
            <p className="text-slate-700 leading-relaxed">
              {data.mainIntro}
            </p>
          </div>

          {/* Visual Representation - Image is NOT editable */}
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-lg">
            <h5 className="font-bold text-slate-900 mb-4 text-center text-lg">
              📍 Routes of Exposure to Chemotherapy
            </h5>
            <div className="flex justify-center mb-4">
              <img
                src={chemotherapy}
                alt="Routes of exposure to chemotherapy: inhalation, dermal, ingestion, and needle prick"
                className="rounded-xl shadow-2xl max-w-full w-auto border-2 border-slate-200"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <p className="text-sm text-slate-600 text-center italic">
              Figure 3: Routes of exposure to chemotherapy
            </p>
          </div>

          {/* Detailed Exposure Information */}
          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
            <h5 className="font-bold text-red-900 mb-3">⚠️ Surface Contamination & Exposure Risks</h5>
            <div className="space-y-3 text-sm text-slate-700">
              <p>{data.surfaceContamination}</p>
              <p>{data.vialContamination}</p>
              <p>{data.aerosolRisk}</p>
              <p>
                {data.ingestionRisk.split('Therefore,')[0]}
                Therefore, <strong className="text-red-700">{data.ingestionRisk.split('Therefore,')[1]}</strong>
              </p>
              <p>{data.needleStickRisk}</p>
            </div>
          </div>

          {/* Four Routes Grid - Uses lists from Firebase */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Route 1: Inhalation */}
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                💨 Route 1: Inhalation
              </h5>
              <p className="text-sm text-slate-700 mb-3 font-semibold">
                Most common exposure route through:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.inhalationRoute.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                    <span className="text-blue-600">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Route 2: Dermal Contact */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                ✋ Route 2: Dermal Contact
              </h5>
              <p className="text-sm text-slate-700 mb-3 font-semibold">
                Direct skin contact through:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.dermalRoute.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                    <span className="text-purple-600">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Route 3: Ingestion */}
            <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-lg p-5 border-2 border-amber-200 hover:shadow-xl transition-all duration-300">
              <h5 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                🍽️ Route 3: Ingestion
              </h5>
              <p className="text-sm text-slate-700 mb-3 font-semibold">
                Inadvertent consumption through:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.ingestionRoute.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                    <span className="text-amber-600">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-100 rounded p-2 mt-3 border-l-4 border-red-600">
                <p className="text-xs text-red-700 font-bold">
                  🚫 NEVER eat, drink, or store food in HD handling areas!
                </p>
              </div>
            </div>

            {/* Route 4: Needle Stick Injuries */}
            <div className="bg-linear-to-br from-red-50 to-pink-50 rounded-lg p-5 border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                💉 Route 4: Needle Stick Injuries
              </h5>
              <p className="text-sm text-slate-700 mb-3 font-semibold">
                Accidental puncture during:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.needleStickRoute.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                    <span className="text-red-600">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-100 rounded p-2 mt-3 border-l-4 border-red-600">
                <p className="text-xs text-red-700 font-bold">
                  ⚠️ Use proper sharps disposal IMMEDIATELY!
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Risk Activities Table */}
      <ContentCard 
        title="Potential Opportunities for Exposure by Activity" 
        icon={<AlertCircle className="w-6 h-6 text-red-600" />}
      >
        <p className="text-slate-700 mb-4">
          {data.activitiesIntro}
        </p>
        
        <p className="text-slate-700 mb-4 text-sm italic">
          Table 8: Potential opportunity for exposure
        </p>

        <DataTable 
          headers={exposureTable.headers}
          rows={exposureTable.rows}
        />

        {/* Risk Level Cards - NOT editable (visual indicators) */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-red-100 rounded-lg p-4 text-center border-2 border-red-300 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-red-900 mb-1">HIGH</div>
            <div className="text-sm text-slate-700">Compounding & Administration</div>
          </div>
          <div className="bg-orange-100 rounded-lg p-4 text-center border-2 border-orange-300 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-orange-900 mb-1">MEDIUM</div>
            <div className="text-sm text-slate-700">Transport & Dispensing</div>
          </div>
          <div className="bg-amber-100 rounded-lg p-4 text-center border-2 border-amber-300 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-amber-900 mb-1">LOWER</div>
            <div className="text-sm text-slate-700">Receipt & Storage</div>
          </div>
        </div>

        <InfoBox type="note">
          <strong>⚠️ Important Reminder:</strong> {data.importantReminder}
        </InfoBox>
      </ContentCard>
    </>
  );
};

export default ChemotherapyExposureSection;