// components/testimonials/TestimonialCard.tsx
import { Edit } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import type { TestimonialCardProps } from '@/types/testimonial';

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { isAdmin } = useAdmin();

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"> {/* Original glass + hover */}
      <p className="text-lg leading-relaxed mb-6 italic"> {/* Original leading */}
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-full" /> {/* Original avatar */}
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-white/80">{testimonial.role}</p>
        </div>
      </div>
      {isAdmin && (
        <button className="mt-4 text-sm text-white/60 hover:text-white transition-colors duration-300"> {/* Enhanced transition */}
          <Edit className="w-4 h-4 inline mr-2" />
          Edit
        </button>
      )}
    </div>
  );
};

export default TestimonialCard;