'use client';

/**
 * Quiz Results Page
 * Shows final score and review of all answers with explanations
 */

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getQuizById } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizResultsPageProps {
  params: {
    id: string;
  };
}

export default function QuizResultsPage({ params }: QuizResultsPageProps) {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0');
  const total = parseInt(searchParams.get('total') || '0');

  const quiz = getQuizById(params.id);

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

  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;

  // Determine performance message
  let performanceMessage = '';
  let performanceColor = '';
  if (percentage === 100) {
    performanceMessage = 'Savršeno! Sve tačno!';
    performanceColor = 'text-success';
  } else if (percentage >= 80) {
    performanceMessage = 'Odlično! Vrlo dobro znanje!';
    performanceColor = 'text-success';
  } else if (percentage >= 60) {
    performanceMessage = 'Dobro! Položili ste!';
    performanceColor = 'text-primary';
  } else {
    performanceMessage = 'Pokušajte ponovo nakon pregleda materijala';
    performanceColor = 'text-destructive';
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Results Header */}
        <Card className="mb-8 overflow-hidden">
          <div
            className={cn(
              'p-8 text-center',
              passed
                ? 'bg-gradient-to-br from-success/20 to-success/5'
                : 'bg-gradient-to-br from-destructive/20 to-destructive/5'
            )}
          >
            <Trophy
              className={cn(
                'h-16 w-16 mx-auto mb-4',
                passed ? 'text-success' : 'text-destructive'
              )}
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{quiz.title}</h1>
            <p className={cn('text-xl font-semibold mb-4', performanceColor)}>
              {performanceMessage}
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div>
                <div className="text-4xl font-bold">
                  {score}/{total}
                </div>
                <div className="text-sm text-muted-foreground">Tačnih odgovora</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{percentage}%</div>
                <div className="text-sm text-muted-foreground">Uspješnost</div>
              </div>
            </div>
            <Progress value={percentage} className="mt-6 h-3" />
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href={`/kviz/${quiz.id}`}>
              <RotateCcw className="h-5 w-5 mr-2" />
              Ponovi kviz
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/kvizovi">
              <Home className="h-5 w-5 mr-2" />
              Nazad na kvizove
            </Link>
          </Button>
        </div>

        {/* Questions Review */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Pregled pitanja</h2>
          {quiz.questions.map((question, index) => {
            // For demo purposes, show all correct answers
            // In a real app, you'd track user's actual answers
            const isCorrect = true; // This would come from actual user answers

            return (
              <Card key={question.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Badge
                      className={cn(
                        'flex-shrink-0',
                        isCorrect
                          ? 'bg-success text-success-foreground'
                          : 'bg-destructive text-destructive-foreground'
                      )}
                    >
                      Pitanje {index + 1}
                    </Badge>
                    <CardTitle className="text-lg">{question.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Options */}
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => {
                      const isCorrectOption = optionIndex === question.correctAnswerIndex;

                      return (
                        <div
                          key={optionIndex}
                          className={cn(
                            'p-3 rounded-lg border-2 flex items-center gap-3',
                            isCorrectOption
                              ? 'border-success bg-success/10'
                              : 'border-border bg-muted/30'
                          )}
                        >
                          {isCorrectOption ? (
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          ) : (
                            <div className="h-5 w-5" />
                          )}
                          <span className={isCorrectOption ? 'font-medium' : ''}>
                            {option}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Objašnjenje:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Želite naučiti više? Pogledajte naše tutorijale!
          </p>
          <Button asChild variant="outline">
            <Link href="/">Istraži teme</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
