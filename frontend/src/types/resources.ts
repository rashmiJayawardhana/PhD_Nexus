// src/types/resources.ts
export interface ResourceDocument {
  id: string;
  title: string;
  organization: string;
  description: string;
  driveUrl: string;
  fileType: 'pdf' | 'ppt' | 'video' | 'doc';
  icon?: string;
  color?: string;
}

export interface SupportiveMaterial {
  id: string;
  title: string;
  description: string;
  type: 'ppt' | 'video' | 'document' | 'glossary';
  viewUrl: string; // Primary URL
  alternateFormats?: Array<{
    label: string;
    url: string;
    format: 'pdf' | 'pptx' | 'doc';
    description?: string;
  }>; // For materials available in multiple formats
  duration?: string; // Only for videos
  icon?: string;
  isVideo?: boolean;
}

export interface Question {
  id: number;
  text: string;
  options?: string[];
  type: 'multiple-choice' | 'true-false' | 'table';
  tableData?: {
    headers: string[];
    rows: string[];
  };
}

export interface QuestionSet {
  id: number;
  title: string;
  description?: string;
  questions: Question[];
}