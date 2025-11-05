// FILE: src/components/content/chapter03/AdministrativeControlsSection.tsx
import { Boxes} from 'lucide-react';
import { ContentCard } from "../ContentCard";

export const AdministrativeControlsSection: React.FC = () => (
  <>
    <ContentCard 
      title="Level 4 : Administrative Controls" 
      icon={<Boxes className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Level 04 administrative controls include safe work practices, and their content is outlined below. Further, Chapter 04 describes the administrative controls that apply to nursing practice.
        </p>

        <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200">
          <ul className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
            <li>Safe work procedures/ SOPs for all tasks and activities involving HDs.</li>
            <li>Procedures for the use of BSC/ isolators</li>
            <li>Requirements for providing, selecting, using, maintaining, and disposing of PPE</li>
            <li>Appropriate personal hygiene-related activities (e.g., proper handwashing), prohibiting risk behaviours (e.g., eating, drinking, smoking, applying personal care products, and storing food in HD handling areas or during handling HDs)</li>
            <li>Reporting and response procedures for accidental exposure, a spill, or the uncontrolled release of HDs</li>
            <li>Procedures for identification, removal, cleanup, and disposal of HD waste, including any materials that contact/ contaminated with HD, or anything contaminated by excreta from a patient treated with HDs</li>
            <li>Reduce the number of times HDs are handled</li>
            <li>Limit access and restrict participants to the areas where HDs are present</li>
            <li>Implement protective reassignment</li>
            <li>Training personnel in handling HDs</li>
            <li>Medical Surveillance</li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </>
);

export default AdministrativeControlsSection;