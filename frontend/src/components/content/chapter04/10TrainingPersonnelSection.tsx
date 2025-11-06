// FILE: src/components/content/chapter04/TrainingPersonnelSection.tsx
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import training from '../../../assets/training.png';

export const TrainingPersonnelSection = () => (
    <>
      <ContentCard 
        title="Training Personnel in Handling HDs" 
        icon={<GraduationCap className="w-6 h-6 text-green-600" />}
        variant="success"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <p className="text-slate-700 leading-relaxed text-base">
              All staff who handle cytotoxic drugs must be provided with sufficient education and training applicable 
              to their role, regarding the risks and safe handling of these drugs. Training should begin when the 
              worker is first assigned to an area where chemotherapy agents are present and should be repeated 
              annually. The educational content should be specific to the activities for which the worker is 
              responsible. All HCWs handling chemotherapy/HDs should be supplied with up-to-date information on all 
              aspects of the safe handling process related to their job role. (This content also acts as educational 
              material for a tailored education intervention planned for oncology nurses in Sri Lanka).
            </p>
          </div>

          <div className="flex justify-center my-6">
            <img
              src={training}
              alt="Training personnel in handling HDs"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-green-100 rounded-lg p-3 text-center">
            <p className="text-xs text-green-900 font-medium italic">
              🎓 Comprehensive training program for HD handling
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
              Training Content for HD Handlers
            </h5>
            <p className="text-slate-700 mb-4">
              Content of training for HD handlers should include some or all of the following:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-500 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">📖</span>
                    <div>
                      <h6 className="font-semibold text-green-900 mb-2">Core Knowledge</h6>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Adverse health effects of exposure to HDs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Routes of occupational chemotherapy/HDs exposure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Selection and use of PPE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Selection and use of engineering controls as applicable</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">🛠️</span>
                    <div>
                      <h6 className="font-semibold text-blue-900 mb-2">Practical Skills</h6>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Work practices in each step of handling (preparation, transport, administration, handling of waste, deactivation, cleaning, managing spills and emergency exposure)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Patient care issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Role of the medical surveillance program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-2xl">⭐</span>
                  <div>
                    <h6 className="font-semibold text-purple-900 mb-2">Additional ISOPP Guidelines</h6>
                    <p className="text-sm text-slate-700 mb-3">
                      Additionally, ISOPP guidelines recommended the following aspects as well for all staff who 
                      handle chemotherapy and other HDs:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Recognition of cytotoxic drugs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Location and use of safety stations (e.g., eyewash stations and showers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Receipt, unpacking, transport and storage of cytotoxic drugs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Cytotoxic spills and accidental exposure (Workers who are responsible for responding to spills of HDs should have additional training about spill cleanup and respirator usage)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Hospital policies and procedures on cytotoxic management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
            <h5 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg">
              <Users className="w-6 h-6" />
              Evaluation and Record Keeping
            </h5>
            <p className="text-slate-700 mb-4">
              Following the training, the knowledge and performance of specific skills should be evaluated. 
              Questionnaires and observation checklists on safe handling practices, as well as organizational 
              policies, are typically used for this purpose.
            </p>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-amber-900 mb-3">Required Records:</h6>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Training date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Topics covered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Names of resource persons for the session</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>List of participants attending the training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Course evaluations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Competencies and proficiencies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training Schedule */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300">
              <h6 className="font-bold text-blue-900 mb-3">📅 Initial Training</h6>
              <p className="text-sm text-slate-700">
                Provided when worker is first assigned to HD handling areas. Covers all fundamental knowledge and 
                skills specific to job role.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300">
              <h6 className="font-bold text-purple-900 mb-3">🔄 Annual Refresher</h6>
              <p className="text-sm text-slate-700">
                Repeated annually to maintain competency, update on new procedures, and reinforce safe practices.
              </p>
            </div>
          </div>

          <InfoBox type="tip">
            <strong>Training Schedule:</strong> Initial training when first assigned to HD handling areas, with 
            annual refresher training to maintain competency and stay current with best practices.
          </InfoBox>
        </div>
      </ContentCard>
    </>
);

export default TrainingPersonnelSection;