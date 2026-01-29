/**
 * Admin FAQ Management
 * Manage frequently asked questions
 */

import { faqs } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminFAQPage() {
  const generalFAQs = faqs.filter((f) => f.category === 'general');
  const learnfixFAQs = faqs.filter((f) => f.category === 'learnfix');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Upravljanje FAQ</h1>
          <p className="text-muted-foreground">
            Dodajte i uredite često postavljana pitanja
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo pitanje
        </Button>
      </div>

      {/* General Tech FAQs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Opšta tehnologija ({generalFAQs.length})</h2>
        <div className="space-y-3">
          {generalFAQs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-base mb-2">{faq.question}</CardTitle>
                    <CardDescription className="line-clamp-2">{faq.answer}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* LearnFix FAQs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">O LearnFix-u ({learnfixFAQs.length})</h2>
        <div className="space-y-3">
          {learnfixFAQs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-base mb-2">{faq.question}</CardTitle>
                    <CardDescription className="line-clamp-2">{faq.answer}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Info Note */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Napomena:</strong> Ovo je demo verzija. Puna CRUD funkcionalnost će biti
            implementirana sa backend integracijom.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
