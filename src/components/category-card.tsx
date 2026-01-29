/**
 * Category Card Component
 * Displays a tech category with icon, gradient background, and friendly design
 */

import Link from 'next/link';
import { LucideIcon, Wifi, Smartphone, Cpu, Package, Mail, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

// Map icon names to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Smartphone,
  Cpu,
  Package,
  Mail,
  Users,
};

export function CategoryCard({ id, name, description, icon, gradient }: CategoryCardProps) {
  const Icon = iconMap[icon] || Package;

  return (
    <Link href={`/kategorija/${id}`} className="group block h-full">
      <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-primary/20 overflow-hidden">
        <div className={cn('p-6 bg-gradient-to-br', gradient)}>
          <Icon className="h-12 w-12 text-white drop-shadow-lg" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
