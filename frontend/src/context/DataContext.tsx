// context/DataContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { DataContextType } from '../types/context';
import type { AppData } from '../types/data';
import type { Profile } from '../types/profile';
import type { Project } from '../types/project';
import type { Testimonial } from '../types/testimonial';
import type { Book } from '../types/book';
import { initialData } from '../data/initialData';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<AppData>(initialData);
  const [loading, setLoading] = useState(true); // New
  useEffect(() => { setLoading(false); }, []);

  const updateProfile = (updates: Partial<Profile>) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updates }
    }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: Date.now() }]
    }));
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => 
        p.id === id ? { ...p, ...updates } : p
      )
    }));
  };

  const deleteProject = (id: number) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    setData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, { ...testimonial, id: Date.now() }]
    }));
  };

  const addBook = (book: Omit<Book, 'id'>) => {
    setData(prev => ({
      ...prev,
      books: [...prev.books, { ...book, id: Date.now() }]
    }));
  };

  return (
    <DataContext.Provider value={{
      data,
      updateProfile,
      addProject,
      updateProject,
      deleteProject,
      addTestimonial,
      addBook
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};