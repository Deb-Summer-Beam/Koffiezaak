# Cozy Brew - Technisch Ontwerp

## 1. Inleiding

Dit technisch ontwerp (TO) beschrijft hoe de Cozy Brew-website is opgebouwd. Waar het [functioneel ontwerp](../ontwerp/functioneel-ontwerp.md) beschrijft wat de bezoeker op de website kan doen, legt dit document uit hoe dat gerealiseerd is: welke technieken we gebruiken, hoe de bestanden zijn opgebouwd, welke functies en gegevens de belangrijkste onderdelen vormen en hoe de website gegevens ophaalt en verwerkt. 

Het document is bedoeld voor ontwikkelaars die aan de website verder werken of hem willen nabouwen. Het TO groeit mee met het project: bij een technische wijziging wordt het bijgewerkt. Waar mogelijk verwijzen we naar bestaande bestanden, diagrammen en testverslagen, in plaats van dezelfde inhoud opnieuw te tonen in dit bestand. 


## 2. Technieken en bestandsstructuur
### 2.1 Gebruikte technieken
De website is gebouwd met HTML, CSS en JavaScript. Hieronder staat per techniek waarvoor wij hem gebruiken. 

#### HTML5
De structuur van elke pagina is opgebouwd met semantische HTML-elementen, zoals `<header>`, `<nav>`, `<main>`, `<section>`, `<form>` en `<footer>`. Deze elementen geven aan wat een onderdeel is, niet alleen hoe het eruitziet. Dat maakt de code leesbaarder voor developers en schermlezers om de opbouw van de pagina te begrijpen. De productkaarten op het menu zijn `<article>`-elementen deze staan niet in de HTML, maar worden door JavaScript aangemaakt (zie 4.2) 

#### Formuliervalidatie
De formulieren voor bestellen, reseveren en contact controleren de invoer op twee niveaus.

In de HTML hebben de verplichte velden het attribuut `required`, zodat het formulier niet verstuurd kan worden zoland een veld leeg is. Daarnaast heeft elk veld het juiste type:
- `type="email"` controleert of er een geldig e-mailadres is ingevuld;
- `type="tel"` toont op een telefoon een cijfertoetsenbord;
- `type="date"` laat de bezoeker een datum kiezen uit een kalender;
- `type="number"` met `min="1"` voorkomt dat er een aantal lager dan 1 wordt ingevuld.

De browser voert deze controles zelf uit en toont een melding bij het veld dat niet klopt. 

In JavaScript controleren we regels die HTML niet kan controleren. In `bestellen.js` wordt gecontroleerd of er een product gekozen is en of het aantal een heel getal van minimaal 1 is. In `reserveren.js` wordt bij het keizen van een datum gekeken of Cozy Brew die dag open is. Op 1 januari en op 25 en 26 december verschijnt de melding "Helaas zijn we gesloten op deze dag." en wordt het tijdveld uitgeschakeld. Op andere dagen worden allen de tijden getoond die binnen de openingstijden vallen van die dag. 

#### Toegankelijkheid: aria-live
Sommige meldingen veranderen terwijl we de bezoeker op de pagina is, zoals "Menu laden..." of een foutmelding. Deze meldingen staan in een element met 'aria-live'. Een schermlezer leest de nieuwe tekst dan automatisch voor zodra die verandert. Bij `#menuStatus` gebruiken we `aria-live="polite"`: de schermlezer wacht tot hij klaar is met voorlezen en onderbreekt de bezoeker dus niet. Zonder itattribuut zou een blinde of slechtziende bezoeker de melding missen. 

#### CSS: Flexbox en Grid
Alle opmaak staat in één bestand: `style.css`. Voor de layout gebruiken we twee technieken.

**Flexbox** zet elementen in één richting naast of onder elkaar. Dit gebruiken we voor onderdelen die uit één rij of kolom bestaan, zoals de `header`, de navigatie, een productkaart (`.kaart`) en de regels in het winkelmandje.

**Grid** verdeelt de ruimte in rijen én kolommen tegelijk. Dit gebruiken we waar meerdere onderdelen netjes uitgelijnd in een raster moeten staan, zoals het productenoverzicht op het menu (`.productenoverzicht`) en de velden van het bestel- en reserveerformulier (`.klantgegevens`, `.productRij`, `.reserveerRij`)

