// FILE: src/components/content/chapter04/CleaningDecontaminationSection.tsx
import { Sparkles, Droplets, Flame, Wind } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { RequirementsList } from "../RequirementsList";
import deactivation from '../../../assets/deactivation.png';
import deactivation1 from '../../../assets/deactivation1.png';
import deactivation2 from '../../../assets/deactivation2.png';

export const CleaningDecontaminationSection = () => (
  <>
    <ContentCard 
      title="Deactivation, Decontamination, Cleaning and Disinfection" 
      icon={<Sparkles className="w-6 h-6 text-teal-600" />}
    >
      <div className="space-y-5">
        <div className="bg-teal-50 rounded-xl p-5 border-2 border-teal-200">
          <p className="text-slate-700 leading-relaxed text-base">
            All areas where HDs are handled, as well as all reusable equipment and devices, must be suitably deactivated, decontaminated, and cleaned. Additionally, sterile compounding areas and devices must be subsequently disinfected. All personnel performing these steps must be trained in the appropriate procedures to protect themselves and the environment from contamination.
          </p>
        </div>

        <div className="flex justify-center my-4">
          <img
            src={deactivation}
            alt="Deactivation, decontamination, cleaning and disinfection"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '200px' }}
          />
        </div>
        <div className="bg-teal-100 rounded-lg p-3 text-center">
          <p className="text-xs text-teal-900 font-medium italic">
            ✨ Complete decontamination process for HD handling areas
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border-2 border-slate-200 shadow-sm">
          <p className="text-slate-700 mb-4 leading-relaxed">Written procedures should be available for all steps, including the agents used, dilutions (if applicable), and the frequency of use. Those procedures could be adopted from the standards (e.g., USP Chapter 795- Nonsterile compounding areas, USP Chapter 797 - Sterile compounding areas). Adhering to recommended standards, all personnel performing these activities must wear appropriate PPE resistant to the cleaning agents used, including two pairs of chemotherapy gloves, impermeable disposable gowns, eye protection and face shields (if there is a risk of splashing) and respiratory protection.</p>
          <p className="text-slate-700 leading-relaxed">The deactivating, decontaminating, cleaning, and disinfecting agents selected must be appropriate for the type of HD contaminant(s), location, and surface materials. The products used must be compatible with the surface material. Manufacturer or supplier information is always needed. Wipes wetted with the appropriate solution (s) need to be used; sprays should not be used to avoid spreading HD residue. All disposable materials must be disposed of in accordance with Environmental Protection Agency (EPA) regulations and the entity's policies. Table shows the cleaning steps, purpose and cleaning agents.</p>
        </div>

        <InfoBox type="critical">
          <strong>PPE Requirement:</strong> All personnel must wear appropriate PPE resistant to cleaning agents: 
          two pairs of chemotherapy gloves, impermeable disposable gowns, eye protection, face shields (if splash 
          risk), and respiratory protection.
        </InfoBox>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div>
            <img
              src={deactivation1}
              alt="PPE for decontamination"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-teal-100 rounded-lg p-2 mt-2 text-center">
              <p className="text-xs text-teal-900 font-medium italic">
                🧤 Proper PPE for decontamination activities
              </p>
            </div>
          </div>
          <div>
            <img
              src={deactivation2}
              alt="Cleaning procedures"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-teal-100 rounded-lg p-2 mt-2 text-center">
              <p className="text-xs text-teal-900 font-medium italic">
                🧽 Step-by-step cleaning procedures
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-slate-900 mt-6 mb-4">Cleaning Steps, Purpose and Cleaning Agents</h4>
        <div className="space-y-6 mt-6">
          {/* Step 1: Deactivation */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-300 shadow-lg">
            <h5 className="font-bold text-orange-900 mb-4 flex items-center gap-2 text-lg">
              <Flame className="w-6 h-6" />
              Step 1: Deactivation
            </h5>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700">
                <strong>Purpose:</strong> Render compound inert or inactive HDs
              </p>
            </div>
            <RequirementsList
              items={[
                "A single process has not been found to deactivate all currently available HDs.",
                "Applying alcohol to PEC (BSCs or isolators), or other contaminated surfaces, will not deactivate any HDs and may result in the spread of residue and further contamination. Therefore, PECs should be decontaminated according to the manufacturer's recommendations.",
                "A, deactivating materials need to be selected carefully, because they may produce hazardous byproducts, respiratory effects, and caustic damage to surfaces.",
                "Surface damage /corrosion of stainless-steel surfaces caused by sodium hypochlorite, if left untreated. Therefore, sodium hypochlorite must be neutralized with sodium thiosulfate or a suitable agent (e.g.: sterile alcohol, sterile water, germicidal detergent, or sporicidal agent)."
              ]}
              color="green"
            />
            <div className="bg-orange-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-700"><strong>Example agents:</strong> Agents listed in HD labelling, EPA-registered oxidizers (peroxide formulations, sodium hypochlorite, etc.).</p>
            </div>
            <InfoBox type="warning">
              <strong>Surface Protection:</strong> Sodium hypochlorite must be neutralized with sodium thiosulfate 
              or suitable agent (sterile alcohol, sterile water, germicidal detergent) to prevent stainless-steel 
              corrosion.
            </InfoBox>
          </div>

          {/* Step 2: Decontamination */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
            <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
              <Droplets className="w-6 h-6" />
              Step 2: Decontamination
            </h5>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700">
                <strong>Purpose:</strong> Remove HD residue by inactivating, neutralizing, or physically removing it from various places (non-disposable surfaces, disposable materials (e.g.: wipes, pads, towels), and areas to be cleaned)
              </p>
            </div>
            <RequirementsList
              items={[
                "When selecting suitable agents, surface compatibility and facility requirements need to be considered.",
                "Surface wipe sampling should be used in accordance with the manufacturer's guidelines for appropriate decontamination and to prevent the spread of particles/ aerosols.",
                "The C-PEC (BSc/ isolators) must be decontaminated at least daily (when used), anytime a spill occurs, before and after certification, any time voluntary interruption occurs, if the ventilation tool is moved, and when compounding different HDs.",
                "The decontamination solution should not alter the HD packaging/ product label (due to the possibility of missing information).",
                "Also, respiratory protection is required during the procedure to protect the worker."
              ]}
              color="blue"
            />
            <div className="bg-blue-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-700">
                <strong>Example agents:</strong> Validated materials for HD decontamination, as well as other materials, have proven effective (e.g.: alcohol, water, peroxide, or sodium hypochlorite).
              </p>
            </div>
          </div>

          {/* Step 3: Cleaning */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2 text-lg">
              <Sparkles className="w-6 h-6" />
              Step 3: Cleaning
            </h5>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700">
                <strong>Purpose:</strong> Remove organic and inorganic materials (e.g., soil, microbial contamination, HD residue) from objects and surfaces using water, detergents, surfactants, solvents, and/or other chemicals
              </p>
            </div>
            <RequirementsList
              items={[
                "Cleaning agents used on compounding equipment should not introduce microbial contamination.",
                "Cleaning steps are not performed when compounding activities are occurring.",
                "Also, cleaning agents do not act directly on the HDs."
              ]}
              color="green"
            />
            <div className="bg-green-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-700"><strong>Example agents:</strong> Germicidal detergent (e.g., Chlorhexidine)</p>
            </div>
          </div>

          {/* Step 4: Disinfection */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 shadow-lg">
            <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2 text-lg">
              <Wind className="w-6 h-6" />
              Step 4: Disinfection
            </h5>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700">
                <strong>Purpose:</strong> Destroy microorganisms
              </p>
            </div>
            <RequirementsList
              items={[
                "Before disinfection, surfaces must be adequately cleaned."
              ]}
              color="purple"
            />
            <div className="bg-purple-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-700"><strong>Example agents:</strong> EPA-registered disinfectant and/or sterile alcohol</p>
            </div>
            <InfoBox type="note">
              <strong>Sequence Matters:</strong> Disinfection is only effective after proper cleaning. Always 
              clean first, then disinfect.
            </InfoBox>
          </div>
        </div>

        {/* Process Summary */}
        <div className="grid md:grid-cols-4 gap-3 mt-6">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-4 border-2 border-orange-300 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <h6 className="font-bold text-orange-900 text-xs mb-1">1. Deactivate</h6>
            <p className="text-[10px] text-slate-600">Render HD inert</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center">
            <div className="text-3xl mb-2">💧</div>
            <h6 className="font-bold text-blue-900 text-xs mb-1">2. Decontaminate</h6>
            <p className="text-[10px] text-slate-600">Remove residue</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center">
            <div className="text-3xl mb-2">🧽</div>
            <h6 className="font-bold text-green-900 text-xs mb-1">3. Clean</h6>
            <p className="text-[10px] text-slate-600">Remove materials</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center">
            <div className="text-3xl mb-2">🦠</div>
            <h6 className="font-bold text-purple-900 text-xs mb-1">4. Disinfect</h6>
            <p className="text-[10px] text-slate-600">Kill microorganisms</p>
          </div>
        </div>
      </div>
    </ContentCard>
  </>
);

export default CleaningDecontaminationSection;