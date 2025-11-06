// FILE: src/components/content/chapter03/PersonalProtectiveEquipmentSection.tsx
import { Shield, AlertTriangle, Hand, Eye } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import nurse from '../../../assets/nurse.png';
import gloves from '../../../assets/gloves.png';
import gloves2 from '../../../assets/gloves2.png';
import gloves3 from '../../../assets/gloves3.png';
import gloves4 from '../../../assets/gloves4.png';
import respirators from '../../../assets/respirators.png';
import gown from '../../../assets/gown.png';
import eye from '../../../assets/eye.png';
import hair from '../../../assets/hair.png';
import arms from '../../../assets/arms.png';
import shoeCovers from '../../../assets/shoeCovers.png';

export const PersonalProtectiveEquipmentSection: React.FC = () => (
  <>
    {/* Overview */}
    <ContentCard 
      title="Level 5: Personal Protective Equipment (PPE)" 
      icon={<Shield className="w-6 h-6 text-purple-600" />}
      variant="highlight"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-purple-100">
          <p className="text-slate-700 leading-relaxed text-base">
            PPE includes gloves, masks, gowns, goggles or face shields, and other equipment to create a 
            temporary barrier between the contamination and the operator. PPE must be tested to handle HDs 
            (e.g., ASTM standards for gloves and gowns, NIOSH-approved respirators). PPE must not be worn 
            outside of the work environment. Contaminated disposable PPE should be considered cytotoxic waste, 
            and non-disposable PPE must be cleaned and decontaminated after use.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 shadow-xl">
          <h5 className="font-bold text-purple-900 mb-4 text-center text-xl">Complete PPE Setup</h5>
          <div className="flex justify-center">
            <img
              src={nurse}
              alt="Healthcare worker in full Personal Protective Equipment"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-white rounded-lg p-3 mt-4 text-center">
            <p className="text-xs text-purple-900 font-medium italic">
              👨‍⚕️ Full PPE ensemble for handling hazardous drugs
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500 shadow-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h6 className="font-bold text-amber-900 mb-2 text-lg">Critical Requirements</h6>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>PPE must be HD-tested (ASTM standards for gloves/gowns, NIOSH-approved respirators)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Never wear PPE outside work environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Dispose contaminated PPE as cytotoxic waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Clean and decontaminate non-disposable PPE after use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PPE Components Grid */}
        <div className="grid md:grid-cols-5 gap-3 mt-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-3 border-2 border-blue-300 text-center">
            <div className="text-2xl mb-1">🧤</div>
            <h6 className="font-bold text-blue-900 text-xs">Gloves</h6>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-3 border-2 border-purple-300 text-center">
            <div className="text-2xl mb-1">😷</div>
            <h6 className="font-bold text-purple-900 text-xs">Respirators</h6>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-3 border-2 border-green-300 text-center">
            <div className="text-2xl mb-1">🥼</div>
            <h6 className="font-bold text-green-900 text-xs">Gowns</h6>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-3 border-2 border-orange-300 text-center">
            <div className="text-2xl mb-1">🥽</div>
            <h6 className="font-bold text-orange-900 text-xs">Eye/Face</h6>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg p-3 border-2 border-teal-300 text-center">
            <div className="text-2xl mb-1">👟</div>
            <h6 className="font-bold text-teal-900 text-xs">Covers</h6>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* GLOVES SECTION */}
    <ContentCard 
      title="Gloves: First Line of Defense" 
      icon={<Hand className="w-6 h-6 text-teal-600" />}
      variant="info"
    >
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <img
              src={gloves}
              alt="Chemotherapy-tested gloves"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-teal-100 rounded-lg p-2 text-center">
              <p className="text-xs text-teal-900 font-medium italic">
                🧤 HD-tested gloves for chemotherapy handling
              </p>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-4 text-lg">Essential Characteristics</h5>
            <div className="bg-blue-50 rounded-lg p-4 mb-3">
              <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                Gloves prevent dermal contamination in handling HDs. However, not all types of gloves protect 
                against exposure. Therefore, guidelines report that gloves must be proven resistant to 
                chemotherapy and labelled "chemotherapy gloves" and need to fulfil the following characteristics:
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm text-slate-700"><strong>(a) Sterile, non-powdered</strong></span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm text-slate-700"><strong>(b) Latex</strong> (consider latex-sensitive workers), <strong>nitrile, 
                  or neoprene</strong> gloves may be used if they have been validated for cytotoxic 
                  reconstitution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Practices */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300 shadow-lg mt-6">
          <h5 className="font-bold text-teal-900 mb-4 text-lg">Work Practices Related to Use of Gloves</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">1.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Use a <strong>double pair of gloves</strong> when compounding, administering, and 
                    disposing of HDs
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">2.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Wear the <strong>inner glove under the gown cuff</strong> and the <strong>outer glove 
                    over the cuff</strong>. Place gloves with long cuffs over the cuff of the gown to protect 
                    the wrist and forearm
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">3.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Gloves should be changed <strong>at least every 30 minutes</strong> or whenever damage 
                    or obvious contamination occurs
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">4.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Use <strong>powder-free gloves</strong>. Glove powder can contaminate the work area and 
                    can absorb and retain HDs. Skin contact with contaminated glove powder may increase the 
                    risk of drug absorption
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">5.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    When compounding sterile preparations, sanitize gloves with <strong>sterile 70% alcohol 
                    spray or gel</strong> and allow them to dry before handling chemotherapy (HDs). Avoid 
                    sprays during compounding to minimize the generation of airborne particles
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg flex-shrink-0">6.</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Proper work practices should continue for <strong>donning and doffing gloves</strong> 
                    to prevent contamination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donning Procedure */}
        <div className="bg-white rounded-xl p-6 border-2 border-green-300 shadow-lg mt-6">
          <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2 text-lg">
            <span className="text-2xl">👆</span>
            Steps of Donning Double Gloves
          </h5>
          
          <div className="space-y-4 mb-6">
            <div className="bg-green-50 rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-green-900 mb-2 text-base">Step 1: Don the First Pair (Inner Gloves)</h6>
              <p className="text-sm text-slate-700 leading-relaxed">
                Carefully open the glove package and remove one glove by touching <strong>only the inner 
                cuff area</strong>. Insert one hand into the glove without touching the external surface 
                and repeat for the second glove using only the cuff area.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-green-900 mb-2 text-base">Step 2: Don the Second Pair (Outer Gloves)</h6>
              <p className="text-sm text-slate-700 leading-relaxed">
                Open the second pair of gloves and hold the outer glove at the cuff (touch only the cuff 
                area). Insert the other gloved hand into it and repeat the same step for the other hand. 
                Adjust the outer gloves so they fit snugly over the inner gloves.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={gloves2}
              alt="Step-by-step demonstration of donning double gloves"
              className="rounded-lg shadow-xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '300px' }}
            />
          </div>
          <div className="bg-green-100 rounded-lg p-2 mt-3 text-center">
            <p className="text-xs text-green-900 font-medium italic">
              📸 Visual guide for donning double gloves
            </p>
          </div>
        </div>

        {/* Doffing Procedure */}
        <div className="bg-white rounded-xl p-6 border-2 border-red-300 shadow-lg mt-6">
          <h5 className="font-bold text-red-900 mb-4 flex items-center gap-2 text-lg">
            <span className="text-2xl">👇</span>
            Steps for Removing Double Gloves
          </h5>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">1.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  When removing double gloves, remove the <strong>outer gloves first</strong>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">2.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Touch <strong>dirty surfaces to other dirty surfaces</strong>; never touch the skin 
                  with contaminated gloves
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">3.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Remove one outer glove by pinching the wrist of the glove with the gloved fingers of 
                  the other hand
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">4.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Roll the glove down the hand to the fingers so that the <strong>inside of the glove 
                  is outside</strong>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">5.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Make a ball of that glove in the gloved hand
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">6.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Using the hand wearing the inner glove, place two fingers under the wrist of the second 
                  outer glove (the inner glove is less contaminated and should not touch the surface of 
                  the outer glove)
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">7.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Roll that glove off the hand and over the balled glove
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">8.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  The outer pair of gloves is now inside out, and the first glove is inside the second
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">9.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Use the inner gloves to remove and contain the gown, then remove the inner gloves by 
                  touching <strong>glove to glove and skin to skin</strong> so that contaminated surfaces 
                  do not touch uncontaminated surfaces
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 shadow-sm">
                <span className="font-bold text-red-900 text-lg">10.</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  Contain contaminated gloves in disposable bags and dispose of them appropriately as waste. 
                  <strong>Wash hands thoroughly with soap and water</strong> both before donning and after 
                  removing gloves
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <img
                src={gloves3}
                alt="First steps of removing gloves"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-red-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-red-900 font-medium italic">
                  📸 Steps 1-5: Removing outer gloves
                </p>
              </div>
            </div>
            <div>
              <img
                src={gloves4}
                alt="Final steps of removing gloves"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-red-100 rounded-lg p-2 mt-2 text-center">
                <p className="text-xs text-red-900 font-medium italic">
                  📸 Steps 6-10: Completing glove removal safely
                </p>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="success">
          <strong>Supportive Video Resource:</strong> For a visual demonstration of double glove 
          technique visit: <a href="https://www.youtube.com/watch?v=UIHmtr-_ik4" 
          className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          https://www.youtube.com/watch?v=UIHmtr-_ik4</a>
        </InfoBox>
      </div>
    </ContentCard>

    {/* MASKS/RESPIRATORS SECTION */}
    <ContentCard 
      title="Masks/Respirators: Respiratory Protection" 
      icon={<span className="text-2xl">😷</span>}
      variant="warning"
    >
      <div className="space-y-5">
        <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-300 shadow-md">
          <h5 className="font-bold text-amber-900 mb-3 text-lg">When Respirators Are Essential</h5>
          <p className="text-slate-700 mb-3 leading-relaxed">
            Activities such as manipulation, administration, handling spills, and decontamination are at 
            risk of generating drug aerosols/inhalable particles. Surface contamination also generates 
            airborne particles after drying them. Some drugs are vaporized at room temperature (e.g., 
            Carmustine, Cisplatin, Cyclophosphamide, Etoposide, 5-fluorouracil, Ifosfamide, Nitrogen 
            mustard, Thiotepa). Therefore, appropriate respirators should be used in all risk activities.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border-2 border-slate-300 shadow-md">
          <h5 className="font-bold text-slate-900 mb-4 text-lg">Respirator Requirements</h5>
          <p className="text-slate-700 mb-3 leading-relaxed">
            A type <strong>P2 or P3 mask</strong> for solids or liquids should be used when changing a 
            pre-filter, in the event of any accidental contamination, and for oral preparations. 
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            USP 800 specifies that an appropriate full-facepiece, Chemical Cartridge-Type Respirator 
            (CCAPR), or Powered Air-Purifying Respirator (PAPR) should be worn when there is a risk of 
            respiratory exposure to HDs.
          </p>
          
          <h6 className="font-semibold text-slate-900 mb-3">Additionally, respirators are recommended for:</h6>
          <div className="space-y-3">
            <div className="bg-amber-50 rounded-lg p-4 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">(a)</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Attending to handling HD spills larger than what can be contained with a spill kit
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">(b)</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Deactivating, decontaminating, and cleaning underneath the work surface of a CDSC
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">(c)</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  When there is a known or suspected airborne exposure to powders or vapours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
          <h5 className="font-bold text-blue-900 mb-4 text-center text-xl">Types of Respirators</h5>
          <div className="flex justify-center">
            <img
              src={respirators}
              alt="Different types of respirators for HD handling"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="bg-white rounded-lg p-3 mt-4 text-center">
            <p className="text-xs text-blue-900 font-medium italic">
              😷 P2/P3 masks, CCAPR, and PAPR respirators for different levels of protection
            </p>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* GOWN SECTION */}
    <ContentCard 
      title="Gown: Body Protection" 
      icon={<span className="text-2xl">🥼</span>}
      variant="info"
    >
      <div className="space-y-5">
        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
          <p className="text-slate-700 leading-relaxed text-base">
            Gowns made of appropriate material protect the worker from spills and splashes of HDs, drug 
            waste, and excreta. Cloth laboratory coats, surgical scrubs, or other absorbent materials 
            permit the permeation of HDs and drug contaminants, which can retain and re-expose.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
          <h5 className="font-bold text-blue-900 mb-4 text-lg">USP Chapter 800 Gown Characteristics</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">(a)</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Shown to resist permeability by HDs
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">(b)</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Made of <strong>polyethene-coated polypropylene or other laminate materials</strong>, 
                    as these offer better protection from HDs
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">(c)</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Closure in the back (<strong>no open front</strong>)
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">(d)</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Closed cuffs that are elastic or knit
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">(e)</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>No seams or closures</strong> that could allow HDs to pass through
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 shadow-lg">
          <h5 className="font-bold text-purple-900 mb-4 text-center text-xl">Proper Gown Features</h5>
          <div className="flex justify-center mb-4">
            <img
              src={gown}
              alt="Features of chemotherapy gown"
              className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
              style={{ maxHeight: '350px' }}
            />
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-purple-900 font-medium italic">
              🥼 Back closure, closed cuffs, and seamless design for HD handling
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300 shadow-md">
          <h5 className="font-bold text-teal-900 mb-4 text-lg">Work Practices for Gown Use</h5>
          <p className="text-slate-700 mb-4 leading-relaxed">
            In addition to using appropriate gowns when handling chemotherapy, proper work practices, 
            as outlined below, are required to minimize occupational exposure to chemotherapy:
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="font-bold text-teal-900 text-lg">1.</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                Wear gowns when there is a possibility of splash or spill (e.g., during compounding, 
                administration) and in cleaning drug spills
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="font-bold text-teal-900 text-lg">2.</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                Gowns worn in HD handling areas <strong>must not be worn in other areas</strong> to 
                prevent cross-contamination and exposure
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="font-bold text-teal-900 text-lg">3.</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                According to USP chapter 800, gowns must be changed according to the manufacturer's 
                guide (data on permeation). If there is no permeation information, gowns must be changed 
                <strong> every 2 to 3 hours</strong> or <strong>immediately after a spill or splash</strong>
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="font-bold text-teal-900 text-lg">4.</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                <strong>Dispose of gowns after each use.</strong> Gowns become contaminated during use. 
                Reusing gowns increases the likelihood of exposure to HDs by transferring contamination 
                from the gown surface to other surfaces, including skin
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="font-bold text-teal-900 text-lg">5.</span>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                The gown should not be shared, and the gown needs to be safely removed to prevent 
                personal contamination
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* EYE AND FACE PROTECTION */}
    <ContentCard 
      title="Eye and Face Protection" 
      icon={<Eye className="w-6 h-6 text-orange-600" />}
      variant="warning"
    >
      <div className="space-y-5">
        <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-300 shadow-md">
          <h5 className="font-bold text-amber-900 mb-3 text-lg">Protection Requirements</h5>
          <p className="text-slate-700 mb-3 leading-relaxed">
            Proper eye and face protection is needed whenever HDs may splash and absorb through the eyes 
            and mucous membranes. USP general chapter 800 states that <strong>eyeglasses alone or safety 
            glasses with side shields do not provide adequate eye protection</strong> against splashes.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Face shields in combination with goggles</strong> offer a full range of protection 
            against splashes to the face and eyes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <img
              src={eye}
              alt="Proper eye and face protection equipment"
              className="rounded-lg shadow-xl w-full border-4 border-white"
            />
            <div className="bg-orange-100 rounded-lg p-2 text-center">
              <p className="text-xs text-orange-900 font-medium italic">
                🥽 Face shield combined with goggles for complete protection
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 border-2 border-slate-300 shadow-md">
            <h6 className="font-semibold text-slate-900 mb-3 text-base">Work Practices for Eye/Face Protection</h6>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Use eye and face protection when compounding a drug outside a C-PEC (BSC/isolator) 
                  (e.g., in the operating room), or when working at or above eye level, cleaning a PEC, 
                  or cleaning a spill
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Use <strong>face shields in combination with goggles</strong> to provide a full range 
                  of protection against splashes to the face and eyes
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Do not use eyeglasses or safety glasses with side shields, as they do not provide 
                  adequate eye protection
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Contaminated eye/face protections need to be discarded into the cytotoxic waste bin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* HAIR, SLEEVE, SHOE COVERS - FINAL SECTION */}
    <ContentCard 
      title="Hair, Sleeve and Shoe Covers" 
      icon={<span className="text-2xl">👟</span>}
      variant="success"
    >
      <div className="space-y-5">
        <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200">
          <p className="text-slate-700 leading-relaxed text-base">
            According to USP 800, hair (including beards and moustaches), sleeves, and shoe covers protect 
            from contact with HD residuals.
          </p>
        </div>

        {/* Hair Covers */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
          <h5 className="font-bold text-blue-900 mb-4 text-xl">Hair/Head Covers</h5>
          
          <p className="text-slate-700 mb-4 leading-relaxed">
            Hair/head covers should cover beards and moustaches, and their characteristics include:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-3">
              <img
                src={hair}
                alt="Proper hair and head covering"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-blue-100 rounded-lg p-2 text-center">
                <p className="text-xs text-blue-900 font-medium italic">
                  🧢 Hood/cap covering all hair, beard, and moustache
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-blue-900 mb-3">Required Characteristics:</h6>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Hoods fit snugly around the face
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Caps fit snugly around the head
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Removable and separate facial covers
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Hoods/caps should <strong>not interfere with respiratory protection</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sleeve Covers */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-300 shadow-lg mt-6">
          <h5 className="font-bold text-green-900 mb-4 text-xl">Disposable Sleeve Covers</h5>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <img
                src={arms}
                alt="Disposable sleeve covers"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-green-100 rounded-lg p-2 text-center">
                <p className="text-xs text-green-900 font-medium italic">
                  🦾 Sleeve covers protecting arms from HD contact
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-green-900 mb-3">Purpose and Materials:</h6>
              <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                Disposable sleeve covers may be used to protect areas of the arm that may come into 
                contact with HDs.
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Recommended Materials:</strong> Polyethene-coated polypropylene or other 
                  laminate materials offer better protection than those made of uncoated materials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shoe Covers */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-300 shadow-lg mt-6">
          <h5 className="font-bold text-orange-900 mb-4 text-xl">Shoe Covers</h5>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <img
                src={shoeCovers}
                alt="Impervious shoe coverings"
                className="rounded-lg shadow-xl w-full border-4 border-white"
              />
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <p className="text-xs text-orange-900 font-medium italic">
                  👟 Proper shoe coverings with impervious material
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h6 className="font-semibold text-orange-900 mb-3">Requirements:</h6>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>Impervious materials</strong> (e.g., Bonded polyethene fiber) are suitable
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✗</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Paper disposable shoe covers do <strong>not provide adequate protection</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The soles of shoes should be made of <strong>skid-resistant plastic or other 
                    suitable non-shedding materials</strong> and should not slip down
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Overshoes should <strong>cover the cuffs of trousers</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Reminder */}
        <InfoBox type="tip">
          <strong>Complete Protection:</strong> Hair, sleeve, and shoe covers provide additional 
          protection beyond primary PPE. All protective equipment must be removed carefully to prevent 
          contamination, and disposable items must be discarded into cytotoxic waste bins.
        </InfoBox>
      </div>
    </ContentCard>
  </>
);

export default PersonalProtectiveEquipmentSection;