#### CSS: responsive met media queries
De opmaak is eerst gemaakt voor een groot scherm. Met media queries (`max-width`) passen we de layout aan voor kleinere schermen, op drie pbreakpoints: 
- 1024px: kleine laptops en tablets in liggende stand;
- 768px: tablets;
- 480px: telefoons.

Onze doelgroep bezoekt de website vooral op een telefoon. Daarom geven we het breakpoint van 480px extra aandacht. Op dat formaat:
- is de header niet meer sticky, zodat hij tijdens het scrollen geen schermruimte inneemt;
- staan de producten in twee kolommen;
- worden het logo en de koppen kleiner;
- hebben de navigatielinks genoeg ruimte (padding) om ze goed met een vinger aan te tikken.

#### JavaScript
JavaScript zorgt voor het gedrag van de website. We gebruiken drie bestanden `script.js` staan op alle pagina's allen op `bestellingen.html` en `reserveren.js` alleen op `reservering.html`. Met `querySelector` zoeken we elementen op, met `addEventListener` reageren we op klikken en het verzenden van formulieren, en met `createElement` en `textContent` passen we de pagina aan.

**defer.** De scripts staan in de `<head>` met het attribuut `defer`. Zonder `defer` stopt de browser met het inlezen van de HTML zodra hij het script tegenkomt, en voert hij de JavaScript direct uit. De elementen die verderop in de pagina staan, bestaan op dat moment nog niet. `querySelector` vindt ze dan niet en het script geeft fouten in de console. Met `defer` downloadt de browser het script alvast op de achtergrond, maar voert hij het pas uit nadat de hele HTML is ingelezen. Zo bestaan alle elementen al wanneer de JavaScript start.

**fetch en JSON.** Het menu wordt met `fetch()` en `async`/`await` opgehaald uit het lokale bestand `menu-groep.json`. Daardoor staan de producten los van de code: een nieuw product toevoegen of een prijs aanpassen kan in de JSON, zonder de JavaScript te veranderen. Hoofdstuk 4 beschrijft hoe dit werkt.

#### Hulpmiddelen
- **Git en GitHub.** Iedereen werkt op een eigen branch, zodat we tegelijk aan verschillende onderdelen kunnen werken zonder elkaars werk te overschrijven. Werk komt via een pull request in de gezamenlijke branch, nadat een groepsgenoot het heeft gereviewd. Hebben twee mensen dezelfde regel aangepast, dan laat Git een mergeconflict zien en kiezen we samen welke versie blijft. De geschiedenis laat zien wie wat wanneer heeft veranderd, en met issues verdelen we de taken.
- **Lucidchart.** Hiermee maken we de UML-diagrammen (use-case, activiteiten en sequence). Een diagram laat in één overzicht zien hoe een proces of functie verloopt, wat in de code zelf lastiger te zien is. De bronbestanden staan als `.vsdx` in `docs/uml/`.
- **VS Code.** De editor waarin we de code schrijven. Hij heeft ingebouwde Git-ondersteuning en is uit te breiden met extensies die het programmeren makkelijker maken.
- **AI-tools (Claude Code, ChatGPT en GitHub Copilot).** Binnen de groep hebben we AI op vier manieren gebruikt:
  - Afbeeldingen: de afbeeldingen op `index.html` en `menu.html` zijn gegenereerd met ChatGPT, waarbij ons eigen logo in de afbeeldingen is verwerkt.
  - Advies en uitleg: uitleg over hoe een stuk code werkt, of waarom het niet werkt.
  - Codereview: een algemene controle van vooral de JavaScript. De W3C-validator controleert alleen HTML en CSS, dus voor JavaScript gebruikten we AI om fouten op te sporen.
  - Documentatie: hulp bij het formuleren van teksten in de documenten en bij het opsporen van spelfouten.

  AI is voor ons een hulpmiddel en geen vervanging van ons eigen werk. Alle code en tekst die met hulp van AI tot stand is gekomen, hebben we zelf gecontroleerd, getest en begrepen voordat het in het project kwam. Aanpassingen in de code hebben we zelf doorgevoerd.

