// FILE: src/components/content/chapter05/03EducationImpactSection.tsx
// Updated to use hybrid content from Firebase
// ============================================

import { BookOpen, CheckCircle2, GraduationCap, Monitor, TrendingUp, Users, Lightbulb, Target, Zap } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { EducationalMethodCard } from "../EducationalMethodCard";
import { ResearchFindingCard } from "../ResearchFindingCard";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

// Fallback data - matches migration structure EXACTLY
const EDUCATION_FALLBACK = {
  powerOfEducation: 'Many empirical studies and theories have emphasized that continuous educational training programs are the most suitable sources for improving knowledge and practice[36-38]. However, the unavailability or limited availability of routine educational or training programs has been reported[12].',
  
  evidenceIntro: 'After identifying insufficient knowledge and training, as well as other contributing factors, remedial measures, including education and training programs, were implemented to address occupational exposure to HDs among HCWs. The findings reported[36,43,44]:',
  
  evidenceBenefits: [
    'Better Compliance: Improved adherence to safety guidelines',
    'Fewer Adverse Effects: Reduced number of safety incidents'
  ],
  
  impactAreas: [
    'Knowledge of safe handling practices',
    'Compliance with safety guidelines',
    'Proper use of PPE',
    'Self-efficacy in HD handling',
    'Nursing performance',
    'Attitudes toward safety',
    'Confidence levels',
    'Reduction in drug spills',
    'Sustained behavior change'
  ],
  
  effectiveMethodsIntro: 'Several studies used web-based online courses, educational modules, applied safety protocols, demonstration, and re-demonstration, videos, PowerPoint presentations, seminars, and workshops to improve self-efficacy, nursing performance, attitude, knowledge, and practice of cytotoxic drug handling among nurses[45] and reported statistically significant improvement in knowledge and practice in handling Chemotherapy[46].',
  
  effectiveMethodsExtended: 'Further, it is reported that educational interventions can significantly improve nurses\' attitudes towards specific issues related to safety, as well as confidence levels when handling HDs after introducing the education interventions[45]. The self-directed module was considered an alternative to face-to-face teaching sessions among nurses to achieve better practice in handling Chemotherapy[46].',
  
  elearningIntro: 'The paper by Grunigen et al. (2021) demonstrates significant improvements in theoretical knowledge and high participant satisfaction in handling chemotherapy through devolved e-modules. Those e-modules were highly recommended for the HCWs in Lower-Middle-Income Countries (LMIC) in handling HDs/Chemotherapy due to a lack of educational opportunities with cost constraints[47].',
  
  elearningExtended: 'Although developing mobile applications is not cost-effective for LMICs, one study has focused on this area and reported a significant improvement in knowledge and practice[48]. Similarly, a wide variety of literature has reported the effectiveness of educational interventions in promoting safety precautions among nurses when handling chemotherapy. Cost-effective e-learning modules are highly recommended to nurses and other HCWs in the LMIC[45,48,49]. Also, blended learning is considered the most suitable method for nurses[47]. E-learning modules are cost-effective learning strategies, particularly for LMICs[47-50].',
  
  educationalMethods: {
    webBased: {
      title: 'Web-based Online Courses',
      description: 'Interactive digital learning platforms',
      color: 'teal',
      benefits: [
        'Flexible, accessible anytime, anywhere',
        'Self-paced learning',
        'Cost-effective for large groups',
        'Easy to update content'
      ]
    },
    elearning: {
      title: 'E-learning Modules',
      description: 'Structured digital content modules',
      color: 'blue',
      benefits: [
        'Highly recommended for LMICs',
        'Cost-effective alternative',
        'Addresses lack of opportunities',
        'Supports lifelong learning'
      ]
    },
    blended: {
      title: 'Blended Learning',
      description: 'Combines face-to-face and online methods',
      color: 'purple',
      benefits: [
        'Most suitable for nurses',
        'Combines best of both approaches',
        'Refreshes knowledge',
        'Preserves time'
      ]
    },
    modules: {
      title: 'Educational Modules',
      description: 'Self-directed learning materials',
      color: 'green',
      benefits: [
        'Alternative to face-to-face sessions',
        'Self-paced progress',
        'Comprehensive content',
        'Better practice outcomes'
      ]
    }
  },
  
  additionalMethods: [
    'Safety Protocols',
    'Demonstrations',
    'Videos & Presentations',
    'Workshops & Seminars',
    'Mobile Applications',
    'PowerPoint Presentations'
  ],
  
  lmicRecommendations: {
    elearning: 'E-learning modules are highly recommended as a cost-effective alternative to traditional training',
    educationGap: 'Addresses the lack of educational opportunities with budget constraints',
    blendedApproach: 'Blended learning approach is considered the most suitable method for nurses',
    continuousDevelopment: 'Refreshes knowledge, preserves time, and supports lifelong learning and continuous professional development (CPD)'
  },
  
  researchTableIntro: 'Table 16: Empirical studies on education programs for safe handling of chemotherapy',
  
  researchFindings: {
    study1: {
      title: 'Systematic Review[51]',
      methodology: 'Meta-analysis',
      variant: 'blue',
      summary: 'Summarized findings from nine research publications:',
      findings: [
        'Most studies (88.9%) reported a strong association between educational interventions and the safe handling of HDs.',
        'One web-based study (11.1%) reported that educational interventional courses did not improve participants\' performance.'
      ],
      impact: 'Researchers suggested that little interaction with participants and structural barriers to achieving desired behaviors may be the most probable reason for ineffectiveness in the one study.'
    },
    study2: {
      title: 'Qualitative Study[52]',
      methodology: 'Interview-based',
      variant: 'green',
      mainFinding: 'Most nurses (54%) reported a positive perception of the blended learning method for nurses\' continuous professional development (CPD).',
      details: [
        '54% - E-learning aids are effective',
        '74% - Easy to follow',
        'Have a favourable perception as e-learning refreshes knowledge',
        'Preserves time',
        'Positively impacts better practice',
        'Supports lifelong learning and CPD'
      ],
      challenges: 'However, some preferred workshops/traditional teacher-centred learning methods, considering the interactions and ability to clarify doubts. Less motivation and issues with technology (logging issues/connection issues/insufficient knowledge of technology) negatively impacted e-learning among participants',
      impact: 'Overall findings reported that e-learning supports nurses in engaging in lifelong learning and CPD and facilitates discussions alongside face-to-face training as part of a blended learning approach.'
    },
    study3: {
      title: 'Randomized Controlled Trials[53]',
      methodology: 'Experimental',
      variant: 'purple',
      findings: 'Web-based intervention was ineffective in increasing compliance with using PPE in chemotherapy.'
    },
    study4: {
      title: 'Randomized Controlled Trials[54]',
      methodology: 'Experimental',
      variant: 'orange',
      findings: 'Statistically significant improvements among nurses compared to controls:',
      improvements: [
        'Job-related knowledge',
        'Self-efficacy',
        'Nursing performance'
      ],
      detail: 'The increase in job-related knowledge, self-efficacy, and nursing performance in handling chemotherapy was statistically significant among nurses compared to controls.'
    },
    study5: {
      title: 'Pre and Post Study[47]',
      methodology: 'Quasi-experimental',
      variant: 'teal',
      mainFinding: 'High degree of participant satisfaction for e-modules on safe handling',
      findings: [
        'Theoretical knowledge statistically significant (except one lesson)',
        'E-modules recommended for nurses/HCWs in LMICs',
        'Addresses lack of educational opportunities'
      ],
      detail: 'The theoretical knowledge of handling chemotherapy was statistically significant, except for one lesson. A high degree of participant satisfaction was reported for e-modules on safe handling of chemotherapy. E-modules are recommended for nurses/HCWs, especially those who handle HDs/Chemotherapy in LMICs, due to the lack of educational opportunities.'
    },
    study6: {
      title: 'One-group posttest-pretest[48]',
      methodology: 'Experimental',
      variant: 'green',
      mainFinding: 'Designed mobile app demonstrated statistical improvement in:',
      areas: [
        'Knowledge of safe handling',
        'Attitude toward safety',
        'Practice in handling chemotherapy'
      ],
      content: 'introduction, PPE, storage, administration, managing spills and disposal',
      detail: 'A designed mobile app demonstrated a statistical improvement in knowledge, attitude, and practice regarding the safe handling of chemotherapy. (Content: introduction, PPE, storage, administration, managing spills and disposal)'
    },
    study7: {
      title: 'Pre and Post Test[49]',
      methodology: 'Comparative',
      variant: 'blue',
      findings: 'Nurses\' knowledge and performance in handling chemotherapy are statistically significant across both teaching methods (online vs traditional programs).'
    }
  },
  
  successFactorsProven: [
    'High participant satisfaction',
    'Significant improvement in theoretical knowledge',
    'Enhanced practical skills',
    'Better attitude toward safety',
    'Increased confidence in handling HDs',
    'Sustained behavior change'
  ],
  
  successFactorsChallenges: [
    'Technology access and connectivity issues',
    'Limited interaction in some online formats',
    'Structural barriers to implementing learned behaviors',
    'Need for motivation and engagement',
    'Preference for traditional methods by some learners'
  ],
  
  bestPractices: [
    {
      num: 1,
      title: 'Combine Methods',
      description: 'Integrate e-learning with face-to-face training for optimal results',
      color: 'teal'
    },
    {
      num: 2,
      title: 'Include Interactive Elements',
      description: 'Ensure engagement through demonstrations, discussions, and hands-on practice',
      color: 'blue'
    },
    {
      num: 3,
      title: 'Provide Ongoing Support',
      description: 'Offer continuous resources and follow-up training opportunities',
      color: 'purple'
    },
    {
      num: 4,
      title: 'Regular Assessments',
      description: 'Conduct competency evaluations to ensure knowledge retention',
      color: 'green'
    },
    {
      num: 5,
      title: 'Continuous Professional Development',
      description: 'Support lifelong learning through regular updates and refresher courses',
      color: 'orange'
    },
    {
      num: 6,
      title: 'Organizational Support',
      description: 'Ensure institutional backing for implementing learned behaviors',
      color: 'pink'
    }
  ],
  
  finalConclusion: 'Education interventions have consistently demonstrated effectiveness in improving knowledge, compliance, and safety practices in handling chemotherapy. E-learning modules and blended learning approaches are particularly recommended for LMICs as cost-effective solutions that address gaps in educational opportunities while supporting continuous professional development. The key to success lies in combining multiple educational methods with organizational support and regular competency assessments.'
};

