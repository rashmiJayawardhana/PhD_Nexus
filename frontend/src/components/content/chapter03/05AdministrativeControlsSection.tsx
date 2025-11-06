// FILE: src/components/content/chapter03/AdministrativeControlsSection.tsx
import { ClipboardList, BookCheck } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";

export const AdministrativeControlsSection: React.FC = () => (
  <>
    <ContentCard 
      title="Level 4: Administrative Controls" 
      icon={<ClipboardList className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-indigo-100">
          <p className="text-slate-700 leading-relaxed text-base">
            Level 04 administrative controls include safe work practices, and their content is outlined below. Further, Chapter 04 describes the administrative controls that apply to nursing practice.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300 shadow-md">
          <h5 className="font-bold text-indigo-900 mb-4 text-lg flex items-center gap-2">
            <BookCheck className="w-6 h-6" />
            Administrative Control Measures
          </h5>
          <div className="space-y-3">
            {/* Item 1 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-indigo-500">
              <div className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">1</span>
                <p className="text-sm text-slate-700">Safe work procedures/ SOPs for all tasks and activities involving HDs.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">2</span>
                <p className="text-sm text-slate-700">Procedures for the use of BSC/ isolators</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
              <div className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">3</span>
                <p className="text-sm text-slate-700">Requirements for providing, selecting, using, maintaining, and disposing of PPE</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">4</span>
                <p className="text-sm text-slate-700">Appropriate personal hygiene-related activities (e.g., proper handwashing), prohibiting risk behaviours (e.g., eating, drinking, smoking, applying personal care products, and storing food in HD handling areas or during handling HDs)</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">5</span>
                <p className="text-sm text-slate-700">Reporting and response procedures for accidental exposure, a spill, or the uncontrolled release of HDs</p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <span className="bg-orange-100 text-orange-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">6</span>
                <p className="text-sm text-slate-700">Procedures for identification, removal, cleanup, and disposal of HD waste, including any materials that contact/ contaminated with HD, or anything contaminated by excreta from a patient treated with HDs</p>
              </div>
            </div>

            {/* Item 7 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">7</span>
                <p className="text-sm text-slate-700">Reduce the number of times HDs are handled</p>
              </div>
            </div>

            {/* Item 8 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <span className="bg-yellow-100 text-yellow-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">8</span>
                <p className="text-sm text-slate-700">Limit access and restrict participants to the areas where HDs are present</p>
              </div>
            </div>

            {/* Item 9 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-pink-500">
              <div className="flex items-start gap-3">
                <span className="bg-pink-100 text-pink-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">9</span>
                <p className="text-sm text-slate-700">Implement protective reassignment</p>
              </div>
            </div>

            {/* Item 10 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-cyan-500">
              <div className="flex items-start gap-3">
                <span className="bg-cyan-100 text-cyan-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">10</span>
                <p className="text-sm text-slate-700">Training personnel in handling HDs</p>
              </div>
            </div>

            {/* Item 11 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-violet-500">
              <div className="flex items-start gap-3">
                <span className="bg-violet-100 text-violet-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">11</span>
                <p className="text-sm text-slate-700">Medical Surveillance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Categories Highlight */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
            <div className="text-3xl mb-2">📋</div>
            <h6 className="font-bold text-blue-900 text-sm mb-1">Procedures & SOPs</h6>
            <p className="text-xs text-slate-600">Written protocols for all HD tasks</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
            <div className="text-3xl mb-2">🧼</div>
            <h6 className="font-bold text-green-900 text-sm mb-1">Hygiene & Safety</h6>
            <p className="text-xs text-slate-600">Personal practices & risk prevention</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
            <div className="text-3xl mb-2">🎓</div>
            <h6 className="font-bold text-purple-900 text-sm mb-1">Training & Surveillance</h6>
            <p className="text-xs text-slate-600">Staff education & health monitoring</p>
          </div>
        </div>

        <InfoBox type="note">
          <strong>Chapter Reference:</strong> Chapter 04 provides detailed descriptions of administrative 
          controls specifically applicable to nursing practice when handling hazardous drugs.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default AdministrativeControlsSection;