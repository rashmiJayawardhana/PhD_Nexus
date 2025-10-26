// src/components/content/DataTable.tsx
import type { TableData } from "@/types/content";

export const DataTable: React.FC<TableData> = ({ headers, rows }) => (
  <div className="overflow-x-auto mb-6">
    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
      <thead>
        <tr className="bg-gradient-to-r from-teal-600 to-teal-500">
          {headers.map((header, idx) => (
            <th key={idx} className="px-4 py-3 text-left text-white font-semibold text-sm">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="px-4 py-3 text-sm text-slate-700 border-b border-slate-200 whitespace-pre-line">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);