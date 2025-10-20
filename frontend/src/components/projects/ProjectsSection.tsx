// components/projects/ProjectsSection.tsx
import { useState } from 'react';
import ProjectFilters from './ProjectFilters';
import ProjectGrid from './ProjectGrid';
import Button from '../common/Button';
import { Plus } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import type { ProjectsSectionProps } from '@/types/project';
import { useDebounce } from '../../hooks/useDebounce';

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const { isAdmin } = useAdmin();

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) || // Updated
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm"> {/* Original backdrop */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Selected{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> {/* Original gradient */}
              Research & Projects
            </span>
          </h2>
          <p className="text-slate-600 text-lg"> {/* Original text-lg */}
            Bridging theory and practice through innovative work
          </p>
        </div>

        <ProjectFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          categories={categories}
        />

        {isAdmin && (
          <div className="flex justify-end mb-6"> {/* Original position */}
            <Button icon={Plus} size="lg" className="shadow-lg hover:shadow-xl transition-all"> {/* Enhanced shadow/hover */}
              Add Project
            </Button>
          </div>
        )}

        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;