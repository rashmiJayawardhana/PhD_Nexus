// src/components/content/ContentCard.tsx
import type { ContentCardProps } from "@/types/content";
import React from "react";

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  icon,
  children,
  variant = "default",
}) => {
  const variants = {
    default: "bg-white border-slate-200",
    highlight: "bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200",
    info: "bg-blue-50 border-blue-200",
    warning: "bg-amber-50 border-amber-200",
    success: "bg-emerald-50 border-emerald-200",
  };

  return (
    <div className={`${variants[variant]} border-2 rounded-xl p-6 shadow-lg mb-6`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  );
};
