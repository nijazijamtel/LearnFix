/**
 * LearnFix FAQs - Frequently Asked Questions
 * Mock data for FAQ section (Bosnian language)
 */

import { FAQ } from './types';

export const faqs: FAQ[] = [
  // General tech FAQs
  {
    id: 'faq-1',
    question: 'Šta je to Cloud (oblak) i kako funkcioniše?',
    answer:
      'Cloud ili "oblak" je način čuvanja podataka i pokretanja programa preko interneta umjesto na vašem uređaju. Kada čuvate slike na Google Photos ili koristite Office 365, koristite cloud servise. Podaci se čuvaju na serverima velike kompanije i možete im pristupiti sa bilo kojeg uređaja sa internetom. Prednosti su: automatski backup, pristup sa bilo kojeg mjesta, i ne zauzima prostor na vašem uređaju.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Kako mogu znati da li je moj računar zaražen virusom?',
    answer:
      'Znaci zaraženog računara uključuju: spor rad sistema, česti padovi ili restartovanja, neočekivani pop-up prozori, novi programi koje niste instalirali, promjena početne stranice browsera, antivirus je onemogućen, visoko korištenje interneta ili CPU-a bez razloga. Ako primjetite ove znake, pokrenite skeniranje sa ažuriranim antivirus programom (Windows Defender, Malwarebytes ili sličan).',
    category: 'general',
  },
  {
    id: 'faq-3',
    question: 'Zašto moj uređaj postaje spor tokom vremena?',
    answer:
      'Uređaji postaju sporiji iz više razloga: akumulacija privremenih fajlova i keša, previše programa koji se pokreću sa sistemom, nedostatak prostora na disku (treba najmanje 15% slobodnog prostora), zastarjeli operativni sistem ili drajveri, malware ili virusi, i fizička prašina u računaru koja ometa hlađenje. Redovno održavanje (čišćenje fajlova, deinstalacija nekorištenih programa, ažuriranja) može značajno pomoći.',
    category: 'general',
  },
  {
    id: 'faq-4',
    question: 'Da li je sigurno koristiti javni Wi-Fi?',
    answer:
      'Javni Wi-Fi (u kafićima, aerodromima, hotelima) NIJE potpuno siguran. Hakeri mogu presresti vašu komunikaciju na nezaštićenim mrežama. Ako morate koristiti javni Wi-Fi: izbjegavajte pristup banci ili osjetljivim podacima, koristite VPN servis za šifrovanje veze, pazite da web stranice imaju HTTPS (zelena bravica), isključite automatsko povezivanje na Wi-Fi mreže u postavkama, i isključite dijeljenje fajlova.',
    category: 'general',
  },
  {
    id: 'faq-5',
    question: 'Šta je razlika između 32-bit i 64-bit sistema?',
    answer:
      '32-bit i 64-bit se odnose na način na koji procesor (CPU) obrađuje informacije. 64-bit sistem može koristiti više RAM memorije (preko 4GB), brže obrađuje podatke i pokreće naprednije programe. Ako imate 4GB ili više RAM-a, koristite 64-bit verziju operativnog sistema. Provjeru možete uraditi: Windows - desni klik na "This PC" > Properties; "System type" pokazuje 32 ili 64-bit.',
    category: 'general',
  },
  {
    id: 'faq-6',
    question: 'Zašto bih trebao redovno ažurirati softver?',
    answer:
      'Ažuriranja (updates) su kritična iz više razloga: sigurnost - zakrpljuju ranjivosti koje hakeri mogu iskoristiti, stabilnost - popravljaju greške (bugove) koji mogu uzrokovati padove, performanse - često poboljšavaju brzinu i efikasnost, nove funkcije - dodaju nove mogućnosti softveru. Uvijek ažurirajte operativni sistem, antivirus, browser i često korištene aplikacije. Uključite automatska ažuriranja gdje je to moguće.',
    category: 'general',
  },

  // LearnFix usage FAQs
  {
    id: 'faq-7',
    question: 'Kako koristiti LearnFix platformu?',
    answer:
      'LearnFix je vrlo jednostavan za korištenje! Na početnoj stranici vidite kategorije tehnoloških problema (Internet, Telefoni, Hardver itd.). Kliknite na kategoriju koja vas interesuje, zatim odaberite specifičan problem. Dobićete detaljno objašnjenje korak-po-korak sa slikama kako riješiti problem. Možete takođe testirati svoje znanje kroz kvizove različitih nivoa težine.',
    category: 'learnfix',
  },
  {
    id: 'faq-8',
    question: 'Da li moram napraviti nalog da koristim LearnFix?',
    answer:
      'Ne! LearnFix je potpuno besplatan i ne zahtijeva registraciju. Samo otvorite stranicu i počnite učiti. Ovo znači da nema sakupljanja ličnih podataka, nema lozinki za pamćenje, i instant pristup svim tutorijale i kvizovima.',
    category: 'learnfix',
  },
  {
    id: 'faq-9',
    question: 'Kako funkcionišu kvizovi na LearnFix-u?',
    answer:
      'Kvizovi su podijeljeni u tri nivoa: Početni (zeleni) - osnovno znanje, Srednji (narandžasti) - malo naprednije teme, i Napredni (crveni) - ekspertsko znanje. Svaki kviz ima 5-10 pitanja sa više odgovora. Nakon što odaberete odgovor, odmah dobijate povratnu informaciju - zeleni kvačica za tačan odgovor ili crveni X za netačan, zajedno sa detaljnim objašnjenjem.',
    category: 'learnfix',
  },
  {
    id: 'faq-10',
    question: 'Mogu li preuzeti tutorijale za offline korištenje?',
    answer:
      'Trenutno LearnFix radi samo online. Preporučujemo da sačuvate korisne stranice kao bookmarks u vašem browseru. Planiramo dodati funkciju za preuzimanje tutorijala u PDF formatu u budućnosti, kao i Progressive Web App (PWA) mogućnost za offline pristup osnovnim funkcijama.',
    category: 'learnfix',
  },
  {
    id: 'faq-11',
    question: 'Koliko često se dodaje novi sadržaj na LearnFix?',
    answer:
      'Redovno dodajemo nove tutorijale, probleme i kvizove na osnovu zahtjeva korisnika i najčešćih tehnoloških problema. Ako imate prijedlog za temu koju želite da vidite na LearnFix-u, slobodno nas kontaktirajte kroz kontakt formu. Vaše povratne informacije nam pomažu da napravimo sadržaj koji je najkorisniji za vas!',
    category: 'learnfix',
  },
  {
    id: 'faq-12',
    question: 'Da li LearnFix radi na mobilnim telefonima?',
    answer:
      'Da! LearnFix je dizajniran "mobile-first", što znači da odlično radi na telefonima i tabletima. Sve funkcije, tutorijali i kvizovi su optimizovani za mali ekran sa velikim, prijateljskim dugmadima i navigacijom. Možete učiti bilo gdje - u autobusu, kod kuće, ili bilo gdje sa internet vezom.',
    category: 'learnfix',
  },
];

export function getFAQsByCategory(category: 'general' | 'learnfix'): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export function getAllFAQs(): FAQ[] {
  return faqs;
}
