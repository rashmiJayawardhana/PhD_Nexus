// types/project.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  featured: boolean;
}

// Project Components
export interface ProjectCardProps {
  project: Project;
}

export interface ProjectFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  categories: string[];
}

export interface ProjectGridProps {
  projects: Project[];
}

export interface ProjectsSectionProps {
  projects: Project[];
}