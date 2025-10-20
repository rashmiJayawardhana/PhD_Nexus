// components/common/Badge.tsx
import type { BadgeProps } from "../../types/common";

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '' 
}: BadgeProps) => {
  const baseStyles = 'rounded-full font-medium';
  
  const variants = {
    default: 'bg-indigo-50 text-indigo-600',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    secondary: 'bg-slate-100 text-slate-600'
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;