// hooks/useProjects.ts
import { useMemo } from 'react';
import type { UseProjectsFilters, UseProjectsReturn } from '../types/hook';
import type { Project } from '../types/project';

export const useProjects = (projects: Project[], filters: UseProjectsFilters): UseProjectsReturn => {
  const { category, searchTerm } = filters;

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = category === 'all' || project.category === category;
      const matchesSearch = 
        !searchTerm ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [projects, category, searchTerm]);

  const categories = useMemo(() => {
    return ['all', ...new Set(projects.map(p => p.category))];
  }, [projects]);

  return { filteredProjects, categories };
};