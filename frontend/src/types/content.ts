// src/types/content.ts
export interface SubTopic {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  description: string;
  subTopics: SubTopic[];
}

export interface LearningOutcome {
  outcomes: string[];
  competencies: string[];
  content: string[];
}

export interface ContentSection {
  id: string;
  title: string;
  icon?: string;
  content: React.ReactNode;
  chapterTitle?: string;      // Add this (optional, for chapter-level title)
  chapterDescription?: string; // Add this (optional, for chapter-level description)
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ContentCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'info' | 'warning';
}

export interface NavigationProps {
  sections: ContentSection[];
  currentSection: string;
  onSectionChange: (id: string) => void;
}