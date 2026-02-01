import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryById, getProblemsByCategoryId, categories } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ===========================
   ✅ REQUIRED FOR STATIC EXPORT
   =========================== */
export async function generateStaticParams() {
  return categories.map((category: { id: string }) => ({
    id: category.id,
  }));
}
/* =========================== */

interface CategoryPageProps {
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryById(params.id);

  if (!category) {
    notFound();
  }

  const problems = await getProblemsByCategoryId(params.id);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 to-accent py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Početna
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{category.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {category.description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Česti problemi i rješenja
        </h2>

        {problems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground text-lg">
                Trenutno nema dostupnih problema za ovu kategoriju.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {problems.map((problem) => {
              const diffConfig = difficultyConfig[problem.difficulty];
              const DiffIcon = diffConfig.icon;

              return (
                <Link
                  key={problem.id}
                  href={`/problem/${problem.id}`}
                  className="block group"
                >
                  <Card className="transition-all duration-300 hover:scale-102 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                            {problem.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {problem.description}
                          </CardDescription>
                        </div>
                        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <Badge className={cn('flex items-center gap-1.5', diffConfig.color)}>
                          <DiffIcon className="h-3.5 w-3.5" />
                          {diffConfig.label}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {problem.steps.length} koraka
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-16 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-primary hover:underline">
          ← Nazad na početnu
        </Link>
      </section>
    </div>
  );
}
