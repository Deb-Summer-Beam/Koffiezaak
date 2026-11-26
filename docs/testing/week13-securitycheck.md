
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
| Product | Er moet een product geselecteerd zijn bij het toevoegen. De winkelwagen mag niet leeg zijn bij het controleren of plaatsen van een bestelling. | Winkelmandje en controleoverzicht |
| Aantal | Geheel getal vanaf 1. | Winkelmandje, totaalbedrag en controleoverzicht |
| Naam | Verplicht, minimaal 2 tekens na het verwijderen van spaties aan het begin en einde. | Controleoverzicht |
| E-mailadres | Verplicht, HTML-type email en centrale JavaScript-validatie via validity.valid. | Controleoverzicht |
| Telefoonnummer | Verplicht, toegestane telefoontekens en minimaal 10 en maximaal 15 cijfers. | Controleoverzicht |
| Adres | Verplicht, minimaal 5 tekens, minimaal 3 letters en minimaal 1 cijfer. | Controleoverzicht |
| Postcode | Verplicht, Nederlands postcodeformaat met of zonder spatie tussen cijfers en letters. | Controleoverzicht |
| Plaats | Verplicht, controle op geldige letters en woordscheiding. | Controleoverzicht |

De zes klantgegevensvelden worden gecontroleerd door de centrale JavaScript-functie `valideerKlantgegevens()`.

Zowel 'Controleer bestelling' als 'Bestelling plaatsen' gebruikt dezelfde validatiefunctie.

Het formulier gebruikt `novalidate` om automatische browsermeldingen uit te schakelen. De HTML-validatiekenmerken blijven beschikbaar voor JavaScript.

Bij ongeldige klantgegevens verschijnt een specifieke foutmelding onder het betreffende invoerveld. De focus wordt naar dit veld verplaatst en de ingevulde gegevens blijven behouden.

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

**Oorspronkelijke bevindingen**

- Ongeldige postcodes werden niet bij beide bestelknoppen op dezelfde manier gecontroleerd.
- Telefoonnummers met te weinig cijfers konden bij rechtstreeks verzenden worden geaccepteerd.
- Adressen met alleen spaties of ongeldige combinaties werden onvoldoende gecontroleerd.
- Plaatsnamen met losse letters en spaties, zoals `B r e d a`, werden aanvankelijk geaccepteerd.
- De postcode-inputlistener werd bij iedere klik op 'Controleer bestelling' opnieuw toegevoegd.
- Niet alle foutmeldingen werden direct onder het betreffende invoerveld weergegeven.
- De e-mailvalidatie was niet gelijk ingericht bij beide bestelknoppen.
- De validatiecode was verspreid over twee afzonderlijke eventlisteners.

**Uitgevoerde verbeteringen**

- Een centrale validatiefunctie `valideerKlantgegevens()` toegevoegd.
- Beide bestelknoppen gekoppeld aan dezelfde validatiefunctie.
- Dubbele klantvalidatie verwijderd uit beide eventlisteners.
- Veldgerichte foutmeldingen voor alle zes klantgegevensvelden toegevoegd.
- Automatische focus op het ongeldige invoerveld toegepast.
- `aria-invalid` gebruikt om ongeldige invoer aan te geven.
- Bestaande foutmeldingen worden bij een nieuwe validatie gewist.
- Ingevulde klantgegevens blijven behouden bij ongeldige invoer.
- De afzonderlijke postcode-inputlistener blijft behouden.
- De veilige DOM-weergave met `textContent` en `createElement()` blijft behouden.
- Het formulier gebruikt `novalidate` in combinatie met centrale JavaScript-validatie.

**Onderhoudbaarheid**

**Onderhoudbaarheid**

Door de klantvalidatie te centraliseren en dubbele
validatiecode te verwijderen is `bestellen.js`
compacter en beter onderhoudbaar geworden.

Met `git diff --numstat` is vastgesteld dat ten
opzichte van de laatste commit:

- 101 regels zijn toegevoegd.
- 168 regels zijn verwijderd.
- Het bestand netto 67 regels korter is geworden.

De centrale validatiefunctie voorkomt dat toekomstige
aanpassingen aan klantvalidatie op meerdere plaatsen
moeten worden uitgevoerd.

**Resultaat**

