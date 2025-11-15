// FILE: src/admin/StructuredContentEditor.tsx
// User-friendly editor for structured content (keeps styles intact)
// ==================================================================

import React, { useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';

interface StructuredContentEditorProps {
  sectionTitle: string;
  sectionData: any;
  onSave: (updatedData: any) => Promise<void>;
}

export const StructuredContentEditor: React.FC<StructuredContentEditorProps> = ({
  sectionTitle,
  sectionData,
  onSave
}) => {
  const [data, setData] = useState(sectionData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleFieldChange = (path: string[], value: string) => {
    const newData = { ...data };
    let current: any = newData;
    
    // Navigate to the nested field
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    // Update the value
    current[path[path.length - 1]] = value;
    setData(newData);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    
    try {
      await onSave(data);
      setMessage('✅ Saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('❌ Error saving content');
    } finally {
      setSaving(false);
    }
  };

  // Render different input types based on data structure
  const renderField = (key: string, value: any, path: string[] = []) => {
    const fullPath = [...path, key];

    if (typeof value === 'string') {
      // String field - textarea for long text, input for short
      const isLongText = value.length > 100;
      
      return (
        <div key={fullPath.join('.')} className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-2 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          {isLongText ? (
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(fullPath, e.target.value)}
              className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:outline-none transition min-h-32"
              rows={4}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => handleFieldChange(fullPath, e.target.value)}
              className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:outline-none transition"
            />
          )}
        </div>
      );
    }

    if (typeof value === 'object' && value !== null) {
      // Nested object - render as group
      return (
        <div key={fullPath.join('.')} className="mb-6 p-4 bg-slate-50 rounded-lg">
          <h4 className="font-bold text-slate-900 mb-4 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </h4>
          {Object.keys(value).map(subKey => renderField(subKey, value[subKey], fullPath))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-900 text-xl">Edit: {sectionTitle}</h3>
          <p className="text-sm text-slate-600 mt-1">
            Edit the content below. Styles and UI layout will remain the same.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition disabled:opacity-50 font-semibold"
        >
          <Save className="w-5 h-5" />
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {message && (
        <div className={`mb-6 border-2 rounded-lg p-4 ${
          message.startsWith('✅') 
            ? 'bg-green-50 border-green-200 text-green-700' 
            : 'bg-red-50 border-red-200 text-red-700'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <strong>Note:</strong> You're editing the content data only. The visual design, 
            colors, and layout will stay exactly the same. This ensures consistent styling 
            across the site.
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {data && Object.keys(data).map(key => renderField(key, data[key]))}
      </div>
    </div>
  );
};