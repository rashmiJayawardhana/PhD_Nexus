// src/components/content/RequirementsList.tsx
// For listing requirements/criteria
import React from "react";

interface RequirementsListProps {
  title?: string;
  items: string[];
  color?: "teal" | "blue" | "purple" | "green" | "red"; 
}

export const RequirementsList: React.FC<RequirementsListProps> = ({
  title,
  items,
  color = "teal",
}) => {
  const colors: Record<
    "teal" | "blue" | "purple" | "green" | "red",
    { bg: string; border: string; text: string; bullet: string }
  > = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-700",
      bullet: "text-teal-600",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      bullet: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      bullet: "text-purple-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      bullet: "text-green-600",
    },
    red: {
      bg: "bg-red-50",              
      border: "border-red-200",
      text: "text-red-700",
      bullet: "text-red-600",
    },
  };

  const style = colors[color];

  return (
    <div className={`${style.bg} rounded-lg p-5 border-2 ${style.border} mb-4`}>
      {title && <h5 className={`font-bold ${style.text} mb-3`}>{title}</h5>}
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className={`${style.bullet} font-bold mt-0.5`}>•</span>
            <span className="text-sm text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