Alle zes klantgegevensvelden zijn na de opschoning
opnieuw getest via beide bestelknoppen.

Ook de normale bestelprocedure, veilige DOM-uitvoer,
bedankmelding, resetfunctionaliteit en toetsenbordbediening
zijn opnieuw getest.

**Beperking**

De controles worden uitgevoerd aan de clientzijde.
Voor een productieomgeving blijft servervalidatie noodzakelijk.

De resterende aandachtspunten worden beschreven in hoofdstuk 4.

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

### 2.7 Aanvullende securitycontrole

Na de centralisatie van de klantvalidatie is
de projectmap `code/` opnieuw gecontroleerd.

- Geen actieve toepassingen van `innerHTML` gevonden.
- Geen toepassingen van `insertAdjacentHTML` gevonden.
- Geen onderzochte inline eventhandlers gevonden.
- Geen overeenkomsten gevonden bij het zoeken naar
  api-key, password, secret, token en wachtwoord.

Daarnaast is `git diff --check` uitgevoerd.
Na het verwijderen van overbodige witruimte
zijn geen verdere problemen gemeld.

De zoekcontrole naar geheimen is indicatief
en vormt geen volledige beveiligingsscan.

## 3. Testresultaten veilige DOM-uitvoer

### 3.1 Doel van de tests

Tijdens deze tests is gecontroleerd of speciale tekens uit het naamveld veilig worden weergegeven in het controleoverzicht van Cozy Brew.

De gegevens worden met `textContent` in de DOM geplaatst, zodat ingevoerde tekst niet als HTML wordt geïnterpreteerd.

### 3.2 Uitgevoerde tests

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| XSS-01 | `anna<test>` | De tekens `<` en `>` blijven zichtbaar als tekst. | De tekst verscheen letterlijk in het controleoverzicht. | Geslaagd |
| XSS-02 | `Anna "Test" & Co` | Aanhalingstekens en `&` blijven zichtbaar als tekst. | De tekst verscheen letterlijk in het controleoverzicht. | Geslaagd |
| XSS-03 | `<img src="fout" onerror="alert('Hallo')">` | De HTML-code blijft zichtbaar als tekst en er verschijnt geen pop-up. | De volledige invoer verscheen letterlijk in het controleoverzicht; er verscheen geen pop-up. | Geslaagd |

### 3.3 Bewijsmateriaal

De screenshots zijn opgeslagen in `docs/testing/`:

- `week13-xss-test-speciale-tekens.png`
- `week13-xss-test-aanhalingstekens-ampersand.png`
- `test18-xss-img-onerror.png`

### 3.4 Conclusie

Alle drie de XSS-tests zijn geslaagd.

De onderzochte speciale tekens werden als gewone tekst weergegeven in het controleoverzicht.

Dit bevestigt dat de onderzochte DOM-uitvoer correct werkt met `textContent`.

Deze tests vormen geen volledige garantie tegen XSS. Ook andere invoerbronnen en eventuele serververwerking moeten veilig worden behandeld.

Bij XSS-03 is ook een HTML-element met een JavaScript-event
(onerror) getest. De volledige invoer werd als gewone tekst
weergegeven en er werd geen JavaScript uitgevoerd.

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

### 3.8 Centrale validatiefunctie

Tijdens de verdere uitvoering van de Week 13-securitycheck
is de klantvalidatie gecentraliseerd.

Hiervoor zijn de volgende JavaScript-functies gebruikt:

| Functie | Verantwoordelijkheid |
|---|---|
| `wisVeldFouten()` | Bestaande veldgerichte foutmeldingen en ongeldigheidsmarkeringen wissen. |
| `toonVeldFout()` | Een specifieke foutmelding tonen, het veld als ongeldig markeren en de focus verplaatsen. |
| `valideerKlantgegevens()` | Alle zes klantgegevensvelden controleren. |

Zowel de click-eventlistener van 'Controleer bestelling'
als de submit-eventlistener van 'Bestelling plaatsen'
gebruikt dezelfde centrale validatiefunctie.

Wanneer de validatie `false` retourneert, wordt de verdere
uitvoering van de betreffende eventlistener gestopt.

#### HTML en toegankelijkheid

