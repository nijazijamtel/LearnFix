/**
 * LearnFix Quizzes - Tech Knowledge Tests
 * Mock data for quizzes with difficulty levels (Bosnian language)
 */

import { Quiz } from './types';

export const quizzes: Quiz[] = [
  // ==================== BEGINNER LEVEL QUIZZES ====================

  // Internet - Beginner
  {
    id: 'osnove-interneta',
    title: 'Osnove Interneta',
    description: 'Testiranje osnovnog znanja o internetu i web pretraživanju',
    difficulty: 'beginner',
    categoryId: 'internet',
    questions: [
      {
        id: 'q1',
        question: 'Šta znači WWW u web adresi?',
        options: [
          'World Wide Web',
          'World Wide Windows',
          'Windows Web World',
          'Web Windows World',
        ],
        correctAnswerIndex: 0,
        explanation:
          'WWW znači World Wide Web, globalni sistem međusobno povezanih web stranica dostupnih putem interneta.',
      },
      {
        id: 'q2',
        question: 'Koji pretraživač se najčešće koristi?',
        options: ['Internet Explorer', 'Mozilla Firefox', 'Google Chrome', 'Safari'],
        correctAnswerIndex: 2,
        explanation:
          'Google Chrome je trenutno najpopularniji web pretraživač sa preko 60% tržišnog udjela.',
      },
      {
        id: 'q3',
        question: 'Šta je URL?',
        options: [
          'Adresa web stranice',
          'Vrsta virusa',
          'Tip datoteke',
          'Programski jezik',
        ],
        correctAnswerIndex: 0,
        explanation:
          'URL (Uniform Resource Locator) je adresa koja specificira lokaciju resursa na internetu, npr. www.google.com.',
      },
      {
        id: 'q4',
        question: 'Šta znači "HTTPS" u web adresi?',
        options: [
          'Stranica je sigurna i šifrovana',
          'Stranica je brza',
          'Stranica je besplatna',
          'Stranica je nova',
        ],
        correctAnswerIndex: 0,
        explanation:
          'HTTPS (Hypertext Transfer Protocol Secure) označava da je veza sigurna i šifrovana, što štiti vaše podatke.',
      },
      {
        id: 'q5',
        question: 'Šta su "cookies" na web stranicama?',
        options: [
          'Virusi',
          'Male datoteke koje čuvaju informacije',
          'Reklame',
          'Slike',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Cookies su male tekstualne datoteke koje web stranice čuvaju na vašem računaru da zapamte vaše postavke i preferencije.',
      },
      {
        id: 'q6',
        question: 'Kako se zove prvo što vidite kada otvorite web pretraživač?',
        options: [
          'Homepage ili početna stranica',
          'Desktop',
          'Email',
          'Aplikacija',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Homepage je prva stranica koju vidite kada otvorite pretraživač. Možete je prilagoditi u postavkama.',
      },
      {
        id: 'q7',
        question: 'Šta je Wi-Fi?',
        options: [
          'Bežična internet veza',
          'Vrsta računara',
          'Tip kabla',
          'Operativni sistem',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Wi-Fi omogućava bežično povezivanje uređaja na internet bez potrebe za kablovima.',
      },
      {
        id: 'q8',
        question: 'Gdje se obično nalazi lozinka za Wi-Fi?',
        options: [
          'Na naljepnici na ruteru',
          'U novinama',
          'Na televizoru',
          'Nema lozinke',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Wi-Fi lozinka se obično nalazi na naljepnici na donjoj ili zadnjoj strani rutera.',
      },
    ],
  },

  // Phones - Beginner
  {
    id: 'osnove-telefona',
    title: 'Osnove Pametnih Telefona',
    description: 'Testiranje znanja o korištenju pametnih telefona',
    difficulty: 'beginner',
    categoryId: 'telefoni',
    questions: [
      {
        id: 'q1',
        question: 'Šta je operativni sistem Android?',
        options: [
          'Vrsta telefona',
          'Softver koji upravlja telefonom',
          'Aplikacija za igrice',
          'Marka telefona',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Android je operativni sistem razvijen od strane Google-a koji upravlja radom pametnih telefona i tableta.',
      },
      {
        id: 'q2',
        question: 'Gdje se preuzimaju aplikacije za Android telefone?',
        options: ['Facebook', 'Google Play Store', 'Instagram', 'YouTube'],
        correctAnswerIndex: 1,
        explanation:
          'Google Play Store je zvanična prodavnica aplikacija za Android uređaje gdje možete preuzeti milione aplikacija.',
      },
      {
        id: 'q3',
        question: 'Šta znači "4G" kod mobilne mreže?',
        options: [
          'Četvrta generacija mobilne mreže',
          'Četiri gigabajta',
          'Četiri godine garancije',
          'Četiri gigaherca',
        ],
        correctAnswerIndex: 0,
        explanation:
          '4G označava četvrtu generaciju mobilne mreže koja omogućava brži prenos podataka i internet na telefonu.',
      },
      {
        id: 'q4',
        question: 'Kako se zove način zaključavanja telefona sa otiskom prsta?',
        options: [
          'Face ID',
          'Touch ID ili Fingerprint',
          'Voice ID',
          'Eye ID',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Touch ID (Apple) ili Fingerprint Sensor (Android) koriste otisak prsta za sigurno zaključavanje i otključavanje telefona.',
      },
      {
        id: 'q5',
        question: 'Šta je Bluetooth?',
        options: [
          'Boja ekrana',
          'Vrsta kabla',
          'Bežična tehnologija za povezivanje uređaja',
          'Vrsta baterije',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Bluetooth je bežična tehnologija koja omogućava povezivanje telefona sa drugim uređajima (slušalice, zvučnici, računar) na kratke udaljenosti.',
      },
      {
        id: 'q6',
        question: 'Šta morate uraditi ako telefon se zaglavio (ne reaguje)?',
        options: [
          'Baciti telefon',
          'Restartovati telefon',
          'Kupiti novi',
          'Ništa',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Restart telefona često rješava većinu problema. Držite dugme za uključivanje 10-15 sekundi da ga restartujete.',
      },
      {
        id: 'q7',
        question: 'Šta znači ikona baterije sa uzorak strele?',
        options: [
          'Telefon se puni',
          'Telefon je pokvaren',
          'Telefon je nov',
          'Telefon je spor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ikona munje ili strele na bateriji pokazuje da se telefon trenutno puni.',
      },
      {
        id: 'q8',
        question: 'Kako možete osloboditi prostor na telefonu?',
        options: [
          'Obrisati nepotrebne aplikacije',
          'Kupiti novi telefon',
          'Isključiti telefon',
          'Promijeniti pozadinu',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Brisanje nepotrebnih aplikacija, slika i videa oslobađa prostor na telefonu.',
      },
    ],
  },

  // Hardware - Beginner
  {
    id: 'osnove-hardvera',
    title: 'Osnove Računarskog Hardvera',
    description: 'Osnovni koncepti računarskih komponenti',
    difficulty: 'beginner',
    categoryId: 'hardver',
    questions: [
      {
        id: 'q1',
        question: 'Šta je RAM memorija?',
        options: [
          'Mjesto gdje se čuvaju dokumenti',
          'Privremena radna memorija',
          'Druga riječ za hard disk',
          'Vrsta procesora',
        ],
        correctAnswerIndex: 1,
        explanation:
          'RAM je privremena memorija koju računar koristi za brzi pristup trenutno aktivnim programima. Briše se kada ugasite računar.',
      },
      {
        id: 'q2',
        question: 'Šta je miš (mouse)?',
        options: [
          'Životinja',
          'Uređaj za kontrolu pokazivača na ekranu',
          'Vrsta tastature',
          'Program',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Miš je uređaj koji koristite da pomjerete pokazivač (strelicu) na ekranu i klikate na stvari.',
      },
      {
        id: 'q3',
        question: 'Kako se zove glavni ekran gdje vidite ikone na računaru?',
        options: ['Desktop', 'Laptop', 'Monitor', 'Tastatura'],
        correctAnswerIndex: 0,
        explanation:
          'Desktop je glavna radna površina na ekranu gdje možete staviti prečice za programe, foldere i fajlove.',
      },
      {
        id: 'q4',
        question: 'Šta je monitor?',
        options: [
          'Ekran računara',
          'Vrsta tastature',
          'Programski jezik',
          'Internet veza',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Monitor je ekran računara gdje vidite sve - slike, tekst, videe i sve ostalo.',
      },
      {
        id: 'q5',
        question: 'Kako se zove mesto gdje povezujete USB uređaje?',
        options: ['USB port', 'Internet', 'Desktop', 'Monitor'],
        correctAnswerIndex: 0,
        explanation:
          'USB port je otvor na računaru gdje uključujete USB uređaje kao što su miševi, tastature, fleš memorije, itd.',
      },
      {
        id: 'q6',
        question: 'Šta je tastatura?',
        options: [
          'Uređaj za kucanje teksta',
          'Ekran',
          'Vrsta miša',
          'Aplikacija',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tastatura je uređaj sa dugmićima (tasterima) koji koristite za kucanje teksta i slova.',
      },
      {
        id: 'q7',
        question: 'Zašto računar ponekad radi sporo?',
        options: [
          'Previše otvorenih programa',
          'Boja ekrana',
          'Loša miš',
          'Vrijeme dana',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Kada imate previše programa otvorenih istovremeno, računar koristi svu memoriju i postaje spor.',
      },
      {
        id: 'q8',
        question: 'Šta je hard disk?',
        options: [
          'Mjesto gdje se čuvaju svi vaši fajlovi i programi',
          'Vrsta ekrana',
          'Internet veza',
          'Tastatura',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hard disk je komponenta koja trajno čuva sve vaše dokumente, slike, muziku i programe. Podaci ostaju čak i kada ugasite računar.',
      },
    ],
  },

  // Software - Beginner
  {
    id: 'osnove-softvera',
    title: 'Osnove Računarskih Programa',
    description: 'Osnovno razumijevanje softvera i aplikacija',
    difficulty: 'beginner',
    categoryId: 'softver',
    questions: [
      {
        id: 'q1',
        question: 'Šta je operativni sistem?',
        options: [
          'Glavni softver koji upravlja računarom',
          'Vrsta igrice',
          'Internet veza',
          'Tip monitora',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Operativni sistem (Windows, macOS, Linux) je glavni program koji upravlja svim ostalim programima i hardverom na računaru.',
      },
      {
        id: 'q2',
        question: 'Šta je aplikacija (app)?',
        options: [
          'Program koji radi određeni posao',
          'Vrsta računara',
          'Internet veza',
          'Tastatura',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Aplikacija je program koji instalujete da bi ste radili određene stvari - npr. Word za pisanje, Chrome za internet, Spotify za muziku.',
      },
      {
        id: 'q3',
        question: 'Gdje pronalazite instalirane programe na Windows-u?',
        options: ['U Start meniju', 'U frižideru', 'Na ulici', 'U oblacima'],
        correctAnswerIndex: 0,
        explanation:
          'Kliknite na Start dugme (Windows logo u donjem lijevom uglu) da vidite sve instalirane programe.',
      },
      {
        id: 'q4',
        question: 'Šta znači "instalirati program"?',
        options: [
          'Staviti program na računar da ga možete koristiti',
          'Obrisati program',
          'Isključiti računar',
          'Uključiti internet',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Instalacija znači preuzimanje i postavljanje programa na vaš računar tako da možete da ga koristite.',
      },
      {
        id: 'q5',
        question: 'Šta je Microsoft Word?',
        options: [
          'Program za pisanje teksta',
          'Internet pretraživač',
          'Operativni sistem',
          'Igrica',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Microsoft Word je program za pisanje, uređivanje i formatiranje teksta - kao digitalna pisaća mašina.',
      },
      {
        id: 'q6',
        question: 'Kako se zove mali crveni X u gornjem desnom uglu prozora?',
        options: [
          'Dugme za zatvaranje programa',
          'Dugme za brisanje',
          'Dugme za instalaciju',
          'Dugme za restartovanje',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Crveni X u gornjem desnom uglu zatvara prozor programa.',
      },
      {
        id: 'q7',
        question: 'Šta je PDF fajl?',
        options: [
          'Tip dokumenta koji izgleda isto na svim uređajima',
          'Vrsta slike',
          'Video fajl',
          'Muzički fajl',
        ],
        correctAnswerIndex: 0,
        explanation:
          'PDF (Portable Document Format) je format dokumenta koji zadržava formatiranje na bilo kom računaru ili telefonu. Koristi se za dijeljenje dokumenata.',
      },
      {
        id: 'q8',
        question: 'Kako sačuvate dokument na računaru?',
        options: [
          'Kliknete File > Save ili Ctrl+S',
          'Isključite računar',
          'Zatvorite program',
          'Obrišete tekst',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Možete sačuvati dokument tako što odete na File > Save (ili kliknete ikonicu diskete) ili koristite prečicu Ctrl+S na tastaturi.',
      },
    ],
  },

  // Email - Beginner
  {
    id: 'osnove-emaila',
    title: 'Osnove Elektronske Pošte',
    description: 'Osnovni koncepti korištenja email-a',
    difficulty: 'beginner',
    categoryId: 'email',
    questions: [
      {
        id: 'q1',
        question: 'Šta je email?',
        options: [
          'Elektronska pošta - poruke preko interneta',
          'Vrsta telefona',
          'Papirno pismo',
          'Društvena mreža',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Email (elektronska pošta) je način slanja poruka preko interneta. Brže je i jeftinije od obične pošte.',
      },
      {
        id: 'q2',
        question: 'Koji su popularni email servisi?',
        options: [
          'Gmail, Outlook, Yahoo Mail',
          'Facebook, Instagram',
          'WhatsApp, Viber',
          'Netflix, YouTube',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Gmail (Google), Outlook (Microsoft) i Yahoo Mail su najpopularniji besplatni email servisi.',
      },
      {
        id: 'q3',
        question: 'Kako izgleda email adresa?',
        options: [
          'ime@domen.com',
          'www.ime.com',
          '123-456-789',
          'Ulica broj 5',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Email adresa uvijek ima format: korisničko_ime@provajder.com (npr. marko@gmail.com).',
      },
      {
        id: 'q4',
        question: 'Šta znači "inbox"?',
        options: [
          'Prijemno sanduče - mjesto gdje stižu email-ovi',
          'Poslato sanduče',
          'Obrisani email-ovi',
          'Spam folder',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Inbox (prijemno sanduče) je mjesto gdje dolaze svi email-ovi koje vam neko pošalje.',
      },
      {
        id: 'q5',
        question: 'Šta je "subject" u email-u?',
        options: [
          'Naslov ili tema email-a',
          'Adresa primaoca',
          'Datum slanja',
          'Lozinka',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Subject je kratka rečenica koja opisuje o čemu govori email - kao naslov pisma.',
      },
      {
        id: 'q6',
        question: 'Kako pošaljete novi email?',
        options: [
          'Kliknete na "Compose" ili "Novo"',
          'Isključite računar',
          'Pozovete telefonom',
          'Pošaljete SMS',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Dugme "Compose" (u Gmailu) ili "Novo" (u Outlooku) otvara prozor za pisanje novog emaila.',
      },
      {
        id: 'q7',
        question: 'Šta znači "Reply" dugme u email-u?',
        options: [
          'Odgovorite pošiljaocu email-a',
          'Obrišete email',
          'Pošaljete novi email',
          'Preuzimate attachment',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Reply dugme omogućava vam da odgovorite osobi koja vam je poslala email, automatski popunjavajući njihovu adresu.',
      },
      {
        id: 'q8',
        question: 'Gdje se čuvaju obrisani email-ovi?',
        options: [
          'U folderu "Trash" ili "Smeće"',
          'Nestaju zauvijek',
          'Na desktopu',
          'U inboxu',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Obrisani email-ovi idu u Trash/Smeće folder gdje ostaju 30 dana prije nego budu trajno obrisani. Možete ih vratiti ako pogrešno obrišete.',
      },
    ],
  },

  // Social Media - Beginner
  {
    id: 'osnove-drustvenih-mreza',
    title: 'Osnove Društvenih Mreža',
    description: 'Uvod u korištenje društvenih medija',
    difficulty: 'beginner',
    categoryId: 'drustvene-mreze',
    questions: [
      {
        id: 'q1',
        question: 'Šta je društvena mreža?',
        options: [
          'Online platforma za komunikaciju i dijeljenje sadržaja',
          'Vrsta računara',
          'Operativni sistem',
          'Email servis',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Društvene mreže su web stranice i aplikacije gdje ljudi dijele fotografije, poruke i komuniciraju sa prijateljima.',
      },
      {
        id: 'q2',
        question: 'Koje su najpopularnije društvene mreže?',
        options: [
          'Facebook, Instagram, TikTok, Twitter',
          'Gmail, Outlook, Yahoo',
          'Windows, Mac, Linux',
          'Word, Excel, PowerPoint',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Facebook, Instagram, TikTok i Twitter (X) su među najpopularnijim društvenim mrežama u svijetu.',
      },
      {
        id: 'q3',
        question: 'Šta znači "post" ili "objava"?',
        options: [
          'Sadržaj koji dijelite na društvenoj mreži',
          'Lozinka',
          'Email adresa',
          'Vrsta računara',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Post je bilo kakav sadržaj koji objavite na društvenoj mreži - tekst, slika, video.',
      },
      {
        id: 'q4',
        question: 'Šta je "like" ili "lajk"?',
        options: [
          'Pokazivanje da vam se nešto sviđa',
          'Brisanje objave',
          'Slanje poruke',
          'Blokiranje osobe',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Like (lajk, sviđa mi se) je način da pokažete da vam se nečija objava sviđa bez pisanja komentara.',
      },
      {
        id: 'q5',
        question: 'Šta znači "prijatelj" ili "friend" na Facebooku?',
        options: [
          'Osoba sa kojom ste povezani i vidite njene objave',
          'Osoba koju ste blokirali',
          'Spam',
          'Virus',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Prijatelj na Facebooku je osoba sa kojom ste povezani - vidite međusobno objave i možete slati poruke.',
      },
      {
        id: 'q6',
        question: 'Zašto je važno paziti šta objavljujete na društvenim mrežama?',
        options: [
          'Svi mogu vidjeti vaše objave',
          'Nije važno',
          'Samo vi vidite objave',
          'Objave se automatski brišu',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sve što objavite može biti vidljivo mnogim ljudima, pa čak i kad kasnije obrišete. Budite pažljivi šta dijelite!',
      },
      {
        id: 'q7',
        question: 'Šta znači "share" ili "podijeli" objavu?',
        options: [
          'Pokazivanje objave vašim prijateljima na vašem profilu',
          'Brisanje objave',
          'Blokiranje osobe',
          'Slanje privatne poruke',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Share omogućava vam da podijelite nečiju objavu na svom profilu tako da vaši prijatelji također mogu vidjeti.',
      },
      {
        id: 'q8',
        question: 'Šta je "messenger" ili "poruke"?',
        options: [
          'Funkcija za slanje privatnih poruka prijateljima',
          'Vrsta objave',
          'Like dugme',
          'Profilna slika',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Messenger/Poruke omogućava slanje privatnih poruka pojedinačnim osobama ili grupama, odvojeno od javnih objava.',
      },
    ],
  },

  // ==================== INTERMEDIATE LEVEL QUIZZES ====================

  // Internet - Intermediate
  {
    id: 'sigurnost-interneta',
    title: 'Sigurnost na Internetu',
    description: 'Kako prepoznati prijetnje i zaštititi se online',
    difficulty: 'intermediate',
    categoryId: 'internet',
    questions: [
      {
        id: 'q1',
        question: 'Šta je phishing napad?',
        options: [
          'Virus koji briše datoteke',
          'Pokušaj krađe ličnih podataka lažnim porukama',
          'Brzo preuzimanje datoteka',
          'Vrsta antivirus programa',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phishing je prevara gdje napadači šalju lažne poruke (email, SMS) koje izgledaju legitimno kako bi ukrali vaše podatke kao lozinke ili brojeve kartica.',
      },
      {
        id: 'q2',
        question: 'Kako izgleda jaka lozinka?',
        options: [
          '123456',
          'ime i prezime',
          'Kombinacija slova, brojeva i specijalnih znakova, dužine 12+ karaktera',
          'datum rođenja',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Jaka lozinka ima najmanje 12 karaktera i kombinuje velika i mala slova, brojeve i specijalne znakove (npr. M@j4L0z1nk@2024!).',
      },
      {
        id: 'q3',
        question: 'Šta je "two-factor authentication" (2FA)?',
        options: [
          'Korištenje dva računara',
          'Dodatni sloj sigurnosti koji zahtijeva drugi kod pored lozinke',
          'Dva korisnika na istom nalogu',
          'Dvostruka lozinka',
        ],
        correctAnswerIndex: 1,
        explanation:
          '2FA dodaje dodatni sloj zaštite gdje nakon unosa lozinke morate unijeti kod koji dobijete na telefon ili email.',
      },
      {
        id: 'q4',
        question: 'Šta je VPN?',
        options: [
          'Vrsta virusa',
          'Društvena mreža',
          'Servis koji šifruje vašu internet konekciju',
          'Tip web pretraživača',
        ],
        correctAnswerIndex: 2,
        explanation:
          'VPN (Virtual Private Network) kreira šifrovani tunel između vašeg uređaja i interneta, čuvajući vašu privatnost i sigurnost online.',
      },
      {
        id: 'q5',
        question: 'Šta treba uraditi ako sumnjate da je vaš nalog hakovan?',
        options: [
          'Ignorisati problem',
          'Odmah promijeniti lozinku i uključiti 2FA',
          'Obrisati email',
          'Ugasiti računar',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ako sumnjate na hakovanje, odmah promijenite lozinku na nešto snažno i jedinstveno, uključite dvofaktorsku autentifikaciju i provjerite nedavne aktivnosti na nalogu.',
      },
      {
        id: 'q6',
        question: 'Šta je malware?',
        options: [
          'Besplatan softver',
          'Štetan softver dizajniran da ošteti računar',
          'Operativni sistem',
          'Internet pretraživač',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Malware je opći termin za štetan softver uključujući viruse, trojance, ransomware i spyware.',
      },
      {
        id: 'q7',
        question: 'Kako prepoznati lažan email?',
        options: [
          'Sumnjiv pošiljalac, pravopisne greške, traži lične podatke',
          'Ima mnogo slova',
          'Ima attachment',
          'Nije u boji',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Lažni (phishing) email-ovi često dolaze od nepoznatih adresa, imaju pravopisne greške i traže da kliknete link ili date lične podatke.',
      },
      {
        id: 'q8',
        question: 'Zašto ne bi trebali koristiti istu lozinku za sve naloge?',
        options: [
          'Nije važno',
          'Ako haker dobije jednu lozinku, može pristupiti svim nalozima',
          'Lakše je pamtiti jednu',
          'Računar će se pokvariti',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ako koristite istu lozinku svugdje i jedan sajt bude hakovan, napadači mogu pristupiti SVIM vašim nalozima. Koristite različite lozinke!',
      },
    ],
  },

  // Phones - Intermediate
  {
    id: 'napredne-telefon-funkcije',
    title: 'Napredne Funkcije Telefona',
    description: 'Optimizacija i održavanje pametnog telefona',
    difficulty: 'intermediate',
    categoryId: 'telefoni',
    questions: [
      {
        id: 'q1',
        question: 'Kako produžiti trajanje baterije telefona?',
        options: [
          'Smanjiti svjetlinu ekrana i isključiti nepotrebne servise',
          'Držati telefon u frižideru',
          'Nikada ga ne puniti',
          'Uključiti sve aplikacije',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Smanjenje svjetline, isključivanje GPS-a, Bluetooth-a i pozadinskih aplikacija značajno produžava trajanje baterije.',
      },
      {
        id: 'q2',
        question: 'Šta je keš (cache) i zašto ga treba čistiti?',
        options: [
          'Privremeni fajlovi koji zauzimaju prostor',
          'Vrsta baterije',
          'Operativni sistem',
          'Internet veza',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Keš su privremeni fajlovi koje aplikacije čuvaju. Tokom vremena se akumuliraju i zauzimaju gigabajte prostora.',
      },
      {
        id: 'q3',
        question: 'Šta je cloud backup?',
        options: [
          'Čuvanje podataka online (Google Photos, iCloud)',
          'Vrsta baterije',
          'Fizička kopija telefona',
          'Aplikacija za igrice',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Cloud backup automatski čuva vaše fotografije, kontakte i podatke online, tako da ih nećete izgubiti ako izgubite telefon.',
      },
      {
        id: 'q4',
        question: 'Zašto je važno ažurirati operativni sistem telefona?',
        options: [
          'Popravlja sigurnosne rupe i donosi nove funkcije',
          'Nije važno',
          'Samo da zauzme prostor',
          'Da se telefon pokvari',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ažuriranja sistema popravljaju sigurnosne propuste, bugove i često dodaju nove funkcije i poboljšanja.',
      },
      {
        id: 'q5',
        question: 'Šta je aeroplan mod (airplane mode)?',
        options: [
          'Isključuje sve bežične veze (Wi-Fi, mobilnu mrežu, Bluetooth)',
          'Mijenja temu telefona',
          'Briše sve aplikacije',
          'Puni bateriju',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Aeroplan mod isključuje sve radio signale telefona. Korisno u avionu ili kada želite uštedjeti bateriju.',
      },
      {
        id: 'q6',
        question: 'Kako osloboditi memoriju na telefonu?',
        options: [
          'Obrisati nepotrebne aplikacije, slike i videe, očistiti keš',
          'Kupiti novi telefon',
          'Isključiti internet',
          'Promijeniti wallpaper',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Brisanje nepotrebnih aplikacija, prebacivanje slika u cloud i čišćenje keš-a oslobađa značajan prostor.',
      },
      {
        id: 'q7',
        question: 'Šta je USB-C port?',
        options: [
          'Moderni universalni konektor za punjenje i prenos podataka',
          'Vrsta baterije',
          'Operativni sistem',
          'Aplikacija',
        ],
        correctAnswerIndex: 0,
        explanation:
          'USB-C je novi standard konektora koji radi u oba smjera, brži je od starih USB-ova i može se koristiti za punjenje, prenos podataka i video.',
      },
      {
        id: 'q8',
        question: 'Šta je mobilni hotspot?',
        options: [
          'Dijeljenje internet konekcije telefona sa drugim uređajima',
          'Vrsta aplikacije',
          'Igrica',
          'Društvena mreža',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mobilni hotspot omogućava vašem telefonu da podijeli svoju mobilnu internet vezu sa laptopom ili drugim uređajima preko Wi-Fi-ja.',
      },
    ],
  },

  // Email - Intermediate
  {
    id: 'email-organizacija',
    title: 'Organizacija i Korištenje Email-a',
    description: 'Efikasno upravljanje elektronskom poštom',
    difficulty: 'intermediate',
    categoryId: 'email',
    questions: [
      {
        id: 'q1',
        question: 'Šta je CC u email poruci?',
        options: [
          'Confidential Copy',
          'Carbon Copy - kopija poruke drugim primaocima',
          'Cancel Copy',
          'Clear Copy',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CC (Carbon Copy) šalje kopiju email-a dodatnim primaocima, pri čemu svi mogu vidjeti ko je još dobio poruku.',
      },
      {
        id: 'q2',
        question: 'Šta je razlika između CC i BCC?',
        options: [
          'Nema razlike',
          'BCC primaoci ne mogu vidjeti druge primaocima u BCC polju',
          'CC je bržiji',
          'BCC je samo za spam',
        ],
        correctAnswerIndex: 1,
        explanation:
          'BCC (Blind Carbon Copy) šalje kopiju email-a tako da primaoci u BCC polju ostaju skriveni od ostalih primaoca.',
      },
      {
        id: 'q3',
        question: 'Kako prepoznati spam email?',
        options: [
          'Ima mnogo slika',
          'Sumnjiv pošiljalac, pravopisne greške, traži lične podatke',
          'Kratak je',
          'Nema naslova',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Spam često dolazi od nepoznatih pošiljalaca, sadrži pravopisne greške, sumnjive linkove i traži lične podatke ili novac.',
      },
      {
        id: 'q4',
        question: 'Šta su email filtri?',
        options: [
          'Antivirus program',
          'Automatsko pravilo koje organizuje ili briše email-ove',
          'Dodatak za email',
          'Vrsta lozinke',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Email filtri su automatska pravila koja sortiraju dolazne poruke u fascikle, označavaju ih ili brišu na osnovu kriterija koje postavite.',
      },
      {
        id: 'q5',
        question: 'Zašto je važno imati dobar subject (naslov) u email-u?',
        options: [
          'Nije važno',
          'Pomaže primaocima da brzo razumiju sadržaj i organizuju poruke',
          'Samo iz ljubaznosti',
          'Da bi email bio veći',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Dobar subject omogućava primaocima da odmah znaju o čemu se radi i olakšava kasnije pronalaženje email-a.',
      },
      {
        id: 'q6',
        question: 'Šta je email attachment?',
        options: [
          'Fajl koji šaljete zajedno sa email-om',
          'Lozinka',
          'Email adresa',
          'Spam',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Attachment (prilog) je fajl (dokument, slika, PDF) koji dodajete i šaljete zajedno sa vašom email porukom.',
      },
      {
        id: 'q7',
        question: 'Kako ste sigurni da ste poslali email na pravu adresu?',
        options: [
          'Dvaput provjerite "To" polje prije slanja',
          'Poslati pa vidjeti',
          'Ne možete biti sigurni',
          'Email se sam ispravlja',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Uvijek provjerite adresu u "To" polju prije nego kliknete Send. Greška u adresi može poslati povjerljive informacije pogrešnoj osobi!',
      },
      {
        id: 'q8',
        question: 'Šta je "Forward" opcija u email-u?',
        options: [
          'Prosleđivanje email-a trećoj osobi',
          'Odgovaranje pošiljaocu',
          'Brisanje email-a',
          'Označavanje kao spam',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Forward omogućava da prosledite email koji ste primili nekoj drugoj osobi, uključujući originalnu poruku i attachmente.',
      },
    ],
  },

  // Hardware - Intermediate
  {
    id: 'optimizacija-hardvera',
    title: 'Optimizacija Računara',
    description: 'Poboljšanje performansi računarskog sistema',
    difficulty: 'intermediate',
    categoryId: 'hardver',
    questions: [
      {
        id: 'q1',
        question: 'Zašto je računar spor?',
        options: [
          'Previše programa otvoren istovremeno, malo RAM-a, pun hard disk',
          'Boja ekrana',
          'Loš miš',
          'Vrijeme dana',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Glavni razlozi sporog računara su: previše otvorenih programa, nedovoljno RAM memorije, pun hard disk, ili malware.',
      },
      {
        id: 'q2',
        question: 'Kako ubrzati računar?',
        options: [
          'Zatvoriti nepotrebne programe, obrisati temp fajlove, onemogućiti startup aplikacije',
          'Promijeniti boju',
          'Kupiti novi miš',
          'Isključiti monitor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Zatvaranje nepotrebnih programa, čišćenje diska i onemogućavanje startup programa značajno ubrzava računar.',
      },
      {
        id: 'q3',
        question: 'Šta je Task Manager?',
        options: [
          'Alat koji pokazuje koje programe troše resurse',
          'Igrica',
          'Web stranica',
          'Vrsta monitora',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Task Manager (Ctrl+Shift+Esc) pokazuje koje aplikacije i procesi troše CPU, RAM i disk resurse.',
      },
      {
        id: 'q4',
        question: 'Šta su startup programi?',
        options: [
          'Programi koji se automatski pokreću kada uključite računar',
          'Igrice',
          'Email servisi',
          'Društvene mreže',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Startup programi se automatski pokreću sa Windows-om i usporavaju pokretanje sistema. Bolje ih je onemogućiti ako ih ne trebate.',
      },
      {
        id: 'q5',
        question: 'Šta je Disk Cleanup?',
        options: [
          'Alat koji briše privremene i nepotrebne fajlove',
          'Antivirus',
          'Internet pretraživač',
          'Email servis',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Disk Cleanup je Windows alat koji briše temp fajlove, keš, stare update fajlove i oslobađa prostor na disku.',
      },
      {
        id: 'q6',
        question: 'Šta je defragmentacija diska?',
        options: [
          'Reorganizacija podataka na hard disku za brži pristup',
          'Brisanje fajlova',
          'Instalacija programa',
          'Skeniranje virusa',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Defragmentacija reorganizuje fajlove na HDD-u tako da su bolje raspoređeni, što ubrzava pristup. NIJE potrebna za SSD diskove!',
      },
      {
        id: 'q7',
        question: 'Koliko RAM memorije je dovoljno za osnovne zadatke?',
        options: [
          '4-8 GB RAM-a',
          '1 GB RAM-a',
          '100 GB RAM-a',
          'RAM nije potreban',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Za osnovne zadatke (internet, office, email) dovoljno je 4-8 GB RAM-a. Za gaming i video editovanje potrebno je 16 GB ili više.',
      },
      {
        id: 'q8',
        question: 'Kako prepoznati kada računaru treba više RAM-a?',
        options: [
          'Kada je spor sa otvorenim programima i hard disk konstantno radi',
          'Kada se ne pali',
          'Kada nema interneta',
          'Kada je ekran tamnji',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ako je računar spor kada imate mnogo programa otvorenih i čujete hard disk da stalno radi (ili vidite 100% disk usage), verovatno vam treba više RAM-a.',
      },
    ],
  },

  // Software - Intermediate
  {
    id: 'upravljanje-programima',
    title: 'Upravljanje Softverom',
    description: 'Instalacija, deinstalacija i održavanje programa',
    difficulty: 'intermediate',
    categoryId: 'softver',
    questions: [
      {
        id: 'q1',
        question: 'Kako sigurno instalirati program?',
        options: [
          'Preuzeti sa zvanične stranice i pažljivo pratiti korake instalacije',
          'Preuzeti sa bilo kojeg sajta',
          'Samo klikati Next ne čitajući',
          'Nikada ne instalirati',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Uvijek preuzimajte programe sa zvaničnih stranica i pažljivo čitajte svaki korak instalacije da ne instalirate nepoželje dodatke.',
      },
      {
        id: 'q2',
        question: 'Šta je .exe fajl?',
        options: [
          'Izvršni fajl koji pokreće program na Windows-u',
          'Tekstualni dokument',
          'Slika',
          'Video fajl',
        ],
        correctAnswerIndex: 0,
        explanation:
          '.exe (executable) je fajl koji se izvršava i pokreće program. Budite oprezni sa .exe fajlovima iz nepouzdanih izvora!',
      },
      {
        id: 'q3',
        question: 'Kako deinstalirati program?',
        options: [
          'Ići u Settings > Apps > odabrati program > Uninstall',
          'Obrisati ikonu sa desktop-a',
          'Isključiti računar',
          'Restartovati računar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pravilna deinstalacija se radi kroz Settings > Apps ili Control Panel > Programs and Features, ne brisanjem ikone.',
      },
      {
        id: 'q4',
        question: 'Zašto je važno ažurirati programe?',
        options: [
          'Popravlja sigurnosne rupe i bugove',
          'Nije važno',
          'Samo da zauzme prostor',
          'Da se računar pokvari',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ažuriranja programa popravljaju sigurnosne propuste, bugove i često dodaju nove funkcije.',
      },
      {
        id: 'q5',
        question: 'Šta je antivirus program?',
        options: [
          'Program koji štiti računar od virusa i malwarea',
          'Internet pretraživač',
          'Email servis',
          'Igrica',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Antivirus program skenira fajlove i blokira malware, viruse i druge prijetnje na vašem računaru.',
      },
      {
        id: 'q6',
        question: 'Šta je Windows Defender?',
        options: [
          'Besplatni antivirus ugrađen u Windows',
          'Internet pretraživač',
          'Email program',
          'Igrica',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Windows Defender je besplatni antivirus koji dolazi sa Windows 10 i 11, pruža solidnu zaštitu bez potrebe za dodatnim softverom.',
      },
      {
        id: 'q7',
        question: 'Šta znači kada program kaže "Update available"?',
        options: [
          'Nova verzija programa je dostupna za preuzimanje',
          'Program je pokvaren',
          'Program će se obrisati',
          'Računar će se ugasiti',
        ],
        correctAnswerIndex: 0,
        explanation:
          '"Update available" znači da postoji nova verzija programa sa poboljšanjima i ispravkama. Preporučuje se ažuriranje.',
      },
      {
        id: 'q8',
        question: 'Šta je trial verzija programa?',
        options: [
          'Besplatna probna verzija koja radi ograničeno vrijeme',
          'Permanentno besplatna verzija',
          'Virus',
          'Tip dokumenta',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trial verzija omogućava vam da testirate program besplatno (obično 7-30 dana) prije nego odlučite da ga kupite.',
      },
    ],
  },

  // Social Media - Intermediate
  {
    id: 'privatnost-drustvene-mreze',
    title: 'Privatnost na Društvenim Mrežama',
    description: 'Zaštita privatnosti i sigurnost na društvenim medijima',
    difficulty: 'intermediate',
    categoryId: 'drustvene-mreze',
    questions: [
      {
        id: 'q1',
        question: 'Zašto treba paziti šta dijelite na društvenim mrežama?',
        options: [
          'Informacije mogu biti zloupotrebljene',
          'Nije važno',
          'Samo prijatelji vide',
          'Automatski se briše',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Informacije koje dijelite mogu biti viđene od strane hakera, prevaranata ili budućih poslodavaca. Čak i kad obrišete, možda je neko već sačuvao.',
      },
      {
        id: 'q2',
        question: 'Šta su postavke privatnosti?',
        options: [
          'Kontrole koje određuju ko može vidjeti vaš sadržaj',
          'Lozinka',
          'Email adresa',
          'Broj telefona',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Postavke privatnosti omogućavaju vam da kontrolišete ko može vidjeti vaše objave, slike, listu prijatelja i druge informacije.',
      },
      {
        id: 'q3',
        question: 'Šta je blokiranje osobe na društvenoj mreži?',
        options: [
          'Sprečavanje osobe da vidi vaš profil i kontaktira vas',
          'Slanje prijateljskog zahtjeva',
          'Davanje lajka',
          'Dijeljenje objave',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Blokiranje potpuno sprečava osobu da vidi vaš profil, slike, objave ili da vam pošalje poruku.',
      },
      {
        id: 'q4',
        question: 'Šta je "tag" ili "označavanje" na fotografiji?',
        options: [
          'Povezivanje osobe sa fotografijom',
          'Brisanje fotografije',
          'Preuzimanje fotografije',
          'Dijeljenje fotografije',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tag povezuje vaše ime sa fotografijom tako da se pojavljuje na vašem profilu. Možete uključiti opciju da morate odobriti svaki tag prije nego se pojavi.',
      },
      {
        id: 'q5',
        question: 'Kako prepoznati lažan profil?',
        options: [
          'Malo prijatelja, generičke slike, sumnjive poruke',
          'Ima profilnu sliku',
          'Ima mnogo prijatelja',
          'Objavljuje svaki dan',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Lažni profili često imaju vrlo malo prijatelja, koriste stock fotografije, i šalju sumnjive poruke ili linkove.',
      },
      {
        id: 'q6',
        question: 'Šta znači "DM" ili "Direct Message"?',
        options: [
          'Privatna poruka poslata direktno osobi',
          'Javni komentar',
          'Dijeljenje objave',
          'Lajk',
        ],
        correctAnswerIndex: 0,
        explanation:
          'DM (Direct Message) je privatna poruka koju šaljete direktno jednoj osobi ili maloj grupi, nije vidljiva javno.',
      },
      {
        id: 'q7',
        question: 'Zašto ne bi trebali prihvatati sve zahtjeve za prijateljstvo?',
        options: [
          'Mogu biti lažni profili ili ljudi sa lošim namjerama',
          'Nema razloga',
          'Sve zahtjeve treba prihvatiti',
          'To je nepristojno',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Prihvatajte samo zahtjeve od ljudi koje poznajete ili koje možete verifikovati. Lažni profili često traže pristup vašim informacijama.',
      },
      {
        id: 'q8',
        question: 'Šta je "story" ili "priča" na društvenim mrežama?',
        options: [
          'Privremena objava koja nestaje nakon 24 sata',
          'Permanentna objava',
          'Privatna poruka',
          'Profilna slika',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Story je fotografija ili video koji dijelite i automatski nestaje nakon 24 sata. Popularan je na Instagramu, Facebooku i Snapchatu.',
      },
    ],
  },

  // ==================== ADVANCED LEVEL QUIZZES ====================

  // Hardware - Advanced
  {
    id: 'napredni-hardver',
    title: 'Napredna Hardverska Dijagnostika',
    description: 'Dubinsko razumijevanje hardverskih komponenti',
    difficulty: 'advanced',
    categoryId: 'hardver',
    questions: [
      {
        id: 'q1',
        question: 'Šta je RAM memorija i čemu služi?',
        options: [
          'Mjesto gdje se čuvaju dokumenti',
          'Privremena radna memorija koju računar koristi za brži pristup podacima',
          'Druga riječ za hard disk',
          'Vrsta procesora',
        ],
        correctAnswerIndex: 1,
        explanation:
          'RAM (Random Access Memory) je privremena memorija gdje računar čuva trenutno aktivne podatke i programe za brz pristup. Kada ugasite računar, sadržaj RAM-a se briše.',
      },
      {
        id: 'q2',
        question: 'Šta je SSD i po čemu se razlikuje od HDD-a?',
        options: [
          'SSD nema pokretnih dijelova i brži je od HDD-a',
          'SSD je jeftiniji',
          'SSD ima manje prostora',
          'Nema razlike',
        ],
        correctAnswerIndex: 0,
        explanation:
          'SSD (Solid State Drive) koristi flash memoriju bez pokretnih dijelova, što ga čini mnogo bržim, trajnijim i tišim od tradicionalnog HDD-a (Hard Disk Drive) koji koristi magnetske diskove.',
      },
      {
        id: 'q3',
        question: 'Šta je CPU cache?',
        options: [
          'Vrsta procesora',
          'Memorija u samom procesoru za najbrži mogući pristup podacima',
          'Dodatak za hlađenje',
          'Tip hard diska',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CPU cache je mala, ultra-brza memorija izgrađena direktno u procesor koja čuva najčešće korištene podatke za instant pristup, značajno ubrzavajući rad.',
      },
      {
        id: 'q4',
        question: 'Šta znači "bottleneck" u kontekstu hardvera?',
        options: [
          'Vrsta kabla',
          'Komponenta koja usporava performanse cijelog sistema',
          'Dodatak za grafičku karticu',
          'Tip охлađивања',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Bottleneck je situacija gdje jedna spora komponenta (npr. slab procesor sa jakom grafičkom) limitira performanse cijelog sistema jer ne može pratiti ostale komponente.',
      },
      {
        id: 'q5',
        question: 'Šta je BIOS/UEFI?',
        options: [
          'Operativni sistem',
          'Osnovni softver koji se pokreće prije operativnog sistema i kontroliše hardver',
          'Antivirus program',
          'Vrsta memorije',
        ],
        correctAnswerIndex: 1,
        explanation:
          'BIOS/UEFI je firmver ugrađen u matičnu ploču koji se pokreće kada uključite računar, inicijalizuje hardver i učitava operativni sistem.',
      },
    ],
  },

  // Internet - Advanced
  {
    id: 'napredna-sigurnost',
    title: 'Napredne Sigurnosne Prakse',
    description: 'Ekspertsko znanje o cyber sigurnosti',
    difficulty: 'advanced',
    categoryId: 'internet',
    questions: [
      {
        id: 'q1',
        question: 'Šta je "end-to-end encryption"?',
        options: [
          'Obična lozinka',
          'Šifrovanje gdje samo pošiljalac i primalac mogu pročitati poruku',
          'Vrsta antivirus softvera',
          'Backup sistem',
        ],
        correctAnswerIndex: 1,
        explanation:
          'End-to-end encryption šifruje poruku tako da samo pošiljalac i primalac imaju ključeve za dešifrovanje. Čak ni provajder servisa ne može pročitati sadržaj.',
      },
      {
        id: 'q2',
        question: 'Šta je "zero-day" exploit?',
        options: [
          'Stara ranjivost',
          'Napad koji koristi nepoznatu ranjivost prije nego proizvođač objavi patch',
          'Vrsta virusa',
          'Besplatni softver',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Zero-day exploit koristi softversku ranjivost koja je nepoznata proizvođaču i za koju još ne postoji zakrpa (patch), što je čini veoma opasnom.',
      },
      {
        id: 'q3',
        question: 'Šta je "man-in-the-middle" napad?',
        options: [
          'Virus koji briše fajlove',
          'Napad gdje haker presreće komunikaciju između dva uređaja',
          'Phishing email',
          'Spam poruka',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Man-in-the-middle napad se dešava kada napadač tajno presreće i potencijalno mijenja komunikaciju između dva učesnika koji misle da direktno komuniciraju.',
      },
      {
        id: 'q4',
        question: 'Šta je password manager i zašto ga koristiti?',
        options: [
          'Program za brisanje lozinki',
          'Siguran alat koji čuva i generiše jake lozinke za sve naloge',
          'Vrsta browsera',
          'Email servis',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Password manager je aplikacija koja sigurno čuva sve vaše lozinke šifrovane, omogućava vam da koristite jake, jedinstvene lozinke za svaki nalog bez potrebe da ih pamtite.',
      },
      {
        id: 'q5',
        question: 'Šta je "ransomware"?',
        options: [
          'Besplatni softver',
          'Malware koji šifruje vaše fajlove i traži otkupninu',
          'Antivirus program',
          'Vrsta lozinke',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ransomware je maliciozni softver koji šifruje vaše fajlove i zahtijeva plaćanje (obično u kriptovaluti) da biste dobili ključ za dešifrovanje. Najbolja odbrana je redovan backup.',
      },
      {
        id: 'q6',
        question: 'Šta je DDoS napad?',
        options: [
          'Virus na računaru',
          'Napad koji preopterećuje server sa ogromnim brojem zahtjeva',
          'Phishing prevara',
          'Vrsta lozinke',
        ],
        correctAnswerIndex: 1,
        explanation:
          'DDoS (Distributed Denial of Service) napad koristi hiljade zaraženih uređaja da pošalju toliko zahtjeva serveru da on padne i postane nedostupan legitimnim korisnicima.',
      },
      {
        id: 'q7',
        question: 'Šta je Tor mreža?',
        options: [
          'Društvena mreža',
          'Anonimna mreža koja skriva vašu internet aktivnost kroz višeslojno šifrovanje',
          'Email servis',
          'Cloud storage',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tor (The Onion Router) koristi višeslojno šifrovanje i preusmjerava promet kroz više servera kako bi sakrio vašu IP adresu i lokaciju, omogućavajući anonimno pregledanje.',
      },
      {
        id: 'q8',
        question: 'Šta je "social engineering" u kontekstu cyber sigurnosti?',
        options: [
          'Programiranje društvenih mreža',
          'Manipulacija ljudima da otkriju povjerljive informacije',
          'Izrada web stranica',
          'Email marketing',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Social engineering je psihološka manipulacija gdje napadači varaju ljude da otkriju lozinke ili povjerljive podatke, često se predstavljajući kao IT podrška ili autoriteti.',
      },
    ],
  },

  // Software - Advanced
  {
    id: 'napredni-softver',
    title: 'Napredna Administracija Softvera',
    description: 'Ekspertsko upravljanje sistemskim softverom',
    difficulty: 'advanced',
    categoryId: 'softver',
    questions: [
      {
        id: 'q1',
        question: 'Šta je virtualizacija?',
        options: [
          'Pokretanje virtuelnih operativnih sistema na jednom fizičkom računaru',
          'Vrsta igrice',
          'Cloud storage',
          'Internet veza',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Virtualizacija omogućava pokretanje više operativnih sistema istovremeno na jednom računaru koristeći softver kao VirtualBox ili VMware.',
      },
      {
        id: 'q2',
        question: 'Šta je Windows Registry?',
        options: [
          'Centralna baza podataka sa svim postavkama sistema i aplikacija',
          'Email servis',
          'Vrsta lozinke',
          'Internet pretraživač',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Windows Registry je hijerarhijska baza podataka koja čuva sve sistemske postavke, konfiguracije hardvera i aplikacija. Greške u Registry mogu uzrokovati nestabilnost sistema.',
      },
      {
        id: 'q3',
        question: 'Šta je Linux distro?',
        options: [
          'Vrsta Windowsa',
          'Besplatni operativni sistem baziran na Linux kernelu',
          'Aplikacija',
          'Igrica',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Linux distribucija (Ubuntu, Fedora, Debian) je kompletan operativni sistem baziran na Linux kernelu, često besplatan i open-source.',
      },
      {
        id: 'q4',
        question: 'Šta je API (Application Programming Interface)?',
        options: [
          'Način komunikacije između različitih softverskih aplikacija',
          'Vrsta hardvera',
          'Internet veza',
          'Društvena mreža',
        ],
        correctAnswerIndex: 0,
        explanation:
          'API omogućava različitim programima da komuniciraju i dijele podatke. Na primjer, aplikacija koristi Google Maps API da prikaže mapu.',
      },
      {
        id: 'q5',
        question: 'Šta je open-source softver?',
        options: [
          'Softver čiji je izvorni kod javno dostupan i može se mijenjati',
          'Plaćeni softver',
          'Softver sa virusom',
          'Operativni sistem',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Open-source softver ima javno dostupan izvorni kod koji svako može pregledati, mijenjati i distribuirati. Primjeri: Linux, Firefox, LibreOffice.',
      },
      {
        id: 'q6',
        question: 'Šta je Command Line Interface (CLI)?',
        options: [
          'Tekstualni način upravljanja računarom kroz komande',
          'Grafički interfejs',
          'Društvena mreža',
          'Email',
        ],
        correctAnswerIndex: 0,
        explanation:
          'CLI (Command Prompt, Terminal) omogućava upravljanje sistemom kroz tekstualne komande, često brže i moćnije od grafičkog interfejsa.',
      },
      {
        id: 'q7',
        question: 'Šta je kernel panic/Blue Screen of Death?',
        options: [
          'Kritična sistemska greška koja uzrokuje pad operativnog sistema',
          'Vrsta igrice',
          'Normalan restart',
          'Ažuriranje sistema',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Kernel panic (Linux/Mac) ili BSOD (Windows) je kritična greška gdje operativni sistem ne može nastaviti rad i mora se restartovati, obično zbog hardverskog ili driver problema.',
      },
      {
        id: 'q8',
        question: 'Šta je driver?',
        options: [
          'Softver koji omogućava operativnom sistemu da komunicira sa hardverom',
          'Vrsta igrice',
          'Internet pretraživač',
          'Email klijent',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Driver je specijalizovan softver koji omogućava operativnom sistemu da koristi hardverske komponente (grafička kartica, štampač, miš). Zastarjeli driveri mogu uzrokovati probleme.',
      },
    ],
  },

  // Phones - Advanced
  {
    id: 'napredne-mobilne-tehnologije',
    title: 'Napredne Mobilne Tehnologije',
    description: 'Dubinsko razumijevanje mobilnih sistema',
    difficulty: 'advanced',
    categoryId: 'telefoni',
    questions: [
      {
        id: 'q1',
        question: 'Šta je rooting (Android) ili jailbreaking (iOS)?',
        options: [
          'Dobijanje administratorskog pristupa telefonu izvan ograničenja proizvođača',
          'Punjenje telefona',
          'Instalacija aplikacija',
          'Brisanje podataka',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Rooting/jailbreaking daje potpunu kontrolu nad telefonom, ali poništava garanciju i može ugroziti sigurnost ako se ne zna šta se radi.',
      },
      {
        id: 'q2',
        question: 'Šta je ADB (Android Debug Bridge)?',
        options: [
          'Alat za komunikaciju između računara i Android uređaja',
          'Aplikacija za muziku',
          'Društvena mreža',
          'Email klijent',
        ],
        correctAnswerIndex: 0,
        explanation:
          'ADB je command-line alat koji omogućava naprednim korisnicima da instaliraju aplikacije, debuguju, prebace fajlove i izvršavaju komande na Android uređaju preko računara.',
      },
      {
        id: 'q3',
        question: 'Šta je bootloader?',
        options: [
          'Prvi program koji se pokreće kada uključite telefon',
          'Aplikacija za fotografije',
          'Internet pretraživač',
          'Igrica',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Bootloader je low-level softver koji se pokreće prije operativnog sistema i odlučuje koji sistem će se učitati. Otključavanje bootloadera omogućava instalaciju custom ROM-ova.',
      },
      {
        id: 'q4',
        question: 'Šta je custom ROM?',
        options: [
          'Alternativna verzija Android-a koju možete instalirati',
          'Vrsta baterije',
          'Slušalice',
          'Futrola za telefon',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Custom ROM (LineageOS, Pixel Experience) je modifikovana verzija Android-a koja često donosi nove funkcije, bolje performanse i duži support za stare telefone.',
      },
      {
        id: 'q5',
        question: 'Šta je NFC?',
        options: [
          'Tehnologija za beskontaktno plaćanje i razmenu podataka',
          'Vrsta kamere',
          'Internet veza',
          'Operativni sistem',
        ],
        correctAnswerIndex: 0,
        explanation:
          'NFC (Near Field Communication) omogućava beskontaktno plaćanje (Google Pay, Apple Pay) i razmjenu podataka na malim udaljenostima dodiranjem dva uređaja.',
      },
      {
        id: 'q6',
        question: 'Šta je factory reset?',
        options: [
          'Vraćanje telefona na fabricke postavke i brisanje svih podataka',
          'Ažuriranje softvera',
          'Punjenje baterije',
          'Instalacija aplikacije',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Factory reset briše sve podatke i vraća telefon u stanje kao iz prodavnice. Korisno za rješavanje teških problema ili prije prodaje telefona. UVIJEK napravite backup prije!',
      },
      {
        id: 'q7',
        question: 'Šta je OTA update?',
        options: [
          'Bežično ažuriranje sistema preko interneta',
          'Fizički konektor',
          'Vrsta aplikacije',
          'Tip kamere',
        ],
        correctAnswerIndex: 0,
        explanation:
          'OTA (Over-The-Air) update omogućava ažuriranje operativnog sistema direktno preko interneta bez povezivanja sa računarom.',
      },
      {
        id: 'q8',
        question: 'Šta je carrier lock?',
        options: [
          'Telefon je zakljucan da radi samo sa određenim mobilnim operatorom',
          'Lozinka ekrana',
          'Otisak prsta',
          'PIN kod',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Carrier lock vezuje telefon za jednog mobilnog operatora. Nakon isteka ugovora možete zatražiti unlock kod da koristite telefon sa bilo kojim operatorom.',
      },
    ],
  },

  // Email - Advanced
  {
    id: 'napredne-email-tehnike',
    title: 'Napredne Email Tehnike i Sigurnost',
    description: 'Profesionalno upravljanje elektronskom poštom',
    difficulty: 'advanced',
    categoryId: 'email',
    questions: [
      {
        id: 'q1',
        question: 'Šta je PGP/GPG šifrovanje emaila?',
        options: [
          'End-to-end šifrovanje koje štiti sadržaj email poruke',
          'Vrsta spama',
          'Email provider',
          'Attachment',
        ],
        correctAnswerIndex: 0,
        explanation:
          'PGP (Pretty Good Privacy) i GPG (GNU Privacy Guard) koriste javne i privatne ključeve za šifrovanje emaila tako da samo primalac sa odgovarajućim ključem može pročitati poruku.',
      },
      {
        id: 'q2',
        question: 'Šta je SPF record?',
        options: [
          'DNS postavka koja sprečava slanje spama sa vašeg domena',
          'Vrsta attachmenta',
          'Email klijent',
          'Folder u inboxu',
        ],
        correctAnswerIndex: 0,
        explanation:
          'SPF (Sender Policy Framework) je DNS record koji definiše koji serveri mogu slati email sa vašeg domena, pomažući u borbi protiv spoofing-a i phishinga.',
      },
      {
        id: 'q3',
        question: 'Šta je DKIM?',
        options: [
          'Digitalni potpis koji verifikuje autentičnost pošiljaoca emaila',
          'Vrsta virusa',
          'Email attachment',
          'Spam folder',
        ],
        correctAnswerIndex: 0,
        explanation:
          'DKIM (DomainKeys Identified Mail) dodaje kriptografski potpis email zaglavlju koji dokazuje da email zaista dolazi od navedenog domena i nije modifikovan.',
      },
      {
        id: 'q4',
        question: 'Šta je IMAP protokol?',
        options: [
          'Protokol koji sinhronizuje email na svim uređajima',
          'Vrsta spama',
          'Antivirus program',
          'Društvena mreža',
        ],
        correctAnswerIndex: 0,
        explanation:
          'IMAP (Internet Message Access Protocol) čuva emailove na serveru i sinhronizuje ih na svim uređajima. Ako pročitate email na telefonu, pokazaće se kao pročitan i na računaru.',
      },
      {
        id: 'q5',
        question: 'Šta je razlika između IMAP i POP3?',
        options: [
          'IMAP čuva email na serveru, POP3 preuzima i briše sa servera',
          'Nema razlike',
          'IMAP je sporiji',
          'POP3 je noviji',
        ],
        correctAnswerIndex: 0,
        explanation:
          'IMAP ostavlja emailove na serveru i sinhronizuje na svim uređajima, dok POP3 preuzima emailove na jedan uređaj i obično ih briše sa servera.',
      },
      {
        id: 'q6',
        question: 'Šta je email header?',
        options: [
          'Metadata koja sadrži informacije o rutiranju i izvoru emaila',
          'Naslov poruke',
          'Prvi red emaila',
          'Potpis na kraju',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Email header sadrži tehničke informacije kao IP adrese, rute servera, autentifikaciju i timestampove. Analiza headera može otkriti phishing pokušaje.',
      },
      {
        id: 'q7',
        question: 'Šta je email spoofing?',
        options: [
          'Falsifikovanje pošiljaoca emaila da izgleda kao neko drugi',
          'Slanje mnogo emailova',
          'Preuzimanje attachmenta',
          'Brisanje emaila',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Email spoofing je tehnika gdje napadač falsifikuje "From" polje da email izgleda kao da dolazi od legitimne osobe ili organizacije. SPF i DKIM pomažu u prevenciji.',
      },
      {
        id: 'q8',
        question: 'Šta je mailing list vs. BCC grupa?',
        options: [
          'Mailing list ima centralnu adresu, BCC skriva primaoce u običnom emailu',
          'Isto su',
          'Mailing list je brža',
          'BCC je za spam',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mailing list (npr. team@company.com) ima svoju adresu koja automatski prosleđuje svim članovima, dok BCC skriva primaoceu običnom email poruci.',
      },
    ],
  },

  // Social Media - Advanced
  {
    id: 'napredna-analitika-drustvenih-mreza',
    title: 'Napredna Analitika Društvenih Mreža',
    description: 'Dubinsko razumijevanje algoritama i analitike',
    difficulty: 'advanced',
    categoryId: 'drustvene-mreze',
    questions: [
      {
        id: 'q1',
        question: 'Kako algoritam društvenih mreža odlučuje šta će vam pokazati?',
        options: [
          'Na osnovu vaših interakcija, vremena provedenog i engagement-a',
          'Nasumično',
          'Hronološki',
          'Samo od prijatelja',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Algoritmi analiziraju koje objave lajkujete, komentarišete, dijelite i koliko vremena provodite na svakoj objavi da personalizuju sadržaj koji misle da će vas zanimati.',
      },
      {
        id: 'q2',
        question: 'Šta je shadowban?',
        options: [
          'Skriveno ograničavanje vidljivosti vašeg sadržaja bez obavještenja',
          'Permanentna blokada naloga',
          'Brisanje naloga',
          'Privremena suspenzija',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Shadowban smanjuje domašaj vaših objava bez da vas obavijesti. Drugi korisnici (osim vas) teže pronalaze vaš sadržaj. Često se dešava zbog kršenja pravila ili spam ponašanja.',
      },
      {
        id: 'q3',
        question: 'Šta je engagement rate?',
        options: [
          'Procenat ljudi koji interaguju sa vašim sadržajem',
          'Broj prijatelja',
          'Broj objava',
          'Brzina interneta',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Engagement rate mjeri koliko ljudi lajkuje, komentariše i dijeli vaš sadržaj u odnosu na broj ljudi koji ga vidi. Visok engagement znači da je sadržaj relevantan.',
      },
      {
        id: 'q4',
        question: 'Šta je reach vs. impressions?',
        options: [
          'Reach je broj ljudi, impressions broj puta pokazan',
          'Isto su',
          'Reach je brži',
          'Impressions je važniji',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Reach je broj jedinstvenih korisnika koji su vidjeli sadržaj, dok Impressions broji ukupan broj prikaza (ista osoba može vidjeti više puta).',
      },
      {
        id: 'q5',
        question: 'Šta su hashtag-ovi i kako funkcionišu?',
        options: [
          'Oznake koje kategorizuju sadržaj i povećavaju dostupnost',
          'Vrsta komentara',
          'Emoji',
          'Privatne poruke',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hashtag-ovi (#tehnologija) omogućavaju korisnicima da pronađu sav sadržaj vezan za određenu temu. Korištenje relevantnih hashtag-ova povećava vidljivost objave.',
      },
      {
        id: 'q6',
        question: 'Šta je verified badge (plava kvačica)?',
        options: [
          'Potvrda autentičnosti naloga javne ličnosti ili organizacije',
          'Plaćena pretplata',
          'Mnogo pratilaca',
          'Premium račun',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Verified badge (plava kvačica) potvrđuje da je nalog autentičan i pripada javnoj ličnosti, brendu ili organizaciji koja tvrdi. Sprečava impersonaciju.',
      },
      {
        id: 'q7',
        question: 'Šta je A/B testing na društvenim mrežama?',
        options: [
          'Testiranje dve verzije sadržaja da se vidi koja bolje performira',
          'Vrsta naloga',
          'Tip profila',
          'Način blockovanja',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A/B testing objavljuje dvije različite verzije sadržaja (razlicite slike, naslovi) da vidi koja dobija više engagement-a i konverzija.',
      },
      {
        id: 'q8',
        question: 'Šta je influencer marketing?',
        options: [
          'Brendovi plaćaju utjecajne osobe da promovišu proizvode',
          'Besplatno oglašavanje',
          'Spam poruke',
          'Phishing',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Influencer marketing koristi osobe sa velikim brojem pratilaca da promoviraju proizvode/usluge njihovoj publici. Influenceri obično moraju naznačiti #Ad ili #Sponsored.',
      },
    ],
  },
];

export function getQuizzesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Quiz[] {
  return quizzes.filter((quiz) => quiz.difficulty === difficulty);
}

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}
