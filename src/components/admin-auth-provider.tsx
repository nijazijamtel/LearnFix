'use client';

/**
 * Admin Auth Provider
 * Protects admin routes and provides authentication context
 */

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if on admin route (but not login page)
    const isAdminRoute = pathname?.startsWith('/admin');
    const isLoginPage = pathname === '/admin/login';

    if (isAdminRoute && !isLoginPage) {
      // Check authentication
      const authStatus = localStorage.getItem('isAdminAuthenticated');
      if (authStatus === 'true') {
        setIsAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    }
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Učitavanje...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
