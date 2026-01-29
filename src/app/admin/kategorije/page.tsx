/**
 * Admin Categories Management
 * Manage tech categories
 */

import { categories } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Upravljanje kategorijama</h1>
          <p className="text-muted-foreground">Dodajte, uredite ili obrišite kategorije</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova kategorija
        </Button>
      </div>

      {/* Categories List */}
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription className="mt-2">{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{category.icon}</Badge>
                <Badge variant="outline">{category.gradient}</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Uredi
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Obriši
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Note */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Napomena:</strong> Ovo je demo verzija. Puna CRUD funkcionalnost (Dodaj, Uredi,
            Obriši) će biti implementirana sa backend integracijom.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
