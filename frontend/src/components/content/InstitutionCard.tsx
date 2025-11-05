interface InstitutionCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export const InstitutionCard: React.FC<InstitutionCardProps> = ({ name, icon, color }) => (
  <div className={`${color} rounded-lg p-5 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
    <div className="flex items-center gap-3">
      {icon}
      <h4 className="font-semibold text-slate-900 text-sm">{name}</h4>
    </div>
  </div>
);