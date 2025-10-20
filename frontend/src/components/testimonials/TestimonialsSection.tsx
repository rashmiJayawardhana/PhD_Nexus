// components/testimonials/TestimonialsSection.tsx
import type { TestimonialsSectionProps } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white"> {/* Original gradient */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16"> {/* Original sizing */}
          What Colleagues Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;