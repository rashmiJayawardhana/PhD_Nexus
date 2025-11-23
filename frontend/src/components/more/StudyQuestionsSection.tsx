// src/components/more/StudyQuestionsSection.tsx
import { useState } from 'react';
import { ClipboardCheck, CheckCircle, RotateCcw, Award, TrendingUp } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { selfStudyQuestions } from '@/data/resourcesData';

export const StudyQuestionsSection: React.FC = () => {
  const [activeQuestionSet, setActiveQuestionSet] = useState(0);

  const handleSubmit = () => {
    alert('Answers submitted! In a full implementation, this would send data to a backend for scoring.');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all answers?')) {
      window.location.reload();
    }
  };

  return (
    <section className="py-12 px-6 bg-linear-to-br from-teal-50 to-blue-50" id="questions">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <ClipboardCheck className="w-5 h-5" />
            <span className="font-medium">Test Your Knowledge</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Self-Study Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Reinforce your learning and assess your understanding of chemotherapy safety practices 
            with these comprehensive self-study questions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-teal-200">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Improve Knowledge</h3>
            <p className="text-sm text-slate-600">
              Test and strengthen your understanding of key safety concepts
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Track Progress</h3>
            <p className="text-sm text-slate-600">
              Identify areas for improvement in your practice
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Verify Learning</h3>
            <p className="text-sm text-slate-600">
              Confirm your readiness to apply safety measures
            </p>
          </div>
        </div>

        {/* Question Set Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {selfStudyQuestions.map((set, idx) => (
              <button
                key={set.id}
                onClick={() => setActiveQuestionSet(idx)}
                className={`px-5 py-3 rounded-lg font-medium transition whitespace-nowrap ${
                  activeQuestionSet === idx
                    ? 'bg-linear-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="font-bold mr-2">Set {idx + 1}:</span>
                {set.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Question Set */}
        <div className="space-y-6">
          {/* Set Header */}
          <div className="bg-linear-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Question Set {activeQuestionSet + 1}
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {selfStudyQuestions[activeQuestionSet].title}
                </h3>
                {selfStudyQuestions[activeQuestionSet].description && (
                  <p className="text-white/90">
                    {selfStudyQuestions[activeQuestionSet].description}
                  </p>
                )}
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {selfStudyQuestions[activeQuestionSet].questions.length}
                  </div>
                  <div className="text-sm text-white/80">Questions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Questions */}
          {selfStudyQuestions[activeQuestionSet].questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              setNumber={selfStudyQuestions[activeQuestionSet].id}
            />
          ))}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button 
              onClick={handleSubmit}
              className="bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Submit Answers
            </button>
            <button 
              onClick={handleReset}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold transition shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Reset All
            </button>
          </div>
        </div>

        {/* Tip Box */}
        <div className="mt-10 bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            💡 Study Tip
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            Take your time with each question and refer back to the learning materials if needed. 
            These questions are designed to help you identify knowledge gaps and reinforce key concepts. 
            Consider reviewing the relevant chapter content before attempting each question set.
          </p>
        </div>
      </div>
    </section>
  );
};