/**
 * Admin Quizzes Management
 * Manage quizzes and questions
 */

import { quizzes, getCategoryName } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

const difficultyLabels = {
  beginner: { label: 'Početnik', color: 'bg-success text-success-foreground' },
  intermediate: { label: 'Srednji', color: 'bg-warning text-warning-foreground' },
  advanced: { label: 'Napredni', color: 'bg-destructive text-destructive-foreground' },
};

export default function AdminQuizzesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Upravljanje kvizovima</h1>
          <p className="text-muted-foreground">Kreirajte i uredite kvizove i pitanja</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novi kviz
        </Button>
      </div>

      {/* Quizzes List */}
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="mb-2">{quiz.title}</CardTitle>
                  <CardDescription>{quiz.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline">{getCategoryName(quiz.categoryId)}</Badge>
                    <Badge className={difficultyLabels[quiz.difficulty].color}>
                      {difficultyLabels[quiz.difficulty].label}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {quiz.questions.length} pitanja
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/kviz/${quiz.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      Pogledaj
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Uredi
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Obriši
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Info Note */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Napomena:</strong> Ovo je demo verzija. Quiz builder sa drag-and-drop pitanjima
            će biti implementiran sa backend integracijom.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
