import { Sparkles } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { RequirementsList } from "../RequirementsList";

// Cleaning and Decontamination Section
export const CleaningDecontaminationSection = () => (
  <>
    <ContentCard 
      title="Deactivation, Decontamination, Cleaning and Disinfection" 
      icon={<Sparkles className="w-6 h-6 text-teal-600" />}
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          All areas where HDs are handled, as well as all reusable equipment and devices, must be suitably 
          deactivated, decontaminated, and cleaned. Additionally, sterile compounding areas and devices must 
          be subsequently disinfected. All personnel performing these steps must be trained in appropriate 
          procedures.
        </p>

        <InfoBox type="critical">
          <strong>PPE Requirement:</strong> All personnel must wear appropriate PPE resistant to cleaning agents: 
          two pairs of chemotherapy gloves, impermeable disposable gowns, eye protection, face shields (if splash 
          risk), and respiratory protection.
        </InfoBox>

        <div className="space-y-6 mt-6">
          {/* Deactivation */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
            <h5 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              Step 1: Deactivation
            </h5>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Purpose:</strong> Render compound inert or inactive
            </p>
            <RequirementsList
              items={[
                "Single process has NOT been found to deactivate all currently available HDs",
                "Use EPA-registered oxidizers (peroxide formulations, sodium hypochlorite)",
                "Follow manufacturer recommendations for BSC/isolators",
                "Alcohol alone will NOT deactivate hazardous drugs",
                "Neutralize sodium hypochlorite to prevent corrosion",
                "Select materials carefully as they may produce hazardous byproducts"
              ]}
              color="green"
            />
            <InfoBox type="warning">
              <strong>Surface Protection:</strong> Sodium hypochlorite must be neutralized with sodium thiosulfate 
              or suitable agent (sterile alcohol, sterile water, germicidal detergent) to prevent stainless-steel 
              corrosion.
            </InfoBox>
          </div>

          {/* Decontamination */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🧹</span>
              Step 2: Decontamination
            </h5>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Purpose:</strong> Remove HD residue by inactivating, neutralizing, or physically removing it
            </p>
            <RequirementsList
              items={[
                "Use validated decontamination materials",
                "Wipe surfaces (never spray to prevent aerosol generation)",
                "Decontaminate C-PEC daily when used",
                "Required after spills and before certification",
                "Wear respiratory protection during procedure",
                "Solution should not alter HD packaging/product labels",
                "Consider surface compatibility and facility requirements"
              ]}
              color="blue"
            />
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-700">
                <strong>Example agents:</strong> Validated materials for HD decontamination, alcohol, water, 
                peroxide, or sodium hypochlorite
              </p>
            </div>
          </div>

          {/* Cleaning */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
            <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🧼</span>
              Step 3: Cleaning
            </h5>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Purpose:</strong> Remove organic and inorganic material (soil, microbial contamination, HD residue)
            </p>
            <RequirementsList
              items={[
                "Use germicidal detergent (e.g., Chlorhexidine)",
                "Do not clean during compounding activities",
                "Use cleaning agents that don't introduce microbial contamination",
                "Cleaning agents do not act directly on HDs",
                "Required for sterile compounding areas"
              ]}
              color="green"
            />
          </div>

          {/* Disinfection */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🦠</span>
              Step 4: Disinfection
            </h5>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Purpose:</strong> Destroy microorganisms
            </p>
            <RequirementsList
              items={[
                "Use EPA-registered disinfectant and/or sterile alcohol",
                "Surfaces must be cleaned before disinfection",
                "Required for sterile compounding areas",
                "Follow proper contact time for effectiveness"
              ]}
              color="purple"
            />
            <InfoBox type="note">
              <strong>Sequence Matters:</strong> Disinfection is only effective after proper cleaning. Always 
              clean first, then disinfect.
            </InfoBox>
          </div>
        </div>
      </div>
    </ContentCard>
  </>
);

export default CleaningDecontaminationSection;