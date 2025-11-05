import { BookOpen, CheckCircle2, GraduationCap, Monitor, TrendingUp, Users } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { EducationalMethodCard } from "../EducationalMethodCard";
import { ResearchFindingCard } from "../ResearchFindingCard";
import { InfoBox } from "../InfoBox";

export const EducationImpactSection = () => (
  <>
    {/* Introduction */}
    <ContentCard 
      title="Impact of Education Programs on Safe Handling of Chemotherapy" 
      icon={<GraduationCap className="w-6 h-6 text-green-600" />}
      variant="success"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Many empirical studies and theories have emphasized that continuous educational training programs 
          are the most suitable sources for improving knowledge and practice. However, the unavailability or 
          limited availability of routine educational or training programs has been reported.
        </p>

        <div className="bg-green-100 rounded-lg p-4 border-2 border-green-300">
          <p className="text-slate-800 text-sm font-semibold">
            <strong>Evidence of Effectiveness:</strong> After identifying insufficient knowledge and training 
            as contributing factors, remedial measures including education and training programs were 
            implemented to address occupational exposure to HDs among HCWs. The findings reported 
            <span className="text-green-700 font-bold"> better compliance with safety guidelines and a low 
            number of adverse effects</span> after the educational program.
          </p>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Multiple studies demonstrate that education interventions significantly improve knowledge of safe 
          handling practices, compliance with safety guidelines, proper use of PPE, self-efficacy in HD 
          handling, nursing performance, attitudes toward safety, confidence levels, and lead to reduction 
          in drug spills.
        </p>
      </div>
    </ContentCard>

    {/* Effective Educational Methods */}
    <ContentCard 
      title="Effective Educational Methods" 
      icon={<BookOpen className="w-6 h-6 text-teal-600" />}
      variant="highlight"
    >
      <p className="text-slate-700 leading-relaxed mb-6">
        Several studies have utilized various educational methods to improve self-efficacy, nursing 
        performance, attitude, knowledge, and practice of cytotoxic drug handling among nurses, reporting 
        statistically significant improvements.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <EducationalMethodCard
          icon={<Monitor className="w-5 h-5" />}
          title="Web-based Online Courses"
          description="Interactive digital learning platforms"
          color="teal"
          benefits={[
            'Flexible, accessible anytime, anywhere',
            'Self-paced learning',
            'Cost-effective for large groups',
            'Easy to update content'
          ]}
        />

        <EducationalMethodCard
          icon={<GraduationCap className="w-5 h-5" />}
          title="E-learning Modules"
          description="Structured digital content modules"
          color="blue"
          benefits={[
            'Highly recommended for LMICs',
            'Cost-effective alternative',
            'Addresses lack of opportunities',
            'Supports lifelong learning'
          ]}
        />

        <EducationalMethodCard
          icon={<Users className="w-5 h-5" />}
          title="Blended Learning"
          description="Combines face-to-face and online methods"
          color="purple"
          benefits={[
            'Most suitable for nurses',
            'Combines best of both approaches',
            'Refreshes knowledge',
            'Preserves time'
          ]}
        />

        <EducationalMethodCard
          icon={<BookOpen className="w-5 h-5" />}
          title="Educational Modules"
          description="Self-directed learning materials"
          color="green"
          benefits={[
            'Alternative to face-to-face sessions',
            'Self-paced progress',
            'Comprehensive content',
            'Better practice outcomes'
          ]}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {[
          'Safety Protocols',
          'Demonstrations',
          'Videos & Presentations',
          'Workshops & Seminars',
          'Mobile Applications',
          'PowerPoint Presentations'
        ].map((method, idx) => (
          <div key={idx} className="bg-white rounded-lg p-3 border-2 border-teal-100 text-center">
            <span className="text-sm font-medium text-slate-700">{method}</span>
          </div>
        ))}
      </div>
    </ContentCard>

    {/* Recommendations for LMICs */}
    <ContentCard 
      title="Recommendations for LMICs" 
      icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
      variant="info"
    >
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
        <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          For Lower and Middle-Income Countries
        </h5>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold text-lg">✓</span>
            <p className="text-sm text-slate-700">
              <strong>E-learning modules are highly recommended</strong> as a cost-effective alternative to 
              traditional training
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold text-lg">✓</span>
            <p className="text-sm text-slate-700">
              Addresses the lack of educational opportunities with budget constraints
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold text-lg">✓</span>
            <p className="text-sm text-slate-700">
              <strong>Blended learning approach</strong> is considered the most suitable method for nurses
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold text-lg">✓</span>
            <p className="text-sm text-slate-700">
              Refreshes knowledge, preserves time, and supports lifelong learning and continuous 
              professional development (CPD)
            </p>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* Empirical Research Findings */}
    <ContentCard 
      title="Empirical Evidence: Education Program Impact" 
      icon={<span className="text-2xl">📊</span>}
    >
      <p className="text-slate-700 mb-4 text-sm italic">
        Table 16: Empirical studies on education programs for safe handling of chemotherapy
      </p>

      <div className="space-y-3">
        <ResearchFindingCard
          study="Systematic Review"
          methodology="Meta-analysis"
          variant="blue"
          findings={
            <>
              <p>Summarized findings from nine research publications:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li><strong>88.9% of studies</strong> reported a strong association between educational 
                interventions and safe handling of HDs</li>
                <li>One web-based study (11.1%) reported no improvement in participants' performance</li>
              </ul>
            </>
          }
          impact="Researchers suggested that little interaction with participants and structural barriers 
          to achieving desired behaviors may be the most probable reason for ineffectiveness in the one study."
        />

        <ResearchFindingCard
          study="Qualitative Study"
          methodology="Interview-based"
          variant="green"
          findings={
            <>
              <p><strong>Positive perception (54%)</strong> of blended learning for nurses' CPD:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>E-learning is effective (54%), easy to follow (74%)</li>
                <li>Refreshes knowledge and preserves time</li>
                <li>Positively impacts better practice</li>
                <li>Supports lifelong learning and CPD</li>
              </ul>
              <p className="mt-2"><strong>Challenges:</strong> Less motivation, technology issues (logging/
              connection problems), some preference for traditional methods</p>
            </>
          }
          impact="Overall findings support e-learning as part of blended learning approach, facilitating 
          discussions alongside face-to-face training."
        />

        <ResearchFindingCard
          study="Randomized Controlled Trial"
          methodology="Experimental"
          variant="purple"
          findings={
            <p>Web-based intervention was <strong>ineffective in increasing compliance</strong> with using 
            PPE in chemotherapy. This highlights the importance of combining online learning with practical, 
            hands-on training.</p>
          }
        />

        <ResearchFindingCard
          study="Randomized Controlled Trial"
          methodology="Experimental"
          variant="orange"
          findings={
            <>
              <p><strong>Statistically significant improvements</strong> among nurses compared to controls:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Job-related knowledge</li>
                <li>Self-efficacy in handling chemotherapy</li>
                <li>Nursing performance</li>
              </ul>
            </>
          }
        />

        <ResearchFindingCard
          study="Pre and Post Study"
          methodology="Quasi-experimental"
          variant="teal"
          findings={
            <>
              <p><strong>High degree of participant satisfaction</strong> for e-modules on safe handling:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Theoretical knowledge statistically significant (except one lesson)</li>
                <li>E-modules recommended for nurses/HCWs in LMICs</li>
                <li>Addresses lack of educational opportunities</li>
              </ul>
            </>
          }
        />

        <ResearchFindingCard
          study="One-group Post-test Pre-test"
          methodology="Experimental"
          variant="green"
          findings={
            <>
              <p>Designed mobile app demonstrated <strong>statistical improvement</strong> in:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Knowledge of safe handling</li>
                <li>Attitude toward safety</li>
                <li>Practice in handling chemotherapy</li>
              </ul>
              <p className="mt-2 text-xs italic">Content included: introduction, PPE, storage, 
              administration, managing spills and disposal</p>
            </>
          }
        />

        <ResearchFindingCard
          study="Pre and Post Test"
          methodology="Comparative"
          variant="blue"
          findings={
            <p>Nurses' <strong>knowledge and performance</strong> in handling chemotherapy were 
            <strong> statistically significant</strong> across both teaching methods (online vs 
            traditional programs), indicating multiple effective approaches.</p>
          }
        />
      </div>
    </ContentCard>

    {/* Key Success Factors */}
    <ContentCard 
      title="Key Success Factors" 
      icon={<CheckCircle2 className="w-6 h-6 text-emerald-600" />}
      variant="success"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-200">
          <h5 className="font-bold text-emerald-900 mb-3">✅ Proven Benefits</h5>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• High participant satisfaction</li>
            <li>• Significant improvement in theoretical knowledge</li>
            <li>• Enhanced practical skills</li>
            <li>• Better attitude toward safety</li>
            <li>• Increased confidence in handling HDs</li>
            <li>• Sustained behavior change</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-200">
          <h5 className="font-bold text-amber-900 mb-3">⚠️ Challenges</h5>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Technology access and connectivity issues</li>
            <li>• Limited interaction in some online formats</li>
            <li>• Structural barriers to implementing learned behaviors</li>
            <li>• Need for motivation and engagement</li>
            <li>• Preference for traditional methods by some learners</li>
          </ul>
        </div>
      </div>
    </ContentCard>

    {/* Best Practices */}
    <ContentCard 
      title="Best Practices for Education Programs" 
      icon={<span className="text-2xl">⭐</span>}
      variant="highlight"
    >
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
        <div className="space-y-4">
          {[
            {
              title: 'Combine Methods',
              description: 'Integrate e-learning with face-to-face training for optimal results'
            },
            {
              title: 'Include Interactive Elements',
              description: 'Ensure engagement through demonstrations, discussions, and hands-on practice'
            },
            {
              title: 'Provide Ongoing Support',
              description: 'Offer continuous resources and follow-up training opportunities'
            },
            {
              title: 'Regular Assessments',
              description: 'Conduct competency evaluations to ensure knowledge retention'
            },
            {
              title: 'Continuous Professional Development',
              description: 'Support lifelong learning through regular updates and refresher courses'
            },
            {
              title: 'Organizational Support',
              description: 'Ensure institutional backing for implementing learned behaviors'
            }
          ].map((practice, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-teal-200">
              <span className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center 
              justify-center text-sm font-bold">
                {idx + 1}
              </span>
              <div>
                <h6 className="font-semibold text-slate-900 mb-1">{practice.title}</h6>
                <p className="text-sm text-slate-600">{practice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentCard>

    {/* Final Takeaway */}
    <InfoBox type="success">
      <strong>Evidence-Based Conclusion:</strong> Education interventions have consistently demonstrated 
      effectiveness in improving knowledge, compliance, and safety practices in handling chemotherapy. 
      E-learning modules and blended learning approaches are particularly recommended for LMICs as 
      cost-effective solutions that address gaps in educational opportunities while supporting continuous 
      professional development. The key to success lies in combining multiple educational methods with 
      organizational support and regular competency assessments.
    </InfoBox>
  </>
);

export default EducationImpactSection;