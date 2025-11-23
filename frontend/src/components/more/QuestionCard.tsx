// src/components/more/QuestionCard.tsx
import { useState } from 'react';
import type { Question } from '@/types/resources';

interface QuestionCardProps {
  question: Question;
  setNumber: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, setNumber }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const handleCheckboxChange = (option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [option]: prev[option] === 'true' ? '' : 'true'
    }));
  };

  const handleTableAnswer = (row: string, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [row]: value
    }));
  };

  if (question.type === 'table' && question.tableData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-slate-900 mb-4 text-lg">{question.text}</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-teal-600 to-blue-600">
                {question.tableData.headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-3 text-left text-white font-semibold text-sm border border-teal-500">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.tableData.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-slate-700 border border-slate-200">{row}</td>
                  {['true', 'false', 'unknown'].map((option) => (
                    <td key={option} className="px-4 py-3 text-center border border-slate-200">
                      <input
                        type="radio"
                        name={`q${setNumber}-${question.id}-${idx}`}
                        value={option}
                        checked={selectedAnswers[row] === option}
                        onChange={() => handleTableAnswer(row, option)}
                        className="w-4 h-4 text-teal-600 focus:ring-teal-500 cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h4 className="font-bold text-slate-900 mb-4 text-lg">{question.text}</h4>
      <div className="space-y-3">
        {question.options?.map((option, idx) => (
          <label 
            key={idx} 
            className="flex items-start gap-3 p-4 rounded-lg hover:bg-teal-50 cursor-pointer transition border border-transparent hover:border-teal-200"
          >
            <input
              type="checkbox"
              checked={selectedAnswers[option] === 'true'}
              onChange={() => handleCheckboxChange(option)}
              className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
            />
            <span className="text-slate-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};