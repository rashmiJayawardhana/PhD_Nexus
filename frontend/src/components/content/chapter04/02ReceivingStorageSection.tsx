// FILE: src/components/content/chapter04/ReceivingStorageSection.tsx
import { Truck, Package, AlertTriangle, Thermometer } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { RequirementsList } from "../RequirementsList";
import storage from '../../../assets/storage.png';

export const ReceivingStorageSection = () => (
  <>
    <ContentCard 
      title="Receiving, Distribution, and Storage of HDs" 
      icon={<Truck className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-indigo-100">
          <p className="text-slate-700 leading-relaxed text-base">
            A trace amount of drugs may contaminate the outside of the containers during the manufacturing process. 
            Drug transportation, distribution and storage may cause drug spills, damage, or leaking from containers. 
            Therefore, all personnel involved in receiving, distribution, and storage should wear appropriate PPE and 
            follow the safety precautions mentioned below.
          </p>
        </div>

        <InfoBox type="critical">
          <strong>Critical Practice:</strong> All personnel who receive HDs from manufacturers or distributors, 
          and store them, must be trained to wear full PPE, use a respirator and perform spill cleanup.
        </InfoBox>

        {/* Visual Process Flow */}
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center shadow-md">
            <div className="text-3xl mb-2">📦</div>
            <h6 className="font-bold text-blue-900 text-sm mb-1">Receiving</h6>
            <p className="text-xs text-slate-600">Check for damage & contamination</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center shadow-md">
            <div className="text-3xl mb-2">🚚</div>
            <h6 className="font-bold text-purple-900 text-sm mb-1">Distribution</h6>
            <p className="text-xs text-slate-600">Safe transport in closed containers</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300 text-center shadow-md">
            <div className="text-3xl mb-2">🏢</div>
            <h6 className="font-bold text-green-900 text-sm mb-1">Storage</h6>
            <p className="text-xs text-slate-600">Separate, ventilated area</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-300 shadow-md">
          <h5 className="font-bold text-indigo-900 mb-4 text-lg flex items-center gap-2">
            <Package className="w-6 h-6" />
            Safety Precautions for HD Handling
          </h5>
          
          <RequirementsList
            title=""
            items={[
              "All personnel who receive HDs from manufacturers or distributors, and store them, must be trained to wear full PPE, use a respirator and perform spill cleanup.",
              "HD spill kits must be readily available in the receiving area.",
              "Transportation and storage of HDs should be done in closed containers that minimize the risk of breakage.",
              "Each HD vial should be wiped using a wiper wetted with alcohol or another appropriate solution. Never use sprays to minimize the generation of airborne particles and contamination. The wiper should be contained and disposed of after use.",
              "When assessing a potentially damaged container, personnel should wear one or two pairs of gloves that have been tested and approved for use in handling HDs.",
              "If there is apparent damage to the packaging, full PPE consisting of double gloves, gown, eye protection, and respirator should be used. Additionally, the operator should use the spill kit to clean up and remove the damaged drug containers and packaging.",
              "The chemotherapy drug storage area must have appropriate ventilation. Ideally, negative air pressure with at least air changes per hour needs to be maintained to reduce drug residue (sufficient general exhaust ventilation dilutes and removes any airborne contaminants).",
              "Storage areas/ bins must be cleaned at least every 30 days with detergent solutions. A diluted bleach solution may also be used if the container is resistant to damage from bleach. Avoid using sprays to minimize aerosol/particle generation.",
              "Store HDs separately from other drugs to prevent possible contamination.",
              "Depending on the physical nature and quantity of the stored drugs, consider installing a dedicated emergency exhaust fan that is large enough to quickly purge airborne contaminants from the storage room in the event of a spill and prevent contamination in adjacent areas."
            ]}
            color="blue"
          />
        </div>

        <div className="flex justify-center my-6">
          <img
            src={storage}
            alt="Receiving, Distribution, and Storage of HDs"
            className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="bg-indigo-100 rounded-lg p-3 text-center">
          <p className="text-xs text-indigo-900 font-medium italic">
            🏪 Receiving, Distribution, and Storage of HDs
          </p>
        </div>

        {/* Key Requirements Summary */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-5 border-2 border-amber-300 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h6 className="font-bold text-amber-900 mb-2">Damage Assessment</h6>
                <p className="text-sm text-slate-700">
                  Inspect all containers upon receipt. Use full PPE when handling damaged packages. 
                  Have spill kits readily available.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border-2 border-teal-300 shadow-sm">
            <div className="flex items-start gap-3">
              <Thermometer className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h6 className="font-bold text-teal-900 mb-2">Storage Conditions</h6>
                <p className="text-sm text-slate-700">
                  Maintain proper ventilation with negative air pressure. Clean storage areas every 30 days. 
                  Separate HDs from other medications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="warning">
          <strong>Important:</strong> Never use sprays when cleaning HD vials or storage areas to minimize 
          the generation of airborne particles and contamination.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default ReceivingStorageSection;