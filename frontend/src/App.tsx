import { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ArrowLeft, Target, Users, BookOpen, Shield, Award, Lightbulb } from 'lucide-react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const features = [
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=500&fit=crop",
      title: "Risk Reduction Strategies",
      description: "Safety precautions play a key role in reducing exposure and related risk. Guidelines safety precautions are well-established. However, insufficent knowledge, facilities and PPE, and poor adherence to safety precautions are widely reported and found as key contributing factors that lead to occupational exposure and related adverse effects."
    },
    {
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=500&fit=crop",
      title: "Tailored Intervention",
      description: "This website were developped as a part of tailored educational intervention which aimed to design, implement, and test the effectiveness of the tailored educational intervention to minimize the associated factors of occupational exposure to SACT among nurses and to provide online educational materials for nurses and healthcare professionals in this field."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop",
      title: "Interactive Learning Tools",
      description: "The website consisted of the designed e-module based on the standard guidlines on safely precations and requirments of the local setting. It act as interactive learning tool to engage and oncology nurses effectively, ensuring better retention and application of safe handling practices."
    },
    {
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=500&fit=crop",
      title: "Professional Development Support",
      description: "The website provides resources to support the professional development of oncology nurses, enabling them to stay updated with the latest advancements and guidelines in chemotherapy handling."
    }
  ];

  // About Page Component
  const AboutPageContent = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-purple-900">
      {/* Back Button */}
      <button
        onClick={() => setShowAbout(false)}
        className="fixed top-6 left-6 z-50 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
              Chemosafe
            </h1>
            <p className="text-2xl md:text-3xl text-amber-400 font-light">
              Empowering Oncology Nurses for Safer Practice
            </p>
          </div>
          
          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-teal-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-teal-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-teal-500 p-3 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed">
              Chemosafe is a website developed as part of a tailored educational program designed for oncology nurses in Sri Lanka. This program uses a <span className="text-teal-400 font-semibold">blended learning approach</span>, combining in-person teaching with online learning opportunities. The website hosts interactive e-modules and resources that share best practices for safely handling chemotherapy and other hazardous drugs.
            </p>
          </div>

          {/* UN SDG Support */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Global Impact</h2>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed mb-4">
              Supporting the <span className="text-blue-400 font-semibold">United Nations Sustainable Development Goal 3 (Good Health and Well-being)</span>, Chemosafe promotes both occupational safety and environmental health.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              By improving nurses' knowledge and skills, the program helps <span className="text-purple-400 font-semibold">reduce exposure risks</span> related to chemotherapy handling, protects nurses' health, and enhances the quality of oncology care.
            </p>
          </div>

          {/* Research Background */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-500 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Research Foundation</h2>
            </div>
            <div className="space-y-4 text-lg text-slate-200 leading-relaxed">
              <p>
                This educational initiative was developed by <span className="text-purple-400 font-semibold">Senarath N.S.A.S.N</span> (RN, RPh, BSc Nursing [Hons] [UOR], PgDSS [USJ], PgDPPE [OUSL], PhD [Reading] [USJ]) as part of postgraduate research titled:
              </p>
              <div className="bg-slate-800/50 rounded-xl p-6 border-l-4 border-purple-500">
                <p className="italic text-purple-300">
                  "Effectiveness of a Tailored Educational Intervention to Minimize the Associated Factors for Occupational Exposure to Systemic Anticancer Therapy (SACT) among Nurses at Apeksha Hospital, Maharagama."
                </p>
              </div>
              <p>
                All content was <span className="text-pink-400 font-semibold">expert-reviewed</span> before publication to ensure accuracy and relevance.
              </p>
            </div>
          </div>

          {/* Who Should Use */}
          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-amber-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-amber-500 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Who Can Benefit</h2>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed">
              <span className="text-amber-400 font-semibold">Oncology nurses</span> and other healthcare professionals are encouraged to explore Chemosafe and strengthen their understanding of safe chemotherapy handling practices.
            </p>
          </div>

          {/* Key Takeaway */}
          <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-amber-300" />
                <h2 className="text-3xl font-bold text-white">Key Take-Home Message</h2>
              </div>
              <p className="text-xl text-white leading-relaxed font-medium">
                Chemosafe equips oncology nurses with practical, evidence-based learning tools to work safely, protect their health, and deliver better cancer care.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Program Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive E-Modules</h3>
                <p className="text-slate-300">Comprehensive online learning materials tailored to local needs</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Blended Learning</h3>
                <p className="text-slate-300">Combines in-person teaching with flexible online access</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert-Reviewed</h3>
                <p className="text-slate-300">All content validated by healthcare professionals</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <button 
              onClick={() => setShowAbout(false)}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-10 py-4 rounded-full font-semibold transition shadow-2xl hover:shadow-teal-500/50 text-lg flex items-center gap-3 mx-auto"
            >
              Explore Learning Materials
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );

  // If showing about page, render it
  if (showAbout) {
    return <AboutPageContent />;
  }

  // Main Home Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Chemosafe</h1>
                <p className="text-xs text-slate-600">Empower. Educate. Enhance.</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-700 hover:text-teal-600 font-medium transition">Home</a>
              <button 
                onClick={() => setShowAbout(true)}
                className="text-slate-700 hover:text-teal-600 font-medium transition"
              >
                About
              </button>
              <a href="#content" className="text-slate-700 hover:text-teal-600 font-medium transition">Content</a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 font-medium transition">Contact</a>
              <a href="#more" className="text-slate-700 hover:text-teal-600 font-medium transition flex items-center gap-1">
                More <ChevronDown className="w-4 h-4" />
              </a>
            </nav>

            {/* User Avatar & Get Started */}
            <div className="hidden md:flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">SC</span>
              </div>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold transition shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#home" className="block text-slate-700 hover:text-teal-600 py-2">Home</a>
              <button 
                onClick={() => {
                  setShowAbout(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-teal-600 py-2"
              >
                About
              </button>
              <a href="#contact" className="block text-slate-700 hover:text-teal-600 py-2">Contact</a>
              <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold transition">
                Get Started
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 via-transparent to-purple-100/50" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Safe handling<br />
              <span className="text-teal-600">Chemotherapy</span>
            </h1>
            <p className="text-xl text-slate-700">A guide for oncology nurses</p>
            <p className="text-slate-600 leading-relaxed">
              Education material of a tailored educational intervention
            </p>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition shadow-xl hover:shadow-2xl flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="text-xs font-medium text-slate-700">Occupational<br />Exposure Risks</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📋</span>
                </div>
                <p className="text-xs font-medium text-slate-700">Safety Guidelines &<br />Precautions</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="text-xs font-medium text-slate-700">Educational<br />Intervention</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
              alt="Healthcare professional"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Essential Educational Content Section */}
      <section id="content" className="py-20 px-6 bg-gradient-to-r from-teal-100/30 via-purple-100/30 to-pink-100/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Essential Educational Content</h2>
            <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
              This website is a supportive educational material for a tailored educational intervention designed for oncology nurses in Sri Lanka. It includes the best practices and recommendations for handling chemotherapy, considering the nurse's role in the local setting. This website will reduce unnecessary occupational exposure to chemotherapy and related adverse effects by enhancing the nurses' knowledge and practice of handling chemotherapy. Thus, it ensures the productivity of nurses' lives and better oncology nursing care.
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

      {/* Supporting Healthcare Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Supporting Healthcare Professionals</h2>
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
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=300&fit=crop"
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition shadow-xl hover:shadow-2xl">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Chemosafe</h3>
              </div>
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
              onClick={() => setShowAbout(true)}
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
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {/*<button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">
                Subscribe
              </button> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-slate-900 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition z-50">
        💬
      </button>
    </div>
  );
};

export default App;