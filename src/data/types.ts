/**
 * LearnFix Data Types
 * Type definitions for all mock data structures
 */

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Problem {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: ProblemStep[];
}

export interface ProblemStep {
  number: number;
  title: string;
  description: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  categoryId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'learnfix';
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: {
    questionId: string;
    selectedAnswerIndex: number;
    isCorrect: boolean;
  }[];
}
