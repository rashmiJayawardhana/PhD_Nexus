// src/components/content/chapter05/EducationImpactSection.tsx
import { BookOpen, CheckCircle2, GraduationCap, Monitor, TrendingUp, Users, Lightbulb, Target, Zap } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { EducationalMethodCard } from "../EducationalMethodCard";
import { ResearchFindingCard } from "../ResearchFindingCard";

export const EducationImpactSection = () => (
  <>
    {/* Hero Introduction with Visual Stats */}
    <ContentCard 
      title="Impact of Education Programs on Safe Handling of Chemotherapy" 
      icon={<GraduationCap className="w-6 h-6 text-green-600" />}
      variant="success"
    >
      <div className="space-y-6">
        {/* Key Message Box */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-300 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-900 mb-2">💡 The Power of Education</h4>
              <p className="text-slate-800 leading-relaxed">
                Many empirical studies and theories have emphasized that <strong>continuous educational 
                training programs are the most suitable sources for improving knowledge and practice</strong>. 
                However, the unavailability or limited availability of routine educational or training 
                programs has been reported.
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
            After identifying insufficient knowledge and training, as well as other contributing factors, 
            remedial measures, including education and training programs, were implemented to address 
            occupational exposure to HDs among HCWs. The findings reported:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-900">Better Compliance</span>
              </div>
              <p className="text-sm text-slate-700">Improved adherence to safety guidelines</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-900">Fewer Adverse Effects</span>
              </div>
              <p className="text-sm text-slate-700">Reduced number of safety incidents</p>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
          <h4 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Key Impact Areas of Educational Interventions
          </h4>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { icon: '🧠', text: 'Knowledge of safe handling practices' },
              { icon: '✅', text: 'Compliance with safety guidelines' },
              { icon: '🛡️', text: 'Proper use of PPE' },
              { icon: '💪', text: 'Self-efficacy in HD handling' },
              { icon: '⭐', text: 'Nursing performance' },
              { icon: '🎯', text: 'Attitudes toward safety' },
              { icon: '🚀', text: 'Confidence levels' },
              { icon: '📉', text: 'Reduction in drug spills' },
              { icon: '🔄', text: 'Sustained behavior change' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border border-teal-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                </div>
              </div>
            ))}
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
            Several studies used <strong>web-based online courses, educational modules, applied safety 
            protocols, demonstration, and re-demonstration, videos, PowerPoint presentations, seminars, 
            and workshops</strong> to improve self-efficacy, nursing performance, attitude, knowledge, 
            and practice of cytotoxic drug handling among nurses and reported <strong>statistically 
            significant improvement</strong> in knowledge and practice in handling Chemotherapy.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
          <p className="text-slate-700 leading-relaxed">
            Further, it is reported that educational interventions can significantly improve nurses' 
            <strong> attitudes towards specific issues related to safety, as well as confidence levels</strong> 
            when handling HDs after introducing the education interventions. The <strong>self-directed 
            module</strong> was considered an alternative to face-to-face teaching sessions among nurses 
            to achieve better practice in handling Chemotherapy.
          </p>
        </div>

        {/* E-learning Highlight */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌐</span>
            <div>
              <h5 className="font-bold text-purple-900 mb-2">E-learning for LMICs</h5>
              <p className="text-slate-700 leading-relaxed mb-3">
                The paper by <strong>Grunigen et al. (2021)</strong> demonstrates significant improvements 
                in theoretical knowledge and high participant satisfaction in handling chemotherapy through 
                devolved e-modules. Those e-modules were <strong>highly recommended for the HCWs in 
                Lower-Middle-Income Countries (LMIC)</strong> in handling HDs/Chemotherapy due to a lack 
                of educational opportunities with cost constraints.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Although developing mobile applications is not cost-effective for LMICs, one study has 
                focused on this area and reported a significant improvement in knowledge and practice. 
                Similarly, a wide variety of literature has reported the effectiveness of educational 
                interventions in promoting safety precautions among nurses when handling chemotherapy. 
                <strong> Cost-effective e-learning modules are highly recommended</strong> to nurses and 
                other HCWs in the LMIC. Also, <strong>blended learning is considered the most suitable 
                method for nurses</strong>. E-learning modules are cost-effective learning strategies, 
                particularly for LMICs.
              </p>
            </div>
          </div>
        </div>

        {/* Main Educational Methods Grid */}
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

        {/* Additional Methods - Visual Pills */}
        <div className="bg-white rounded-xl p-5 border-2 border-teal-100">
          <h5 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-teal-600" />
            Additional Proven Methods
          </h5>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { icon: '🔒', method: 'Safety Protocols', color: 'border-red-300 bg-red-50' },
              { icon: '👨‍🏫', method: 'Demonstrations', color: 'border-blue-300 bg-blue-50' },
              { icon: '🎥', method: 'Videos & Presentations', color: 'border-purple-300 bg-purple-50' },
              { icon: '🏢', method: 'Workshops & Seminars', color: 'border-green-300 bg-green-50' },
              { icon: '📱', method: 'Mobile Applications', color: 'border-orange-300 bg-orange-50' },
              { icon: '📊', method: 'PowerPoint Presentations', color: 'border-pink-300 bg-pink-50' }
            ].map((item, idx) => (
              <div key={idx} className={`rounded-lg p-4 border-2 ${item.color} hover:shadow-md transition-all`}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-slate-700">{item.method}</span>
                </div>
              </div>
            ))}
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
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-300 shadow-lg">
        <div className="text-center mb-6">
          <span className="text-6xl mb-4 inline-block">🌍</span>
          <h4 className="text-2xl font-bold text-purple-900 mb-2">
            For Lower and Middle-Income Countries
          </h4>
          <p className="text-sm text-purple-700 italic">Evidence-based recommendations for resource-limited settings</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: '💻',
              title: 'E-learning Modules',
              text: 'E-learning modules are highly recommended as a cost-effective alternative to traditional training'
            },
            {
              icon: '📚',
              title: 'Address Education Gap',
              text: 'Addresses the lack of educational opportunities with budget constraints'
            },
            {
              icon: '🔀',
              title: 'Blended Learning Approach',
              text: 'Blended learning approach is considered the most suitable method for nurses'
            },
            {
              icon: '♻️',
              title: 'Continuous Development',
              text: 'Refreshes knowledge, preserves time, and supports lifelong learning and continuous professional development (CPD)'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h6 className="font-bold text-purple-900 mb-2">{item.title}</h6>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentCard>

    {/* Empirical Research Findings */}
    <ContentCard 
      title="Empirical Evidence: Education Program Impact" 
      icon={<span className="text-2xl">📊</span>}
    >
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border-l-4 border-blue-600">
        <p className="text-slate-800 font-semibold flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Table 16: Empirical studies on education programs for safe handling of chemotherapy
        </p>
      </div>

      <div className="space-y-4">
        <ResearchFindingCard
          study="Systematic Review"
          methodology="Meta-analysis"
          variant="blue"
          findings={
            <>
              <p className="font-semibold mb-3">Summarized findings from nine research publications:</p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-slate-700">
                      <strong>Most studies (88.9%)</strong> reported a strong association between 
                      educational interventions and the safe handling of HDs.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <p className="text-slate-700">
                      One web-based study (11.1%) reported that educational interventional courses 
                      did not improve participants' performance.
                    </p>
                  </div>
                </div>
              </div>
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
              <div className="bg-green-100 rounded-lg p-4 mb-4 border-2 border-green-300">
                <p className="text-green-900 font-bold text-lg">
                  <strong>Most nurses (54%)</strong> reported a positive perception of the blended 
                  learning method for nurses' continuous professional development (CPD).
                </p>
              </div>
              
              <p className="font-semibold mb-3">Most reported that:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                {[
                  { stat: '54%', text: 'E-learning aids are effective' },
                  { stat: '74%', text: 'Easy to follow' },
                  { text: 'Have a favourable perception as e-learning refreshes knowledge' },
                  { text: 'Preserves time' },
                  { text: 'Positively impacts better practice' },
                  { text: 'Supports lifelong learning and CPD' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item.stat && (
                        <span className="font-bold text-green-700 text-lg">{item.stat}</span>
                      )}
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-3 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  However, some preferred workshops/traditional teacher-centred learning methods, 
                  considering the interactions and ability to clarify doubts
                </p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                <p className="text-slate-700">
                  <strong>Challenges:</strong> Less motivation and issues with technology (logging 
                  issues/connection issues/insufficient knowledge of technology) negatively impacted 
                  e-learning among participants
                </p>
              </div>
            </>
          }
          impact="Overall findings reported that e-learning supports nurses in engaging in lifelong 
          learning and CPD and facilitates discussions alongside face-to-face training as part of a 
          blended learning approach."
        />

        <ResearchFindingCard
          study="Randomized Controlled Trials"
          methodology="Experimental"
          variant="purple"
          findings={
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
              <p className="text-slate-700">
                Web-based intervention was <strong className="text-red-700">ineffective in increasing 
                compliance</strong> with using PPE in chemotherapy.
              </p>
            </div>
          }
        />

        <ResearchFindingCard
          study="Randomized Controlled Trials"
          methodology="Experimental"
          variant="orange"
          findings={
            <>
              <p className="font-semibold mb-3 text-orange-900">
                <strong>Statistically significant improvements</strong> among nurses compared to controls:
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {['Job-related knowledge', 'Self-efficacy', 'Nursing performance'].map((item, idx) => (
                  <div key={idx} className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📈</span>
                      <span className="font-semibold text-orange-900">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-slate-700 bg-white rounded-lg p-3 border border-orange-200">
                The increase in job-related knowledge, self-efficacy, and nursing performance in handling 
                chemotherapy was statistically significant among nurses compared to controls.
              </p>
            </>
          }
        />

        <ResearchFindingCard
          study="Pre and Post Study"
          methodology="Quasi-experimental"
          variant="teal"
          findings={
            <>
              <div className="bg-teal-100 rounded-lg p-4 mb-4 border-2 border-teal-300">
                <p className="font-bold text-teal-900 text-lg">
                  <strong>High degree of participant satisfaction</strong> for e-modules on safe handling
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <p className="text-slate-700">
                      Theoretical knowledge statistically significant (except one lesson)
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👍</span>
                    <p className="text-slate-700">
                      E-modules recommended for nurses/HCWs in LMICs
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <p className="text-slate-700">
                      Addresses lack of educational opportunities
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-700 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-600">
                The theoretical knowledge of handling chemotherapy was statistically significant, except 
                for one lesson. A high degree of participant satisfaction was reported for e-modules on 
                safe handling of chemotherapy. E-modules are recommended for nurses/HCWs, especially those 
                who handle HDs/Chemotherapy in LMICs, due to the lack of educational opportunities.
              </p>
            </>
          }
        />

        <ResearchFindingCard
          study="One-group posttest-pretest"
          methodology="Experimental"
          variant="green"
          findings={
            <>
              <p className="font-semibold mb-3">
                Designed mobile app demonstrated <strong className="text-green-700">statistical 
                improvement</strong> in:
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                {[
                  { icon: '🧠', text: 'Knowledge of safe handling' },
                  { icon: '💭', text: 'Attitude toward safety' },
                  { icon: '✋', text: 'Practice in handling chemotherapy' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div className="text-center">
                      <span className="text-3xl block mb-2">{item.icon}</span>
                      <span className="text-sm font-semibold text-green-900">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-slate-600 italic">
                  <strong>Content included:</strong> introduction, PPE, storage, administration, managing 
                  spills and disposal
                </p>
              </div>
              <p className="mt-3 text-slate-700">
                A designed mobile app demonstrated a statistical improvement in knowledge, attitude, and 
                practice regarding the safe handling of chemotherapy. (Content: introduction, PPE, storage, 
                administration, managing spills and disposal)
              </p>
            </>
          }
        />

        <ResearchFindingCard
          study="Pre and Post Test"
          methodology="Comparative"
          variant="blue"
          findings={
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300">
              <p className="text-slate-700 text-center">
                Nurses' <strong className="text-blue-700 text-lg">knowledge and performance</strong> in 
                handling chemotherapy are <strong className="text-blue-700 text-lg">statistically 
                significant</strong> across both teaching methods (online vs traditional programs).
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
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <h5 className="font-bold text-emerald-900 text-lg">Proven Benefits</h5>
          </div>
          <div className="space-y-2">
            {[
              'High participant satisfaction',
              'Significant improvement in theoretical knowledge',
              'Enhanced practical skills',
              'Better attitude toward safety',
              'Increased confidence in handling HDs',
              'Sustained behavior change'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <h5 className="font-bold text-amber-900 text-lg">Challenges</h5>
          </div>
          <div className="space-y-2">
            {[
              'Technology access and connectivity issues',
              'Limited interaction in some online formats',
              'Structural barriers to implementing learned behaviors',
              'Need for motivation and engagement',
              'Preference for traditional methods by some learners'
            ].map((challenge, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-amber-200">
                <span className="text-amber-600 font-bold flex-shrink-0">⚡</span>
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
      <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-teal-300 shadow-lg">
        <div className="text-center mb-6">
          <span className="text-5xl mb-3 inline-block">🎯</span>
          <h4 className="text-xl font-bold text-teal-900">Six Pillars of Effective Education</h4>
        </div>
        
        <div className="space-y-4">
          {[
            {
              num: 1,
              icon: '🔀',
              title: 'Combine Methods',
              description: 'Integrate e-learning with face-to-face training for optimal results',
              color: 'teal'
            },
            {
              num: 2,
              icon: '🎮',
              title: 'Include Interactive Elements',
              description: 'Ensure engagement through demonstrations, discussions, and hands-on practice',
              color: 'blue'
            },
            {
              num: 3,
              icon: '🤝',
              title: 'Provide Ongoing Support',
              description: 'Offer continuous resources and follow-up training opportunities',
              color: 'purple'
            },
            {
              num: 4,
              icon: '📝',
              title: 'Regular Assessments',
              description: 'Conduct competency evaluations to ensure knowledge retention',
              color: 'green'
            },
            {
              num: 5,
              icon: '🔄',
              title: 'Continuous Professional Development',
              description: 'Support lifelong learning through regular updates and refresher courses',
              color: 'orange'
            },
            {
              num: 6,
              icon: '🏢',
              title: 'Organizational Support',
              description: 'Ensure institutional backing for implementing learned behaviors',
              color: 'pink'
            }
          ].map((practice, idx) => {
            const colorSchemes: Record<string, string> = {
              teal: 'bg-teal-600 border-teal-200',
              blue: 'bg-blue-600 border-blue-200',
              purple: 'bg-purple-600 border-purple-200',
              green: 'bg-green-600 border-green-200',
              orange: 'bg-orange-600 border-orange-200',
              pink: 'bg-pink-600 border-pink-200'
            };
            
            return (
              <div 
                key={idx} 
                className={`flex items-start gap-4 bg-white rounded-xl p-5 border-2 ${colorSchemes[practice.color].split(' ')[1]} shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 ${colorSchemes[practice.color].split(' ')[0]} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}>
                    {practice.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{practice.icon}</span>
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
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300 shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
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
            <strong>Education interventions have consistently demonstrated effectiveness</strong> in 
            improving knowledge, compliance, and safety practices in handling chemotherapy. 
            <strong className="text-emerald-700"> E-learning modules and blended learning approaches 
            are particularly recommended for LMICs</strong> as cost-effective solutions that address 
            gaps in educational opportunities while supporting continuous professional development. 
            The key to success lies in <strong>combining multiple educational methods with organizational 
            support and regular competency assessments</strong>.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default EducationImpactSection;