- De invoervelden hebben zichtbare labels.
- De labels zijn gekoppeld aan de bijbehorende invoervelden.
- De HTML-attributen `required`, `minlength` en passende
  invoertypen ondersteunen de validatie.
- Het formulier gebruikt `novalidate` om automatische
  browsermeldingen te vervangen door eigen veldmeldingen.
- Foutmeldingen worden gekoppeld via `aria-describedby`.
- Foutmeldingselementen gebruiken `role="alert"`.
- Ongeldige velden worden gemarkeerd met `aria-invalid`.
- De focus wordt naar het eerste ongeldige veld verplaatst.
- Ingevulde gegevens blijven behouden bij ongeldige invoer.

#### Voordelen van de centrale validatie

- Dezelfde validatieregels bij beide bestelknoppen.
- Minder dubbele code.
- Consistente en begrijpelijke foutmeldingen.
- Betere onderhoudbaarheid.
- Minder risico op verschillen tussen controleren en plaatsen.
- Verbeterde ondersteuning van toetsenbordbediening.

De bestaande veilige DOM-weergave met `textContent`
en `createElement()` is behouden.

De centrale validatiefunctie is na het verwijderen van
de dubbele validatiecode opnieuw functioneel getest.

### 3.9 Uitgebreide validatiehertests

Na het centraliseren van de klantvalidatie zijn de
invoervelden opnieuw getest.

De tests zijn uitgevoerd via beide bestelknoppen:

- Controleer bestelling.
- Bestelling plaatsen.

Bij iedere test is één invoerveld aangepast.
De overige klantgegevens zijn geldig ingevuld
en de winkelwagen bevatte een product.

#### 3.9.1 Adresvalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| ADR-01 | `abc` | Ongeldig adres weigeren. | Beide bestelknoppen blokkeren de bestelling en tonen een veldmelding. | Geslaagd |
| ADR-02 | `Kerkstraat 12` | Geldig adres accepteren. | Controleoverzicht verschijnt en bestelling kan worden afgerond. | Geslaagd |

De foutmelding wordt onder het adresveld weergegeven.
De focus wordt naar het adresveld verplaatst.
De overige klantgegevens blijven behouden.

#### 3.9.2 Plaatsvalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| PLA-01 | `b r e d a` | Ongeldige plaatsnaam weigeren. | Beide bestelknoppen blokkeren de bestelling en tonen een veldmelding. | Geslaagd |
| PLA-02 | `Breda` | Geldige plaatsnaam accepteren. | Controleoverzicht verschijnt en bestelling kan worden afgerond. | Geslaagd |

De plaatsvalidatie gebruikt nu een veldgerichte
foutmelding in plaats van een JavaScript-alert.

#### 3.9.3 Telefoonvalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| TEL-01 | `abcfdg` | Ongeldige tekens weigeren. | Beide bestelknoppen blokkeren de bestelling en tonen een veldmelding. | Geslaagd |
| TEL-02 | `123` | Minder dan 10 cijfers weigeren. | Beide bestelknoppen blokkeren de bestelling en tonen een veldmelding. | Geslaagd |
| TEL-03 | `06123456789012345` | Meer dan 15 cijfers weigeren. | Beide bestelknoppen blokkeren de bestelling en tonen een veldmelding. | Geslaagd |
| TEL-04 | `0612345678` | Geldig telefoonnummer accepteren. | Foutmelding verdwijnt en bestelling kan worden afgerond. | Geslaagd |

#### 3.9.4 Naamvalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| NAM-01 | `A` | Naam met minder dan 2 tekens weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| NAM-02 | Leeg naamveld | Lege invoer weigeren. | Veldgerichte foutmelding verschijnt. | Geslaagd |
| NAM-03 | Uitsluitend vijf spaties | Invoer zonder zichtbare tekens weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| NAM-04 | `A n n a` | Onderzoeken of losse letters worden geaccepteerd. | De invoer wordt geaccepteerd. | Aandachtspunt |
| NAM-05 | `Anna` | Geldige naam accepteren. | De invoer wordt geaccepteerd. | Geslaagd |

De functie `trim()` verwijdert spaties aan het begin
en einde van de ingevoerde naam.

Spaties tussen letters worden niet verwijderd.

De invoer `A n n a` wordt daarom geaccepteerd.
Dit is een aandachtspunt voor de invoerkwaliteit,
maar vormt op zichzelf geen aangetoond beveiligingslek.

