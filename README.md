# Cozy Brew

**Team 5 – Cozy Crew**

- Debora Rodriguez Montaldo
- Mitchell van der Linden
- Matthieu Hoogesteger
- Cheyenne Trommelen
- Yannick Veldhuisen
- Koen van de Wouw

## Projectbeschrijving

Cozy Brew is een website voor (deeltijd)studenten en werkenden die in hun drukke leven een rustige koffiezaak zoeken. De site laat met een menu dat altijd actueel is zien wat Cozy Brew aanbiedt. De bezoeker kan via de site een tafel reserveren, een bestelling plaatsen en via een contactformulier contact opnemen.

## Aangeboden producten

Producten die we aanbieden met de bijbehorende prijzen zijn te vinden in onze [JSON](code/json/menu-groep.json). 
Wanneer in de JSON de data zoals een prijs wordt aangepast, past het [menu](code/menu.html) zich automatisch aan.

Momenteel wordt er aan gewerkt om onze [bestelpagina](code/bestelling.html) ook automatisch te laten updaten via de JSON, zie issue [#52](https://github.com/Deb-Summer-Beam/Koffiezaak/issues/52).

Door gebruik te maken van een JSON hoeft een beheerder niet in HTML iets aan te passen, maar blijft alles centraal in de JSON. 
 

## Controle week 1

- **Datum controle:** 16-11-2026
- **Wat gecontroleerd:** `index.html` en `menu.html` via de [W3C HTML Validator](https://validator.w3.org/#validate_by_upload)
- **Resultaat:** `index.html`: 1 error, 1 warning (lege `<h1>`); `menu.html`: 1 error. De error is een `alt` op de link in plaats van op de afbeelding. Dezelfde code staat op alle 7 pagina's.
  ```html
  <a href="index.html" alt="terug naar homepage">
  <img src="../images/cozybrew_logo.png" alt="Logo van CozyBrew" class="logo">
  </a>
  ```
- **Links en afbeeldingen:** eerder getest, zie [testoverzicht week 3](docs/testing/deel1-testoverzicht.md): alle links werken en de homepagina is vanaf iedere pagina bereikbaar.
- **Vervolg:** issue [#72](https://github.com/Deb-Summer-Beam/Koffiezaak/issues/72) aangemaakt.

## Controle week 2

- **Datum controle:** 16-11-2026
- **Wat gecontroleerd:** `code/css/style.css` via de [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload); de HTML-bestanden zie Controle week 1.
- **Resultaat:** `style.css`: 0 errors, [aantal] warnings.
- **Verbetering:** de `alt` gaat van de logolink naar de afbeelding en beschrijft het doel van de link ("Cozy Brew, naar de homepagina"). Een schermlezer leest dan voor waar de link naartoe gaat, in plaats van alleen "Logo van CozyBrew".
- **Status:** gepland in [#72](https://github.com/Deb-Summer-Beam/Koffiezaak/issues/72); deze regel wordt bijgewerkt zodra #72 is gemerged.

## Ontwerp week 3

- **Voor wie:** (deeltijd)studenten en werkenden met een druk leven, zie [Projectbeschrijving](#projectbeschrijving) en de persona's in [hoofdstuk 2 van het ondernemingsplan](docs/project/ondernemingsplan-en-informatieplan.md).
- **Pagina's:** Home (`index.html`), Menu, Contact, Reservering, Werken bij, Bestelling plaatsen en Over ons (`about_us.html`).
- **Navigatie:** iedere pagina heeft dezelfde `<nav>` in de header; het logo linkt terug naar de homepagina. Zie de [sitemap](docs/ontwerp/sitemap.png).
- **Hoofdkleur:** donkerbruin `#4B2915` (tekst en knoppen), op de lichte achtergrond `#EAD8BE`.
- **Aanvullende kleuren:** `#D5B797` (header) en `#DCC3A5` (navigatieknoppen en kaarten). In darkmode: `#F0E1CC` op `#1E1410`.
- **Lettertype:** Comic Neue (Google Fonts), gewichten 300, 400 en 700.
- **Leesbaarheid en contrast:** op 16-11-2026 nagerekend met de WCAG-contrastformule (zelfde berekening als de [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)):

  | Combinatie | Verhouding | WCAG AA (4.5:1) |
  |---|---|---|
  | Tekst `#4B2915` op achtergrond `#EAD8BE` | 9.26:1 | ja |
  | Tekst `#4B2915` op header `#D5B797` | 6.79:1 | ja |
  | Navigatieknop `#4B2915` op `#DCC3A5` | 7.62:1 | ja |
  | Navigatie hover `#4B2915` op `#C9A681` | 5.69:1 | ja |
  | Darkmode tekst `#F0E1CC` op `#1E1410` | 14.06:1 | ja |
  | Darkmode navigatie `#F0E1CC` op `#3A271E` | 10.98:1 | ja |

## Ontwerp week 4

- **Layoutkeuze:** de header en navigatie gebruiken **Flexbox** met `flex-wrap: wrap` en `gap`, zodat de knoppen op een smaller scherm doorlopen naar een volgende regel. Het menu gebruikt **Grid** met `repeat(auto-fill, minmax(220px, 1fr))`: er passen zoveel kaarten naast elkaar als het scherm toelaat, minimaal 220px breed. De formulieren voor bestellen en reserveren gebruiken Grid met vaste kolommen.
- **Breakpoints:** `max-width: 1024px` (tablet liggend / kleine laptop), `768px` (tablet staand) en `480px` (mobiel). Op mobiel is de header niet meer sticky, omdat die anders te veel schermruimte inneemt, en staan de formuliervelden onder elkaar.
- **Gecontroleerd op:** ongeveer 375, 768 en 1280 pixels breed, zie het [testoverzicht week 4](docs/testing/deel1-testoverzicht.md).

## API week 7

- **Databron:** het eigen bestand [`code/json/menu-groep.json`](code/json/menu-groep.json), opgehaald met `fetch()` in `laadProducten()` in [`script.js`](code/javascript/script.js).
- **Welke gegevens:** per product de naam, categorie, prijs en afbeelding. Dit past bij het project omdat het menu op één plek wordt bijgehouden (zie [Aangeboden producten](#aangeboden-producten)).
- **Sleutel of limiet:** geen; het is een lokaal bestand in de repository. Er staan geen wachtwoorden of geheime sleutels in de code.
- **Statussen:** tijdens het laden "Menu laden...", na succes het aantal geladen producten, bij een fout (`response.ok` is `false` of een netwerkfout) "Het menu kon niet worden geladen."
- **Sequentiediagram:** [verzoek, antwoord en foutafhandeling](docs/uml/week07-sequence.png).
- **Let op:** open `menu.html` via Live Server. Via `file://` (dubbelklikken in de Verkenner) blokkeert de browser de `fetch`.

## Projectdocumenten

| Document | Link |
|---|---|
| Ondernemingsplan en informatieplan | [docs/project/ondernemingsplan-en-informatieplan.md](docs/project/ondernemingsplan-en-informatieplan.md) |
| Functioneel ontwerp | [docs/ontwerp/functioneel-ontwerp.md](docs/ontwerp/functioneel-ontwerp.md) |
| Technisch ontwerp | in ontwikkeling, zie [PR #44](https://github.com/Deb-Summer-Beam/Koffiezaak/pull/44) |
| Moodboard | [docs/ontwerp/week03-moodboard.png](docs/ontwerp/week03-moodboard.png) |
| Sitemap | [docs/ontwerp/sitemap.png](docs/ontwerp/sitemap.png) |
| Wireframes | [home](design/wireframes/wireframe-home.png) en [menu](design/wireframes/wireframe-menu.png) |
| Use-case-diagram (week 3) | [docs/uml/week03-usecase-start.png](docs/uml/week03-usecase-start.png) |
| Activiteitendiagram (week 5) | [docs/uml/week05-activity.png](docs/uml/week05-activity.png) |
| Sequentiediagram (week 7) | [docs/uml/week07-sequence.png](docs/uml/week07-sequence.png) |
| Testoverzicht deel 1 | [docs/testing/deel1-testoverzicht.md](docs/testing/deel1-testoverzicht.md) |



🎯 Doel van het project

Het doel van dit project is het ontwikkelen van een overzichtelijke en gebruiksvriendelijke website voor een koffiezaak.


De website kan bezoekers informeren over:

☕ Ons koffieaanbod


🍵 Verschillende soorten thee


🍰 Het assortiment gebak




🍪 Koekjes en kleine gebakjes
💶 De prijzen van alle producten


🛠️ Gebruikte technologieën

Dit project wordt ontwikkeld met:

HTML5 – voor de structuur van de website


CSS3 – voor de styling en vormgeving


JavaScript – voor interactieve functionaliteiten


Visual Studio Code – als ontwikkelomgeving


Git / GitHub – voor versiebeheer

📁 Projectstructuur


koffiezaak/





├── index.html


├── README.md


├── css/    

   └── style.css



├── js/
   

└── script.js



├── images/
   

├── koffie/
   

├── thee/
   

└── gebak/



└── wireframes/


    └── ...


   🚀 Installatie en gebruik
    


1. Clone het project naar je computer:
git clone < repository -url > 


2. Open het project in VS Code

3. Open de projectmap in Visual Studio Code.

3. Start de website

5. Open index.html in je browser.

6. Je kunt eventueel de Live Server extensie in VS Code gebruiken om de website lokaal te bekijken.

📌 Toekomstige uitbreidingen

In de toekomst kan de website worden uitgebreid met:

- Online bestellen


- Winkelmandje


- Online reserveren


- Contactformulier


- Openingstijden


- Locatie en routebeschrijving


- Foto's van de producten


- Speciale aanbiedingen


- Seizoensgebonden producten


- Klantenreviews

👩‍💻 Auteur

Dit project is ontwikkeld als onderdeel van een webdevelopment-project.

📄 Licentie

Dit project is bedoeld voor educatieve doeleinden.