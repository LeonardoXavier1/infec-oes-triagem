import React from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, XCircle, ArrowLeft } from 'lucide-react';
import { EvaluationResult } from '../types';

interface ResultsEvaluationProps {
  onComplete: (result: EvaluationResult) => void;
  currentResult?: EvaluationResult;
}

interface EvaluationOption {
  id: EvaluationResult;
  icon: React.ReactNode;
  title: string;
  description: string;
  recommendation: string;
  bgColor: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

const evaluationOptions: EvaluationOption[] = [
  {
    id: 'remission',
    icon: <CheckCircle2 size={24} />,
    title: 'Remissão da infecção fúngica superficial',
    description: 'Os sintomas desapareceram completamente.',
    recommendation: 'Continue com os cuidados e mantenha a pele limpa e seca.',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 'improvement',
    icon: <AlertCircle size={24} />,
    title: 'Diminuição da infecção fúngica superficial',
    description: 'Houve melhora, mas ainda existem sinais.',
    recommendation: 'Continue o tratamento e observe diariamente. Se não melhorar totalmente em alguns dias, procure orientação.',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    id: 'persistence',
    icon: <AlertTriangle size={24} />,
    title: 'Infecção fúngica superficial persiste',
    description: 'Os sintomas não mudaram.',
    recommendation: 'Reavalie os cuidados e procure um farmacêutico ou profissional de saúde.',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    id: 'worsening',
    icon: <XCircle size={24} />,
    title: 'Infecção fúngica superficial piorou',
    description: 'A infecção se espalhou, piorou ou surgiram novos sintomas.',
    recommendation: 'Procure atendimento médico imediatamente.',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600'
  }
];

const ResultsEvaluation: React.FC<ResultsEvaluationProps> = ({ onComplete, currentResult }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mx-auto animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Avaliação dos Resultados</h2>
      <p className="text-gray-600 mb-6 text-center">
        Compare seu quadro atual com as opções abaixo e selecione a que melhor descreve sua situação:
      </p>
      
      <div className="space-y-4">
        {evaluationOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onComplete(option.id)}
            className={`w-full p-4 rounded-lg transition-all duration-200 ${option.bgColor} border ${option.borderColor} hover:opacity-90`}
          >
            <div className="flex items-start">
              <div className={`${option.iconBg} p-2 rounded-full ${option.iconColor} flex-shrink-0 mr-4`}>
                {option.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-1">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                <p className="text-sm font-medium">{option.recommendation}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => onComplete(currentResult || 'remission')}
        className="flex items-center justify-center w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition duration-200 mt-6"
      >
        <ArrowLeft size={16} className="mr-2" />
        Voltar aos resultados
      </button>
    </div>
  );
};

export default ResultsEvaluation;