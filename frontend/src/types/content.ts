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
  variant?: "default" | "highlight" | "info" | "warning" | "success"; 
}


export interface NavigationProps {
  sections: ContentSection[];
  currentSection: string;
  onSectionChange: (id: string) => void;
}

export interface SummaryImage {
  src: string;
  alt: string;
  caption?: string;
  size?: 'small' | 'medium' | 'large' | 'full' | 'auto'; // Image size preset
  maxHeight?: string; // Custom max height (e.g., '300px', '20rem')
  maxWidth?: string; // Custom max width (e.g., '500px', '100%')
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'; // How image fits container
}

export interface SummaryData {
  title?: string; // Optional, defaults to "Summary"
  description: string | string[]; // Can be single paragraph or array of paragraphs
  images?: SummaryImage[]; // Optional 1-2 images
  keyPoints?: string[]; // Optional bullet points for key takeaways
  variant?: 'default' | 'gradient' | 'bordered'; // Visual style variant
  imageLayout?: 'grid' | 'stack' | 'flex'; // How multiple images are arranged
}