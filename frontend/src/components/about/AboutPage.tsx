// src/components/about/AboutPage.tsx
import { ArrowLeft, Target, Users, BookOpen, Shield, Lightbulb, ChevronDown, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onContentClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onContentClick }) => (
  <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-purple-900">
    <button
      onClick={onBack}
      className="fixed top-6 left-6 z-50 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full text-gray-900 hover:bg-white/20 transition flex items-center gap-2"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to Home
    </button>

    <section className="min-h-screen flex items-center justify-center px-6 py-5">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
            Chemosafe
          </h1>
          <p className="text-2xl md:text-3xl text-amber-400 font-light">
            Empowering Oncology Nurses for Safer Practice
          </p>
        </div>
        
        <div className="pt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-teal-400 mx-auto" />
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-teal-500/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-teal-500 p-3 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Mission</h2>
          </div>
          <p className="text-lg text-slate-200 leading-relaxed">
            Chemosafe is a website developed as part of a tailored educational program for oncology nurses in Sri Lanka. The program follows a <span className="text-teal-400 font-semibold">blended learning approach</span>, combining face-to-face teaching with online learning opportunities. Through this website, nurses can access interactive e-modules and resources that share best practices for the safe handling of chemotherapy and other hazardous drugs.
          </p>
        </div>

        {/* Global Impact */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-500/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Global Impact</h2>
          </div>
          <p className="text-lg text-slate-200 leading-relaxed mb-4">
            Supporting the <span className="text-blue-400 font-semibold">United Nations Sustainable Development Goal 3 (Good Health and Well-being)</span>, Chemosafe promotes both occupational safety and environmental health.
          </p>
          <p className="text-lg text-slate-200 leading-relaxed">
            By improving nurses' knowledge and skills, the program helps <span className="text-purple-400 font-semibold">reduce exposure risks</span> related to chemotherapy handling, protects nurses' health, and enhances the quality of oncology care.
          </p>
        </div>

        {/* Research Background */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-500/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-500 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Research Foundation</h2>
          </div>
          <div className="space-y-4 text-lg text-slate-200 leading-relaxed">
            <p>
              This educational initiative was developed by <span className="text-purple-400 font-semibold">Senarath N.S.A.S.N</span> (RN, RPh, BSc Nursing [Hons] [UOR], PgDSS [USJ], PgDPPE [OUSL], PhD [Reading] [USJ]) as part of postgraduate research titled:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border-l-4 border-purple-500">
              <p className="italic text-purple-300">
                "Effectiveness of a Tailored Educational Intervention to Minimize the Associated Factors for Occupational Exposure to Systemic Anticancer Therapy (SACT) among Nurses at Apeksha Hospital, Maharagama."
              </p>
            </div>
            <p>
              All content was <span className="text-pink-400 font-semibold">expert-reviewed</span> before publication to ensure accuracy and relevance.
            </p>
          </div>
        </div>

        {/* Who Can Benefit */}
        <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-amber-500/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-500 p-3 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Who Can Benefit</h2>
          </div>
          <p className="text-lg text-slate-200 leading-relaxed">
            <span className="text-amber-400 font-semibold">Oncology nurses</span> and other healthcare professionals are encouraged to explore Chemosafe and strengthen their understanding of safe chemotherapy handling practices.
          </p>
        </div>

        {/* Key Takeaway */}
        <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-amber-300" />
              <h2 className="text-3xl font-bold text-white">Key Take-Home Message</h2>
            </div>
            <p className="text-xl text-white leading-relaxed font-medium">
              Chemosafe equips oncology nurses with practical, evidence-based learning tools to work safely, protect their health, and deliver better cancer care.
            </p>
          </div>
        </div>

        {/* Features Grid */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Program Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive E-Modules</h3>
                <p className="text-slate-300">Comprehensive online learning materials tailored to local needs</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Blended Learning</h3>
                <p className="text-slate-300">Combines in-person teaching with flexible online access</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert-Reviewed</h3>
                <p className="text-slate-300">All content validated by healthcare professionals</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <button 
              onClick={onContentClick}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-10 py-4 rounded-full font-semibold transition shadow-2xl hover:shadow-teal-500/50 text-lg flex items-center gap-3 mx-auto"
            >
              Explore Learning Materials
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

      </div>
    </section>
  </div>
);