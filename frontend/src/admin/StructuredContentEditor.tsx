// FILE: src/admin/StructuredContentEditor.tsx
// User-friendly editor showing what can be edited vs hardcoded
// ==============================================================

import React, { useState, useEffect } from 'react';
import { Save, Eye, Edit3, Lock, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';

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
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState('');

  // Reset data when sectionData changes
  useEffect(() => {
    setData(sectionData);
    setMessage('');
  }, [sectionData, sectionTitle]);

  const handleFieldChange = (path: string[], value: string) => {
    const newData = JSON.parse(JSON.stringify(data));
    let current: any = newData;
    
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    current[path[path.length - 1]] = value;
    setData(newData);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    
    try {
      await onSave(data);
      setMessage('success');
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      setMessage('error');
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  // Check if value is a table structure
  const isTableStructure = (value: any): boolean => {
    return (
      typeof value === 'object' &&
      value !== null &&
      'headers' in value &&
      'rows' in value &&
      typeof value.headers === 'object' &&
      typeof value.rows === 'object'
    );
  };

  // Check if value is stats structure (nested objects with number/label/color)
  const isStatsStructure = (value: any): boolean => {
    if (typeof value !== 'object' || value === null) return false;
    
    const values = Object.values(value);
    if (values.length === 0) return false;
    
    return values.every(stat => 
      typeof stat === 'object' && 
      stat !== null &&
      'number' in stat && 
      'label' in stat
    );
  };

  // Check if value is array of objects with name/description
  const isTypesArray = (value: any): boolean => {
    return (
      Array.isArray(value) &&
      value.length > 0 &&
      value.every(item => 
        typeof item === 'object' &&
        'name' in item &&
        'description' in item
      )
    );
  };

  const isEditableType = (value: any): boolean => {
    return typeof value === 'string' || typeof value === 'number';
  };

  // SORT HELPER: Natural sort for row0, row1, row2... and col0, col1, col2...
  const sortKeys = (keys: string[]): string[] => {
    return keys.sort((a, b) => {
      const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
      const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
      return aNum - bNum;
    });
  };

  // Render table editor with SORTED rows
  const renderTableEditor = (key: string, tableData: any, path: string[] = []) => {
    const fullPath = [...path, key];
    const headers = tableData.headers || {};
    const rows = tableData.rows || {};

    // SORT row keys: row0, row1, row2, row3...
    const sortedRowKeys = sortKeys(Object.keys(rows));
    const sortedHeaderKeys = sortKeys(Object.keys(headers));

    return (
      <div key={fullPath.join('.')} className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-blue-900 capitalize flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-blue-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()} (Table)
          </h4>
          <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Editable Table</span>
        </div>

        {/* Headers Editor */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-blue-900 mb-2">Table Headers</label>
          <div className="grid gap-2">
            {sortedHeaderKeys.map((headerKey) => (
              <input
                key={headerKey}
                type="text"
                value={headers[headerKey] as string}
                onChange={(e) => {
                  const newData = JSON.parse(JSON.stringify(data));
                  let current: any = newData;
                  for (const p of fullPath) current = current[p];
                  current.headers[headerKey] = e.target.value;
                  setData(newData);
                }}
                className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition text-sm bg-white"
                placeholder={`Header ${headerKey}`}
              />
            ))}
          </div>
        </div>

        {/* Rows Editor - SORTED */}
        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">Table Rows (Ordered)</label>
          <div className="space-y-3">
            {sortedRowKeys.map((rowKey) => {
              const rowData = rows[rowKey];
              const sortedColKeys = sortKeys(Object.keys(rowData));
              
              return (
                <div key={rowKey} className="bg-white rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-800">Row {rowKey}</span>
                  </div>
                  <div className="grid gap-2">
                    {sortedColKeys.map((colKey) => (
                      <div key={colKey}>
                        <label className="text-xs text-slate-600 mb-1 block">
                          Column {colKey}
                        </label>
                        <textarea
                          value={rowData[colKey] as string}
                          onChange={(e) => {
                            const newData = JSON.parse(JSON.stringify(data));
                            let current: any = newData;
                            for (const p of fullPath) current = current[p];
                            current.rows[rowKey][colKey] = e.target.value;
                            setData(newData);
                          }}
                          className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition text-sm"
                          rows={3}
                          placeholder={`Cell ${rowKey}-${colKey}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-blue-700 mt-3 italic">
          ✏️ You can edit all table headers and cell content. Rows shown in correct order (row0, row1, row2...).
        </p>
      </div>
    );
  };

  // Render stats editor (lung, breast, colorectal)
  const renderStatsEditor = (key: string, statsData: any, path: string[] = []) => {
    const fullPath = [...path, key];

    return (
      <div key={fullPath.join('.')} className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-purple-900 capitalize flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-purple-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()} (Statistics)
          </h4>
          <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Editable Stats</span>
        </div>

        <div className="space-y-4">
          {Object.entries(statsData).map(([statKey, statValue]: [string, any]) => (
            <div key={statKey} className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h5 className="font-bold text-purple-900 mb-3 capitalize">{statKey}</h5>
              <div className="grid gap-3">
                <div>
                  <label className="text-xs text-slate-600 mb-1 block">Number</label>
                  <input
                    type="text"
                    value={statValue.number}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(data));
                      let current: any = newData;
                      for (const p of fullPath) current = current[p];
                      current[statKey].number = e.target.value;
                      setData(newData);
                    }}
                    className="w-full p-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 mb-1 block">Label</label>
                  <input
                    type="text"
                    value={statValue.label}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(data));
                      let current: any = newData;
                      for (const p of fullPath) current = current[p];
                      current[statKey].label = e.target.value;
                      setData(newData);
                    }}
                    className="w-full p-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                  />
                </div>
                {statValue.color && (
                  <div>
                    <label className="text-xs text-slate-600 mb-1 block">Color (CSS class)</label>
                    <input
                      type="text"
                      value={statValue.color}
                      onChange={(e) => {
                        const newData = JSON.parse(JSON.stringify(data));
                        let current: any = newData;
                        for (const p of fullPath) current = current[p];
                        current[statKey].color = e.target.value;
                        setData(newData);
                      }}
                      className="w-full p-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                      placeholder="e.g., bg-red-100"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-purple-700 mt-3 italic">
          ✏️ Edit statistics numbers and labels. Color is a Tailwind CSS class.
        </p>
      </div>
    );
  };

  // Render types array editor
  const renderTypesArrayEditor = (key: string, typesData: any[], path: string[] = []) => {
    const fullPath = [...path, key];

    return (
      <div key={fullPath.join('.')} className="mb-6 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border-2 border-teal-300">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-teal-900 capitalize flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-teal-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()} (List)
          </h4>
          <span className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">Editable List</span>
        </div>

        <div className="space-y-4">
          {typesData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border-2 border-teal-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-teal-800">Item {index + 1}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-600 mb-1 block font-semibold">Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(data));
                      let current: any = newData;
                      for (const p of fullPath) current = current[p];
                      current[index].name = e.target.value;
                      setData(newData);
                    }}
                    className="w-full p-2 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 mb-1 block font-semibold">Description</label>
                  <textarea
                    value={item.description}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(data));
                      let current: any = newData;
                      for (const p of fullPath) current = current[p];
                      current[index].description = e.target.value;
                      setData(newData);
                    }}
                    className="w-full p-2 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:outline-none transition text-sm"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-teal-700 mt-3 italic">
          ✏️ Edit names and descriptions. Items appear in this exact order.
        </p>
      </div>
    );
  };

  // Main render field function
  const renderField = (key: string, value: any, path: string[] = [], level: number = 0) => {
    const fullPath = [...path, key];

    // Check for table structure
    if (isTableStructure(value)) {
      return renderTableEditor(key, value, path);
    }

    // Check for stats structure
    if (isStatsStructure(value)) {
      return renderStatsEditor(key, value, path);
    }

    // Check for types array
    if (isTypesArray(value)) {
      return renderTypesArrayEditor(key, value, path);
    }

    // String arrays (e.g., properties, keyPoints, description)
    if (Array.isArray(value) && value.every(v => typeof v === 'string')) {
      return (
        <div key={fullPath.join('.')} className="mb-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
          <h4 className="font-bold text-orange-900 mb-4 capitalize flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-orange-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()} (List)
          </h4>
          <div className="space-y-3">
            {value.map((item, index) => (
              <div key={index}>
                <label className="text-xs text-slate-600 mb-1 block">Item {index + 1}</label>
                <textarea
                  value={item}
                  onChange={(e) => {
                    const newData = JSON.parse(JSON.stringify(data));
                    let current: any = newData;
                    for (const p of fullPath) current = current[p];
                    current[index] = e.target.value;
                    setData(newData);
                  }}
                  className="w-full p-3 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-sm"
                  rows={3}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Editable primitives
    const isEditable = isEditableType(value);

    // Complex nested structures
    if (!isEditable && typeof value === 'object' && value !== null) {
      const allStrings = Object.values(value).every(v => typeof v === 'string');
      
      if (!allStrings && !isTableStructure(value) && !isStatsStructure(value)) {
        return (
          <div key={fullPath.join('.')} className="mb-4 p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
            <div className="flex items-start gap-2 mb-2">
              <Lock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <label className="block text-sm font-semibold text-slate-700 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <p className="text-xs text-slate-500 mt-1">
                  🔒 Complex data - cannot edit here.
                </p>
              </div>
            </div>
          </div>
        );
      }

      // Simple nested object
      return (
        <div key={fullPath.join('.')} className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h4 className="font-bold text-blue-900 mb-4 capitalize flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-blue-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </h4>
          {Object.keys(value).map(subKey => renderField(subKey, value[subKey], fullPath, level + 1))}
        </div>
      );
    }

    // String field
    if (typeof value === 'string') {
      const isLongText = value.length > 100;
      
      return (
        <div key={fullPath.join('.')} className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-2 capitalize flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-green-600" />
            {key.replace(/([A-Z])/g, ' $1').trim()}
            <span className="text-xs font-normal text-slate-500">• Editable</span>
          </label>
          {isLongText ? (
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(fullPath, e.target.value)}
              className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition min-h-32 font-mono text-sm"
              rows={Math.min(Math.ceil(value.length / 80), 12)}
              placeholder="Enter content here..."
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => handleFieldChange(fullPath, e.target.value)}
              className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              placeholder="Enter content here..."
            />
          )}
          <p className="text-xs text-slate-500 mt-1">
            {value.length} characters
          </p>
        </div>
      );
    }

    return null;
  };

  // Count fields
  const countFields = (obj: any): { editable: number; locked: number; tables: number; arrays: number; stats: number } => {
    let editable = 0;
    let locked = 0;
    let tables = 0;
    let arrays = 0;
    let stats = 0;

    Object.values(obj).forEach(value => {
      if (isTableStructure(value)) {
        tables++;
      } else if (isStatsStructure(value)) {
        stats++;
      } else if (Array.isArray(value)) {
        arrays++;
      } else if (isEditableType(value)) {
        editable++;
      } else if (typeof value === 'object' && value !== null) {
        const allStrings = Object.values(value).every(v => typeof v === 'string');
        if (allStrings) {
          editable += Object.keys(value).length;
        } else {
          locked++;
        }
      }
    });

    return { editable, locked, tables, arrays, stats };
  };

  const fieldCounts = countFields(data);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-2xl mb-2">✏️ Edit: {sectionTitle}</h3>
            <p className="text-sm opacity-90">
              Green=text, Blue=tables, Purple=stats, Teal=lists, Orange=arrays
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition backdrop-blur-sm"
            >
              <Eye className="w-4 h-4" />
              {preview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2 bg-white hover:bg-slate-100 text-teal-700 rounded-lg transition disabled:opacity-50 font-semibold"
            >
              <Save className="w-5 h-5" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mt-4 text-sm flex-wrap">
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 backdrop-blur-sm">
            <Edit3 className="w-4 h-4" />
            <span>{fieldCounts.editable} Text</span>
          </div>
          {fieldCounts.tables > 0 && (
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
              <Edit3 className="w-4 h-4" />
              <span>{fieldCounts.tables} Tables</span>
            </div>
          )}
          {fieldCounts.stats > 0 && (
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
              <Edit3 className="w-4 h-4" />
              <span>{fieldCounts.stats} Stats</span>
            </div>
          )}
          {fieldCounts.arrays > 0 && (
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
              <Edit3 className="w-4 h-4" />
              <span>{fieldCounts.arrays} Lists</span>
            </div>
          )}
          {fieldCounts.locked > 0 && (
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
              <Lock className="w-4 h-4" />
              <span>{fieldCounts.locked} Locked</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Messages */}
        {message === 'success' && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-700 font-semibold">✅ Saved successfully!</p>
              <p className="text-sm text-green-600">Changes are live for all users.</p>
            </div>
          </div>
        )}

        {message === 'error' && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700 font-semibold">❌ Error saving</p>
              <p className="text-sm text-red-600">Check console for details.</p>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <strong>Editable:</strong> Text, tables, stats, lists (types/properties)
              <br/>
              <strong>Locked:</strong> Images, complex styles, hardcoded data
            </div>
          </div>
        </div>

        {/* Editor */}
        {preview ? (
          <div className="prose max-w-none p-6 bg-slate-50 border-2 border-slate-200 rounded-lg">
            <h4 className="text-lg font-bold mb-4">Preview</h4>
            {Object.keys(data).map(key => (
              <div key={key} className="mb-4">
                <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong>
                <div className="mt-2 text-slate-700 whitespace-pre-wrap">
                  {typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key], null, 2)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {data && Object.keys(data).map(key => renderField(key, data[key]))}
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition disabled:opacity-50 font-semibold text-lg shadow-lg"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};