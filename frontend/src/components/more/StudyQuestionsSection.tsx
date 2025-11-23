// src/components/more/StudyQuestionsSection.tsx
import { useState } from 'react';
import { ClipboardCheck, CheckCircle, RotateCcw, Award, TrendingUp, Trophy, Target } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { selfStudyQuestions } from '@/data/resourcesData';
import type { QuizResult } from '@/types/resources';

export const StudyQuestionsSection: React.FC = () => {
  const [activeQuestionSet, setActiveQuestionSet] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, Record<string, boolean | string>>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleAnswerChange = (questionId: number, answers: Record<string, boolean | string>) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answers
    }));
  };

  const calculateResults = (): QuizResult => {
    const questionSet = selfStudyQuestions[activeQuestionSet];
    let correctCount = 0;
    let totalQuestions = questionSet.questions.length;
    const answeredQuestions: Record<number, any> = {};

    questionSet.questions.forEach(question => {
      const userAnswer = userAnswers[question.id] || {};
      const correctAnswers = question.correctAnswers || {};
      
      let isQuestionCorrect = true;

      // Check if all answers match
      Object.keys(correctAnswers).forEach(key => {
        const correct = correctAnswers[key];
        const user = userAnswer[key];

        if (typeof correct === 'boolean') {
          // For multiple choice - check if selection matches
          if (correct && !user) isQuestionCorrect = false;
          if (!correct && user) isQuestionCorrect = false;
        } else if (typeof correct === 'string') {
          // For table questions
          if (user !== correct) isQuestionCorrect = false;
        }
      });

      // Also check if user selected any wrong options for multiple choice
      Object.keys(userAnswer).forEach(key => {
        if (correctAnswers[key] === undefined && userAnswer[key]) {
          isQuestionCorrect = false;
        }
      });

      if (isQuestionCorrect) correctCount++;
      
      answeredQuestions[question.id] = {
        userAnswers: userAnswer,
        isCorrect: isQuestionCorrect
      };
    });

    return {
      questionSetId: questionSet.id,
      totalQuestions,
      correctAnswers: correctCount,
      incorrectAnswers: totalQuestions - correctCount,
      score: Math.round((correctCount / totalQuestions) * 100),
      answeredQuestions
    };
  };

  const handleSubmit = () => {
    const result = calculateResults();
    setQuizResult(result);
    setShowResults(true);
    
    // Scroll to top to show results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all answers? This will clear your current progress.')) {
      setUserAnswers({});
      setShowResults(false);
      setQuizResult(null);
    }
  };

  const handleChangeSet = (index: number) => {
    if (showResults) {
      if (confirm('Changing question sets will reset your current results. Continue?')) {
        setActiveQuestionSet(index);
        setUserAnswers({});
        setShowResults(false);
        setQuizResult(null);
      }
    } else {
      setActiveQuestionSet(index);
      setUserAnswers({});
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-yellow-500 to-amber-600';
    return 'from-red-500 to-rose-600';
  };

  const getScoreMessage = (score: number) => {
    if (score === 100) return '🎉 Perfect Score! Excellent work!';
    if (score >= 80) return '🌟 Great job! You have a strong understanding!';
    if (score >= 60) return '👍 Good effort! Review the explanations to improve.';
    return '📚 Keep studying! Review the materials and try again.';
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

        {/* Results Summary */}
        {showResults && quizResult && (
          <div className="mb-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className={`bg-linear-to-r ${getScoreColor(quizResult.score)} p-8 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Quiz Complete!</h3>
                  <p className="text-white/90 text-lg">{getScoreMessage(quizResult.score)}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Trophy className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-5xl font-bold">{quizResult.score}%</div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-linear-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-3xl font-bold text-blue-900 mb-1">{quizResult.totalQuestions}</div>
                  <div className="text-sm text-slate-600">Total Questions</div>
                </div>
                
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <div className="text-3xl font-bold text-green-900 mb-1">{quizResult.correctAnswers}</div>
                  <div className="text-sm text-slate-600">Correct Answers</div>
                </div>
                
                <div className="bg-linear-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
                  <Award className="w-8 h-8 text-red-600 mb-3" />
                  <div className="text-3xl font-bold text-red-900 mb-1">{quizResult.incorrectAnswers}</div>
                  <div className="text-sm text-slate-600">Needs Review</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">📖 Review Your Answers</h4>
                <p className="text-sm text-slate-700">
                  Scroll down to see detailed feedback on each question. Green indicates correct answers, 
                  red shows areas to review. Read the explanations to strengthen your understanding.
                </p>
              </div>
            </div>
          </div>
        )}

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
            <h3 className="font-bold text-slate-900 mb-2">Instant Feedback</h3>
            <p className="text-sm text-slate-600">
              Get immediate results and detailed explanations
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Track Progress</h3>
            <p className="text-sm text-slate-600">
              See your score and identify areas for improvement
            </p>
          </div>
        </div>

        {/* Question Set Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {selfStudyQuestions.map((set, idx) => (
              <button
                key={set.id}
                onClick={() => handleChangeSet(idx)}
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
              showResults={showResults}
              onAnswerChange={handleAnswerChange}
            />
          ))}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            {!showResults ? (
              <button 
                onClick={handleSubmit}
                className="bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Submit & Check Answers
              </button>
            ) : (
              <button 
                onClick={handleReset}
                className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            )}
          </div>
        </div>

        {/* Study Tip */}
        <div className="mt-10 bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            💡 Study Tip
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            {!showResults 
              ? "Answer all questions carefully before submitting. You can change your answers before submission. Once submitted, you'll receive immediate feedback with explanations."
              : "Review the explanations for questions you missed. Understanding why an answer is correct helps reinforce your learning. You can try again to test your improved knowledge!"
            }
          </p>
        </div>
      </div>
    </section>
  );
};