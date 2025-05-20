import React from 'react';
import { ArrowRight, Shield, AlertTriangle, Sparkles, Activity } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Triagem Fúngica</h1>
            <p className="text-xl text-teal-100 max-w-2xl">
              Avaliação para determinar se seu caso é de autocuidado ou necessita de encaminhamento profissional
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Importance Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                A Importância do Cuidado com Infecções Fúngicas
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  As infecções fúngicas superficiais são condições comuns que afetam milhões de pessoas. 
                  Quando identificadas e tratadas adequadamente, a maioria dos casos pode ser resolvida 
                  com medidas simples de autocuidado.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-blue-800 mb-4 text-lg">Por que a identificação precoce é importante?</h3>
                  <ul className="text-blue-700 space-y-3 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Previne o agravamento da infecção
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Reduz o risco de disseminação
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Permite tratamento mais efetivo
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Evita complicações futuras
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prevention Tips */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-teal-600" />
                Dicas de Prevenção
              </h2>
              <div className="bg-teal-50 p-6 rounded-lg">
                <ul className="text-teal-700 space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Mantenha a pele sempre limpa e seca
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Evite compartilhar objetos de uso pessoal
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Use calçados que permitam ventilação
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Troque meias e roupas íntimas diariamente
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                    Seque bem as dobras do corpo após o banho
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Common Signs Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Activity className="h-6 w-6 mr-3 text-teal-600" />
                Sinais Comuns
              </h2>
              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4 text-lg">Pele</h3>
                  <ul className="text-gray-600 space-y-3 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Coceira
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Descamação
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Vermelhidão
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Manchas circulares
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4 text-lg">Unhas</h3>
                  <ul className="text-gray-600 space-y-3 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Alteração na cor
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Espessamento
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Fragilidade
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Deformidade
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warning and Instructions */}
            <section className="space-y-6">
              <div className="flex items-start p-6 bg-orange-50 rounded-lg border border-orange-200">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2 text-lg">Atenção</h3>
                  <p className="text-orange-700">
                    Este questionário é uma ferramenta de auxílio e não substitui uma consulta médica. 
                    Em caso de dúvida ou agravamento dos sintomas, procure sempre um profissional de saúde.
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">Como funciona a triagem?</h3>
                <div className="flex items-center mb-4">
                  <div className="h-6 w-6 bg-teal-500 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">
                    Opções em <span className="text-teal-600 font-medium">verde</span> indicam respostas que favorecem o autocuidado
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 bg-orange-500 rounded-full mr-4"></div>
                  <p className="text-gray-700 text-lg">
                    Opções em <span className="text-orange-600 font-medium">laranja</span> indicam critérios que podem requerer encaminhamento
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onStart}
            className="py-4 px-8 bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center justify-center transition duration-200 text-lg font-medium"
          >
            Iniciar triagem
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;