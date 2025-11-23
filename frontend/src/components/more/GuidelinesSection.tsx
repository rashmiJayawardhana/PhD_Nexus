// src/components/more/GuidelinesSection.tsx
import { BookOpen, Shield } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import { regulatoryGuidelines } from '@/data/resourcesData';

export const GuidelinesSection: React.FC = () => {
  return (
    <section className="py-12 px-6" id="guidelines">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Regulatory Standards</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Guidelines from Regulatory Agencies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Access official guidelines and standards from leading healthcare organizations worldwide. 
            These evidence-based documents provide comprehensive guidance for safe handling of hazardous drugs.
          </p>
        </div>

        {/* Student-Friendly Instructions */}
        <div className="bg-linear-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-10 border-2 border-blue-200">
          <div className="flex items-start gap-4 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">📚 How to Access These Guidelines</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p className="text-sm leading-relaxed">
                    Click the <strong>"Open in Google Drive"</strong> button on any guideline card below
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p className="text-sm leading-relaxed">
                    The document will open in a new tab where you can <strong>read it online</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <p className="text-sm leading-relaxed">
                    To download, look for the <strong>download button (⬇️)</strong> at the top of the Google Drive page
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">✨ Why These Guidelines Matter</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              These documents represent the gold standard in chemotherapy safety. They are developed by expert committees, 
              undergo rigorous peer review, and are regularly updated to reflect the latest research and best practices.
            </p>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulatoryGuidelines.map((guideline) => (
            <ResourceCard 
              key={guideline.id} 
              resource={guideline} 
              variant="document"
            />
          ))}
        </div>

        {/* Need Help Section */}
        <div className="mt-10 bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
          <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            ❓ Need Help?
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            If you experience any issues accessing these resources or have trouble downloading, 
            please contact us through the <strong>Contact</strong> page. We're here to help!
          </p>
        </div>
      </div>
    </section>
  );
};