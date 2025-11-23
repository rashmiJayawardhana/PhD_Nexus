// src/components/more/SupportiveMaterialsSection.tsx
import { Video, FileText, Play, Eye } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import { supportiveMaterials } from '@/data/resourcesData';

export const SupportiveMaterialsSection: React.FC = () => {
  const videos = supportiveMaterials.filter(m => m.isVideo);
  const documents = supportiveMaterials.filter(m => !m.isVideo);

  return (
    <section className="py-12 px-6 bg-linear-to-br from-purple-50 to-pink-50" id="materials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Learning Resources</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Other Supportive Materials
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enhance your learning with presentations, video demonstrations, and supplementary documents 
            designed to reinforce key concepts in chemotherapy safety.
          </p>
        </div>

        {/* Video Materials */}
        {videos.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Video Demonstrations</h3>
                <p className="text-sm text-slate-600">Click to watch online - no download required</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <ResourceCard 
                  key={video.id} 
                  resource={video} 
                  variant="material"
                />
              ))}
            </div>
          </div>
        )}

        {/* Document Materials */}
        {documents.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Documents & Presentations</h3>
                <p className="text-sm text-slate-600">View online or download for offline study</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <ResourceCard 
                  key={doc.id} 
                  resource={doc} 
                  variant="material"
                />
              ))}
            </div>
          </div>
        )}

        {/* Student-Friendly Usage Guide */}
        <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
          <h4 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-2">
            💡 How to Use These Materials
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg shrink-0">
                  <Play className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-purple-900 mb-1">Videos</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Click "Watch Video" to play directly in your browser. 
                    You can pause and rewind to review specific steps as needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-blue-900 mb-1">Presentations & Documents</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Click to view in Google Drive. You can read online or use the download button (⬇️) 
                    at the top of the page to save for offline access.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 border-2 border-teal-200">
              <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                📱 Study Tips
              </h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Watch videos multiple times to master techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Download materials for offline study or printing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Use presentations for group discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Refer to glossary when encountering unfamiliar terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Support Note */}
        <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
          <p className="text-sm text-slate-700 text-center">
            📧 <strong>Having trouble accessing materials?</strong> Contact us through the Contact page, 
            and we'll help you get access to the resources you need.
          </p>
        </div>
      </div>
    </section>
  );
};