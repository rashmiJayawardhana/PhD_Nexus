// FILE: src/admin/AdminDashboard.tsx
// Main admin dashboard
// ==========================================

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { contentService, type ChapterContent } from '@/services/content.service';
import { LogOut, LayoutDashboard, RefreshCw, Edit3, Lock } from 'lucide-react';
import { StructuredContentEditor } from './StructuredContentEditor';

export const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [chapters, setChapters] = useState<ChapterContent[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await contentService.getAllChapters();
      setChapters(data);
      
      if (data.length === 0) {
        setError('No chapters found. Please run migration script.');
      }
    } catch (error) {
      console.error('Error loading chapters:', error);
      setError('Failed to load chapters. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setSelectedSection(null);
    setError('');
    setSuccessMessage('');
  };

  const handleSectionSelect = (sectionId: string) => {
    setSelectedSection(sectionId);
    setError('');
    setSuccessMessage('');
  };

  const handleSaveSection = async (updatedData: any) => {
    if (!selectedChapter || !selectedSection || !user) {
      throw new Error('Please select a chapter and section');
    }

    try {
      await contentService.updateSectionData(
        selectedChapter,
        selectedSection,
        updatedData,
        user.email
      );
      
      setSuccessMessage('✅ Saved successfully! Changes are now live.');
      setTimeout(() => setSuccessMessage(''), 5000);
      
      // Reload chapters to get updated data
      await loadChapters();
    } catch (error) {
      console.error('Save error:', error);
      throw error;
    }
  };

  const selectedChapterData = chapters.find(c => c.id === selectedChapter);
  const selectedSectionData = selectedChapterData?.sections?.[selectedSection || ''];

  // Check if section has editable structured data
  const hasEditableData = selectedSectionData?.data && 
    typeof selectedSectionData.data === 'object' &&
    Object.keys(selectedSectionData.data).length > 0;

  // FIXED: Get sections sorted by order property
  const getSortedSections = (sections: Record<string, any>) => {
    return Object.entries(sections).sort(([, a], [, b]) => {
      const orderA = a.order ?? 999;
      const orderB = b.order ?? 999;
      return orderA - orderB;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-teal-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-sm text-slate-600">Content Management System</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadChapters}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition disabled:opacity-50"
              title="Refresh content"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
            <span className="text-green-600 text-xl">✅</span>
            <div>
              <p className="text-green-700 font-semibold">Success!</p>
              <p className="text-sm text-green-600">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-4 bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
            <span className="text-red-600 text-xl">⚠️</span>
            <div>
              <p className="text-red-700 font-semibold">Error</p>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <RefreshCw className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Loading chapters...</p>
          </div>
        )}

        {/* Main Content */}
        {!loading && (
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar - Chapter Selection */}
            <div className="md:col-span-1 bg-white rounded-xl shadow-lg p-4 h-fit sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>📚</span> Chapters ({chapters.length})
              </h3>
              <div className="space-y-2">
                {chapters.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-4">
                    No chapters found.<br/>
                    Run migration script.
                  </p>
                ) : (
                  chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => handleChapterSelect(chapter.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition text-sm ${
                        selectedChapter === chapter.id
                          ? 'bg-teal-100 text-teal-900 font-semibold border-2 border-teal-300'
                          : 'hover:bg-slate-100 text-slate-700 border-2 border-transparent'
                      }`}
                    >
                      <div className="font-semibold">{chapter.icon} {chapter.title}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        {Object.keys(chapter.sections || {}).length} sections
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-3 space-y-6">
              {/* Section Selection - NOW SORTED! */}
              {selectedChapter && selectedChapterData && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">
                    📝 Sections in {selectedChapterData.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.keys(selectedChapterData.sections || {}).length === 0 ? (
                      <p className="col-span-full text-sm text-slate-500 text-center py-4">
                        No sections found
                      </p>
                    ) : (
                      // FIXED: Use sorted sections instead of random Object.entries
                      getSortedSections(selectedChapterData.sections).map(([sectionId, section]) => {
                        const hasData = section.data && Object.keys(section.data).length > 0;
                        
                        return (
                          <button
                            key={sectionId}
                            onClick={() => handleSectionSelect(sectionId)}
                            className={`px-4 py-3 rounded-lg text-sm transition relative ${
                              selectedSection === sectionId
                                ? 'bg-blue-100 text-blue-900 font-semibold border-2 border-blue-300'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-transparent'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-500">#{section.order}</span>
                                <span>{section.title}</span>
                              </div>
                              {hasData ? (
                                <span title="Editable">
                                  <Edit3 className="w-4 h-4 text-green-600" />
                                </span>
                              ) : (
                                <span title="View only">
                                  <Lock className="w-4 h-4 text-slate-400" />
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>

                  {/* Legend */}
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-600 mb-2 font-semibold">Legend:</p>
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Edit3 className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">Editable content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600">View only (hardcoded)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Editor */}
              {selectedSection && selectedSectionData && (
                <>
                  {hasEditableData ? (
                    <StructuredContentEditor
                      sectionTitle={selectedSectionData.title}
                      sectionData={selectedSectionData.data}
                      onSave={handleSaveSection}
                    />
                  ) : (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                      <Lock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        View Only Section
                      </h3>
                      <p className="text-slate-600 mb-4">
                        This section contains hardcoded content (tables, images, complex layouts)
                        <br/>that cannot be edited through the admin panel.
                      </p>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-left">
                        <p className="text-sm text-blue-900">
                          <strong>Section:</strong> {selectedSectionData.title}<br/>
                          <strong>Order:</strong> #{selectedSectionData.order}<br/>
                          <strong>Type:</strong> Complex component with styles and images<br/>
                          <strong>Editable:</strong> No - requires code changes
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Empty State */}
              {!selectedChapter && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <LayoutDashboard className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Welcome to Admin Dashboard</h3>
                  <p className="text-slate-600 mb-4">
                    Select a chapter from the sidebar to view and edit its content
                  </p>
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 border-2 border-teal-200">
                    <p className="text-sm text-slate-700">
                      💡 <strong>Tip:</strong> Sections with <Edit3 className="w-4 h-4 inline text-green-600" /> icon are editable.
                      Changes are saved to Firebase and appear instantly for all users.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};