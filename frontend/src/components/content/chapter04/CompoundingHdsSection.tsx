import { Beaker } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { ProcedureList } from "../ProcedureList";
import { RequirementsList } from "../RequirementsList";

export const CompoundingHdsSection = () => (
  <>
    <ContentCard 
      title="Compounding Hazardous Drugs" 
      icon={<Beaker className="w-6 h-6 text-cyan-600" />}
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Compounding of hazardous drugs requires strict protocols to ensure safety of healthcare workers and 
          maintain drug sterility. Only trained individuals should compound HDs, and all procedures must be 
          performed in appropriate containment environments.
        </p>

        <InfoBox type="critical">
          <strong>Essential Requirement:</strong> Only trained personnel may compound HDs. All compounding must 
          be performed in a certified C-PEC (BSC or isolator) with strict aseptic technique.
        </InfoBox>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
          <h5 className="font-bold text-teal-900 mb-4">Compounding Work Practices</h5>
          <ProcedureList
            items={[
              "Wash hands thoroughly before donning PPE",
              "Wear full PPE: double gloves, gown, eye protection, and respirator",
              "Remove outer packaging and wipe all vials with moist alcohol wipe",
              "Work on disposable plastic-backed paper liner inside C-PEC",
              "Prime IV tubing inside ventilated cabinet before adding HDs",
              "Use CSTDs when transferring drugs between containers",
              "Seal final dose in plastic bag before removing from cabinet",
              "Remove outer gloves and contaminated materials inside C-PEC",
              "Wash hands immediately after removing gloves"
            ]}
            variant="teal"
          />
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-200 shadow-sm">
          <h5 className="font-bold text-slate-900 mb-4">C-SEC Requirements (Compounding Room)</h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h6 className="font-semibold text-slate-800 mb-3">Environmental Controls</h6>
              <RequirementsList
                items={[
                  "Minimum 20 ACPH (Air Changes Per Hour)",
                  "Externally vented system",
                  "HEPA exhaust filtration",
                  "Temperature 18-22°C",
                  "Humidity 40-60%"
                ]}
                color="blue"
              />
            </div>
            <div>
              <h6 className="font-semibold text-slate-800 mb-3">Access & Safety</h6>
              <RequirementsList
                items={[
                  "Access restricted to authorized personnel only",
                  "Clearly marked as 'Cytotoxic Preparation Area'",
                  "HEPA-filtered air environment maintained",
                  "Negative air pressure to prevent contamination",
                  "Regular monitoring and maintenance"
                ]}
                color="green"
              />
            </div>
          </div>
        </div>

        <InfoBox type="warning">
          <strong>Critical Safety Note:</strong> If no PEC is available, prepare HD in a quiet workspace away 
          from heating/cooling vents and other personnel. However, this is NOT recommended practice.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard title="Transport of Compounded HDs" icon={<span className="text-2xl">🚚</span>} variant="info">
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Final, ready-to-administer dosage forms should be safely transported to the administration area from 
          the preparation site. Trained personnel must handle transportation with proper precautions.
        </p>

        <RequirementsList
          title="Transportation Safety Requirements"
          items={[
            "Only trained persons transport drugs with precautions to avoid dropping and contamination",
            "IV bags must be connected to primed IV lines (priming done before adding HDs)",
            "Double-bag all final doses and place in thick, sealed containers",
            "Affix 'Hazardous Drug' auxiliary labels to dose and transport bag",
            "Doses in syringes must be precise and require no further manipulation",
            "Use manual transportation rather than mechanical (pneumatic tubes) to minimize breakage risk",
            "If using pneumatic tubes, use specially designed tubes (not standard sample transport tubes)",
            "Have spill kit available during transportation"
          ]}
          color="blue"
        />

        <InfoBox type="warning">
          <strong>Transport Risk:</strong> Pressure within pneumatic tubes may cause leakage. Use transport 
          bags to prevent spills and protect handlers from exposure.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default CompoundingHdsSection;