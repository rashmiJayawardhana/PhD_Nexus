// src/components/more/MorePage.tsx
import { ArrowLeft, Sparkles, BookOpen, FileText, ClipboardCheck } from 'lucide-react';
import { GuidelinesSection } from './GuidelinesSection';
import { SupportiveMaterialsSection } from './SupportiveMaterialsSection';
import { StudyQuestionsSection } from './StudyQuestionsSection';

interface MorePageProps {
  onBack: () => void;
}

export const MorePage: React.FC<MorePageProps> = ({ onBack }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 hover:bg-teal-50 rounded-lg transition font-medium text-slate-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-teal-600" />
              <h1 className="text-2xl font-bold text-slate-900">Additional Resources</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-r from-teal-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Expand Your Expertise
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Access regulatory guidelines, supportive learning materials, and self-assessment tools 
            to enhance your knowledge of chemotherapy safety practices.
          </p>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <button
              onClick={() => scrollToSection('guidelines')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 rounded-xl p-6 transition text-left group"
            >
              <BookOpen className="w-10 h-10 mb-3 text-white group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-1">Guidelines</h3>
              <p className="text-sm text-white/80">7 regulatory documents</p>
            </button>

            <button
              onClick={() => scrollToSection('materials')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 rounded-xl p-6 transition text-left group"
            >
              <FileText className="w-10 h-10 mb-3 text-white group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-1">Materials</h3>
              <p className="text-sm text-white/80">Videos & downloads</p>
            </button>

            <button
              onClick={() => scrollToSection('questions')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 rounded-xl p-6 transition text-left group"
            >
              <ClipboardCheck className="w-10 h-10 mb-3 text-white group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-1">Questions</h3>
              <p className="text-sm text-white/80">Self-study assessment</p>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <GuidelinesSection />
      <SupportiveMaterialsSection />
      <StudyQuestionsSection />

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-linear-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Continue Your Learning Journey
          </h3>
          <p className="text-slate-300 mb-8">
            Combine these resources with the main educational modules for comprehensive training 
            in chemotherapy safety practices.
          </p>
          <button
            onClick={onBack}
            className="bg-linear-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition shadow-xl"
          >
            Return to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default MorePage;