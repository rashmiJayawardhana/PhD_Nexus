// src/components/content/chapter/Chapter1Content.tsx
import type { ContentSection } from "@/types/content";
import { useState } from "react";
import { IntroductionSection } from "../chapter01/IntroductionSection";
import { CancerOverviewSection } from "../chapter01/CancerOverviewSection";
import { EpidemiologySection } from "../chapter01/EpidemiologySection";
import { TreatmentSection } from "../chapter01/TreatmentSection";
import { HazardousSection } from "../chapter01/HazardousSection";
import { ArrowLeft, ChevronRight } from "lucide-react";

export const Chapter1Content: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections: ContentSection[] = [
    { id: 'intro', title: 'Introduction', content: <IntroductionSection /> },
    { id: 'overview', title: 'Overview of Cancer', content: <CancerOverviewSection /> },
    { id: 'epidemiology', title: 'Cancer Epidemiology', content: <EpidemiologySection /> },
    { id: 'treatment', title: 'Cancer Management', content: <TreatmentSection /> },
    { id: 'hazardous', title: 'Properties of Hazardous Drugs', content: <HazardousSection /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
              01
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Chapter 01: Introduction</h1>
              <p className="text-slate-600">Overview of cancer, epidemiology, treatment methods, and adverse effects</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 overflow-x-auto">
          <div className="flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {sections.find(s => s.id === activeSection)?.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => {
              const currentIdx = sections.findIndex(s => s.id === activeSection);
              if (currentIdx > 0) setActiveSection(sections[currentIdx - 1].id);
            }}
            disabled={activeSection === sections[0].id}
            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <button 
            onClick={() => {
              const currentIdx = sections.findIndex(s => s.id === activeSection);
              if (currentIdx < sections.length - 1) setActiveSection(sections[currentIdx + 1].id);
            }}
            disabled={activeSection === sections[sections.length - 1].id}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Content;