Er is bewust geen aanvullende beperking toegevoegd,
om geldige namen met spaties en bijzondere tekens
niet onnodig uit te sluiten.

#### 3.9.5 E-mailvalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| EMA-01 | `anna` | Ongeldig e-mailadres weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| EMA-02 | `anna@` | Onvolledig e-mailadres weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| EMA-03 | `anna @example.com` | Ongeldige spatie weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| EMA-04 | Leeg e-mailveld | Lege invoer weigeren. | Beide bestelknoppen tonen een veldmelding. | Geslaagd |
| EMA-05 | `anna@example.com` | Geldig e-mailadres accepteren. | Controleoverzicht verschijnt en bestelling kan worden afgerond. | Geslaagd |

De e-mailvalidatie wordt bij beide bestelknoppen
uitgevoerd via `emailVeld.validity.valid`.

#### 3.9.6 Postcodevalidatie

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| POS-01 | `1234` | Onvolledige postcode weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| POS-02 | `AB1234` | Onjuist postcodeformaat weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| POS-03 | `0811AB` | Postcode beginnend met 0 weigeren. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| POS-04 | Leeg postcodeveld | Lege invoer weigeren. | Beide bestelknoppen tonen een veldmelding. | Geslaagd |
| POS-05 | `4811AB` | Geldige postcode accepteren. | De invoer wordt geaccepteerd. | Geslaagd |
| POS-06 | `4811 AB` | Geldige postcode met spatie accepteren. | De invoer wordt geaccepteerd. | Geslaagd |
| POS-07 | Correctie van ongeldige naar geldige postcode | Foutmelding automatisch wissen. | De foutmelding verdwijnt tijdens het corrigeren. | Geslaagd |

#### 3.9.7 Samenvatting

Alle zes klantgegevensvelden zijn opnieuw getest.

De centrale validatiefunctie blokkeert de geteste
ongeldige invoer en accepteert de geteste geldige invoer.

De foutmeldingen worden bij het betreffende
invoerveld weergegeven.

De ingevoerde klantgegevens blijven behouden
wanneer een validatie niet slaagt.

Het resterende aandachtspunt bij de naamvalidatie
wordt opgenomen in hoofdstuk 4.

### 3.10 Definitieve functionele hertests

Na het volledig verwijderen van de dubbele validatiecode
zijn beide bestelroutes opnieuw getest.

Het doel van deze hertests is controleren of de bestaande
bestelfunctionaliteit correct blijft werken na de
centralisatie van de klantvalidatie.

#### 3.10.1 Functionele controles

| Test | Testsituatie | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| FUN-01 | Lege winkelwagen controleren | Melding dat eerst een product moet worden toegevoegd. | Melding verschijnt en bestelling wordt geblokkeerd. | Geslaagd |
| FUN-02 | Lege winkelwagen rechtstreeks plaatsen | Bestelling wordt geblokkeerd. | Melding verschijnt en bestelling wordt geblokkeerd. | Geslaagd |
| FUN-03 | Winkelwagen gevuld, klantgegevens leeg | Veldgerichte foutmelding bij het naamveld. | Beide bestelknoppen blokkeren de bestelling. | Geslaagd |
| FUN-04 | Geldige klantgegevens en 1 cappuccino | Correct controleoverzicht met totaalbedrag van €3,50. | Controleoverzicht en totaalbedrag worden correct weergegeven. | Geslaagd |
| FUN-05 | Geldige bestelling plaatsen | Bedankmelding verschijnt. | Bedankmelding verschijnt. | Geslaagd |
| FUN-06 | Bestelling succesvol afronden | Winkelwagen wordt geleegd. | Winkelwagen wordt correct geleegd. | Geslaagd |

#### 3.10.2 Definitieve klantvalidatie

Na het verwijderen van de dubbele validatie uit beide
eventlisteners zijn alle zes klantgegevensvelden
opnieuw gecontroleerd.

| Invoerveld | Testinvoer | Verwacht resultaat | Controleer bestelling | Bestelling plaatsen |
|---|---|---|---|---|
| Naam | `A` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |
| E-mailadres | `anna@` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |
| Telefoonnummer | `123` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |
| Adres | `abc` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |
| Postcode | `1234` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |
| Plaats | `b r e d a` | Ongeldige invoer blokkeren. | Geslaagd | Geslaagd |

