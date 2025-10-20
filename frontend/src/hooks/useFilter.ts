// hooks/useFilter.ts
import { useState, useCallback } from 'react';
import type { UseFilterReturn } from '../types/hook';

export const useFilter = (initialCategory = 'all'): UseFilterReturn => {
  const [selectedFilter, setSelectedFilter] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedFilter('all');
    setSearchTerm('');
  }, []);

  return {
    selectedFilter,
    searchTerm,
    handleFilterChange,
    handleSearchChange,
    resetFilters
  };
};