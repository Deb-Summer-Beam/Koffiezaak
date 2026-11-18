
# Week 13 - Securitycheck veilige invoer en DOM

## 1. Inleiding

Tijdens Week 13 is de beveiliging van de bestelpagina van Cozy Brew onderzocht.

De controle richt zich op:
- Het controleren van klantgegevens met HTML en JavaScript.
- Het tonen van begrijpelijke foutmeldingen bij ongeldige invoer.
- Het veilig weergeven van klantgegevens in het controleoverzicht.
- Het voorkomen van onveilige DOM-updates en het beperken van XSS-risico's.

Voor deze opdracht is de bestaande bestelprocedure gekozen als invoerroute.

De onderzochte bestanden zijn:
- `code/bestelling.html`
- `code/javascript/bestellen.js`

De uitgevoerde tests zijn vastgelegd met screenshots in `docs/testing/`.

De invoercontroles zijn uitgevoerd aan de clientzijde. Voor een productieomgeving blijft validatie aan de serverzijde noodzakelijk.

## 2. Inventarisatie van invoer en DOM-uitvoer

### 2.1 Gekozen invoerroute

Voor de securitycheck is het bestelformulier van Cozy Brew gekozen.

De klant selecteert een product, kiest een aantal en vult vervolgens persoonlijke gegevens in. De gegevens worden gecontroleerd voordat het controleoverzicht verschijnt of de bestelling wordt afgerond.

### 2.2 Invoerbronnen en controles

| Invoerbron | Validatie | DOM-uitvoer |
|---|---|---|
| Product | Er moet een product geselecteerd zijn. | Winkelmandje en controleoverzicht |
| Aantal | Geheel getal vanaf 1. | Winkelmandje, totaalbedrag en controleoverzicht |
| Naam | Verplicht, minimaal 2 tekens. | Controleoverzicht |
| E-mailadres | Verplicht, HTML-type email en JavaScript-controle bij het overzicht. | Controleoverzicht |
| Telefoonnummer | Verplicht, toegestane tekens en 10 tot 15 cijfers. | Controleoverzicht |
| Adres | Verplicht, minimaal 5 tekens, letters en een huisnummer. | Controleoverzicht |
| Postcode | Verplicht, Nederlands postcodeformaat. | Controleoverzicht |
| Plaats | Verplicht, controle op geldige letters en woordscheiding. | Controleoverzicht |

### 2.3 Verwerking van klantgegevens

De klantgegevens worden met JavaScript uit de formuliervelden gelezen.

Voor het controleoverzicht worden nieuwe DOM-elementen aangemaakt met `document.createElement()`.

De ingevoerde gegevens worden met `textContent` weergegeven. Hierdoor wordt ingevoerde tekst niet als HTML geïnterpreteerd.

De bestelpagina gebruikt `addEventListener()` om gebruikersacties af te handelen.

### 2.4 Afbakening

Deze inventarisatie richt zich op de bestaande bestelroute.

Andere invoerbronnen, zoals URL-parameters, API-gegevens en formulieren op andere pagina's, zijn hiermee nog niet volledig onderzocht.

De validatie gebeurt in de browser en vervangt geen servervalidatie.

### 2.5 Gevonden verbeterpunten

Tijdens de securitycheck zijn verschillende verbeterpunten vastgesteld.

**Invoervalidatie**
- Ongeldige postcodes werden niet bij beide bestelknoppen op dezelfde manier gecontroleerd.
- Telefoonnummers met te weinig cijfers konden bij rechtstreeks verzenden worden geaccepteerd.
- Adressen met alleen spaties of ongeldige combinaties werden onvoldoende gecontroleerd.
- Plaatsnamen met losse letters en spaties, zoals `B r e d a`, werden aanvankelijk geaccepteerd.
- De postcode-inputlistener werd bij iedere klik op 'Controleer bestelling' opnieuw toegevoegd.

Deze punten zijn aangepast in `bestellen.js` en opnieuw getest.

**Foutmeldingen**
- Voor naam, e-mail, telefoon en postcode zijn veldgebonden foutmeldingen toegevoegd.
- Bij rechtstreeks verzenden worden voor sommige controles nog JavaScript-alerts gebruikt.
- De e-mailvalidatie bij rechtstreeks verzenden wordt mede door de ingebouwde HTML-validatie uitgevoerd.