export const EducationImpactSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-05',
    sectionId: 'education',
    fallbackData: EDUCATION_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Hero Introduction with Visual Stats */}
      <ContentCard 
        title="Impact of Education Programs on Safe Handling of Chemotherapy" 
        icon={<GraduationCap className="w-6 h-6 text-green-600" />}
        variant="success"
      >
        <div className="space-y-6">
          {/* Key Message Box */}
          <div className="bg-linear-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-300 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-900 mb-2">💡 The Power of Education</h4>
                <p className="text-slate-800 leading-relaxed">
                  {data.powerOfEducation}
                </p>
              </div>
            </div>
          </div>

          {/* Evidence Box */}
          <div className="bg-white rounded-xl p-6 border-2 border-green-400 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📊</span>
              <h4 className="text-xl font-bold text-slate-900">Evidence of Effectiveness</h4>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              {data.evidenceIntro}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.evidenceBenefits.map((benefit: string, idx: number) => {
                const [title, description] = benefit.split(': ');
                return (
                  <div key={idx} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-900">{title}</span>
                    </div>
                    <p className="text-sm text-slate-700">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Areas */}
          <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
            <h4 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Key Impact Areas of Educational Interventions
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              {data.impactAreas.map((area: string, idx: number) => {
                const icons = ['🧠', '✅', '🛡️', '💪', '⭐', '🎯', '🚀', '📉', '🔄'];
                return (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-teal-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{icons[idx % icons.length]}</span>
                      <span className="text-sm text-slate-700 font-medium">{area}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Effective Educational Methods */}
      <ContentCard 
        title="Effective Educational Methods" 
        icon={<BookOpen className="w-6 h-6 text-teal-600" />}
        variant="highlight"
      >
        <div className="space-y-6">
          {/* Introduction Text */}
          <div className="bg-white rounded-lg p-5 border-l-4 border-teal-600">
            <p className="text-slate-700 leading-relaxed">
              {data.effectiveMethodsIntro}
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
            <p className="text-slate-700 leading-relaxed">
              {data.effectiveMethodsExtended}
            </p>
          </div>

          {/* E-learning Highlight */}
          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌐</span>
              <div>
                <h5 className="font-bold text-purple-900 mb-2">E-learning for LMICs</h5>
                <p className="text-slate-700 leading-relaxed mb-3">
                  {data.elearningIntro}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {data.elearningExtended}
                </p>
              </div>
            </div>
          </div>

          {/* Main Educational Methods Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {Object.values(data.educationalMethods).map((method: any, idx: number) => {
              const icons = [
                <Monitor key={idx} className="w-5 h-5" />,
                <GraduationCap key={idx} className="w-5 h-5" />,
                <Users key={idx} className="w-5 h-5" />,
                <BookOpen key={idx} className="w-5 h-5" />
              ];
              return (
                <EducationalMethodCard
                  key={idx}
                  icon={icons[idx]}
                  title={method.title}
                  description={method.description}
                  color={method.color as "teal" | "blue" | "purple" | "green"}
                  benefits={method.benefits}
                />
              );
            })}
          </div>

          {/* Additional Methods - Visual Pills */}
          <div className="bg-white rounded-xl p-5 border-2 border-teal-100">
            <h5 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-teal-600" />
              Additional Proven Methods
            </h5>
            <div className="grid md:grid-cols-3 gap-3">
              {data.additionalMethods.map((method: string, idx: number) => {
                const icons = ['🔒', '👨‍🏫', '🎥', '🏢', '📱', '📊'];
                const colors = [
                  'border-red-300 bg-red-50',
                  'border-blue-300 bg-blue-50',
                  'border-purple-300 bg-purple-50',
                  'border-green-300 bg-green-50',
                  'border-orange-300 bg-orange-50',
                  'border-pink-300 bg-pink-50'
                ];
                return (
                  <div key={idx} className={`rounded-lg p-4 border-2 ${colors[idx % colors.length]} hover:shadow-md transition-all`}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{icons[idx % icons.length]}</span>
                      <span className="text-sm font-semibold text-slate-700">{method}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Recommendations for LMICs */}
      <ContentCard 
        title="Recommendations for LMICs" 
        icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
        variant="info"
      >
        <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-300 shadow-lg">
          <div className="text-center mb-6">
            <span className="text-6xl mb-4 inline-block">🌍</span>
            <h4 className="text-2xl font-bold text-purple-900 mb-2">
              For Lower and Middle-Income Countries
            </h4>
            <p className="text-sm text-purple-700 italic">Evidence-based recommendations for resource-limited settings</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(data.lmicRecommendations).map(([, text]: [string, any], idx: number) => {
              const icons = ['💻', '📚', '🔀', '♻️'];
              const titles = ['E-learning Modules', 'Address Education Gap', 'Blended Learning Approach', 'Continuous Development'];
              return (
                <div key={idx} className="bg-white rounded-lg p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl shrink-0">{icons[idx]}</span>
                    <div>
                      <h6 className="font-bold text-purple-900 mb-2">{titles[idx]}</h6>
                      <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentCard>

      {/* Empirical Research Findings */}
      <ContentCard 
        title="Empirical Evidence: Education Program Impact" 
        icon={<span className="text-2xl">📊</span>}
      >
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border-l-4 border-blue-600">
          <p className="text-slate-800 font-semibold flex items-center gap-2">
            <span className="text-2xl">📋</span>
            {data.researchTableIntro}
          </p>
        </div>

        <div className="space-y-4">
          {/* Study 1 - Systematic Review */}
          <ResearchFindingCard
            study={data.researchFindings.study1.title}
            methodology={data.researchFindings.study1.methodology}
            variant={data.researchFindings.study1.variant as any}
            findings={
              <>
                <p className="font-semibold mb-3">{data.researchFindings.study1.summary}</p>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <p className="text-slate-700">{data.researchFindings.study1.findings[0]}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚠️</span>
                      <p className="text-slate-700">{data.researchFindings.study1.findings[1]}</p>
                    </div>
                  </div>
                </div>
              </>
            }
            impact={data.researchFindings.study1.impact}
          />

          {/* Study 2 - Qualitative Study */}
          <ResearchFindingCard
            study={data.researchFindings.study2.title}
            methodology={data.researchFindings.study2.methodology}
            variant={data.researchFindings.study2.variant as any}
            findings={
              <>
                <div className="bg-green-100 rounded-lg p-4 mb-4 border-2 border-green-300">
                  <p className="text-green-900 font-bold text-lg">{data.researchFindings.study2.mainFinding}</p>
                </div>
                
                <p className="font-semibold mb-3">Most reported that:</p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {data.researchFindings.study2.details.map((detail: string, idx: number) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                        <span className="text-sm text-slate-700">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-3 border-l-4 border-blue-600">
                  <p className="text-slate-700">
                    However, some preferred workshops/traditional teacher-centred learning methods, considering the interactions and ability to clarify doubts
                  </p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                  <p className="text-slate-700">
                    <strong>Challenges:</strong> {data.researchFindings.study2.challenges}
                  </p>
                </div>
              </>
            }
            impact={data.researchFindings.study2.impact}
          />

          {/* Study 3 - RCT (Ineffective) */}
          <ResearchFindingCard
            study={data.researchFindings.study3.title}
            methodology={data.researchFindings.study3.methodology}
            variant={data.researchFindings.study3.variant as any}
            findings={
              <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <p className="text-slate-700">{data.researchFindings.study3.findings}</p>
              </div>
            }
          />

          {/* Study 4 - RCT (Effective) */}
          <ResearchFindingCard
            study={data.researchFindings.study4.title}
            methodology={data.researchFindings.study4.methodology}
            variant={data.researchFindings.study4.variant as any}
            findings={
              <>
                <p className="font-semibold mb-3 text-orange-900">{data.researchFindings.study4.findings}</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {data.researchFindings.study4.improvements.map((item: string, idx: number) => (
                    <div key={idx} className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📈</span>
                        <span className="font-semibold text-orange-900">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-slate-700 bg-white rounded-lg p-3 border border-orange-200">
                  {data.researchFindings.study4.detail}
                </p>
              </>
            }
          />

          {/* Study 5 - Pre and Post Study */}
          <ResearchFindingCard
            study={data.researchFindings.study5.title}
            methodology={data.researchFindings.study5.methodology}
            variant={data.researchFindings.study5.variant as any}
            findings={
              <>
                <div className="bg-teal-100 rounded-lg p-4 mb-4 border-2 border-teal-300">
                  <p className="font-bold text-teal-900 text-lg">{data.researchFindings.study5.mainFinding}</p>
                </div>
                <div className="space-y-3">
                  {data.researchFindings.study5.findings.map((finding: string, idx: number) => {
                    const icons = ['📚', '👍', '🎯'];
                    return (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-teal-200">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{icons[idx]}</span>
                          <p className="text-slate-700">{finding}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-slate-700 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-600">
                  {data.researchFindings.study5.detail}
                </p>
              </>
            }
          />

          {/* Study 6 - Mobile App */}
          <ResearchFindingCard
            study={data.researchFindings.study6.title}
            methodology={data.researchFindings.study6.methodology}
            variant={data.researchFindings.study6.variant as any}
            findings={
              <>
                <p className="font-semibold mb-3">{data.researchFindings.study6.mainFinding}</p>
                <div className="grid md:grid-cols-3 gap-3 mb-4">
                  {data.researchFindings.study6.areas.map((area: string, idx: number) => {
                    const icons = ['🧠', '💭', '✋'];
                    return (
                      <div key={idx} className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="text-center">
                          <span className="text-3xl block mb-2">{icons[idx]}</span>
                          <span className="text-sm font-semibold text-green-900">{area}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-slate-600 italic">
                    <strong>Content included:</strong> {data.researchFindings.study6.content}
                  </p>
                </div>
                <p className="mt-3 text-slate-700">
                  {data.researchFindings.study6.detail}
                </p>
              </>
            }
          />

          {/* Study 7 - Pre and Post Test */}
          <ResearchFindingCard
            study={data.researchFindings.study7.title}
            methodology={data.researchFindings.study7.methodology}
            variant={data.researchFindings.study7.variant as any}
            findings={
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300">
                <p className="text-slate-700 text-center">
                  {data.researchFindings.study7.findings}
                </p>
              </div>
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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h5 className="font-bold text-emerald-900 text-lg">Proven Benefits</h5>
            </div>
            <div className="space-y-2">
              {data.successFactorsProven.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h5 className="font-bold text-amber-900 text-lg">Challenges</h5>
            </div>
            <div className="space-y-2">
              {data.successFactorsChallenges.map((challenge: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-amber-200">
                  <span className="text-amber-600 font-bold shrink-0">⚡</span>
                  <span className="text-sm text-slate-700">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Best Practices */}
      <ContentCard 
        title="Best Practices for Education Programs" 
        icon={<span className="text-2xl">⭐</span>}
        variant="highlight"
      >
        <div className="bg-linear-to-br from-teal-50 via-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-teal-300 shadow-lg">
          <div className="text-center mb-6">
            <span className="text-5xl mb-3 inline-block">🎯</span>
            <h4 className="text-xl font-bold text-teal-900">Six Pillars of Effective Education</h4>
          </div>
          
          <div className="space-y-4">
            {data.bestPractices.map((practice: any, idx: number) => {
              const colorSchemes: Record<string, string> = {
                teal: 'bg-teal-600 border-teal-200',
                blue: 'bg-blue-600 border-blue-200',
                purple: 'bg-purple-600 border-purple-200',
                green: 'bg-green-600 border-green-200',
                orange: 'bg-orange-600 border-orange-200',
                pink: 'bg-pink-600 border-pink-200'
              };
              
              const icons = ['🔀', '🎮', '🤝', '📝', '🔄', '🏢'];
              
              return (
                <div 
                  key={idx} 
                  className={`flex items-start gap-4 bg-white rounded-xl p-5 border-2 ${colorSchemes[practice.color].split(' ')[1]} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <div className="shrink-0">
                    <div className={`w-14 h-14 ${colorSchemes[practice.color].split(' ')[0]} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {practice.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{icons[idx]}</span>
                      <h6 className="font-bold text-slate-900 text-lg">{practice.title}</h6>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{practice.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentCard>

      {/* Final Takeaway */}
      <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Evidence-Based Conclusion
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {data.finalConclusion}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationImpactSection;