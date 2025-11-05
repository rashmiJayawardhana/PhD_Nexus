import { Trash2 } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import WasteTypeCard from "../WasteTypeCard";
import { RequirementsList } from "../RequirementsList";

export const WasteDisposalSection = () => (
  <>
    <ContentCard 
      title="Disposal of Waste" 
      icon={<Trash2 className="w-6 h-6 text-red-600" />}
      variant="warning"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          HD waste is a potential source of occupational exposure. Waste contaminated with cytotoxic/HDs, their 
          metabolites, and any residual cytotoxic drugs produced during handling is considered drug waste. Safe 
          work procedures ensure occupational health and environmental safety.
        </p>

        <InfoBox type="critical">
          <strong>Critical Requirement:</strong> All personnel performing routine custodial waste removal and 
          cleaning activities in HD handling areas must be trained in appropriate procedures to protect themselves 
          and the environment.
        </InfoBox>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
          <h5 className="font-bold text-red-900 mb-4">Types of Hazardous Drug Waste</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <WasteTypeCard
              category="Pharmaceutical Waste"
              items={[
                "Unused cytotoxic/HD pharmaceuticals",
                "Empty drug containers",
                "Used sharps, syringes, ampoules, vials",
                "Contaminated packaging"
              ]}
            />
            <WasteTypeCard
              category="Equipment & Materials"
              items={[
                "Disposable equipment (IV tubing, medicine cups)",
                "Disposable PPE (gloves, gowns, respirators)",
                "Materials used for cleaning",
                "Contaminated linen"
              ]}
            />
            <WasteTypeCard
              category="Patient-Related Waste"
              items={[
                "Patient excreta (within 7 days of treatment)",
                "Contaminated body substances",
                "Dressings and bandages",
                "Patient specimens"
              ]}
            />
            <WasteTypeCard
              category="Surface Contamination"
              items={[
                "Materials used to clean surfaces",
                "Spill cleanup materials",
                "Contaminated cleaning equipment",
                "Drug-contaminated waste"
              ]}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-200 shadow-sm mt-6">
          <h5 className="font-bold text-slate-900 mb-4">HD Waste Handling Practices</h5>
          <RequirementsList
            items={[
              "All personnel must be trained in waste handling procedures",
              "Never discard into wastewater (sinks/toilets) or landfill",
              "Incineration at 1100°C is preferred disposal method",
              "Always separate HD waste at first disposal point",
              "Use leak-proof, sealable, puncture-resistant containers",
              "Label clearly as hazardous drug waste",
              "Double-bag soft materials",
              "Store in cool, locked, ventilated area",
              "Transport to terminal disposal using appropriate PPE after sealing"
            ]}
            color="red"
          />
        </div>

        <InfoBox type="note">
          <strong>Patient Excreta:</strong> Most drugs are excreted within 7 days. Avoid direct contact using 
          PPE. May dispose in normal sewage system, but place solid waste in cytotoxic waste bags.
        </InfoBox>

        <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
          <h5 className="font-bold text-blue-900 mb-3">HD Waste Container Requirements</h5>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Leak-proof and sealable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Puncture and fluid-resistant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Designated for use with HDs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Clearly labelled as designated for HDs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Double-bagging capability and foot-paddling waste bins</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </>
);

export default WasteDisposalSection;