interface AbbreviationItemProps {
  abbreviation: string;
  fullForm: string;
  category?: string;
}

export const AbbreviationItem: React.FC<AbbreviationItemProps> = ({ 
  abbreviation, 
  fullForm, 
  category 
}) => (
  <div className="bg-white rounded-lg p-4 border-2 border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white rounded-lg px-3 py-2 font-bold text-sm min-w-[80px] text-center">
          {abbreviation}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-slate-900 font-semibold mb-1">{fullForm}</p>
        {category && (
          <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
            {category}
          </span>
        )}
      </div>
    </div>
  </div>
);