**DOM-veiligheid**
- In de onderzochte bestelroute worden klantgegevens met `textContent` weergegeven.
- DOM-elementen worden met `createElement()` aangemaakt.
- Gebruikersacties worden met `addEventListener()` gekoppeld.
- Een projectbrede controle op `innerHTML`, `insertAdjacentHTML` en inline eventhandlers moet nog worden uitgevoerd.

**Beperking**
De controles zijn uitgevoerd aan de clientzijde. Zonder servervalidatie kan niet worden gegarandeerd dat ongeldige invoer buiten de browser wordt tegengehouden.

### 2.6 Controle op riskante DOM-methoden

Tijdens de securitycheck is de projectmap `code/` onderzocht op mogelijk riskante DOM-methoden.

Hiervoor is gezocht naar:
- `innerHTML`
- `insertAdjacentHTML`
- Inline eventhandlers zoals `onclick`, `onchange`, `oninput` en `onsubmit`

**Resultaat:**

In de onderzochte JavaScript- en HTML-bestanden zijn geen actieve toepassingen van deze patronen gevonden.

Er is één commentaarregel aangetroffen in `code/javascript/reserveren.js` op regel 101:

`//Bevestiging met textContent, niet innerHTML (Test van Debora)`

Dit is uitsluitend commentaar en vormt op zichzelf geen XSS-risico.

In de bestelroute worden klantgegevens met `textContent` weergegeven en DOM-elementen met `createElement()` aangemaakt.

**Conclusie:**

Bij deze zoekcontrole zijn geen actieve toepassingen van de onderzochte riskante DOM-patronen gevonden. Dit is geen garantie dat de volledige website vrij is van XSS-risico's.

## 3. Testresultaten veilige DOM-uitvoer

### 3.1 Doel van de tests

Tijdens deze tests is gecontroleerd of speciale tekens uit het naamveld veilig worden weergegeven in het controleoverzicht van Cozy Brew.

De gegevens worden met `textContent` in de DOM geplaatst, zodat ingevoerde tekst niet als HTML wordt geïnterpreteerd.

### 3.2 Uitgevoerde tests

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| XSS-01 | `anna<test>` | De tekens `<` en `>` blijven zichtbaar als tekst. | De tekst verscheen letterlijk in het controleoverzicht. | Geslaagd |
| XSS-02 | `Anna "Test" & Co` | Aanhalingstekens en `&` blijven zichtbaar als tekst. | De tekst verscheen letterlijk in het controleoverzicht. | Geslaagd |

### 3.3 Bewijsmateriaal

De screenshots zijn opgeslagen in `docs/testing/`:

- `week13-xss-test-speciale-tekens.png`
- `week13-xss-test-aanhalingstekens-ampersand.png`

### 3.4 Conclusie

Beide tests zijn geslaagd.

De onderzochte speciale tekens werden als gewone tekst weergegeven in het controleoverzicht.

Dit bevestigt dat de onderzochte DOM-uitvoer correct werkt met `textContent`.

Deze tests vormen geen volledige garantie tegen XSS. Ook andere invoerbronnen en eventuele serververwerking moeten veilig worden behandeld.

### 3.5 Controle van de browserconsole

Tijdens de normale bestelprocedure is de browserconsole gecontroleerd.

De bestelling werd succesvol verwerkt en er waren geen rode JavaScript-foutmeldingen zichtbaar.

Chrome toonde wel de volgende performancewaarschuwing:

`[Violation] 'submit' handler took ...ms`

Bij drie controles werden de volgende tijden gemeten:
- 2317 ms
- 2037 ms
- 1461 ms

De waarschuwing werd korter wanneer de bedankmelding sneller werd bevestigd.

Een mogelijke oorzaak is het gebruik van `alert()`, omdat deze melding de JavaScript-uitvoering tijdelijk blokkeert.

**Resultaat:** de bestelprocedure werkte correct. Er is geen JavaScript-exception waargenomen. De performancewaarschuwing blijft een aandachtspunt, maar is geen aangetoond beveiligingslek.

### 3.6 Toetsenbordtoegankelijkheid

Tijdens Week 13 is gecontroleerd of de bestelpagina zonder muis kan worden bediend.

| Test | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|
| Navigeren met Tab | De focus doorloopt de klantgegevensvelden in een logische volgorde. | Alle zes de velden waren bereikbaar. | Geslaagd |
| Navigeren tussen knoppen | De knoppen zijn met Tab bereikbaar. | De knoppen werden in de juiste volgorde doorlopen. | Geslaagd |
| Controleer bestelling met Enter | Het controleoverzicht verschijnt. | Het controleoverzicht verscheen. | Geslaagd |
| Bestelling versturen met Enter | De bestelling wordt afgerond. | De verzendknop werkte met Enter. | Geslaagd |

