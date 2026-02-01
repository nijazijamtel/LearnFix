'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getQuizById } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizClientProps {
  id: string;
}

export default function QuizClient({ id }: QuizClientProps) {
  const router = useRouter();
  const quiz = getQuizById(id);

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<
    Array<{ questionId: string; isCorrect: boolean }>
  >([]);

  useEffect(() => {
    if (!quiz) return;

    const shuffled = quiz.questions.map((q) => {
      const indices = q.options.map((_: any, i: number) => i);

      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      return {
        ...q,
        options: indices.map((i) => q.options[i]),
        correctAnswerIndex: indices.indexOf(q.correctAnswerIndex),
        _key: crypto.randomUUID(),
      };
    });

    setQuestions(shuffled);
  }, [quiz]);

  if (!quiz || questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;

    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, isCorrect },
    ]);

    setShowFeedback(true);
  };

  const goNext = () => {
    if (isLastQuestion) {
      const score = answers.filter((a) => a.isCorrect).length;
      router.push(
        `/kviz/${quiz.id}/rezultati?score=${score}&total=${questions.length}`
      );
    } else {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/kvizovi" className="text-sm text-primary hover:underline">
          ← Nazad na kvizove
        </Link>

        <h1 className="text-2xl font-bold my-4">{quiz.title}</h1>

        <Progress value={progress} className="mb-6 h-2" />

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{currentQuestion.question}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {currentQuestion.options.map((option: string, index: number) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswerIndex;

              return (
                <button
                  key={`${currentQuestion._key}-${index}`}
                  disabled={showFeedback}
                  onClick={() => setSelectedAnswer(index)}
                  className={cn(
                    'w-full p-4 text-left rounded-lg border',
                    'transition-all duration-200 active:scale-[0.97]',

                    // default
                    'bg-background',

                    // 🔵 SELECTED (stronger light blue)
                    !showFeedback &&
                      isSelected &&
                      [
                        'border-blue-500',
                        'bg-blue-100/80',
                        'ring-4 ring-blue-300/60',
                        'shadow-lg',
                        'scale-[1.04]',
                      ],

                    // ✅ correct
                    showFeedback &&
                      isCorrect &&
                      'border-success bg-success/15 ring-2 ring-success/40 animate-pulse',

                    // ❌ wrong
                    showFeedback &&
                      isSelected &&
                      !isCorrect &&
                      'border-destructive bg-destructive/15 ring-2 ring-destructive/40'
                  )}
                >
                  {option}
                </button>
              );
            })}
          </CardContent>
        </Card>

        <Button
          size="lg"
          className="w-full"
          onClick={showFeedback ? goNext : handleSubmit}
          disabled={!showFeedback && selectedAnswer === null}
        >
          {showFeedback ? 'Sljedeće pitanje' : 'Potvrdi odgovor'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>

        <Dialog
          open={showFeedback}
          onOpenChange={(open) => {
            if (!open) goNext();
          }}
        >
          <DialogContent
            className="
              animate-in zoom-in-95
              [&>button]:top-4
              [&>button]:right-4
              [&>button]:h-8
              [&>button]:w-8
              [&>button]:rounded-full
              [&>button]:flex
              [&>button]:items-center
              [&>button]:justify-center
            "
          >
            <DialogHeader>
              <DialogTitle
                className={
                  selectedAnswer === currentQuestion.correctAnswerIndex
                    ? 'text-success'
                    : 'text-destructive'
                }
              >
                {selectedAnswer === currentQuestion.correctAnswerIndex
                  ? 'Tačno 🎉'
                  : 'Netačno ❌'}
              </DialogTitle>

              <DialogDescription className="mt-2 text-base">
                {currentQuestion.explanation}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