### 2.2 Bestandsstructuur
```
Koffiezaak/
├── code/
│   ├── index.html
│   ├── menu.html
│   ├── about_us.html
│   ├── bestelling.html
│   ├── reservering.html
│   ├── contact.html
│   ├── werkenbij.html
│   ├── css/
│   │   └── style.css
│   ├── javascript/
│   │   ├── script.js        (alle pagina's)
│   │   ├── bestellen.js     (alleen bestelling.html)
│   │   └── reserveren.js    (alleen reservering.html)
│   └── json/
│       └── menu-groep.json
├── images/
│   └── Producten/
├── design/
│   └── wireframes/
└── docs/
    ├── ontwerp/
    ├── project/
    │   └── persona/
    ├── technisch/
    ├── testing/
    └── uml/
```

HTML, CSS, JavaScript en JSON hebben elk een eigen map. Zo is de structuur (HTML), de opmaak (CSS), het gedrag (JavaScript) en de data (JSON) van elkaar gescheiden. Dit maakt het makkelijker om met meerdere mensen tegelijk aan het project te werken en verkleint de kans op mergeconflicten: de ene developer werkt bijvoorbeeld aan de opmaak in de CSS, terwijl een ander in JavaScript werkt. Ook blijft de code leesbaar: naarmate het project groeit, wordt het steeds lastiger om een fout te vinden als alles door elkaar staat.

Afbeeldingen en code houden we ook gescheiden. Foto’s zijn statische bestanden die niet veranderen, terwijl de code steeds wordt aangepast. Door alle afbeeldingen in één map images/ te zetten, staan ze overzichtelijk bij elkaar in plaats van verspreid tussen de code. Omdat de HTML-pagina’s in code/ staan, verwijzen ze naar de afbeeldingen met het pad ../images/.

### 2.3 Samenwerking tussen HTML, CSS en JavaScript


## 3. Functies, gegevens en herbruikbare onderdelen
### 3.1 Gegevens (datamodel)
In `localStorage` gebruiken we de key `accessibilityValue` met de mogelijkheden "on"/"off". `localStorage` kan enkel waarden opslaan van het type 'string'. Omdat alternatieven zoals "true"/"false" hierdoor later mogelijk voor verwarring kunnen zorgen met waarden van het type 'boolean', hebben we gekozen om gebruik te maken van "on"/"off". We gebruiken `localStorage` als bron om te bepalen op welke manier de website zichtbaar moet zijn met betrekking tot de Accessibility functie. 

In `localStorage` gebruiken we de key `darkmodeValue` met de mogelijkheden "on"/"off". `localStorage` kan enkel waarden opslaan van het type 'string'. Omdat alternatieven zoals "true"/"false" hierdoor later mogelijk voor verwarring kunnen zorgen met waarden van het type 'boolean', hebben we gekozen om gebruik te maken van "on"/"off". We gebruiken `localStorage` als bron om te bepalen op welke manier de website zichtbaar moet zijn met betrekking tot de Darkmode functie. 

### 3.2 Belangrijkste functies
**toggleAccessibility-functie:** `toggleAccessibility()` wordt uitgevoerd na een klik op de knop met ID `#accessibility-knop` en wijst door middel van `.toggle` de class `accessibility` toe wanneer deze nog niet is toegevoegd aan `<html>` (geselecteerd met 'document.documentElement'). Wanneer deze class al is toegevoegd zal hij deze er juist afhalen. Daarna checkt deze functie of de class is toegewezen of juist niet. Wanneer `<html>` de class toegewezen heeft, zal de `localStorage` worden aangesproken en zal de key `accessibilityValue` de waarde "on" krijgen. Wanneer `<html>` de class niet heeft toegewezen, zal de key `accessibilityValue` de waarde "off" krijgen. 

**localStorageCheckAccessibility-functie**: `localStorageCheckAccessibility()` wordt uitgevoerd wanneer de pagina laadt en checkt of de waarde van de key `accessibilityValue` in `localStorage` gelijk is aan "on". Wanneer dit zo is, zal de class 'accessibility' worden toegewezen aan `<html>`. Wanneer de keywaarde niet gelijk is aan "on", zal er niks gebeuren.  

**toggleDarkmode-functie**: `toggleDarkmode()` wordt uitgevoerd na een klik op de knop met ID `#dark-knop` en wijst door middel van `.toggle` de class `donker` toe wanneer deze nog niet is toegevoegd aan `<body>` (geselecteerd met 'document.body'). Wanneer deze class al is toegevoegd zal hij deze er juist afhalen. Daarna checkt deze functie of de class is toegewezen of juist niet. Wanneer `<body>` de class toegewezen heeft, zal de `localStorage` worden aangesproken en zal de key `darkmodeValue` de waarde "on" krijgen. Wanneer `<body>` de class niet heeft toegewezen, zal de key `darkmodeValue` de waarde "off" krijgen. 

