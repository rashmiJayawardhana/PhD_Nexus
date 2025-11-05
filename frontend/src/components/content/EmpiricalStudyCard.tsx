// src/components/content/EmpiricalStudyCard.tsx
import React from "react";

interface EmpiricalStudyCardProps {
  study: string;
  findings: React.ReactNode;
  variant?: "blue" | "purple" | "teal" | "indigo";
}

export const EmpiricalStudyCard: React.FC<EmpiricalStudyCardProps> = ({
  study,
  findings,
  variant = "blue",
}) => {
  const variants: Record<
    "blue" | "purple" | "teal" | "indigo",
    { bg: string; border: string; badge: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-600",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      badge: "bg-teal-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      badge: "bg-indigo-600",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4 hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`${style.badge} text-white text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0`}
        >
          {study}
        </span>
      </div>
      <div className="text-sm text-slate-700 space-y-2">{findings}</div>
    </div>
  );
};


