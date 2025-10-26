// src/components/layout/Footer.tsx
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onAboutClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick }) => (
  <footer id="contact" className="bg-amber-100 py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {/* Logo & Contact */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
            ✓
          </div>
          <h3 className="font-bold text-slate-900">Chemosafe</h3>
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          <p><strong>Contact</strong></p>
          <p>General Inquiries: info@chemosafe.com</p>
          <p>Support: support@chemosafe.com</p>
        </div>
      </div>

      {/* About Us */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">About Us</h3>
        <p className="text-sm text-slate-700 mb-2">Educational Resources</p>
        <p className="text-sm text-slate-600 italic">Empower. Educate. Enhance.</p>
        <button 
          onClick={onAboutClick}
          className="mt-4 text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Follow</h3>
        <p className="text-sm text-slate-700 mb-4">
          Stay updated with the latest educational content and resources for oncology nursing care.
        </p>
        <input
          type="email"
          placeholder="Email *"
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    </div>
  </footer>
);