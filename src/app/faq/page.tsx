/**
 * FAQ Page
 * Frequently Asked Questions with accordion components
 */

import Link from 'next/link';
import { getAllFAQs, getFAQsByCategory } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, BookOpen, Info } from 'lucide-react';

export default function FAQPage() {
  const generalFAQs = getFAQsByCategory('general');
  const learnfixFAQs = getFAQsByCategory('learnfix');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent py-12 px-4 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Često postavljana pitanja
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronađite odgovore na najčešća pitanja o tehnologiji i korištenju LearnFix platforme
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Opšta tehnologija</span>
            </TabsTrigger>
            <TabsTrigger value="learnfix" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>O LearnFix-u</span>
            </TabsTrigger>
          </TabsList>

          {/* General Tech FAQs */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Opšta tehnološka pitanja</CardTitle>
                <CardDescription>
                  Odgovori na najčešća pitanja o tehnologiji, sigurnosti i hardveru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={faq.id} value={`general-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LearnFix FAQs */}
          <TabsContent value="learnfix">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">O LearnFix platformi</CardTitle>
                <CardDescription>
                  Sve što trebate znati o korištenju LearnFix-a
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {learnfixFAQs.map((faq, index) => (
                    <AccordionItem key={faq.id} value={`learnfix-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Still have questions card */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Niste pronašli odgovor?</h3>
            <p className="text-muted-foreground mb-6">
              Slobodno nas kontaktirajte i rado ćemo vam pomoći!
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Kontaktirajte nas
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
