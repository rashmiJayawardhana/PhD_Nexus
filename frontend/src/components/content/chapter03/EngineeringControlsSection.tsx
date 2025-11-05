// FILE: src/components/content/chapter03/EngineeringControlsSection.tsx
import { Boxes, Wind, Lock } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import bscImage from '../../../assets/evidence.png';
import caciImage from '../../../assets/evidence.png';
import cstdImage from '../../../assets/evidence.png';

export const EngineeringControlsSection: React.FC = () => (
  <>
    <ContentCard 
      title="Engineering Controls: Overview" 
      icon={<Boxes className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Engineering controls protect workers by physically changing the work environment. USP chapter 800 
          describes three types of engineering controls that are essential for safe handling of hazardous drugs.
        </p>

        <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200">
          <h5 className="font-bold text-indigo-900 mb-3">Three Types of Engineering Controls:</h5>
          <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
            <li><strong>Containment Primary Engineering Control (C-PEC)</strong> - Ventilated device for HD preparation</li>
            <li><strong>Containment Secondary Engineering Control (C-SEC)</strong> - Designated room housing the C-PEC</li>
            <li><strong>Supplemental Engineering Controls</strong> - Additional protective devices (e.g., CSTDs)</li>
          </ol>
        </div>

        <InfoBox type="note">
          <strong>When to Use:</strong> Use of C-PEC is recommended when handling antineoplastic drugs 
          categorized as group 1 or 2A carcinogens (according to IARC classification), and when manufacturer's 
          instructions recommend ventilated engineering controls.
        </InfoBox>
      </div>
    </ContentCard>

    {/* C-PEC: BSC/CDSC */}
    <ContentCard 
      title="1. Containment Primary Engineering Control (C-PEC)" 
      icon={<Wind className="w-6 h-6 text-cyan-600" />}
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          A ventilated device designed and operated to prepare HDs. It provides a containment ventilated 
          enclosure (CVE) to reduce workers' and environmental exposures to HDs. Examples include Biological 
          Safety Cabinets (BSC), also known as Cytotoxic Drug Safety Cabinets (CDSC), and Compounding 
          Aseptic Containment Isolators (CACI).
        </p>

        {/* BSC Section */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
          <h5 className="font-bold text-cyan-900 mb-4">
            Biological Safety Cabinets (BSC) / Cytotoxic Drug Safety Cabinets (CDSC)
          </h5>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <img
                src={bscImage}
                alt="Biological Safety Cabinet with HEPA filtration"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-xs text-slate-600 mt-2 text-center italic">
                BSC with controlled airflow and HEPA filtration
              </p>
            </div>
            
            <div className="space-y-3">
              <h6 className="font-semibold text-cyan-900">Key Features:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Controlled airflow with protection shields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>HEPA filters (remove 99.97% of 0.3-micron particles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Regular monitoring and maintenance required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Class II Type B2 recommended for HDs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-cyan-900 mb-2">BSC Classification:</h6>
            <p className="text-sm text-slate-700 mb-2">
              BSCs are classified into three classes (I to III). <strong>Class II Type B2 BSCs are 
              recommended</strong> for handling HDs as they provide 100% discharge of contaminated air 
              to the outdoors and meet regular requirements for handling HDs.
            </p>
            <p className="text-sm text-slate-700">
              Some literature also recommends using Class III BSC or isolators if the drug is stable 
              enough to prepare.
            </p>
          </div>
        </div>

        {/* CACI Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
          <h5 className="font-bold text-purple-900 mb-4">
            Compounding Aseptic Containment Isolators (CACIs)
          </h5>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <img
                src={caciImage}
                alt="Compounding Aseptic Containment Isolator"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-xs text-slate-600 mt-2 text-center italic">
                CACI with glove ports and physical barrier
              </p>
            </div>
            
            <div className="space-y-3">
              <h6 className="font-semibold text-purple-900">Key Features:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Physical barrier between product and operator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Glove ports for manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>HEPA filtration system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Suitable for sterile compounding</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mt-4">
            <p className="text-sm text-slate-700">
              <strong>Definition:</strong> CACI is a specific type of compounding aseptic isolator designed 
              for the compounding of sterile HDs. It provides hatches, glove ports, HEPA filters, and a 
              physical barrier between the product and the operator.
            </p>
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Essential Practice:</strong> All processes related to drug preparation, mixing, manipulation, 
          counting, crushing, compounding powders, or pouring liquid HDs must be conducted inside a BSC or 
          isolator to prevent exposure to HDs.
        </InfoBox>
      </div>
    </ContentCard>

    {/* C-SEC */}
    <ContentCard 
      title="2. Containment Secondary Engineering Control (C-SEC)" 
      icon={<span className="text-2xl">🏢</span>}
      variant="info"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          The room with fixed walls in which the C-PEC is placed is called C-SEC. It incorporates specific 
          design and operational parameters to minimize potential risk within the compounding room.
        </p>

        <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
          <h5 className="font-bold text-blue-900 mb-3">C-SEC Requirements:</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Minimum 20 Air Changes Per Hour (ACPH)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Externally vented</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>HEPA exhaust filtration</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Temperature 18-22°C</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Humidity 40-60%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Access restricted to authorized personnel only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* Supplemental Engineering Controls */}
    <ContentCard 
      title="3. Supplemental Engineering Controls" 
      icon={<Lock className="w-6 h-6 text-green-600" />}
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Traditional needles and syringes are known to cause contamination (healthcare worker, surface, 
          and environment). Supplemental engineering controls minimize potential exposure to HDs by providing 
          an extra level of protection against contamination when transferring drugs between containers 
          during preparation and administration.
        </p>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
          <h5 className="font-bold text-green-900 mb-4">
            Closed-System Drug-Transfer Devices (CSTDs)
          </h5>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <img
                src={cstdImage}
                alt="Closed-System Drug-Transfer Devices"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-xs text-slate-600 mt-2 text-center italic">
                CSTDs and Luer-lock systems
              </p>
            </div>
            
            <div className="space-y-3">
              <h6 className="font-semibold text-green-900">Types Include:</h6>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Closed-System Drug-Transfer Devices (CSTDs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Luer-lock fittings (prevent accidental disconnection)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Needleless systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Safety-engineered needles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Filtered venting devices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-green-900 mb-2">Benefits:</h6>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Prevent leaks and generation of aerosols</li>
              <li>• Reduce environmental contamination</li>
              <li>• Lower risk of percutaneous exposure</li>
              <li>• Provide additional protection during drug transfer</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h6 className="font-bold text-amber-900 mb-1">Critical Warning</h6>
              <p className="text-sm text-slate-700">
                Although supplemental engineering controls are protective, they should <strong>never 
                substitute for C-PEC</strong> (BSCs or isolators). Drug preparation must always be 
                conducted under C-PEC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>
  </>
);

export default EngineeringControlsSection;