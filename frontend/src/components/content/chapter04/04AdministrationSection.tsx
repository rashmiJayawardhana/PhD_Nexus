// FILE: src/components/content/chapter04/AdministrationSection.tsx
import { Syringe, Droplet, Heart } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { ProcedureList } from "../ProcedureList";
import { RequirementsList } from "../RequirementsList";
import administration from '../../../assets/administration.png';
import administration2 from '../../../assets/administration2.png';
import administration3 from '../../../assets/administration3.png';
import oral from '../../../assets/oral.png';
import topical from '../../../assets/topical.png';

export const AdministrationSection = () => (
  <>
    <ContentCard 
      title="Administration of Chemotherapy" 
      icon={<Syringe className="w-6 h-6 text-purple-600" />}
      variant="highlight"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-purple-100">
          <p className="text-slate-700 leading-relaxed text-base">
            Chemotherapy and other HDs should only be administered by nursing, medical, and pharmacy staff with adequate training, competency, and credentialing. Exposure may occur through all possible routes.
            Despite best practices, the external surfaces of a manufactured product can still be contaminated with drugs. Thus, nurses are at greater risk of getting exposure to HDs during the drug administration process. Therefore, nurses should use appropriate PPE and follow proper techniques throughout the whole procedure.
          </p>
        </div>

        <div className="flex justify-center my-4">
          <img
            src={administration}
            alt="Administration of Chemotherapy"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="bg-purple-100 rounded-lg p-3 text-center">
          <p className="text-xs text-purple-900 font-medium italic">
            💉 Administration of Chemotherapy
          </p>
        </div>

        <InfoBox type="critical">
          <strong>Exposure Risk:</strong> Connection and disconnection of HD containing IV bags or syringes pose a risk of generating aerosols, particulates, possible spills or splashes, inhalation, dermal contact, and needle prick injuries.
        </InfoBox>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-300 shadow-lg mt-6">
          <h5 className="font-bold text-purple-900 mb-4 text-lg flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Parenteral Administration Safety Precautions
          </h5>
          <p className="text-slate-700 mb-4">The safety precautions required for administering parenteral chemotherapy are outlined below.</p>
          <ProcedureList
            items={[
              "Have access to a spill kit. In the event of a spill, cytotoxic spill procedures should be followed.",
              "Follow hand washing before handling HDs. Put on PPE before removing HD from the delivery container. Inspect the delivery container and its contents before handling.",
              "Wear appropriate PPE (chemotherapy-tested double gloves, gown, respirator, face shield, goggles) for all activities associated with drug administration (e.g., opening the outer bag, assembling the delivery system, delivering the drug to the patient, and disposing of all equipment used to administer drugs).",
              "Use CDTDs/ locking connections (e.g.: Luer-Lok, needleless) whenever possible to securely attach IV tubing, syringes, and needles. CSTDs reduce the risk of contamination (HCW and environment) during the compounding process and administration.",
              "Priming of IV tubing needs to be done within the ventilated cabinet (or isolator) before adding the HDs drug, and avoid priming the HDs into another place (gauze pads, sinks, waste containers or any space in the patient or administration unit).",
              "Administration lines should only be disconnected after the IV drug has been thoroughly flushed with a compatible non-cytotoxic solution.",
              "Limit equipment and materials in a BSC to those required to prepare one dose for one patient to avoid overcrowding and medication errors.",
              "Perform all manipulations below eye level.",
              "Check syringes and IV tubes for leakage.",
              "Manage extravasations promptly.",
              "Maintain close supervision",
              "Avoid contact with fluids from body cavities after administration of the drugs (e.g.: after intraperitoneal, intrapleural administration and bladder irrigation).",
              "Dispose of equipment used in HD administration (IV sets/ syringes, and other used items) into designated waste containers. Double-bag the chemotherapy waste before removing the inner gloves. Consider double-bagging all contaminated equipment.",
              "Dispose of used PPE appropriately to prevent contamination of hands and clothing. Gowns should not be reused.",
              "Wash hands with soap and water immediately after removing PPE, and before leaving the drug administration site.",
              "Approximately seal and return unused HDs (e.g., un-spiked/ unopened IV bags) to the drug preparation unit (Pharmacy)."
            ]}
            variant="purple"
          />

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <img
                src={administration2}
                alt="PPE during administration"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-purple-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-purple-900 font-medium italic">
                  🛡️ Proper PPE during drug administration
                </p>
              </div>
            </div>
            <div>
              <img
                src={administration3}
                alt="Safe administration technique"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-purple-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-purple-900 font-medium italic">
                  ✅ Following safe administration protocols
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Safety Points */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
            <div className="text-3xl mb-2">🔒</div>
            <h6 className="font-bold text-blue-900 text-sm mb-1">Use CSTDs</h6>
            <p className="text-xs text-slate-600">Luer-Lok connections & needleless systems</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
            <div className="text-3xl mb-2">🚿</div>
            <h6 className="font-bold text-green-900 text-sm mb-1">Prime in BSC</h6>
            <p className="text-xs text-slate-600">Never at bedside or in sinks</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
            <div className="text-3xl mb-2">🧤</div>
            <h6 className="font-bold text-purple-900 text-sm mb-1">Full PPE</h6>
            <p className="text-xs text-slate-600">Double gloves, gown, eye & face protection</p>
          </div>
        </div>

        <InfoBox type="warning">
          <strong>Critical Practice:</strong> Priming of IV tubing must be done within the ventilated cabinet 
          before adding HDs. Never prime HDs at patient bedside, into gauze pads, sinks, or waste containers.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard title="Oral Administration" icon={<span className="text-2xl">💊</span>} variant="info">
      <div className="space-y-5">
        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Cytotoxic oral preparations include tablets and capsules. Work practices related to oral administration are included.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-300 shadow-md">
          <h5 className="font-bold text-indigo-900 mb-4 text-lg">Oral Administration Work Practices</h5>
          <RequirementsList
            title=""
            items={[
              "Store oral preparations as directed by the manufacturer/ pharmacy.",
              "Pack in individual packages (unit-dose). Patients should self-administer where possible. Use non-touch techniques when transferring medicines and avoid direct contact with oral forms.",
              "Manipulation of HD tablets or capsules (cutting, crushing, splitting) to prepare unit doses, liquid preparations or mixtures requires BSC and strictly avoid using other locations to prevent airborne particles.",
              "Isolate and discard damaged/ expired drugs as instructed by the manufacturer or pharmacy.",     
              "Any equipment used for the parenteral, oral, or topical administration of cytotoxic drugs should be immediately disposed of in a designated cytotoxic bin.",
              "Instructions (exposure methods, safe handling techniques) need to be provided to the patient/caregiver to minimize contamination (HCW/ caregiver/environment)."
            ]}
            color="purple"
          />
        </div>

        <div className="flex justify-center my-4">
          <img
            src={oral}
            alt="Oral Administration"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="bg-blue-100 rounded-lg p-3 text-center">
          <p className="text-xs text-blue-900 font-medium italic">
            💊 Safe oral administration practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300">
            <h6 className="font-bold text-green-900 mb-3">✅ Best Practices</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Unit-dose packaging preferred</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Patient self-administration when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use non-touch techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Educate patients and caregivers</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-300">
            <h6 className="font-bold text-amber-900 mb-3">⚠️ Tablet Manipulation</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Cutting, crushing, or splitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>MUST be done in BSC only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Prevents airborne particle generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Never in open patient areas</span>
              </li>
            </ul>
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Patient Education:</strong> Provide clear instructions on exposure methods and safe handling 
          techniques to minimize contamination of healthcare workers, caregivers, and environment.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard title="Topical Administration" icon={<span className="text-2xl">🧴</span>}>
      <div className="space-y-5">
        <div className="bg-teal-50 rounded-xl p-5 border-2 border-teal-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Topical administration includes the application of creams, ointments, pastes, lotions, or eye drops to the skin or mucus membrane. During topical administration, the following practices need to be maintained.
          </p>
        </div>

        <div className="flex justify-center my-4">
          <img
            src={topical}
            alt="Topical Administration"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="bg-teal-100 rounded-lg p-3 text-center">
          <p className="text-xs text-teal-900 font-medium italic">
            🧴 Safe topical administration techniques
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300 shadow-md">
          <h5 className="font-bold text-teal-900 mb-4 text-lg flex items-center gap-2">
            <Droplet className="w-6 h-6" />
            Topical Application Requirements
          </h5>
          <RequirementsList
            title=""
            items={[
              "Use appropriate PPE",
              "Avoid contact with patient's clothing",
              "Avoid unnecessary contact with the topical cytotoxic drug",
              "Use the disposable spatula to apply ointment-like preparations",
              "Disposal of all contaminants to cytotoxic waste bins",
              "Educate patients on topical applications to minimize environmental exposure"
            ]}
            color="teal"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-5 border-2 border-teal-200 shadow-sm">
            <h6 className="font-semibold text-teal-900 mb-3">Application Tools</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Use disposable spatulas for ointments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Apply with gloved hands when appropriate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Avoid direct skin contact</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-5 border-2 border-teal-200 shadow-sm">
            <h6 className="font-semibold text-teal-900 mb-3">Waste Management</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Dispose applicators as cytotoxic waste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Clean contaminated surfaces immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Use designated waste containers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  </>
);

export default AdministrationSection;