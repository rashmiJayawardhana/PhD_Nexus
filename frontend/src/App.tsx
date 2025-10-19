import { useState } from 'react';
import { Search, ArrowUpRight, Book, Briefcase, Award, Mail, Linkedin, Twitter, Eye, Edit, Plus, Trash2, Save } from 'lucide-react';

// Mock data structure (replace with API calls)
const initialData = {
  profile: {
    name: "Dr. Sarah Chen",
    title: "PhD in Human-Computer Interaction",
    subtitle: "A people-centric researcher and designer from the innovation hub.",
    bio: "Hello! I am Dr. Chen. I am powered by research and innovation, big or small. My superpower is connecting theories, methodologies and people. I believe in the power of iterative process improvements and diversity in collaborations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    contact: {
      email: "sarah.chen@university.edu",
      linkedin: "linkedin.com/in/sarahchen",
      twitter: "@drsarahchen"
    },
    institution: "MIT Media Lab",
    yearsActive: "2015-present"
  },
  projects: [
    {
      id: 1,
      title: "AI Ethics Framework for Healthcare",
      category: "Research",
      tags: ["Research", "AI Ethics", "Healthcare"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      description: "Comprehensive framework for ethical AI implementation",
      client: "WHO",
      featured: true
    },
    {
      id: 2,
      title: "Educational VR Platform",
      category: "UX Design",
      tags: ["UX Design", "Education", "VR"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop",
      description: "Immersive learning environments for STEM education",
      client: "Stanford University",
      featured: true
    },
    {
      id: 3,
      title: "Accessibility in AR Interfaces",
      category: "Research",
      tags: ["Research", "Accessibility", "AR"],
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      description: "Making augmented reality accessible to all users",
      client: "Microsoft Research",
      featured: true
    }
  ],
  testimonials: [
    {
      id: 1,
      text: "Dr. Chen's innovative research methodology brought unprecedented insights to our AI ethics initiative. Her ability to bridge technical complexity with human-centered design principles has been transformative for our team.",
      author: "Prof. James Wilson",
      role: "Director of AI Ethics, Stanford"
    },
    {
      id: 2,
      text: "Working with Dr. Chen elevated our understanding of accessibility in emerging technologies. Her research rigor combined with practical design thinking created solutions that are both theoretically sound and immediately applicable.",
      author: "Maria Garcia",
      role: "Head of Innovation, Microsoft"
    }
  ],
  books: [
    {
      id: 1,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      type: "Book Review",
      status: "completed",
      rating: 5
    },
    {
      id: 2,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      type: "Book Summary",
      status: "completed",
      rating: 5
    },
    {
      id: 3,
      title: "How to Read a Paper",
      author: "S. Keshav",
      type: "Book Review",
      status: "in-progress",
      rating: 4
    }
  ],
  archives: [
    {
      id: 1,
      title: "Workshop: Design Thinking for PhDs",
      tags: ["Workshop", "Education", "Design Thinking"]
    },
    {
      id: 2,
      title: "Conference Talk: Ethics in AI Research",
      tags: ["Conference", "AI Ethics", "Research"]
    }
  ]
};

const PortfolioApp = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [data] = useState(initialData);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter projects
  const filteredProjects = data.projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', ...new Set(data.projects.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Floating Admin Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className={`px-4 py-2 rounded-full font-medium transition-all shadow-lg ${
            isAdmin 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white text-slate-700 hover:bg-slate-100'
          }`}
        >
          {isAdmin ? 'Admin Mode' : 'View Mode'}
        </button>
        {isAdmin && (
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-white rounded-full font-medium text-slate-700 hover:bg-slate-100 transition-all shadow-lg"
          >
            {isEditing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition"></div>
                <img
                  src={data.profile.image}
                  alt={data.profile.name}
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                />
                {isAdmin && (
                  <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition">
                    <Edit className="w-5 h-5 text-indigo-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {data.profile.name}
                </h1>
                <div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-slate-600 font-light">
                {data.profile.title}
              </p>
              
              <p className="text-lg text-slate-500 italic">
                {data.profile.subtitle}
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100">
                <p className="text-slate-700 leading-relaxed">
                  {data.profile.bio}
                </p>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a href={`mailto:${data.profile.contact.email}`} className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </a>
                <a href={`https://${data.profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </a>
                <a href={`https://twitter.com/${data.profile.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition">
                  <Twitter className="w-6 h-6 text-indigo-600" />
                </a>
              </div>

              <div className="flex gap-6 text-sm text-slate-600 justify-center lg:justify-start">
                <div>
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  {data.profile.institution}
                </div>
                <div>
                  <Award className="w-4 h-4 inline mr-2" />
                  {data.profile.yearsActive}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Selected <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Research & Projects</span>
            </h2>
            <p className="text-slate-600 text-lg">Bridging theory and practice through innovative work</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedFilter === cat
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {isAdmin && (
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Project
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button className="flex-1 bg-white text-slate-800 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      {isAdmin && (
                        <>
                          <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{project.client}</span>
                    <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            What Colleagues Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition">
                <p className="text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                </div>
                {isAdmin && (
                  <button className="mt-4 text-sm text-white/60 hover:text-white transition">
                    <Edit className="w-4 h-4 inline mr-2" />
                    Edit
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Book className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Book Reviews & Summaries
            </h2>
            <p className="text-slate-600">Continuous learning through literature</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.books.map((book) => (
              <div key={book.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-50 p-3 rounded-lg group-hover:bg-indigo-100 transition">
                    <Book className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    book.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {book.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <h3 className="font-bold text-slate-800 mb-2">{book.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{book.author}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {book.type}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(book.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                </div>

                {isAdmin && (
                  <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                    <button className="flex-1 text-sm text-indigo-600 hover:text-indigo-700 transition">
                      Edit
                    </button>
                    <button className="flex-1 text-sm text-red-600 hover:text-red-700 transition">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isAdmin && (
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg flex items-center gap-2 mx-auto">
                <Plus className="w-5 h-5" />
                Add Book Review
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Portfolio inspired by continuous learning and innovation
          </p>
          <p className="text-slate-500 text-sm">
            Last updated: October 2025 | Built with React, Tailwind & ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioApp;