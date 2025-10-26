import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, BookOpen, Menu, X } from 'lucide-react';
import { emoduleContent } from '../../data/emoduleContent';

interface ContentPageProps {
  onBack: () => void;
}

export const ContentPage: React.FC<ContentPageProps> = ({ onBack }) => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const selectSubTopic = (chapterId: string, subTopicId: string) => {
    setSelectedChapter(chapterId);
    setSelectedSubTopic(subTopicId);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const getCurrentContent = () => {
    if (!selectedChapter || !selectedSubTopic) {
      return {
        title: 'Welcome to E-Module',
        content: `
          <div class="prose max-w-none">
            <h1>Safe Handling of Chemotherapy</h1>
            <h2>A Guide for Oncology Nurses</h2>
            <p class="text-lg mt-2">This e-module provides comprehensive education on safe handling practices for chemotherapy and hazardous drugs.</p>
            
            <div class="bg-teal-50 border-l-4 border-teal-500 p-6 my-6">
              <h3 class="text-teal-900 mt-0">About This E-Module</h3>
              <p class="text-gray-900 text-sm">Developed as supportive educational material for a tailored educational intervention designed for oncology nurses in Sri Lanka. This program uses a blended learning approach, combining in-person teaching with online learning opportunities.</p>
            </div>
            
            <h3><strong>Learning Objectives</strong></h3>
            <ul>
              <li>Understand cancer overview, epidemiology, and treatment methods</li>
              <li>Recognize occupational exposure risks and routes</li>
              <li>Apply hierarchical controls and safety measures</li>
              <li>Implement best practices for handling chemotherapy</li>
              <li>Identify barriers and solutions for safe handling</li>
            </ul>
            
            <div class="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
              <h3 class="text-amber-900 mt-0">How to Use This Module</h3>
              <ol>
                <li class="text-gray-900 text-sm">Navigate through chapters using the sidebar menu</li>
                <li class="text-gray-900 text-sm">Click on chapter titles to expand subtopics</li>
                <li class="text-gray-900 text-sm">Select subtopics to view detailed content</li>
                <li class="text-gray-900 text-sm">Progress through modules at your own pace</li>
              </ol>
            </div>
            
            <p><strong>Select a chapter from the sidebar to begin your learning journey.</strong></p>
          </div>
        `
      };
    }

    const chapter = emoduleContent.find(c => c.id === selectedChapter);
    const subTopic = chapter?.subTopics.find(st => st.id === selectedSubTopic);

    return {
      title: subTopic?.title || '',
      content: subTopic?.content || ''
    };
  };

  const currentContent = getCurrentContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-teal-600 font-medium transition bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl font-bold text-slate-900">E-Module Content</h1>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-slate-700 p-2"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white border-r border-slate-200 overflow-y-auto transition-transform duration-300 ease-in-out z-40 lg:translate-x-0`}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Table of Contents
            </h2>

            <nav className="space-y-2">
              {emoduleContent.map((chapter) => (
                <div key={chapter.id} className="border border-slate-200 rounded-lg overflow-hidden">
                  {/* Chapter Header */}
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-2xl">{chapter.icon}</span>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        expandedChapters.has(chapter.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* SubTopics */}
                  {expandedChapters.has(chapter.id) && (
                    <div className="bg-slate-50 border-t border-slate-200">
                      {chapter.subTopics.map((subTopic) => (
                        <button
                          key={subTopic.id}
                          onClick={() => selectSubTopic(chapter.id, subTopic.id)}
                          className={`w-full px-4 py-3 text-left hover:bg-teal-50 transition flex items-center gap-2 border-b border-slate-100 last:border-b-0 ${
                            selectedChapter === chapter.id && selectedSubTopic === subTopic.id
                              ? 'bg-teal-100 text-teal-900 font-medium'
                              : 'text-slate-700'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{subTopic.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10 max-w-4xl mx-auto">
          <article className="bg-gray-400 rounded-2xl shadow-xl p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-teal-600">
              {currentContent.title}
            </h1>
            
            <div
              className="prose prose-slate max-w-none
                prose-headings:text-slate-900 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-teal-700
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-800
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:space-y-2
                prose-li:text-slate-700 prose-li:marker:text-teal-600
                prose-ol:my-4 prose-ol:space-y-2
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-teal-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-teal-900
                prose-td:border prose-td:border-slate-200 prose-td:p-3 prose-td:text-slate-700
                prose-dl:space-y-4
                prose-dt:font-semibold prose-dt:text-slate-900 prose-dt:mb-1
                prose-dd:text-slate-700 prose-dd:ml-0 prose-dd:mb-4"
              dangerouslySetInnerHTML={{ __html: currentContent.content }}
            />
          </article>

          {/* Navigation Buttons */}
          {selectedSubTopic && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => {
                  // Navigate to previous subtopic logic
                }}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => {
                  // Navigate to next subtopic logic
                }}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};