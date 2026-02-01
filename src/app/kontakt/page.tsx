'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, HelpCircle, CheckCircle } from 'lucide-react';

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget; // ✅ store reference immediately

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success('Poruka uspješno poslana!');
    form.reset(); // ✅ SAFE
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (err) {
    console.error(err);
    toast.error('Greška pri slanju poruke');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-background py-12">
      <section className="container mx-auto max-w-4xl px-4 text-center mb-12">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Kontaktirajte nas</h1>
        <p className="text-muted-foreground">
          Imate pitanje? Pošaljite nam poruku i odgovorit ćemo vam u najkraćem roku.
        </p>
      </section>

      <section className="container mx-auto max-w-2xl px-4">
        <Card>
          <CardHeader>
            <CardTitle>Pošaljite poruku</CardTitle>
            <CardDescription>Odgovorićemo vam u najkraćem roku</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <p>Poruka je poslana ✅</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Ime</Label>
                  <Input name="name" required />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input name="email" type="email" required />
                </div>

                <div>
                  <Label>Poruka</Label>
                  <Textarea name="message" rows={5} required />
                </div>

                <Button className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Šaljem…' : 'Pošalji'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <CardTitle>Email podrška</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:learnfixcontact@gmail.com" className="text-primary">
                learnfixcontact@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/faq">Pogledaj FAQ</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
