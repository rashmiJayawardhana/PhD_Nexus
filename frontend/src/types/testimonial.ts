// types/testimonial.ts
export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

// Testimonial Components
export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}