**localStorageCheckDarkmode-functie**: `localStorageCheckDarkmode()` wordt uitgevoerd wanneer de pagina laadt en checkt of de waarde van de key `darkmodeValue` in `localStorage` gelijk is aan "on". Wanneer dit zo is, zal de class 'donker' worden toegewezen aan `<body>`. Wanneer de keywaarde niet gelijk is aan "on", zal er niks gebeuren.

### 3.3 Herbruikbare onderdelen

## 4. API-verwerking
### 4.1 Gegevensbron
Het bestand dat we ophalen is code/json/menu-groep.json: een array met 34 objecten. Elk object is een product met de volgende gegevens: naam (string), categorie (string), afbeelding (string), omschrijving (string) en prijs (number). Er is geen API-sleutel en geen limiet nodig, omdat het om een lokaal bestand gaat dat niet wordt opgehaald uit een externe service. De producten staan in een JSON-bestand, zodat data en code gescheiden blijven. Dit houdt de code overzichtelijker.

### 4.2 Verwerking
De JSON wordt opgehaald met de functie async function `laadProducten()` in `script.js`. Dit script staat op alle pagina’s en roept `laadProducten()` direct aan bij het laden van de pagina. De functie zoekt eerst met querySelector naar .productenoverzicht en #menuStatus. Worden die niet gevonden, dan stopt de functie meteen met return. Daardoor wordt het menu alleen op menu.html opgehaald. Tijdens het laden ziet de bezoeker de melding “Menu laden...”. Daarna zet `response.json()` het antwoord om naar een array met product-objecten. Een forEach loopt elk product langs en roept `maakProductKaart(product)` aan. Deze functie bouwt per product een `<article>` met een foto, een h2, een omschrijving, de prijs (met `toLocaleString` omgezet naar euro’s) en de knop “In winkelwagen”. Daarna zet appendChild de kaart in .productenoverzicht. Alle tekst wordt met textContent geplaatst, zodat de inhoud van de JSON nooit als HTML wordt uitgevoerd. Tot slot toont de status het aantal geladen producten met producten.length + " producten geladen".

### 4.3 Foutafhandeling
Het ophalen van het menu kan op drie manieren misgaan. Alle drie de fouten komen terecht in hetzelfde catch-blok. 

1. De server stuurt een foutcode. Als het bestand niet gevonden wordt (bijvoorbeeld een 404), is `response.ok` false. De code gooit dan zelf een fout met `throw new Error("Menu laden mislukt: " + response.status)`, waardoor de uitvoering naar `catch` springt.

2. Netwerkfout. Als er geen verbinding is of de server niet reageert, krijgt de `fetch()` helemaal geen antwoord terug. De fetch mislukt dan zelf en springt direct naar de `catch`. De controle op `response.ok` wordt in dat geval overgeslagen.

3. Ongeldige JSON. Als het JSON-bestand een fout bevat, bijvoorbeeld een ontbrekende komma of een aanhalingsteken, kan `response.json()` het antwoord niet omzetten naar een array. Ook dan ontstaat er een fout die naar de `catch` springt. 

In de `catch` gebeuren twee dingen, voor twee verschillende doelgroepen. Met `console.error(error)` wordt de technische fout in de console geschreven, zodat een ontwikkelaar kan zien wat er misging. De bezoeker krijgt in `#menuStatus` de melding "Het menu kon niet worden geladen.", in plaats van een lege pagina zonder uitleg. Omdat `#menuStatus` het attribuut `aria-live="polite"` heeft, leest een schermlezer deze melding ook voor. De bezoeker weet dan dat het laden mislukt is. 

### 4.4 Sequence-diagram
![Sequence-diagram van het laden van het menu](../uml/week07-sequence.png)

Het diagram toont het verzoek van `script.js` aan de webserver, het antwoord, en de twee routes daarna: het laden van de productkaarten bij een geslaagd antwoord, en de foutmelding bij een mislukte poging.


## 5. Technische keuzes
### 5.1 Responsiviteit
### 5.2 Toegankelijkheid
### 5.3 Veilig omgaan met gegevens

## 6. Testaanpak en bekende beperkingen