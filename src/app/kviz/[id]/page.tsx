'use client';

/**
 * Quiz Taking Page
 * Interactive quiz interface with instant feedback
 */

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getQuizById, getCategoryName } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle, XCircle, AlertCircle, Lightbulb, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizPageProps {
  params: {
    id: string;
  };
}

const difficultyConfig = {
  beginner: {
    label: 'Početnik',
    color: 'bg-success text-success-foreground',
    icon: CheckCircle,
  },
  intermediate: {
    label: 'Srednji',
    color: 'bg-warning text-warning-foreground',
    icon: AlertCircle,
  },
  advanced: {
    label: 'Napredni',
    color: 'bg-destructive text-destructive-foreground',
    icon: Lightbulb,
  },
};

export default function QuizPage({ params }: QuizPageProps) {
  const router = useRouter();
  const quiz = getQuizById(params.id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<
    Array<{ questionId: string; selectedAnswerIndex: number; isCorrect: boolean }>
  >([]);

  // Randomize answer order for all questions (only once on mount)
  const questionsWithShuffledAnswers = useMemo(() => {
    if (!quiz) return [];

    return quiz.questions.map((question) => {
      // Create array of indices to track original positions
      const shuffledIndices = question.options.map((_, index) => index);

      // Fisher-Yates shuffle algorithm
      for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }

      // Map shuffled options and find new correct answer index
      const shuffledOptions = shuffledIndices.map(i => question.options[i]);
      const newCorrectAnswerIndex = shuffledIndices.indexOf(question.correctAnswerIndex);

      return {
        ...question,
        options: shuffledOptions,
        correctAnswerIndex: newCorrectAnswerIndex,
        originalIndices: shuffledIndices,
      };
    });
  }, [quiz]);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-lg">Kviz nije pronađen</p>
            <Button asChild className="mt-4">
              <Link href="/kvizovi">Nazad na kvizove</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questionsWithShuffledAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsWithShuffledAnswers.length - 1;
  const progress = ((currentQuestionIndex + 1) / questionsWithShuffledAnswers.length) * 100;
  const diffConfig = difficultyConfig[quiz.difficulty];
  const DiffIcon = diffConfig.icon;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
    setShowFeedback(true);

    // Save answer
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedAnswerIndex: selectedAnswer,
        isCorrect,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Navigate to results page
      const score = answers.filter((a) => a.isCorrect).length;
      router.push(
        `/kviz/${quiz.id}/rezultati?score=${score}&total=${questionsWithShuffledAnswers.length}`
      );
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleDialogClose = (open: boolean) => {
    if (!open && showFeedback) {
      // Dialog is closing and feedback was shown - automatically advance to next question
      handleNextQuestion();
    } else {
      setShowFeedback(open);
    }
  };

  const isCorrectAnswer = selectedAnswer === currentQuestion.correctAnswerIndex;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Quiz Header */}
        <div className="mb-8">
          <Link
            href="/kvizovi"
            className="text-sm text-primary hover:underline inline-flex items-center mb-4"
          >
            ← Nazad na kvizove
          </Link>
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">{quiz.title}</h1>
            <Badge className={cn('flex items-center gap-1.5', diffConfig.color)}>
              <DiffIcon className="h-4 w-4" />
              {diffConfig.label}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              Pitanje {currentQuestionIndex + 1} od {quiz.questions.length}
            </span>
            <span>•</span>
            <span>{getCategoryName(quiz.categoryId)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="mb-8 h-2" />

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={cn(
                  'w-full text-left p-4 rounded-lg border-2 transition-all duration-300',
                  'hover:border-primary hover:bg-accent',
                  selectedAnswer === index && !showFeedback && 'border-primary bg-accent',
                  showFeedback &&
                    index === currentQuestion.correctAnswerIndex &&
                    'border-success bg-success/10',
                  showFeedback &&
                    selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex &&
                    'border-destructive bg-destructive/10',
                  showFeedback && 'cursor-not-allowed'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                      selectedAnswer === index && !showFeedback && 'border-primary bg-primary',
                      showFeedback &&
                        index === currentQuestion.correctAnswerIndex &&
                        'border-success bg-success'
                    )}
                  >
                    {selectedAnswer === index && !showFeedback && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                    {showFeedback && index === currentQuestion.correctAnswerIndex && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                  {showFeedback &&
                    selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex && (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!showFeedback ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              size="lg"
              className="flex-1"
            >
              Potvrdi odgovor
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} size="lg" className="flex-1">
              {isLastQuestion ? 'Pogledaj rezultate' : 'Sljedeće pitanje'}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          )}
        </div>

        {/* Feedback Dialog */}
        <Dialog open={showFeedback} onOpenChange={handleDialogClose}>
          <DialogContent>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                {isCorrectAnswer ? (
                  <CheckCircle className="h-8 w-8 text-success" />
                ) : (
                  <XCircle className="h-8 w-8 text-destructive" />
                )}
                <DialogTitle className="text-2xl">
                  {isCorrectAnswer ? 'Tačno!' : 'Netačno'}
                </DialogTitle>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-4">
                {currentQuestion.explanation}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
