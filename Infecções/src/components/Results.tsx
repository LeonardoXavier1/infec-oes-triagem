import React from 'react';
import { Sparkles, AlertTriangle, ArrowLeft } from 'lucide-react';
import ResultsEvaluation from './ResultsEvaluation';
import { EvaluationResult } from '../types';

interface ResultsProps {
  hasRisk: boolean;
  onRestart: () => void;
  onStartEvaluation: () => void;
  evaluationResult?: EvaluationResult;
  onEvaluationComplete: (result: EvaluationResult) => void;
  showEvaluation: boolean;
}

const Results: React.FC<ResultsProps> = ({ 
  hasRisk, 
  onRestart, 
  onStartEvaluation,
  evaluationResult,
  onEvaluationComplete,
  showEvaluation
}) => {
  if (showEvaluation) {
    return (
      <ResultsEvaluation
        onComplete={onEvaluationComplete}
        currentResult={evaluationResult}
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mx-auto animate-fadeIn">
      {hasRisk ? (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <AlertTriangle size={48} className="text-orange-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Encaminhamento Necessário</h2>
          <p className="text-gray-600 mb-6">
            Com base em suas respostas, recomendamos que você procure atendimento profissional. 
            Um profissional de saúde poderá avaliar sua condição adequadamente.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-orange-800 mb-2">Por que o encaminhamento é necessário?</h3>
            <p className="text-orange-700">
              Você apresenta um ou mais fatores que necessitam de avaliação especializada para garantir 
              um diagnóstico correto e um tratamento seguro e eficaz.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal-100 rounded-full">
              <Sparkles size={48} className="text-teal-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Autocuidado Possível</h2>
          <p className="text-gray-600 mb-6">
            Com base em suas respostas, você pode tratar esta condição com autocuidado. 
            Veja as recomendações abaixo:
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4 text-left">
            <h3 className="font-semibold text-teal-800 mb-2">Cuidados não farmacológicos:</h3>
            <ul className="list-disc pl-5 text-teal-700 space-y-1">
              <li>Lavar e secar bem a área afetada</li>
              <li>Evitar compartilhar objetos de uso pessoal</li>
              <li>Manter a pele limpa e seca</li>
              <li>Trocar meias e roupas íntimas diariamente</li>
              <li>Evitar coçar a região afetada</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-blue-800 mb-2">Tratamento farmacológico:</h3>
            <p className="text-blue-700 mb-2">
              Antifúngicos tópicos isentos de prescrição, como:
            </p>
            <ul className="list-disc pl-5 text-blue-700 space-y-1">
              <li>Cetoconazol</li>
              <li>Terbinafina</li>
              <li>Miconazol</li>
              <li>Clotrimazol</li>
            </ul>
            <p className="text-blue-700 mt-2 text-sm">
              Aplique conforme orientação da bula, geralmente 1-2 vezes ao dia por 1-4 semanas.
            </p>
          </div>
        </div>
      )}
      <div className="space-y-3">
        <button
          onClick={onStartEvaluation}
          className="flex items-center justify-center w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-200"
        >
          Avaliar Resultados do Tratamento
        </button>
        <button
          onClick={onRestart}
          className="flex items-center justify-center w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Reiniciar triagem
        </button>
      </div>
    </div>
  );
};

export default Results;