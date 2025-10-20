// components/about/CollapsibleContent.tsx
import type { CollapsibleContentProps } from '@/types/about';
import { useState } from 'react';

const CollapsibleContent = ({ trigger, children }: CollapsibleContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button 
        className="mt-4 text-indigo-400 hover:text-indigo-300 transition flex items-center gap-2 text-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span 
          className="transform transition-transform" 
          style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)' }}
        >
          ▶
        </span>
        {trigger}
      </button>
      {isExpanded && (
        <div className="mt-4 p-4 bg-slate-700/50 rounded-xl">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleContent;