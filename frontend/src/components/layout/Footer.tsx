// components/layout/Footer.tsx
const Footer = () => {
  const currentDate = new Date('2025-10-20').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long' 
  }); // Hardcode for Oct 2025

  return (
    <footer className="bg-slate-900 text-white py-12 px-6"> {/* Original bg */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 mb-4">
          Portfolio inspired by continuous learning and innovation
        </p>
        <p className="text-slate-500 text-sm">
          Last updated: {currentDate} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;