/**
 * Problem Solution Page
 * Shows step-by-step instructions to solve a tech problem
 */

// ✅ ADD THIS PART (STATIC EXPORT FIX)
import { problems } from '@/data';

export async function generateStaticParams() {
  return problems.map((problem: { id: string }) => ({
    id: problem.id,
  }));
}
// ✅ END FIX

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProblemById, getCategoryName } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Image as ImageIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProblemPageProps {
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

export default function ProblemPage({ params }: ProblemPageProps) {
  const problem = getProblemById(params.id);

  if (!problem) {
    notFound();
  }

  const categoryName = getCategoryName(problem.categoryId);
  const diffConfig = difficultyConfig[problem.difficulty];
  const DiffIcon = diffConfig.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Početna
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/kategorija/${problem.categoryId}`}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">
              {problem.title}
            </span>
          </div>

          {/* Title and Description */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {problem.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            {problem.description}
          </p>

          {/* Difficulty Badge */}
          <Badge
            className={cn(
              'flex items-center gap-1.5 w-fit',
              diffConfig.color
            )}
          >
            <DiffIcon className="h-4 w-4" />
            {diffConfig.label}
          </Badge>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Koraci za rješavanje
        </h2>

        <div className="space-y-8">
          {problem.steps.map((step, index) => (
            <Card key={step.number} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                  {/* Step Number */}
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    {index < problem.steps.length - 1 && (
                      <div className="hidden md:block w-0.5 flex-1 bg-border min-h-[60px]" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-wrap">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Message */}
        <Card className="mt-12 border-success/50 bg-success/5">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gotovo!</h3>
            <p className="text-muted-foreground">
              Ako ste slijedili sve korake, vaš problem bi trebao biti riješen.
              Ako problem i dalje postoji, pokušajte ponoviti korake ili nas
              kontaktirajte za pomoć.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 pb-12 md:pb-16 max-w-4xl">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href={`/kategorija/${problem.categoryId}`}
            className="inline-flex items-center text-primary hover:underline"
          >
            ← Nazad na {categoryName}
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center text-primary hover:underline"
          >
            Trebate pomoć? Kontaktirajte nas →
          </Link>
        </div>
      </section>
    </div>
  );
}
