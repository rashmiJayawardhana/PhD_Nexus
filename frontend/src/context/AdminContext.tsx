// context/AdminContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { AdminContextType } from '../types/context';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
    if (!isAdmin) {
      setIsEditing(false);
    }
  };

  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <AdminContext.Provider value={{ isAdmin, isEditing, toggleAdmin, toggleEditing }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};