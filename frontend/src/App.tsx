// src/App.tsx - MAIN APPLICATION FILE
import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { FeaturesSection } from './components/home/FeaturesSection';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { features } from './data/features';
import { ContentPage } from './components/content/ContentPage';
import home from './assets/home.png';

type Page = 'home' | 'about' | 'content' | 'contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Render About Page
  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} />;
  }

  // Render Contact Page
  if (currentPage === 'contact') {
    return <ContactPage onBack={() => setCurrentPage('home')} />;
  }

  // Render Contact Page
  if (currentPage === 'content') {
    return <ContentPage onBack={() => setCurrentPage('home')} />;
  }

  // Render Home Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <Header 
        onAboutClick={() => setCurrentPage('about')}
        onContentClick={() => setCurrentPage('content')}
        onContactClick={() => setCurrentPage('contact')}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <HeroSection />
      
      <FeaturesSection features={features} />
      
      {/* Supporting Healthcare Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Supporting Healthcare Professionals
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            This website is committed to supporting the healthcare community, particularly oncology nurses, in their efforts to provide safe and effective care to cancer patients. Here, you will find evidence-based guidelines, practical tips, and educational resources to maintain occupational and environmental health safety. Whether you're new to chemotherapy handling or looking to update your knowledge, we invite you to explore and learn with us.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-100 via-purple-100 to-blue-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Enhance your knowledge and practice of safe chemotherapy handling<br />
            with the educational resources and tools provided on this website.
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src={home}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-slate-900 px-8 py-4 rounded-lg font-semibold transition shadow-xl hover:shadow-2xl">
            Get Started
          </button>
        </div>
      </section>

      <Footer onAboutClick={() => setCurrentPage('about')} />

      {/* Chat Button */}
      <button 
        onClick={() => setCurrentPage('contact')}
        className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-slate-900 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition z-50"
      >
        💬
      </button>
    </div>
  );
};

export default App;