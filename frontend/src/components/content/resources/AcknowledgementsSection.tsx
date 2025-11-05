// FILE: src/components/content/resources/AcknowledgementsSection.tsx
// Acknowledgements section with institutions and expert panel
// ============================================

import { Heart, Building2, GraduationCap, Users } from 'lucide-react';
import { ContentCard } from '../ContentCard';
import { InstitutionCard } from '../InstitutionCard';
import { ExpertCard } from '../ExpertCard';

export const AcknowledgementsSection: React.FC = () => {
  const institutions = [
    { name: 'Medical Research Institute (MRI), Sri Lanka', icon: <Building2 className="w-5 h-5 text-blue-600" />, color: 'bg-blue-50 border-blue-200' },
    { name: 'University of Sri Jayewardenepura, Sri Lanka', icon: <GraduationCap className="w-5 h-5 text-purple-600" />, color: 'bg-purple-50 border-purple-200' },
    { name: 'National Cancer Institute (NCI); Apeksha Hospital, Maharagama, Sri Lanka', icon: <Building2 className="w-5 h-5 text-pink-600" />, color: 'bg-pink-50 border-pink-200' }
  ];

  const expertPanel = [
    {
      name: 'Prof. M.K.D.L. Meegoda',
      title: 'Senior Lecturer',
      affiliation: 'Department of Nursing and Midwifery, Faculty of Allied Health Science, University of Sri Jayewardenepura',
      color: 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200'
    },
    {
      name: 'Prof. S.S. Jayasinghe',
      title: 'Professor in Pharmacology',
      affiliation: 'Faculty of Medicine, University of Ruhuna, Post-doctoral researcher in South Asian Clinical Toxicology Research Collaboration, University of Peradeniya',
      color: 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
    },
    {
      name: 'Prof. S.S.P. Warnakulasuriya',
      title: 'Professor in Nursing, Dean',
      affiliation: 'Faculty of Nursing, University of Colombo',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
    },
    {
      name: 'Dr. Darshana De Silva',
      title: 'Consultant Clinical Pharmacologist',
      affiliation: 'Department of Pharmacology, Medical Research Institute, Sri Lanka',
      color: 'bg-gradient-to-br from-pink-50 to-red-50 border-pink-200'
    },
    {
      name: 'Dr. Wasantha Ranthnayaka',
      title: 'Consultant Clinical Oncologist',
      affiliation: 'Apeksha Hospital, Maharagama',
      color: 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
    }
  ];

  return (
    <>
      <ContentCard 
        title="Acknowledgements" 
        icon={<Heart className="w-6 h-6 text-pink-600" />}
        variant="highlight"
      >
        <div className="flex items-center gap-2 mb-6 p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
          <Heart className="w-5 h-5 text-pink-600 flex-shrink-0" />
          <p className="text-slate-700 text-sm leading-relaxed">
            This e-module was made possible through the valuable contributions and support of the following 
            institutions and experts. We extend our sincere gratitude to all who contributed to the development 
            of this educational resource.
          </p>
        </div>
      </ContentCard>

      {/* Supporting Institutions */}
      <ContentCard 
        title="Supporting Institutions" 
        icon={<Building2 className="w-6 h-6 text-blue-600" />}
      >
        <p className="text-slate-700 mb-4 text-sm">
          We gratefully acknowledge the support and collaboration of these esteemed institutions:
        </p>
        <div className="grid gap-3">
          {institutions.map((institution, idx) => (
            <InstitutionCard key={idx} {...institution} />
          ))}
        </div>
      </ContentCard>

      {/* Expert Panel */}
      <ContentCard 
        title="Expert Panel" 
        icon={<Users className="w-6 h-6 text-purple-600" />}
        variant="info"
      >
        <p className="text-slate-700 mb-6 text-sm">
          We are deeply grateful to our distinguished expert panel members who provided invaluable guidance, 
          expertise, and review throughout the development of this e-module:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {expertPanel.map((expert, idx) => (
            <ExpertCard key={idx} {...expert} />
          ))}
        </div>
      </ContentCard>

      {/* About This E-Module */}
      <ContentCard 
        title="About This E-Module" 
        icon={<span className="text-2xl">📖</span>}
        variant="highlight"
      >
        <div className="space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border-2 border-teal-200">
            <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span>
              Purpose & Development
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              This booklet was developed as an e-module to use as supportive education material for a tailored 
              educational intervention designed for oncology nurses in Sri Lanka. The educational intervention 
              adopted a blended learning method and consisted of physical place-based teaching methods and online 
              educational opportunities (e-module, website).
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Each component of the education intervention provides the best practices and recommendations for 
              handling chemotherapy (and other hazardous drugs).
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border-2 border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-xl">🌍</span>
              Contributing to Sustainable Development Goals
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              This educational intervention promotes well-being and healthy lives, ensuring occupational and 
              environmental health safety by expanding knowledge and practising the following safety precautions 
              in handling chemotherapy (HDs), thereby reducing unnecessary occupational exposure and related 
              adverse effects among nurses. Thus, it is reaching the third of the United Nations Sustainable 
              Development Goals (SDGs).
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border-2 border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <span className="text-xl">👨‍🔬</span>
              Content Development
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              <strong>Senarath N.S.A.S.N.</strong> (RN, RPh, BSc. Nursing [Hons] [UOR], PgDSS [USJ], 
              PgDPPE [OUSL], PhD [Reading] [USJ]) developed the content for the e-module and website following 
              the scientific literature as a part of the postgraduate research work. Also, an expert panel 
              reviewed it before publishing.
            </p>
            <div className="bg-teal-50 rounded-lg p-4 border-2 border-teal-200 mt-4">
              <p className="text-slate-700 text-sm font-medium">
                📚 Oncology nurses and interested participants are encouraged to refer to the content to enhance 
                their knowledge of safe handling of chemotherapy.
              </p>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
  );
};