**Conclusie:**

De onderzochte onderdelen van de bestelpagina kunnen met het toetsenbord worden bediend.

Deze tests bevestigen de basisbediening met Tab en Enter, maar vormen geen volledige toegankelijkheidsaudit.

### 3.7 Overzicht van invoervalidatie en testbewijzen

Tijdens Week 13 zijn verschillende ongeldige invoerwaarden getest op de bestelpagina van Cozy Brew.

De tests zijn uitgevoerd via 'Controleer bestelling' en waar relevant ook rechtstreeks via 'Bestelling versturen'.

| Onderdeel | Geteste situatie | Resultaat | Bewijsmateriaal |
|---|---|---|---|
| Adres | Ongeldig adres en controleoverzicht | Ongeldige invoer geblokkeerd; geldige invoer geaccepteerd | `week13-adresvalidatie-ongeldig-adres.png`, `week13-adresvalidatie-controleoverzicht.png` |
| E-mail | Ongeldig e-mailadres en rechtstreeks verzenden | Ongeldige invoer geblokkeerd | `week13-email-ongeldig.png`, `week13-emailvalidatie-verzenden.png` |
| Naam | Te korte naam en foutmelding | Ongeldige invoer geblokkeerd | `week13-naam-te-kort.png`, `week13-naam-foutmelding.png`, `week13-naamvalidatie-verzenden.png` |
| Plaats | Ongeldige plaatsnaam | Ongeldige invoer geblokkeerd | `week13-plaatsvalidatie-ongeldige-plaats.png` |
| Postcode | Ongeldig postcodeformaat | Ongeldige invoer geblokkeerd | `week13-postcode-ongeldig.png`, `week13-postcodevalidatie-verzenden.png` |
| Telefoon | Te kort, te lang en ongeldige tekens | Ongeldige invoer geblokkeerd | `week13-telefoon-te-kort.png`, `week13-telefoon-te-lang.png`, `week13-telefoon-ongeldige-tekens.png`, `week13-telefoon-validatie.png`, `week13-telefoonvalidatie-verzenden.png` |
| DOM-uitvoer | Speciale tekens `<`, `>`, aanhalingstekens en `&` | Als gewone tekst weergegeven | `week13-xss-test-speciale-tekens.png`, `week13-xss-test-aanhalingstekens-ampersand.png` |

De screenshots zijn opgeslagen in `docs/testing/`.


Deze securitycheck is een aanvulling op de bestaande functionele testdocumentatie in `docs/testing/deel2-testoverzicht.md`.

In dat document zijn onder andere het toevoegen en verwijderen van producten, het controleren van bestellingen, het plaatsen van bestellingen en het resetten van het formulier getest.

Deze bestaande functionele tests worden in Week 13 niet opnieuw volledig beschreven. De nadruk ligt op invoervalidatie, veilige DOM-uitvoer en toetsenbordbediening.


## 4. Openstaande bevindingen

Tijdens de securitycheck zijn de volgende aandachtspunten vastgesteld.

| Onderdeel | Bevinding | Vervolgactie |
|---|---|---|
| Foutmeldingen | Niet alle validatiefouten worden direct bij het betreffende invoerveld getoond. Sommige controles gebruiken nog `alert()`. | Onderzoeken of alle foutmeldingen veldgericht en toegankelijk kunnen worden weergegeven. |
| E-mailvalidatie | De browser voert HTML-validatie uit, maar de JavaScript-controle is niet in beide bestelroutes gelijk ingericht. | Validatie bij controleren en verzenden op elkaar afstemmen. |
| Servervalidatie | De onderzochte validaties worden aan de clientzijde uitgevoerd. | Bij een toekomstige backend ook servervalidatie toepassen. |
| Performance | Chrome toont soms een gele waarschuwing over de verwerkingstijd van de submit-handler. | Onderzoeken of blokkerende meldingen zoals `alert()` de verwerkingstijd beïnvloeden. |

Deze bevindingen betekenen niet dat er tijdens de uitgevoerde tests een beveiligingslek is aangetoond.

De vervolgacties moeten worden beoordeeld en waar nodig als GitHub Issues worden vastgelegd.

