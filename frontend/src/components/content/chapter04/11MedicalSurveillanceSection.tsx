// FILE: src/components/content/chapter04/MedicalSurveillanceSection.tsx
import { Heart, Activity, TrendingUp } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import medical from '../../../assets/medical.png';

export const MedicalSurveillanceSection = () => (
    <>
      <ContentCard 
        title="Medical Surveillance" 
        icon={<Heart className="w-6 h-6 text-indigo-600" />}
        variant="info"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed text-base">
              Medical surveillance is a vital program in detecting health risks. It involves assessing and 
              documenting symptom complaints, physical findings, and laboratory tests (e.g., FBC, LFT) to determine 
              whether there is a deviation from the expected normal parameters. Medical surveillance programs act as 
              a secondary prevention tool while taking appropriate measures (use of engineering controls, other 
              administrative controls, safe work processes, PPE, and worker education). However, the insufficiency and 
              unavailability of such programs are widely reported, especially in limited-resource settings.
            </p>
          </div>

          <div className="flex justify-center my-6">
            <img
              src={medical}
              alt="Medical surveillance procedures"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-indigo-100 rounded-lg p-3 text-center">
            <p className="text-xs text-indigo-900 font-medium italic">
              🏥 Comprehensive medical surveillance program
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Activity className="w-6 h-6 text-indigo-600" />
              Medical Surveillance Program Elements
            </h5>
            <p className="text-slate-700 mb-4">
              Medical surveillance program elements are outlined as follows:
            </p>

            <div className="space-y-4">
              {/* Element 1 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Worker Registry</h6>
                    <p className="text-sm text-slate-700">
                      Maintain a list of all workers who are exposed to HDs as a part of their job assignment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Element 2 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Health Services Coordination</h6>
                    <p className="text-sm text-slate-700">
                      Conduct health services to perform medical surveillance according to OSHA regulations and 
                      preserve the confidentiality of personal medical information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Element 3 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Initial Baseline Assessment</h6>
                    <p className="text-sm text-slate-700 mb-3">
                      Initial baseline assessment includes:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Assessment of the worker's health status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Medical history (including reproductive history)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>HD exposure history (records of HDs handled, with quantities and dosage forms, estimated number of HDs handled per week, estimates of hours spent handling HDs per week and/or per month)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Physical examination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Laboratory testing (Physical assessment and laboratory studies are used to assess changes in target organs due to handling HDs - e.g., FBC, LFT)</span>
                      </li>
                    </ul>
                    <div className="mt-3 bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-slate-700">
                        <strong>Note:</strong> Biological monitoring, which involves determining the presence of drugs 
                        or their metabolites in biological samples (such as blood or urine), is also effective in 
                        assessing risk. However, it is not currently recommended in routine surveillance protocols. 
                        However, it may have a role in the follow-up of acute spills involving a specific agent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Element 4 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Periodic Evaluation</h6>
                    <p className="text-sm text-slate-700">
                      Periodic evaluation of the elements of the medical surveillance described above (updated health 
                      and exposure history, physical assessment, and laboratory measures, as appropriate) should 
                      continue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Element 5 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Follow-up Plan Development</h6>
                    <p className="text-sm text-slate-700 mb-3">
                      Development of a follow-up plan for workers who have shown health changes suggesting toxicity 
                      or who have experienced acute exposure. This follow-up should include:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>An evaluation of current engineering and administrative controls and equipment to ensure that all systems are appropriately and accurately implemented</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Health issues identified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Medical review after injury/spill/splash</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Name of exposed HDs/carcinogens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Period/amount of exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Recommendations and medical implementations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Element 6 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Documentation</h6>
                    <p className="text-sm text-slate-700">
                      Carefully document spills, spill cleanup activities, and accidental exposure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Element 7 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    7
                  </span>
                  <div>
                    <h6 className="font-semibold text-indigo-900 mb-2 text-base">Policy Development</h6>
                    <p className="text-sm text-slate-700">
                      Develop policies that guide employees in how to pursue surveillance through their primary care 
                      providers in settings without employee health services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Key Benefits of Medical Surveillance
            </h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🛡️</span>
                  Early Detection
                </h6>
                <p className="text-sm text-slate-700">
                  Identifies health changes before they become serious, allowing for timely intervention.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  Trend Monitoring
                </h6>
                <p className="text-sm text-slate-700">
                  Tracks patterns of exposure and health effects across the workforce.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🔍</span>
                  System Evaluation
                </h6>
                <p className="text-sm text-slate-700">
                  Assesses effectiveness of engineering and administrative controls.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">📝</span>
                  Documentation
                </h6>
                <p className="text-sm text-slate-700">
                  Maintains comprehensive records for regulatory compliance and worker protection.
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="note">
            <strong>Important:</strong> Medical surveillance acts as a secondary prevention tool and works best when 
            combined with proper engineering controls, administrative controls, safe work processes, appropriate PPE, 
            and comprehensive worker education.
          </InfoBox>
        </div>
      </ContentCard>
    </>
);

export default MedicalSurveillanceSection;