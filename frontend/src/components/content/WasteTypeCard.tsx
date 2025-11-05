// src/components/content/WasteTypeCard.tsx
// For categorizing waste types
import React from "react";
import { Trash2 } from "lucide-react";

interface WasteTypeCardProps {
  category: string;
  items: string[];
}

export const WasteTypeCard: React.FC<WasteTypeCardProps> = ({ category, items }) => (
  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-5 border-2 border-red-200 mb-4">
    <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
      <Trash2 className="w-5 h-5" />
      {category}
    </h5>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-red-600 font-bold">×</span>
          <span className="text-sm text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WasteTypeCard;