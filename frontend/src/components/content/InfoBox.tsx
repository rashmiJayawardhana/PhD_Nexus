// src/components/content/InfoBox.tsx
import { AlertCircle, CheckCircle } from "lucide-react";

export const InfoBox: React.FC<{ type: 'tip' | 'note' | 'critical' | 'success' | 'warning'; children: React.ReactNode }> = ({ 
  type, 
  children 
}) => {
  const styles = {
    tip: { bg: 'bg-green-50', border: 'border-green-500', icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
    note: { bg: 'bg-blue-50', border: 'border-blue-500', icon: <AlertCircle className="w-5 h-5 text-blue-600" /> },
    success: { bg: 'bg-emerald-50', border: 'border-emerald-500', icon: '✅' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-500', icon: '⚠️' },
    critical: { bg: 'bg-red-50', border: 'border-red-500', icon: '🚨' }
  };

  return (
    <div className={`${styles[type].bg} border-l-4 ${styles[type].border} p-4 rounded-r-lg mb-4`}>
      <div className="flex items-start gap-3">
        {styles[type].icon}
        <div className="text-sm text-slate-700">{children}</div>
      </div>
    </div>
  );
};