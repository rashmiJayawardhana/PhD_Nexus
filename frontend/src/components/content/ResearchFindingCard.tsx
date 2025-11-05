// src/components/content/ResearchFindingCard.tsx
import React from "react";

interface ResearchFindingCardProps {
  study: string;
  methodology: string;
  findings: React.ReactNode;
  impact?: string;
  variant?: "blue" | "green" | "purple" | "orange" | "teal";
}

export const ResearchFindingCard: React.FC<ResearchFindingCardProps> = ({
  study,
  methodology,
  findings,
  impact,
  variant = "blue",
}) => {
  const variants: Record<
    "blue" | "green" | "purple" | "orange" | "teal",
    { bg: string; border: string; badge: string; accent: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-600",
      accent: "text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-600",
      accent: "text-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-600",
      accent: "text-purple-700",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      badge: "bg-orange-600",
      accent: "text-orange-700",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      badge: "bg-teal-600",
      accent: "text-teal-700",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4 hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`${style.badge} text-white text-xs px-3 py-1 rounded-full font-semibold`}
        >
          {study}
        </span>
        <span className={`text-xs ${style.accent} font-medium`}>
          {methodology}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <h6 className={`font-semibold ${style.accent} text-sm mb-1`}>
            Key Findings:
          </h6>
          <div className="text-sm text-slate-700">{findings}</div>
        </div>

        {impact && (
          <div className="bg-white/60 rounded p-3 border border-white">
            <h6 className={`font-semibold ${style.accent} text-sm mb-1`}>
              Impact:
            </h6>
            <p className="text-xs text-slate-700">{impact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

