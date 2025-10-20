// components/common/Card.tsx
import type { CardProps } from "../../types/common";

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  onClick // Add this
}: CardProps) => {
  const baseStyles = 'rounded-2xl overflow-hidden shadow-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-white',
    glass: 'bg-white/10 backdrop-blur-md',
    gradient: 'bg-gradient-to-br from-indigo-600 to-purple-700'
  };
  
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : ''; // Add cursor-pointer

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick} // Add onClick here
    >
      {children}
    </div>
  );
};

export default Card;