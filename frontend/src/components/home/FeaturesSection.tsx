// src/components/home/FeaturesSection.tsx
import type { Feature } from '../../types';
// src/data/features.ts - This section's Data file

interface FeaturesSectionProps {
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => (
  <section id="content" className="py-20 px-6 bg-gradient-to-r from-teal-100/30 via-purple-100/30 to-pink-100/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Essential Educational Content</h2>
        <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
          This website is a supportive educational material for a tailored educational intervention designed for oncology nurses in Sri Lanka.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
            <div className="h-48 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);