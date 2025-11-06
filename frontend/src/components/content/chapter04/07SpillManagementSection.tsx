// FILE: src/components/content/chapter04/SpillManagementSection.tsx
import { Shield, AlertTriangle, Droplet, Package, FileText } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import cleaning1 from '../../../assets/cleaning1.png';
import cleaning2 from '../../../assets/cleaning2.png';
import cleaning3 from '../../../assets/cleaning3.png';

export const SpillManagementSection = () => (
    <>
      <ContentCard 
        title="Cleaning HD Spills" 
        icon={<Shield className="w-6 h-6 text-red-600" />}
        variant="warning"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed mb-4">
              It is essential to have a clearly labelled and complete spill kit immediately available in all areas 
              where HDs are handled (areas where HDs are received, stored, transported, compounded, administered, and 
              waste is dealt with). HD spill kits must include all PPE (approved gloves, respirator, goggles and/or 
              face shield and gowns) and all other content/equipment for an effective cleaning process. The contents 
              of the spill kit need to be regularly reviewed. All PPE must protect the HDs and well-trained personnel 
              required to handle the drug spills.
            </p>

            <InfoBox type="critical">
              <strong>Critical Requirement:</strong> Only trained individuals should clean spills with adequate PPE. 
              Each employee involved with handling HDs should be familiar with the location and use of spill kits.
            </InfoBox>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Droplet className="w-5 h-5 text-red-600" />
              Impact of Drug Spills
            </h5>
            <p className="text-slate-700 mb-3">
              Drug spills can cause contamination of the floor, work surface, equipment, bedding, clothing, and 
              personal contamination. It may result in contamination of patients, HCWs, caregivers and environmental 
              contamination.
            </p>

            <div className="flex justify-center my-4">
              <img
                src={cleaning1}
                alt="Cleaning HD spills"
                className="rounded-lg shadow-xl max-w-full w-auto border-4 border-white"
                style={{ maxHeight: '150px' }}
              />
            </div>
            <div className="bg-red-100 rounded-lg p-2 text-center">
              <p className="text-xs text-red-900 font-medium italic">
                ⚠️ Impact and consequences of HD spills
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 shadow-lg">
            <h5 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg">
              <AlertTriangle className="w-5 h-5" />
              Types of Possible Cytotoxic/HD Spills
            </h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Spills of any dosage form (liquid, powder forms, tablets, capsules, ointment, cream, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Spilt or leaked during the handling process (preparation, storage, transport, administration and disposal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Leaking drugs following disposal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Spill or leakage during transport of the final drug dose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Drug-contaminated waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Contaminated body waste/substances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
            <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5" />
              Spill Response Protocol
            </h5>
            <p className="text-slate-700 mb-4">
              The spill area should be restricted to authorized participants, identified by a warning sign, and must 
              be cleaned up using a spill kit. Incident reports on HD spills, including types of spills, exposed 
              persons and procedures, need to be well-documented. The contaminated waste generated by HD spills must 
              be disposed of in cytotoxic waste bin.
            </p>
            
            <div className="bg-white rounded-lg p-5 mt-4 shadow-sm">
              <h6 className="font-semibold text-blue-900 mb-3">Key Requirements:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Restrict access to authorized personnel only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Post warning signs immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Use appropriate spill kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Document all incidents thoroughly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Only trained personnel clean spills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 shadow-lg">
            <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2 text-lg">
              <Package className="w-5 h-5" />
              Contents of HD Spill Kit
            </h5>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <h6 className="font-semibold text-purple-900 mb-3">📋 Documentation & Signage</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Instructions/safe work procedures for using a spill kit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Caution sign to quarantine spill-out area (Sign saying "Caution Hazardous Drug Spill")</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <h6 className="font-semibold text-purple-900 mb-3">🧤 Personal Protective Equipment</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Two pairs of disposable chemical-protective gloves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Low permeability, disposable protective garment (gown or coverall, shoe covers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Face shield (full-face chemical splash shield or safety glasses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Respirator (N95 or better)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Head cover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Overshoe</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <h6 className="font-semibold text-purple-900 mb-3">🧽 Absorbent Materials</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Adequate number of absorbent materials – swabs, pillows, chemical absorbent mats or granules, spill pads, disposable towels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <h6 className="font-semibold text-purple-900 mb-3">🛠️ Equipment & Supplies</h6>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>A disposable scoop for collecting glass fragments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>A puncture-resistant container or sealable, thick plastic waste disposal bags and ties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Water for powder spills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Suitable decontaminants/cleaning agents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <img
              src={cleaning2}
              alt="Spill kit contents and usage"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '300px' }}
            />
          </div>
          <div className="bg-purple-100 rounded-lg p-3 text-center h-10">
            <p className="text-xs text-purple-900 font-medium italic mb-6">
              🧰 Complete HD spill kit with all required components
            </p>
          </div>
        </div>
      </ContentCard>

      <ContentCard 
        title="Safe Handling of Contaminated Bed Linen" 
        icon={<span className="text-2xl">🛏️</span>}
        variant="info"
      >
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={cleaning3}
                alt="Safe handling of contaminated bed linen"
                className="rounded-lg shadow-xl w-full border-4 border-white"
                style={{ maxHeight: '450px' }}
              />
              <div className="bg-blue-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-blue-900 font-medium italic">
                  🧺 Proper handling of contaminated linen
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-blue-50 rounded-lg p-5 mb-4">
                <p className="text-slate-700 leading-relaxed mb-3">
                  HDs or their metabolites may be present in urine, blood, faeces, sweat, and vomit, bed linen such as 
                  sheets, blankets, and pillowcases, which are contaminated with drugs or drug products. Therefore, care 
                  should be taken when handling these materials, as with other waste products.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  A typical recommendation is to wear protective gloves when handling contaminated linen and to place it in a labelled bag so that it can be prewashed separately and then washed with the regular laundry. The washing procedure must be followed twice for contaminated linen using the washing machine and appropriate detergent/ washing powder. Contaminated items need to be washed separately with warm water and laundry detergent.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-300 shadow-sm">
              <h6 className="font-semibold text-blue-900 mb-3">🏥 Emergency Facility Requirements:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Emergency kits with PPE and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Eyewash fountains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Emergency shower</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Running water access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Sterile saline for irrigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Posted emergency procedures</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300 shadow-sm">
              <h6 className="font-semibold text-green-900 mb-3">🧺 Handling Protocol:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>Wear protective gloves when handling contaminated linen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Place contaminated linen in a clearly labelled bag</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Prewash separately from regular laundry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Wash twice using washing machine and appropriate detergent/washing powder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <span>Wash contaminated items separately with warm water and laundry detergent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
);

export default SpillManagementSection;