import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isRisk: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mx-auto animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.isRisk)}
            className={`w-full p-4 text-left rounded-lg transition-all duration-200 flex items-center
              ${option.isRisk 
                ? 'bg-orange-50 hover:bg-orange-100 border border-orange-200' 
                : 'bg-teal-50 hover:bg-teal-100 border border-teal-200'}`}
          >
            <span className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 
              ${option.isRisk ? 'bg-orange-500' : 'bg-teal-500'}`}></span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;