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