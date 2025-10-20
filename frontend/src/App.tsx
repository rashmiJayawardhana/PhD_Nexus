// App.tsx
import ProfileHero from './components/profile/ProfileHero';
import ProjectsSection from './components/projects/ProjectsSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import BooksSection from './components/books/BooksSection';
import Footer from './components/layout/Footer';
import { useData } from './context/DataContext';
import { useAdmin } from './context/AdminContext';
import { useToggle } from './hooks/useToggle';
import AboutPage from './components/about/AboutPage';
import Header from './components/layout/Header';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';

const App = () => {
  const { data } = useData();
  const { isAdmin } = useAdmin();
  const [showAbout, toggleShowAbout] = useToggle(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: easeOut 
      } 
    }
  };

  if (showAbout) {
    return <AboutPage profile={data.profile} onBack={toggleShowAbout} />;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <Header 
        showAbout={showAbout} 
        onNavigate={() => {/* optional tracking */}} 
        onAboutClick={toggleShowAbout} 
      />
      
      {/* Wrap ProfileHero in motion.div for animation */}
      <motion.div variants={childVariants} className="pt-20">
        <ProfileHero 
          profile={data.profile}
          isAdmin={isAdmin}
          onAboutClick={toggleShowAbout}
        />   
      </motion.div>
      
      {/* Added IDs for smooth-scroll nav; each section animated */}
      <motion.section id="projects" variants={childVariants}>
        <ProjectsSection projects={data.projects} />
      </motion.section>
      <motion.section id="testimonials" variants={childVariants}>
        <TestimonialsSection testimonials={data.testimonials} />
      </motion.section>
      <motion.section id="books" variants={childVariants}>
        <BooksSection books={data.books} />
      </motion.section>
      
      {/* Footer can be wrapped if desired, but kept simple */}
      <Footer />
    </motion.div>
  );
};

export default App;