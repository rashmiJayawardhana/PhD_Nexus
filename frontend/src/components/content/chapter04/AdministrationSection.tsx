import { Syringe } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { ProcedureList } from "../ProcedureList";
import { RequirementsList } from "../RequirementsList";

export const AdministrationSection = () => (
  <>
    <ContentCard 
      title="Administration of Chemotherapy" 
      icon={<Syringe className="w-6 h-6 text-purple-600" />}
      variant="highlight"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Chemotherapy should only be administered by nursing, medical, and pharmacy staff with adequate training, 
          competency, and credentialing. Nurses are at greater risk of exposure during administration, requiring 
          appropriate PPE and proper techniques throughout the entire procedure.
        </p>

        <InfoBox type="critical">
          <strong>Exposure Risk:</strong> Connection and disconnection of HD-containing IV bags or syringes pose 
          risks of generating aerosols, particulates, possible spills or splashes, inhalation, dermal contact, 
          and needle prick injuries.
        </InfoBox>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
          <h5 className="font-bold text-purple-900 mb-4">Parenteral Administration Safety Precautions</h5>
          <ProcedureList
            items={[
              "Have access to a spill kit before beginning procedure",
              "Follow hand washing before handling HDs",
              "Put on PPE before removing HD from delivery container",
              "Inspect delivery container and contents before handling",
              "Wear appropriate PPE: double gloves, gown, respirator, face shield, goggles",
              "Use CSTDs/locking connections (Luer-Lok, needleless) to securely attach tubing",
              "Perform all manipulations below eye level",
              "Check syringes and IV tubes for leakage",
              "Disconnect lines only after thorough flushing with compatible non-cytotoxic solution",
              "Manage extravasations promptly",
              "Dispose of equipment in designated waste containers",
              "Double-bag chemotherapy waste before removing inner gloves",
              "Wash hands immediately after removing PPE"
            ]}
            variant="purple"
          />
        </div>

        <InfoBox type="warning">
          <strong>Critical Practice:</strong> Priming of IV tubing must be done within the ventilated cabinet 
          before adding HDs. Never prime HDs at patient bedside, into gauze pads, sinks, or waste containers.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard title="Oral Administration" icon={<span className="text-2xl">💊</span>} variant="info">
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Cytotoxic oral preparations include tablets and capsules. Proper handling techniques minimize exposure 
          risk to healthcare workers and patients.
        </p>

        <RequirementsList
          title="Oral Administration Work Practices"
          items={[
            "Store oral preparations as directed by manufacturer/pharmacy",
            "Pack in individual packages (unit-dose)",
            "Encourage patient self-administration where possible",
            "Use non-touch techniques when transferring medicines",
            "Avoid direct contact with oral forms",
            "Manipulation (cutting, crushing, splitting) requires BSC - strictly avoid other locations",
            "Isolate and discard damaged/expired drugs as instructed",
            "Dispose equipment immediately in designated cytotoxic bin",
            "Provide instructions to patient/caregiver for safe handling"
          ]}
          color="purple"
        />

        <InfoBox type="tip">
          <strong>Patient Education:</strong> Provide clear instructions on exposure methods and safe handling 
          techniques to minimize contamination of healthcare workers, caregivers, and environment.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard title="Topical Administration" icon={<span className="text-2xl">🧴</span>}>
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Topical administration includes application of creams, ointments, pastes, lotions, or eye drops to 
          skin or mucous membranes. Proper techniques prevent unnecessary exposure.
        </p>

        <RequirementsList
          title="Topical Application Requirements"
          items={[
            "Use appropriate PPE during application",
            "Avoid contact with patient's clothing",
            "Avoid unnecessary contact with topical cytotoxic drug",
            "Use disposable spatula to apply ointment-like preparations",
            "Dispose of all contaminants to cytotoxic waste bins",
            "Educate patients on proper topical applications to minimize environmental exposure"
          ]}
          color="teal"
        />
      </div>
    </ContentCard>
  </>
);

export default AdministrationSection;
