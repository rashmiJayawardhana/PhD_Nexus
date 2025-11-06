// FILE: src/components/content/chapter04/CompoundingHdsSection.tsx
import { Beaker, FlaskConical, Shield, Wind } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { ProcedureList } from "../ProcedureList";
import { RequirementsList } from "../RequirementsList";
import compounding from '../../../assets/compounding.png';
import compounding2 from '../../../assets/compounding2.png';
import transport from '../../../assets/transport.png';
import transport2 from '../../../assets/transport2.png';

export const CompoundingHdsSection = () => (
  <>
    <ContentCard 
      title="Compounding Hazardous Drugs" 
      icon={<Beaker className="w-6 h-6 text-cyan-600" />}
    >
      <div className="space-y-5">
        <div className="bg-cyan-50 rounded-xl p-5 border-2 border-cyan-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Work practices used in compounding the HDs are mentioned below.
          </p>
        </div>

        <InfoBox type="critical">
          <strong>Essential Requirement:</strong> Only trained individuals need to compound the HDs. (All staff who use BSC/isolators should train to use related equipment and maintain proper techniques).
        </InfoBox>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300 shadow-lg">
          <h5 className="font-bold text-teal-900 mb-4 text-lg flex items-center gap-2">
            <FlaskConical className="w-6 h-6" />
            Compounding Work Practices
          </h5>
          <ProcedureList
            items={[
              'Reconstitution and preparation must be performed in a controlled area (such as a cleanroom), technically referred to as C-SEC. It should be limited to authorized individuals and should be notified as "Cytotoxic Preparation Area. Access Restricted to Authorized Personnel Only".',
              "Strict aseptic techniques should be used in the compounding of all sterile doses, whether the drug is hazardous or not. (Sterility must be preserved within the HD container, syringe, IV bag and work area or surface).",
              "The compounding process and all related activities (unpacking containers, handling vials, manipulation, reconstitution, handling finished products, labelling final doses, and disposing of waste) need to be conducted in a C-PEC (BSC/isolator). If no PEC is available, the HD should be prepared in a quiet workspace, away from heating and cooling vents and away from other personnel.",
              "A well-functioning HEPA-filtered air environment needs to be maintained with the C-PEC. Negative air pressure prevents contamination (product, operator and environment contamination). HEPA-filtered air, acronym for High-Efficiency Particulate Air. It can remove at least 99.97% of particles [e.g., dust, pollen, mould, bacteria, any airborne particles] with a size of 0.3 microns.",
              "The air floor should be vertical, and a horizontal laminar floor hood is never recommended for cytotoxic preparations due to the high risk of worker contamination.",
              "Centralized preparation needs to be done.",
              "Good preparation techniques are critical.",
              "Wash your hands before putting on PPE.",
              "Full PPE (HD-tested double gloves, gown, respirator, and eye protection) should be used for compounding and all related activities. Safe work practices about the use of PPE are mandatory (as described in Chapter 03).",
              "Remove the outer packaging and wipe off all vials with a moist alcohol wipe to remove HD residue that may contaminate the outer surfaces. (Avoid sprays to minimize particle/ aerosol generation and surface contamination). Discard the used alcohol wipe in a containment bag for appropriate disposal.",
              "Sanitize the fresh outer glove with isopropyl alcohol gel before compounding.",
              "Work should be done on a disposable plastic-backed paper liner. The liner should be changed after the preparation is completed. Used liners should be disposed of as contaminated waste.",
              "Prime the IV tubing and syringes inside the C-PEC (BSC/isolators), and avoid priming in other areas. Additionally, IV tube priming must be performed before adding the HD.",
              "Use supplementary engineering controls (e.g., CSDTs, needleless systems) when transferring HDs from primary packaging (e.g.: vials) to dosing equipment (e.g.: infusion bags, bottles, or pumps). It reduces the generation of aerosols and exposure risk. However, supplementary engineering controls should not be used as an alternative to PEC (BSCs, or isolators).",
              "When drug preparation is complete, seal the final dose in a plastic bag or other sealable container for transport, then remove it from the ventilated cabinet. Seal and wipe all waste containers inside the ventilated cabinet before removing them from the cabinet.",
              "Remove all outer gloves, sleeve covers and bag them for disposal within the inside of the BSC/ isolator.",
              "Immediately after removing gloves, hands must be washed with soap and water.",
              "Manufacturer's guidelines are preferred in cleaning PEC. Disinfect with 70% isopropyl alcohol before sterile compounding. Additionally, it has been found that using a detergent and bleach solution followed by thorough rinsing with sterile water after compounding HDs is also effective."
            ]}
            variant="teal"
          />

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <img
                src={compounding}
                alt="Compounding HDs in BSC"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-teal-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-teal-900 font-medium italic">
                  🔬 Compounding HDs in controlled environment
                </p>
              </div>
            </div>
            <div>
              <img
                src={compounding2}
                alt="Proper compounding techniques"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-teal-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-teal-900 font-medium italic">
                  ⚗️ Following aseptic techniques during compounding
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-md mt-6">
          <h5 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
            <Wind className="w-6 h-6 text-blue-600" />
            S-SEC-related Other Requirements for Compounding HDs
          </h5>
          <p className="text-slate-700 mb-4">S-SEC-related other requirements for compounding HDs are outlined below.</p>

          <RequirementsList
            items={[
              "A minimum Air Change Per Hour (ACH) of 20 room volumes is required.",
              "The air from the workplace must be exhausted into the atmosphere to prevent personnel exposure. According to USP 800, primary and secondary engineering controls (preparation room, buffer room, anteroom) used to compound sterile doses of chemotherapy/ HDs must be externally vented.",
              "To reduce contamination, a HEPA exhaust filter should be used.",
              "A temperature range of 18°C to 22°C is acceptable.",
              "Isolators (CACIs) require sterilization with hydrogen peroxide. A relative humidity level of 50% must be maintained between 40% and 60%.",
              "Refrigerated HDs must be stored in a dedicated refrigerator in a negative-pressure area.",
              "Parameters to be monitored for microbiological and particulate contamination, HEPA filtration, air velocity, and pressure differentials."
            ]}
            color="teal"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300 shadow-sm">
              <h6 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🌡️</span>
                Environmental Controls
              </h6>
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
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300 shadow-sm">
              <h6 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Access & Safety
              </h6>
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

    <ContentCard title="Transport Compounded HDs" icon={<span className="text-2xl">🚚</span>} variant="info">
      <div className="space-y-5">
        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Final, ready-to-administer dosage forms should be safely transported to the administration area or the patient's unit from the preparation site (pharmacy). Related recommendations are as outlined below. Trained personnel must handle transportation with proper precautions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-300 shadow-md">
          <h5 className="font-bold text-cyan-900 mb-4 text-lg">Transportation Safety Requirements</h5>
          <RequirementsList
            title=""
            items={[
              "Trained persons need to transport drugs, and precautions must be taken to avoid dropping and contamination.",
              'IV bags must be connected to primed IV lines (Priming should be done before adding HDs). All final doses should be double-bagged and placed in thick, sealed containers until they are sent to patient areas. In addition to patient-specific labelling, auxiliary labels indicating "Hazardous Drug" should be affixed to the dose and the transport bag.',
              "Doses in syringes must be precise and require no further manipulation.",
              "Affix 'Hazardous Drug' auxiliary labels to dose and transport bag",
              "Doses in syringes must be precise and require no further manipulation",
              "Most organizations use manual transportation rather than mechanical transportation, such as pneumatic tubes, to minimize the risk of breakage and leakage. The use of transport bags prevents spills and protects the handler from being exposed. If pneumatic tubes are used, standard pneumatic tubes designed to transport investigation samples or other items should not be used to transport the HDs due to the risk of possible contamination. However, pressure within pneumatic tubes may cause leakage.",
              "Also, a spill kit should be available during the transportation of HDs, and only trained personnel need to be involved in any case of cleaning up any spill if it happens during the transportation."
            ]}
            color="blue"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <img
              src={transport}
              alt="Transport Compounded HDs"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-cyan-100 rounded-lg p-2 mt-2 text-center">
              <p className="text-xs text-cyan-900 font-medium italic">
                🚛 Safe transport of compounded HDs
              </p>
            </div>
          </div>
          <div>
            <img
              src={transport2}
              alt="Transport methods comparison"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-cyan-100 rounded-lg p-2 mt-2 text-center">
              <p className="text-xs text-cyan-900 font-medium italic">
                🔄 Manual vs pneumatic tube drug transportation
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300">
            <h6 className="font-bold text-green-900 mb-3">✅ Recommended: Manual Transport</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Lower risk of breakage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Minimizes leakage potential</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Better control during transport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use thick transport bags</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-300">
            <h6 className="font-bold text-amber-900 mb-3">⚠️ Caution: Pneumatic Tubes</h6>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Pressure may cause leakage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Risk of breakage from impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Not recommended for HDs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>If used, need specialized tubes</span>
              </li>
            </ul>
          </div>
        </div>

        <InfoBox type="warning">
          <strong>Transport Risk:</strong> Pressure within pneumatic tubes may cause leakage. Use transport 
          bags to prevent spills and protect handlers from exposure.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default CompoundingHdsSection;