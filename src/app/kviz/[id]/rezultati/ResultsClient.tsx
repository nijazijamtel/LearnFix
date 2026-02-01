'use client';

/**
 * Quiz Results Page
 * Shows final score and review of all answers
 */

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getQuizById } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, RotateCcw, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsClientProps {
  id: string;
}

export default function ResultsClient({ id }: ResultsClientProps) {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get('score') || 0);
  const total = Number(searchParams.get('total') || 0);

  const quiz = getQuizById(id);

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

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 60;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="mb-8">
          <CardContent
            className={cn(
              'p-8 text-center',
              passed ? 'bg-success/10' : 'bg-destructive/10'
            )}
          >
            <Trophy
              className={cn(
                'h-16 w-16 mx-auto mb-4',
                passed ? 'text-success' : 'text-destructive'
              )}
            />
            <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
            <p className="text-xl mb-4">
              Rezultat: {score} / {total}
            </p>
            <div className="text-4xl font-bold mb-4">{percentage}%</div>
            <Progress value={percentage} className="h-3" />
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`/kviz/${quiz.id}`}>
              <RotateCcw className="h-5 w-5 mr-2" />
              Ponovi kviz
            </Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/kvizovi">
              <Home className="h-5 w-5 mr-2" />
              Nazad na kvizove
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