Alle twaalf controles zijn geslaagd.

Bij ongeldige invoer verschijnt een specifieke
veldgerichte foutmelding en wordt de verdere
bestelprocedure tegengehouden.

#### 3.10.3 Conclusie

De uitgevoerde hertests bevestigen dat de onderzochte
bestelfunctionaliteit correct blijft werken na het
verwijderen van de dubbele klantvalidatie.

Beide bestelknoppen gebruiken dezelfde validatieregels.

De normale bestelprocedure, het controleoverzicht,
het totaalbedrag, de bedankmelding en het leegmaken
van de winkelwagen blijven correct functioneren.

De uitgevoerde wijzigingen hebben bij deze tests
geen regressies veroorzaakt.

### 3.11 XSS-hertests na centralisatie

Na het centraliseren van de klantvalidatie en het
verwijderen van de dubbele validatiecode is de
veilige DOM-uitvoer opnieuw getest.

Het doel van deze hertests is controleren of de
ingevoerde klantgegevens nog steeds als gewone
tekst worden weergegeven in het controleoverzicht.

#### 3.11.1 Uitgevoerde hertests

De onderstaande testwaarden zijn ingevoerd in het
naamveld. De overige klantgegevens zijn geldig
ingevuld en de winkelwagen bevatte een product.

| Test | Invoer | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|---|
| XSS-H01 | `<b>test</b>` | HTML-tags worden letterlijk weergegeven en de tekst wordt niet vetgedrukt. | De volledige invoer verschijnt als gewone tekst. | Geslaagd |
| XSS-H02 | `Anna "Test" & Co` | Aanhalingstekens en het &-teken blijven zichtbaar. | De volledige invoer verschijnt als gewone tekst. | Geslaagd |
| XSS-H03 | `<img src="test.png">` | De HTML-code wordt letterlijk weergegeven zonder een afbeelding aan te maken. | De volledige invoer verschijnt als gewone tekst. | Geslaagd |

#### 3.11.2 Veilige DOM-verwerking

De klantgegevens worden nog steeds verwerkt met:

- `document.createElement()`
- `textContent`

Hierdoor worden de geteste invoerwaarden als tekst
weergegeven en niet als uitvoerbare HTML verwerkt.

De centralisatie van de klantvalidatie heeft bij
deze hertests geen negatieve invloed gehad op de
veilige weergave van klantgegevens.

#### 3.11.3 Bewijsmateriaal

De oorspronkelijke XSS-tests en bijbehorende
screenshots blijven behouden in paragraaf 3.2
en paragraaf 3.3.

De nieuwe hertestresultaten zijn vastgelegd
in de bovenstaande tabel.

#### 3.11.4 Conclusie

Alle drie de nieuwe XSS-hertests zijn geslaagd.

De geteste HTML-tags en speciale tekens worden
letterlijk weergegeven in het controleoverzicht.

De veilige DOM-verwerking is behouden na de
centralisatie van de klantvalidatie.

Deze resultaten gelden voor de onderzochte
invoerroute en vormen geen garantie dat de
volledige website vrij is van XSS-risico's.

### 3.12 Console- en toetsenbordhertests

Na de centralisatie van de klantvalidatie is de
bestelpagina opnieuw gecontroleerd op consolemeldingen
en toetsenbordtoegankelijkheid.

#### 3.12.1 Browserconsole

Tijdens het plaatsen van een geldige bestelling
is de browserconsole opnieuw gecontroleerd.

De bestelling werd succesvol afgerond en de
bedankmelding verscheen.

Chrome toonde de volgende performancewaarschuwing:

`[Violation] 'submit' handler took 1864ms`

Deze waarschuwing werd weergegeven bij
`bestellen.js`, regel 276.

Een mogelijke oorzaak is de blokkerende werking
van de bedankmelding via `alert()`.

Deze oorzaak is nog niet definitief vastgesteld.

Tijdens de hertest zijn geen nieuwe JavaScript-fouten
gemeld die de bestelprocedure verhinderen.

Een gedeeltelijk zichtbare rode consoleregel kon
niet volledig worden beoordeeld.

