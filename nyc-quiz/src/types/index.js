// Union Type for strict literal values
export type Difficulty = 'easy' | 'medium' | 'hard';

// Interface defining the shape of our data
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  isComplete: boolean;
  userAnswers: Record<number, string>; // Object mapping question IDs to string answers
}