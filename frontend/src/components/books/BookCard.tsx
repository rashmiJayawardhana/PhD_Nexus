// components/books/BookCard.tsx 
import { Book } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { useAdmin } from '../../context/AdminContext';
import type { BookCardProps } from '@/types/book';

const BookCard = ({ book }: BookCardProps) => {
  const { isAdmin } = useAdmin();

  return (
    <Card hover={false} className="p-6 group"> {/* Added group for icon hover */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-indigo-50 p-3 rounded-lg group-hover:bg-indigo-100 transition-all duration-300"> {/* Original hover */}
          <Book className="w-6 h-6 text-indigo-600" />
        </div>
        <Badge 
          variant={book.status === 'completed' ? 'success' : 'warning'}
          size="sm"
        >
          {book.status === 'completed' ? 'Completed' : 'In Progress'}
        </Badge>
      </div>
      
      <h3 className="font-bold text-slate-800 mb-2">{book.title}</h3>
      <p className="text-slate-600 text-sm mb-3">{book.author}</p>
      
      <div className="flex items-center justify-between">
        <Badge variant="secondary" size="sm">{book.type}</Badge> {/* xs-like */}
        <div className="flex gap-1">
          {[...Array(book.rating)].map((_, i) => (
            <span key={i} className="text-amber-400">★</span>
          ))}
        </div>
      </div>

      {isAdmin && (
        <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2"> {/* Original border-t */}
          <button className="flex-1 text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
            Edit
          </button>
          <button className="flex-1 text-sm text-red-600 hover:text-red-700 transition-colors">
            Delete
          </button>
        </div>
      )}
    </Card>
  );
};

export default BookCard;