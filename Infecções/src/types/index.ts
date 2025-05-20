export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    isRisk: boolean;
  }[];
}

export interface ScreeningState {
  currentQuestion: number;
  totalQuestions: number;
  answers: Record<number, boolean>;
  completed: boolean;
  showEvaluation: boolean;
  evaluationResult?: EvaluationResult;
}

export type EvaluationResult = 'remission' | 'improvement' | 'persistence' | 'worsening';