// FILE: src/components/content/SummarySection.tsx
// Main reusable summary component
// ============================================

import { CheckCircle2, Sparkles } from 'lucide-react';
import type { SummaryData, SummaryImage } from '@/types/content';

interface SummarySectionProps {
  data: SummaryData;
}

// Helper function to get image size styles
const getImageSizeStyles = (image: SummaryImage, isSingleImage: boolean) => {
  // Size presets
  const sizePresets = {
    small: { maxHeight: '200px', maxWidth: '300px' },
    medium: { maxHeight: '300px', maxWidth: '500px' },
    large: { maxHeight: '400px', maxWidth: '700px' },
    full: { maxHeight: '500px', maxWidth: '100%' },
    auto: { maxHeight: 'none', maxWidth: '100%' }
  };

  // Get preset or use custom values
  const preset = image.size ? sizePresets[image.size] : null;
  
  const maxHeight = image.maxHeight || preset?.maxHeight || (isSingleImage ? '400px' : '300px');
  const maxWidth = image.maxWidth || preset?.maxWidth || '100%';
  const objectFit = image.objectFit || 'contain';

  return { maxHeight, maxWidth, objectFit };
};

export const SummarySection: React.FC<SummarySectionProps> = ({ data }) => {
  const {
    title = 'Summary',
    description,
    images,
    keyPoints,
    variant = 'default',
    imageLayout = 'grid'
  } = data;

  const variantStyles = {
    default: {
      container: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
      border: 'border-indigo-200',
      titleBg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    gradient: {
      container: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
      border: 'border-teal-200',
      titleBg: 'bg-gradient-to-r from-teal-600 to-cyan-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    bordered: {
      container: 'bg-white',
      border: 'border-slate-300 border-2',
      titleBg: 'bg-gradient-to-r from-slate-700 to-slate-900',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700'
    }
  };

  const styles = variantStyles[variant];

  // Layout styles for images
  const layoutStyles = {
    grid: images && images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2',
    stack: 'grid-cols-1',
    flex: 'flex flex-wrap justify-center'
  };

  // Convert description to array if it's a string
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className={`${styles.container} ${styles.border} border rounded-2xl shadow-2xl overflow-hidden mb-6`}>
      {/* Header with decorative elements */}
      <div className={`${styles.titleBg} px-8 py-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
        
        <div className="relative flex items-center gap-4">
          <div className={`${styles.iconBg} p-3 rounded-xl shadow-lg`}>
            <Sparkles className={`w-8 h-8 ${styles.iconColor}`} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
            <p className="text-white/80 text-sm">Key takeaways and insights</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        {/* Description Paragraphs */}
        <div className="space-y-4 mb-6">
          {descriptionArray.map((paragraph, idx) => (
            <p 
              key={idx} 
              className="text-slate-700 leading-relaxed text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Points Section (if provided) */}
        {keyPoints && keyPoints.length > 0 && (
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6 border-2 border-white shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1 text-lg">•</span>
                  <span className="text-slate-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Images Section with Flexible Sizing */}
        {images && images.length > 0 && (
          <div className={`grid ${layoutStyles[imageLayout]} gap-6 mt-6`}>
            {images.map((image, idx) => {
              const imageStyles = getImageSizeStyles(image, images.length === 1);
              
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-4 shadow-lg border-2 border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
                >
                  <div className="w-full flex justify-center items-center overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg shadow-md"
                      style={{
                        maxHeight: imageStyles.maxHeight,
                        maxWidth: imageStyles.maxWidth,
                        width: 'auto',
                        height: 'auto',
                        objectFit: imageStyles.objectFit
                      }}
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-slate-600 mt-3 text-center italic">
                      {image.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Decorative Footer Wave */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </div>
  );
};
