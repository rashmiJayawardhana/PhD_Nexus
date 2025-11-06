// FILE: src/components/content/chapter04/ProtectiveReassignmentSection.tsx
import { Shield, Users, Heart } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import caution from '../../../assets/caution.png';

export const ProtectiveReassignmentSection = () => (
    <>
      <ContentCard 
        title="Protective Reassignment of Workers to Minimize the Risk of Exposure" 
        icon={<Users className="w-6 h-6 text-amber-600" />}
        variant="warning"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
            <h5 className="font-bold text-red-900 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Why Protective Reassignment?
            </h5>
            <p className="text-slate-700 leading-relaxed">
              Teratogenicity and reproductive effects are characteristics of HDs, and a vast literature reports 
              miscarriage or spontaneous abortions, infertility, preterm births and learning disabilities in offspring 
              with exposure to chemotherapy during pregnancy. Protective reassignment is required for risk categories 
              (e.g., parenthood consideration such as pregnancy, intent to conceive, lactation, and having an illness 
              or abnormal pathological results). Assigning a worker to alternative tasks that reduce the risk of 
              exposure to HDs. Recommendations outlined below are made to avoid exposure and related risks during 
              pregnancy or the risk period, and to minimize the potential AEs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Shield className="w-5 h-5 text-indigo-600" />
              Employer Responsibilities
            </h5>
            <p className="text-slate-700 mb-4">
              Employers have a responsibility to ensure workers understand the risks of exposure to HDs.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <p className="text-sm text-slate-700 pt-1">
                    The employer must develop a written policy about the availability of protective reassignment for 
                    appropriate workers (pregnant, intend to conceive, lactation, and medical reasons to avoid exposure).
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <p className="text-sm text-slate-700 pt-1">
                    For employees trying to conceive or who are pregnant, collaboration with the employee's primary 
                    care physician and obstetrician/gynaecologist should be part of the decision-making process.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <p className="text-sm text-slate-700 pt-1">
                    Upon notification that a staff member has a medical reason to avoid exposure to HDs, employers 
                    should offer those staff members the option of alternative duties, if available.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <p className="text-sm text-slate-700 pt-1">
                    Each healthcare setting should identify available options for alternative duties and educate staff 
                    on these options.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </span>
                  <p className="text-sm text-slate-700 pt-1">
                    All staff involved in the handling and administration of HDs should be familiar with and adhere to 
                    local and national policies, as well as follow safe practices with HDs using standard operating 
                    procedures.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </span>
                  <div className="pt-1">
                    <p className="text-sm text-slate-700 mb-2 font-semibold">
                      Examples of protective reassignment include:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Transfer workers to a different area that does not involve exposure to HDs</span>
                      </li>
                      <li className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Assigning the workers to tasks where they will not be exposed to HDs</span>
                      </li>
                      <li className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-600">→</span>
                        <span>Reducing hours worked in areas where HDs are handled</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <img
              src={caution}
              alt="Protective reassignment warning signs and procedures"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-amber-100 rounded-lg p-3 text-center">
            <p className="text-xs text-amber-900 font-medium italic">
              ⚠️ Protective reassignment procedures for at-risk workers
            </p>
          </div>

          {/* Risk Categories */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-5 border-2 border-pink-300">
              <h6 className="font-bold text-pink-900 mb-3">👶 At-Risk Categories</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Pregnant workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Workers trying to conceive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Lactating workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Workers with medical conditions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300">
              <h6 className="font-bold text-green-900 mb-3">✅ Alternative Options</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Transfer to non-HD areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Assign non-HD tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Reduce HD exposure hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Temporary role modification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
);

export default ProtectiveReassignmentSection;