De performancewaarschuwing blijft een openstaand
aandachtspunt en wordt tijdens deze opdracht
niet verder onderzocht.

#### 3.12.2 Toetsenbordtoegankelijkheid

| Test | Verwacht resultaat | Werkelijk resultaat | Status |
|---|---|---|---|
| TOET-H01 | Alle zes klantgegevensvelden zijn bereikbaar met Tab. | Alle velden zijn bereikbaar. | Geslaagd |
| TOET-H02 | Productselectie en aantal zijn bereikbaar met Tab. | Beide onderdelen zijn bereikbaar. | Geslaagd |
| TOET-H03 | Alle drie de bestelknoppen zijn bereikbaar met Tab. | Alle knoppen zijn bereikbaar. | Geslaagd |
| TOET-H04 | De tabvolgorde is logisch. | De onderdelen worden in een logische volgorde doorlopen. | Geslaagd |
| TOET-H05 | De toetsenbordfocus is zichtbaar. | De focus is zichtbaar tijdens het navigeren. | Geslaagd |
| TOET-H06 | Ongeldige invoer wordt bij bediening met Enter geblokkeerd. | De validatie blokkeert de verdere bestelprocedure. | Geslaagd |
| TOET-H07 | De focus wordt naar het ongeldige invoerveld verplaatst. | Het betreffende invoerveld krijgt de focus. | Geslaagd |
| TOET-H08 | Beide bestelroutes werken met Enter bij geldige invoer. | Beide bestelroutes functioneren correct. | Geslaagd |

#### 3.12.3 Conclusie

Alle acht toetsenbordhertests zijn geslaagd.

De centralisatie van de klantvalidatie heeft
bij deze hertests geen negatieve invloed gehad
op de toetsenbordbediening.

De veldgerichte foutmeldingen en automatische
focus ondersteunen de gebruiker bij het corrigeren
van ongeldige invoer.

De performancewaarschuwing blijft een aandachtspunt.

De uitgevoerde toetsenbordtests vormen geen
volledige toegankelijkheidsaudit.

## 4. Openstaande bevindingen

## 4. Bevindingen en resterende aandachtspunten

Tijdens de securitycheck zijn verschillende
verbeterpunten vastgesteld.

Na de centralisatie van de klantvalidatie zijn
de oorspronkelijke bevindingen opnieuw beoordeeld.

### 4.1 Opgeloste bevindingen

| Onderdeel | Oorspronkelijke bevinding | Uitgevoerde verbetering | Status |
|---|---|---|---|
| Foutmeldingen | Niet alle validatiefouten werden bij het betreffende invoerveld weergegeven. | Veldgerichte foutmeldingen voor alle zes klantgegevensvelden. | Opgelost |
| E-mailvalidatie | De validatie was niet gelijk ingericht bij beide bestelroutes. | Centrale validatie via `validity.valid`. | Opgelost |
| Postcodevalidatie | Verschillende controles bij beide bestelknoppen. | Beide bestelknoppen gebruiken dezelfde validatiefunctie. | Opgelost |
| Telefoonvalidatie | Te korte telefoonnummers konden bij rechtstreeks verzenden worden geaccepteerd. | Centrale controle op toegestane tekens en 10 tot 15 cijfers. | Opgelost |
| Adresvalidatie | Ongeldige adressen werden onvoldoende gecontroleerd. | Uitgebreide centrale adresvalidatie. | Opgelost |
| Plaatsvalidatie | Losse letters met spaties werden geaccepteerd. | Controle op letters en geldige woordscheiding. | Opgelost |
| Postcode-inputlistener | De listener werd herhaaldelijk toegevoegd. | De listener wordt afzonderlijk gekoppeld. | Opgelost |
| Dubbele validatiecode | Klantvalidatie was verspreid over twee eventlisteners. | Centrale validatiefunctie voor beide bestelroutes. | Opgelost |

De uitgevoerde verbeteringen zijn opnieuw getest.
De resultaten zijn beschreven in hoofdstuk 3.

### 4.2 Resterende aandachtspunten

