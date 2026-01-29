'use client';

/**
 * Bottom Navigation Component
 * Mobile-first navigation bar that appears at the bottom of the screen
 * Shows Home, Quiz, and Contact options with icons
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ClipboardList, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Početna',
    icon: Home,
  },
  {
    href: '/kvizovi',
    label: 'Kvizovi',
    icon: ClipboardList,
  },
  {
    href: '/kontakt',
    label: 'Kontakt',
    icon: Mail,
  },
];

export function BottomNavigation() {
  const pathname = usePathname();

  // Don't show on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/' && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full transition-all duration-300',
                'hover:bg-accent/50',
                isActive
                  ? 'text-primary bg-accent'
                  : 'text-muted-foreground'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6 transition-transform duration-300',
                  isActive && 'scale-110'
                )}
              />
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
