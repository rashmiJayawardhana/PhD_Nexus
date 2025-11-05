// src/components/content/EducationalMethodCard.tsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface EducationalMethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  color?: "teal" | "blue" | "purple" | "green";
}

export const EducationalMethodCard: React.FC<EducationalMethodCardProps> = ({
  icon,
  title,
  description,
  benefits,
  color = "teal",
}) => {
  const colors = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-900",
      icon: "text-teal-600",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-900",
      icon: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-900",
      icon: "text-purple-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-900",
      icon: "text-green-600",
    },
  };

  const style = colors[color];

  return (
    <div className={`${style.bg} rounded-xl p-5 border-2 ${style.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`${style.icon} p-2 rounded-lg bg-white`}>
          {icon}
        </div>
        <div>
          <h5 className={`font-bold ${style.text} mb-1`}>{title}</h5>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
      {benefits && (
        <ul className="space-y-1 mt-3 ml-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className={`w-4 h-4 ${style.icon} flex-shrink-0 mt-0.5`} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};