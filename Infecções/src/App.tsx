import React, { useState } from 'react';
import { questions } from './data/questions';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import Welcome from './components/Welcome';
import { ScreeningState, EvaluationResult } from './types';

function App() {
  const [state, setState] = useState<ScreeningState>({
    currentQuestion: 0,
    totalQuestions: questions.length,
    answers: {},
    completed: false,
    showEvaluation: false,
  });

  const hasAnyRisk = Object.values(state.answers).some(isRisk => isRisk);

  const handleStart = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: 1,
    }));
  };

  const handleAnswer = (isRisk: boolean) => {
    setState(prev => {
      const newAnswers = {
        ...prev.answers,
        [prev.currentQuestion]: isRisk,
      };

      const isCompleted = prev.currentQuestion === prev.totalQuestions;
      
      return {
        ...prev,
        answers: newAnswers,
        currentQuestion: isCompleted ? prev.currentQuestion : prev.currentQuestion + 1,
        completed: isCompleted,
      };
    });
  };

  const handleRestart = () => {
    setState({
      currentQuestion: 0,
      totalQuestions: questions.length,
      answers: {},
      completed: false,
      showEvaluation: false,
    });
  };

  const handleStartEvaluation = () => {
    setState(prev => ({
      ...prev,
      showEvaluation: true,
    }));
  };

  const handleEvaluationComplete = (result: EvaluationResult) => {
    setState(prev => ({
      ...prev,
      showEvaluation: false,
      evaluationResult: result,
    }));
  };

  let content;
  if (state.currentQuestion === 0) {
    content = <Welcome onStart={handleStart} />;
  } else if (state.completed) {
    content = (
      <Results 
        hasRisk={hasAnyRisk}
        onRestart={handleRestart}
        onStartEvaluation={handleStartEvaluation}
        showEvaluation={state.showEvaluation}
        evaluationResult={state.evaluationResult}
        onEvaluationComplete={handleEvaluationComplete}
      />
    );
  } else {
    const currentQuestion = questions.find(q => q.id === state.currentQuestion);
    if (currentQuestion) {
      content = <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto">
        {state.currentQuestion > 0 && !state.completed && (
          <div className="max-w-xl mx-auto px-4">
            <ProgressBar 
              currentStep={state.currentQuestion} 
              totalSteps={state.totalQuestions} 
            />
          </div>
        )}
        {content}
      </div>
    </div>
  );
}

export default App;