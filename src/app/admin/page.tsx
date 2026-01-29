'use client';

/**
 * Admin Dashboard
 * Main admin landing page with overview stats
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { categories, problems, quizzes, faqs } from '@/data';
import { FolderTree, FileText, ClipboardList, HelpCircle, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Kategorije',
      value: categories.length,
      description: 'Tehnološke kategorije',
      icon: FolderTree,
      href: '/admin/kategorije',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Problemi',
      value: problems.length,
      description: 'Tutorijali za probleme',
      icon: FileText,
      href: '/admin/problemi',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Kvizovi',
      value: quizzes.length,
      description: 'Testovi znanja',
      icon: ClipboardList,
      href: '/admin/kvizovi',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'FAQ',
      value: faqs.length,
      description: 'Često postavljana pitanja',
      icon: HelpCircle,
      href: '/admin/faq',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Kontrolna tabla</h1>
        <p className="text-muted-foreground">Dobrodošli u LearnFix admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`h-10 w-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground mb-4">{stat.description}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={stat.href}>Upravljaj</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Brze akcije
          </CardTitle>
          <CardDescription>Česte administrativne zadatke</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/kategorije">
                <FolderTree className="h-6 w-6" />
                <span>Nova kategorija</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/problemi">
                <FileText className="h-6 w-6" />
                <span>Novi problem</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/kvizovi">
                <ClipboardList className="h-6 w-6" />
                <span>Novi kviz</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/faq">
                <HelpCircle className="h-6 w-6" />
                <span>Novo pitanje</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">💡 Napomena</h3>
          <p className="text-sm text-muted-foreground">
            Trenutno koristite demo verziju sa mock podacima koji se čuvaju u localStorage.
            U produkcijskoj verziji, sve promjene će biti sačuvane u bazi podataka.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
