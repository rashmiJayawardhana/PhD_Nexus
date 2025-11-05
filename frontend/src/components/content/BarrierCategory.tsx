// src/components/content/BarrierCategory.tsx
import { AlertTriangle } from "lucide-react";

type ColorKey = 'red' | 'orange' | 'amber' | 'yellow';

interface BarrierCategoryProps {
  title: string;
  items: string[];
  color?: ColorKey;
}

export const BarrierCategory: React.FC<BarrierCategoryProps> = ({
  title,
  items,
  color = 'red',
}) => {
  const colors: Record<ColorKey, { bg: string; border: string; text: string; icon: string }> = {
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', icon: 'text-red-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', icon: 'text-orange-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', icon: 'text-amber-600' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', icon: 'text-yellow-600' },
  };

  const style = colors[color];

  return (
    <div className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4`}>
      <h5 className={`font-bold ${style.text} mb-3 flex items-center gap-2`}>
        <AlertTriangle className={`w-5 h-5 ${style.icon}`} />
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className={`${style.icon} font-bold mt-0.5`}>×</span>
            <span className="text-sm text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
