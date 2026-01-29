/**
 * Quiz Hub Page
 * Browse all quizzes organized by difficulty level
 */

import Link from 'next/link';
import { getAllQuizzes, getCategoryName } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, Lightbulb, Trophy, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const difficultyConfig = {
  beginner: {
    label: 'Početnik',
    color: 'bg-success text-success-foreground',
    icon: CheckCircle,
    description: 'Osnovno znanje za početnike',
  },
  intermediate: {
    label: 'Srednji',
    color: 'bg-warning text-warning-foreground',
    icon: AlertCircle,
    description: 'Malo naprednije teme',
  },
  advanced: {
    label: 'Napredni',
    color: 'bg-destructive text-destructive-foreground',
    icon: Lightbulb,
    description: 'Ekspertsko znanje',
  },
};

export default function QuizzesPage() {
  const allQuizzes = getAllQuizzes();

  const beginnerQuizzes = allQuizzes.filter((q) => q.difficulty === 'beginner');
  const intermediateQuizzes = allQuizzes.filter((q) => q.difficulty === 'intermediate');
  const advancedQuizzes = allQuizzes.filter((q) => q.difficulty === 'advanced');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent py-12 px-4 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Testirajte svoje znanje
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Odaberite nivo težine i provjerite koliko ste naučili o tehnologiji
          </p>
        </div>
      </section>

      {/* Quizzes by Difficulty */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Početnik</span>
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Srednji</span>
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Napredni</span>
            </TabsTrigger>
          </TabsList>

          {/* Beginner Quizzes */}
          <TabsContent value="beginner" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Početni nivo</h2>
              <p className="text-muted-foreground">
                {difficultyConfig.beginner.description}
              </p>
            </div>
            <QuizList quizzes={beginnerQuizzes} difficulty="beginner" />
          </TabsContent>

          {/* Intermediate Quizzes */}
          <TabsContent value="intermediate" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Srednji nivo</h2>
              <p className="text-muted-foreground">
                {difficultyConfig.intermediate.description}
              </p>
            </div>
            <QuizList quizzes={intermediateQuizzes} difficulty="intermediate" />
          </TabsContent>

          {/* Advanced Quizzes */}
          <TabsContent value="advanced" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Napredni nivo</h2>
              <p className="text-muted-foreground">
                {difficultyConfig.advanced.description}
              </p>
            </div>
            <QuizList quizzes={advancedQuizzes} difficulty="advanced" />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

function QuizList({
  quizzes,
  difficulty,
}: {
  quizzes: any[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}) {
  const diffConfig = difficultyConfig[difficulty];
  const DiffIcon = diffConfig.icon;

  if (quizzes.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">
            Trenutno nema kvizova za ovaj nivo.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {quizzes.map((quiz) => (
        <Link key={quiz.id} href={`/kviz/${quiz.id}`} className="block group">
          <Card className="h-full transition-all duration-300 hover:scale-102 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                    {quiz.title}
                  </CardTitle>
                  <CardDescription>{quiz.description}</CardDescription>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className={cn('flex items-center gap-1.5', diffConfig.color)}>
                  <DiffIcon className="h-3.5 w-3.5" />
                  {diffConfig.label}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {quiz.questions.length} pitanja
                </span>
                <span className="text-sm text-muted-foreground">
                  {getCategoryName(quiz.categoryId)}
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
