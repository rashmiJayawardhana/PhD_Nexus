// src/components/content/ProcedureList.tsx
// Reusable for step-by-step procedures
import React from "react";

interface ProcedureListProps {
  items: string[];
  variant?: "default" | "teal" | "blue" | "purple" | "red";
}

export const ProcedureList: React.FC<ProcedureListProps> = ({
  items,
  variant = "default",
}) => {
  const variants: Record<"default" | "teal" | "blue" | "purple" | "red" , string> = {
    default: "bg-white",
    teal: "bg-teal-50 border-teal-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    red: "bg-red-50 border-red-200",
  };

  return (
    <div className={`${variants[variant]} rounded-lg p-5 border-2 mb-4`}>
      <ol className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {idx + 1}
            </span>
            <span className="text-slate-700 text-sm pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};


