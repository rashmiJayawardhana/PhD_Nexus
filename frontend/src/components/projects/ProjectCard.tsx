// components/projects/ProjectCard.tsx
import Modal from 'react-modal'; 
import { useState } from 'react';
import { Eye, Edit, Trash2, ArrowUpRight, X } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { useAdmin } from '../../context/AdminContext';
import type { ProjectCardProps } from '@/types/project';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isAdmin } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Prevent card click if needed
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Set app element for accessibility (do this once in index.html or App.tsx: document.body)
  Modal.setAppElement('#root');

  return (
    <>
      <Card 
        hover 
        className="group cursor-pointer" 
        onClick={openModal} // Open modal on card click
      >
        <div className="relative overflow-hidden h-56">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          {/* Overlay only for admin actions; View is now card click */}
          {isAdmin && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 pointer-events-auto">
                <Button 
                  variant="secondary" 
                  size="sm"
                  icon={Eye}
                  className="flex-1 shadow-lg hover:shadow-xl"
                  onClick={openModal} // View also opens modal
                >
                  View
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="p-2 shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    // Add edit logic here
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="p-2 shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    // Add delete logic here
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} size="sm" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-slate-600 mb-4">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{project.client}</span>
            <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </Card>

      {/* Modal for project details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Details for ${project.title}`} // Accessibility
        className="modal-content" // Custom class for content
        overlayClassName="modal-overlay" // Custom class for overlay
        ariaHideApp={false} // Set to true in prod with proper app element
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition p-2 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" /> {/* Add import X from lucide-react */}
          </button>
          <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">{project.title}</h2>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg mb-4" 
            loading="lazy" // Performance
          />
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500 dark:text-slate-400">{project.client}</span>
            {isAdmin && (
              <div className="flex gap-2">
                <Button size="sm" onClick={(e) => { e.stopPropagation(); /* edit */ }}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={(e) => { e.stopPropagation(); /* delete */ }}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;