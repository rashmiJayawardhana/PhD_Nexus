// src/components/contact/ContactPage.tsx
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => (
  <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
    {/* Back Button */}
    <button
      onClick={onBack}
      className="fixed top-6 left-6 z-50 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full text-gray-900 hover:bg-white/20 transition flex items-center gap-2"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to Home
    </button>

    {/* Header */}
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">We're Here to Help</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Contact <span className="text-teal-600">Chemosafe</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Have questions about our educational resources? Need technical support? 
          We're committed to supporting oncology nurses and healthcare professionals.
        </p>
      </div>
    </section>

    {/* Contact Form & Info */}
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Form - Takes 2 columns */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Contact Info - Takes 1 column */}
        <div className="md:col-span-1">
          <ContactInfo />
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">How quickly will I receive a response?</h3>
            <p className="text-slate-600">We aim to respond to all inquiries within 24-48 hours during business days.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Who can access the educational materials?</h3>
            <p className="text-slate-600">Our materials are designed for oncology nurses and healthcare professionals working with chemotherapy.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Is there a cost to access the content?</h3>
            <p className="text-slate-600">All educational resources are freely available to support healthcare professionals.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Can I suggest topics for future content?</h3>
            <p className="text-slate-600">Absolutely! We welcome feedback and suggestions. Use the contact form above to share your ideas.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);