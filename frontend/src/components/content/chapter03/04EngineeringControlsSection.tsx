// FILE: src/components/content/chapter03/EngineeringControlsSection.tsx
import { Boxes, Wind, Lock, Building, Thermometer } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import bscImage from '../../../assets/bsc.png';
import caciImage from '../../../assets/caci.png';
import cstdImage from '../../../assets/cstd.png';

export const EngineeringControlsSection: React.FC = () => (
  <>
    {/* Level 3 Overview */}
    <ContentCard 
      title="Level 3: Engineering Controls" 
      icon={<Boxes className="w-6 h-6 text-indigo-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-indigo-100">
          <p className="text-slate-700 leading-relaxed text-base">
            Engineering controls protect workers by physically changing the work environment. USP chapter 800 
            describes three types of engineering controls that are essential for safe handling of hazardous drugs.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300 shadow-md">
          <h5 className="font-bold text-indigo-900 mb-4 text-lg">Three Types of Engineering Controls:</h5>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-indigo-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <strong className="text-indigo-900">Containment Primary Engineering Control (C-PEC)</strong>
                  <p className="text-sm text-slate-600 mt-1">Ventilated device for HD preparation</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <strong className="text-purple-900">Containment Secondary Engineering Control (C-SEC)</strong>
                  <p className="text-sm text-slate-600 mt-1">Designated room housing the C-PEC</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <strong className="text-teal-900">Supplemental Engineering Controls</strong>
                  <p className="text-sm text-slate-600 mt-1">Additional protective devices (e.g., CSTDs)</p>
                </div>
              </div>
            </div>
          </div>
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
      <div className="space-y-5">
        <div className="bg-cyan-50 rounded-xl p-5 border-2 border-cyan-200">
          <p className="text-slate-700 leading-relaxed text-base">
            A ventilated device designed and operated to prepare HDs. It provides a containment ventilated 
            enclosure (CVE) to reduce workers' and environmental exposures to HDs. Examples include Biological 
            Safety Cabinets (BSC), also known as Cytotoxic Drug Safety Cabinets (CDSC), and Compounding 
            Aseptic Containment Isolator (CACI).
          </p>
        </div>

        <div className="bg-white rounded-lg p-5 border-2 border-slate-200 shadow-inner">
          <p className="text-slate-700 leading-relaxed">
            Use of C-PEC is recommended when handling antineoplastic drugs categorized as group 1 or 2A carcinogens (according to IARC classification), and recommended to use ventilated engineering controls (according to manufacturer's instructions). All processes related to drug preparation, mixing, manipulation, counting, crushing, compounding powders, or pouring liquid HDs need to be conducted inside a BSC or isolator to prevent exposure to HDs.
          </p>
        </div>

        {/* BSC Section */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200 shadow-lg">
          <h5 className="font-bold text-cyan-900 mb-4 text-xl flex items-center gap-2">
            <Wind className="w-6 h-6" />
            Biological Safety Cabinets (BSC) / Cytotoxic Drug Safety Cabinets (CDSC)
          </h5>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-slate-700 leading-relaxed">
              BSC/ CDSCs provide controlled airflow, protection shields, and HEPA filters. Regular monitoring of device readings, maintenance according to the manufacturer's recommendations and following appropriate techniques are vital for achieving better user outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-3">
              <img
                src={bscImage}
                alt="Biological Safety Cabinet with HEPA filtration"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-cyan-100 rounded-lg p-2 text-center">
                <p className="text-xs text-cyan-900 font-medium italic">
                  🔬 BSC with controlled airflow and HEPA filtration
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h6 className="font-semibold text-cyan-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Key Features:
                </h6>
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
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-cyan-500">
            <h6 className="font-semibold text-cyan-900 mb-3">📚 BSC Classification:</h6>
            <p className="text-sm text-slate-700 mb-3 leading-relaxed">
              BSCs are designed to meet various needs and intended uses. BSCs are classified into three classes (I to III). <strong>Class II Type B2 BSCs are 
              recommended</strong> for handling HDs as they provide 100% discharge of contaminated air 
              to the outdoors and meet the regular requirements for handling HDs.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Some literature also recommends using the Class III BSC or isolators, if the drug is stable 
              enough to prepare.
            </p>
          </div>
        </div>

        {/* CACI Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
          <h5 className="font-bold text-purple-900 mb-4 text-xl flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Compounding Aseptic Containment Isolators (CACIs)
          </h5>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-3">
              <img
                src={caciImage}
                alt="Compounding Aseptic Containment Isolator"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-purple-100 rounded-lg p-2 text-center">
                <p className="text-xs text-purple-900 font-medium italic">
                  🔒 CACI with glove ports and physical barrier
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h6 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Key Features:
                </h6>
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
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-purple-500">
            <h6 className="font-semibold text-purple-900 mb-2">Definition:</h6>
            <p className="text-sm text-slate-700 leading-relaxed">
              CACI is a specific type of compounding aseptic isolator that is designed 
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
      icon={<Building className="w-6 h-6 text-orange-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-orange-100">
          <p className="text-slate-700 leading-relaxed text-base">
            The room with fixed walls in which the C-PEC is placed is called C-SEC. It incorporates specific 
            design and operational parameters to minimize potential risk within the compounding room.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
          <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Thermometer className="w-5 h-5" />
            C-SEC Requirements:
          </h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">💨</span>
                  <span className="text-sm text-slate-700">Minimum 20 Air Changes Per Hour (ACPH)</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">🌬️</span>
                  <span className="text-sm text-slate-700">Externally vented</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">🔬</span>
                  <span className="text-sm text-slate-700">HEPA exhaust filtration</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">🌡️</span>
                  <span className="text-sm text-slate-700">Temperature 18-22°C</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">💧</span>
                  <span className="text-sm text-slate-700">Humidity 40-60%</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">🚪</span>
                  <span className="text-sm text-slate-700">Access restricted to authorized personnel only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* Supplemental Engineering Controls */}
    <ContentCard 
      title="3. Supplemental Engineering Controls" 
      icon={<Lock className="w-6 h-6 text-green-600" />}
    >
      <div className="space-y-5">
        <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Traditional needles and syringes are known to cause contamination (healthcare worker, surface, 
            and environment). Supplemental engineering controls minimize potential exposure to HDs by providing 
            an extra level of protection against contamination when transferring drugs between containers 
            during preparation and administration.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 shadow-lg">
          <h5 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Closed-System Drug-Transfer Devices (CSTDs)
          </h5>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-slate-700 leading-relaxed">
              These are included in CSTDs, Lure lock fittings (fittings that prevent accidental disconnection), needleless systems or safety-engineered needles (which lower the risk of workers receiving percutaneous exposure), and filtered venting devices (such as chemotherapy-dispensing pins and chemotherapy vents).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-3">
              <img
                src={cstdImage}
                alt="Closed-System Drug-Transfer Devices"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-green-100 rounded-lg p-2 text-center">
                <p className="text-xs text-green-900 font-medium italic">
                  🔒 CSTDs and Luer-lock systems
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h6 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🔧</span>
                  Types Include:
                </h6>
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
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-green-500">
            <h6 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <span className="text-xl">✨</span>
              Benefits:
            </h6>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Prevent leaks and generation of aerosols</li>
              <li>• Reduce environmental contamination</li>
              <li>• Lower risk of percutaneous exposure</li>
              <li>• Provide additional protection during drug transfer</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500 shadow-md">
          <div className="flex items-start gap-3">
            <span className="text-3xl">⚠️</span>
            <div>
              <h6 className="font-bold text-amber-900 mb-2">Critical Warning</h6>
              <p className="text-sm text-slate-700 leading-relaxed">
                Although supplemental engineering controls are protective, they should <strong>never 
                substitute for C-PEC</strong> (for BSCs or isolators). Drug preparation must always be 
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