/**
 * LearnFix Home Page
 * Landing page displaying all tech categories
 */

import { categories } from '@/data';
import { CategoryCard } from '@/components/category-card';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LearnFix</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-4 md:py-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Naučite tehnologiju jednostavno i bez stresa
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Odaberite kategoriju ispod i pronađite rješenja za vaše tehnološke probleme
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12 md:py-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Odaberite temu
          </h2>
          <p className="text-muted-foreground">
            Pretražite rješenja po kategorijama
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              icon={category.icon}
              gradient={category.gradient}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Testirajte svoje znanje!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Probajte naše kvizove različitih nivoa težine i provjerite koliko ste naučili. Sada sa preko 85 pitanja!
            </p>
            <Link
              href="/kvizovi"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Započni kviz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
