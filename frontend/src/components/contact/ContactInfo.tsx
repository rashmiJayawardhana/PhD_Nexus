// src/components/contact/ContactInfo.tsx
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@chemosafe.com', 'support@chemosafe.com'],
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+94 11 234 5678', '+94 77 234 5678'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Apeksha Hospital, Maharagama', 'Sri Lanka'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Weekends: Closed'],
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="leading-relaxed">
          Have questions about our educational materials or need support? We're here to help healthcare professionals like you.
        </p>
      </div>

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

      {/* Social Media */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
            f
          </a>
          <a href="#" className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition">
            t
          </a>
          <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition">
            in
          </a>
        </div>
      </div>
    </div>
  );
};
