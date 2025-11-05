// src/components/content/TwoColumnLayout.tsx
// TwoColumnLayout Component - For side-by-side comparisons
import React from "react";

type ColorKey = "blue" | "pink" | "teal" | "purple";

interface TwoColumnLayoutProps {
  leftTitle: string;
  leftContent: React.ReactNode;
  rightTitle: string;
  rightContent: React.ReactNode;
  leftColor?: ColorKey;
  rightColor?: ColorKey;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  leftColor = "blue",
  rightColor = "pink",
}) => {
  const colors: Record<ColorKey, string> = {
    blue: "bg-blue-50 border-blue-200",
    pink: "bg-pink-50 border-pink-200",
    teal: "bg-teal-50 border-teal-200",
    purple: "bg-purple-50 border-purple-200",
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className={`${colors[leftColor]} rounded-lg p-5 border-2`}>
        <h5 className="font-bold text-slate-900 mb-3">{leftTitle}</h5>
        {leftContent}
      </div>
      <div className={`${colors[rightColor]} rounded-lg p-5 border-2`}>
        <h5 className="font-bold text-slate-900 mb-3">{rightTitle}</h5>
        {rightContent}
      </div>
    </div>
  );
};

