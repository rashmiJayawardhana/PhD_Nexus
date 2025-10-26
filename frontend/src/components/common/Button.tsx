// src/components/common/Button.tsx
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const variants = {
    primary: 'bg-slate-900 hover:bg-slate-800 text-slate-900',
    secondary: 'bg-amber-400 hover:bg-amber-500 text-slate-900',
    outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 rounded-lg font-semibold transition shadow-xl hover:shadow-2xl flex items-center gap-2 ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};