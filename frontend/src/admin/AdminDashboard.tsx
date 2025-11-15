// FILE: src/admin/AdminDashboard.tsx
// Main admin dashboard
// ==========================================

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { contentService, type ChapterContent } from '@/services/content.service';
import { LogOut, LayoutDashboard, Edit, Save, Eye, RefreshCw } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [chapters, setChapters] = useState<ChapterContent[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await contentService.getAllChapters();
      console.log('Loaded chapters:', data); // Debug
      setChapters(data);
      
      if (data.length === 0) {
        setError('No chapters found in database. Please run migration script.');
      }
    } catch (error) {
      console.error('Error loading chapters:', error);
      setError('Failed to load chapters. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleChapterSelect = (chapterId: string) => {
    console.log('Selected chapter:', chapterId); // Debug
    setSelectedChapter(chapterId);
    setSelectedSection(null);
    setContent('');
    setMessage('');
  };

  const handleSectionSelect = (sectionId: string) => {
    console.log('Selected section:', sectionId); // Debug
    setSelectedSection(sectionId);
    
    const chapter = chapters.find(c => c.id === selectedChapter);
    console.log('Found chapter:', chapter); // Debug
    
    if (chapter && chapter.sections && chapter.sections[sectionId]) {
      const sectionContent = chapter.sections[sectionId].content || '';
      console.log('Section content:', sectionContent); // Debug
      setContent(sectionContent);
      setMessage('');
    } else {
      console.error('Section not found:', { chapterId: selectedChapter, sectionId }); // Debug
      setContent('<h2>Section Content</h2><p>Start editing here...</p>');
      setError('Section not found in database');
    }
  };

  const handleSave = async () => {
    if (!selectedChapter || !selectedSection || !user) {
      setError('Please select a chapter and section first');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');
    
    try {
      console.log('Saving:', { chapterId: selectedChapter, sectionId: selectedSection, content }); // Debug
      
      await contentService.updateSection(
        selectedChapter,
        selectedSection,
        { content },
        user.email
      );
      
      setMessage('✅ Saved successfully!');
      setTimeout(() => setMessage(''), 3000);
      
      // Reload chapters to get updated data
      await loadChapters();
    } catch (error) {
      console.error('Save error:', error); // Debug
      setError('❌ Error saving content. Check console.');
    } finally {
      setSaving(false);
    }
  };

  const selectedChapterData = chapters.find(c => c.id === selectedChapter);

  // Quill modules configuration
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-teal-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-sm text-slate-600">Welcome, {user?.email}</p>
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
            <div className="md:col-span-1 bg-white rounded-xl shadow-lg p-4 h-fit">
              <h3 className="font-bold text-slate-900 mb-4">
                Chapters ({chapters.length})
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
                      className={`w-full text-left px-4 py-2 rounded-lg transition text-sm ${
                        selectedChapter === chapter.id
                          ? 'bg-teal-100 text-teal-900 font-semibold'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="font-semibold">{chapter.icon} {chapter.id}</div>
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
              {/* Section Selection */}
              {selectedChapter && selectedChapterData && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-4">
                    Sections in {selectedChapterData.title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Object.keys(selectedChapterData.sections || {}).length === 0 ? (
                      <p className="col-span-full text-sm text-slate-500 text-center py-4">
                        No sections found
                      </p>
                    ) : (
                      Object.entries(selectedChapterData.sections).map(([sectionId, section]) => (
                        <button
                          key={sectionId}
                          onClick={() => handleSectionSelect(sectionId)}
                          className={`px-4 py-2 rounded-lg text-sm transition ${
                            selectedSection === sectionId
                              ? 'bg-blue-100 text-blue-900 font-semibold'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Editor */}
              {selectedSection && selectedChapterData && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-lg">
                      Edit: {selectedChapterData.sections[selectedSection]?.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPreview(!preview)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        <Eye className="w-4 h-4" />
                        {preview ? 'Edit' : 'Preview'}
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition disabled:opacity-50"
                      >
                        <Save className="w-4 h-4" />
                        {saving ? 'Saving...' : 'Save'}
                      </button>
                    </div>
                  </div>

                  {message && (
                    <div className="mb-4 bg-green-50 border-2 border-green-200 rounded-lg p-3 text-green-700">
                      {message}
                    </div>
                  )}

                  {preview ? (
                    <div
                      className="prose max-w-none p-4 border-2 border-slate-200 rounded-lg min-h-96"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  ) : (
                    <div className="border-2 border-slate-200 rounded-lg">
                      <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        modules={quillModules}
                        className="h-96"
                      />
                    </div>
                  )}

                  {/* Debug Info (remove in production) */}
                  <div className="mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600">
                    <strong>Debug:</strong> Chapter: {selectedChapter} | Section: {selectedSection} | Content Length: {content.length}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!selectedChapter && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <Edit className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No Chapter Selected</h3>
                  <p className="text-slate-600">Select a chapter from the sidebar to start editing</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};