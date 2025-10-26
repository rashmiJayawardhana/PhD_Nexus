// src/components/content/StatCard.tsx
export const StatCard: React.FC<{ number: string; label: string; color: string }> = ({ 
  number, 
  label, 
  color 
}) => (
  <div className={`${color} rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition`}>
    <div className="text-3xl font-bold text-slate-900 mb-2">{number}</div>
    <div className="text-sm text-slate-700">{label}</div>
  </div>
);