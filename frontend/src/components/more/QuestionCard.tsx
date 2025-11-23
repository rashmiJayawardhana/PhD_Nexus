// src/components/more/QuestionCard.tsx - ENHANCED VERSION
import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import type { Question } from '@/types/resources';

interface QuestionCardProps {
  question: Question;
  setNumber: number;
  showResults: boolean;
  onAnswerChange: (questionId: number, answers: Record<string, boolean | string>) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  setNumber, 
  showResults,
  onAnswerChange 
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | boolean>>({});

  const handleCheckboxChange = (option: string) => {
    const newAnswers = {
      ...selectedAnswers,
      [option]: !selectedAnswers[option]
    };
    setSelectedAnswers(newAnswers);
    onAnswerChange(question.id, newAnswers);
  };

  const handleTableAnswer = (row: string, value: string) => {
    const newAnswers = {
      ...selectedAnswers,
      [row]: value
    };
    setSelectedAnswers(newAnswers);
    onAnswerChange(question.id, newAnswers);
  };

  const checkAnswer = (key: string, userAnswer: string | boolean): boolean | null => {
    if (!showResults || !question.correctAnswers) return null;
    
    const correctAnswer = question.correctAnswers[key];
    if (correctAnswer === undefined) return null;
    
    // For boolean comparisons
    if (typeof correctAnswer === 'boolean' && typeof userAnswer === 'boolean') {
      return userAnswer === correctAnswer;
    }
    
    // For string comparisons (true/false/unknown)
    if (typeof correctAnswer === 'string' && typeof userAnswer === 'string') {
      return userAnswer === correctAnswer;
    }
    
    return null;
  };

  const getAnswerIcon = (isCorrect: boolean | null) => {
    if (isCorrect === null) return null;
    if (isCorrect) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  const getCorrectAnswerLabel = (key: string): string | null => {
    if (!showResults || !question.correctAnswers) return null;
    const correctAnswer = question.correctAnswers[key];
    
    if (typeof correctAnswer === 'boolean') {
      return correctAnswer ? '✓ Should be selected' : '✗ Should NOT be selected';
    } else if (typeof correctAnswer === 'string') {
      return `Correct: ${correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1)}`;
    }
    return null;
  };

  // TABLE TYPE QUESTIONS
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
                {showResults && (
                  <th className="px-4 py-3 text-center text-white font-semibold text-sm border border-teal-500">
                    Result
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {question.tableData.rows.map((row, idx) => {
                const userAnswer = selectedAnswers[row] as string;
                const isCorrect = checkAnswer(row, userAnswer);
                const correctAnswerLabel = getCorrectAnswerLabel(row);
                const rowClass = showResults 
                  ? isCorrect === true 
                    ? 'bg-green-50' 
                    : isCorrect === false 
                    ? 'bg-red-50' 
                    : idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                  : idx % 2 === 0 ? 'bg-slate-50' : 'bg-white';

                return (
                  <tr key={idx} className={rowClass}>
                    <td className="px-4 py-3 text-sm text-slate-700 border border-slate-200 font-medium">
                      {row}
                      {/* Show correct answer if user got it wrong */}
                      {showResults && isCorrect === false && correctAnswerLabel && (
                        <div className="mt-1 text-xs text-blue-700 font-semibold">
                          {correctAnswerLabel}
                        </div>
                      )}
                    </td>
                    {['true', 'false', 'unknown'].map((option) => (
                      <td key={option} className="px-4 py-3 text-center border border-slate-200">
                        <input
                          type="radio"
                          name={`q${setNumber}-${question.id}-${idx}`}
                          value={option}
                          checked={selectedAnswers[row] === option}
                          onChange={() => handleTableAnswer(row, option)}
                          disabled={showResults}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500 cursor-pointer disabled:cursor-not-allowed"
                        />
                      </td>
                    ))}
                    {showResults && (
                      <td className="px-4 py-3 text-center border border-slate-200">
                        {getAnswerIcon(isCorrect)}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Explanation after results */}
        {showResults && question.explanation && (
          <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-blue-900 mb-1">Explanation</h5>
                <p className="text-sm text-slate-700 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // MULTIPLE CHOICE QUESTIONS
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h4 className="font-bold text-slate-900 mb-4 text-lg">{question.text}</h4>
      <div className="space-y-3">
        {question.options?.map((option, idx) => {
          const isSelected = selectedAnswers[option];
          const isCorrect = checkAnswer(option, !!isSelected);
          const shouldBeSelected = question.correctAnswers?.[option];
          
          let borderClass = 'border-transparent hover:border-teal-200';
          let bgClass = 'hover:bg-teal-50';
          
          if (showResults) {
            if (isCorrect === true) {
              borderClass = 'border-green-500';
              bgClass = 'bg-green-50';
            } else if (isCorrect === false) {
              borderClass = 'border-red-500';
              bgClass = 'bg-red-50';
            }
          }

          return (
            <div key={idx}>
              <label 
                className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition border-2 ${borderClass} ${bgClass} ${showResults ? 'cursor-not-allowed' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={!!isSelected}
                  onChange={() => handleCheckboxChange(option)}
                  disabled={showResults}
                  className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 cursor-pointer disabled:cursor-not-allowed"
                />
                <span className="text-slate-700 flex-1">{option}</span>
                {showResults && getAnswerIcon(isCorrect)}
              </label>
              
              {/* Show correct answer if user got it wrong */}
              {showResults && isCorrect === false && (
                <div className="ml-11 mt-2 bg-blue-100 rounded-lg p-2 border-l-2 border-blue-500">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-900 font-semibold">
                      {shouldBeSelected ? '✓ This option SHOULD be selected' : '✗ This option should NOT be selected'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Explanation after results */}
      {showResults && question.explanation && (
        <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-blue-900 mb-1">Explanation</h5>
              <p className="text-sm text-slate-700 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};