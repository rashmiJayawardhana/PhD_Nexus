// src/components/contact/ContactInfo.tsx
import { Mail, Phone, Linkedin, BookOpen, GraduationCap, ContactRound } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: ContactRound,
      title: 'Contact',
      details: ['Senarath N.S.A.S.N.', 'RN, RPh, BSc. Nursing (Hons) (UOR), PgDSS (USJ), PgDPPE (OUSL), PhD (Reading) (USJ)'],
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['samanthi.nsas@gmail.com', 'samanthisenarath38@gmail.com'],
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+94 76 664 1841'],
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Intro Card */}
      <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="leading-relaxed">
          Have questions about our educational materials or need support? We're here to help healthcare professionals like you.
        </p>
      </div>

      {/* Contact Details */}
      {contactDetails.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-start gap-4">
              <div className={`${item.color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-slate-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Social Links */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-4">Connect Online</h4>
        <div className="flex gap-4">
          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=QPO53fkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 text-white rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
            title="Google Scholar"
          >
            <GraduationCap className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samanthi-senarath/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-100 text-white rounded-lg flex items-center justify-center hover:bg-blue-300 transition"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* ResearchGate */}
          <a
            href="https://www.researchgate.net/profile/Senarath-Nsasn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-emerald-100 text-white rounded-lg flex items-center justify-center hover:bg-emerald-300 transition"
            title="ResearchGate"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
