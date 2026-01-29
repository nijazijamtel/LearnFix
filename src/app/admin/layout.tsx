/**
 * Admin Layout
 * Wraps admin pages with sidebar and auth protection
 */

import { AdminAuthProvider } from '@/components/admin-auth-provider';
import { AdminSidebar } from '@/components/admin-sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <main className="lg:ml-64 p-4 md:p-8">{children}</main>
      </div>
    </AdminAuthProvider>
  );
}
