'use client';

/**
 * Admin Login Page
 * Simple mock authentication (username: admin, password: admin)
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      // Mock authentication
      if (formData.username === 'admin' && formData.password === 'admin') {
        // Set auth flag in localStorage
        localStorage.setItem('isAdminAuthenticated', 'true');
        localStorage.setItem('adminUser', formData.username);

        toast.success('Uspješno ste prijavljeni!');
        router.push('/admin');
      } else {
        setError('Netačno korisničko ime ili lozinka');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sidebar-background to-sidebar-accent p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Admin prijava</CardTitle>
          <CardDescription>Prijavite se za pristup admin panelu</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Korisničko ime</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="admin"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Lozinka</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? 'Prijava u toku...' : 'Prijavi se'}
            </Button>

            <div className="text-center text-sm text-muted-foreground pt-4 border-t">
              <p>Demo kredencijali:</p>
              <p className="font-mono">
                <strong>Korisničko ime:</strong> admin
              </p>
              <p className="font-mono">
                <strong>Lozinka:</strong> admin
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
