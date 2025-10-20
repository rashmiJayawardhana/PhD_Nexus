// components/common/SearchInput.tsx
import { Search } from 'lucide-react';
import type { SearchInputProps } from '../../types/common';

const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = 'Search...', 
  className = '' 
}: SearchInputProps) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition outline-none"
      />
    </div>
  );
};

export default SearchInput;