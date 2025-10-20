// types/book.ts
export type BookStatus = 'completed' | 'in-progress' | 'planned';
export type BookType = 'Book Review' | 'Book Summary' | 'Paper Review';

export interface Book {
  id: number;
  title: string;
  author: string;
  type: BookType;
  status: BookStatus;
  rating: number;
}

// Book Components
export interface BookCardProps {
  book: Book;
}

export interface BooksSectionProps {
  books: Book[];
}