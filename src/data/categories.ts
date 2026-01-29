/**
 * LearnFix Categories - Tech Topics
 * Mock data for tech category cards (Bosnian language)
 */

import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'internet',
    name: 'Internet',
    description: 'Naučite kako riješiti probleme sa internetom i Wi-Fi vezom',
    icon: 'Wifi',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'telefoni',
    name: 'Telefoni',
    description: 'Savjeti za pametne telefone, aplikacije i mobilne uređaje',
    icon: 'Smartphone',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 'hardver',
    name: 'Hardver',
    description: 'Rješavanje problema sa računarom, laptopom i komponentama',
    icon: 'Cpu',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 'softver',
    name: 'Softver',
    description: 'Instalacija programa, ažuriranja i rješavanje grešaka',
    icon: 'Package',
    gradient: 'from-green-400 to-green-600',
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Kako koristiti email, slati poruke i organizovati inbox',
    icon: 'Mail',
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    id: 'drustvene-mreze',
    name: 'Društvene mreže',
    description: 'Siguran i pametan pristup Facebooku, Instagramu i drugim platformama',
    icon: 'Users',
    gradient: 'from-cyan-400 to-cyan-600',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryName(id: string): string {
  const category = getCategoryById(id);
  return category ? category.name : 'Nepoznata kategorija';
}
