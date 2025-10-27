import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ClipboardCheck, Mail, CheckCircle, HelpCircle, Award, Target, Sparkles } from 'lucide-react';

// Types
interface Question {
  id: number;
  text: string;
  options?: string[];
  type: 'multiple-choice' | 'true-false' | 'table';
  tableData?: {
    headers: string[];
    rows: string[];
  };
}

interface QuestionSet {
  id: number;
  title: string;
  questions: Question[];
}

// Sample data
const selfStudyQuestions: QuestionSet[] = [
  {
    id: 1,
    title: "Anti-cancer Drugs & Chemotherapy",
    questions: [
      {
        id: 1,
        text: "Select true/false regarding anti-cancer drugs/anti-cancer chemotherapy:",
        type: "multiple-choice",
        options: [
          "Mainly used to treat cancer",
          "Anti-cancer drugs are considered hazardous drugs",
          "Many anti-cancer drugs belong to the cytotoxic drug group",
          "Chemotherapy destroys cancer cells",
          "Chemotherapy acts on both cancer cells and healthy cells in the body"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Routes of Occupational Exposure",
    questions: [
      {
        id: 2,
        text: "Possible routes of occupational exposure included:",
        type: "multiple-choice",
        options: [
          "Dermal contact",
          "Inhalation of vapours/drug particles",
          "Ingestion",
          "Needle prick injuries",
          "Contact with excreta of patients who have undergone chemotherapy"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Drug Particle Creation",
    questions: [
      {
        id: 3,
        text: "Inhalable drug particles/droplets/particles are created by:",
        type: "multiple-choice",
        options: [
          "Preparation of parenteral drugs",
          "Priming IV syringes/tubes",
          "Administering drugs into the IV line/administer IV drugs",
          "Leakage of drugs",
          "Cleaning and decontamination of drug spills"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Adverse Effects of Exposure",
    questions: [
      {
        id: 4,
        text: "Occupational exposure to chemotherapy may lead to acute/long-term adverse effects:",
        type: "table",
        tableData: {
          headers: ["Adverse Effect", "True", "False", "Do not know"],
          rows: [
            "Headache/Dizziness/Drowsy",
            "Nausea/vomiting",
            "Breathing difficulties",
            "Allergy/skin/eye irritation",
            "Miscarriages/fetal loss",
            "Congenital disabilities/intrauterine growth retardation/low birth weight",
            "Sub-fertility/infertility",
            "Cancer/leukaemia/Genetic/chromosomal changes",
            "Hair loss/speedy grey hair",
            "Anaemia/reduction of blood cell count"
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: "Safety Practices & Procedures",
    questions: [
      {
        id: 5,
        text: "Safety practices and procedures:",
        type: "table",
        tableData: {
          headers: ["Statement", "True", "False", "Do not know"],
          rows: [
            "All steps related to preparing chemotherapy need to be done within proper functioning BSC or isolator",
            "Priming CD-containing syringes/IV tubes into open areas/dustbins/bedside is not an issue",
            "Chemotherapy drugs need to be handled/stored separately from other drugs",
            "The excreta of patients who take chemotherapy need to be treated as hazardous waste",
            "Sharps and syringes should be disposed of in rigid-walled sharps container and segregated from other wastes",
            "Needles should be recapped before being disposed of to prevent needle stick injury",
            "Persons collecting hazardous wastes must take precautions while collecting/transferring",
            "Excreta-contaminated linen/cloths should be washed in machine, not by hand",
            "Seal contact material in plastic bag for transport to chemotherapeutic waste container",
            "Alcohol 70% is effective in removing all types of chemotherapy residue"
          ]
        }
      }
    ]
  }
];

// Question Card Component
const QuestionCard: React.FC<{ question: Question; setNumber: number }> = ({ question, setNumber }) => {
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
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-slate-900 mb-4">{question.text}</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 to-blue-600">
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
                        className="w-4 h-4 text-teal-600 focus:ring-teal-500"
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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h4 className="font-bold text-slate-900 mb-4">{question.text}</h4>
      <div className="space-y-3">
        {question.options?.map((option, idx) => (
          <label key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <input
              type="checkbox"
              checked={selectedAnswers[option] === 'true'}
              onChange={() => handleCheckboxChange(option)}
              className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
            />
            <span className="text-slate-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Invitation Card Component
const InvitationCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string }> = ({ 
  title, 
  description, 
  icon, 
  color 
}) => (
  <div className={`${color} rounded-2xl p-8 shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-white/90 leading-relaxed">{description}</p>
    <button className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition shadow-lg flex items-center gap-2">
      Participate Now
      <ArrowLeft className="w-4 h-4 rotate-180" />
    </button>
  </div>
);

// Main Component
interface MorePageProps {
  onBack: () => void;
}

const MorePage: React.FC<MorePageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'invitations' | 'questions'>('invitations');
  const [activeQuestionSet, setActiveQuestionSet] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:text-teal-600 font-medium transition rounded-lg hover:bg-teal-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900">More Resources</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enhance Your Learning Journey
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Access research opportunities and test your knowledge with our comprehensive self-study questions
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 bg-white rounded-xl shadow-lg p-2">
            <button
              onClick={() => setActiveTab('invitations')}
              className={`flex-1 px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                activeTab === 'invitations'
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Mail className="w-5 h-5" />
              Research Invitations
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`flex-1 px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                activeTab === 'questions'
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ClipboardCheck className="w-5 h-5" />
              Self-Study Questions
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'invitations' && (
            <div className="space-y-6">
              <InvitationCard
                title="Research Study Participation"
                description="We invite you to complete the Google Form to contribute to a valuable study on 'Effectiveness of an educational intervention to minimize the associated factors for occupational exposure to Systemic Anti-Cancer Therapy (SACT) among nurses'. Your participation will help improve safety practices in oncology nursing."
                icon={<Target className="w-8 h-8 text-white" />}
                color="bg-gradient-to-br from-teal-600 to-blue-600"
              />
              
              <InvitationCard
                title="Improve Your Knowledge & Practice"
                description="You are invited to complete self-study questions to improve your knowledge and practice in the safe handling of chemotherapy. These questions are designed to reinforce your understanding and help you apply safety precautions effectively in your daily practice."
                icon={<BookOpen className="w-8 h-8 text-white" />}
                color="bg-gradient-to-br from-purple-600 to-pink-600"
              />

              {/* Benefits Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-500" />
                  Why Participate?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Contribute to advancing oncology nursing safety",
                    "Enhance your professional knowledge base",
                    "Stay updated with best practices",
                    "Support evidence-based practice development"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              {/* Question Set Navigation */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-6 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                  {selfStudyQuestions.map((set, idx) => (
                    <button
                      key={set.id}
                      onClick={() => setActiveQuestionSet(idx)}
                      className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                        activeQuestionSet === idx
                          ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {set.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {selfStudyQuestions[activeQuestionSet].title}
                  </h3>
                  <p className="text-white/90">
                    Test your knowledge and understanding of this important topic
                  </p>
                </div>

                {selfStudyQuestions[activeQuestionSet].questions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    setNumber={selfStudyQuestions[activeQuestionSet].id}
                  />
                ))}

                {/* Submit Button */}
                <div className="flex justify-center gap-4 pt-6">
                  <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-xl hover:shadow-2xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Submit Answers
                  </button>
                  <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold transition shadow-lg flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MorePage;