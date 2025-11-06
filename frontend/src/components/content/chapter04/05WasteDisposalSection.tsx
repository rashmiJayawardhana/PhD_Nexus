// FILE: src/components/content/chapter04/WasteDisposalSection.tsx
import { Trash2, AlertCircle, Package } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import WasteTypeCard from "../WasteTypeCard";
import { RequirementsList } from "../RequirementsList";
import waste1 from '../../../assets/waste1.png';
import waste2 from '../../../assets/waste2.png';
import waste3 from '../../../assets/waste3.png';

export const WasteDisposalSection = () => (
  <>
    <ContentCard 
      title="Disposal of Waste" 
      icon={<Trash2 className="w-6 h-6 text-red-600" />}
      variant="warning"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-red-100">
          <p className="text-slate-700 leading-relaxed text-base">
            HD waste is a potential source of occupational exposure to HDs. Waste contaminated with cytotoxic/ HDs, their metabolites, and any residual cytotoxic drugs produced during the handling process (reconstitution, preparation, administration) is generally considered drug waste. Therefore, safe work procedures for handling and disposing of HD waste ensure occupational health and environmental safety.
          </p>
        </div>

        <InfoBox type="critical">
          <strong>Critical Requirement:</strong> All personnel performing routine custodial waste removal and 
          cleaning activities in HD handling areas must be trained in appropriate procedures to protect themselves 
          and the environment.
        </InfoBox>

        <div className="flex justify-center my-4">
          <img
            src={waste1}
            alt="Cytotoxic Waste"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="bg-red-100 rounded-lg p-3 text-center">
          <p className="text-xs text-red-900 font-medium italic">
            🗑️ Proper cytotoxic waste handling procedures
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300 shadow-lg">
          <h5 className="font-bold text-red-900 mb-4 text-lg flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            The Types of HD Waste
          </h5>
          <div className="bg-white rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Unused cytotoxic / HD pharmaceuticals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Any material contact with HD (contaminated waste) preparation procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>HDs that are to be disposed of (Eg, Empty containers used to prepare drugs)/ used and contaminated sharps/ syringes, ampoules, and vials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Packages contact/ contaminated with the HDs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Disposable equipment used to handle HDs (Eg, syringes, needles, IV set, medicine cups)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Disposable PPE (gloves, gowns, respirators, shoe covers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Materials used to clean contaminated surfaces, equipment, or spills.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Contaminated body substances, excreta (vomit, or bodily fluids), dressings, and bandages of patients who are treated with HDs. The majority of drugs are excreted within the first seven days after administration, and some drugs may exist longer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Contaminated linen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Disposable materials contaminated with excreta of patients who are treated with HDs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">×</span>
                <span>Specimens of patients receiving HDs for investigations</span>
              </li>
            </ul>
          </div>

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

        <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md mt-6">
          <h5 className="font-bold text-slate-900 mb-4 text-lg">HD Waste Handling Practices</h5>
          <RequirementsList
            items={[
              "All personnel who perform routine custodial waste removal and cleaning activities in HD handling areas must be trained in the appropriate procedures to protect themselves and the environment, preventing HD contamination.",
              "Consider all HD waste, unused HDs, trace-contaminated PPE, and other materials used in handling HDs to be contaminated with, at a minimum, trace quantities of HDs. Therefore, waste must be placed in an appropriate waste container and disposed of in accordance with local, State, and federal regulations.",
              "PPE, such as gloves and sleeve covers (if used), worn during compounding should be disposed of in the proper waste container before leaving the C-PEC (BSC/ isolator).",
              "Waste handling efforts should minimize the risk of contaminating the local water supply and/or soil with HDs, and HD waste should never be discarded into wastewater (such as sinks or toilets) or a landfill.",
              "Incineration (burning at 1100°C) is the preferred disposal method for most HD waste. However, only special incinerators are effective in removing some of the HD residues. Therefore, terminal disposal must be performed by a certified hazardous waste organization in accordance with local regulations.",
              "Transport to terminal discarding/ incineration locations needs to be done using appropriate PPE after sealing them.",
              "HD waste must always be separated from other waste at the first disposal."
            ]}
            color="red"
          />
        </div>

        <InfoBox type="note">
          <strong>Patient Excreta:</strong> Most drugs are excreted within 7 days. Avoid direct contact using 
          PPE. May dispose in normal sewage system, but place solid waste in cytotoxic waste bags.
        </InfoBox>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
          <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Package className="w-6 h-6" />
            HD Waste Container Requirements
          </h5>
          <p className="text-slate-700 mb-4">HD waste containers or bags need to include the following criteria.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Leak-proof and sealable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Puncture and fluid-resistant</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Designated for use with HDs (e.g.: Double-bagging and foot-paddling waste bins)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Clearly labelled as designated for HDs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mt-6">
          <div>
            <img
              src={waste2}
              alt="Proper waste containers"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-red-100 rounded-lg p-2 mt-2 text-center">
              <p className="text-xs text-red-900 font-medium italic">
                🗑️ Proper HD waste containers and labeling
              </p>
            </div>
          </div>
          <div>
            <img
              src={waste3}
              alt="Waste disposal procedures"
              className="rounded-lg shadow-xl w-auto border-4 border-white"
              style={{ maxHeight: '500px' }}
            />
            <div className="bg-red-100 rounded-lg p-2 mt-2 text-center mr-13">
              <p className="text-xs text-red-900 font-medium italic">
                ♻️ Safe waste disposal practices
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 mt-6">
          <h5 className="font-bold text-amber-900 mb-4">Storage Area Requirements</h5>
          <p className="text-slate-700 mb-4">Disposal of HD-contaminated soft materials, such as laundry, gloves, or gowns, should be made in thick, leak-proof plastic bags and placed in clearly labelled waste containers.</p>
          <p className="text-slate-700 mb-4">Until terminal disposal, the work area that stores HD waste must be designed as mentioned below.</p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span>Store HD waste in a cool, locked, ventilated area.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span>Isolate the storage area for HD waste from other workplace areas as much as possible.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span>Store HD waste in a manner that reduces the risk of leaks and spills, such as by having shelves with lipped edges.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span>Use materials that are easy to clean, such as stainless steel</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 mt-6">
          <h5 className="font-bold text-purple-900 mb-4">Patient Excreta Handling</h5>
          <p className="text-slate-700 mb-4">Most cytotoxic drugs are eliminated from the body within seven days of administration, although some may be excreted over a more extended period. Active forms of drugs or their metabolites may remain within the body's excreta, and safe work procedures that reduce potential exposure to excreta are outlined below.</p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Avoid direct contact with body waste and use appropriate PPE</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Prevent the generation of inhalable drug particles or aerosols</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Cleaning body waste spills immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Use urine hats where possible to minimize the generation of aerosols</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Excreta (urine, faeces, colostomy bags, urostomy bags, vomit) may be disposed of in the normal sewage system. However, those waste (nappies, colostomy, urostomy bags) need to be placed in cytotoxic waste bags</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Consider the use of indwelling catheters for incontinent patients</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Laboratory specimens need to be labelled with cytotoxic warnings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Solid linen and clothing are potentially contaminated</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </>
);

export default WasteDisposalSection;