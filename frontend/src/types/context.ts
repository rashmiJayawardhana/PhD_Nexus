// types/context.ts
import type { Book } from "./book";
import type { AppData } from "./data";
import type { Profile } from "./profile";
import type { Project } from "./project";
import type { Testimonial } from "./testimonial";

export interface AdminContextType {
  isAdmin: boolean;
  isEditing: boolean;
  toggleAdmin: () => void;
  toggleEditing: () => void;
}

export interface DataContextType {
  data: AppData;
  updateProfile: (updates: Partial<Profile>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: number, updates: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  addBook: (book: Omit<Book, 'id'>) => void;
}