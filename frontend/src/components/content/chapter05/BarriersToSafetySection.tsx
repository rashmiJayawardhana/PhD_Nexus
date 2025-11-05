import { Award, TrendingDown } from "lucide-react";
import { BarrierCategory } from "../BarrierCategory";
import { ContentCard } from "../ContentCard";
import { EmpiricalStudyCard } from "../EmpiricalStudyCard";
import { InfoBox } from "../InfoBox";

export const BarriersToSafetySection = () => (
  <>
    {/* Introduction */}
    <ContentCard 
      title="Barriers to Following Safety Precautions" 
      icon={<TrendingDown className="w-6 h-6 text-red-600" />}
      variant="warning"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          The literature reported multifactorial causes of ineffective compliance with safety guidelines. 
          The common contributing factors include frequency of utilization, handling large quantities of 
          doses and complex drug regimens, inadequate knowledge and training, poor attitudes toward safety 
          precautions, insufficient supervision on handling, multitasking and work pressure, staff shortage, 
          interpersonal influences, personal factors, unsafe working environment (e.g., unavailable/limited 
          PPE, CSTD and other facilities and budgeting constraints).
        </p>

        <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
          <p className="text-slate-800 text-sm font-semibold">
            <strong>Critical Finding:</strong> Statistically significant correlations have been observed 
            between the prevalence of adverse effects and heavy workload, staff shortage, poor knowledge 
            and practice, drug handling characteristics, and poor attitude towards safety measures. Among 
            these factors, <span className="text-red-700 font-bold">insufficient knowledge and training</span> are 
            the most frequently associated with occupational exposure and related adverse effects.
          </p>
        </div>
      </div>
    </ContentCard>

    {/* Categories of Barriers */}
    <ContentCard 
      title="Categories of Barriers" 
      icon={<span className="text-2xl">🚧</span>}
    >
      <div className="space-y-4">
        <BarrierCategory
          title="Organizational Factors"
          color="red"
          items={[
            'Increased workload and patient count',
            'Staff shortage',
            'Insufficient supervision',
            'Limited PPE availability',
            'Lack of engineering controls (BSC, CSTD)',
            'Budget constraints',
            'Poor workplace safety climate'
          ]}
        />

        <BarrierCategory
          title="Knowledge and Training Factors"
          color="orange"
          items={[
            'Inadequate knowledge of safe handling',
            'Insufficient training opportunities',
            'Lack of ongoing education',
            'Unavailability of routine training programs',
            'Poor understanding of exposure risks'
          ]}
        />

        <BarrierCategory
          title="Practice and Behavioral Factors"
          color="amber"
          items={[
            'Poor attitudes toward safety measures',
            'Low self-efficacy in handling HDs',
            'Conflict between professional image and safety',
            'Prioritizing social roles over professional safety',
            'Reliance on clinical wisdom instead of guidelines',
            'Non-compliance with PPE use',
            'Unsafe practices (e.g., priming with chemotherapy)'
          ]}
        />

        <BarrierCategory
          title="Environmental Factors"
          color="yellow"
          items={[
            'Technical issues with devices',
            'Drug spills during handling',
            'Complex drug regimens',
            'High-dose drug handling',
            'Interpersonal influences'
          ]}
        />
      </div>
    </ContentCard>

    {/* Empirical Studies Table */}
    <ContentCard 
      title="Empirical Evidence: Barriers to Safe Handling" 
      icon={<span className="text-2xl">📚</span>}
      variant="info"
    >
      <p className="text-slate-700 mb-4 text-sm italic">
        Table 15: Empirical studies on barriers to safe handling of chemotherapy
      </p>

      <div className="space-y-3">
        <EmpiricalStudyCard
          study="Integrative Review"
          variant="blue"
          findings={
            <>
              <p><strong>Key Finding:</strong> Nurses' adherence to the guidelines on handling chemotherapy 
              is lower than the recommended level.</p>
              <p className="mt-2"><strong>Contributing Factors:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                <li>Insufficient PPE and knowledge in handling</li>
                <li>Poor practice (priming syringes/IV lines with chemotherapy solutions)</li>
                <li>Ineffective use of PPE</li>
                <li>Lack of monitoring and low self-efficacy</li>
                <li>Increased patient count and poor workplace safety climate</li>
                <li>Drug spills, not using CSTDs, technical issues with devices</li>
              </ul>
              <p className="mt-2"><strong>Impact:</strong> Education interventions statistically significantly 
              increased knowledge and compliance with safety measures, and decreased the frequency of spills.</p>
            </>
          }
        />

        <EmpiricalStudyCard
          study="Descriptive Cross-sectional Study"
          variant="purple"
          findings={
            <>
              <p>Nurses reported high exposure knowledge, self-efficacy, perceived risk, interpersonal 
              influences, and workplace safety climate. They also reported moderate barriers to the use 
              of PPE and conflict of interest.</p>
              <p className="mt-2"><strong>Significant Finding:</strong> The number of patients per day is 
              significantly associated with the use of HD precautions.</p>
            </>
          }
        />

        <EmpiricalStudyCard
          study="Cross-sectional Study"
          variant="teal"
          findings={
            <>
              <p><strong>Associated Factors:</strong> Knowledge of handling cytotoxic drugs is associated with:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                <li>Age and working experience</li>
                <li>Having heard about cytotoxic drugs</li>
                <li>Training on handling cytotoxic drugs</li>
                <li>Practice of handling chemotherapy among HCWs</li>
              </ul>
            </>
          }
        />

        <EmpiricalStudyCard
          study="Qualitative Study"
          variant="indigo"
          findings={
            <>
              <p><strong>Cultural and Professional Factors:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                <li>Nurses report that the use of PPE is an obstacle to professional image and performance</li>
                <li>Nurses prioritized social roles over professional roles</li>
                <li>Belief that clinical wisdom was necessary to prevent occupational exposure to 
                chemotherapy toxicity</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="mt-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-200">
        <h5 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Most Significant Barrier
        </h5>
        <p className="text-slate-700 text-sm">
          Research consistently shows that <strong className="text-amber-900">insufficient knowledge and 
          training</strong> are the most frequently associated factors with occupational exposure and related 
          adverse effects. This finding emphasizes the critical importance of comprehensive education programs 
          in improving safety compliance.
        </p>
      </div>
    </ContentCard>

    {/* Key Takeaways */}
    <InfoBox type="critical">
      <strong>Critical Implications for Practice:</strong> Addressing barriers to safe handling requires 
      a multifaceted approach that includes organizational support, adequate resources, comprehensive 
      training programs, and fostering a culture of safety. Education interventions have proven effective 
      in improving compliance and reducing adverse effects, making them a priority intervention.
    </InfoBox>
  </>
);

export default BarriersToSafetySection;