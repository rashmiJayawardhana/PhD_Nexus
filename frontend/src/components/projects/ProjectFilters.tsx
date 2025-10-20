// components/projects/ProjectFilters.tsx
import SearchInput from '../common/SearchInput';
import Button from '../common/Button';
import type { ProjectFilterProps } from '@/types/project';

const ProjectFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedFilter, 
  onFilterChange, 
  categories 
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between"> {/* Original flex */}
      <SearchInput
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search projects..."
        className="w-full md:w-96"
      />

      <div className="flex gap-2 flex-wrap justify-center">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedFilter === cat ? 'primary' : 'secondary'}
            size="sm"
            className="shadow-lg hover:shadow-xl transition-all" 
            onClick={() => onFilterChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;