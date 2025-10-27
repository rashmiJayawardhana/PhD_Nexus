// src/components/content/DataTable.tsx
import type { TableData } from "@/types/content";
import type { JSX } from "react";

export const DataTable: React.FC<TableData> = ({ headers, rows }) => {
  const renderCell = (cell: string): JSX.Element => {
    // Check if cell contains HTML list markers
    if (typeof cell === 'string' && cell.includes('<ul>')) {
      const parts = cell.split('<ul>');
      const beforeList = parts[0];
      const afterUlSplit = parts[1].split('</ul>');
      const listPart = afterUlSplit[0];
      const afterList = afterUlSplit[1] || ''; // Content after </ul>
      const listItems = listPart.match(/<li>(.*?)<\/li>/g) || [];
      
      return (
        <div>
          {beforeList && <div className="mb-2 whitespace-pre-line">{beforeList}</div>}
          <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
            {listItems.map((item, idx) => {
              const content = item.replace(/<\/?li>/g, '');
              return <li key={idx} className="text-slate-700">{content}</li>;
            })}
          </ul>
          {afterList && <div className="whitespace-pre-line">{afterList}</div>}
        </div>
      );
    }
    
    return <div className="whitespace-pre-line">{cell}</div>;
  };

  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gradient-to-r from-teal-600 to-teal-500">
            {headers.map((header, idx) => (
              <th key={idx} className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wide">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr 
              key={rowIdx} 
              className={`${rowIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-teal-50 transition-colors`}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-6 py-4 text-sm text-slate-700 border-b border-slate-200 align-top">
                  {renderCell(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};