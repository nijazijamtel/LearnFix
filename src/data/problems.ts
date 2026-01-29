/**
 * LearnFix Problems - Tech Problems with Solutions
 * Mock data for common tech problems (Bosnian language)
 */

import { Problem } from './types';

export const problems: Problem[] = [
  // Internet problems
  {
    id: 'wifi-ne-radi',
    categoryId: 'internet',
    title: 'Wi-Fi se ne povezuje',
    description: 'Jednostavni koraci za rješavanje problema sa Wi-Fi vezom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li je Wi-Fi uključen',
        description:
          'Na vašem uređaju, prvo otvorite postavke tako što ćete povući prema dolje od vrha ekrana (na Android) ili otvoriti postavke iz app menija. Potražite Wi-Fi opciju koja se obično nalazi u gornjem dijelu liste postavki. Provjerite da li je prekidač pored Wi-Fi opcije uključen (obično je plav ili zelen kada je aktivan). Ako vidite da je isključen (siv), jednostavno tapnite na njega da ga uključite. Na iPhone uređajima, možete također otvoriti Control Center povlačenjem od vrha ekrana i provjeriti Wi-Fi ikonu. Kada je Wi-Fi uključen, vaš telefon ili tablet će automatski započeti skeniranje dostupnih mreža u blizini.',
      },
      {
        number: 2,
        title: 'Restartujte ruter',
        description:
          'Restart rutera često rješava većinu problema sa vezom. Prvo, pronadite ruter (obično je to mala kutija sa svjetlima i antenama). Isključite ga iz struje tako što ćete izvući kabl iz utičnice ili pritisnuti Power dugme na zadnjoj strani. Ovo je važno jer jednostavno isključivanje ne čisti memoriju uređaja. Nakon što ste isključili ruter, sačekajte najmanje 30 sekundi - ovo vrijeme omogućava da se sva električna energija isprazni i da se memorija rutera potpuno resetuje. Zatim ponovo uključite ruter u struju i sačekajte 2-3 minute da se potpuno pokrene. Videćete da svjetla na ruteru postepeno počinju da trepere - prvo crveno ili narandžasto, a zatim stabilno zeleno ili plavo kada je spreman. Tek kada sva svjetla postanu stabilna, pokušajte ponovo da se povežete sa vašeg uređaja.',
      },
      {
        number: 3,
        title: 'Zaboravite i ponovo povežite mrežu',
        description:
          'Ako se i dalje ne možete povezati, možda je problem u sačuvanim postavkama mreže. Idite u postavke Wi-Fi na vašem uređaju i pronadite vašu mrežu u listi dostupnih ili sačuvanih mreža. Na Android uređajima, dugo pritisnite na naziv mreže i odaberite "Zaboravi mrežu" ili "Forget network". Na iPhone-u, tapnite na malu "i" ikonu pored naziva mreže i odaberite "Zaboravi ovu mrežu". Ovo će obrisati sve sačuvane informacije o toj mreži, uključujući lozinku i postavke. Nakon što zaboravite mrežu, ona će se ponovo pojaviti u listi dostupnih mreža. Tapnite na nju i unesite Wi-Fi lozinku pažljivo, obratite pažnju na velika i mala slova jer lozinka razlikuje velika i mala slova. Nakon što unesete lozinku, tapnite na "Poveži" ili "Connect" i sačekajte nekoliko sekundi dok se uređaj povezuje.',
      },
      {
        number: 4,
        title: 'Provjerite lozinku',
        description:
          'Jedan od najčešćih razloga zašto se ne možete povezati je pogrešna lozinka. Wi-Fi lozinka se obično nalazi na naljepnici koja je zalepljena na donjoj ili zadnjoj strani vašeg rutera. Potražite oznaku "Password", "Key", "Lozinka" ili slično. Ako ne možete pronaći naljepnicu, provjerite dokumentaciju koja je došla sa rutermom ili ugovor sa vašim internet provajderom - lozinka je često navedena tamo. Kada unosite lozinku, budite veoma pažljivi - Wi-Fi lozinke razlikuju velika i mala slova, i svaki znak mora biti tačan. Česte greške uključuju zamjenu slova "O" sa brojem "0", ili slova "l" (malo L) sa brojem "1". Ako imate problema sa čitanjem lozinke, pokušajte je prvo ukucati u neki tekst editor gdje možete vidjeti šta pišete, pa je kopirajte i nalepite u polje za lozinku. Većina uređaja također ima opciju "Prikaži lozinku" (obično male oko ikone) koja vam omogućava da vidite šta unosite umjesto zvezdica.',
      },
    ],
  },
  {
    id: 'internet-spor',
    categoryId: 'internet',
    title: 'Internet je spor',
    description: 'Kako ubrzati internet vezu i poboljšati performanse',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite brzinu interneta',
        description:
          'Prvi korak u rješavanju problema sa sporim internetom je mjerenje stvarne brzine vaše veze. Otvorite web pretraživač (Chrome, Firefox, Safari) i posjetite stranicu speedtest.net ili fast.com. Kliknite na veliko dugme "GO" ili "Start test" u sredini ekrana. Test će trajati oko 30 sekundi i izmjeriće tri važne metrike: brzinu preuzimanja (download), brzinu slanja (upload) i ping (latenciju). Brzina preuzimanja je najvažnija za gledanje videa i preuzimanje fajlova - trebala bi biti blizu brzine koju plaćate vašem provajderu (npr. ako plaćate 100 Mbps, trebali biste dobiti najmanje 80-90 Mbps). Ping pokazuje koliko brzo vaš signal stiže do servera - niži broj je bolji, idealno ispod 50ms. Napravite nekoliko testova u različito vrijeme dana da vidite kada je internet najsporiji. Ako su rezultati mnogo niži od onoga što plaćate (npr. plaćate 100 Mbps a dobijate samo 20 Mbps), kontaktirajte vašeg internet provajdera jer možda postoji tehnički problem na njihovoj strani.',
      },
      {
        number: 2,
        title: 'Zatvorite nepotrebne aplikacije',
        description:
          'Mnoge aplikacije koriste internet u pozadini bez vašeg znanja, što usporava vašu vezu. Na Windows računaru, otvorite Task Manager pritiskom na Ctrl+Shift+Esc istovremeno, pa kliknite na "Network" kolonu da sortirate aplikacije po korištenju interneta. Videćete koje aplikacije trenutno troše bandwidth - često su to aplikacije za cloud backup (Dropbox, Google Drive), torrent klijenti, ili čak web pretraživači sa mnogo otvorenih tabova. Desnim klikom na aplikaciju i odaberite "End task" da je zatvorite. Na telefonu, idite u Postavke > Aplikacije i potražite opciju koja pokazuje korištenje podataka. Android uređaji često imaju opciju "Background data" koju možete isključiti za određene aplikacije. Na iPhoneu, idite u Postavke > Općenito > Background App Refresh i isključite aplikacije koje ne trebaju raditi u pozadini. Takođe, zatvorite sve pregledač tabove koje ne koristite aktivno - svaki otvoreni tab može koristiti internet za refresh-ovanje sadržaja.',
      },
      {
        number: 3,
        title: 'Približite se ruteru ili koristite kabl',
        description:
          'Wi-Fi signal slabi sa udaljenošću i može biti blokiran zidovima, metalnim predmetima i drugim preprekama. Najboljii signal imate kada ste u istoj prostoriji kao ruter, idealno na udaljenosti od 1-5 metara. Svaki zid između vas i rutera smanjuje signal za 20-40%, a posebno debeli betonski zidovi ili zidovi sa metalnom mrežom mogu potpuno blokirat signal. Ako radite na računaru, najbolje rješenje je korištenje Ethernet kabla (mrežni kabl) koji direktno povezuje vaš računar sa ruterom - ovo će vam dati punu brzinu bez gubitka signala. Ethernet kabli su jeftini i mogu se kupiti u različitim dužinama u elektronskim prodavnicama. Jednostavno utaknite jedan kraj kabla u port na ruteru (obično žuti ili plavi), a drugi kraj u mrežni port na vašem računaru. Veza će se automatski uspostaviti i bićete prijatno iznenađeni koliko je internet brži i stabilniji. Ako morate koristiti Wi-Fi, pokušajte premjestiti ruter na centralnije mjesto u kući/stanu, podignite ga na viši regal (signal se bolje širi odozgo prema dolje), i držite ga dalje od drugih elektronskih uređaja kao što su mikrovalne pećnice i bežični telefoni koji mogu stvarati interferenciju.',
      },
      {
        number: 4,
        title: 'Ažurirajte firmver rutera',
        description:
          'Firmver je softver koji upravlja radom vašeg rutera, i proizvođači redovno objavljuju nove verzije koje popravljaju bugove i poboljšavaju performanse. Da biste pristupili postavkama rutera, prvo morate znati njegovu IP adresu. Najčešće IP adrese rutera su 192.168.1.1, 192.168.0.1 ili 192.168.100.1 - pokušajte unijeti jednu od ovih u adresnu traku vašeg web pretraživača i pritisnite Enter. Pojaviće se stranica za prijavu gdje morate unijeti korisničko ime i lozinku administratora. Ako nikada niste promijenili ove podatke, pokušajte najčešće kombinacije: admin/admin, admin/password, ili admin/1234. (NAPOMENA: nakon što uđete, OBAVEZNO promijenite ovu lozinku na nešto sigurnije!). Kada uđete u interfejs rutera, potražite sekciju koja se zove "Administration", "System", "Firmware", "Software Update" ili slično - svaki ruter ima malo drugačiji interfejs. Kliknite na opciju "Check for updates" ili "Provjerite ažuriranja". Ako postoji nova verzija, videćete dugme "Update" ili "Ažuriraj". Kliknite na njega i sačekajte 3-5 minuta dok se firmware ažurira. VAŽNO: Ne isključujte ruter tokom ažuriranja! Kada se proces završi, ruter će se automatski restartovati i trebao bi raditi bolje. Ako niste sigurni kako pristupiti postavkama vašeg specifičnog modela rutera, pretražite Google za "naziv vašeg rutera + firmware update tutorial".',
      },
    ],
  },
  {
    id: 'dns-server-not-responding',
    categoryId: 'internet',
    title: 'DNS server ne odgovara',
    description: 'Rješavanje problema sa DNS serverom',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Restartujte računar i ruter',
        description: 'Prvi korak u rješavanju DNS problema je jednostavan restart. Isključite vaš računar potpuno, zatim isključite ruter iz struje na 30 sekundi. Ponovo uključite ruter i sačekajte da se pokrene (2-3 minute), zatim uključite računar.',
      },
      {
        number: 2,
        title: 'Promijenite DNS server na Google DNS',
        description: 'Otvorite Control Panel > Network and Sharing Center > Change adapter settings. Desni klik na vašu mrežnu vezu > Properties. Odaberite "Internet Protocol Version 4 (TCP/IPv4)" > Properties. Označite "Use the following DNS server addresses" i unesite: Preferred DNS: 8.8.8.8, Alternate DNS: 8.8.4.4 (Google DNS serveri).',
      },
      {
        number: 3,
        title: 'Flush DNS cache',
        description: 'Otvorite Command Prompt kao administrator (desni klik na Start > Command Prompt Admin). Otkucajte "ipconfig /flushdns" i pritisnite Enter. Videćete poruku da je DNS cache uspješno ispražnjen. Ovo briše sve stare DNS zapise.',
      },
    ],
  },
  {
    id: 'sajt-ne-ucitava',
    categoryId: 'internet',
    title: 'Određeni sajt se ne učitava',
    description: 'Kako pristupiti sajtu koji se ne otvara',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li je sajt dostupan svima',
        description: 'Posjetite downforeveryoneorjustme.com i unesite adresu sajta koji ne radi. Ovaj servis će provjeriti da li je sajt zaista van funkcije ili problem je samo kod vas. Ako kaže "It\'s just you", problem je na vašoj strani.',
      },
      {
        number: 2,
        title: 'Obrišite browser cache i cookies',
        description: 'U Chrome-u: pritisnite Ctrl+Shift+Delete, označite "Cookies" i "Cached images", odaberite "All time" i kliknite "Clear data". U Firefoxu: Ctrl+Shift+Delete, označite sve i kliknite Clear. Zatim pokušajte ponovo učitati sajt.',
      },
      {
        number: 3,
        title: 'Pokušajte drugi pretraživač ili Incognito režim',
        description: 'Otvorite Incognito/Private prozor (Ctrl+Shift+N u Chrome) i pokušajte pristupiti sajtu. Ako radi u Incognito, problem je u ekstenzijama ili cache-u vašeg pretraživača. Ako ne radi ni tamo, pokušajte potpuno drugi pretraživač.',
      },
    ],
  },
  {
    id: 'veza-se-prekida',
    categoryId: 'internet',
    title: 'Internet veza se stalno prekida',
    description: 'Stabilizujte internet vezu koja se često disconnectuje',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite kabli i fizičke veze',
        description: 'Isključite i ponovo čvrsto utaknite Ethernet kabl u ruter i računar/konzolu. Provjerite da kabl nije oštećen ili savijen. Ako koristite adapter ili extender, probajte bez njih da vidite da li su oni problem.',
      },
      {
        number: 2,
        title: 'Ažurirajte network drivere',
        description: 'Desni klik na Start > Device Manager > Network adapters. Pronadite vaš Wi-Fi ili Ethernet adapter, desni klik > Update driver > Search automatically. Alternativno, posjetite web sajt proizvođača laptopa/računara i preuzmite najnovije network drivere.',
      },
      {
        number: 3,
        title: 'Provjerite Power Management postavke',
        description: 'U Device Manager-u, desni klik na network adapter > Properties > Power Management. ODZNAČITE opciju "Allow the computer to turn off this device to save power". Ovo sprečava Windows da gasi mrežnu karticu radi štednje energije.',
      },
      {
        number: 4,
        title: 'Promijenite Wi-Fi kanal na ruteru',
        description: 'Ulogujte se u ruter (obično 192.168.1.1), pronadite Wireless Settings i promijenite kanal. Za 2.4GHz pokušajte kanale 1, 6 ili 11 (najmanje interferencije). Za 5GHz pokušajte različite kanale. Pretrpani Wi-Fi kanali uzrokuju česte prekide.',
      },
    ],
  },
  {
    id: 'ogranicen-pristup',
    categoryId: 'internet',
    title: 'Povezan ali bez internet pristupa',
    description: 'Wi-Fi kaže "Connected, no internet" ili "Limited access"',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Restart network adapter-a',
        description: 'Desni klik na network ikonu u system tray-u > Open Network & Internet settings > Change adapter options. Desni klik na vašu vezu > Disable, sačekajte 5 sekundi, pa desni klik > Enable.',
      },
      {
        number: 2,
        title: 'Resetujte TCP/IP stack',
        description: 'Otvorite Command Prompt kao administrator. Otkucajte sljedeće komande jednu po jednu: "netsh winsock reset", "netsh int ip reset", "ipconfig /release", "ipconfig /renew", "ipconfig /flushdns". Zatim restartujte računar.',
      },
      {
        number: 3,
        title: 'Provjerite da li ruter ima internet',
        description: 'Pokušajte povezati drugi uređaj (telefon, tablet) na istu Wi-Fi mrežu. Ako ni oni nemaju internet, problem je sa ruterom ili internet provajderom. Kontaktirajte provajdera. Ako drugi uređaji rade, problem je specifično sa vašim računarom.',
      },
    ],
  },
  {
    id: 'ruter-se-ne-pali',
    categoryId: 'internet',
    title: 'Ruter se ne uključuje',
    description: 'Svjetla na ruteru ne svijetle ili ruter ne reaguje',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite napajanje',
        description: 'Provjerite da li je kabl za napajanje pravilno uključen i u ruter i u zidnu utičnicu. Pokušajte drugу utičnicu da isključite mogućnost da problem nije u utičnici. Provjerite da li adapter za napajanje ima svjetlo - ako nema, adapter može biti neispravan.',
      },
      {
        number: 2,
        title: 'Provjerite Power dugme',
        description: 'Neki ruteri imaju Power prekidač na zadnjoj strani. Provjerite da li je u ON poziciji. Pritisnite ga nekoliko puta naprijed-nazad. Ako je ruter star, prekidač može biti zahrđao.',
      },
      {
        number: 3,
        title: 'Sačekajte duže nakon uključivanja',
        description: 'Neki ruteri trebaju 3-5 minuta da se potpuno pokrenu, posebno nakon što su bili isključeni duže vrijeme. Budite strpljivi i sačekajte dok sva svjetla ne prestanu da trepere.',
      },
      {
        number: 4,
        title: 'Kontaktirajte provajdera ili nabavite novi ruter',
        description: 'Ako nakon svega ruter i dalje ne radi, kontaktirajte vašeg internet provajdera - ako je njihov ruter, zamijenićete ga besplatno. Ako je vaš privatni ruter, možda je vrijeme za novi. Ruteri obično traju 3-5 godina prije nego što počnu da imaju probleme.',
      },
    ],
  },
  {
    id: 'vpn-ne-radi',
    categoryId: 'internet',
    title: 'VPN se ne povezuje',
    description: 'Problemi sa VPN konekcijom',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite internet vezu bez VPN-a',
        description: 'Isključite VPN i provjerite da li normalan internet radi. Ako običan internet ne radi, prvo riješite taj problem - VPN zahtijeva stabilnu internet vezu da bi funkcionisao.',
      },
      {
        number: 2,
        title: 'Promijenite VPN server lokaciju',
        description: 'Otvorite vašu VPN aplikaciju i probajte povezati se na drugi server. Nekad određeni server može biti prenatrpan ili van funkcije. Pokušajte servere u različitim zemljama dok ne pronađete onaj koji radi.',
      },
      {
        number: 3,
        title: 'Promijenite VPN protokol',
        description: 'U VPN postavkama, potražite opciju za Protocol ili Connection Type. Probajte različite protokole: OpenVPN, WireGuard, IKEv2, L2TP. OpenVPN je najkompatibilniji ali može biti sporiji. WireGuard je brži ali noviji.',
      },
      {
        number: 4,
        title: 'Isključite firewall ili antivirus privremeno',
        description: 'Neki firewall ili antivirus programi blokiraju VPN konekcije. Privremeno isključite ih (samo za test!) i pokušajte povezati VPN. Ako sada radi, dodajte VPN u exception listu vašeg security softvera.',
      },
    ],
  },
  {
    id: 'upload-spor',
    categoryId: 'internet',
    title: 'Upload brzina je veoma spora',
    description: 'Fajlovi se sporo šalju/uploaduju',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Razumite ograničenja vašeg internet paketa',
        description: 'Većina internet paketa ima ASIMETRIČNU brzinu - download je brz, ali upload je 5-10x sporiji. Na primjer, 100 Mbps download može imati samo 10 Mbps upload. Ovo je normalno. Pokrenite speedtest.net da vidite vašu stvarnu upload brzinu.',
      },
      {
        number: 2,
        title: 'Zatvorite sve aplikacije koje koriste upload',
        description: 'Cloud backup servisi (Dropbox, Google Drive, OneDrive), torrent aplikacije, i video pozivi troše upload bandwidth. Zatvorite ih dok uploadujete važne fajlove. Takođe, provjerite da li Windows Update nije u procesu uploadovanja.',
      },
      {
        number: 3,
        title: 'Koristite Ethernet kabl umjesto Wi-Fi',
        description: 'Wi-Fi upload brzine su obično sporije od wired konekcije. Ako uploadujete velike fajlove (video zapisi, backup podaci), povežite računar direktno na ruter putem kabla za optimalnu brzinu.',
      },
    ],
  },
  {
    id: 'https-greska',
    categoryId: 'internet',
    title: 'Greška "Your connection is not private" (HTTPS)',
    description: 'Certifikat bezbjednosti nije validan',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite datum i vrijeme na računaru',
        description: 'Netačan datum i vrijeme na računaru su najčešći uzrok HTTPS grešaka. Kliknite na sat u donjem desnom uglu > "Adjust date/time" > Uključite "Set time automatically". Ako je datum bio pogrešan, restart-ujte pretraživač.',
      },
      {
        number: 2,
        title: 'Obrišite SSL state',
        description: 'Otvorite Control Panel > Internet Options > Content tab > Clear SSL state dugme. Ovo briše stare SSL/TLS certifikate koji mogu uzrokovati greške. Zatim restartujte pretraživač.',
      },
      {
        number: 3,
        title: 'Isključite antivirus HTTPS scanning',
        description: 'Neki antivirus programi (Avast, AVG, Kaspersky) skeniraju HTTPS saobraćaj što može uzrokovati certifikat greške. U antivirus postavkama, potražite "HTTPS scanning" ili "SSL scanning" i privremeno ga isključite da vidite da li to rješava problem.',
      },
    ],
  },
  {
    id: 'ping-visok',
    categoryId: 'internet',
    title: 'Visok ping u igrama',
    description: 'Smanjite latenciju za bolje gaming iskustvo',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Zatvorite sve pozadinske aplikacije',
        description: 'Streaming servisi (Netflix, YouTube), downloads, i drugi programi povećavaju ping. Zatvorite SVE osim igrice. Takođe, zatvorite browser tabove. Koristite Task Manager da vidite šta troši network bandwidth.',
      },
      {
        number: 2,
        title: 'Koristite Ethernet kabl',
        description: 'Wi-Fi uvijek ima veći ping od wired konekcije zbog bežičnog prijenosa. Za gaming, OBAVEZNO koristite Ethernet kabl direktno u ruter. Ovo može smanjiti ping za 20-50ms.',
      },
      {
        number: 3,
        title: 'Ugasite QoS na ruteru i prioritizujte gaming',
        description: 'Ulogujte se u ruter > potražite QoS (Quality of Service) postavke. Dodajte vašu konzolu/računar kao "High Priority" device. Ovo će osigurati da gaming paketi imaju prioritet nad ostalim saobraćajem u kući.',
      },
    ],
  },
  {
    id: 'ethernet-no-signal',
    categoryId: 'internet',
    title: 'Ethernet kabl ne radi',
    description: 'Rješavanje problema sa mrežnim kablom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li je kabl pravilno utaknut',
        description: 'Izvadite Ethernet kabl sa oba kraja i ponovo ga čvrsto utaknite dok ne čujete "klik". Kabl mora biti potpuno utaknut da napravi kontakt. Provjerite da plastični zatvarač na konektoru nije slomljen.',
      },
      {
        number: 2,
        title: 'Testirајте drugi kabl',
        description: 'Ethernet kablovi mogu biti interno oštećeni čak i ako izvana izgledaju u redu. Pozajmite ili kupite novi kabl da testirate. Kablovi su jeftini (10-20 KM) i vrijedi imati rezervni.',
      },
      {
        number: 3,
        title: 'Testirajte drugi port na ruteru',
        description: 'Ruteri obično imaju 4 LAN porta. Pokušajte utaknuti kabl u drugi port - jedan port možda ne radi. Takođe provjerite da li port svijetli malim LED svjetlom kada je kabl utaknut.',
      },
      {
        number: 4,
        title: 'Provjerite da Ethernet adapter nije disablovan',
        description: 'Na Windows-u: Control Panel > Network Connections. Provjerite da "Ethernet" veza nije označena kao "Disabled". Ako jeste, desni klik > Enable.',
      },
    ],
  },
  {
    id: 'sajt-blokiran',
    categoryId: 'internet',
    title: 'Sajt je blokiran ili cenzurisan',
    description: 'Pristupite blokiranim web sajtovima',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite HTTPS umjesto HTTP',
        description: 'Neki internet provajderi blokiraju samo HTTP verziju sajta. Pokušajte dodati "https://" ispred URL-a umjesto "http://". Na primjer, https://sajt.com umjesto http://sajt.com.',
      },
      {
        number: 2,
        title: 'Koristite VPN servis',
        description: 'VPN (Virtual Private Network) enkriptuje vaš saobraćaj i mijenja vašu lokaciju. Popularne opcije: NordVPN, ExpressVPN, ProtonVPN (ima besplatnu verziju). Instalirajte aplikaciju, povežite se na server u drugoj zemlji, i pristupite sajtu.',
      },
      {
        number: 3,
        title: 'Promijenite DNS na Google DNS ili Cloudflare',
        description: 'Neki provajderi blokiraju sajtove putem DNS-a. Promijenite DNS na 8.8.8.8 (Google) ili 1.1.1.1 (Cloudflare) u network adapter postavkama. Ovo često zaobilazi blokade.',
      },
    ],
  },
  {
    id: 'router-admin-zaboravljen',
    categoryId: 'internet',
    title: 'Zaboravljena ruter admin lozinka',
    description: 'Pristup ruteru kada ne znate lozinku',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Pokušajte default username/password',
        description: 'Većina rutera dolazi sa default lozinkom. Česte kombinacije: admin/admin, admin/password, admin/1234, root/admin. Također pokušajte samo pritisnuti Enter bez lozinke. Provjerite naljepnicu na ruteru.',
      },
      {
        number: 2,
        title: 'Potražite default credentials online',
        description: 'Posjetite routerpasswords.com ili defaultpassword.com. Unesite brand i model vašeg rutera (piše na naljepnici) da pronađete factory default login podatke.',
      },
      {
        number: 3,
        title: 'Resetujte ruter na factory settings',
        description: 'VAŽNO: Ovo će obrisati SVE postavke! Na zadnjoj strani rutera, pronadite malu rupu označenu "Reset". Koriste stim čačkalicom ili spajalice, držite dugme unutra pritиsnuto 10-30 sekundi dok svjetla ne počnu da trepere. Ruter će se resetovati na factory settings sa default lozinkom.',
      },
    ],
  },
  {
    id: 'dvostruki-nat',
    categoryId: 'internet',
    title: 'Dvostruki NAT / Port forwarding ne radi',
    description: 'Rješavanje problema sa NAT-om za gaming/hosting',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li imate dvostruki NAT',
        description: 'Otvorite Command Prompt i otkucajte "tracert google.com". Ako vidite dvije ili više privatnih IP adresa na početku (192.168.x.x ili 10.x.x.x), imate dvostruki NAT. Ovo se dešava kada imate dva rutera povezana u seriju.',
      },
      {
        number: 2,
        title: 'Stavite jedan ruter u Bridge mode',
        description: 'Ulogujte se u prvi ruter (onaj povezan na modem) i potražite opciju "Bridge Mode" ili "Passthrough Mode". Ovo će isključiti NAT na prvom ruteru. Alternativno, potpuno isključite prvi ruter i koristite samo drugi.',
      },
      {
        number: 3,
        title: 'Podesite DMZ ili port forwarding',
        description: 'U admin panelu rutera, idite na NAT / Port Forwarding sekciju. Dodajte правило za portove koje vam trebaju (npr. port 3074 za Xbox Live). Unesite statičnu IP adresu vašeg uređaja i forwardujte potrebne portove.',
      },
    ],
  },
  {
    id: 'wifi-signal-slab',
    categoryId: 'internet',
    title: 'Wi-Fi signal je slab u određenim prostorijama',
    description: 'Poboljšajte Wi-Fi pokrivenost u kući',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Premjestite ruter na centralnije mjesto',
        description: 'Ruter bi trebao biti: (1) U centru kuće/stana, ne u uglu ili hodniku, (2) Na višem mjestu (regal, orman) - signal se širi bolje odozgo, (3) Dalje od metalnih predmeta i elektronskih uređaja (TV, mikrotalasna) koji stvaraju interferenciju.',
      },
      {
        number: 2,
        title: 'Podignite antene rutera',
        description: 'Ako ruter ima vanjske antene, podesite ih pravilno: jednu vertikalno (uspravno) i jednu horizontalno (vodoravno). Ova različita orijentacija poboljšava pokrivenost u različitim pravcima.',
      },
      {
        number: 3,
        title: 'Nabavite Wi-Fi Extender ili Mesh sistem',
        description: 'Za velike kuće ili debele zidove, nabavite Wi-Fi extender/repeater (100-200 KM) ili Mesh Wi-Fi sistem (300-600 KM). Extender pojačava postojeći signal, dok Mesh sistem kreira jedinstvenu mrežu sa više access pointova.',
      },
    ],
  },
  {
    id: 'mac-address-filter',
    categoryId: 'internet',
    title: 'Uređaj ne može da se poveže na Wi-Fi',
    description: 'Rješavanje MAC filtering problema',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li je MAC filtering aktivan',
        description: 'Ulogujte se u ruter admin panel, potražite "Wireless Security" ili "MAC Filtering" sekciju. Ako je omogućen Whitelist ili Blacklist, provjerite listu.',
      },
      {
        number: 2,
        title: 'Dodajte MAC adresu uređaja u Whitelist',
        description: 'Pronađite MAC adresu vašeg uređaja: Na Androidu: Settings > About Phone > Status > Wi-Fi MAC address. Na iPhoneu: Settings > General > About > Wi-Fi Address. Zatim dodajte tu adresu u ruter Whitelist.',
      },
      {
        number: 3,
        title: 'Privremeno isključite MAC filtering',
        description: 'Ako nemate pristup ruter postavkama, zamolite osobu koja upravlja ruterom da privremeno isključi MAC filtering ili doda vaš uređaj na listu.',
      },
    ],
  },
  {
    id: 'ipv6-problemi',
    categoryId: 'internet',
    title: 'IPv6 connection problemi',
    description: 'Rješavanje problema sa IPv6 protokolom',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li vaš provajder podržava IPv6',
        description: 'Posjetite test-ipv6.com da vidite da li imate IPv6 konekciju. Ako kaže "No IPv6 address detected", vaš provajder možda ne podržava IPv6 ili nije omogućen na ruteru.',
      },
      {
        number: 2,
        title: 'Omogućite IPv6 na ruteru',
        description: 'Ulogujte se u ruter > Internet/WAN settings > potražite "IPv6" opciju. Omogućite je i odaberite tip (obično "Auto" ili "DHCPv6"). Sačuvajte i restartujte ruter.',
      },
      {
        number: 3,
        title: 'Onemogućite IPv6 ako stvara probleme',
        description: 'Neki sajtovi/igre ne rade dobro sa IPv6. Da ga isključite na Windows-u: Network Connections > desni klik na adapter > Properties > ODZNAČITE "Internet Protocol Version 6 (IPv6)".',
      },
    ],
  },
  {
    id: 'captive-portal',
    categoryId: 'internet',
    title: 'Javna Wi-Fi login stranica se ne otvara',
    description: 'Pristup javnom Wi-Fi-ju (hotel, aerodrom, kafić)',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Pokušajte ručno pristupiti login stranici',
        description: 'Otvorite pretraživač i pokušajte posjetiti običan HTTP sajt (ne HTTPS!) kao npr. http://neverssl.com ili http://example.com. Ovo često forsira prikaz login stranice jer HTTPS sajtovi mogu blokirati captive portal redirect.',
      },
      {
        number: 2,
        title: 'Zaboravite i ponovo se povežite',
        description: 'Idite u Wi-Fi postavke, zaboravite tu mrežu, zatim se ponovo povežite. Kada tapnete na mrežu, login stranica bi trebala automatski da se pojavi.',
      },
      {
        number: 3,
        title: 'Isključite VPN i proxy',
        description: 'Javni Wi-Fi hotspoti ne rade sa VPN-om ili proxy serverima. Isključite ih prije povezivanja. Nakon što se uspješno povezete i prijavite, možete ponovo uključiti VPN.',
      },
    ],
  },
  {
    id: 'bandwidth-throttling',
    categoryId: 'internet',
    title: 'Internet provajder usporava brzinu',
    description: 'Otkrijte i zaobiđite bandwidth throttling',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Testiranje throttling-a',
        description: 'Pokrenite speedtest.net u normalnom režimu i zapišite brzinu. Zatim instalirајte i uključite VPN i ponovo pokrenite test. Ako je brzina sa VPN-om značajno brža (20%+), vaš provajder vjerovatno throttle-uje određene vrste saobraćaja.',
      },
      {
        number: 2,
        title: 'Koristite VPN za zaobilaženje',
        description: 'VPN enkriptuje saobraćaj tako da provajder ne može vidjeti šta radite i ne može throttle-ovati specifične servise (Netflix, torrenti, gaming). Koristite premium VPN sa dobrim brzinama.',
      },
      {
        number: 3,
        title: 'Podesite DNS over HTTPS (DoH)',
        description: 'U Chrome/Firefox postavkama, omogućite DNS over HTTPS. Ovo šifruje DNS upite i sprečava provajdera da vidi koje sajtove posječujete, što može smanjiti throttling.',
      },
    ],
  },
  {
    id: 'dhcp-greska',
    categoryId: 'internet',
    title: 'Ne mogu dobiti IP adresu (DHCP greška)',
    description: 'Rješavanje DHCP problema',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Release i renew IP adrese',
        description: 'Otvorite Command Prompt kao administrator. Otkucajte: "ipconfig /release" i pritisnite Enter. Sačekajte 5 sekundi, zatim otkucajte "ipconfig /renew". Ovo će zatražiti novu IP adresu od rutera.',
      },
      {
        number: 2,
        title: 'Restartujte DHCP service',
        description: 'Pritisnite Windows+R, otkucajte "services.msc". Pronađite "DHCP Client" u listi, desni klik > Restart. Takođe restartujte "DNS Client" i "IP Helper" servis.',
      },
      {
        number: 3,
        title: 'Podesite statičnu IP adresu',
        description: 'Ako DHCP i dalje ne radi, podesite ručnu IP: Network Connections > desni klik adapter > Properties > IPv4 > Use the following IP address. Unesite: IP: 192.168.1.100 (ili bilo koji broj 2-254), Subnet: 255.255.255.0, Gateway: 192.168.1.1 (IP rutera).',
      },
    ],
  },
  {
    id: 'powerline-adapter',
    categoryId: 'internet',
    title: 'Powerline adapter ne radi',
    description: 'Rješavanje problema sa mrežom preko struje',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Utaknite direktno u zidnu utičnicu',
        description: 'Powerline adapteri NE RADE preko produžnih kablova ili UPS uređaja! Moraju biti direktno utaknuti u zidne utičnice. Filteri u produžnjima blokiraju powerline signal.',
      },
      {
        number: 2,
        title: 'Spojite adapters (pairing)',
        description: 'Većina powerline adaptera ima "Pair" dugme. Držite pritisnuto na prvom adapteru 3 sekunde, zatim u roku od 2 minuta pritisnite Pair na drugom adapteru. LED indikatori će potvrditi uspješno sparivanje.',
      },
      {
        number: 3,
        title: 'Testirajte različite utičnice',
        description: 'Powerline brzina zavisi od kvaliteta električne instalacije. Pokušajte različite utičnice u kući. Utičnice na istom električnom kolu rade bolje. Izbegavajte utičnice blizu fena, usisivača ili drugih uređaja sa motorima.',
      },
    ],
  },
  {
    id: 'double-natting',
    categoryId: 'internet',
    title: 'NAT Type Strict u gaming',
    description: 'Promijenite NAT type za bolje online gaming',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Podesite UPnP na ruteru',
        description: 'Ulogujte se u ruter > potražite "UPnP" (Universal Plug and Play) postavku i OMOGUĆITE je. UPnP automatski otvara potrebne portove za gaming konzole i igrice. Nakon omogućavanja, restartujte ruter i konzolu/PC.',
      },
      {
        number: 2,
        title: 'Stavite gaming uređaj u DMZ',
        description: 'U ruter postavkama, pronadite "DMZ" opciju. Unesite IP adresu vaše konzole/PC-a. DMZ stavlja uređaj "izvan" firewall-a omogućavajući Open NAT. NAPOMENA: Ovo smanjuje sigurnost, koristite samo za gaming uređaje.',
      },
      {
        number: 3,
        title: 'Port forward za specifične igre',
        description: 'Ako UPnP i DMZ ne pomažu, ručno forwardujte portove. Za Xbox Live: TCP/UDP 3074. Za PlayStation Network: TCP 80, 443, 3478-3480 / UDP 3478-3479. Za PC gaming, provjerite koje portove igra zahtijeva.',
      },
    ],
  },
  {
    id: 'modem-svjetla',
    categoryId: 'internet',
    title: 'Modem/ruter svjetla pokazuju grešku',
    description: 'Dijagnostika problema preko LED indikatora',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje LED indikatora',
        description: 'Zeleno/Plavo svjetlo = Normalno. Narančasto/Žuto = Upozorenje ili částično radi. Crveno = Greška. Trepćuće zeleno = Aktivnost (normalno). Ugašeno svjetlo = Taj port/funkcija nije aktivan.',
      },
      {
        number: 2,
        title: 'Power LED crveno ili trepće',
        description: 'Ako Power indikator nije stabilan zelen/plav, problem je u napajanju. Isključite modem na 30 sekundi, ponovo uključite. Ako se ne stabilizuje, adapter za napajanje ili sam modem može biti neispravan.',
      },
      {
        number: 3,
        title: 'Internet/Online LED crveno',
        description: 'Ovo znači da modem ne može da se poveže na internet provajdera. Provjerite da li je koaksijalni/DSL kabl pravilno povezan. Ako jeste, problem je na strani provajdera - kontaktirajte ih.',
      },
      {
        number: 4,
        title: 'LAN portovi ne svijetle',
        description: 'Kada utaknete Ethernet kabl u LAN port, mali LED pored porta treba da se upali. Ako se ne upali: (1) Kabl nije dobro utaknut, (2) Kabl je neispravan, (3) Port na ruteru ne radi - pokušajte drugi port.',
      },
    ],
  },
  {
    id: 'dns-hijacking',
    categoryId: 'internet',
    title: 'Pretraživač me preusmjerava na čudne sajtove',
    description: 'Rješavanje DNS hijacking i malware',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Skenirajte računar antivirusom i antimalware-om',
        description: 'Instalirajte i pokrenite Malwarebytes (besplatan) + vaš postojeći antivirus. Neki malware mijenja DNS postavke ili dodaje proxy da bi preusmjeravao sajtove. Uradite Full Scan, ne Quick Scan.',
      },
      {
        number: 2,
        title: 'Provjerite proxy postavke',
        description: 'Otvorite Settings > Network & Internet > Proxy. Provjerite da "Use a proxy server" je ISKLJUČEN. Malware često dodaje maliciozni proxy ovdje. Takođe u browser-u provjerite Connection/Proxy settings.',
      },
      {
        number: 3,
        title: 'Resetujte DNS na poznate servere',
        description: 'Podesite DNS na Google (8.8.8.8, 8.8.4.4) ili Cloudflare (1.1.1.1, 1.0.0.1). Također provjerite Hosts fajl: C:\\Windows\\System32\\drivers\\etc\\hosts - treba biti prazan osim par localhost linija. Malware često dodaje maliciozne unose ovdje.',
      },
      {
        number: 4,
        title: 'Provjerite DNS postavke rutera',
        description: 'Ulogujte se u ruter i provjerite DNS postavke. Ako vidite čudne DNS servere koje ne prepoznajete, promijenite ih ili resetujte ruter na factory settings. Neki malware inficira ruter, ne samo računar.',
      },
    ],
  },
  {
    id: 'wifi-5ghz-vs-24ghz',
    categoryId: 'internet',
    title: 'Izbor između 2.4GHz i 5GHz Wi-Fi',
    description: 'Kako odabrati pravi Wi-Fi frekvencijski opseg',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje razlika između 2.4GHz i 5GHz',
        description: '2.4GHz: Sporiji (do 450 Mbps), ALI veći domet i bolje prolazi kroz zidove. Dobar za: dalje prostorije, smart home uređaji, stariji uređaji. 5GHz: Brži (do 1300 Mbps+), ALI kraći domet i slabije prolazi kroz prepreke. Dobar za: gaming, streaming 4K video, ista ili susjedna prostorija.',
      },
      {
        number: 2,
        title: 'Kada koristiti 2.4GHz',
        description: 'Koristite 2.4GHz ako: (1) Ste daleko od rutera ili ima puno zidova između, (2) Veza se često prekida na 5GHz, (3) Uređaj ne podržava 5GHz (stariji telefoni/laptopi), (4) Ne trebate maksimalnu brzinu (browsing web-a, email).',
      },
      {
        number: 3,
        title: 'Kada koristiti 5GHz',
        description: 'Koristite 5GHz ako: (1) Ste blizu rutera (ista ili susjedna prostorija), (2) Trebate maksimalnu brzinu (streaming, gaming, velike downloads), (3) 2.4GHz je prenatrpan (mnogo komšijskih Wi-Fi mreža stvara interferenciju), (4) Imate moderan uređaj koji podržava 5GHz.',
      },
      {
        number: 4,
        title: 'Kako se prebaciti',
        description: 'Moderne ruteri emituju OBJE frekvencije istovremeno. U Wi-Fi listi videćete dvije mreže sa istim imenom ali različitim krajem (npr. "MojWiFi" i "MojWiFi-5G" ili "MojWiFi_5GHz"). Odaberite onu koja vam odgovara. Neki ruteri imaju "Band Steering" koji automatski bira najbolju frekvenciju.',
      },
    ],
  },
  {
    id: 'firefox-chrome-slow',
    categoryId: 'internet',
    title: 'Web pretraživač je spor',
    description: 'Ubrzajte Chrome, Firefox, Edge',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Zatvorite nepotrebne tabove',
        description: 'Svaki otvoren tab troši RAM memoriju. Ako imate 20+ otvorenih tabova, pretraživač će biti spor. Zatvorite sve osim onih koje aktivno koristite. Koristite bookmark-e za sajtove koje želite sačuvati za kasnije.',
      },
      {
        number: 2,
        title: 'Isključite ili obrišite nepotrebne ekstenzije',
        description: 'U Chrome: Menu > More tools > Extensions. U Firefox: Menu > Add-ons. Pregledajte listu i OBRIŠITE ekstenzije koje ne koristite. Prevelik broj ekstenzija drastično usporava pretraživač. Zadržite samo neophodne (ad blocker, password manager).',
      },
      {
        number: 3,
        title: 'Obrišite cache i browsing data',
        description: 'Pritisnite Ctrl+Shift+Delete, označite "Cached images and files", "Cookies", i "Browsing history". Odaberite "All time" i kliknite Clear data. Cache se vremenom nagomilava i usporava pretraživač.',
      },
      {
        number: 4,
        title: 'Omogućite Hardware Acceleration',
        description: 'U Chrome: Settings > System > "Use hardware acceleration when available" - UKLJUČITE. Ovo koristi grafičku karticu umjesto procesora za renderovanje, što ubrzava rad.',
      },
    ],
  },
  {
    id: 'parental-controls',
    categoryId: 'internet',
    title: 'Podešavanje roditeljske kontrole',
    description: 'Ograničite pristup internetu za djecu',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite ruter Parental Controls',
        description: 'Ulogujte se u ruter > potražite "Parental Controls" ili "Access Control". Ovdje možete: (1) Blokiratispecifične web sajtove, (2) Ograničiti internet pristup po vremenskim periodima (npr. samo 16:00-20:00), (3) Blokirati pristup za određene uređaje (po MAC adresi).',
      },
      {
        number: 2,
        title: 'Podesite Windows Family Safety',
        description: 'Na Windows 10/11: Settings > Accounts > Family & other users > Add a family member. Kreirajte child account za dijete. Zatim na family.microsoft.com možete: podesitiscreen time limite, blokirati aplikacije/igrice, vidjeti aktivnost, postaviti age-appropriate web filtering.',
      },
      {
        number: 3,
        title: 'Koristite OpenDNS Family Shield',
        description: 'Promijenite DNS na ruteru ili računaru na OpenDNS Family Shield servere: 208.67.222.123 i 208.67.220.123. Ovo automatski blokira pristup adult content sajtovima. Besplatno je i radi na svim uređajima na mreži.',
      },
    ],
  },
  {
    id: 'isp-outage',
    categoryId: 'internet',
    title: 'Provajder ima outage (nestanak usluge)',
    description: 'Šta raditi kada provajder ima probleme',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da li je problem kod vas ili provajdera',
        description: 'Pokušajte povezati mobilni telefon na mobilne podatke (4G/5G) i provjerite da li drugi sajtovi rade. Pitajte komšije da li i oni nemaju internet. Provjerite Facebook stranicu ili Twitter provajdera za obavještenja o outage-u.',
      },
      {
        number: 2,
        title: 'Restartujte modem dok čekate',
        description: 'Čak i ako je problem na strani provajdera, restart modema može pomoći da se brže ponovo poveže kada servis bude vraćen. Isključite modem 30 sekundi, zatim ponovo uključite.',
      },
      {
        number: 3,
        title: 'Koristite mobilne podatke kao backup',
        description: 'Ako hitno trebate internet, koristite: (1) Mobile hotspot na telefonu - uključite ga u Settings, zatim povežite laptop/tablet, (2) USB tethering - povežite telefon kablom na računar i omogućite tethering u postavkama.',
      },
      {
        number: 4,
        title: 'Kontaktirajte provajdera za kompenzaciju',
        description: 'Ako outage traje duže od nekoliko sati, kontaktirajte provajdera i tražite kompenzaciju ili credit na vašem računu. Većina provajdera nudi dio novca nazad za produžene outage-e.',
      },
    ],
  },
  {
    id: 'buffering-streaming',
    categoryId: 'internet',
    title: 'Video se stalno buffering-uje',
    description: 'Rješavanje problema sa streaming-om (Netflix, YouTube)',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite brzinu interneta',
        description: 'Pokrenite speedtest.net da vidite stvarnu brzinu. Za streaming trebate: SD kvalitet (480p): 3 Mbps, HD (720p/1080p): 5-10 Mbps, 4K: 25 Mbps+. Ako je brzina niža, zatvorite druge aplikacije koje koriste internet.',
      },
      {
        number: 2,
        title: 'Smanjite kvalitet videa',
        description: 'U YouTube: kliknite Settings (zupčanik) > Quality > odaberite nižu rezoluciju (480p ili 720p umjesto 1080p/4K). U Netflixu: Account > Playback settings > Data usage > odaberite Medium ili Low. Niži kvalitet troši manje bandwidtha.',
      },
      {
        number: 3,
        title: 'Pauzir ajte video i pustite da se učita',
        description: 'Kliknite Pause i sačekajte 30-60 sekundi da se video buffer-uje. Gray traka ispod videa pokazuje koliko je učitano. Kada se učita dovoljno (bar 30%), nastavite reprodukciju.',
      },
      {
        number: 4,
        title: 'Koristite Ethernet kabl umjesto Wi-Fi',
        description: 'Wi-Fi može biti nestabilan i uzrokovati buffering. Ako gledate na računaru/laptop ili smart TV, povežite Ethernet kabl direktno u ruter za stabilniju vezu.',
      },
    ],
  },
  {
    id: 'public-wifi-security',
    categoryId: 'internet',
    title: 'Sigurno korištenje javnog Wi-Fi-ja',
    description: 'Zaštitite se na javnim mrežama',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite VPN UVIJEK na javnim mrežama',
        description: 'Javni Wi-Fi nije enkriptovan - svako na istoj mreži može vidjeti vaš saobraćaj. OBAVEZNO koristite VPN (ProtonVPN, NordVPN) prije pristupanja bilo čemu važnom. VPN enkriptuje sve podatke.',
      },
      {
        number: 2,
        title: 'Nikada ne pristupajte bankarskim/payment sajtovima',
        description: 'Izbegavajte online banking, shopping, ili bilo šta što zahtijeva kreditnu karticu na javnom Wi-Fi-ju čak i sa VPN-om. Sačekajte dok ne budete na sigurnoj kućnoj mreži ili koristite mobilne podatke.',
      },
      {
        number: 3,
        title: 'Isključite File Sharing i AirDrop',
        description: 'Na Windows: Network and Sharing Center > Change advanced sharing settings > Turn off file and printer sharing. Na Mac: System Preferences > Sharing > odznačite sve. Na iPhone: isključite AirDrop. Ovo sprečava neovlašteni pristup vašim fajlovima.',
      },
      {
        number: 4,
        title: 'Zaboravite mrežu nakon korištenja',
        description: 'Nakon što napustite lokaciju, idite u Wi-Fi postavke i ZABORAVITE tu mrežu. Ovo sprečava vaš uređaj da se automatski povežeotkazuje na tu mrežu u budućnosti (nekoje to može biti fake verzija prave mreže - "evil twin" attack).',
      },
    ],
  },
  {
    id: 'router-overheating',
    categoryId: 'internet',
    title: 'Ruter se pregrije i prestane raditi',
    description: 'Sprečite pregrijavanje mrežne opreme',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Osigurajte dobru ventilaciju',
        description: 'Ruter generiše toplinu i potrebna mu je cirkulacija vazduha. NEMOJTE: (1) Stavljati ruter u zatvoreni orman/fioku, (2) Stavljati druge uređaje na vrh rutera, (3) Pokrivati ventilacione otvore. Postavite ruter na otvorenom mjestu sa barem 10cm prostora sa svih strana.',
      },
      {
        number: 2,
        title: 'Čistite prašinu',
        description: 'Prašina začepljuje ventilacione otvore. Jednom u 3-6 mjeseci, isključite ruter i koristite compressed air (sprej za prašinu) ili četku da očistite otvore. Nemojte koristiti usisivač jer može stvoriti statički elektricitet.',
      },
      {
        number: 3,
        title: 'Dodajte vanjski ventilator ili hladnjak',
        description: 'Ako ruter i dalje pregrijava: (1) Stavite ga na male "nožice" ili podloške da podignutete sa površine za bolju cirkulaciju, (2) Nabavite mali USB ventilator i uprite ga prema ruteru, (3) Koristite laptop cooling pad ispod rutera.',
      },
      {
        number: 4,
        title: 'Razmislite o zamjeni',
        description: 'Ako je ruter veoma star (5+ godina) i stalno se grije, možda je vrijeme za novi. Noviji ruteri imaju bolje termalno dizajn i efikasnije komponente koje proizvode manje toplote.',
      },
    ],
  },

  // Phone problems
  {
    id: 'baterija-brzo-prazni',
    categoryId: 'telefoni',
    title: 'Baterija se brzo prazni',
    description: 'Savjeti za produženje trajanja baterije telefona',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Smanjite osvijetljenost ekrana',
        description:
          'Ekran vašeg telefona je daleko najveći potrošač baterije - može trošiti 30-50% ukupne energije. Da biste smanjili potrošnju, prvo otvorite Postavke na vašem telefonu. Na Android uređajima, potražite sekciju "Ekran" ili "Display", dok na iPhone-ima idite u Postavke > Ekran i svjetlina. Videćete klizač (slider) za podešavanje osvijetljenosti - povucite ga prema lijevo da smanjite svjetlinu na oko 40-50%. Ne mora biti na najnižem nivou, ali svako smanjenje pomaže. Većina telefona također ima opciju "Automatska osvijetljenost" ili "Auto-brightness" - ovu opciju UKLJUČITE jer telefon koristi senzor da automatski prilagodi osvijetljenost okolini. Na primjer, kada ste napolju na suncu, telefon će povećati svjetlinu da možete vidjeti ekran, a kada ste u mračnoj prostoriji, automatski će je smanjiti. Ovo je mnogo efikasnije nego držati konstantno visoku svjetlinu. Dodatni savjet: Na Android 10+ i iOS 13+, postoji "Dark Mode" (Tamni režim) koji koristi crnu pozadinu u aplikacijama - ovo može uštedjeti 20-30% baterije na telefonima sa OLED ekranima (većina novijih Samsung, iPhone 12+, OnePlus uređaja).',
      },
      {
        number: 2,
        title: 'Isključite nepotrebne aplikacije i servise',
        description:
          'Mnoge aplikacije rade u pozadini i troše bateriju čak i kada ih ne koristite. Da vidite koje aplikacije troše najviše energije, idite u Postavke > Baterija (ili Battery). Na Android uređajima, videćete listu aplikacija sa procentom potrošnje - tapnite na bilo koju aplikaciju da vidite detaljne informacije. Za aplikacije koje troše puno energije a rijetko ih koristite, možete prisilno zatvoriti pritiskom na "Force Stop" ili ih potpuno deinstalirati. Na iPhone-u, idite u Postavke > Baterija i videćete listu sa potrošnjom u posljednjih 24 sata ili 10 dana. Takođe, isključite servise koje ne koristite: Location Services (GPS) troši MNOGO baterije - idite u Postavke > Lokacija i postavite na "While Using App" umjesto "Always" za aplikacije koje ne trebaju konstantnu lokaciju. Bluetooth i Wi-Fi također troše energiju kada su uključeni - isključite ih kada ih ne koristite. Push email notifikacije također troše energiju - razmislite o promjeni na "Manual" ili "Fetch every 30 minutes" umjesto "Push" u postavkama email naloga.',
      },
      {
        number: 3,
        title: 'Uključite režim štednje baterije',
        description:
          'Svi moderni telefoni imaju ugrađeni režim koji produžava trajanje baterije ograničavanjem performansi i funkcionalnosti. Na Android uređajima, ovaj režim se obično zove "Battery Saver" ili "Štednja baterije" i možete ga uključiti povlačenjem od vrha ekrana i tapnanjem na ikonu baterije, ili idući u Postavke > Baterija > Battery Saver. Kada uključite ovaj režim, telefon će automatski: smanjiti performanse procesora (aplikacije će raditi malo sporije), ograničiti pozadinske aktivnosti (aplikacije neće refresh-ovati sadržaj kada ih ne koristite), smanjiti svjetlinu ekrana, isključiti vibracije, i smanjiti refresh rate ekrana. Na iPhone-ima, ovaj režim se zove "Low Power Mode" i nalazi se u Postavke > Baterija. Ikonica baterije u gornjem desnom uglu postaje žuta kada je Low Power Mode aktivan. Možete također postaviti telefon da automatski uključi režim štednje kada baterija padne ispod određenog procenta (npr. 20%). Ne brinite - kada punjite telefon, ovaj režim se automatski isključuje. Savjet: Ako često koristite režim štednje, razmislite o korištenju Battery Widget-a na početnom ekranu koji vam omogućava da brzo uključite/isključite ovaj režim jednim dodirom.',
      },
      {
        number: 4,
        title: 'Isključite vibracije, promenite postavke notifikacija',
        description:
          'Vibracioni motor u vašem telefonu troši iznenađujuću količinu energije - svaki put kada telefon vibrira, miniaturni motor mora fizički da se okreće, što zahtijeva više energije nego zvučno obavještenje. Da biste isključili vibracije, idite u Postavke > Zvukovi i vibracija (na Androidu) ili Postavke > Zvukovi (na iPhoneu). Ovdje možete isključiti: "Vibracija pri zvonu" (telefon će samo zvoniti bez vibracije), "Vibracija pri tapkanju tastature" (telefon neće vibrirati svaki put kada otkucate slovo - ovo ZNAČAJNO pomaže ako puno pišete), i "Vibracija za obavještenja" (aplikacije će slati zvučna obavještenja bez vibracije). Takođe, razmislite o ograničavanju notifikacija uopšte - većina aplikacija šalje previše obavještenja koja nisu potrebna. Idite u Postavke > Obavještenja (ili Notifications) i pregledajte listu aplikacija. Za većinu društvenih mreža, igrica i shopping aplikacija, možete potpuno isključiti notifikacije ili postaviti da se prikazuju samo tiho (bez zvuka i vibracije). Svako obavještenje budi ekran telefona, što troši bateriju. Ako želite zadržati vibracije za važne stvari kao što su pozivi i poruke, možete, ali isključite ih za sve ostalo. Dodatni savjet: Smanjite "Screen timeout" vrijeme (vrijeme nakon kojeg se ekran automatski gasi) na 30 sekundi ili 1 minut - ovo sprečava da ekran nepotrebno radi kada telefon samo leži na stolu.',
      },
    ],
  },
  {
    id: 'memorija-puna',
    categoryId: 'telefoni',
    title: 'Nema više memorije',
    description: 'Kako osloboditi prostor na telefonu',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite korištenje memorije i identifikujte problem',
        description:
          'Prvi korak je da razumijete šta zauzima prostor na vašem telefonu. Otvorite Postavke i potražite sekciju "Memorija" ili "Storage" (na Android) odnosno "iPhone Storage" u Postavke > Općenito > iPhone Storage (na iOS). Videćete grafički prikaz (obično šareni bar) koji pokazuje kako je memorija raspoređena po kategorijama: Aplikacije (Apps), Slike i Videi (Photos & Videos), Audio fajlovi (Music), Dokumenti (Documents), Keš (Cache), i Sistema (System). Tapnite na bilo koju kategoriju da vidite detaljnije informacije. Najčešće kategorije koje zauzimaju najviše prostora su: (1) Fotografije i videi - posebno videi u 4K rezoluciji mogu biti 100-500 MB po minutu snimanja, (2) WhatsApp i Messenger - snimljene slike, videi i glasovne poruke se čuvaju lokalno i mogu zauzeti gigabajte, (3) Igrice - moderne igrice mogu biti 1-5 GB svaka, (4) "Ostalo" ili "Other" - ovo je često keš koji se akumulira tokom vremena. Na Android telefonima, možete instalirati besplatnu aplikaciju "Files by Google" koja vam pokazuje detaljnu analizu i predlaže šta da obrišete. Zapišite ili zapamtite koje kategorije zauzimaju najviše prostora jer ćemo ih rješavati u sljedećim koracima.',
      },
      {
        number: 2,
        title: 'Obrišite i arhivirajte nepotrebne aplikacije',
        description:
          'Aplikacije ne zauzimaju samo prostor koji vidite kada ih instalirate - one također čuvaju podatke, keš i privremene fajlove koji se akumuliraju tokom korištenja. Vratite se na ekran Memorija/Storage i tapnite na "Aplikacije" ili "Apps". Videćete listu svih aplikacija sortirane po veličini - aplikacije na vrhu liste zauzimaju najviše prostora. Pregledajte listu i razmislite o sljedećem: (1) Aplikacije koje nikada ne koristite - potpuno ih deinstalirajte. Dugo pritisnite ikonu aplikacije na početnom ekranu i odaberite "Deinstaliraj" ili "Uninstall", ili idite u Postavke > Aplikacije, odaberite aplikaciju i tapnite "Uninstall". (2) Igrice koje ste završili ili ih više ne igrate - moderne igrice zauzimaju 1-5 GB, tako da brisanje 2-3 igrica može osloboditi značajan prostor. (3) Aplikacije koje imate duplirane funkcionalnosti - npr. ako imate tri aplikacije za foto editovanje, zadržite samo onu koju najčešće koristite. (4) Na novijim Android telefonima postoji opcija "Offload App" ili "Arhiviraj aplikaciju" koja uklanja aplikaciju ali čuva vaše podatke - korisno za aplikacije koje rijetko koristite ali želite zadržati njihove podatke. Dodatni savjet: Provjerite aplikacije društvenih mreža (Facebook, Instagram, TikTok, Twitter) - one često zauzimaju 500MB-2GB zbog keš-a. Možete ih deinstalirati i koristiti web verziju kroz pretraživač, ili obrisati keš u postavkama aplikacije.',
      },
      {
        number: 3,
        title: 'Obrišite keš podatke i privremene fajlove',
        description:
          'Keš (cache) su privremeni fajlovi koje aplikacije čuvaju da bi radile brže, ali oni se neprestano akumuliraju i mogu zauzeti gigabajte prostora tokom vremena. Brisanje keš-a je potpuno sigurno i neće uticati na vaše podatke (lozinke, postavke, sačuvane stvari će ostati). Na Android uređajima: Idite u Postavke > Aplikacije, odaberite aplikaciju (počnite sa najvećima kao što su Chrome, Facebook, Instagram, YouTube), tapnite na "Memorija" ili "Storage", pa tapnite na "Obriši keš" ili "Clear Cache". Možete ovo uraditi za svaku aplikaciju pojedinačno, ili koristiti "Files by Google" aplikaciju koja ima opciju "Clear cache" koja obriše keš za sve aplikacije odjednom. Na iPhone uređajima: iPhone ne dozvoljava direktno brisanje keš-a, ali možete postići sličan efekat brisanjem i ponovnom instalacijom aplikacija koje zauzimaju puno prostora. Alternativno, u Safari pretraživaču, idite u Postavke > Safari > Clear History and Website Data - ovo će obrisati keš web pretraživača. Za WhatsApp specifično (jer često zauzima najviše): Otvorite WhatsApp > Postavke > Memorija i Podaci > Upravljaj memorijom (Manage Storage). Ovdje vidite koje konverzacije zauzimaju najviše - možete obrisati stare slike, videe i dokumente iz pojedinačnih chatova. Savjet: Uradite ovo čišćenje keš-a jednom mjesečno kao rutinu.',
      },
      {
        number: 4,
        title: 'Prebacite slike i videe u cloud servis',
        description:
          'Fotografije i videi su obično najveći potrošač prostora na telefonu, ali ne morate ih brisati - možete ih prebaciti u cloud (online skladište) gdje će biti sigurno sačuvane i dostupne sa bilo kojeg uređaja. Najlakši način: GOOGLE PHOTOS (besplatan za Android i iPhone korisnike): (1) Instalirajte Google Photos aplikaciju sa Play Store ili App Store, (2) Prijavite se sa vašim Google nalogom, (3) Tapnite na vašu profilnu sliku u gornjem desnom uglu > Postavke > Backup & sync, pa UKLJUČITE ovu opciju. Google Photos će automatski upload-ovati sve vaše slike i videe na njihove servere. Možete odabrati "High quality" opciju koja je BESPLATNA i daje neograničeno skladište (slike su malo kompresovane ali i dalje izgledaju izvrsno), ili "Original quality" koja čuva punu rezoluciju ali koristi vaš Google Drive storage (15 GB besplatno). (4) Nakon što se upload završi (videćete da sve slike imaju kvačicu), idite u Google Photos > Postavke > Free up space - ovo će OBRISATI sve slike i videe sa vašeg telefona ALI će one ostati dostupne u Google Photos online. Možete ih vidjeti bilo kada dok imate internet vezu. Alternativni servisi: iCloud Photos (za iPhone korisnike - 5 GB besplatno), OneDrive (Microsoft - 5 GB besplatno), ili Dropbox. Savjet: Stavite Google Photos da automatski pravi backup svake noći kada ste povezani na Wi-Fi - tako nikada nećete izgubiti fotografije čak i ako izgubite telefon, i memorija telefona će uvijek biti čista.',
      },
    ],
  },
  {
    id: 'telefon-se-sporo-puni',
    categoryId: 'telefoni',
    title: 'Telefon se sporo puni',
    description: 'Ubrzajte punjenje baterije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite originalni punjač',
        description: 'Aftermarket punjači često ne isporučuju punu snagu. Originalni punjač koji je došao sa telefonom je najbolji. Provjerite wattage - brži punjači imaju 18W, 25W ili 30W+. Stariji ili jeftini punjači imaju samo 5W što je VEOMA sporo.',
      },
      {
        number: 2,
        title: 'Provjerite kabl za punjenje',
        description: 'Kabl može biti oštećen interno čak i ako izvana izgleda dobro. Pokušajte drugi kabl. Takođe, očistite USB port na telefonu od prašine/dlaka koristeći čačkalicu ili compressed air - prljavština sprečava dobar kontakt.',
      },
      {
        number: 3,
        title: 'Punite sa isključenim telefonom',
        description: 'Ako koristite telefon dok se puni (igrice, video), on se puni mnogo sporije jer istovremeno troši energiju. Najbolje je ugasiti telefon ili staviti u Airplane Mode tokom punjenja.',
      },
      {
        number: 4,
        title: 'Koristite zidni punjač umjesto USB porta računara',
        description: 'USB portovi računara isporučuju samo 0.5-1A struje što je vrlo sporo. Zidni punjač daje 2A ili više. Uvijek koristite zidnu utičnicu za brže punjenje.',
      },
    ],
  },
  {
    id: 'telefon-se-grije',
    categoryId: 'telefoni',
    title: 'Telefon se pregrije',
    description: 'Rješavanje problema sa pregrijavanjem',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Zatvorite resurso-intenzivne aplikacije',
        description: 'Otvorite postavke > Baterija ili Aplikacije da vidite šta najviše koristi procesor. Igrice, kamera, GPS navigacija i video streaming najviše greju telefon. Zatvorite aplikacije koje ne koristite.',
      },
      {
        number: 2,
        title: 'Uklonite telefon iz futrole dok se puni',
        description: 'Futrole/maskice zadržavaju toplotu. Kada punite telefon ili koristite zahtjevne aplikacije, skinite futrolu da bi se telefon lakše hladio.',
      },
      {
        number: 3,
        title: 'Izbegavajte direktnu sunčevu svjetlost',
        description: 'NIKADA ne ostavljajte telefon na direktnom suncu (npr. na dashboard-u automobila). Telefoni se lako greju do 50-60°C na suncu što može oštetiti bateriju i komponente.',
      },
      {
        number: 4,
        title: 'Ažurirajte sistem i aplikacije',
        description: 'Stariji software može imati bugove koji uzrokuju pregrijavanje. Idite u Settings > System Update i instalirajte najnovije ažuriranje. Također ažurirajte aplikacije u Play Store/App Store.',
      },
    ],
  },
  {
    id: 'ekran-ne-reaguje',
    categoryId: 'telefoni',
    title: 'Ekran se zamrzne ili ne reaguje na dodir',
    description: 'Rješavanje touchscreen problema',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Forsirajte restart telefona',
        description: 'Na većini Android telefona: držite Power dugme 10-15 sekundi dok se telefon ne restartuje. Na iPhone-u: Brzo pritisnite Volume Up, zatim Volume Down, zatim držite Side dugme dok se ne pojavi Apple logo.',
      },
      {
        number: 2,
        title: 'Očistite ekran',
        description: 'Prljavština, masnoća ili vlaga na ekranu mogu ometati touchscreen. Obrišite ekran sa mikrofiber krpom. Takođe uklonite screen protector ako imate - možda je oštećen ili loše postavljen.',
      },
      {
        number: 3,
        title: 'Provjerite da rukavice nisu problem',
        description: 'Obične rukavice ne rade sa touchscreen-om. Skinite rukavice ili omogućite "Glove Mode" u postavkama telefona (ako vaš telefon ima tu opciju).',
      },
      {
        number: 4,
        title: 'Factory reset ako problem perzistira',
        description: 'Ako ekran i dalje ne radi pravilno, možda je software problem. Settings > System > Reset > Factory data reset. VAŽNO: Ovo briše SVE podatke - prvo napravite backup!',
      },
    ],
  },
  {
    id: 'aplikacija-crashuje',
    categoryId: 'telefoni',
    title: 'Aplikacija se stalno zatvara (crashuje)',
    description: 'Stabilizujte problematične aplikacije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Force stop aplikaciju',
        description: 'Idite u Settings > Apps > pronadite problematičnu aplikaciju > Force Stop. Zatim je ponovo pokrenite. Ovo često rješava privremene bugove.',
      },
      {
        number: 2,
        title: 'Obrišite cache aplikacije',
        description: 'U istim postavkama aplikacije: Storage > Clear Cache. Ovo briše privremene fajlove ali NE briše vaše podatke ili login informacije. Sigurno je i često pomaže.',
      },
      {
        number: 3,
        title: 'Ažurirajte aplikaciju',
        description: 'Otvorite Play Store/App Store > tapnite na profil ikonu > My Apps & Games / Updates. Ako ima dostupno ažuriranje za tu aplikaciju, instalirajte ga. Nova verzija često popravlja crasheve.',
      },
      {
        number: 4,
        title: 'Deinstalirajte i ponovo instalirajte',
        description: 'Ako ništa ne pomaže, dugo pritisnite ikonu aplikacije > Uninstall. Zatim ponovo preuzmite iz Store-a. Ovo je "čista" instalacija koja često rješava uporne probleme.',
      },
    ],
  },
  {
    id: 'notifikacije-ne-stizu',
    categoryId: 'telefoni',
    title: 'Ne stižu notifikacije',
    description: 'Rješavanje problema sa obavještenjima',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite da notifikacije nisu isključene',
        description: 'Settings > Apps & Notifications > odaberite aplikaciju > Notifications - provjerite da je UKLJUČENO. Takođe provjerite Do Not Disturb mode - povucite od vrha ekrana i provjerite da nije aktivan.',
      },
      {
        number: 2,
        title: 'Isključite Battery Optimization za tu aplikaciju',
        description: 'Settings > Battery > Battery Optimization > odaberite "All apps" > pronadite aplikaciju > odaberite "Don\'t optimize". Aggressive battery saving može blokirati notifikacije.',
      },
      {
        number: 3,
        title: 'Provjerite postavke unutar aplikacije',
        description: 'Otvorite aplikaciju > Settings/Postavke unutar aplikacije. Većina aplikacija ima svoje interne postavke za notifikacije koje moraju biti uključene PORED system notifikacija.',
      },
      {
        number: 4,
        title: 'Provjerite internet vezu',
        description: 'Push notifikacije zahtijevaju internet. Provjerite da WiFi ili mobilni podaci rade. Takođe, neke aplikacije zahtijevaju Google Play Services za notifikacije - osigurajte da su ažurirani.',
      },
    ],
  },
  {
    id: 'bluetooth-se-ne-povezuje',
    categoryId: 'telefoni',
    title: 'Bluetooth se ne povezuje',
    description: 'Rješavanje problema sa Bluetooth vezom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Restartujte Bluetooth',
        description: 'Isključite Bluetooth, sačekajte 5 sekundi, ponovo ga uključite. Takođe restartujte telefon i Bluetooth uređaj (slušalice, zvučnik). Ovo rješava većinu povezivanja problema.',
      },
      {
        number: 2,
        title: 'Zaboravite i ponovo spojite uređaj',
        description: 'Settings > Bluetooth > tapnite na Settings ikonu pored sparenog uređaja > Forget / Unpair. Zatim stavite Bluetooth uređaj u pairing mode (obično hold Power 3-5 sekundi) i spojite ponovo.',
      },
      {
        number: 3,
        title: 'Provjerite da uređaj nije povezan na drugi telefon',
        description: 'Većina Bluetooth uređaja može biti povezana samo na jedan uređaj istovremeno. Isključite Bluetooth na drugom telefonu/računaru ako je uređaj bio povezan tamo.',
      },
      {
        number: 4,
        title: 'Provjerite bateriju Bluetooth uređaja',
        description: 'Prazna baterija često uzrokuje probleme sa vezom. Napunite Bluetooth slušalice/zvučnik potpuno i pokušajte ponovo.',
      },
    ],
  },
  {
    id: 'telefon-spor-lag',
    categoryId: 'telefoni',
    title: 'Telefon je spor i kaska (lag)',
    description: 'Ubrzajte performanse telefona',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Restartujte telefon redovno',
        description: 'Mnogi ljudi nikada ne restartuju telefon - samo lockuju ekran. Restart čisti RAM i resetuje aplikacije. Restartujte telefon najmanje jednom sedmično.',
      },
      {
        number: 2,
        title: 'Obrišite nepotrebne aplikacije',
        description: 'Settings > Apps. Pregledajte listu i deinstalirajte aplikacije koje ne koristite. Manje aplikacija = više RAM-a i storage-a = brži telefon. Posebno obrišite igrice koje ne igrate.',
      },
      {
        number: 3,
        title: 'Obrišite cache za sve aplikacije',
        description: 'Settings > Storage > Cached data > Clear cached data. Ovo može osloboditi par GB prostora i ubrzati sistem. Takođe obrišite Downloads folder od starih fajlova.',
      },
      {
        number: 4,
        title: 'Isključite animacije',
        description: 'Omogućite Developer Options: Settings > About Phone > tapnite "Build Number" 7 puta. Zatim: Settings > Developer Options > Window animation scale, Transition animation scale, Animator duration scale - sve postavite na "Animation off" ili 0.5x za brži UI.',
      },
    ],
  },
  {
    id: 'wifi-se-ne-povezuje-telefon',
    categoryId: 'telefoni',
    title: 'Telefon ne može da se poveže na WiFi',
    description: 'Rješavanje WiFi problema na telefonu',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Zaboravite i ponovo unesite mrežu',
        description: 'Settings > WiFi > dugo pritisnite na mrežu > Forget network. Zatim tapnite ponovo na mrežu, unesite lozinku pažljivo (velika/mala slova su bitna) i povežite se.',
      },
      {
        number: 2,
        title: 'Restartujte telefon i ruter',
        description: 'Isključite telefon potpuno, zatim isključite ruter iz struje na 30 sekundi. Ponovo uključite ruter i sačekajte 2 minute da se pokrene, zatim uključite telefon.',
      },
      {
        number: 3,
        title: 'Resetujte network postavke',
        description: 'Settings > System > Reset options > Reset WiFi, mobile & Bluetooth. Ovo resetuje SVE mrežne postavke na factory default. Nakon toga ponovo unesite WiFi lozinke.',
      },
      {
        number: 4,
        title: 'Provjerite da MAC filtering nije problem',
        description: 'Neki ruteri imaju MAC filtering koji dozvoljava samo specifične uređaje. Ako se drugi telefoni mogu povezati a vaš ne, možda vaša MAC adresa nije u whitelist-u. Kontaktirajte osobu koja upravlja ruterom.',
      },
    ],
  },
  {
    id: 'zvuk-ne-radi-telefon',
    categoryId: 'telefoni',
    title: 'Nema zvuka na telefonu',
    description: 'Rješavanje audio problema',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite volumen i Silent mode',
        description: 'Pritisnite Volume Up dugme nekoliko puta. Provjerite da telefon nije u Silent ili Vibrate mode. Povucite od vrha ekrana i provjerite da je zvuk uključen. Takođe isključite Do Not Disturb mode ako je aktivan.',
      },
      {
        number: 2,
        title: 'Provjerite da slušalice nisu priključene',
        description: 'Ako su slušalice priključene (ili Bluetooth slušalice spojene), zvuk ide tamo umjesto na speaker. Isključite sve slušalice i Bluetooth audio uređaje.',
      },
      {
        number: 3,
        title: 'Očistite speaker',
        description: 'Prašina i dlake mogu začepiti speaker. Koristite meku četku ili compressed air da očistite speaker otvore. NEMOJTE koristiti vodu ili tečnosti.',
      },
      {
        number: 4,
        title: 'Restartujte telefon i testirajte',
        description: 'Restartujte telefon, zatim testirajte zvuk puštanjem muzike ili videa. Ako i dalje ne radi, možda je speaker fizički oštećen - odnesite u servis.',
      },
    ],
  },
  {
    id: 'kamera-ne-radi',
    categoryId: 'telefoni',
    title: 'Kamera ne radi ili je slika zamućena',
    description: 'Rješavanje problema sa kamerom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Očistite sočivo kamere',
        description: 'Otisci prstiju, masnoća ili prašina na sočivu uzrokuju zamućene slike. Koristite mikrofiber krpu (kao za naočale) da nežno obrišete kameru. NEMOJTE koristiti papir koji može izgrebati.',
      },
      {
        number: 2,
        title: 'Force stop i clear cache za Camera app',
        description: 'Settings > Apps > Camera > Force Stop, zatim Clear Cache. Pokrenite kameru ponovo. Ovo resetuje aplikaciju i često rješava bugove.',
      },
      {
        number: 3,
        title: 'Provjerite da drugi aplikacije ne koriste kameru',
        description: 'Samo jedna aplikacija može koristiti kameru istovremeno. Zatvorite sve aplikacije (video call, Snapchat, Instagram) i pokušajte ponovo.',
      },
      {
        number: 4,
        title: 'Testirajte sa drugom camera aplikacijom',
        description: 'Preuzmite drugu camera aplikaciju iz Play Store (npr. Open Camera). Ako radi sa drugom aplikacijom, problem je u default Camera app - možda treba ažurirati ili resetovati.',
      },
    ],
  },
  {
    id: 'mobilni-podaci-ne-rade',
    categoryId: 'telefoni',
    title: 'Mobilni podaci ne rade',
    description: 'Rješavanje 4G/5G problema',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da su mobilni podaci uključeni',
        description: 'Povucite od vrha ekrana i provjerite da je "Mobile Data" ili "Mobilni podaci" uključen. Takođe provjerite da niste slučajno uključili Airplane Mode. U Settings > Network & Internet > Mobile network - provjerite da je "Mobile data" ON.',
      },
      {
        number: 2,
        title: 'Restartujte telefon i uključite/isključite Airplane mode',
        description: 'Uključite Airplane mode na 10 sekundi, zatim ga isključite. Ovo forsira telefon da se ponovo poveže na mrežu. Ako to ne pomogne, potpuno restartujte telefon.',
      },
      {
        number: 3,
        title: 'Provjerite APN postavke',
        description: 'Settings > Network & Internet > Mobile network > Advanced > Access Point Names (APN). Provjerite da APN postavke odgovaraju vašem operateru. Možete ih resetovati na default: Menu > Reset to default.',
      },
      {
        number: 4,
        title: 'Provjerite SIM karticu',
        description: 'Isključite telefon, izvadite SIM karticu, obrišite je sa mikrofiber krpom, provjerite da nije oštećena, i ponovo je stavite. Ako imate rezervnu SIM, probajte sa njom da vidite da li problem je u kartici.',
      },
    ],
  },
  {
    id: 'telefon-se-ne-puni',
    categoryId: 'telefoni',
    title: 'Telefon se uopšte ne puni',
    description: 'Rješavanje potpunog problema sa punjenjem',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Testirajte različite kombinacije kabla i punjača',
        description: 'Problem može biti u kablu, punjaču ili USB portu telefona. Testirajte: (1) Drugi kabl sa istim punjačem, (2) Drugi punjač sa istim kablom, (3) Wireless charging ako telefon podržava.',
      },
      {
        number: 2,
        title: 'Očistite USB port na telefonu',
        description: 'USB port se lako začepi prašinom, dlakom ili prljavštinom. Koristite DRVENU čačkalicu (ne metalnu!) ili compressed air da nežno očistite port. Budite pažljivi da ne oštetite kontakte unutra.',
      },
      {
        number: 3,
        title: 'Provjerite da kabl pravilno sjedai u port',
        description: 'Kabl treba da uđe do kraja bez otpora. Ako "lebdi" ili lako ispadne, port može biti oštećen ili začepljen. Pogledajte sa baterijskom lampom unutra - možete vidjeti prljavštinu.',
      },
      {
        number: 4,
        title: 'Pokušajte "battery calibration" ili factory reset',
        description: 'Ponekad software misli da je baterija puna kada nije. Ispraznite telefon potpuno dok se ne ugasi, zatim punite 6-8 sati bez prekida. Ako to ne pomaže, možda je problem hardverski - odnesite u servis.',
      },
    ],
  },
  {
    id: 'sim-not-detected',
    categoryId: 'telefoni',
    title: 'SIM kartica nije detektovana',
    description: 'Rješavanje "No SIM" greške',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Izvadite i ponovo stavite SIM karticu',
        description: 'Isključite telefon potpuno (ne samo lock screen). Koristite SIM ejector tool (mala iglica) da otvorite SIM tray. Izvadite SIM, provjerite da nije oštećena ili prljava, obrišite je sa mikrofiber krpom, i ponovo je pravilno stavite. Uključite telefon.',
      },
      {
        number: 2,
        title: 'Provjerite da SIM nije zaključana',
        description: 'Ako vidite poruku "Enter PUK code" ili "SIM locked", NE POKUŠAVAJTE nasumično. Kontaktirajte vašeg mobilnog operatera za PUK kod - imate samo 10 pokušaja prije nego SIM kartica bude trajno zaključana.',
      },
      {
        number: 3,
        title: 'Testirajte SIM u drugom telefonu',
        description: 'Stavite vašu SIM karticu u drugi telefon. Ako radi tamo, problem je u vašem telefonu (oštećen SIM reader). Ako ne radi ni tamo, SIM kartica je neispravna - kontaktirajte operatera za zamjenu.',
      },
      {
        number: 4,
        title: 'Provjerite da telefon nije SIM-locked',
        description: 'Ako ste kupili telefon od drugog operatera ili iz inostranstva, možda je locked na određenu mrežu. Kontaktirajte prethodnog operatera da unlock-uju telefon ili koristite online unlock servise.',
      },
    ],
  },
  {
    id: 'auto-rotate-ne-radi',
    categoryId: 'telefoni',
    title: 'Auto-rotate (automatska rotacija) ne radi',
    description: 'Rješavanje problema sa rotacijom ekrana',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da auto-rotate nije isključen',
        description: 'Povucite od vrha ekrana dva puta da vidite Quick Settings. Potražite ikonu "Auto-rotate" ili "Portrait/Landscape" i provjerite da je uključen. Ako je u Portrait lock mode, tapnite da omogućite auto-rotate.',
      },
      {
        number: 2,
        title: 'Kalibrirajte accelerometer/gyroscope',
        description: 'Postavite telefon na potpuno ravnu površinu. Otvorite dialer i otkucajte *#0*# (Samsung) ili preuzmite "Gyroscope Test" aplikaciju. Pokrenite sensor calibration/test i slijedite instrukcije.',
      },
      {
        number: 3,
        title: 'Restartujte telefon',
        description: 'Ponekad senzori se "zablokiraju". Potpuni restart često rješava problem. Držite Power dugme > Restart/Reboot.',
      },
      {
        number: 4,
        title: 'Provjerite da aplikacija podržava landscape mode',
        description: 'Neke aplikacije (posebno društvene mreže) ne podržavaju landscape orijentaciju i uvijek ostaju u portrait modu čak i sa uključenim auto-rotate. Ovo je normalno.',
      },
    ],
  },
  {
    id: 'gps-ne-radi',
    categoryId: 'telefoni',
    title: 'GPS nije tačan ili ne radi',
    description: 'Rješavanje lokacijskih problema',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Omogućite High accuracy location mode',
        description: 'Settings > Location > Mode > odaberite "High accuracy". Ovo koristi GPS, WiFi i mobilne podatke za tačniju lokaciju. "Battery saving" mode je manje tačan.',
      },
      {
        number: 2,
        title: 'Kalibrirajte kompas',
        description: 'Otvorite Google Maps, tapnite na plavu tačku (vaša lokacija) > Calibrate. Pomjerajte telefon u obliku broja "8" u vazduhu 10-15 sekundi. Ovo kalibrira magnetni senzor.',
      },
      {
        number: 3,
        title: 'Provjerite da ste napolju sa jasnim pogledom na nebo',
        description: 'GPS ne radi dobro u zatvorenom prostoru, tunelima ili između visokih zgrada. Izađite napolje na otvoreno da dobijete signal. Trebaju vam najmanje 4 satelita za tačnu lokaciju.',
      },
      {
        number: 4,
        title: 'Resetujte GPS/AGPS data',
        description: 'Preuzmite aplikaciju "GPS Status & Toolbox" iz Play Store. Otvorite je > Menu > Manage A-GPS state > Reset, zatim Download. Ovo osvježava satelitske podatke.',
      },
    ],
  },
  {
    id: 'play-store-greska',
    categoryId: 'telefoni',
    title: 'Google Play Store ne radi ili javlja grešku',
    description: 'Rješavanje problema sa Play Store-om',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Clear cache i data za Play Store',
        description: 'Settings > Apps > Google Play Store > Storage > Clear Cache, zatim Clear Data. Takođe uradite isto za "Google Play Services" i "Download Manager". Ponovo otvorite Play Store.',
      },
      {
        number: 2,
        title: 'Provjerite datum i vrijeme',
        description: 'Netačan datum/vrijeme uzrokuju Play Store greške. Settings > Date & Time > omogućite "Automatic date & time". Ako je bio pogrešan, restartujte telefon.',
      },
      {
        number: 3,
        title: 'Uklonite i ponovo dodajte Google nalog',
        description: 'Settings > Accounts > Google > odaberite nalog > Remove account. Zatim dodajte ponovo: Accounts > Add account > Google. Ulogujte se sa Gmail i lozinkom.',
      },
      {
        number: 4,
        title: 'Deinstalirajte Play Store updates',
        description: 'Settings > Apps > Google Play Store > Menu (tri tačkice) > Uninstall updates. Ovo vraća Play Store na factory verziju. Zatim će se automatski ažurirati na najnoviju.',
      },
    ],
  },
  {
    id: 'otisak-prsta-ne-radi',
    categoryId: 'telefoni',
    title: 'Fingerprint sensor ne radi',
    description: 'Rješavanje problema sa otiscima prstiju',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Očistite fingerprint sensor',
        description: 'Masnoća, prašina ili vlaga na senzoru sprečavaju očitavanje. Obrišite sensor sa mikrofiber krpom. Takođe osigurajte da vaš prst je čist i suv - vlažni ili prljavi prsti ne rade dobro.',
      },
      {
        number: 2,
        title: 'Obrišite i ponovo registrujte otisak',
        description: 'Settings > Security > Fingerprint > obrišite postojeći otisak, zatim dodajte ga ponovo. Ovog puta prilikom registracije, dodirujte sensor iz različitih uglova i pokrivajte cijelu površinu prsta.',
      },
      {
        number: 3,
        title: 'Dodajte isti prst više puta',
        description: 'Možete registrovati isti prst 2-3 puta kao "različite" otiske. Ovo poboljšava prepoznavanje jer sistem ima više podataka o tom prstu.',
      },
      {
        number: 4,
        title: 'Provjerite da screen protector nije problem',
        description: 'Neki debeli ili jeftini screen protektori ometaju in-display fingerprint senzore. Ako imate takav sensor, koristite ultra-tanki protector dizajniran za fingerprint telefone ili uklonite protector.',
      },
    ],
  },
  {
    id: 'telefon-ne-zvoni',
    categoryId: 'telefoni',
    title: 'Telefon ne zvoni pri pozivu',
    description: 'Rješavanje problema sa zvonom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite volumen i Silent mode',
        description: 'Pritisnite Volume Up da povećate jačinu zvona. Povucite od vrha i provjerite da nije aktivan Silent mode ili Do Not Disturb. U Settings > Sound, provjerite da "Ring volume" nije na minimum.',
      },
      {
        number: 2,
        title: 'Isključite Do Not Disturb i provjete exceptions',
        description: 'Settings > Sound > Do Not Disturb. Ako je uključen, ili ga potpuno isključite ili podesite da dozvoljava pozive od "Starred contacts" ili "Anyone".',
      },
      {
        number: 3,
        title: 'Provjerite da zvuk zvona nije "None"',
        description: 'Settings > Sound > Phone ringtone. Provjerite da je odabrana melodija, a ne "None" ili "Silent". Tapnite na neku melodiju da je testirate.',
      },
      {
        number: 4,
        title: 'Provjerite Contacts postavke',
        description: 'Možda ste slučajno podesili da određeni kontakt ima "Custom ringtone: None". Otvorite Contacts aplikaciju, pronadite osobu koja zove, Edit > Ringtone > podesite na default ili odaberite melodiju.',
      },
    ],
  },
  {
    id: 'screenshot-ne-radi',
    categoryId: 'telefoni',
    title: 'Screenshot ne radi',
    description: 'Rješavanje problema sa snimanjem ekrana',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite pravilnu kombinaciju tastera',
        description: 'Većina Android telefona: Power + Volume Down istovremeno, držite 1 sekundu. Samsung: Power + Volume Down. Stariji Samsung: Power + Home. iPhone sa Face ID: Side button + Volume Up. iPhone sa Home: Power + Home.',
      },
      {
        number: 2,
        title: 'Držite tastera dovoljno dugo',
        description: 'Ne samo tapnite - DRŽITE oba dugmeta pritisnuta oko 1-2 sekunde dok ne vidite animaciju ili ne čujete zvuk screenshota. Oslobodite odmah nakon.',
      },
      {
        number: 3,
        title: 'Provjerite da aplikacija ne blokira screenshot',
        description: 'Neke aplikacije (Netflix, banking aplikacije, Incognito browser) blokiraju screenshotove iz sigurnosnih razloga. Ovo je normalno i ne može se zaobići.',
      },
      {
        number: 4,
        title: 'Koristite alternativne metode',
        description: 'Android: Koristite Google Assistant ("Take a screenshot") ili Quick Settings panel (povucite dolje, možda ima Screenshot button). Samsung: Palm swipe to capture (Settings > Advanced features).',
      },
    ],
  },
  {
    id: 'telefon-se-sam-restartuje',
    categoryId: 'telefoni',
    title: 'Telefon se sam restartuje ili gasi',
    description: 'Rješavanje random restartova',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite da baterija nije problem',
        description: 'Stara ili oštećena baterija može uzrokovati nasumične restartove. Preuzmite aplikaciju "AccuBattery" da provjerite health baterije. Ako je ispod 80%, razmislite o zamjeni baterije.',
      },
      {
        number: 2,
        title: 'Boot u Safe Mode da testirate',
        description: 'Držite Power dugme, zatim dugo pritisnite na "Power off" opciju dok se ne pojavi "Reboot to safe mode". U safe mode, samo sistemske aplikacije rade. Ako telefon ne restartuje u safe mode, problem je u nekoj aplikaciji koju ste instalirali.',
      },
      {
        number: 3,
        title: 'Obrišite problematične aplikacije',
        description: 'Ako se restartovi dešavaju nakon instaliranja određene aplikacije, ta aplikacija je vjerovatno uzrok. Deinstalirajte nedavno instalirane aplikacije jednu po jednu dok ne identifikujete krivca.',
      },
      {
        number: 4,
        title: 'Factory reset kao zadnje rješenje',
        description: 'Ako ništa ne pomaže, software može biti korruptiran. Napravite backup važnih podataka, zatim: Settings > System > Reset > Factory data reset. Ovo briše sve ali često rješava uporne probleme.',
      },
    ],
  },
  {
    id: 'usb-debugging',
    categoryId: 'telefoni',
    title: 'Računar ne prepoznaje telefon preko USB-a',
    description: 'Rješavanje USB connection problema',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Promijenite USB mode na telefonu',
        description: 'Kada povežete telefon, povucite notifikaciju koja kaže "Charging this device via USB" i tapnite na nju. Odaberite "File Transfer" (MTP) umjesto "Charging only". Tek tada će računar vidjeti telefon kao disk.',
      },
      {
        number: 2,
        title: 'Testirajte drugi kabl i USB port',
        description: 'Mnogi USB kablovi su samo za punjenje, ne i za data transfer! Koristite originalni kabl koji je došao sa telefonom. Takođe probajte drugi USB port na računaru - USB 3.0 portovi (plavi) su najbolji.',
      },
      {
        number: 3,
        title: 'Instalirajte USB drivere',
        description: 'Windows ponekad treba specifične drivere. Za Samsung: instalirajte Samsung Smart Switch. Za drugi Android: instalirajte manufakturerove USB drivere. Za iPhone: instalirajte iTunes (čak i ako ga ne koristite, dolazi sa potrebnim driverima).',
      },
      {
        number: 4,
        title: 'Omogućite USB Debugging (za napredne)',
        description: 'Settings > About Phone > tapnite "Build number" 7 puta da omogućite Developer Options. Zatim: Settings > Developer Options > omogućite "USB Debugging". Ovo daje računaru pun pristup telefonu.',
      },
    ],
  },
  {
    id: 'whatsapp-backup',
    categoryId: 'telefoni',
    title: 'WhatsApp backup ne radi',
    description: 'Rješavanje problema sa WhatsApp backup-om',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite Google Drive prostor',
        description: 'Backup se čuva na Google Drive-u. Idite na drive.google.com i provjerite da imate dovoljno slobodnog prostora. WhatsApp backup može biti 1-5 GB. Obrišite stare fajlove ili nadogradite na veći plan.',
      },
      {
        number: 2,
        title: 'Provjerite da ste ulogovani sa pravim Google nalogom',
        description: 'WhatsApp > Settings > Chats > Chat backup. Provjerite da je prikazan isti Google nalog koji ste koristili za prethodni backup. Ako je drugačiji, tapnite na njega i odaberite pravi nalog.',
      },
      {
        number: 3,
        title: 'Backup samo preko WiFi',
        description: 'U Chat backup postavkama, provjerite da ste povezani na WiFi (ne mobilne podatke) i da "Back up over" je podešen na "WiFi only". Backup može biti gigabajti i ne radi dobro preko mobilnih podataka.',
      },
      {
        number: 4,
        title: 'Obrišite stari backup i napravite novi',
        description: 'Idite na drive.google.com > Settings (zupčanik) > Manage apps > WhatsApp Messenger > Options > Delete hidden app data. Zatim napravite fresh backup sa telefona.',
      },
    ],
  },
  {
    id: 'night-light-blue-filter',
    categoryId: 'telefoni',
    title: 'Podešavanje Night Light / Blue Light filtera',
    description: 'Smanjite opterećenje očiju noću',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Omogućite Night Light / Blue Light filter',
        description: 'Android: Settings > Display > Night Light ili Blue Light Filter > uključite. iPhone: Settings > Display & Brightness > Night Shift > uključite. Ovaj filter daje ekranu toplijiжutu/narančastu nijansu koja manje zamara oči noću.',
      },
      {
        number: 2,
        title: 'Podesite automatski raspored',
        description: 'U istim postavkama, omogućite "Schedule" i odaberite "Sunset to sunrise" (od zalaska do izlaska sunca) ili podesite custom vrijeme (npr. 20:00 - 07:00). Filter će se automatski uključivati svake večeri.',
      },
      {
        number: 3,
        title: 'Podesite intenzitet',
        description: 'Koristite slider da podesite koliko žuto/narančast ekran postaje. Počnite sa 50% i prilagodite kako vam odgovara. Veći intenzitet = toplija boja = manje plavog svjetla.',
      },
      {
        number: 4,
        title: 'Kombinujte sa Dark Mode',
        description: 'Za najbolje rezultate, također omogućite Dark Mode: Settings > Display > Dark theme. Dark mode + Night Light zajedno značajno smanjuju opterećenje očiju i štede bateriju na OLED ekranima.',
      },
    ],
  },

  // Hardware problems
  {
    id: 'racunar-spor',
    categoryId: 'hardver',
    title: 'Računar je spor',
    description: 'Kako ubrzati rad računara',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Restartujte računar pravilno',
        description:
          'Mnogi ljudi nikada ne restartuju računar - samo zatvore poklopac laptopa ili stave računar u "Sleep" režim. Tokom vremena, ovo uzrokuje akumulaciju privremenih fajlova u memoriji i usporen rad. Pravi restart čisti RAM memoriju i osvježava sistem. Kliknite na Start dugme (Windows logo u donjem lijevom uglu), pa kliknite na Power ikonu. VAŽNO: Nemojte odabrati "Shut down" nego odaberite "Restart". Zašto? "Shut down" u Windows 10/11 ne radi potpuni restart nego koristi "Fast Startup" funkciju koja čuva stanje sistema u fajl na hard disku. "Restart" radi potpuni restart koji čisti sve iz memorije. Ako želite da osigurate da se pravi restart desi, možete držati Shift taster pritisnuto dok klikate na "Shut down" - ovo forsira potpuno gašenje. Sačekajte 10 sekundi nakon što se računar ugasi, pa pritisnite Power dugme da ga ponovo uključite. Kada se sistem učita, primijetićete da radi brže. Savjet: Restartujte računar najmanje jednom sedmično, ili svaki put kada primijetite da je spor.',
      },
      {
        number: 2,
        title: 'Identifikujte i zatvorite resurse koje troše CPU i RAM',
        description:
          'Task Manager je alat koji pokazuje koje aplikacije i procesi troše resurse vašeg računara. Da ga otvorite, pritisnite Ctrl+Shift+Esc sve tri tastera istovremeno (alternativno, desni klik na taskbar i odaberite "Task Manager"). Ako vidite samo jednostavnu listu aplikacija, kliknite na "More details" na dnu. Sada vidite detaljnu tabelu sa kolonama: Name (naziv programa), CPU (koliko procesora koristi), Memory (koliko RAM-a koristi), Disk (koliko hard disk koristi), i Network (koliko interneta koristi). Kliknite na kolonu "CPU" da sortirate po korištenju procesora - programi na vrhu troše najviše. Često ćete vidjeti: (1) Web pretraživači (Chrome, Firefox, Edge) - ako imate 20+ otvorenih tabova, svaki troši memoriju. Zatvorite tabove koje ne koristite. (2) Antivirus programi koji rade skeniranje - sačekajte da završe. (3) Windows Update ili "Service Host" - sistem se ažurira u pozadini, sačekajte da završi. (4) Nepoznati procesi koji troše 50%+ CPU-a konstantno - ovo može biti malware, koristite antivirus. Da zatvorite program, desni klik na njega > "End task". PAŽNJA: Ne zatvarajte procese koji se zovu "Windows", "System", ili "Service Host" osim ako znate šta radite. Zatvarajte samo aplikacije koje prepoznajete. Nakon zatvaranja resurso-intenzivnih programa, CPU i memorija korištenje bi trebalo pasti ispod 30% kada ne radite ništa.',
      },
      {
        number: 3,
        title: 'Obrišite privremene fajlove koristeći Disk Cleanup',
        description:
          'Windows sistem kontinuirano kreira privremene fajlove dok radite - fajlovi preuzimanja, internet keš, error report fajlovi, stare Windows ažuriranja, Recycle Bin - sve ovo se akumulira i može zauzeti 10-50 GB prostora, usporavajući računar. Disk Cleanup je ugrađeni Windows alat koji sigurno briše ove fajlove. Da ga otvorite: (1) Kliknite na Start i otkucajte "Disk Cleanup", pa kliknite na aplikaciju koja se pojavi, ili (2) Otvorite "This PC", desni klik na C: disk > Properties > Disk Cleanup dugme. Alat će skenirati nekoliko minuta i pokazati listu kategorija fajlova koje možete obrisati. Videćete opcije kao: "Temporary files" (temp fajlovi), "Recycle Bin" (korpa za otpatke), "Downloads" (fajlovi u Downloads folderu - PAŽNJA sa ovim, možete obrisati nešto važno), "Thumbnails" (male preview slike), "Temporary Internet Files" (web keš). Označite sve osim "Downloads" ako niste sigurni šta je u tom folderu. Sada kliknite na "Clean up system files" dugme - ovo će ponovo skenirati ali ovog puta uključujući system fajlove. Nakon što scan završi, označite "Windows Update Cleanup" i "Previous Windows installations" - ove dvije kategorije mogu osloboditi 5-20 GB prostora! Kliknite OK i potvrdite brisanje. Proces može trajati 10-30 minuta za Previous Windows installations. Dodatni savjet: Nakon ovoga, otvorite Start > Postavke > System > Storage > Temporary files i kliknite "Remove files" - ovo briše dodatne temp fajlove koje Disk Cleanup možda ne obuhvata.',
      },
      {
        number: 4,
        title: 'Optimizujte startup programe',
        description:
          'Jedan od najvećih razloga zašto računar sporo startuje i sporo radi nakon pokretanja su aplikacije koje se automatski pokreću sa Windows-om. Svaka od ovih aplikacija troši memoriju i resurse, usporavajući sistem. Da vidite i isključite ove programe: Otvorite Task Manager (Ctrl+Shift+Esc), pa kliknite na tab "Startup" na vrhu. Videćete listu svih programa koji se pokreću sa Windows-om, sa kolonama: Name (naziv programa), Publisher (proizvođač), Status (Enabled ili Disabled), i Startup impact (uticaj na pokretanje - High, Medium, Low). Programi sa "High" uticajem najviše usporavaju pokretanje. Pregledajte listu i razmislite: Da li vam zaista treba da ovaj program bude automatski pokrenut svaki put? Većina programa NE TREBA da se pokreće automatski. Sigurno možete onemogućiti: (1) Spotify, iTunes, Discord, Slack, Teams - osim ako ih koristite SVAKI dan čim uključite računar, (2) Epic Games, Steam, Origin - gaming platforme ne trebaju raditi konstantno, (3) Microsoft OneDrive, Dropbox, Google Drive - ako ne koristite cloud sync konstantno, (4) Printer softveri, scanner softveri - pokreću se kada vam trebaju. NEMOJTE onemogućiti: (1) Antivirus programi (Windows Defender, Norton, McAfee), (2) Audio driveri (Realtek, AMD Audio), (3) Grafički driver aplikacije (Nvidia, AMD Radeon), (4) Windows Security Notification. Da onemogućite program, desni klik na njega > "Disable". Ovo neće deinstalirati program - samo ga sprečava da se automatski pokreće. Možete ga i dalje pokrenuti ručno kada vam treba. Nakon što onemogućite nepotrebne startup programe, restartujte računar - primijetićete da se sistem pokreće mnogo brže i radi bolje.',
      },
    ],
  },
  {
    id: 'plavi-ekran-bsod',
    categoryId: 'hardver',
    title: 'Plavi ekran (Blue Screen of Death)',
    description: 'Rješavanje BSOD grešaka',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Zapišite kod greške',
        description: 'Plavi ekran prikazuje STOP kod (npr. "IRQL_NOT_LESS_OR_EQUAL", "PAGE_FAULT_IN_NONPAGED_AREA"). Zapišite ili fotografišite ovaj kod - on pokazuje šta je uzrokovalo crash. Takođe zapišite fajl koji je naveden (npr. ntoskrnl.exe).',
      },
      {
        number: 2,
        title: 'Ažurirajte drivere',
        description: 'Većina BSOD-ova uzrokovana je starim ili korumpiranim driverima. Desni klik Start > Device Manager. Potražite žute uzvičnike. Ažurirajte: grafičku karticu (najčešći uzrok), network adapter, chipset drivere. Posjetite web sajt proizvođača za najnovije verzije.',
      },
      {
        number: 3,
        title: 'Testirajte RAM memoriju',
        description: 'Loš RAM često uzrokuje BSOD. Otkucajte "Windows Memory Diagnostic" u Start search, pokrenite ga i odaberite "Restart now and check". Računar će se restartovati i testirati RAM 10-15 minuta. Ako pronađe greške, neki RAM modul je neispravan.',
      },
      {
        number: 4,
        title: 'Provjerite temperaturu i hardware',
        description: 'Pregrijavanje može uzrokovati crasheve. Preuzmite HWMonitor ili Core Temp da provjerite temperature. CPU preko 85°C ili GPU preko 90°C je previše. Očistite prašinu iz računara, provjerite da ventilatori rade.',
      },
    ],
  },
  {
    id: 'monitor-no-signal',
    categoryId: 'hardver',
    title: 'Monitor kaže "No Signal"',
    description: 'Rješavanje problema sa video signalom',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite video kabl',
        description: 'Isključite i ponovo utaknite video kabl (HDMI, DisplayPort, VGA) na oba kraja - monitor i računar. Provjerite da kabl nije oštećen. Pokušajte drugi kabl ako imate. Takođe provjerite da kabl je utknut u GRAFIČKU KARTICU, ne u motherboard (ako imate dedikovan GPU).',
      },
      {
        number: 2,
        title: 'Provjerite da računar radi',
        description: 'Čujete li da računar radi (ventilaturi, hard disk)? Svjetle li LED indikatori? Ako ne, problem je da se računar uopšte ne pali, ne u monitoru. Provjerite napajanje. Ako računar radi ali nema slike, nastavite sa sljedećim korakom.',
      },
      {
        number: 3,
        title: 'Testirajte sa drugim monitorom ili TV-om',
        description: 'Povežite računar na drugi monitor ili TV sa HDMI-jem da vidite da li je problem u monitoru ili računaru. Ako drugi monitor radi, vaš originalni monitor je neispravan. Ako ni drugi monitor ne radi, problem je u grafičkoj kartici ili motherboard-u.',
      },
      {
        number: 4,
        title: 'Resetujte BIOS (CMOS clear)',
        description: 'Isključite računar iz struje. Otvorite kućište i pronadite CMOS bateriju (mala okrugla baterija kao za sat). Izvadite je na 5 minuta, zatim je vratite. Ovo resetuje BIOS postavke koje možda uzrokuju problem sa video izlazom.',
      },
    ],
  },
  {
    id: 'ventilator-glasan',
    categoryId: 'hardver',
    title: 'Ventilatori su glasni',
    description: 'Smanjite buku i poboljšajte hlađenje',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Očistite prašinu',
        description: 'Prašina je #1 uzrok glasnih ventilatora. Isključite računar iz struje, otvorite kućište. Koristite compressed air (sprej za prašinu) da ispuhate prašinu iz ventilatora, heatsink-ova, i cijelog kućišta. NE KORISTITE usisivač (statički elektricitet!).',
      },
      {
        number: 2,
        title: 'Provjerite fan curves u BIOS-u',
        description: 'Restart računara, pritisnite Del ili F2 da uđete u BIOS. Pronadite "Fan Control" ili "Q-Fan Control" opciju. Podesite na "Silent" ili "Quiet" profil umjesto "Performance". Ovo usporava ventilatore dok temperature dozvoljavaju.',
      },
      {
        number: 3,
        title: 'Namažite ventilatore',
        description: 'Stari ventilatori mogu škripati zbog suhih ležajeva. Odlijepite sticker sa središta ventilatora, videćete ležaj. Dodajte 1-2 kapi machine oil ili sewing machine oil (NE WD-40!). Ovo može značajno smanjiti buku.',
      },
      {
        number: 4,
        title: 'Zamijenite glasne ventilatore',
        description: 'Ako ventilator i dalje pravi buku, možda je oštećen. Kvalitetni silent ventilatori kao Noctua, be quiet!, ili Arctic koštaju 20-50 KM i drastično su tiši. Provjerite veličinu (120mm, 140mm) i zamjenite.',
      },
    ],
  },
  {
    id: 'hard-disk-fail',
    categoryId: 'hardver',
    title: 'Hard disk pravi čudne zvukove',
    description: 'Dijagnostika i backup prije kvara',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'ODMAH napravite backup!',
        description: 'Klikovi, škripanje ili struganje zvukovi znače da hard disk umire! NE GUBITE VRIJEME - odmah kopirajte sve važne podatke na vanjski disk ili cloud. Hard disk može potpuno otkazati bilo kada i izgubićete SVE podatke.',
      },
      {
        number: 2,
        title: 'Provjerite SMART status',
        description: 'Preuzmite CrystalDiskInfo (besplatno). Pokrene će ga i pokazati SMART status diska. Ako kaže "Caution" ili "Bad" u bilo kojoj kategoriji, disk je u opasnosti. "Reallocated Sectors Count" ili "Current Pending Sectors" preko 0 je loš znak.',
      },
      {
        number: 3,
        title: 'Testirajte disk sa Check Disk',
        description: 'Otvorite Command Prompt kao administrator. Otkucajte "chkdsk C: /f /r" i pritisnite Enter. Sistem će pitati da li želite skenirati pri sljedećem restart-u - odgovorite Y. Restartujte računar. Scan može trajati 1-5 sati zavisno od veličine diska.',
      },
      {
        number: 4,
        title: 'Razmislite o zamjeni sa SSD-om',
        description: 'Ako disk pokazuje znake kvara, nabavite novi disk ŠTO PRIJE. Preporučujemo SSD umjesto HDD - brži, tiši, pouzdaniji. 500GB SSD košta oko 100-150 KM. Klonirajte trenutni disk na novi dok još radi.',
      },
    ],
  },
  {
    id: 'ram-problem',
    categoryId: 'hardver',
    title: 'Memorija (RAM) ne radi pravilno',
    description: 'Dijagnostika i rješavanje RAM problema',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Prepoznajte simptome RAM problema',
        description: 'Znaci lošeg RAM-a: (1) Česti random crashevi ili freezing, (2) Plavi ekran sa različitim greškama, (3) Fajlovi postaju korumpirani, (4) Aplikacije se neočekivano zatvaraju, (5) Računar beep-uje prilikom pokretanja.',
      },
      {
        number: 2,
        title: 'Pokrenite Windows Memory Diagnostic',
        description: 'Pritisnite Windows+R, otkucajte "mdsched.exe", Enter. Odaberite "Restart now and check". Test traje 10-20 minuta. Ako pronađe greške, imate loš RAM modul. Zapišite koje greške je pronašao.',
      },
      {
        number: 3,
        title: 'Testirajte RAM module pojedinačno',
        description: 'Isključite računar iz struje, otvorite kućište. Izvadite sve RAM module osim jednog. Pokušajte pokrenuti računar. Ako radi stabilno, taj modul je OK. Isključite, zamijenite sa drugim modulom i testirajte. Ponavljajte dok ne identifikujete loš modul.',
      },
      {
        number: 4,
        title: 'Očistite kontakte i resetujte RAM',
        description: 'Ponekad RAM ne radi zbog prljavih kontakata. Izvadite RAM module, nežno obrišite zlatne kontakte sa gumicom (da, obična gumica!), i ponovo ih čvrsto utaknite dok ne čujete "klik" na oba kraja.',
      },
    ],
  },
  {
    id: 'usb-port-ne-radi',
    categoryId: 'hardver',
    title: 'USB port ne radi',
    description: 'Rješavanje problema sa USB portovima',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Testirajte različite portove i uređaje',
        description: 'Pokušajte utaknuti USB uređaj u drugi port. Ako radi u drugom portu, taj specifični port može biti neispravan. Također testirajte drugi USB uređaj u problematičnom portu da osigurate da problem nije u uređaju.',
      },
      {
        number: 2,
        title: 'Restartujte računar i provjerite Device Manager',
        description: 'Ponekad Windows "zaboravi" USB uređaje. Restartujte računar. Zatim: Desni klik Start > Device Manager > Universal Serial Bus controllers. Ako vidite žuti uzvičnik, desni klik > Uninstall device, zatim restart računara da reinstalira drivere.',
      },
      {
        number: 3,
        title: 'Provjerite Power Management postavke',
        description: 'Device Manager > Universal Serial Bus controllers > desni klik na "USB Root Hub" > Properties > Power Management > ODZNAČITE "Allow the computer to turn off this device to save power". Uradite ovo za sve USB Root Hub instance.',
      },
      {
        number: 4,
        title: 'Provjerite da li port dobija napajanje',
        description: 'Neki USB portovi mogu biti fizički oštećeni ili odvojeni od motherboard-a. Pogledajte u port sa baterijskom lampom - vidite li sve metalne kontakte? Ako ne, port je oštećen i treba hardverska popravka.',
      },
    ],
  },
  {
    id: 'graficka-artefakti',
    categoryId: 'hardver',
    title: 'Čudni artefakti/linije na ekranu',
    description: 'Rješavanje grafičkih glitcheva',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite da to nije monitor',
        description: 'Povežite monitor na drugi računar ili laptop. Ako artefakti nestanu, problem je u grafičkoj kartici. Ako se artefakti i dalje pojavljuju, monitor je neispravan.',
      },
      {
        number: 2,
        title: 'Ažurirajte GPU drivere',
        description: 'Za Nvidia: preuzmite GeForce Experience i instalirajte najnovije Game Ready drivere. Za AMD: preuzmite Adrenalin drivere sa AMD sajta. Ili koristite Display Driver Uninstaller (DDU) da potpuno obrišete stare drivere i instalirajte fresh.',
      },
      {
        number: 3,
        title: 'Provjerite GPU temperaturu',
        description: 'Preuzmite GPU-Z ili MSI Afterburner. Monitorujte GPU temperaturu dok igrate ili radite nešto zahtjevno. Preko 85°C je problem - grafička se pregrijava. Očistite prašinu iz GPU-a, zamijenite termalnu pastu ili poboljšajte airflow u kućištu.',
      },
      {
        number: 4,
        title: 'Testiranje i RMA',
        description: 'Artefakti često znače da GPU umire (posebno ako se pojavljuju i u BIOS-u). Testirajte sa drugom grafičkom karticom ako možete. Ako je nova kartica pod garancijom, kontaktirajte proizvođača za RMA (zamjenu).',
      },
    ],
  },
  {
    id: 'tastatura-ne-radi',
    categoryId: 'hardver',
    title: 'Tastatura ne radi',
    description: 'Rješavanje problema sa tastaturom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite fizičku vezu',
        description: 'Za USB tastaturu: izvadite i ponovo utaknite USB kabl. Pokušajte drugi USB port. Za PS/2 tastaturu: morate restartovati računar nakon što ponovo utaknete (PS/2 ne podržava hot-plug). Za wireless: provjerite baterije ili punjenje.',
      },
      {
        number: 2,
        title: 'Testirajte sa on-screen tastaturom',
        description: 'Otkucajte "On-Screen Keyboard" u Windows search i otvorite je. Ako možete kucati sa ovom virtualnom tastaturom, hardver tastatura je problem. Ako ni on-screen ne radi u određenim programima, problem je software.',
      },
      {
        number: 3,
        title: 'Provjerite Filter Keys postavke',
        description: 'Ponekad Windows slučajno uključi Filter Keys. Control Panel > Ease of Access > Keyboard > provjerite da "Filter Keys" je ISKLJUČEN. Takođe provjerite da "Sticky Keys" nije uzrok problema.',
      },
      {
        number: 4,
        title: 'Očistite tastaturu ili nabavite novu',
        description: 'Ako su neki tasteri ne rade ili se "lepe", tastatura može biti prljava. Za membrane tastaturu: pažljivo skinite tastere i očistite ispod sa alcohol wipes. Za jeftine tastature, jednostavnije je kupiti novu (20-50 KM).',
      },
    ],
  },
  {
    id: 'mis-laguje',
    categoryId: 'hardver',
    title: 'Miš laguje ili skaće',
    description: 'Rješavanje problema sa mišem',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Očistite senzor miša',
        description: 'Preokreite miš i pogledajte optički senzor (crveno ili plavo svjetlo). Obrišite ga sa mikrofiber krpom ili alcohol wipe. Dlake, prašina ili masnoća na senzoru uzrokuju jumping/skipping.',
      },
      {
        number: 2,
        title: 'Koristite mouse pad',
        description: 'Optički miševi ne rade dobro na sjajnim, staklenim ili uniformnim površinama. Koristite mouse pad (5-15 KM). Čak i jeftin mousepad drastično poboljšava tracking.',
      },
      {
        number: 3,
        title: 'Smanjite USB polling rate',
        description: 'Za gaming miševe: otvorite softver miša (Logitech G Hub, Razer Synapse) i smanjite polling rate sa 1000Hz na 500Hz ili 250Hz. Visok polling rate može uzrokovati stuttering na slabijim računarima.',
      },
      {
        number: 4,
        title: 'Testirajte sa drugim portom ili mišem',
        description: 'Pokušajte drugi USB port - neki portovi mogu imati interference. Za wireless miš: približite USB receiver mišu ili koristite USB extension kabl da receiver bude bliže. Testirajte sa drugim mišem da osigurate da problem nije hardverski.',
      },
    ],
  },
  {
    id: 'zvucnici-ne-rade',
    categoryId: 'hardver',
    title: 'Zvučnici ne rade',
    description: 'Rješavanje audio problema',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite volumen i mute',
        description: 'Kliknite na speaker ikonu u taskbar-u i provjerite da volumen nije na minimum i da nije muted. Takođe provjerite fizički volumen knob na zvučnicima. Provjerite da zvučnici su uključeni (Power LED svijetli).',
      },
      {
        number: 2,
        title: 'Provjerite da je pravilni output device odabran',
        description: 'Desni klik na speaker ikonu > Open Sound settings > Output device - provjerite da je odabran "Speakers" ili vaši zvučnici, a ne "Headphones" ili neki drugi device. Ako ste nedavno koristili slušalice, Windows možda nije switch-ovao nazad.',
      },
      {
        number: 3,
        title: 'Provjerite audio kabl i port',
        description: 'Izvadite i ponovo utaknite 3.5mm audio jack ili USB kabl (zavisno od tipa zvučnika). Zeleni audio jack ide u zeleni LINE OUT port na zadnjoj strani računara (ne MICROPHONE port koji je pink/roze!). Testirajte sa slušalicama da vidite da li je problem u zvučnicima ili računaru.',
      },
      {
        number: 4,
        title: 'Ažurirajte ili reinstalirajte audio drivere',
        description: 'Desni klik Start > Device Manager > Sound, video and game controllers > desni klik na vaš audio device (Realtek, Creative, etc.) > Update driver. Alternativno, Uninstall device i restartujte računar da Windows automatski reinstalira.',
      },
    ],
  },
  {
    id: 'pregrijavanje-laptop',
    categoryId: 'hardver',
    title: 'Laptop se pregrijava',
    description: 'Hlađenje pregrijanog laptopa',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite laptop na tvrdom, ravnom površinu',
        description: 'NIKADA ne koristite laptop na krevetu, jorganu ili mekom površini! Ovo blokira ventilacione otvore na dnu laptopa. Koristite tvrdi sto ili laptop cooling pad. Postavite laptop na male "nožice" ili books da podignutete zadnji dio za bolji airflow.',
      },
      {
        number: 2,
        title: 'Očistite ventilatore i heatsink',
        description: 'Prašina začepljuje ventilatore laptopa. Koristite compressed air da ispuhate prašinu kroz ventilacione otvore. Držite compressed air CAN uspravno i ispuhujte u kratkim burst-ovima. Za temeljno čišćenje, otvorite laptop (ako znate kako) i očistite heatsink direktno.',
      },
      {
        number: 3,
        title: 'Smanjite performanse',
        description: 'Control Panel > Power Options > odaberite "Balanced" ili "Power saver" plan umjesto "High performance". Takođe: desni klik na Desktop > Display settings > smanjite refresh rate sa 144Hz na 60Hz ako vaš laptop ima high refresh display.',
      },
      {
        number: 4,
        title: 'Repaste termalne paste',
        description: 'Ako je laptop star 2+ godina, termalna pasta između CPU/GPU i heatsink-a je osušena. Otvorite laptop (YouTube tutorial za vaš model), očistite staru pastu sa isopropyl alcohol, i nanesite novu termalnu pastu (Arctic MX-4, Noctua NT-H1). Može smanjiti temperature za 10-20°C!',
      },
    ],
  },
  {
    id: 'baterija-laptop-ne-puni',
    categoryId: 'hardver',
    title: 'Laptop baterija se ne puni',
    description: 'Rješavanje problema sa punjenjem baterije',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite adapter i kabl za punjenje',
        description: 'Provjerite da LED na adapteru svijetli. Ako ne, adapter je možda neispravan. Provjerite da kabl nije prelomljen ili oštećen posebno na krajevima. Pokušajte pozajmiti isti adapter od prijatelja da testirate.',
      },
      {
        number: 2,
        title: 'Provjerite DC jack (port za punjenje)',
        description: 'Pomjerajte plug u DC jack-u dok je utknut - ako se LED lampica uključuje/isključuje, DC jack je labav ili oštećen. Ovo je česta hardverska greška i zahtijeva popravku (lemljenje novog jack-a).',
      },
      {
        number: 3,
        title: 'Resetujte bateriju',
        description: 'Isključite laptop, izvadite adapter. Ako baterija je removable, izvadite je. Držite Power dugme pritisnuto 30 sekundi da ispustite ostatak elektriciteta. Vratite bateriju i adapter, pokušajte ponovo.',
      },
      {
        number: 4,
        title: 'Provjerite bateriju u BIOS-u',
        description: 'Restartujte laptop i uđite u BIOS (F2, Del, ili F10 pri bootu). Potražite Battery Information - pokazuje health baterije. Ako kaže "Poor", "Replace" ili capacity je ispod 50%, baterija je na kraju života. Koštaju 50-200 KM zavisno od modela.',
      },
    ],
  },
  {
    id: 'pc-ne-pali',
    categoryId: 'hardver',
    title: 'Računar se uopšte ne uključuje',
    description: 'Dijagnostika računara koji se ne pali',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite napajanje',
        description: 'Provjerite da Power Supply Unit (PSU) je uključen - ima prekidač na zadnjoj strani koji mora biti na "I" (ON). Provjerite da kabl za napajanje je pravilno utknut i da utičnica radi (testirajte sa drugim uređajem). Provjerite da PSU ventilator se okreće kada pritisnete Power dugme.',
      },
      {
        number: 2,
        title: 'Testirajte sa paper clip testom',
        description: 'Isključite PSU iz struje, izvadite sve kablove iz motherboard-a. Pronađite 24-pin ATX konektor. Koristite metal paper clip da SHORT-ujete zeleni wire sa bilo kojim crnim wire-om. Uključite PSU - ako ventilator radi, PSU je OK. Ako ne, PSU je mrtav.',
      },
      {
        number: 3,
        title: 'Provjerite Power/Reset button konekcije',
        description: 'Otvorite kućište i pronadite male wire-ove od prednjeg panela do motherboard-a (označeni kao PWR SW, RESET SW). Možda su labavi ili pogrešno povezani. Consult-ujte motherboard manual za pravilne pozicije.',
      },
      {
        number: 4,
        title: 'Uradite minimal POST test',
        description: 'Izvadite SVE osim: motherboard, CPU, jedan RAM modul, PSU. Otkačite hard diskove, grafičku karticu (ako imate integrated graphics). Pokušajte upaliti. Ako radi, dodajte komponente jednu po jednu dok ne identifikujete problematičnu komponentu.',
      },
    ],
  },
  {
    id: 'wifi-kartica-ne-radi',
    categoryId: 'hardver',
    title: 'WiFi kartica ne radi',
    description: 'Rješavanje problema sa wireless adapterom',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite da WiFi nije hardverski isključen',
        description: 'Mnogi laptopi imaju fizički WiFi switch ili Fn kombinaciju (npr. Fn+F2) da uključe/isključe WiFi. Provjerite tastaturu za WiFi/Airplane ikonu i pokušajte Fn + taj taster. Takođe provjerite da Airplane mode nije uključen u Windows-u.',
      },
      {
        number: 2,
        title: 'Provjerite Device Manager',
        description: 'Desni klik Start > Device Manager > Network adapters. Pronadite vašu WiFi karticu (obično sadrži "Wireless", "WiFi", ili "802.11"). Ako ima žuti uzvičnik ili crveni X, desni klik > Enable device (ako je disabled) ili Update driver.',
      },
      {
        number: 3,
        title: 'Reinstalirajte WiFi drivere',
        description: 'U Device Manager-u, desni klik na WiFi adapter > Uninstall device > označite "Delete the driver software" > OK. Restartujte računar - Windows će automatski reinstalirati driver. Ili preuzmite najnovije drivere sa web sajta proizvođača laptopa.',
      },
      {
        number: 4,
        title: 'Provjerite da kartica je pravilno sjedila (desktop)',
        description: 'Za desktop računar sa PCIe WiFi karticom: isključite računar iz struje, otvorite kućište, izvadite WiFi karticu i ponovo je čvrsto utaknite. Takođe provjerite da antene su pravilno zavrnute na karticu.',
      },
    ],
  },
  {
    id: 'cd-dvd-ne-radi',
    categoryId: 'hardver',
    title: 'CD/DVD drive ne čita diskove',
    description: 'Rješavanje problema sa optical drive-om',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Očistite sočivo lasera',
        description: 'Prašina na sočivu lasera sprečava čitanje diskova. Kupite CD/DVD lens cleaning disk (10-20 KM u elektronskim prodavnicama) - stavite ga u drive i pokrenite, on će automatski očistiti sočivo sa malim četkicama.',
      },
      {
        number: 2,
        title: 'Testirajte sa nekoliko različitih diskova',
        description: 'Pokušajte čitati razne diskove - audio CD, DVD film, data disk. Ako svi ne rade, drive je problem. Ako samo jedan disk ne radi, taj disk može biti pogrešan format ili oštećen.',
      },
      {
        number: 3,
        title: 'Provjerite u Device Manager',
        description: 'Device Manager > DVD/CD-ROM drives. Ako vidite žuti uzvičnik, desni klik > Uninstall device, zatim restart računara. Windows će ponovo detektovati drive. Također pokušajte Update driver.',
      },
      {
        number: 4,
        title: 'Razmislite o eksternom USB drive-u',
        description: 'Interni optical drive-ovi često otkazuju nakon nekoliko godina jer laser slabi. Eksterni USB CD/DVD drive-ovi koštaju 30-60 KM i radu na bilo kojem računaru. Dobar replacement ako rijetko koristite diskove.',
      },
    ],
  },
  {
    id: 'ssd-optimization',
    categoryId: 'hardver',
    title: 'Optimizacija SSD-a',
    description: 'Poboljšajte performanse i životni vijek SSD-a',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Omogućite TRIM',
        description: 'TRIM je komanda koja održava SSD performanse. Otvorite Command Prompt kao administrator, otkucajte "fsutil behavior query DisableDeleteNotify". Ako kaže "DisableDeleteNotify = 0", TRIM je uključen (dobro!). Ako kaže "1", otkucajte "fsutil behavior set DisableDeleteNotify 0" da omogućite.',
      },
      {
        number: 2,
        title: 'Isključite defragmentaciju',
        description: 'Defragmentacija je LOŠA za SSD! Windows 10/11 zna ovo i automatski onemogući defrag za SSD-ove. Da provjerite: Otkucajte "Defragment" u Start search > Optimize Drives > odaberite SSD > "Scheduled optimization" bi trebao reći "Off" ili "Trim" (ne "Defragment").',
      },
      {
        number: 3,
        title: 'Ostavite 10-20% prostora slobodnim',
        description: 'SSD-ovi usporavaju kada su skoro puni. Pokušajte držati najmanje 10-20% kapaciteta slobodnim. Na primjer, za 500GB SSD, ne punite preko 400-450GB. Slobodan prostor omogućava wear leveling algoritmu da radi pravilno.',
      },
      {
        number: 4,
        title: 'Ažurirajte firmware',
        description: 'SSD proizvođači objavljuju firmware update-e koji poboljšavaju performanse i stabilnost. Preuzmite "Samsung Magician" (za Samsung SSD-ove), "Crucial Storage Executive" (za Crucial), ili odgovarajući softver za vaš brend. Provjerite i instalirajte firmware update-e.',
      },
    ],
  },
  {
    id: 'dual-monitor-setup',
    categoryId: 'hardver',
    title: 'Podešavanje dva monitora',
    description: 'Kako spojiti i konfigurirati dual monitor setup',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Povežite oba monitora na grafičku karticu',
        description: 'Koristite različite portove na grafičkoj kartici (npr. jedan HDMI, jedan DisplayPort). Nemojte spojiti jedan na GPU a drugi na motherboard - neće raditi zajedno. Ako imate samo jedan port, možete koristiti USB to HDMI adapter (30-50 KM).',
      },
      {
        number: 2,
        title: 'Detektujte monitore u Windows-u',
        description: 'Desni klik na Desktop > Display settings. Trebali bi vidjeti dva kvadrata označena "1" i "2". Ako vidite samo jedan, kliknite "Detect" dugme. Windows će pronaći drugi monitor. Ako i dalje ne radi, provjerite da oba monitora su uključena i kabli su dobri.',
      },
      {
        number: 3,
        title: 'Podesite raspored monitora',
        description: 'U Display settings, povucite kvadrate "1" i "2" da odgovaraju fizičkom rasporedu na vašem stolu. Na primjer, ako drugi monitor je LIJEVO od prvog, povucite "2" lijevo od "1". Ovo određuje kako miš prelazi između ekrana.',
      },
      {
        number: 4,
        title: 'Odaberite display mode',
        description: 'Skrolujte dolje do "Multiple displays" dropdown-a. Opcije: (1) "Extend these displays" - preporučeno, oba monitora rade kao jedan veliki desktop, (2) "Duplicate these displays" - oba pokazuju isto (za prezentacije), (3) "Show only on 1/2" - koristi samo jedan monitor.',
      },
    ],
  },
  {
    id: 'printer-ne-stampa',
    categoryId: 'hardver',
    title: 'Štampač ne štampa',
    description: 'Rješavanje problema sa printanjem',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite osnove',
        description: 'Provjerite: (1) Štampač je uključen, (2) Ima papira u trayu, (3) Nema paper jam greške, (4) Toner/ink cartridge nije prazan (LED indikatori ili display na štampaču će pokazati), (5) USB ili network kabl je povezan, (6) Za wireless printer - da je povezan na istu WiFi mrežu kao računar.',
      },
      {
        number: 2,
        title: 'Provjerite print queue',
        description: 'Otkucajte "Printers" u Start search > Printers & scanners > kliknite na vaš štampač > Open queue. Ako vidite zaglavljene print job-ove, desni klik na svaki > Cancel. Zatim pokušajte printati test page: desni klik štampač > Printer properties > Print Test Page.',
      },
      {
        number: 3,
        title: 'Restartujte print spooler service',
        description: 'Pritisnite Windows+R, otkucajte "services.msc", Enter. Pronadite "Print Spooler" u listi, desni klik > Restart. Ovo često rješava probleme kada dokumenti ostanu zaglavljeni u queue.',
      },
      {
        number: 4,
        title: 'Reinstalirajte printer driver',
        description: 'Obrišite printer: Settings > Devices > Printers & scanners > odaberite printer > Remove device. Zatim dodajte ponovo: Add a printer or scanner > Windows će ga pronaći i instalirati fresh driver. Ili preuzmite najnoviji driver sa web sajta proizvođača.',
      },
    ],
  },
  {
    id: 'webcam-ne-radi',
    categoryId: 'hardver',
    title: 'Webcam ne radi',
    description: 'Rješavanje problema sa kamerom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite privacy postavke',
        description: 'Windows 10/11 ima privacy kontrole za kameru. Settings > Privacy > Camera > omogućite "Allow apps to access your camera". Zatim skrolujte dolje i omogućite kameru za specifične aplikacije (Zoom, Skype, Teams, itd.).',
      },
      {
        number: 2,
        title: 'Provjerite da druga aplikacija ne koristi kameru',
        description: 'Samo jedna aplikacija može koristiti webcam istovremeno. Zatvorite SVE aplikacije koje mogu koristiti kameru (Zoom, Skype, Teams, Discord, Chrome tabs sa video chat). Provjerite Task Manager da su potpuno zatvorene.',
      },
      {
        number: 3,
        title: 'Testirajte kameru u Camera aplikaciji',
        description: 'Otkucajte "Camera" u Start search i otvorite Windows Camera aplikaciju. Ako kamera radi ovdje, znači da je funkcionalna i problem je u drugoj aplikaciji. Ako ne radi ni ovdje, nastavite na sljedeći korak.',
      },
      {
        number: 4,
        title: 'Ažurirajte camera driver',
        description: 'Device Manager > Cameras ili Imaging devices > desni klik na webcam > Update driver > Search automatically. Alternativno za eksterne USB webcam-e: otkačite i ponovo utaknite USB kabl ili pokušajte drugi USB port.',
      },
    ],
  },
  {
    id: 'coil-whine',
    categoryId: 'hardver',
    title: 'Visokofrekventno zujanje (coil whine)',
    description: 'Rješavanje ili smanjenje coil whine zvuka',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Identifikujte izvor zvuka',
        description: 'Coil whine je visokofrekventno piskanje/zujanje koje dolazi od grafičke kartice ili napajanja (PSU). Otvorite kućište dok računar radi i slušajte pažljivo da identifikujete koja komponenta proizvodi zvuk. OPREZ: Ne dirajte komponente dok je računar uključen!',
      },
      {
        number: 2,
        title: 'Ograničite FPS u igrama',
        description: 'Coil whine je najglasniji pri ekstremno visokim FPS (300-500+ FPS u menijima igara). U Nvidia Control Panel > Manage 3D settings > Max Frame Rate > podesite na 144 FPS (ili refresh rate vašeg monitora). Alternativno koristite V-Sync.',
      },
      {
        number: 3,
        title: 'Promijenite napajanje',
        description: 'Ako coil whine dolazi od PSU-a, možda je jeftin ili stari. Kvalitetni PSU-ovi (Corsair, SeaSonic, EVGA Gold/Platinum) imaju manje coil whine. Razmislite o zamjeni ako je zvuk nepodnošljiv.',
      },
      {
        number: 4,
        title: 'RMA grafičke kartice',
        description: 'Ako je grafička kartica nova i coil whine je ekstreman, to može biti proizvodna greška. Neki proizvođači prihvataju RMA za ekstreman coil whine (AMD i EVGA ponekad). Kontaktirajte proizvođača.',
      },
    ],
  },
  {
    id: 'bios-update',
    categoryId: 'hardver',
    title: 'Kako ažurirati BIOS',
    description: 'Sigurno ažuriranje BIOS/UEFI firmwarea',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite trenutnu verziju BIOS-a',
        description: 'Pritisnite Windows+R, otkucajte "msinfo32", Enter. Pogledajte "BIOS Version/Date" - zapišite verziju. Alternativno, restartujte računar i uđite u BIOS (Del, F2, F10) i vidjet ćete verziju na glavnom ekranu.',
      },
      {
        number: 2,
        title: 'Preuzmite najnoviji BIOS sa web sajta proizvođača',
        description: 'Identifikujte model vašeg motherboard-a (piše na motherboard-u ili u System Information). Posjetite web sajt proizvođača (ASUS, MSI, Gigabyte, ASRock), pronadite vaš TAČAN model, idite na Support/Download sekciju, preuzmite najnoviji BIOS update. VAŽNO: Mora biti TAČAN model!',
      },
      {
        number: 3,
        title: 'Pripremite USB flash drive',
        description: 'Formatirajte USB stick u FAT32 (desni klik na USB > Format > FAT32). Raspakujte preuzeti BIOS fajl na USB root (ne u folder). Obično je to .CAP, .ROM ili .BIN fajl.',
      },
      {
        number: 4,
        title: 'Flash BIOS (OPREZ!)',
        description: 'Restartujte računar i uđite u BIOS. Pronadite opciju "M-Flash", "EZ Flash", "Q-Flash" (ime zavisi od proizvođača). Odaberite USB stick i BIOS fajl. Kliknite Update/Flash. VAŽNO: NE ISKLJUČUJTE računar tokom procesa! Trajanje: 3-10 minuta. Računar će se restartovati sam. Ako nešto krene po zlu tokom BIOS update-a, motherboard može postati "bricked" (neupotrebljiv).',
      },
    ],
  },
  {
    id: 'pc-dust-cleaning',
    categoryId: 'hardver',
    title: 'Čišćenje prašine iz računara',
    description: 'Kako pravilno očistiti računar',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Pripremite potrebne alate',
        description: 'Trebat će vam: (1) Compressed air u spreju (10-20 KM u elektronskim prodavnicama), (2) Mikrofiber krpa, (3) Odvijač (možda) da otvorite kućište, (4) Dobro osvjetljenje. NE KORISTITE usisivač - statički elektricitet može oštetiti komponente!',
      },
      {
        number: 2,
        title: 'Isključite i otvorite računar',
        description: 'Ugasite računar i IZVADITE kabl napajanja iz zidne utičnice (samo isključivanje ne gasi kompletno struju). Odnesite računar na otvoreni prostor ili balkon (biće puno prašine). Odvijte strane panele kućišta - obično 2 vida na zadnjoj strani.',
      },
      {
        number: 3,
        title: 'Ispuhajte prašinu compressed air-om',
        description: 'Držite compressed air CAN uspravno. Ispuhujte prašinu kratkim burst-ovima (1-2 sekunde), ne držite neprekidno. Fokusirajte se na: (1) CPU hladnjak i ventilator, (2) GPU ventilatori, (3) Case ventilatori, (4) PSU ventilator, (5) RAM slotovi. Držite ventilatore rukom dok puhate da se ne okreću - brzo okretanje može oštetiti ležajeve.',
      },
      {
        number: 4,
        title: 'Obrišite i zatvorite kućište',
        description: 'Koristite mikrofiber krpu da obrišete ostatak prašine sa površina. Provjerite da nijedan kabl nije slučajno otkačen tokom čišćenja. Zatvorite kućište, privijte panele, povežite napajanje i uključite računar. Primijetićete da je tiši i hladniji!',
      },
    ],
  },
  {
    id: 'overclocking-basics',
    categoryId: 'hardver',
    title: 'Osnove overclocking-a',
    description: 'Sigurno ubrzanje CPU/GPU',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Razumjevanje rizika i benefita',
        description: 'Overclocking povećava clock speed komponenti za 10-30% više performansi. Rizici: (1) Može poništiti garanciju, (2) Povećava temperaturu i potrošnju struje, (3) Može uzrokovati nestabilnost ako se pretera. Benefiti: Besplatne dodatne performanse. Preporučujemo samo za iskusne korisnike!',
      },
      {
        number: 2,
        title: 'Monitorujte baseline performanse i temperaturu',
        description: 'Prije overclocking-a, preuzmite: (1) CPU-Z ili HWiNFO za monitoring, (2) Prime95 ili AIDA64 za stress testing CPU-a, (3) FurMark ili Heaven Benchmark za GPU test, (4) Core Temp za temperature. Pokrenite stress test 10 minuta i zapišite maksimalne temperature - to je vaš baseline.',
      },
      {
        number: 3,
        title: 'Overclockujte postepeno',
        description: 'Za CPU: Uđite u BIOS, pronadite CPU multiplier ili frequency. Povećajte za 100-200MHz (npr. sa 3.5GHz na 3.7GHz). Možda treba povećati voltažu za 0.05V za stabilnost. Sačuvajte i restartujte. Za GPU: Koristite MSI Afterburner, povećajte Core Clock za +50MHz i Memory Clock za +100MHz. Testirajte stabilnost.',
      },
      {
        number: 4,
        title: 'Testirajte stabilnost i prilagodite',
        description: 'Nakon svake promjene, pokrenite stress test 30+ minuta. Ako prolazi bez crasheva i temperature su ispod 85°C (CPU) ili 90°C (GPU), možete ići dalje. Ponavljajte proces povećavanja dok ne dosegnutete nestabilnost (crashevi, artefakti), zatim se vratite jedan korak nazad. To je vaš stabilan overclock!',
      },
    ],
  },

  // Software problems
  {
    id: 'instalacija-programa',
    categoryId: 'softver',
    title: 'Kako instalirati program',
    description: 'Vodič za sigurnu instalaciju softvera',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Preuzmite program sa sigurne, zvanične web stranice',
        description:
          'Najvažniji korak u instalaciji programa je osiguranje da preuzimate sa legitimnog izvora. Mnoge web stranice nude "besplatne preuzimanja" poznatih programa, ali često sadrže malware, viruse ili nepoželjne dodatne programe. Uvijek pratite ovaj proces: (1) Ako znate ime programa koji želite (npr. "VLC Media Player"), otvorite Google i otkucajte naziv programa + "official website" ili "zvanična stranica", npr. "VLC Media Player official download". (2) U rezultatima pretrage, potražite ZVANIČNI sajt - obično ima istu domenu kao naziv programa (npr. videolan.org za VLC). IZBEGAVAJTE sajtove kao "freedownloads.com", "softonic.com", "download.cnet.com" jer često dodaju nepoželjne programe u instalaciju. (3) Kada uđete na zvaničan sajt, potražite dugme "Download", "Preuzmi", ili "Get". Kliknite na njega. (4) Stranica može pitati da odaberete verziju - većina korisnika treba "Windows 64-bit" verziju (ako imate Windows 10 ili 11). Ako niste sigurni, desni klik na "This PC" > Properties i vidite da li piše "64-bit operating system". (5) Preuzimanje će započeti - fajl će se sačuvati u vaš Downloads folder. Videćete napredak u donjem dijelu pretraživača. Savjet: Provjerite da URL web stranice počinje sa "https://" (sigurna veza) i ima ikonu katanca u adresnoj traci.',
      },
      {
        number: 2,
        title: 'Pokrenite installer fajl i provjerite sigurnost',
        description:
          'Nakon što se preuzimanje završi, idite u vaš Downloads folder. Možete to uraditi tako što ćete kliknuti na Start pa otkucati "Downloads" i pritisnuti Enter, ili otvoriti File Explorer (Windows+E) i kliknuti na "Downloads" u lijevom meniju. Pronadite preuzeti fajl - obično ima ekstenziju .exe (npr. "vlc-setup.exe") ili .msi. Prije pokretanja, provjerite: (1) Veličinu fajla - zvanični instaleri su obično 50-200 MB za obične programe. Ako je fajl samo 1-2 MB, to je sumnjivo i može biti malware. (2) Ime fajla - trebalo bi da odgovara programu koji ste htjeli preuzeti. (3) Ako imate antivirus, desni klik na fajl > "Scan with Windows Defender" ili vašim antivirusom. Ako je fajl čist, dva puta kliknite na njega da pokrenete instalaciju. Pojaviće se prozor "User Account Control" (UAC) koji pita "Do you want to allow this app to make changes to your device?" ili "Da li želite dozvoliti ovoj aplikaciji da pravi izmjene?". Ovo je normalna Windows sigurnosna mjera. Provjerite da je "Verified publisher" (provjereni izdavač) prikazan - npr. za VLC bi trebalo da piše "VideoLAN". Ako piše "Unknown publisher", budite oprezni. Kliknite "Yes" ili "Da" da nastavite. Instalacioni prozor programa će se otvoriti.',
      },
      {
        number: 3,
        title: 'Pažljivo pratite korake instalacije i odbijte dodatni softver',
        description:
          'Ovo je NAJVAŽNIJI korak gdje većina ljudi prave greške! Čak i neki legitimni instaleri pokušavaju instalirati dodatne programe, toolbare ili promijeniti vašu početnu stranicu pretraživača. Pratite ovaj proces: (1) Prvi ekran je obično "Welcome" ili "Dobrodošli" - kliknite "Next" ili "Dalje". (2) Sljedeći ekran je "License Agreement" (licencni ugovor) - označite "I accept" ili "Prihvatam" i kliknite Next. (3) Sada dolazi KRITIČNI ekran - često se zove "Choose Components", "Custom Installation", ili "Additional Offers". NE KLIKAJTE automatski "Next"! Pažljivo pročitajte šta piše. Potražite checkbox-ove (kućice) koje nude: "Install Yahoo Toolbar", "Change your homepage to...", "Install additional software", ili slično. ODZNAČITE sve ove opcije! Želite instalirati SAMO program koji ste namjeravali, ništa drugo. (4) Ako vidite opciju "Custom" ili "Prilagođena instalacija" vs "Express" ili "Brza instalacija", UVIJEK odaberite Custom jer vam daje kontrolu nad time šta se instalira. (5) Na ekranu "Choose Install Location" možete ostaviti default folder (obično C:\\Program Files\\) osim ako nemate razlog da ga promijenite. (6) Ako instalacija traži da se poveže sa internetom ili kreira nalog, možete to preskočiti ako ne želite. Većina programa radi bez naloga. Proces instalacije može trajati 30 sekundi do 5 minuta zavisno od programa.',
      },
      {
        number: 4,
        title: 'Završite instalaciju i provjerite da je program funkcionalan',
        description:
          'Kada instalacija završi, videćete ekran "Installation Complete" ili "Instalacija završena". Ovdje možete imati nekoliko opcija: (1) "Launch [Program]" ili "Pokreni program" - označite ovo ako želite odmah pokrenuti program, ili odznačite ako ne želite. (2) "Create desktop shortcut" ili "Kreiraj prečicu na desktopu" - ako želite ikonu programa na desktop-u za lak pristup, ostavite ovo označeno. (3) "View Readme file" - obično možete preskočiti ovo. Kliknite "Finish" ili "Završi" da zatvorite installer. Program je sada instaliran! Da provjerite instalaciju: (1) Kliknite na Start dugme i počnite da kucate naziv programa - trebao bi se pojaviti u rezultatima. Kliknite na njega da ga pokrenete. (2) Alternativno, program bi trebao biti u Start meniju pod "All Apps" ili "Recently Added". (3) Ako ste kreirali desktop shortcut, videćete ikonu na desktop-u - dupli klik na nju da pokrenete program. Kada se program pokrene, provjerite da radi kako treba. Za neke programe (kao VLC ili PDF čitač), pokušajte otvoriti fajl tog tipa da vidite da li radi. Savjet: Nakon instalacije, možete obrisati installer fajl iz Downloads foldera jer više nije potreban - desni klik > Delete. Ovo oslobađa prostor. Ako ikada trebate ponovo instalirati, možete ga ponovo preuzeti sa zvanične stranice.',
      },
    ],
  },
  {
    id: 'windows-update-stuck',
    categoryId: 'softver',
    title: 'Windows Update zapeo',
    description: 'Rješavanje zagljenih Windows ažuriranja',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Sačekajte dovoljno dugo',
        description: 'Windows Update ponekad izgleda zapeo ali samo radi sporo. Ako kaže "Installing updates 35%..." i ne mijenja se, sačekajte najmanje 2-3 sata prije nego što radite išta drugo. Nemojte prisilno gasiti računar!',
      },
      {
        number: 2,
        title: 'Restart Windows Update service',
        description: 'Pritisnite Windows+R, otkucajte "services.msc". Pronadite "Windows Update", desni klik > Stop. Sačekajte 10 sekundi, zatim desni klik > Start. Pokušajte ponovo pokrenuti update.',
      },
      {
        number: 3,
        title: 'Obrišite Software Distribution folder',
        description: 'Zaustavite Windows Update service (kao u prethodnom koraku). Otvorite File Explorer i idite na C:\\Windows\\SoftwareDistribution. Obrišite SVE unutar ovog foldera (ne folder sam). Pokrenite Windows Update service ponovo. Ovo forsira fresh download ažuriranja.',
      },
    ],
  },
  {
    id: 'program-se-ne-deinstalira',
    categoryId: 'softver',
    title: 'Ne mogu deinstalirati program',
    description: 'Rješavanje problema sa uninstall-om',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite Control Panel Uninstaller',
        description: 'Ne brišite program samo brisanjem foldera! Idite u Control Panel > Programs > Uninstall a program. Pronadite program u listi, kliknite na njega, pa kliknite "Uninstall" dugme na vrhu.',
      },
      {
        number: 2,
        title: 'Koristite built-in uninstaller',
        description: 'Neki programi imaju vlastiti uninstaller. Idite u C:\\Program Files ili C:\\Program Files (x86), pronadite folder programa, i potražite fajl "uninstall.exe" ili "uninst.exe". Dupli klik na njega.',
      },
      {
        number: 3,
        title: 'Koristite Revo Uninstaller',
        description: 'Preuzmite Revo Uninstaller Free. Pokrenut će ga i pokazat će sve instalirane programe. Odaberite problematičan program > Uninstall. Revo će pokrenuti obični uninstaller, a zatim skenirati za preostale fajlove i registry entries i obrisati ih.',
      },
    ],
  },
  {
    id: 'dll-file-missing',
    categoryId: 'softver',
    title: 'Greška "Missing DLL file"',
    description: 'Rješavanje problema sa nedostajućim DLL fajlovima',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Identifikujte koji DLL fali',
        description: 'Greška će reći npr. "MSVCP140.dll is missing" ili "vcruntime140.dll not found". Zapišite tačno ime fajla - ovo je važno.',
      },
      {
        number: 2,
        title: 'Instalirajte Visual C++ Redistributables',
        description: 'Najčešće nedostaju Microsoft Visual C++ Redistributable fajlovi. Preuzmite i instalirajte: (1) Visual C++ Redistributable 2015-2022 (x64 i x86 verzije) sa Microsoft sajta. (2) DirectX End-User Runtime. Ovo rješava 90% DLL grešaka.',
      },
      {
        number: 3,
        title: 'Reinstalirajte program koji javlja grešku',
        description: 'Ako specifičan program javlja DLL grešku, potpuno ga deinstalirajte i ponovo instalirajte. Nova instalacija će instalirati sve potrebne DLL fajlove.',
      },
    ],
  },
  {
    id: 'windows-activation',
    categoryId: 'softver',
    title: 'Windows nije aktiviran',
    description: 'Aktiviranje Windows-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite activation status',
        description: 'Settings > Update & Security > Activation. Ovdje vidite da li je Windows aktiviran. Ako kaže "Windows is not activated", trebate product key ili digitalna licenca.',
      },
      {
        number: 2,
        title: 'Unesite product key',
        description: 'Ako imate product key (25-character kod), kliknite "Change product key" i unesite ga. Product key obično dolazi: (1) Sa retail kopiom Windows-a (na naljepnici ili email-u), (2) Zalepljen na laptop-u (za preinstalled Windows).',
      },
      {
        number: 3,
        title: 'Aktivacija putem digitalne licence',
        description: 'Ako ste nadogradili sa legitimnog Windows 7/8, ili kupili laptop sa preinstaliranim Windows-om, imate digitalnu licencu vezanu za hardware. Kliknite "Troubleshoot" u Activation postavkama - Windows će pokušati pronaći digitalnu licencu.',
      },
    ],
  },
  {
    id: 'slow-boot-time',
    categoryId: 'softver',
    title: 'Računar sporo bootuje',
    description: 'Ubrzajte Windows pokretanje',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Onemogućite nepotrebne startup programe',
        description: 'Ctrl+Shift+Esc da otvorite Task Manager > Startup tab. Onemogućite programe koje ne trebate odmah pri pokretanju (desni klik > Disable). Fokusirajte se na programe sa "High" startup impact.',
      },
      {
        number: 2,
        title: 'Omogućite Fast Startup',
        description: 'Control Panel > Power Options > Choose what the power buttons do > Change settings that are currently unavailable > označite "Turn on fast startup". Ovo ubrzava boot za 10-30 sekundi.',
      },
      {
        number: 3,
        title: 'Razmislite o nadogradnji na SSD',
        description: 'Ako koristite stari HDD, nadogradnja na SSD je NAJVEĆA moguća razlika. Boot time sa HDD: 1-3 minute. Boot time sa SSD: 10-20 sekundi! 500GB SSD košta oko 100-150 KM.',
      },
    ],
  },
  {
    id: 'antivirus-scan',
    categoryId: 'softver',
    title: 'Kako skenirati računar na viruse',
    description: 'Potpuno skeniranje sistema',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite Windows Defender (built-in)',
        description: 'Otkucajte "Windows Security" u Start search. Kliknite na "Virus & threat protection" > Scan options > odaberite "Full scan" > Scan now. Ovo će skenirati SVE fajlove na računaru i može trajati 1-2 sata.',
      },
      {
        number: 2,
        title: 'Preuzmite Malwarebytes za drugi opinion',
        description: 'Windows Defender ne hvata sve. Preuzmite Malwarebytes Free sa malwarebytes.com. Instalirajte ga, pokrenite "Scan" - pronalazi malware koji antivirus često propusti (adware, PUPs, spyware). Možete ga deinstalirati nakon scan-a ako ne želite da ostane.',
      },
      {
        number: 3,
        title: 'Boot u Safe Mode za uporne viruse',
        description: 'Ako sumnjate na ozbiljnu infekciju, boot-ujte u Safe Mode: Držite Shift dok klikate Start > Power > Restart. Odaberite Troubleshoot > Advanced > Startup Settings > Restart > F4 za Safe Mode. U Safe Mode-u, pokrenite full antivirus scan.',
      },
    ],
  },
  {
    id: 'reset-windows-password',
    categoryId: 'softver',
    title: 'Zaboravljena Windows lozinka',
    description: 'Resetovanje izgubljene lozinke',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Koristite "I forgot my password" link',
        description: 'Na login ekranu, kliknite "I forgot my password". Ako koristite Microsoft nalog (email login), možete resetovati lozinku putem email-a ili SMS-a sa drugog uređaja. Idite na account.live.com/password/reset sa telefona ili drugog računara.',
      },
      {
        number: 2,
        title: 'Za lokalni nalog: Security questions',
        description: 'Ako ste postavili security questions, Windows će ih pitati. Odgovorite tačno i moći ćete kreirati novu lozinku.',
      },
      {
        number: 3,
        title: 'Koristite drugi admin nalog',
        description: 'Ako imate drugi administrator nalog na računaru, ulogujte se sa njim. Idite u Control Panel > User Accounts > Manage another account > odaberite zakljičan nalog > Change the password.',
      },
    ],
  },
  {
    id: 'windows-disk-100',
    categoryId: 'softver',
    title: 'Disk usage 100% u Task Manageru',
    description: 'Rješavanje visokog disk korištenja',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Identifikujte proces koji koristi disk',
        description: 'Otvorite Task Manager (Ctrl+Shift+Esc) > Processes tab > kliknite na "Disk" kolonu da sortirate. Vidite koji proces koristi najviše. Česti krivci: Windows Search, Superfetch, Windows Update, Antivirus scan.',
      },
      {
        number: 2,
        title: 'Onemogućite Windows Search privremeno',
        description: 'Pritisnite Windows+R, otkucajte "services.msc". Pronadite "Windows Search", desni klik > Stop. Ovo privremeno zaustavlja indexiranje. Ako to rješava problem, možete trajno smanjiti indexiranje u Control Panel > Indexing Options > Modify (uklonite nepotrebne lokacije).',
      },
      {
        number: 3,
        title: 'Provjerite zdravlje hard diska',
        description: 'Konstantan 100% disk usage može značiti da hard disk umire. Preuzmite CrystalDiskInfo i provjerite SMART status. Ako kaže "Caution" ili "Bad", disk je u problemu i trebate backup + zamjenu.',
      },
    ],
  },
  {
    id: 'office-activation',
    categoryId: 'softver',
    title: 'Microsoft Office nije aktiviran',
    description: 'Aktiviranje Microsoft Office-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite subscription ili product key',
        description: 'Otvorite bilo koju Office aplikaciju (Word, Excel). Kliknite File > Account. Vidite activation status. Za Microsoft 365 (subscription), morate biti ulogovani sa Microsoft nalogom koji ima aktivnu pretplatu. Za Office 2019/2021 (one-time purchase), trebate product key.',
      },
      {
        number: 2,
        title: 'Ulogujte se sa pravim Microsoft nalogom',
        description: 'U File > Account, kliknite "Sign in". Unesite Microsoft nalog (email) koji ima Office subscription ili je povezan sa Office license. Ako ste kupili Office, trebali ste primiti email sa instrukcijama za povezivanje licence sa nalogom.',
      },
      {
        number: 3,
        title: 'Unesite product key',
        description: 'Za retail Office kopiju, idite na office.com/setup. Ulogujte se, unesite product key (25-character kod), i preuzmite Office. Product key dolazi na kartici unutar kutije ili u email-u ako ste kupili digitalno.',
      },
    ],
  },
  {
    id: 'java-not-installed',
    categoryId: 'softver',
    title: 'Program traži Javu koja nije instalirana',
    description: 'Instaliranje Java Runtime Environment',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Preuzmite Javu sa java.com',
        description: 'Idite na java.com i kliknite veliko "Download Java" dugme. Ovo će preuzeti Java Runtime Environment (JRE) installer. PAŽNJA: Nemojte preuzimati sa random sajtova - samo java.com!',
      },
      {
        number: 2,
        title: 'Instalirajte Javu',
        description: 'Pokrenite preuzeti installer. PAŽLJIVO čitajte svaki ekran - Java installer često pokušava instalirati dodatni softver (Ask Toolbar, Yahoo). ODZNAČITE sve ponude za dodatni softver! Samo instalirajte Javu.',
      },
      {
        number: 3,
        title: 'Restartujte program',
        description: 'Nakon instalacije, restartujte program koji je tražio Javu. Sada bi trebao raditi. Neki programi možda zahtijevaju restart računara prije nego počnu koristiti novu Java instalaciju.',
      },
    ],
  },
  {
    id: 'default-program',
    categoryId: 'softver',
    title: 'Promjena default programa za otvaranje fajlova',
    description: 'Podesite koji program otvara specifične tipove fajlova',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Desni klik > Open with',
        description: 'Desni klik na fajl > Open with > Choose another app. Videćete listu dostupnih programa. Odaberite program koji želite, označite "Always use this app to open .[extension] files", i kliknite OK.',
      },
      {
        number: 2,
        title: 'Kroz Settings',
        description: 'Settings > Apps > Default apps. Ovdje možete podesiti default aplikacije za email, muziku, video, web browser, i druge kategorije. Kliknite na trenutni default i odaberite novi.',
      },
      {
        number: 3,
        title: 'Specifični file type',
        description: 'U Default apps postavkama, skrolujte do "Choose default apps by file type". Pronadite ekstenziju fajla (npr. .pdf, .mp3, .jpg) i kliknite na trenutni program pored nje da promijenite.',
      },
    ],
  },
  {
    id: 'game-wont-launch',
    categoryId: 'softver',
    title: 'Igrica se ne pokreće',
    description: 'Rješavanje problema sa pokretanjem igrica',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Ažurirajte grafičke drivere',
        description: 'Ovo rješava većinu gaming problema. Za Nvidia: preuzmite GeForce Experience i instalirajte najnovije Game Ready drivere. Za AMD: preuzmite Adrenalin Software. Restartujte računar nakon instalacije.',
      },
      {
        number: 2,
        title: 'Instalirajte potrebne redistributables',
        description: 'Igrice zahtijevaju dodatni softver. Instalirajte: (1) Visual C++ Redistributables (2015-2022, x86 i x64), (2) DirectX End-User Runtime, (3) .NET Framework 4.8. Sve možete preuzeti besplatno sa Microsoft sajta.',
      },
      {
        number: 3,
        title: 'Verify/Repair igrice',
        description: 'U Steam: Library > desni klik na igricu > Properties > Local Files > Verify integrity of game files. U Epic Games: Library > tri tačkice na igrici > Verify. Ovo proverava i popravlja korumpirane fajlove.',
      },
      {
        number: 4,
        title: 'Pokrenite kao Administrator',
        description: 'Desni klik na game executable ili shortcut > Properties > Compatibility tab > označite "Run this program as an administrator". Takođe možete probati različite compatibility modes (Windows 7, Windows 8) ako je igrica starija.',
      },
    ],
  },
  {
    id: 'ctrl-alt-del',
    categoryId: 'softver',
    title: 'Program se zamrzo i ne reaguje',
    description: 'Prisilno zatvaranje zamrznutih programa',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Sačekajte 30 sekundi',
        description: 'Ponekad program nije zamrznut nego samo radi nešto intenzivno. Sačekajte najmanje 30 sekundi da vidite da li će se "odmrznuti". Pogleda jte disk i CPU korištenje u Task Manager-u.',
      },
      {
        number: 2,
        title: 'Alt+F4 da zatvorite program',
        description: 'Kliknite na prozor zamrznutog programa da ga fokusirate, zatim pritisnite Alt+F4. Ovo je normalan način zatvaranja i daje programu priliku da se sam zatvori.',
      },
      {
        number: 3,
        title: 'Force close kroz Task Manager',
        description: 'Pritisnite Ctrl+Shift+Esc da otvorite Task Manager. Pronadite zamrznuti program u Processes listi, kliknite na njega, pa kliknite "End Task" dugme dole desno. Program će biti prisilno zatvoren.',
      },
      {
        number: 4,
        title: 'Restart računara ako Task Manager ne radi',
        description: 'Ako je cijeli sistem zamrznut i Task Manager se ne otvara, pritisnite Ctrl+Alt+Del pa odaberite "Sign out" ili kliknite Power > Restart. Ako ni to ne radi, držite Power dugme na računaru 5-10 sekundi da prisilno ugasite (zadnja opcija!).',
      },
    ],
  },
  {
    id: 'chrome-slow',
    categoryId: 'softver',
    title: 'Google Chrome je spor',
    description: 'Ubrzajte Chrome pretraživač',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Zatvorite nepotrebne tabove',
        description: 'Chrome koristi RAM za svaki tab - 20 tabova može koristiti 4-8GB RAM-a! Zatvorite sve osim onih koje aktivno koristite. Koristite bookmarks za sajtove koje želite sačuvati za kasnije.',
      },
      {
        number: 2,
        title: 'Isključite ili obrišite nepotrebne ekstenzije',
        description: 'Otkucajte chrome://extensions u address bar. Pregledajte listu - ima li ekstenzija koje ne koristite? OBRIŠITE ih (Remove). Takođe isključite ekstenzije koje koristite rijetko - možete ih ponovo uključiti kada trebaju.',
      },
      {
        number: 3,
        title: 'Obrišite browsing data',
        description: 'Chrome Menu (tri tačkice) > More tools > Clear browsing data. Označite "Cookies and other site data" i "Cached images and files". Odaberite "All time" i kliknite Clear data. Ovo može osloboditi gigabajte prostora.',
      },
      {
        number: 4,
        title: 'Omogućite Hardware Acceleration',
        description: 'Chrome Settings > System > provjerite da je "Use hardware acceleration when available" UKLJUČENO. Ovo koristi grafičku karticu umjesto procesora za renderovanje, što ubrzava rad.',
      },
    ],
  },
  {
    id: 'windows-defender-off',
    categoryId: 'softver',
    title: 'Windows Defender je isključen',
    description: 'Ponovno omogućavanje Windows zaštite',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite da drugi antivirus nije instaliran',
        description: 'Windows Defender se automatski isključuje ako instalirate drugi antivirus (Norton, McAfee, Avast). Idite u Control Panel > Programs > Uninstall a program i pogledajte da li imate drugi antivirus. Ako da, to je namjerno - ne trebaju vam oba.',
      },
      {
        number: 2,
        title: 'Uključite Real-time protection',
        description: 'Otkucajte "Windows Security" u Start search > Virus & threat protection > Virus & threat protection settings > uključite "Real-time protection". Ovo omogućava Defender.',
      },
      {
        number: 3,
        title: 'Provjerite Group Policy',
        description: 'Pritisnite Windows+R, otkucajte "gpedit.msc" (ne radi na Home verziji Windows-a). Idite na Computer Configuration > Administrative Templates > Windows Components > Windows Defender Antivirus > "Turn off Windows Defender Antivirus" postavka treba biti "Not configured" ili "Disabled".',
      },
    ],
  },
  {
    id: 'task-scheduler-error',
    categoryId: 'softver',
    title: 'Kreiranje automatizovanih task-ova',
    description: 'Korištenje Windows Task Scheduler-a',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Otvorite Task Scheduler',
        description: 'Otkucajte "Task Scheduler" u Start search i otvorite ga. Ovo je moćan alat koji može pokretati programe, skripte ili komande u zakazano vrijeme ili pri određenim event-ima.',
      },
      {
        number: 2,
        title: 'Kreirajte Basic Task',
        description: 'Desni panel: kliknite "Create Basic Task". Unesite ime i opis (npr. "Daily Backup"). Kliknite Next. Odaberite trigger (kada task treba da radi): Daily, Weekly, When computer starts, When I log on, itd.',
      },
      {
        number: 3,
        title: 'Podesite akciju',
        description: 'Odaberite šta task treba da radi: (1) "Start a program" - pokrenuti .exe ili skripta, (2) "Send an e-mail" (deprecated), (3) "Display a message" (deprecated). Kliknite Next, browse do programa koji želite pokrenuti.',
      },
      {
        number: 4,
        title: 'Finalizujte i testirajte',
        description: 'Označite "Open the Properties dialog" prije nego kliknete Finish. U Properties, možete podesiti dodatne opcije: Run whether user is logged on or not, Run with highest privileges, Conditions (battery, network), Settings (retry policy). Desni klik na task > Run da testirate.',
      },
    ],
  },
  {
    id: 'system-restore',
    categoryId: 'softver',
    title: 'Kako koristiti System Restore',
    description: 'Vraćanje sistema na prethodno stanje',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite da System Restore je omogućen',
        description: 'Desni klik na This PC > Properties > System protection (lijeva strana). Provjerite da je Protection za C: disk "On". Ako nije, kliknite Configure > Turn on system protection > OK.',
      },
      {
        number: 2,
        title: 'Pokrenite System Restore',
        description: 'Otkucajte "Create a restore point" u Start search > System Restore dugme. Ili Control Panel > System > System protection > System Restore. Kliknite Next.',
      },
      {
        number: 3,
        title: 'Odaberite restore point',
        description: 'Videćete listu restore points sa datumima. Odaberite point PRIJE nego što je problem započeo. Označite "Show more restore points" da vidite starije. Kliknite "Scan for affected programs" da vidite šta će se promijeniti.',
      },
      {
        number: 4,
        title: 'Potvrdit i sačekajte',
        description: 'Kliknite Next > Finish > Yes. Računar će se restartovati i vratiti sistem fajlove, drivere i programe na odabrani datum. VAŽNO: Ovo NE briše vaše lične fajlove (dokumenti, slike). Proces traje 10-30 minuta.',
      },
    ],
  },
  {
    id: 'pdf-reader-install',
    categoryId: 'softver',
    title: 'Kako čitati PDF fajlove',
    description: 'Instaliranje PDF reader-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite built-in Edge ili Chrome',
        description: 'Windows 10/11 dolazi sa Microsoft Edge koji može otvarati PDF-ove bez dodatnog softvera. Desni klik na PDF fajl > Open with > Microsoft Edge ili Google Chrome. Oba pretraživača imaju ugrađeni PDF reader.',
      },
      {
        number: 2,
        title: 'Instalirajte Adobe Acrobat Reader (besplatan)',
        description: 'Za naprednije funkcije (form filling, signing), preuzmite Adobe Acrobat Reader sa get.adobe.com/reader. Tokom instalacije, ODZNAČITE ponudu za McAfee antivirus i Chrome toolbar koji pokušava da se ubaci!',
      },
      {
        number: 3,
        title: 'Alternativa: Foxit Reader ili Sumatra PDF',
        description: 'Lakše alternative Adobe-u: Foxit Reader (više features) ili Sumatra PDF (brži, minimalističniji). Oba besplatna. Preuzmite sa zvaničnih sajtova.',
      },
    ],
  },
  {
    id: 'disk-cleanup',
    categoryId: 'softver',
    title: 'Oslobađanje disk prostora',
    description: 'Duboko čišćenje hard diska',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite Storage Sense',
        description: 'Settings > System > Storage. Kliknite na C: disk da vidite šta zauzima prostor. Možete obrisati: Temporary files, Downloads, Recycle Bin, Previous Windows installations. Storage Sense može automatski raditi ovo mjesečno.',
      },
      {
        number: 2,
        title: 'Pokrenite Disk Cleanup kao administrator',
        description: 'Otkucajte "Disk Cleanup" u Start search > desni klik > Run as administrator. Odaberite C: disk. Kliknite "Clean up system files" dugme. Označite SVE opcije posebno "Windows Update Cleanup" i "Previous Windows installations" - može osloboditi 10-20GB!',
      },
      {
        number: 3,
        title: 'Koristite TreeSize Free da identifikujete velike fajlove',
        description: 'Preuzmite TreeSize Free. Skeniraće C: disk i pokazati najveće foldere/fajlove. Često ćete pronaći gigabajte u: AppData (app cache), Downloads, Videos, ili zaboravljene backup fajlove.',
      },
    ],
  },
  {
    id: 'windows-god-mode',
    categoryId: 'softver',
    title: 'Pristup naprednim Windows postavkama (God Mode)',
    description: 'Sve kontrole na jednom mjestu',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Kreirajte God Mode folder',
        description: 'Desni klik na Desktop > New > Folder. Dajte folderu tačno ovo ime (kopirajte i nalepite): GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}',
      },
      {
        number: 2,
        title: 'Otvorite God Mode',
        description: 'Dupli klik na folder. Videćete CIJELU listu Windows kontrola i postavki na jednom mjestu - over 200 postavki! Sve od: Power options, User accounts, Network settings, Security, Troubleshooters, itd.',
      },
      {
        number: 3,
        title: 'Koristite search',
        description: 'U gornjem desnom uglu God Mode prozora ima search box. Otkucajte ključnu riječ (npr. "firewall", "update", "privacy") da brzo pronađete specifičnu postavku.',
      },
    ],
  },
  {
    id: 'windows-sandbox',
    categoryId: 'softver',
    title: 'Testiranje sumnjivog softvera sigurno',
    description: 'Korištenje Windows Sandbox-a',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Provjerite da vaš Windows podržava Sandbox',
        description: 'Windows Sandbox radi samo na Windows 10 Pro/Enterprise ili Windows 11 Pro/Enterprise (NE na Home verziji). Takođe trebate: Virtualization enabled u BIOS-u, najmanje 4GB RAM (8GB preporučeno).',
      },
      {
        number: 2,
        title: 'Omogućite Windows Sandbox',
        description: 'Control Panel > Programs > Turn Windows features on or off > označite "Windows Sandbox" > OK. Računar će se restartovati. Ova funkcija instalira lightweight virtualnu mašinu.',
      },
      {
        number: 3,
        title: 'Pokrenite Sandbox',
        description: 'Otkucajte "Windows Sandbox" u Start search i pokrenite ga. Otvorit će se prozor sa potpuno novim, clean Windows okruženjem. Sve što uradite u Sandbox-u je izolovano od pravog sistema.',
      },
      {
        number: 4,
        title: 'Testirajte sumnjiv program',
        description: 'Kopirajte sumnjiv .exe fajl u Sandbox (drag and drop), pokrenite ga. Testirajte šta radi. Kada zatvorite Sandbox, SVE unutra će biti obrisano - virusi, izmjene, instalirani programi - ništa ne ostaje na pravom računaru. Savršeno za testiranje!',
      },
    ],
  },
  {
    id: 'screen-recording',
    categoryId: 'softver',
    title: 'Snimanje ekrana na Windows-u',
    description: 'Kako napraviti screen recording',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite Xbox Game Bar (built-in)',
        description: 'Pritisnite Windows+G da otvorite Game Bar. Kliknite na Capture ikonu (kamera). Kliknite Record dugme (krug). Sada snima vaš ekran! Pritisnite Windows+Alt+R da započnete/zaustavite snimanje bez otvaranja Game Bar-a.',
      },
      {
        number: 2,
        title: 'Gdje se čuvaju snimci',
        description: 'Snimci se automatski čuvaju u: This PC > Videos > Captures folder. Videćete .mp4 fajlove. Možete ih otvoriti sa Windows Media Player ili uploadovati online.',
      },
      {
        number: 3,
        title: 'Alternativa: OBS Studio (naprednije)',
        description: 'Za profesionalne screen recordinge sa više funkcija, preuzmite OBS Studio (besplatan, open source). Može snimati cijeli ekran, određeni prozor, ili region. Ima opcije za audio mixing, overlays, streaming, itd.',
      },
    ],
  },
  {
    id: 'windows-key-shortcuts',
    categoryId: 'softver',
    title: 'Korisne Windows prečice na tastaturi',
    description: 'Najvažnije keyboard shortcuts',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Window management prečice',
        description: 'Windows+D: Prikaži Desktop (minimiziraj sve). Windows+L: Lock računar. Windows+E: Otvori File Explorer. Windows+Left/Right Arrow: Snap prozor na levu/desnu polovinu ekrana. Windows+Up Arrow: Maksimiziraj prozor. Windows+Tab: Task View (svi otvoreni prozori).',
      },
      {
        number: 2,
        title: 'Clipboard i tekst prečice',
        description: 'Windows+V: Clipboard history (možete zalepiti stvari koje ste kopirali ranije!). Ctrl+Z: Undo. Ctrl+Y: Redo. Ctrl+A: Select all. Ctrl+F: Find (pretraga unutar dokumenta/web stranice).',
      },
      {
        number: 3,
        title: 'System prečice',
        description: 'Windows+I: Otvori Settings. Windows+X: Quick menu (pristup Power options, Device Manager, Task Manager). Windows+R: Run dialog (brzo pokretanje programa). Ctrl+Shift+Esc: Otvori Task Manager direktno. Alt+F4: Zatvori trenutni program.',
      },
      {
        number: 4,
        title: 'Screenshot prečice',
        description: 'Windows+Shift+S: Screenshot tool (Snipping Tool) - odaberite region ekrana. PrintScreen: Screenshot cijelog ekrana u clipboard. Windows+PrintScreen: Screenshot cijelog ekrana, automatski se čuva u Pictures > Screenshots folder.',
      },
    ],
  },
  {
    id: 'firewall-configuration',
    categoryId: 'softver',
    title: 'Podešavanje Windows Firewall-a',
    description: 'Dozvoljavanje programa kroz firewall',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Otvorite Windows Firewall postavke',
        description: 'Otkucajte "Windows Defender Firewall" u Start search. Kliknite na "Allow an app or feature through Windows Defender Firewall" (lijeva strana).',
      },
      {
        number: 2,
        title: 'Dodajte program u exception listu',
        description: 'Kliknite "Change settings" (trebate admin). Kliknite "Allow another app" dugme. Browse do .exe fajla programa koji želite dozvoliti. Označite "Private" i/ili "Public" mreže (Private je kućna WiFi, Public je javni WiFi). Kliknite Add.',
      },
      {
        number: 3,
        title: 'Provjerite da firewall je uključen',
        description: 'Vratite se na glavni Firewall ekran. Provjerite da je firewall "On" za Private i Public networks. NIKADA nemojte potpuno isključiti firewall osim za testiranje - to vas ostavlja bez zaštite!',
      },
    ],
  },
  {
    id: 'app-permissions',
    categoryId: 'softver',
    title: 'Upravljanje dozvolama aplikacija',
    description: 'Kontrolišite pristup kameri, mikrofonu, lokaciji',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Otvorite Privacy postavke',
        description: 'Settings > Privacy. Ovdje možete kontrolisati šta aplikacije mogu pristupiti: kamera, mikrofon, lokacija, kontakti, kalendar, pozivi, notifikacije, account info, itd.',
      },
      {
        number: 2,
        title: 'Podesite globalnu dozvolu',
        description: 'Svaka kategorija (npr. Camera) ima master switch na vrhu. Ako ga isključite, NIJEDNA aplikacija ne može koristiti kameru. Ako ga uključite, možete pojedinačno kontrolisati koje aplikacije imaju pristup.',
      },
      {
        number: 3,
        title: 'Pregledajte app-by-app dozvole',
        description: 'Skrolujte dolje ispod master switch-a da vidite listu svih aplikacija koje traže tu dozvolu. Isključite aplikacije koje ne trebaju pristup. Na primjer: zašto bi calculator aplikacija trebala pristup vašoj kameri? Isključite to!',
      },
    ],
  },
  {
    id: 'windows-telemetry',
    categoryId: 'softver',
    title: 'Smanjenje Windows telemetrije/praćenja',
    description: 'Povećajte privatnost na Windows-u',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Isključite Advertising ID',
        description: 'Settings > Privacy > General > isključite "Let apps use advertising ID to make ads more interesting to you based on your app activity". Ovo sprečava Windows i aplikacije da kreiraju profil vaših interesovanja za targetirane reklame.',
      },
      {
        number: 2,
        title: 'Minimizirajte Diagnostics data',
        description: 'Settings > Privacy > Diagnostics & feedback > Diagnostic data > odaberite "Required diagnostic data" (minimum). Isključite "Optional diagnostic data". Takođe isključite "Improve inking and typing" i "Tailored experiences".',
      },
      {
        number: 3,
        title: 'Isključite Activity History',
        description: 'Settings > Privacy > Activity history > odznačite "Store my activity history on this device". Kliknite "Clear" da obrišete postojeći history. Ovo sprečava Windows da prati šta radite.',
      },
      {
        number: 4,
        title: 'Pregledajte Background apps',
        description: 'Settings > Privacy > Background apps. Isključite aplikacije koje ne trebaju raditi u pozadini. Ovo ne samo poboljšava privatnost nego i štedi bateriju/RAM.',
      },
    ],
  },
  {
    id: 'backup-strategy',
    categoryId: 'softver',
    title: 'Kreiranje backup strategije',
    description: 'Kako pravilno čuvati backup podataka',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Identifikujte kritične podatke',
        description: 'Šta MORATE sačuvati: (1) Dokumenti (Word, Excel, PDF), (2) Fotografije i videi, (3) Email data (PST fajlovi), (4) Bookmarks i lozinke, (5) Projekti i radni fajlovi. Programi mogu se ponovo instalirati - fokusirajte se na nezamjenjive lične podatke.',
      },
      {
        number: 2,
        title: 'Koristite 3-2-1 pravilo',
        description: '3 kopije podataka: (1) Original na računaru, (2) Backup na eksternom hard disku, (3) Cloud backup (Google Drive, OneDrive, Dropbox). 2 različita medija (hard disk + cloud). 1 offsite kopija (cloud je offsite). Ako izgubite računar u požaru/pljački, cloud kopija vas spašava.',
      },
      {
        number: 3,
        title: 'Automatizirajte backup',
        description: 'Windows Backup: Settings > Update & Security > Backup > Add a drive (eksterni disk). File History će automatski backup-ovati vaše fajlove. Cloud: Google Backup and Sync ili OneDrive desktop app automatski uploaduje fajlove.',
      },
      {
        number: 4,
        title: 'Testirajte restore',
        description: 'Jednom u 3-6 mjeseci, TESTIRAJTE restore sa backupa. Mnogi ljudi misle da imaju backup ali nikada ne testiraju - pa otkriju da backup ne radi kada im zaista zatreba! Restore jedan fajl sa backupa da provjerite.',
      },
    ],
  },

  // Email problems
  {
    id: 'kako-poslati-email',
    categoryId: 'email',
    title: 'Kako poslati email',
    description: 'Osnove slanja elektronske pošte',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Prijavite se na vaš email servis',
        description:
          'Prvi korak je pristup vašem email nalogu. Postoji nekoliko popularnih email servisa i svaki ima malo drugačiji interfejs, ali osnove su iste. Najčešći servisi su: Gmail (Google), Outlook (Microsoft), Yahoo Mail, i ProtonMail. Da pristupite vašem email-u: (1) Otvorite web pretraživač (Chrome, Firefox, Edge, Safari) i posjetite odgovarajuću stranicu: Za Gmail idite na gmail.com, za Outlook idite na outlook.com, za Yahoo Mail idite na mail.yahoo.com. (2) Kliknite na "Sign In" ili "Prijava" dugme. (3) Unesite vašu email adresu u polje (npr. vaseim@gmail.com) i kliknite Next ili Dalje. (4) Na sljedećem ekranu unesite vašu lozinku. Budite pažljivi sa velikim i malim slovima jer lozinke razlikuju registar. Ako imate problema sa pamćenjem lozinke, možete kliknuti na "Show password" ili ikonu oka da vidite šta kucate. (5) Ako ste uključili two-factor authentication (preporučljivo za sigurnost), morate unijeti dodatni kod koji dobijete na telefon. (6) Kliknite "Sign In" ili "Prijava". Sada se nalazite u vašem inbox-u (prijemnom sandučetu) gdje vidite listu primljenih email-ova. Na mobilnom telefonu, proces je sličan ali koristite Gmail ili Outlook aplikaciju iz App Store ili Play Store umjesto web pretraživača.',
      },
      {
        number: 2,
        title: 'Otvorite prozor za kompoziciju nove poruke',
        description:
          'Da biste poslali email, morate otvoriti prozor za pisanje nove poruke. Evo kako: (1) U Gmail-u: Potražite dugme "Compose" ili "Sastavi" u gornjem lijevom uglu ekrana, blizu loga. Dugme je obično crveno ili plavo i ima ikonu olovke ili plus znaka. Kliknite na njega. (2) U Outlook-u: Kliknite na "New message" ili "Nova poruka" dugme, koje se obično nalazi na vrhu ekrana ili u lijevom meniju. (3) U Yahoo Mail-u: Dugme "Compose" je u lijevoj strani ekrana. Kada kliknete na ovo dugme, otvorit će se novi prozor ili panel (obično u donjem desnom uglu ekrana za Gmail, ili kao cijeli ekran za Outlook) koji prikazuje praznu email formu. Ovaj prozor ima nekoliko polja: "To" (kome šaljete), "Subject" (naslov email-a), i veliko tekstualno polje za sadržaj poruke. Takođe ćete vidjeti alate za formatiranje teksta (bold, italic, font veličina) i opcije za dodavanje priloga. Savjet: Možete imati više draft email-ova otvorenih istovremeno - svaki put kada kliknete "Compose" otvara se novi prozor. Gmail automatski čuva vašu poruku kao draft (nacrt) svakih nekoliko sekundi, tako da neće biti izgubljena ako slučajno zatvorite prozor.',
      },
      {
        number: 3,
        title: 'Unesite email adresu primaoca, naslov i sadržaj poruke',
        description:
          'Sada trebate ispuniti tri glavna polja email-a: (1) POLJE "TO" (Primalac): Ovo je najvažnije polje - ovdje unosite email adresu osobe kojoj šaljete poruku. Kliknite u polje "To" i počnite kucati email adresu (npr. prijatelj@gmail.com). Email adrese uvijek imaju format: ime@domen.com (npr. marko.markovic@gmail.com). Ako ste ranije dopisivali sa ovom osobom, email servis će automatski predložiti adresu nakon što otkucate prva slova - možete kliknuti na predlog. Možete dodati više primalaca - nakon unosa prve adrese, pritisnite Space ili zarez pa unesite sljedeću adresu. Takođe postoje polja "Cc" i "Bcc" koja se mogu otvoriti klikom na link pored "To" polja: "Cc" (Carbon Copy) šalje kopiju email-a drugim osobama i svi mogu vidjeti ko je još primio email. "Bcc" (Blind Carbon Copy) također šalje kopiju ali primaoci ne mogu vidjeti druge Bcc primaočeve adrese - korisno za masovno slanje. (2) POLJE "SUBJECT" (Naslov): Ovo je kratak opis sadržaja email-a (npr. "Pitanje o projektu", "Fotografije sa rođendana", "Račun za januar"). Dobar subject pomaže primaocu da brzo razumije o čemu se radi. Pokušajte da naslov bude kratak (5-10 riječi) ali informativan. (3) TEKSTUALNO POLJE (Sadržaj poruke): Kliknite u veliko bijelo polje ispod Subject linije i napišite vašu poruku. Možete pisati koliko god želite - nema ograničenja. Koristite Enter taster da pređete u novi red ili napravite prazan red između paragrafa za lakše čitanje. Možete formatirati tekst koristeći toolbar na dnu: bold (podebljano), italic (kurziv), podvučeno, promjena boje, font veličine, itd. Savjet: Počnite sa pozdravom (npr. "Pozdrav Marko," ili "Zdravo,") i završite sa potpisom (npr. "S poštovanjem, Vaše Ime").',
      },
      {
        number: 4,
        title: 'Dodajte prilog (attachment) i pošaljite email',
        description:
          'Ako želite poslati fajlove (dokumente, slike, PDF-ove) zajedno sa email-om, trebate dodati prilog (attachment). Evo kako: (1) Potražite ikonu ATTACHMENT (obično izgleda kao spajalica ili paperclip) na dnu prozora za email. U Gmail-u je na dnu, u Outlook-u može biti na vrhu. (2) Kliknite na ikonu attachment-a. Otvorit će se File Explorer (Windows) ili Finder (Mac) prozor gdje možete pregledati fajlove na vašem računaru. (3) Prođite kroz foldere i pronadite fajl koji želite poslati. Možete odabrati više fajlova držeći Ctrl taster (Windows) ili Command taster (Mac) dok klikate na fajlove. (4) Kada odaberete fajl(ove), kliknite "Open" ili "Otvori". Email servis će započeti upload fajla - videćete progress bar i ime fajla će se pojaviti ispod Subject linije sa veličinom fajla. (5) Sačekajte da se upload završi prije slanja - videćete kada je gotovo. OGRANIČENJA: Većina email servisa ima ograničenje na veličinu attachment-a (obično 25 MB za Gmail, 20 MB za Outlook). Ako je fajl prevelik, email servis će vam reći i predložiti alternativu kao Google Drive ili OneDrive za dijeljenje velikih fajlova. Nakon što ste završili sa pisanjem email-a i dodavanjem priloga: (6) PREGLEDAJTE email prije slanja - provjerite da li ste pravilno unijeli email adresu primaoca (greška ovdje znači da email ide pogrešnoj osobi!), da li je subject informativan, i da li ste rekli sve što ste htjeli. (7) Kliknite na dugme "SEND" ili "POŠALJI" koje se obično nalazi na dnu prozora (Gmail) ili vrhu (Outlook). Dugme je često plavo ili crveno. (8) Email će biti poslan u roku od nekoliko sekundi. Videćete potvrdu "Message sent" ili "Poruka poslana". Email će biti premješten u "Sent" folder gdje možete kasnije provjeriti šta ste poslali. Primalac će primiti email obično u roku od nekoliko sekundi do minute.',
      },
    ],
  },
  {
    id: 'spam-filter',
    categoryId: 'email',
    title: 'Važni email-ovi idu u Spam',
    description: 'Podešavanje spam filtera',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite Spam folder redovno',
        description: 'U Gmail-u ili Outlook-u, otvorite Spam/Junk folder (lijeva strana). Pregledajte email-ove - ponekad legitimni email-ovi završe tu. Ako vidite važan email, desni klik > "Not spam" ili "Mark as not junk".',
      },
      {
        number: 2,
        title: 'Dodajte pošiljaoca u Contacts',
        description: 'Ako određeni pošiljalac stalno završava u spam-u, dodajte njegovu email adresu u vašu Contact listu. Email servisi tretiraju email-ove od kontakata kao sigurne i neće ih filtrirati.',
      },
      {
        number: 3,
        title: 'Kreirajte filter/pravilo',
        description: 'Gmail: Settings > Filters and Blocked Addresses > Create a new filter. Unesite email adresu pošiljaoca > Create filter > označite "Never send it to Spam". Outlook: Rules > Create rule > From [email address] > move to Inbox.',
      },
    ],
  },
  {
    id: 'email-attachment-problem',
    categoryId: 'email',
    title: 'Ne mogu otvoriti email prilog',
    description: 'Rješavanje problema sa attachmentima',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Preuzmite prilog na računar',
        description: 'Ne pokušavajte otvarati direktno u email-u - kliknite na prilog i odaberite "Download" ili ikonu za download. Fajl će se sačuvati u Downloads folder. Otvorite ga odatle.',
      },
      {
        number: 2,
        title: 'Provjerite da imate program za tu vrstu fajla',
        description: 'Za .docx trebate Word. Za .xlsx trebate Excel. Za .pdf trebate PDF reader. Za .zip trebate WinRAR ili 7-Zip. Ako nemate odgovarajući program, instalirajte besplatnu alternativu (LibreOffice za dokumenti, Foxit Reader za PDF).',
      },
      {
        number: 3,
        title: 'Oprezno sa sumnjivim prilozima',
        description: 'NIKADA ne otvarajte priloge od nepoznatih pošiljalaca! Posebno .exe, .zip, ili .scr fajlovi mogu biti virusi. Čak i ako izgleda da je od prijatelja, ako email zvuči čudno ("klikni ovaj link hitno!"), možda je njihov nalog hakovan.',
      },
    ],
  },
  {
    id: 'email-reply-all',
    categoryId: 'email',
    title: 'Razlika između Reply i Reply All',
    description: 'Kako pravilno odgovarati na email-ove',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Reply - odgovor samo pošiljaocu',
        description: 'Kliknite "Reply" da odgovorite SAMO osobi koja vam je poslala email. Niko drugi neće vidjeti vaš odgovor. Koristite ovo za lične ili privatne odgovore.',
      },
      {
        number: 2,
        title: 'Reply All - odgovor svima',
        description: 'Kliknite "Reply All" da odgovorite SVIM osobama koje su bile u To: i Cc: listi originalnog email-a. Koristite ovo za poslovne/grupne diskusije gdje svi trebaju vidjeti vaš odgovor.',
      },
      {
        number: 3,
        title: 'Forward - prosljeđivanje drugoj osobi',
        description: 'Kliknite "Forward" da pošaljete kopiju email-a nekoj drugoj osobi koja nije bila u originalnoj konverzaciji. Unesite njenu email adresu i dodajte komentar zašto forwardujete.',
      },
    ],
  },
  {
    id: 'email-signature',
    categoryId: 'email',
    title: 'Kreiranje email potpisa (signature)',
    description: 'Automatski potpis na kraju svakog email-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Gmail: Otvorite Settings',
        description: 'Kliknite zupčanik (Settings) u gornjem desnom uglu > See all settings > skrolujte do "Signature" sekcije.',
      },
      {
        number: 2,
        title: 'Kreirajte potpis',
        description: 'Kliknite "+ Create new" i dajte mu ime. U text box-u, napišite vaš potpis. Obično uključuje: Vaše ime, Job title/pozicija, Kompanija, Telefon, Email. Možete formatirati tekst (bold, italic, boja), dodati logo sliku, ili link na web sajt.',
      },
      {
        number: 3,
        title: 'Podesite kada se prikazuje',
        description: 'Ispod signature box-a, odaberite: "For new emails" - potpis se automatski dodaje u nove email-ove, "On reply/forward" - potpis se dodaje i u odgovore (može biti iritantno, često se isključuje). Skrolujte do dna i kliknite "Save Changes".',
      },
    ],
  },
  {
    id: 'email-cc-bcc',
    categoryId: 'email',
    title: 'Šta su Cc i Bcc polja',
    description: 'Razumijevanje dodatnih primaoca',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'To polje - glavni primaoci',
        description: 'To: polje je za glavne primaočeve email adrese - osobe kojima direktno šaljete poruku i od kojih očekujete odgovor ili akciju.',
      },
      {
        number: 2,
        title: 'Cc (Carbon Copy) - vidljiva kopija',
        description: 'Cc: šalje kopiju email-a osobama koje trebaju biti informisane ali od njih se ne očekuje akcija. SVI primaoci vide sve Cc adrese. Na primjer: šaljete šefu zadatak, stavite kolegu u Cc da bude informisan.',
      },
      {
        number: 3,
        title: 'Bcc (Blind Carbon Copy) - skrivena kopija',
        description: 'Bcc: šalje kopiju, ALI drugi primaoci NE VIDE Bcc adrese! Korisno za: (1) Masovno slanje gde ne želite da svi vide tuđe email adrese (privatnost), (2) Tajno informisanje nekoga bez znanja drugih. Na primjer: slanje promotivnog email-a sa 50 adresa u Bcc.',
      },
    ],
  },
  {
    id: 'email-phishing',
    categoryId: 'email',
    title: 'Kako prepoznati phishing email-ove',
    description: 'Zaštita od prevara putem email-a',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Znaci phishing email-a',
        description: 'PAZI NA: (1) "Urgentne" poruke ("Vaš nalog će biti zaključan!", "Klikni odmah!"), (2) Traži lozinke, brojeve kreditnih kartica, lične podatke, (3) Sumnjiva email adresa pošiljaoca (npr. paypa1@servicre.com umjesto paypal.com), (4) Loša gramatika i pravopis, (5) Generički pozdrav ("Dear user" umjesto vašeg imena).',
      },
      {
        number: 2,
        title: 'Provjerite linkove PRIJE klikanja',
        description: 'Zadržite miš preko linka (NE KLIKAJTE!) i pogledajte URL u donjem lijevom uglu. Da li vodi na legitimni sajt? Primjer: email kaže da je od banke, ali link pokazuje random-site-123.com - to je phishing!',
      },
      {
        number: 3,
        title: 'Nikada ne šaljite lične podatke putem email-a',
        description: 'Legitimne kompanije (banke, PayPal, Amazon) NIKADA neće tražiti lozinku, broj kreditne kartice ili SSN putem email-a. Ako dobijete takav zahtjev, to je 100% prevara.',
      },
      {
        number: 4,
        title: 'Kada sumnjate, kontaktirajte direktno',
        description: 'Ako dobijete sumnjiv email koji navodno je od vaše banke/servisa, NE KLIKAJTE na link. Umjesto toga, otvorite novi tab, idite na ZVANIČNI sajt kompanije (otkucajte URL ručno), i ulogujte se tamo da provjerite.',
      },
    ],
  },
  {
    id: 'email-organize-folders',
    categoryId: 'email',
    title: 'Organizacija email-ova sa folderima/labelama',
    description: 'Održavanje urednog inboxa',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Kreirajte foldere (Outlook) ili labele (Gmail)',
        description: 'Outlook: Desni klik na Inbox > New Folder > dajte ime (npr. "Posao", "Računi", "Projekat X"). Gmail: Lijeva strana > More > Create new label. Kreirajte kategorije koje imaju smisla za vas.',
      },
      {
        number: 2,
        title: 'Premještajte email-ove ručno',
        description: 'Drag and drop email na folder/label. Ili desni klik > Move to > odaberite folder. Radite ovo redovno da održite inbox čist - cilj je "Inbox Zero" gdje inbox ima samo neprocesivane email-ove.',
      },
      {
        number: 3,
        title: 'Kreirajte automatska pravila/filtere',
        description: 'Gmail: Settings > Filters > Create new filter. Na primjer: "From: boss@company.com" > Apply label "Posao". Outlook: Home > Rules > Create Rule > If from [person] then move to [folder]. Email-ovi će automatski ići u pravilne foldere!',
      },
    ],
  },
  {
    id: 'email-search',
    categoryId: 'email',
    title: 'Kako brzo pronaći stari email',
    description: 'Efikasno pretraživanje email-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Osnovna pretraga',
        description: 'Kliknite u search box na vrhu email-a i otkucajte ključnu riječ iz email-a koji tražite - može biti ime osobe, riječ iz subjecta, ili dio teksta iz poruke. Pritisnite Enter. Videćete sve email-ove koji sadrže tu riječ.',
      },
      {
        number: 2,
        title: 'Napredna pretraga - Gmail',
        description: 'Koristite search operators: "from:marko@email.com" - svi email-ovi od Marka, "subject:račun" - email-ovi sa "račun" u subject liniji, "has:attachment" - samo email-ovi sa prilozima, "after:2023/01/01" - email-ovi nakon datuma, "before:2023/12/31" - prije datuma. Možete kombinovati: "from:marko subject:projekat after:2024/01/01".',
      },
      {
        number: 3,
        title: 'Napredna pretraga - Outlook',
        description: 'Kliknite na search box > otvara se Search Tools tab. Možete filtrirati: From (pošiljalac), Subject, Has Attachments, Received (datum), itd. Ili koristite search syntax: "from:(marko)", "subject:(projekat)", "hasattachments:yes".',
      },
    ],
  },
  {
    id: 'unsubscribe-newsletters',
    categoryId: 'email',
    title: 'Odjava od neželjenih newsletter-a',
    description: 'Smanjenje email spam-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Koristite Unsubscribe link',
        description: 'Legitimni marketing email-ovi moraju imati "Unsubscribe" link (obično na dnu email-a sitnim slovima). Kliknite na njega i potvrdite odjavu. To je najbrži način.',
      },
      {
        number: 2,
        title: 'Gmail: Koristite auto-unsubscribe',
        description: 'Gmail prepoznaje newsletter-e i prikazuje "Unsubscribe" link pored imena pošiljaoca na vrhu email-a. Jednostavno kliknite i Gmail će vas odjaviti automatski.',
      },
      {
        number: 3,
        title: 'Blokirajte uporne pošiljaoce',
        description: 'Ako "Unsubscribe" ne radi ili ne postoji, blokirajte pošiljaoca. Gmail: Otvorite email > tri tačkice (More) > Block [sender]. Outlook: desni klik na email > Block sender. Njihovi budući email-ovi će ići direktno u Trash.',
      },
    ],
  },
  {
    id: 'email-backup',
    categoryId: 'email',
    title: 'Backup email-ova',
    description: 'Kako sačuvati važne email-ove',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Export u PST (Outlook)',
        description: 'File > Open & Export > Import/Export > Export to a file > Outlook Data File (.pst) > odaberite folder (obično "Inbox" ili cijeli account) > Browse gdje želite sačuvati > Finish. PST fajl sadrži SVE email-ove, kontakte, kalendar.',
      },
      {
        number: 2,
        title: 'Download putem Google Takeout (Gmail)',
        description: 'Idite na takeout.google.com, ulogujte se. Deselect all pa označite samo "Mail". Možete odabrati sve email-ove ili specifične labele. Kliknite Next > Create export. Google će kreirati .mbox fajl koji možete preuzeti.',
      },
      {
        number: 3,
        title: 'Forward važne email-ove',
        description: 'Za pojedinačne važne email-ove: Forward ih na drugu email adresu, ili "Save as" (File > Save as) u PDF ili .eml format na računar. Čuvajte ih u Backup folderu na eksternom disku.',
      },
    ],
  },
  {
    id: 'email-two-factor',
    categoryId: 'email',
    title: 'Podešavanje two-factor authentication',
    description: 'Dodatna sigurnost za email nalog',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje 2FA',
        description: '2FA (two-factor authentication) zahtijeva DVA načina identifikacije: (1) Nešto što ZNATE (lozinka), (2) Nešto što IMATE (telefon sa kodom). Čak i ako neko ukrade vašu lozinku, ne mogu pristupiti bez vašeg telefona.',
      },
      {
        number: 2,
        title: 'Gmail: Omogući 2-Step Verification',
        description: 'Idite na myaccount.google.com > Security > 2-Step Verification > Get Started. Unesite telefon broj. Google će slati SMS kod svaki put kada se logujete sa novog uređaja. Alternativno, koristite Google Authenticator app za generisanje kodova.',
      },
      {
        number: 3,
        title: 'Outlook: Setup two-step verification',
        description: 'Idite na account.microsoft.com > Security > Advanced security options > Two-step verification > Turn on. Dodajte telefon broj ili koristite Microsoft Authenticator app. Nakon aktiviranja, trebaće vam kod pri svakom login-u.',
      },
      {
        number: 4,
        title: 'Sačuvajte backup kodove',
        description: 'Nakon omogućavanja 2FA, sistem će ponuditi backup/recovery kodove. OBAVEZNO ih sačuvajte (print ili čuvajte u password manager-u)! Ako izgubite telefon, ovi kodovi vam omogućavaju pristup nalogu.',
      },
    ],
  },
  {
    id: 'email-recall',
    categoryId: 'email',
    title: 'Opozivanje poslat email-a',
    description: 'Kako povući email ako ste ga poslali greškom',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Gmail: Undo Send (5-30 sekundi)',
        description: 'Odmah nakon što kliknete Send, Gmail pokazuje "Undo" dugme u donjem lijevom uglu 5 sekundi. Kliknite ga da zaustavite slanje! Možete produžiti ovo vrijeme: Settings > See all settings > General > "Undo Send" > odaberite 5, 10, 20 ili 30 sekundi.',
      },
      {
        number: 2,
        title: 'Outlook: Recall email (samo unutar organizacije)',
        description: 'Ovo radi SAMO ako i vi i primalac koristite Microsoft Exchange (ista kompanija). Idite u Sent Items, otvorite email > Message tab > Actions > Recall This Message. Možete pokušati obrisati nepročitane kopije ili zamijeniti sa novim email-om.',
      },
      {
        number: 3,
        title: 'Ako Recall ne radi',
        description: 'Ako je prošlo previše vremena ili primalac ne koristi Exchange, recall nije moguć. Najbolje je poslati follow-up email: "Apologies, please disregard my previous email" i objasnite grešku. Ako je ozbiljna greška (pogrešan prilog, kriva osoba), kontaktirajte primaoca direktno telefonom.',
      },
    ],
  },
  {
    id: 'email-vacation-reply',
    categoryId: 'email',
    title: 'Podešavanje automatskog odgovora (Out of office)',
    description: 'Vacation responder ili away message',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Gmail: Vacation responder',
        description: 'Settings > See all settings > General > Vacation responder > Vacation responder on. Unesite: First day (datum početka), Last day (datum završetka, optional), Subject ("Out of Office"), Message ("Hvala na email-u. Trenutno sam na odmoru do [datum]. Odgovorit ću vam kada se vratim.").',
      },
      {
        number: 2,
        title: 'Outlook: Automatic replies',
        description: 'File > Info > Automatic Replies > Send automatic replies. Označite "Send replies only during this time period" i unesite datume. Napišite poruku. Možete postaviti različite poruke za ljude unutar organizacije i vanjske kontakte. Kliknite OK.',
      },
      {
        number: 3,
        title: 'Savjeti za dobar away message',
        description: 'Uključite: (1) Koliko dugo ste odsutni, (2) Kada će te biti dostupni ponovo, (3) Kontakt osobe za hitne slučajeve ("Za hitne stvari, kontaktirajte [ime] na [email]"), (4) Kratko i profesionalno - ne trebaju detalji odmora.',
      },
    ],
  },
  {
    id: 'email-alias',
    categoryId: 'email',
    title: 'Kreiranje email alias-a',
    description: 'Dodatne email adrese za isti nalog',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Zašto koristiti alias',
        description: 'Alias je alternativna email adresa koja vodi u isti inbox. Korisno za: (1) Različite svrhe (posao vs. lično), (2) Registracije na web sajtovima (koristite alias za manje pouzdane sajtove), (3) Filtriranje (alias za newslettere).',
      },
      {
        number: 2,
        title: 'Gmail: Plus addressing',
        description: 'Gmail ima built-in trik: ako je vaš email marko@gmail.com, možete koristiti marko+shopping@gmail.com, marko+work@gmail.com, itd. SVE ide u isti inbox! Kreirajte filter da automatski labelira email-ove poslate na specifični "+alias".',
      },
      {
        number: 3,
        title: 'Outlook: Dodavanje alias-a',
        description: 'Idite na account.microsoft.com > Your info > Manage how you sign in > Add email. Možete dodati do 10 alias-ova. Email-ovi poslati na bilo koji alias stižu u isti inbox. U Outlook app-u možete birati koji alias koristiti kao "From" pri slanju.',
      },
    ],
  },
  {
    id: 'email-rules',
    categoryId: 'email',
    title: 'Kreiranje email pravila/filtera',
    description: 'Automatizacija organizacije email-a',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Planirajte pravila',
        description: 'Pravila automatski obraduju email-ove po kriterijumima. Primjeri: (1) Svi email-ovi od sefa - flag as important, (2) Newsletter-i - move to Newsletter folder, (3) Email-ovi sa Racun u subjectu - label as Racuni.',
      },
      {
        number: 2,
        title: 'Gmail: Kreiranje filtera',
        description: 'Settings > Filters and Blocked Addresses > Create a new filter. Odaberite kriterijume: From (pošiljalac), To, Subject, Has the words, Has attachment, Size. Kliknite Create filter. Odaberite akciju: Skip Inbox (arhiv), Mark as read, Star, Apply label, Forward, Delete. Save.',
      },
      {
        number: 3,
        title: 'Outlook: Kreiranje pravila',
        description: 'Home tab > Rules > Create Rule. Odaberite uslove: From, Subject contains, Sent to. Odaberite akcije: Move to folder, Play a sound, Display a message. Za naprednije: Rules > Manage Rules > New Rule > koristite templates ili custom pravila.',
      },
    ],
  },
  {
    id: 'email-privacy',
    categoryId: 'email',
    title: 'Zaštita privatnosti email-a',
    description: 'Smanjenje tracking-a i praćenja',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Blokirajte email tracking pixele',
        description: 'Mnogi marketing email-ovi imaju "tracking pixels" - nevidljive slike koje prijavljuju kada ste otvorili email. U Gmail-u: Settings > Images > Ask before displaying external images. Outlook: File > Options > Trust Center > Automatic Download > "Don\'t download pictures automatically".',
      },
      {
        number: 2,
        title: 'Koristite tempor arnu email adresu',
        description: 'Za registracije na sumnjivim sajtovima, koristite disposable email servise: TempMail, Guerrilla Mail, 10MinuteMail. Ovo su privremene adrese koje se auto-brišu nakon nekoliko sati. Sajt ne dobija vašu pravu email adresu.',
      },
      {
        number: 3,
        title: 'Pažljivo sa "Read receipts"',
        description: 'Outlook ima "Request a Read Receipt" opciju koja traži da primalac potvrdi čitanje. Možete ODBITI ove zahtjeve: File > Options > Mail > Tracking > odaberite "Never send a read receipt". Ne dajte pošiljaocima da znaju kada čitate njihove email-ove osim ako je poslovno neophodno.',
      },
    ],
  },
  {
    id: 'email-large-files',
    categoryId: 'email',
    title: 'Slanje velikih fajlova putem email-a',
    description: 'Zaobilaženje attachment limit-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje email limitova',
        description: 'Većina email servisa ima limite: Gmail: 25MB, Outlook: 20MB, Yahoo: 25MB. Ako pokušate poslati veći fajl, email će biti odbijen ili neće biti poslan.',
      },
      {
        number: 2,
        title: 'Koristite cloud storage linkove',
        description: 'Uploadujte fajl na: Google Drive, OneDrive, Dropbox, ili WeTransfer. Zatim share link i pošaljite taj link putem email-a. Primalac može preuzeti fajl direktno. Gmail i Outlook automatski nude ovu opciju kada prilog je prevelik.',
      },
      {
        number: 3,
        title: 'Kompresujte fajl sa ZIP-om',
        description: 'Desni klik na fajl > Send to > Compressed (zipped) folder. ZIP može smanjiti veličinu za 20-70% zavisno od tipa fajla (najbolje radi sa dokumentima, slabije sa već kompresiranim fajlovima kao JPEG ili MP4).',
      },
    ],
  },
  {
    id: 'email-encryption',
    categoryId: 'email',
    title: 'Slanje šifrovanih email-ova',
    description: 'End-to-end enkr ipcija za osetljive informacije',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Zašto enkriptovati email-ove',
        description: 'Obični email-ovi nisu sigurni - mogu biti intercepted tokom prijenosa. Koristite enkripciju za: osjetljive dokumente, medicinske informacije, finansijske podatke, lozinke, lične identifikacione podatke.',
      },
      {
        number: 2,
        title: 'Koristite ProtonMail (najlakše)',
        description: 'ProtonMail je besplatan email servis sa built-in end-to-end enkripcijom. Napravite nalog na protonmail.com. Email-ovi između ProtonMail korisnika su automatski enkriptovani. Za slanje non-ProtonMail korisnicima, možete postaviti lozinku na email.',
      },
      {
        number: 3,
        title: 'Outlook: Encrypt dugme',
        description: 'Za Microsoft 365 korisnike: Compose new email > Options tab > Encrypt dugme. Odaberite "Encrypt-Only" ili "Do Not Forward". Email će biti enkriptovan i samo primalac sa Microsoft nalogom može ga otvoriti.',
      },
    ],
  },
  {
    id: 'email-calendar-invite',
    categoryId: 'email',
    title: 'Slanje calendar invite-a',
    description: 'Kako pozvati ljude na meeting',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Outlook: Kreiranje meeting invite-a',
        description: 'Kliknite na Calendar u Outlook-u > New Meeting. Unesite: To (email adrese učesnika), Subject (naziv meetinga), Location (fizička ili Zoom/Teams link), Start/End time. Dodajte opis u body. Kliknite Send - učesnici će primiti calendar invite koji mogu Accept/Decline.',
      },
      {
        number: 2,
        title: 'Gmail: Kreiranje eventi u Google Calendar',
        description: 'Idite na calendar.google.com > Create > Add guests (unesite email adrese). Podesite datum/vrijeme. Add Google Meet video conferencing (opciono). Kliknite Save > Send - gosti dobijaju invite i mogu RSVP (Yes/No/Maybe).',
      },
      {
        number: 3,
        title: 'Odgovaranje na calendar invite-ove',
        description: 'Kada dobijete invite, videćete dugmad: Accept (potvrdite dolazak - dodaje se u vaš kalendar), Tentative (možda dolazim), Decline (ne dolazim). Možete dodati komentar uz odgovor. Meeting će biti vidljiv u vašem calendar-u ako ste Accept-ovali.',
      },
    ],
  },
  {
    id: 'email-templates',
    categoryId: 'email',
    title: 'Kreiranje email template-a',
    description: 'Čuvanje često korištenih email-ova',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Zašto koristiti template-e',
        description: 'Ako šaljete slične email-ove često (npr. odgovori korisnicima, thank you email-ovi, meeting confirmations), template-i štede vrijeme. Napišite jednom, koristite many times.',
      },
      {
        number: 2,
        title: 'Gmail: Canned Responses (Templates)',
        description: 'Settings > Advanced > Enable "Templates". Compose new email, napišite tekst koji želite sačuvati kao template. Tri tačkice (More options) > Templates > Save draft as template > Save as new template > dajte ime. Da koristite: Compose new email > More options > Templates > odaberite template.',
      },
      {
        number: 3,
        title: 'Outlook: Quick Parts',
        description: 'Compose new email, napišite tekst template-a. Selektujte tekst > Insert tab > Quick Parts > Save Selection to Quick Part Gallery > dajte naziv. Da koristite: Insert tab > Quick Parts > odaberite vaš template iz liste.',
      },
    ],
  },
  {
    id: 'email-contacts-import',
    categoryId: 'email',
    title: 'Import/Export kontakata',
    description: 'Prebacivanje kontakata između email servisa',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Export kontakata iz starog servisa',
        description: 'Gmail: contacts.google.com > Export > odaberite format (Google CSV ili Outlook CSV) > Export. Outlook: People > Manage > Export contacts > CSV fajl. Zapamtite gdje je fajl sačuvan!',
      },
      {
        number: 2,
        title: 'Import kontakata u novi servis',
        description: 'Gmail: contacts.google.com > Import > Choose file > odaberite CSV fajl > Import. Outlook: People > Manage > Import contacts > Browse do CSV fajla > Import. Kontakti će biti dodati u vaš novi nalog.',
      },
      {
        number: 3,
        title: 'Čišćenje duplicates',
        description: 'Nakon importa, možda imate duplikate. Gmail: contacts.google.com > Merge & fix > Find duplicates > Merge. Outlook automatski sugerira merge-ovanje sličnih kontakata.',
      },
    ],
  },
  {
    id: 'email-offline-access',
    categoryId: 'email',
    title: 'Pristup email-ovima offline',
    description: 'Čitanje i pisanje bez internet veze',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Gmail: Omogući Offline Mail',
        description: 'Settings > See all settings > Offline > Enable offline mail. Odaberite koliko dana email-ova želite sync-ovati (7, 30, 90 dana). Kada ste offline, idite na mail.google.com - možete čitati sync-ovane email-ove i pisati odgovore koji će se poslati kada se ponovo spojite na internet.',
      },
      {
        number: 2,
        title: 'Outlook: Desktop app je uvijek offline-capable',
        description: 'Outlook desktop aplikacija automatski sync-uje email-ove i čuva lokalno. Možete čitati i pisati offline. Email-ovi se šalju automatski kada se ponovo povežete na internet. Web verzija (Outlook.com) ne podržava offline.',
      },
      {
        number: 3,
        title: 'Mobile apps: Automatski offline',
        description: 'Gmail i Outlook mobile aplikacije automatski cache-uju email-ove. Možete čitati već preuzete email-ove u Airplane mode-u. Ne možete slati dok nema internet veze, ali možete pisati draft-ove.',
      },
    ],
  },
  {
    id: 'email-multiple-accounts',
    categoryId: 'email',
    title: 'Upravljanje sa više email naloga',
    description: 'Korištenje nekoliko email adresa',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Dodajte druge naloge u Gmail',
        description: 'Settings > Accounts and Import > Check mail from other accounts > Add a mail account. Unesite drugu email adresu (može biti Outlook, Yahoo, itd.). Gmail će povlačiti email-ove iz tog naloga. Također možete "Send mail as" da šaljete sa te adrese kroz Gmail interface.',
      },
      {
        number: 2,
        title: 'Outlook: Dodajte connected account',
        description: 'Settings > View all Outlook settings > Mail > Sync email > Connected accounts > Add. Dodajte Gmail, Yahoo ili drugi nalog. Email-ovi iz svih naloga će biti vidljivi u jednom Outlook inbox-u.',
      },
      {
        number: 3,
        title: 'Email client: Thunderbird',
        description: 'Preuzmite Mozilla Thunderbird (besplatan email client). Možete dodati neograničen broj email naloga (Gmail, Outlook, Yahoo, custom domains). Svi email-ovi su u jednoj aplikaciji sa unified inbox opcijom.',
      },
    ],
  },
  {
    id: 'email-archive-vs-delete',
    categoryId: 'email',
    title: 'Razlika između Archive i Delete',
    description: 'Kada arhivirati a kada obrisati email',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Archive - sakriva iz inboxa, ali čuva',
        description: 'Archive uklanja email iz Inbox-a ali ga NE briše. Email ide u "All Mail" (Gmail) ili "Archive" folder. Koristite Archive za email-ove koje ne trebate više vidjeti u inbox-u ali možda trebate kasnije. Možete ih uvijek pronaći putem search-a.',
      },
      {
        number: 2,
        title: 'Delete - trajno brisanje',
        description: 'Delete briše email u Trash/Deleted Items folder gdje ostaje 30 dana, zatim se trajno briše. Koristite Delete za spam, nepotrebne newsletter-e, ili email-ove koje sigurno nikada nećete trebati.',
      },
      {
        number: 3,
        title: 'Best practice: Archive većinu, Delete spam',
        description: 'Prostor u Gmail-u je veliki (15GB besplatno), pa možete Archive gotovo sve. Delete samo očigledan spam. Ako ikada sumnjate da li će vam email trebati, Archive-ujte ga. Možete uvijek obrisati kasnije ali ne možete vratiti obrisani email nakon 30 dana.',
      },
    ],
  },
  {
    id: 'email-snooze',
    categoryId: 'email',
    title: 'Snooze funkcija za email-ove',
    description: 'Odgađanje email-ova za kasnije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Šta je Snooze',
        description: 'Snooze privremeno sklanja email iz inboxa i vraća ga u zakazano vrijeme. Korisno za email-ove na koje ne možete odmah odgovoriti ali želite reminder. Na primjer: "Odgovori šefu poslije meetinga u 15h" - snooze email do 15:30.',
      },
      {
        number: 2,
        title: 'Gmail: Koristite Snooze',
        description: 'Otvorite email ili hover preko u listi > kliknite clock ikonu (Snooze). Odaberite kada želite da se vrati: Later today, Tomorrow, This weekend, Next week, ili Pick date & time. Email nestaje iz inboxa i vraća se u odabrano vrijeme.',
      },
      {
        number: 3,
        title: 'Outlook: Snooze ili Flag',
        description: 'U Outlook desktop ili web app-u, desni klik na email > Snooze (ili clock ikona). Odaberite vrijeme. Alternativno koristite "Flag" sa reminder-om: desni klik > Flag > Add reminder > postavite datum i vrijeme.',
      },
    ],
  },
  {
    id: 'email-gmail-tabs',
    categoryId: 'email',
    title: 'Gmail kategorije/tabovi (Primary, Social, Promotions)',
    description: 'Razumijevanje Gmail inbox organizacije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Šta su Gmail tabovi',
        description: 'Gmail automatski sortira email-ove u kategorije: Primary (važni email-ovi od ljudi), Social (Facebook, Twitter, LinkedIn notifikacije), Promotions (marketing, newsletteri, deals), Updates (potvrde, računi, statements), Forums (mailing liste).',
      },
      {
        number: 2,
        title: 'Premi jestite email između tabova',
        description: 'Ako email je u pogrešnom tabu, drag and drop ga na pravi tab. Gmail će pitati "Do this for future messages from [sender]?" - kliknite Yes. Od sada, email-ovi od tog pošiljaoca će ići u odabrani tab.',
      },
      {
        number: 3,
        title: 'Isključite tabove ako ne želite',
        description: 'Settings > Inbox > Inbox type > odaberite "Default" umjesto kategorija. Svi email-ovi će dolaziti u jedan inbox bez tabova, kao tradicionalni email.',
      },
    ],
  },
  {
    id: 'email-keyboard-shortcuts',
    categoryId: 'email',
    title: 'Brze prečice na tastaturi za email',
    description: 'Ubrzajte rad sa email-om',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Omogućite keyboard shortcuts u Gmail-u',
        description: 'Settings > See all settings > General > Keyboard shortcuts > Keyboard shortcuts ON. Sad možete koristiti shortcuts bez korištenja miša.',
      },
      {
        number: 2,
        title: 'Najkorisnije Gmail shortcuts',
        description: 'C - Compose new email. R - Reply. A - Reply All. F - Forward. E - Archive. # (Shift+3) - Delete. S - Star email. U - Refresh inbox. / - Search. G then I - Go to Inbox. J/K - Newer/older email u listi.',
      },
      {
        number: 3,
        title: 'Outlook desktop shortcuts',
        description: 'Ctrl+R - Reply. Ctrl+Shift+R - Reply All. Ctrl+F - Forward. Ctrl+N - New email. Ctrl+Shift+V - Move to folder. Delete - Delete email. Ctrl+Q - Mark as read. Ctrl+U - Mark as unread. Ctrl+1 - Go to Mail. Ctrl+2 - Go to Calendar.',
      },
    ],
  },
  {
    id: 'email-gmail-undo-send',
    categoryId: 'email',
    title: 'Podešavanje dužeg Undo Send perioda',
    description: 'Dajte sebi više vremena da opozvete email',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Otvorite Gmail Settings',
        description: 'Kliknite na zupčanik (Settings ikona) u gornjem desnom uglu Gmail-a > See all settings.',
      },
      {
        number: 2,
        title: 'Podesite Send cancellation period',
        description: 'General tab > "Undo Send" sekcija > Send cancellation period: odaberite 5, 10, 20 ili 30 sekundi. Preporučujemo 30 sekundi - daje vam puno vremena da primijetite grešku i kliknete Undo.',
      },
      {
        number: 3,
        title: 'Save changes',
        description: 'Skrolujte potpuno do dna stranice i kliknite "Save Changes". Od sada, svaki put kada pošaljete email, imaćete 30 sekundi da kliknete "Undo" dugme koje se pojavljuje u donjem lijevom uglu.',
      },
    ],
  },

  // Social media problems
  {
    id: 'privatnost-facebook',
    categoryId: 'drustvene-mreze',
    title: 'Podešavanje privatnosti na Facebooku',
    description: 'Zaštitite svoju privatnost na društvenim mrežama',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Pristupite postavkama privatnosti na Facebooku',
        description:
          'Podešavanje privatnosti na Facebooku je kritično da zaštitite svoje lične informacije i kontrolišete ko može vidjeti šta objavljujete. Evo kako pristupiti postavkama: (1) Otvorite Facebook - idite na facebook.com u web pretraživaču ili otvorite Facebook aplikaciju na telefonu. Prijavite se ako već niste. (2) Na web verziji: Kliknite na malu strelicu koja pokazuje prema dolje u GORNJEM DESNOM uglu ekrana, pored ikone obavještenja. Otvorit će se padajući meni. U ovom meniju, kliknite na "Settings & Privacy" (Postavke i privatnost) što će otvoriti podmeni, pa kliknite na "Settings" (Postavke). (3) Na mobilnoj aplikaciji: Tapnite na tri horizontalne linije (hamburger meni) u donjem desnom uglu (iPhone) ili gornjem desnom uglu (Android), pa skrolujte dolje i tapnite na ikonu zupčanika "Settings & Privacy" > "Settings". (4) Sada ste u Settings meniju - ovo je kontrolni panel za vaš Facebook nalog. U lijevoj strani (web) ili na vrhu (mobilna app) vidite različite kategorije: Account, Privacy, Profile, Security, itd. (5) Kliknite na "Privacy" ili "Privatnost" sekciju. Ovo je gdje možete kontrolisati najvažnije postavke privatnosti. Ekran pokazuje nekoliko opcija sa kratkim opisima - ovo su kontrole koje određuju ko može vidjeti vaše objave, ko vas može pronaći, i ko može vam slati poruke ili zahtjeve za prijateljstvo. Savjet: Pozitivna strana je da Facebook redovno osvježava i poboljšava ove postavke, ali negativna strana je da ponekad mijenja default vrijednosti pa je dobro provjeriti postavke nekoliko puta godišnje.',
      },
      {
        number: 2,
        title: 'Kontrolišite ko može vidjeti vaše buduće objave',
        description:
          'Najvažnija postavka privatnosti je ko može vidjeti šta objavljujete. Evo kako to kontrolisati detaljno: (1) U Privacy sekciji Settings menija, potražite opciju "Who can see your future posts?" ili "Ko može vidjeti vaše buduće objave?". Kliknite na "Edit" ili "Uredi" pored ove opcije. (2) Otvorit će se dropdown meni sa opcijama: (a) "Public" ili "Javno" - SVAKO na internetu može vidjeti vaše objave, čak i ljudi koji nisu na Facebooku. Ovo je najneizvjesnija opcija i NE PREPORUČUJEMO je osim ako ste javna ličnost ili želite maksimalnu vidljivost. (b) "Friends" ili "Prijatelji" - Samo ljudi koje ste dodali kao prijatelje mogu vidjeti vaše objave. Ovo je najčešće korištena opcija i preporučujemo je za većinu korisnika. (c) "Friends except..." ili "Prijatelji osim..." - Možete specificirati određene prijatelje koji NEĆE vidjeti vaše objave. Korisno ako imate kolege ili rodbinu koje želite da budu prijatelji ali ne želite da vide sve vaše objave. (d) "Specific friends" ili "Određeni prijatelji" - Samo odabrani prijatelji vide objave. Ovo je najrestriktivnija opcija. (e) "Only me" ili "Samo ja" - Niko ne može vidjeti vaše objave osim vas. (3) Odaberite nivo privatnosti koji vam odgovara - većina korisnika treba "Friends" opciju. Kliknite na nju da je postavite kao default. (4) VAŽNO: Ova postavka utiče samo na BUDUĆE objave. Sve što ste objavili ranije zadržava svoje prethodne postavke privatnosti. Kasnije ćemo pokazati kako promijeniti privatnost starih objava. Dodatna kontrola: Svaki put kada pišete novu objavu, možete vidjeti i promijeniti ko može vidjeti baš TU KONKRETNU objavu - ispod polja za pisanje statusa vidite dugme (npr. "Friends") - možete kliknuti na njega i odabrati drugačiju opciju samo za tu objavu.',
      },
      {
        number: 3,
        title: 'Pregledajte i ograničite vidljivost prošlih objava',
        description:
          'Ako ste dugo na Facebooku, vjerovatno imate stotine ili hiljade starih objava, fotografija i komentara koji možda imaju različite postavke privatnosti. Možete ih pregledati i masovno promijeniti: (1) U Privacy postavkama, potražite opciju "Limit Past Posts" ili "Ograniči prethodne objave". Ova opcija vam omogućava da jednim klikom promijenite sve vaše prethodne JAVNE objave (one koje su bile vidljive svima) u objave vidljive samo prijateljima. (2) Kliknite na "Limit Old Posts" ili "Ograniči stare objave". Pojaviće se upozorenje koje objašnjava šta će se desiti. Ovo će promijeniti SAMO objave koje su bile "Public" - neće uticati na objave koje su već bile vidljive samo prijateljima. (3) Kliknite "Confirm" ili "Potvrdi" da primijenite promjenu. Facebook će procesuirati sve vaše objave - ovo može trajati nekoliko minuta ako imate puno sadržaja. (4) Za INDIVIDUALNU kontrolu starih objava, idite na vaš profil i kliknite na "Activity Log" ili "Dnevnik aktivnosti" (nalazi se ispod cover fotografije). Ovdje vidite kompletnu kronologiju svega što ste ikada objavili, lajkovali, komentarisali, itd. Možete kliknuti na malu ikonu audience selector (obično izgleda kao ikona ljudi) pored svake objave da promijenite ko može da je vidi, ili kliknite na tri tačkice i odaberite "Delete" ako želite obrisati staru objavu. Savjet: Provedite 30 minuta pregledajući Activity Log - možda ćete biti iznenađeni koliko starih stvari ste zaboravili da ste objavili! Obrišite ili sakrijte sve što vam je neugodno.',
      },
      {
        number: 4,
        title: 'Podesite ko može vas pronaći, slati zahtjeve i vidjeti listu prijatelja',
        description:
          'Osim kontrole objava, postoje dodatne važne postavke privatnosti koje treba podesiti: (1) KO VAS MOŽE PRONAĆI PRETRAGOM: U Privacy postavkama, pronadite "Who can look you up?" ili "Ko vas može pronaći?" sekciju. Ovdje su dvije važne opcije: (a) "Who can send you friend requests?" - možete podesiti na "Everyone" (svako) ili "Friends of Friends" (prijatelji prijatelja). Postavka "Friends of Friends" sprečava potpune strancere da vam šalju zahtjeve. (b) "Who can look you up using the email address/phone number you provided?" - postavite ovo na "Friends" ili "Friends of Friends" umjesto "Everyone" da sprečite random ljude da vas pronalaze ako nekako dobiju vaš email ili broj telefona. (c) "Do you want search engines outside of Facebook to link to your profile?" - Ovo kontroliše da li Google i drugi search engines mogu prikazati vaš Facebook profil u rezultatima pretrage. Za maksimalnu privatnost, postavite ovo na "NO" tako da ljudi ne mogu Google-ovati vaše ime i odmah pronaći Facebook profil. (2) VIDLJIVOST LISTE PRIJATELJA: Vratite se u Settings > Privacy, pa kliknite na "Edit" pored "Who can see your friends list?". Možete podesiti ko može vidjeti vašu kompletnu listu prijatelja: "Public" (svako), "Friends" (samo prijatelji), "Only me" (niko). Preporučujemo "Friends" ili "Only me" jer lista prijatelja može otkriti dosta o vašem privatnom životu. (3) REVIEW TAGS: Postavite "Timeline and Tagging" opciju tako da MORATE odobriti prije nego što neko tag-uje vas na fotografiji ili objavi. Idite u Settings > Timeline and Tagging > "Review posts you are tagged in before the post appears on your timeline?" - postavite na "Enabled". Ovo vam daje kontrolu da ne možete biti tag-ovani na neugodnim fotografijama bez vašeg odobrenja. Nakon što završite sa svim ovim postavkama, vaš Facebook profil će biti mnogo sigurniji i privatniji!',
      },
    ],
  },
  {
    id: 'instagram-privatnost',
    categoryId: 'drustvene-mreze',
    title: 'Podešavanje privatnosti na Instagramu',
    description: 'Zaštita vašeg Instagram profila',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Postavite profil na Private',
        description: 'Settings > Privacy > Account Privacy > Private Account - UKLJUČITE. Kada je profil privatan, samo odobreni followersi mogu vidjeti vaše postove, stories i reels. Novi follower zahtjevi moraju biti odobreni od vas.',
      },
      {
        number: 2,
        title: 'Kontrolišite ko vas može tag-ovati',
        description: 'Settings > Privacy > Tags > Manually Approve Tags - UKLJUČITE. Morat ćete odobriti prije nego što budete tag-ovani na tuđoj fotografiji. Ovo sprečava da budete tag-ovani na neugodnim fotografijama bez vašeg znanja.',
      },
      {
        number: 3,
        title: 'Ograničite story vidljivost',
        description: 'Settings > Privacy > Story > Hide Story From - možete odabrati specifične osobe koje NE mogu vidjeti vaš story. Također "Close Friends" lista vam omogućava da podijelite stories samo sa izabranim bliskim prijateljima.',
      },
    ],
  },
  {
    id: 'facebook-deactivate',
    categoryId: 'drustvene-mreze',
    title: 'Deaktiviranje ili brisanje Facebook naloga',
    description: 'Privremeno ili trajno napuštanje Facebooka',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje razlike',
        description: 'DEACTIVATE: Privremeno sklanja profil. Možete se vratiti bilo kada sa svim podacima netaknutim. DELETE: Trajno briše nalog nakon 30 dana grace perioda. Ne možete povratiti podatke nakon brisanja.',
      },
      {
        number: 2,
        title: 'Deaktiviranje (privremeno)',
        description: 'Settings > Your Facebook Information > Deactivation and Deletion > Deactivate Account > Continue to Account Deactivation. Možete odabrati razlog. Vaš profil, fotografije, postovi postaju nevidljivi ali nisu obrisani. Ulogujte se ponovo bilo kada da reaktivirate.',
      },
      {
        number: 3,
        title: 'Brisanje (trajno)',
        description: 'Settings > Your Facebook Information > Deactivation and Deletion > Permanently Delete Account > Continue to Account Deletion. Facebook ima 30-dana grace period - ako se ulogujete u tih 30 dana, brisanje će biti otkazano. Nakon 30 dana, SVE je trajno obrisano.',
      },
    ],
  },
  {
    id: 'two-factor-facebook',
    categoryId: 'drustvene-mreze',
    title: 'Omogućavanje two-factor authentication',
    description: 'Dodatna sigurnost za društvene mreže',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Facebook 2FA',
        description: 'Settings > Security and Login > Two-Factor Authentication > Edit. Odaberite metod: (1) Authentication App (Google Authenticator, Authy) - preporučeno, (2) Text Message (SMS) - lakše ali manje sigurno. Slijedite instrukcije da podesite.',
      },
      {
        number: 2,
        title: 'Instagram 2FA',
        description: 'Settings > Security > Two-Factor Authentication. Odaberite metod: Authentication App ili SMS. Instagram će slati kod svaki put kada se logujete sa novog uređaja. Sačuvajte backup kodove na sigurnom mjestu!',
      },
      {
        number: 3,
        title: 'Twitter/X 2FA',
        description: 'Settings > Security and account access > Security > Two-factor authentication. Twitter nudi: Authentication app, SMS (samo za Premium subscribers), ili Security key (hardware device kao YubiKey).',
      },
    ],
  },
  {
    id: 'instagram-verify-badge',
    categoryId: 'drustvene-mreze',
    title: 'Kako prepoznati lažne naloge',
    description: 'Identifikacija fake profila',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Provjerite verified badge',
        description: 'Verified (plava kvačica) znači da je Instagram/Facebook potvrdio da je to originalni nalog poznate osobe, brenda ili entiteta. Lažni nalozi NEMAJU kvačicu, ili pokušavaju koristiti emojije koji izgledaju kao kvačica ✓✅ (nisu isto kao official ✔️).',
      },
      {
        number: 2,
        title: 'Sumnjivi znaci fake naloga',
        description: 'PAZI NA: (1) Malo follower-a ali veliki following, (2) Nema postova ili samo par generičkih slika, (3) Username sa čudnim karakterima ili brojevima (marko123official456), (4) Bio link vodi na sumnjiv sajt, (5) Šalje nepotražene DM-ove sa linkovima.',
      },
      {
        number: 3,
        title: 'Šta raditi sa fake nalozima',
        description: 'Tri tačkice na profilu > Report > It\'s pretending to be someone else ili It\'s spam. Ne follow-ujte, ne klikajte na linkove, ne šaljite lične podatke. Blokirajte ih.',
      },
    ],
  },
  {
    id: 'instagram-algorithm',
    categoryId: 'drustvene-mreze',
    title: 'Kako Instagram algoritam radi',
    description: 'Povećanje vidljivosti postova',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Engagement je najvažniji',
        description: 'Algoritam favorizuje postove sa puno: Likes, Comments, Saves, Shares. "Saves" je NAJVAŽNIJE - pokazuje da je sadržaj toliko vrijedan da ljudi žele da ga sačuvaju za kasnije. Više engagement-a = post se pokazuje više ljudi.',
      },
      {
        number: 2,
        title: 'Postavljajte redovno ali kvalitetno',
        description: 'Postuj te 3-5 puta sedmično (ne spam 10 puta dnevno). Kvalitet > kvantitet. Instagram preferira naloge koji su aktivni. Takođe koristite Stories svakodnevno - to održava vaš nalog "relevantnim" za algoritam.',
      },
      {
        number: 3,
        title: 'Koristite hashtags pametno',
        description: 'Koristite 10-15 relevantnih hashtaga (ne 30 random hashtaga). Mix popularnih (#travel - milioni postova) i niche hashtaga (#bosniatravel - hiljade postova). Niche hashtags daju vam bolju šansu da budete viđeni.',
      },
      {
        number: 4,
        title: 'Engage sa drugima',
        description: 'Lajkujte, komentirajte i odgovarajte na tuđe postove. Instagram nagrađuje "community interaction". Ako samo postuješ i ne interaguješ sa drugima, algoritam će manje promovirati vaš sadržaj.',
      },
    ],
  },
  {
    id: 'twitter-mute-vs-block',
    categoryId: 'drustvene-mreze',
    title: 'Razlika između Mute, Block i Unfollow',
    description: 'Upravljanje neželjenim sadržajem',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Unfollow - prestanak praćenja',
        description: 'Ne vidite više njihove postove u vašem feedu, ALI oni i dalje mogu vidjeti vaše javne postove, follow-ovati vas, i slati vam poruke. Koristite kada više ne želite vidjeti nečiji sadržaj ali nema animoziteta.',
      },
      {
        number: 2,
        title: 'Mute - tiho sakrivanje',
        description: 'I dalje ih follow-ujete ALI ne vidite njihove postove u feedu. ONI NE ZNAJU da ste ih mute-ovali. Koristite za prijatelje/porodicu koji previše postuju ali ne želite da im "povrijedite osječanja" unfollowanjem.',
      },
      {
        number: 3,
        title: 'Block - potpuna blokada',
        description: 'Ne možete vidjeti njihov sadržaj, oni ne mogu vidjeti vaš, ne mogu follow-ovati, slati poruke ili mention-ovati vas. ONI MOGU vidjeti da ste ih blokirali ako pogledaju. Koristite za harassment, spam, ili osobe koje ne želite da imaju pristup vašem sadržaju.',
      },
    ],
  },
  {
    id: 'instagram-story-highlights',
    categoryId: 'drustvene-mreze',
    title: 'Kreiranje Story Highlights',
    description: 'Čuvanje najboljih stories trajno na profilu',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Šta su Story Highlights',
        description: 'Obični stories nestaju nakon 24 sata. Highlights su kolekcije izabranih stories koje ostaju na vašem profilu zauvijek, prikazani kao krugovi ispod bio-a. Korisni za: brend showcase, FAQ-ovi, event memorije, portfolio.',
      },
      {
        number: 2,
        title: 'Kreiranje Highlight-a',
        description: 'Na profilu, kliknite "+" ikonu (New) između bio-a i grid-a postova. Odaberite stories iz arhive koje želite dodati. Dajte ime Highlight-u (Travel, Food, Events, itd.) i odaberite cover fotografiju. Tap Add - highlight se pojavljuje na profilu.',
      },
      {
        number: 3,
        title: 'Dodavanje u postojeći Highlight',
        description: 'Dok imate aktivan story, tap na njega > More (tri tačkice) > Highlight > odaberite postojeći Highlight ili kreirajte novi. Story će biti dodat u taj Highlight i ostaće nakon što 24h istekne.',
      },
    ],
  },
  {
    id: 'tiktok-fyp',
    categoryId: 'drustvene-mreze',
    title: 'Kako dospjeti na TikTok For You Page',
    description: 'Povećanje dosega videa',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Razumijevanje TikTok algoritma',
        description: 'TikTok algoritam gleda: (1) Watch time - koliko ljudi gledaju CIJELI video (najvažnije!), (2) Rewatches - ljudi gledaju više puta, (3) Engagement - likes, comments, shares, (4) Kako brzo dobijate engagement (prvi sat je kritičan).',
      },
      {
        number: 2,
        title: 'Prvih 3 sekunde je ključno',
        description: 'Većina ljudi scrolluje za 1-2 sekunde ako video nije zanimljiv. Hook njih u prve 3 sekunde: zapanjujuća vizuala, intrigantan tekst, brza akcija. Nemojte trošiti prve sekunde na intro/logo.',
      },
      {
        number: 3,
        title: 'Optimalna dužina videa',
        description: 'Kraći videi (7-15 sekundi) imaju bolji watch time % jer ljudi gledaju do kraja. Duži videi mogu dobiti više watch time minuta što takođe pomaže. Testir ajte oboje. Trending sounds takođe pomažu!',
      },
      {
        number: 4,
        title: 'Postavljajte u pravo vrijeme',
        description: 'TikTok analitika (treba Business Account) pokazuje kada su vaši followersi najaktivniji. Obično najbolja vremena: 7-9 AM (prije posla), 12-1 PM (pauza za ručak), 7-11 PM (nakon posla). Eksperimentirajte.',
      },
    ],
  },
  {
    id: 'facebook-marketplace-safety',
    categoryId: 'drustvene-mreze',
    title: 'Sigurno kupovanje na Facebook Marketplace',
    description: 'Izbjegavanje prevara',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Provjerite prodavca',
        description: 'Kliknite na ime prodavca da vidite profil. Provjerite: (1) Koliko dugo je na Facebooku, (2) Ima li prijatelja i normalnu aktivnost, (3) Marketplace ratings/reviews od drugih kupaca. Novi profili bez aktivnosti = red flag.',
      },
      {
        number: 2,
        title: 'Upoznajte se na javnom mjestu',
        description: 'NIKADA ne idite sami u tuđu kuću ili pozivajte stranceve kod vas. Dogovorite sastanak na javnom, prometnom mjestu: shopping centar, benzinska stanica, kafić. Danju. Povurite prijatelja sa sobom.',
      },
      {
        number: 3,
        title: 'Ne šaljite novac unaprijed',
        description: 'Prevare često traže "rezervaciju" ili "depozit" prije nego vidite proizvod. NIKADA ne šaljite novac putem PayPal, Venmo, Western Union prije nego ste vidjeli proizvod. Samo cash pri preuzimanju.',
      },
      {
        number: 4,
        title: 'Provjerite proizvod na licu mjesta',
        description: 'Za elektroniku: testirajte da radi prije nego platite. Za odjeću: provjerite stanje, originalno pakovanje. Ne žurite - prevaranti žele da brzo završite. Ako nešto izgleda "too good to be true", vjerovatno jeste.',
      },
    ],
  },
  {
    id: 'linkedin-profile',
    categoryId: 'drustvene-mreze',
    title: 'Optimizacija LinkedIn profila',
    description: 'Poboljšanje profesionalnog prisustva',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Profesionalna profilna fotografija',
        description: 'Koristite high-quality, profesionalnu fotografiju (ne selfie, ne party slika!). Gledajte direktno u kameru, casual business odijevanje, neutralna pozadina. LinkedIn study pokazuje da profili sa fotografijom dobijaju 21x više profile views.',
      },
      {
        number: 2,
        title: 'Upecatljiv headline',
        description: 'Headline nije samo job title! Koristite formula: "[Job Title] | Pomažem [target audience] da [solve problem]". Primjer: "Software Developer | Pomažem startupima da izgrade scalable web aplikacije". Ovo je prvo što ljudi vide.',
      },
      {
        number: 3,
        title: 'Detaljni About section',
        description: 'Pišite u prvom licu ("Ja sam..." ne "On/Ona je..."). Uključite: (1) Šta radite i za koga, (2) Vaše expertise i skills, (3) Achievements sa brojevima ("Povećao prodaju za 30%"), (4) Call to action (contact info). 3-5 paragrafa.',
      },
      {
        number: 4,
        title: 'Dodajte vještine i tražite endorsements',
        description: 'Dodajte najmanje 10-15 relevantnih skills. Pitajte kolege, menadžere i klijente da endorsuju vaše skills (oni će često uzvratiti). Endorsements grade credibility. Također tražite Recommendations (pisane preporuke).',
      },
    ],
  },
  {
    id: 'instagram-shadowban',
    categoryId: 'drustvene-mreze',
    title: 'Šta je shadowban i kako ga izb jeći',
    description: 'Vraćanje vidljivosti na Instagram-u',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Šta je shadowban',
        description: 'Shadowban je kada Instagram ograniči doseg vaših postova bez obavještenja. Simptomi: Drastično manji engagement, ne pojavljivate se na hashtag search-ovima, samo followersi vide vaše postove. Nije "zvanična" mjera ali se dešava.',
      },
      {
        number: 2,
        title: 'Uzroci shadowban-a',
        description: 'Instagram shadowban-uje zbog: (1) Korištenje banned/flagged hashtaga (#like4like, #follow4follow), (2) Bot-ovi i automatizacija (third-party apps za auto-following), (3) Previše aktivnosti za kratko vrijeme (mass following/liking), (4) Reported content.',
      },
      {
        number: 3,
        title: 'Kako fixovati shadowban',
        description: 'Koraci: (1) Nemojte postovati 2-3 dana (dajte "odmor" nalogu), (2) Uklonite third-party aplikacije koje imaju pristup Instagram-u, (3) Obrišite stare postove koji možda koriste banned hashtags, (4) Nemojte koristiti iste hashtage na svakom postu.',
      },
      {
        number: 4,
        title: 'Prevencija',
        description: 'Nakon fixovanja: (1) Koristite različite hashtag kombinacije, (2) Ne koristite više od 10 hashtaga po postu, (3) Testirajte hashtage prije korištenja (search za hashtag - ako prikazuje "Recent" postove, nije banned), (4) Organsko engagement, ne botovi.',
      },
    ],
  },
  {
    id: 'snapchat-basics',
    categoryId: 'drustvene-mreze',
    title: 'Osnove Snapchat-a za početnike',
    description: 'Kako koristiti Snapchat',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Slanje Snap-ova',
        description: 'Otvorite app > kamera se automatski otvara. Tapnite krug na dnu da slikate, hold za video. Dodajte text, drawings, filters/lenses (swipe lijevo/desno na licu). Kliknite Send (plava strelica), odaberite prijatelje. Snap traje 1-10 sekundi i nestaje nakon gledanja.',
      },
      {
        number: 2,
        title: 'Stories i Spotlight',
        description: 'Story: Snap koji je vidljiv svim prijateljima 24 sata. Dodajte u Story klikom na ikonu sa plus znakom nakon kreiranja snap-a. Spotlight: Javni, TikTok-style feed. Submit vaše najbolje snap-ove za širu publiku.',
      },
      {
        number: 3,
        title: 'Snapchat ikone i značenja',
        description: 'Purpurna strelica = poslat snap. Plava strelica = poslata chat poruka. Crvena strelica = snap bez zvuka. Purpurni kvadrat = primljen snap. Screenshot ikona = neko je screenshot-ovao vaš snap (dobit ćete notifikaciju!).',
      },
    ],
  },
  {
    id: 'twitter-verify',
    categoryId: 'drustvene-mreze',
    title: 'Twitter/X Verification (plava kvačica)',
    description: 'Kako dobiti verified status',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Stari vs novi verification sistem',
        description: 'PRIJE (legacy): Verification je bila za notable osobe (poznati, novinarstvo, vlade). SADA (X Premium): Bilo ko može dobiti plavu kvačicu plaćajući $8/mjesec za Premium subscription. Znači da plava kvačica više ne garantuje da je neko poznat ili legitiman.',
      },
      {
        number: 2,
        title: 'Kako dobiti verification sada',
        description: 'Profile ikona > Premium (ili X Premium). Subscribe za $8/mjesec ili $84/godina (30% discount). Nakon otprilike 7 dana aktivnog subscription-a i ako imate: (1) Phone number verified, (2) No recent username changes, (3) Profile older than 90 days - dobit ćete plavu kvačicu.',
      },
      {
        number: 3,
        title: 'Dodatni benefiti X Premium',
        description: 'Osim plave kvačice: (1) Edit tweets (30 min after posting), (2) Longer tweets (10,000 characters), (3) Longer videos (up to 2 hours), (4) Reduced ads, (5) Prioritized replies and search results.',
      },
    ],
  },
  {
    id: 'social-media-detox',
    categoryId: 'drustvene-mreze',
    title: 'Digital detox - smanjenje vremena na društvenim mrežama',
    description: 'Zdraviji odnos sa social media',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Mjerite trenutno korištenje',
        description: 'Na telefonu: Settings > Digital Wellbeing (Android) ili Screen Time (iPhone). Vidite koliko sati dnevno provodite na svakoj aplikaciji. Većina ljudi je šokirana - prosječan korisnik provodi 2-3 sata dnevno na social media!',
      },
      {
        number: 2,
        title: 'Postavite app limits',
        description: 'U istim postavkama, postavite dnevne limite: npr. 30 minuta Instagram, 30 minuta TikTok. Kada dosegnete limit, app se zaključava. Takođe koristite "Focus Mode" koji blokira distracting apps tokom rada.',
      },
      {
        number: 3,
        title: 'Uklonite notifikacije',
        description: 'Settings > Notifications > za svaku social media app - ISKLJUČITE sve osim Direct Messages. Ne trebaju vam notifikacije za svaki like ili comment. Ovo značajno smanjuje urge da stalno check-ujete telefon.',
      },
      {
        number: 4,
        title: 'Kreirajte "phone-free" vrijeme/zone',
        description: 'Pravila: (1) No phones u spavaćoj sobi - punjite telefon u drugoj prostoriji, (2) No phones prvi sat nakon buđenja i prije spavanja, (3) No phones za vrijeme obroka sa porodicom/prijateljima, (4) Jedan dan sedmično potpuno bez social media.',
      },
    ],
  },
  {
    id: 'youtube-algorithm',
    categoryId: 'drustvene-mreze',
    title: 'Kako YouTube algoritam preporučuje videe',
    description: 'Razumijevanje YouTube preporuka',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Glavni faktori algoritma',
        description: 'YouTube gleda: (1) Click-through rate (CTR) - koliko ljudi klikne na video kad vide thumbnail, (2) Watch time - ukupne minute gledanja, (3) Average view duration - procenat videa koji ljudi odgledaju, (4) Engagement - likes, comments, shares, (5) Session time - koliko dugo ljudi ostanu na YouTube nakon vašeg videa.',
      },
      {
        number: 2,
        title: 'Thumbnail i title su ključni',
        description: 'Thumbnail je najvažniji! Mora biti eye-catching: kontrastne boje, velika ekspresivna lica, minimalan tekst (3-4 riječi max), ne clickbait. Title: Include keywords ali budi zanimljiv. Formula: "[Benefit] + [How to] + [Number/Year]" - npr. "5 Photoshop trikova za početnike (2024)".',
      },
      {
        number: 3,
        title: 'Prvi 30 sekundi odlučuje',
        description: 'YouTube najviše gleda "drop-off rate" - kada ljudi odustaju od gledanja. Ako 50% ljudi napusti video u prvim 30 sekundi, algoritam neće promovirati video. Hook gledaoce odmah: počnite sa rezultatom/payoff, ne sa dugim intro-om.',
      },
      {
        number: 4,
        title: 'Konsistentnost i niche',
        description: 'Post-ujte redovno (najmanje jednom sedmično). Fokusirajte se na određeni niche - YouTube algoritam favorizuje channel-e koji su "eksperti" u jednoj temi. Ako danas pravite gaming video, sutra cooking, prekosutra tech review - algoritam je zbunjen i neće znati kome da preporučи.',
      },
    ],
  },
  {
    id: 'discord-server-setup',
    categoryId: 'drustvene-mreze',
    title: 'Kreiranje Discord servera',
    description: 'Podešavanje online community-a',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Kreiranje servera',
        description: 'Kliknite "+" ikonu u lijevoj strani Discord-a > Create My Own. Odaberite template (Gaming, Study Group, Friends) ili "Skip this question" za blank server. Dajte ime serveru i uploadujte server icon. Kliknite Create.',
      },
      {
        number: 2,
        title: 'Kreiranje channels-a',
        description: 'Kanali su "sobe" unutar servera. Desni klik na server ime > Create Channel. Tipovi: Text channels (za pisane poruke), Voice channels (za voice/video chat). Organizujte po kategorijama: Welcome, General, Gaming, Off-Topic, itd.',
      },
      {
        number: 3,
        title: 'Podešavanje Roles i Permissions',
        description: 'Server Settings > Roles > Create Role. Kreirajte različite uloge (Admin, Moderator, Member, Muted). Svaka uloga može imati drugačije permissions: kick/ban members, manage channels, send messages, itd. Assign roles korisnicima desnim klikom na ime.',
      },
      {
        number: 4,
        title: 'Pozivanje ljudi',
        description: 'Desni klik na server ime > Invite People. Kreirajte invite link. Možete podesiti: Expire after (koliko dugo link radi - 30 min, 1 dan, never), Max uses (koliko ljudi može koristiti link). Share link preko email-a, social media, ili direktno slanjem u Discord DM.',
      },
    ],
  },
  {
    id: 'pinterest-boards',
    categoryId: 'drustvene-mreze',
    title: 'Kako koristiti Pinterest boards',
    description: 'Organizacija ideja i inspiracije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Kreiranje board-a',
        description: 'Kliknite vaš profil > Boards tab > Create board (+ ikona). Dajte ime board-u (npr. "Home Decor Ideas", "Travel Wishlist", "Recipes"). Odaberite da li je Public (svako može vidjeti) ili Secret (samo vi).',
      },
      {
        number: 2,
        title: 'Saving pins',
        description: 'Kada vidite sliku/pin koji vam se sviđa, hover preko nje > kliknite "Save". Odaberite board gdje želite sačuvati. Pin će biti sačuvan u tom board-u. Secret boards su odlični za planiranje iznenađenja (weddings, surprise trips).',
      },
      {
        number: 3,
        title: 'Organizacija sa sections',
        description: 'Boards mogu imati Sub-sections. Na primjer, "Travel" board može imati sections: Europe, Asia, Beach Destinations. U board-u, kliknite Organize > Create section. Ovo čini pronalaženje sačuvanih pinova mnogo lakšim.',
      },
    ],
  },
  {
    id: 'reddit-karma',
    categoryId: 'drustvene-mreze',
    title: 'Razumijevanje Reddit karma sistema',
    description: 'Kako Reddit zajednica funkcioniše',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Šta je Karma',
        description: 'Karma je Reddit "poeni" sistem. Dobijate karma za: Upvotes na vašim postovima (Post karma) i Upvotes na vašim comments (Comment karma). Gubite karma za downvotes. Više karma = više kredibiliteta u zajednici.',
      },
      {
        number: 2,
        title: 'Kako steći Karma',
        description: 'Najbolji načini: (1) Komentirajte na trending postove u r/AskReddit sa pametnim/smiješnim odgovorima, (2) Postujte original content (OC) u relevantne subreddite, (3) Pomažite ljudima sa pitanjima u niche subredditima, (4) Budite rani - komentirajte na rising postove prije nego postanu popular.',
      },
      {
        number: 3,
        title: 'Subreddit pravila',
        description: 'Svaki subreddit ima vlastita pravila! Čitajte sidebar/rules prije postovanja. Mnogi subredditi zahtijevaju minimum karma da postujete (npr. r/cryptocurrency traži 500 karma). Ovo sprečava spam.',
      },
    ],
  },
  {
    id: 'facebook-memories',
    categoryId: 'drustvene-mreze',
    title: 'Upravljanje Facebook Memories',
    description: 'Kontrola "On This Day" notifikacija',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Pristup Memories',
        description: 'Facebook > Menu (tri horizontalne linije) > Memories. Ovdje vidite "On This Day" - šta ste postovali na današnji datum prethodnih godina, prijateljstva koju ste započeli, events koje ste posjetili.',
      },
      {
        number: 2,
        title: 'Sakrij neželjena sećanja',
        description: 'Ako Memories prikazuje nešto što ne želite vidjeti (ex, tužan event), kliknite tri tačkice na memory > Hide. Možete također hide memories sa specifičnim osobama ili iz određenog vremenskog perioda (npr. hide sve od 2018. godine).',
      },
      {
        number: 3,
        title: 'Isključi Memories notifikacije',
        description: 'Settings > Notifications > Memories - isključite. Ili u Memories sekciji > Settings (zupčanik) > Notifications > odaberite koliko često želite notifikacije (ili potpuno isključite).',
      },
    ],
  },
  {
    id: 'instagram-close-friends',
    categoryId: 'drustvene-mreze',
    title: 'Korištenje Close Friends liste',
    description: 'Dijeljenje stories sa odabranim ljudima',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Kreiranje Close Friends liste',
        description: 'Profil > Menu (tri horizontalne linije) > Close Friends. Tap "Add" pored imena da dodate na listu. Možete pretražiti specific osobu ili scroll through suggestions. Lista može imati bilo koji broj ljudi.',
      },
      {
        number: 2,
        title: 'Postovanje na Close Friends Story',
        description: 'Kreirajte story normalno (slika/video) > prije nego Send To Story, tap "Close Friends" (zeleno dugme sa zvijezdom). Samo ljudi na vašoj Close Friends listi će vidjeti ovaj story. Story će imati zeleni ring umjesto crvenog.',
      },
      {
        number: 3,
        title: 'Ko vidi Close Friends?',
        description: 'Ljudi na vašoj listi NE ZNAJU da su na listi (nema notifikacije). Ali kada im pošaljete Close Friends story, videćete da ima zeleni ring umjesto normalnog ringa - ovo im kaže da je "exclusive" story.',
      },
    ],
  },
  {
    id: 'whatsapp-backup',
    categoryId: 'drustvene-mreze',
    title: 'WhatsApp backup i restore',
    description: 'Čuvanje chat historije',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Automatski backup na Google Drive/iCloud',
        description: 'WhatsApp Settings > Chats > Chat backup. Odaberite Google nalog (Android) ili iCloud (iPhone). Podesite: Backup frequency (Daily, Weekly, Monthly), Include videos (pažnja - zauzima puno prostora!). Tap Back Up Now za immedijatan backup.',
      },
      {
        number: 2,
        title: 'Restore nakon instaliranja na novi telefon',
        description: 'Instalirajte WhatsApp na novi telefon, unesite isti broj telefona. WhatsApp će automatski detektovati backup na Google Drive/iCloud i ponuditi restore. Tap Restore. Svi chatovi, fotografije i videi će biti vraćeni.',
      },
      {
        number: 3,
        title: 'Export specific chata',
        description: 'Otvorite chat > tri tačkice > More > Export chat. Odaberite With media ili Without media. WhatsApp će kreirati .txt fajl sa chat historijom i sve medije u ZIP fajl. Možete ga sačuvati na računar kao backup.',
      },
    ],
  },
  {
    id: 'telegram-channels',
    categoryId: 'drustvene-mreze',
    title: 'Razlika između Telegram Groups i Channels',
    description: 'Odabir pravog načina komunikacije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Groups - dvosmjerna komunikacija',
        description: 'Groups su kao grupni chat - SVI članovi mogu slati poruke, komentarisati, shareovaти slike/videe. Limit: 200,000 članova. Koristite za: prijateljski grupni chat, team diskusije, community gdje svi učestvuju.',
      },
      {
        number: 2,
        title: 'Channels - jednosmjerno broadcasting',
        description: 'Channels su broadcasting platforme - SAMO admini mogu slati poruke, članovi samo čitaju (subscriber). Neograničen broj subscribera! Koristite za: news broadcasts, brand announcements, content sharing gdje ne želite članove da spam-uju.',
      },
      {
        number: 3,
        title: 'Kreiranje',
        description: 'Telegram > Menu > New Channel ili New Group. Za Channel: odaberite Public (bilo ko može pronaći putem search) ili Private (samo ljudi sa invite linkom). Za Group: dodajte članove i podesite permissions (ko može slati poruke, dodavati članove, itd.).',
      },
    ],
  },
  {
    id: 'facebook-ads-why',
    categoryId: 'drustvene-mreze',
    title: 'Zašto vidite određene reklame',
    description: 'Razumijevanje Facebook ad targetinga',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Kako Facebook targetira reklame',
        description: 'Facebook prati: (1) Vaše lajkove, komentare, sharovane postove, (2) Stranice koje pratite, (3) Šta klikate i koliko dugo gledate, (4) Web sajtove koje posječujete (ako imaju Facebook Pixel), (5) Vaš demografski profil (godine, lokacija, pol, relationship status).',
      },
      {
        number: 2,
        title: 'Provjera zašto vidite specifičnu reklamu',
        description: 'Kliknite tri tačkice na reklami > Why am I seeing this ad? Facebook će objasniti razloge, npr. "Advertiser uploaded list containing your email" ili "You\'re interested in Shopping based on your activity".',
      },
      {
        number: 3,
        title: 'Smanjenje targetiranog advertisinga',
        description: 'Settings > Ad Preferences > Ad Settings. Možete: (1) Hide ads from specific advertisers, (2) Hide ads based on certain data (partner info, off-Facebook activity), (3) Adjust your interests list (Facebook misli da vas zanimaju ove teme - možete ukloniti netačne).',
      },
    ],
  },
  {
    id: 'social-media-influencer',
    categoryId: 'drustvene-mreze',
    title: 'Kako postati influencer',
    description: 'Osnove građenja online presence-a',
    difficulty: 'advanced',
    steps: [
      {
        number: 1,
        title: 'Odaberite niche',
        description: 'Ne možete biti "lifestyle" influencer koji pokriva sve - pretrpano je. Odaberite specific niche: fitness za žene 30+, budget travel, tech reviews, vegan cooking, minimalist living. Specifičniji niche = lojalnija publika = bolje brand deal-ove.',
      },
      {
        number: 2,
        title: 'Konsistentnost je ključ',
        description: 'Postujte redovno: Instagram - 4-7 puta sedmično + daily stories. YouTube - minimum jednom sedmično. TikTok - dnevno za najbolje rezultate. Kvalitet > kvantitet ali morate biti konzistentni da algoritam vas promovira.',
      },
      {
        number: 3,
        title: 'Engage sa zajednicom',
        description: 'Odgovarajte NA SVE komentare u prvih sat-dva nakon postovanja. Like-ujte i comment-ujte na druge naloge u vašem niche-u. Radite collaborations. Koristite Instagram/TikTok features (Reels, Q&A stickers). Algoritmi nagrađuju community engagement.',
      },
      {
        number: 4,
        title: 'Monetizacija (10k+ followera)',
        description: 'Načini zarade: (1) Sponsored posts - brendovi plaćaju da promovirate proizvode ($100-$10,000+ zavisno od followera), (2) Affiliate marketing - zarada komisije na prodaje (Amazon Associates, ShareASale), (3) Vlastiti proizvodi (courses, ebooks), (4) YouTube ad revenue. Ne očekujte značajnu zaradu ispod 10k followera.',
      },
    ],
  },
  {
    id: 'instagram-reels-tips',
    categoryId: 'drustvene-mreze',
    title: 'Optimizacija Instagram Reels-a',
    description: 'Kreiranje viral Reels sadržaja',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Format i trajanje',
        description: 'Optimalno: 7-15 sekundi. Vertikalni format (9:16). Prvih 3 sekunde moraju biti hook - najzanimljiviji dio! Ne stavljajte intro. Koristite trending audio - check Reels tab da vidite popularne zvukove.',
      },
      {
        number: 2,
        title: 'Captions i hashtags',
        description: 'Dodajte caption koji podstiče engagement: "Double tap ako se slažeš!", "Koji od ovih ti je najdraži?", "Tag prijatelja koji ovo treba!". Koristite 3-5 relevantnih hashtaga (ne 30!). Hashtagi za Reels: #reels, #reelsinstagram, plus niche hashtags.',
      },
      {
        number: 3,
        title: 'Editing tips',
        description: 'Koristite cuts i transitions za dinamičnost. Text overlays pomažu ljudima da gledaju bez zvuka (80% ljudi gleda bez sound-a!). Ne koristite TikTok watermark (Instagram penalizuje). Najbolje je editovati u Instagram app-u direktno.',
      },
    ],
  },
  {
    id: 'twitter-lists',
    categoryId: 'drustvene-mreze',
    title: 'Korištenje Twitter/X Lists',
    description: 'Organizacija Twitter feed-a',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Kreiranje liste',
        description: 'Lists (lijeva strana) > Create new list. Dajte ime (npr. "Tech News", "Friends", "Sports"). Odaberite Private (samo vi vidite) ili Public (svako može subscribovati). Dodajte opis.',
      },
      {
        number: 2,
        title: 'Dodavanje ljudi u listu',
        description: 'Idite na profil osobe > tri tačkice > Add/remove from Lists > odaberite listu. Sada možete scroll-ovati kroz tu listu da vidite samo tweet-ove od ljudi u toj listi - bez ostalog noise-a.',
      },
      {
        number: 3,
        title: 'Zašto koristiti liste',
        description: 'Main feed je prenatrpan. Liste vam omogućavaju da organziujete informacije: (1) Lista "News" sa novinarima i news outlets, (2) Lista "Friends" sa bliskim prijateljima, (3) Lista po industriji (npr. "Crypto" sa crypto influencerima).',
      },
    ],
  },
  {
    id: 'facebook-poke',
    categoryId: 'drustvene-mreze',
    title: 'Šta je Facebook "Poke"',
    description: 'Razumijevanje stare Facebook funkcije',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Šta je Poke',
        description: 'Poke je stara Facebook funkcija (od 2004!) koja šalje notification osobi "You were poked by [vaše ime]". Nema jasnog značenja - može biti: pozdrav, flert, "thinking of you", ili samo zabava. Retko se koristi danas.',
      },
      {
        number: 2,
        title: 'Kako Poke-ovati nekoga',
        description: 'Idite na profil osobe > tri tačkice > Poke. Oni će dobiti notification. Mogu "Poke Back" ili ignorisati. Možete vidjeti poke historiju: Facebook > Menu > Pokes (može trebati search u menu).',
      },
      {
        number: 3,
        title: 'Moderni ekvivalenti',
        description: 'Umjesto Poke, danas ljudi koriste: Emoji reakcije na stories, DM sa meme-om, ili Reacting na stari post. Poke je nostalgičan ali outdated.',
      },
    ],
  },
  {
    id: 'instagram-analytics',
    categoryId: 'drustvene-mreze',
    title: 'Praćenje Instagram statistike',
    description: 'Korištenje Instagram Insights',
    difficulty: 'intermediate',
    steps: [
      {
        number: 1,
        title: 'Switch na Professional account',
        description: 'Insights su dostupni samo za Creator ili Business accounts. Settings > Account > Switch to Professional Account > odaberite Creator (za influencere) ili Business. BESPLATNO je! Dobijate pristup analytics bez plaćanja.',
      },
      {
        number: 2,
        title: 'Razumijevanje Insights',
        description: 'Profil > Menu > Insights. Videćete: (1) Reach - koliko jedinstvenih naloga vidjelo vaš content, (2) Engagement - likes, comments, shares, saves, (3) Follower demographics - godine, pol, lokacija, najaktivnija vremena, (4) Content performance - koji postovi najbolje rade.',
      },
      {
        number: 3,
        title: 'Korištenje podataka za poboljšanje',
        description: 'Gledajte: (1) Kada su followersi najaktivniji - postujte u tim vremenima, (2) Koji tip contenta najbolje radi (Reels vs. carousel vs. photos), (3) Koji hashtazi donose najviše dosega, (4) Demographics - da li vaša publika odgovara vašem target audience.',
      },
    ],
  },
  {
    id: 'discord-nitro',
    categoryId: 'drustvene-mreze',
    title: 'Šta je Discord Nitro',
    description: 'Premium subscription za Discord',
    difficulty: 'beginner',
    steps: [
      {
        number: 1,
        title: 'Discord Nitro benefiti',
        description: 'Nitro je $10/mjesec subscription. Dobijate: (1) Custom emoji korištenje na svim serverima, (2) Animated profile picture, (3) Larger file uploads (100MB vs. 8MB), (4) HD video streaming, (5) Server boosting credits, (6) Custom Discord tag (#0001-#9999 umjesto random).',
      },
      {
        number: 2,
        title: 'Da li vam treba Nitro?',
        description: 'Za casual korisnike: NE. Za power users ili oni koji rade communities: možda. Najveći benefiti su veći uploads i HD streaming. Emoji feature je zabavan ali ne esencijalan. Mnogi koriste mjesec probno pa otkažu.',
      },
      {
        number: 3,
        title: 'Nitro Basic alternativa',
        description: 'Nitro Basic je $3/mjesec - daje većinu emoji features ali bez HD streaming i boostova. Jeftinija opcija ako samo želite custom emoji.',
      },
    ],
  },
];

export function getProblemsByCategoryId(categoryId: string): Problem[] {
  return problems.filter((problem) => problem.categoryId === categoryId);
}

export function getProblemById(id: string): Problem | undefined {
  return problems.find((problem) => problem.id === id);
}