| Onderdeel | Bevinding | Vervolgactie | Status |
|---|---|---|---|
| Naamvalidatie | Invoer zoals `A n n a` wordt geaccepteerd. | Beoordelen of aanvullende validatieregels wenselijk zijn zonder geldige namen uit te sluiten. | Open |
| Servervalidatie | De validatie wordt uitsluitend aan de clientzijde uitgevoerd. | Bij een toekomstige backend ook servervalidatie toepassen. | Open |
| Performance | Chrome toont een waarschuwing over de verwerkingstijd van de submit-handler. | Onderzoeken of de blokkerende werking van `alert()` invloed heeft op de verwerkingstijd. | Open |
| Browserconsole | Een gedeeltelijk zichtbare rode consoleregel kon niet volledig worden beoordeeld. | Bij een volgende consolecontrole de volledige melding onderzoeken. | Open |
| Overige invoerbronnen | Andere formulieren, URL-parameters en API-gegevens zijn niet volledig onderzocht. | Indien van toepassing afzonderlijk onderzoeken. | Open |

### 4.3 Afbakening en vervolgacties

De resterende aandachtspunten vormen op zichzelf
geen aangetoonde beveiligingslekken.

De performancewaarschuwing wordt tijdens deze
opdracht niet verder onderzocht.

De client-side validatie vervangt geen servervalidatie.

De resterende bevindingen moeten binnen het team
worden besproken en waar nodig worden vastgelegd
in bestaande of nieuwe GitHub Issues.

De uitgevoerde securitycheck richt zich op de
onderzochte bestelroute en vormt geen volledige
beveiligingsaudit van de website.

## 5. Eindconclusie

Tijdens Week 13 is de bestelroute van Cozy Brew
onderzocht op invoervalidatie, veilige DOM-verwerking
en toetsenbordtoegankelijkheid.

De oorspronkelijke implementatie bevatte verschillen
tussen de validatie bij het controleren en het
rechtstreeks plaatsen van een bestelling.

Deze verschillen zijn opgelost door de klantvalidatie
te centraliseren in de functie `valideerKlantgegevens()`.

### 5.1 Behaalde resultaten

- Consistente validatie bij beide bestelknoppen.
- Centrale validatie van alle zes klantgegevensvelden.
- Verwijdering van dubbele validatiecode.
- Specifieke en begrijpelijke veldgerichte foutmeldingen.
- Behoud van ingevoerde klantgegevens bij ongeldige invoer.
- Automatische focus op het eerste ongeldige invoerveld.
- Ondersteuning van toegankelijkheid met ARIA-attributen.
- Veilige DOM-verwerking met `textContent` en `createElement()`.
- Behoud van de onderzochte functionele bestelprocedure.
- Succesvolle XSS-hertests.
- Succesvolle toetsenbordhertests.
- Verbeterde leesbaarheid en onderhoudbaarheid van de code.

### 5.2 Betrouwbaarheid van de testresultaten

De oorspronkelijke testresultaten en het bijbehorende
bewijsmateriaal zijn behouden.

Na de uitgevoerde verbeteringen zijn aanvullende
hertests uitgevoerd en gedocumenteerd.

Hierbij zijn concrete invoerwaarden, verwachte
resultaten, werkelijke resultaten en teststatussen
vastgelegd.

De hertests tonen aan dat de onderzochte ongeldige
klantgegevens worden tegengehouden en dat geldige
klantgegevens worden geaccepteerd.

De geteste HTML-tags en speciale tekens worden
als gewone tekst weergegeven in het controleoverzicht.

### 5.3 Beperkingen

De uitgevoerde validatie vindt plaats aan de clientzijde.

Voor een productieomgeving is aanvullende
server-side validatie noodzakelijk.

De resterende aandachtspunten zijn beschreven
in hoofdstuk 4.

De uitgevoerde securitycheck vormt geen volledige
beveiligingsaudit of toegankelijkheidsaudit
van de gehele website.

### 5.4 Slotconclusie

De onderzochte bestelroute van Cozy Brew is door
de uitgevoerde verbeteringen consistenter,
gebruiksvriendelijker en beter onderhoudbaar geworden.

De centralisatie van de klantvalidatie vermindert
het risico op verschillen tussen beide bestelroutes.

De uitgevoerde DOM-hertests bevestigen dat de
geteste klantgegevens veilig als tekst worden
weergegeven in het controleoverzicht.

De resultaten en resterende aandachtspunten zijn
vastgelegd in dit securitytestverslag.
