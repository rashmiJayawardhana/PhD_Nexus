// src/components/more/ResourceCard.tsx - SIMPLER VERSION
import { ExternalLink, Eye, Play, FileText, Presentation } from 'lucide-react';
import type { ResourceDocument, SupportiveMaterial } from '@/types/resources';

interface ResourceCardProps {
  resource: ResourceDocument | SupportiveMaterial;
  variant?: 'document' | 'material';
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, variant = 'document' }) => {
  const isDocument = variant === 'document';
  const doc = isDocument ? (resource as ResourceDocument) : null;
  const material = !isDocument ? (resource as SupportiveMaterial) : null;

  const handleOpen = (url?: string) => {
    const targetUrl = url || doc?.driveUrl || material?.viewUrl;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const gradientClass = doc?.color || 'from-slate-500 to-slate-600';
  const isVideo = material?.isVideo || false;
  const hasMultipleFormats = material?.alternateFormats && material.alternateFormats.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200">
      {/* Header with gradient */}
      <div className={`bg-linear-to-r ${gradientClass} p-6 text-white`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{doc?.icon || material?.icon}</span>
            <div>
              <h3 className="font-bold text-lg leading-tight">{resource.title}</h3>
              {doc && (
                <p className="text-white/90 text-sm mt-1">{doc.organization}</p>
              )}
              {material?.duration && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white/80 text-xs">⏱️ {material.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {resource.description}
        </p>

        {/* Single Format */}
        {!hasMultipleFormats && (
          <>
            <button
              onClick={() => handleOpen()}
              className="w-full bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              {isVideo ? (
                <>
                  <Play className="w-5 h-5" />
                  Watch Video
                </>
              ) : doc ? (
                <>
                  <ExternalLink className="w-5 h-5" />
                  Open in Google Drive
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5" />
                  View in Google Drive
                </>
              )}
            </button>

            {!isVideo && (
              <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-blue-800 leading-relaxed">
                  💡 <strong>Tip:</strong> Click the download button (⬇️) in Google Drive to save the file.
                </p>
              </div>
            )}
          </>
        )}

        {/* Multiple Formats */}
        {hasMultipleFormats && (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-700 mb-2">
              📑 Available formats:
            </p>

            <div className="grid grid-cols-2 gap-3">
              {material?.alternateFormats?.map((format, index) => {
                const isPDF = format.format === 'pdf';
                
                return (
                  <button
                    key={index}
                    onClick={() => handleOpen(format.url)}
                    className={`${
                      isPDF 
                        ? 'bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                        : 'bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                    } text-white px-4 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg flex flex-col items-center gap-1`}
                  >
                    {isPDF ? (
                      <FileText className="w-6 h-6" />
                    ) : (
                      <Presentation className="w-6 h-6" />
                    )}
                    <span className="text-sm font-bold">{format.label}</span>
                    <span className="text-xs text-white/80">{format.description}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-blue-800 leading-relaxed">
                💡 Choose <strong>PDF</strong> for viewing/printing or <strong>PowerPoint</strong> for editing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};