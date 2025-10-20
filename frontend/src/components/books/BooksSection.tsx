// components/books/BooksSection.tsx 
import { Book } from 'lucide-react';
import BookCard from './BookCard';
import Button from '../common/Button';
import { Plus } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import type { BooksSectionProps } from '@/types/book';

const BooksSection = ({ books }: BooksSectionProps) => {
  const { isAdmin } = useAdmin();

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm"> {/* Added backdrop for consistency */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Book className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Book Reviews & Summaries
          </h2>
          <p className="text-slate-600">Continuous learning through literature</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {isAdmin && (
          <div className="text-center mt-8">
            <Button icon={Plus} size="lg" className="shadow-lg hover:shadow-xl"> {/* Enhanced */}
              Add Book Review
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BooksSection;