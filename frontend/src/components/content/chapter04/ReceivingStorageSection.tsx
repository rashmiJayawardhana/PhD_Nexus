// Receiving, Distribution, and Storage Section
import { Truck } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { RequirementsList } from "../RequirementsList";

export const ReceivingStorageSection = () => (
  <>
    <ContentCard 
      title="Receiving, Distribution, and Storage of HDs" 
      icon={<Truck className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          A trace amount of drugs may contaminate the outside of the containers during the manufacturing process. 
          Drug transportation, distribution and storage may cause drug spills, damage, or leaking from containers. 
          Therefore, all personnel involved in receiving, distribution, and storage should wear appropriate PPE and 
          follow the safety precautions.
        </p>

        <InfoBox type="critical">
          <strong>Critical Practice:</strong> All personnel who receive HDs from manufacturers or distributors, 
          and store them, must be trained to wear full PPE, use a respirator and perform spill cleanup.
        </InfoBox>

        <RequirementsList
          title="Key Safety Precautions"
          items={[
            "HD spill kits must be readily available in the receiving area",
            "Transport and store HDs in closed containers that minimize risk of breakage",
            "Wipe each HD vial using a wiper wetted with alcohol (never spray to minimize aerosol generation)",
            "Wear one or two pairs of tested gloves when assessing potentially damaged containers",
            "Use full PPE (double gloves, gown, eye protection, respirator) for apparent damage",
            "Use spill kit to clean up and remove damaged drug containers and packaging"
          ]}
          color="blue"
        />

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
          <h5 className="font-bold text-purple-900 mb-4">Storage Area Requirements</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <RequirementsList
              items={[
                "Negative air pressure with minimum 20 ACH",
                "Store HDs separately from other drugs",
                "Temperature control (18°C-22°C)",
                "Clean storage areas monthly with detergent"
              ]}
              color="purple"
            />
            <RequirementsList
              items={[
                "Label clearly as hazardous drugs",
                "Dedicated refrigerator for refrigerated drugs",
                "Consider dedicated emergency exhaust fan",
                "Install appropriate ventilation system"
              ]}
              color="purple"
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Best Practice:</strong> Cleaning solutions should not alter HD packaging/product labels to avoid 
          missing critical information.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default ReceivingStorageSection;