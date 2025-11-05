import { GraduationCap } from "lucide-react";

interface ExpertCardProps {
  name: string;
  title: string;
  affiliation: string;
  color: string;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ name, title, affiliation, color }) => (
  <div className={`${color} rounded-xl p-5 border-2 hover:shadow-xl transition-all duration-300`}>
    <div className="flex items-start gap-3">
      <div className="bg-white p-2 rounded-lg">
        <GraduationCap className="w-5 h-5 text-teal-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-900 mb-1">{name}</h4>
        <p className="text-sm text-teal-700 font-medium mb-2">{title}</p>
        <p className="text-xs text-slate-600 leading-relaxed">{affiliation}</p>
      </div>
    </div>
  </div>
);
