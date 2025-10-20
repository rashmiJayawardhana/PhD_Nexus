import type { Project } from "./project";

// types/hook.ts
export interface UseProjectsFilters {
  category: string;
  searchTerm: string;
}

export interface UseProjectsReturn {
  filteredProjects: Project[];
  categories: string[];
}

export interface UseFilterReturn {
  selectedFilter: string;
  searchTerm: string;
  handleFilterChange: (filter: string) => void;
  handleSearchChange: (term: string) => void;
  resetFilters: () => void;
}

export type UseToggleReturn = [
  boolean,
  () => void,
  {
    setTrue: () => void;
    setFalse: () => void;
    setValue: (value: boolean) => void;
  }
];

export interface UseLoadingReturn<T> {
  loading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<T>;
}