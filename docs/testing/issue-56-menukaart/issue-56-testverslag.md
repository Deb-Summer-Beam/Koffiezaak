
# Issue #56 — Testverslag menukaart

## Doel

Controleren of de producten op de menukaart correct zijn ingedeeld in afzonderlijke categorieën en of de indeling goed wordt weergegeven op desktop en mobiel.

## Uitgevoerde wijzigingen

- Producten gegroepeerd op basis van de categorieën in `menu-groep.json`.
- Vijf afzonderlijke kaders gemaakt:
  - Koffie
  - Thee
  - Dranken
  - Gebak
  - Andere dranken
- Bestaande productkaarten behouden.
- Geen producten toegevoegd of verwijderd.
- Totaal: 34 producten.

## Testresultaten

| Test | Schermbreedte | Resultaat |
|---|---|---|
| Koffiekader | 1440 px | Geslaagd |
| Koffiekader | 375 px | Geslaagd |
| Theekader | 375 px | Geslaagd |
| Drankenkader | 375 px | Geslaagd |
| Gebakkader | 375 px | Geslaagd |
| Andere dranken | 375 px | Geslaagd |

## Bevindingen

- De vijf categorieën staan onder elkaar in afzonderlijke kaders.
- De gecontroleerde productkaarten blijven binnen hun kaders.
- Afbeeldingen, omschrijvingen en prijzen worden correct weergegeven.
- De winkelwagenknoppen zijn zichtbaar.
- Er zijn 34 producten geladen.
- Bij de gecontroleerde onderdelen zijn geen zichtbare layoutproblemen vastgesteld.

## Screenshots

Alle screenshots staan in `docs/testing/issue-56-menukaart/`.

- `issue-56-desktop-1440px-koffie.png`
- `issue-56-mobiel-375px-koffie.png`
- `issue-56-mobiel-375px-thee.png`
- `issue-56-mobiel-375px-dranken.png`
- `issue-56-mobiel-375px-gebak.png`
- `issue-56-mobiel-375px-andere-dranken.png`

## Conclusie

De categorie-indeling van de menukaart werkt bij de uitgevoerde visuele controles op desktop en mobiel.

De aanpassing voldoet aan het doel van Issue #56: producten overzichtelijk per categorie weergeven.

### Test — Centrale JSON-verbinding met bestelpagina

**Doel:** Controleren of de bestelpagina alle producten uit
`json/menu-groep.json` correct kan ophalen.

**Teststappen:**
1. Open `bestelling.html` via Live Server.
2. Open de Console met F12.
3. Controleer of de JSON-producten worden geladen.

**Verwacht resultaat:**
De Console toont: `Producten uit JSON geladen: 34`.

**Werkelijk resultaat:**
De Console toont: `Producten uit JSON geladen: 34`.

**Testresultaat:** Geslaagd.

**Bewijs:**

![JSON-test 34 producten](issue56-json-34-producten-geladen.png)

### Test — Centrale productlijst beschikbaar maken

**Doel:** Controleren of alle 34 producten uit de JSON
beschikbaar worden gemaakt voor de bestelpagina.

**Teststappen:**
1. Open `bestelling.html` via Live Server.
2. Open de Console met F12.
3. Controleer of de JSON succesvol wordt geladen.
4. Controleer of de producten beschikbaar zijn in `menuProducten`.

**Verwacht resultaat:**
- `Producten uit JSON geladen: 34`
- `Centrale productlijst beschikbaar: 34`

**Werkelijk resultaat:**
Beide meldingen verschijnen correct in de Console.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Centrale productlijst met 34 producten](issue56-centrale-productlijst-34.png)


### Test — Productgegevens doorgeven aan de keuzelijst

**Doel:** Controleren of de functie `vulProductKeuzelijst()` alle 34 producten uit de centrale JSON ontvangt.

**Teststappen:**
1. Open `bestelling.html` via Live Server.
2. Open de Console met F12.
3. Controleer of de JSON succesvol wordt geladen.
4. Controleer of de functie `vulProductKeuzelijst()` alle producten ontvangt.

**Verwacht resultaat:**
- `Producten uit JSON geladen: 34`
- `Centrale productlijst beschikbaar: 34`
- `Keuzelijst voorbereiden voor: 34 producten`

**Werkelijk resultaat:**
Alle drie de meldingen verschijnen correct in de Console.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Keuzelijst ontvangt 34 producten](issue56-keuzelijst-34-producten-voorbereid.png)


### Test — Meerdere producten bewaren in sessionStorage

**Doel:** Controleren of de winkelwagen meerdere producten kan bewaren en het aantal van een bestaand product verhoogt.

**Teststappen:**
1. Open de menukaart via Live Server.
2. Open de Console met F12.
3. Voeg Cappuccino toe.
4. Voeg Cheesecake toe.
5. Voeg Cappuccino nogmaals toe.
6. Controleer de opgeslagen winkelwagen met console.table().

**Verwacht resultaat:**
- Cappuccino: 2
- Cheesecake: 1

**Werkelijk resultaat:**
De Console toont beide producten met de juiste aantallen.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Meerdere producten opgeslagen](issue56-winkelwagen-meerdere-producten.png)


### Stap 9 — Menukaart koppelen aan de nieuwe winkelwagen

**Doel:**
De klant moet meerdere producten via de menukaart kunnen
toevoegen zonder automatisch naar de bestelpagina te gaan.

**Uitgevoerde wijziging:**
In `code/javascript/script.js` is de click-eventlistener
van de knop "In winkelwagen" aangepast.

De knop gebruikt nu de functie
`bewaarProductInWinkelwagen(product)`.

Na het toevoegen verschijnt een bevestiging met de
productnaam. De klant blijft op de menukaart.

**Verwachte werking:**
- Product wordt opgeslagen in sessionStorage.
- Bestaand product krijgt een hoger aantal.
- Nieuw product wordt aan de winkelwagen toegevoegd.
- Klant blijft op de menukaart.
- Bevestiging verschijnt na het toevoegen.

**Status:** Code aangepast — functionele test nog uitvoeren.

**Volgende test:**
- Cappuccino toevoegen.
- Cheesecake toevoegen.
- Cappuccino opnieuw toevoegen.
- Controleren of de aantallen 2 en 1 zijn.
- Controleren of de klant op de menukaart blijft.

**Bewijs van codewijziging:**

![Aangepaste winkelwagenknop](issue56-menukaart-knop-winkelwagen-aangepast.png)


### Test — Product toevoegen zonder de menukaart te verlaten

**Doel:**
Controleren of de klant een product kan toevoegen
zonder automatisch naar de bestelpagina te gaan.

**Teststappen:**
1. Open de menukaart via Live Server.
2. Klik bij Cappuccino op "In winkelwagen".
3. Controleer de bevestigingsmelding.
4. Controleer of de menukaart zichtbaar blijft.
5. Controleer de Console.

**Verwacht resultaat:**
- Cappuccino wordt opgeslagen in de winkelwagen.
- Een bevestigingsmelding verschijnt.
- De klant blijft op de menukaart.

**Werkelijk resultaat:**
De bevestigingsmelding verschijnt correct.
De Console toont "Winkelwagen opgeslagen".
De klant blijft op de menukaart.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Cappuccino toegevoegd via menukaart](issue56-menukaart-cappuccino-toegevoegd.png)


### Test — Meerdere producten toevoegen via de menukaart

**Doel:**
Controleren of de klant meerdere producten via de
menukaart kan toevoegen zonder de pagina te verlaten.

**Teststappen:**
1. Open de menukaart via Live Server.
2. Voeg Cappuccino toe aan de winkelwagen.
3. Voeg Cheesecake toe aan de winkelwagen.
4. Voeg Cappuccino nogmaals toe.
5. Controleer de opgeslagen producten via de Console.

**Verwacht resultaat:**
- Cappuccino: 2
- Cheesecake: 1
- Beide producten worden opgeslagen in sessionStorage.
- De klant blijft op de menukaart.

**Werkelijk resultaat:**
- Cappuccino: 2
- Cheesecake: 1
- Beide producten zijn correct opgeslagen.
- De klant blijft op de menukaart.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Meerdere producten via menukaart](issue56-menukaart-meerdere-producten-geslaagd.png)


### Test — Opgeslagen winkelwagen uitlezen op bestelpagina

**Doel:**
Controleren of de bestelpagina de producten kan
uitlezen die via de menukaart zijn opgeslagen.

**Teststappen:**
1. Voeg producten toe via de menukaart.
2. Open bestelling.html in hetzelfde browsertabblad.
3. Open de Console met F12.
4. Voer haalOpgeslagenWinkelwagenOp() uit.
5. Controleer de opgeslagen winkelwagen.

**Verwacht resultaat:**
- De bestelpagina kan de winkelwagen uitlezen.
- De twee opgeslagen productobjecten zijn beschikbaar.
- De 34 JSON-producten worden correct geladen.

**Werkelijk resultaat:**
- De Console toont "Opgeslagen winkelwagen".
- Er worden twee productobjecten weergegeven.
- De centrale JSON bevat 34 geladen producten.
- De functie wordt zonder ReferenceError uitgevoerd.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Winkelwagen uitlezen op bestelpagina](issue56-bestelpagina-winkelwagen-uitlezen.png)


### Test — Prijsberekening vanuit centrale JSON

**Doel:**
Controleren of de bestelpagina de juiste prijs gebruikt
na het aanpassen van de prijsberekening naar menuProducten.

**Teststappen:**
1. Open bestelling.html via Live Server.
2. Selecteer Cappuccino.
3. Vul aantal 2 in.
4. Klik op "Toevoegen aan bestelling".
5. Controleer de winkelwagen en het totaalbedrag.

**Verwacht resultaat:**
- Product: Cappuccino
- Aantal: 2
- Prijs per stuk: € 3,50
- Totaal: € 7,00
- Verwijderknop is zichtbaar.

**Werkelijk resultaat:**
- De winkelwagen toont 2 x Cappuccino - €7.00.
- Het totaalbedrag is €7.00.
- De verwijderknop is zichtbaar.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Prijsberekening Cappuccino vanuit JSON](issue56-json-prijsberekening-cappuccino.png)


### Test — Winkelwagenproducten controleren in centrale JSON

**Doel:**
Controleren of de producten uit sessionStorage
worden herkend in de centrale JSON-productlijst.

**Teststappen:**
1. Open bestelling.html in hetzelfde browsertabblad.
2. Open de Console met F12.
3. Lees de opgeslagen winkelwagen uit.
4. Zoek ieder product op in menuProducten.
5. Controleer de gevonden producten en prijzen.

**Verwacht resultaat:**
- Cappuccino wordt gevonden.
- Cheesecake wordt gevonden.
- Beide producten hebben de juiste prijs.

**Werkelijk resultaat:**
- Cappuccino: aantal 4, gevonden true, prijs € 3,50.
- Cheesecake: aantal 1, gevonden true, prijs € 5,00.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Winkelwagenproducten gevonden in JSON](issue56-winkelwagen-producten-json-gevonden.png)


### Test — Opgeslagen producten toevoegen aan de bestelpagina

**Doel:**
Controleren of meerdere producten uit sessionStorage
met de juiste aantallen en prijzen aan de bestaande
winkelwagen kunnen worden toegevoegd.

**Teststappen:**
1. Voeg producten toe via de menukaart.
2. Open bestelling.html in hetzelfde browsertabblad.
3. Wacht totdat de 34 JSON-producten geladen zijn.
4. Voer voegOpgeslagenProductenToe() uit in de Console.
5. Controleer de winkelwagen en het totaalbedrag.

**Verwacht resultaat:**
- Cappuccino: 4 x € 3,50 = € 14,00.
- Cheesecake: 1 x € 5,00 = € 5,00.
- Totaal bestelling: € 19,00.
- Beide producten hebben een verwijderknop.

**Werkelijk resultaat:**
- Cappuccino verschijnt met aantal 4 en bedrag € 14,00.
- Cheesecake verschijnt met aantal 1 en bedrag € 5,00.
- Het totaalbedrag is € 19,00.
- Beide verwijderknoppen zijn zichtbaar.

**Testresultaat:** Geslaagd.

**Opmerking:**
De functie is tijdens deze test handmatig via de
Console uitgevoerd. Automatisch inladen en bescherming
tegen dubbele toevoegingen worden afzonderlijk getest.

**Bewijs:**

![Producten overgedragen naar bestelpagina](issue56-winkelwagen-producten-overdracht-geslaagd.png)


### Test — Winkelwagen automatisch inladen bij openen bestelpagina

**Doel:**
Controleren of de opgeslagen producten automatisch
verschijnen op de bestelpagina, zonder handmatige
uitvoering via de Console.

**Teststappen:**
1. Voeg producten toe via de menukaart.
2. Open bestelling.html in hetzelfde browsertabblad.
3. Vernieuw de bestelpagina met Ctrl + R.
4. Controleer de automatisch geladen winkelwagen.

**Verwacht resultaat:**
- Cappuccino: 4 x € 3,50 = € 14,00.
- Cheesecake: 1 x € 5,00 = € 5,00.
- Totaal bestelling: € 19,00.
- Beide producten hebben een verwijderknop.
- Geen dubbele productregels.

**Werkelijk resultaat:**
- Beide producten verschijnen automatisch.
- De aantallen en bedragen zijn correct.
- Het totaalbedrag is € 19,00.
- Beide verwijderknoppen zijn zichtbaar.
- Er zijn geen dubbele productregels zichtbaar.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Winkelwagen automatisch ingeladen](issue56-winkelwagen-automatisch-inladen.png)


### Test — Product verwijderen en pagina vernieuwen

**Doel:**
Controleren of een verwijderd product ook na het
vernieuwen van de bestelpagina verwijderd blijft.

**Teststappen:**
1. Open bestelling.html met Cappuccino en Cheesecake.
2. Klik bij Cheesecake op "Verwijderen".
3. Controleer het nieuwe totaalbedrag.
4. Vernieuw de pagina met Ctrl + R.
5. Controleer of Cheesecake opnieuw verschijnt.

**Verwacht resultaat:**
- Cheesecake wordt verwijderd.
- Het totaalbedrag verandert naar € 14,00.
- Cheesecake blijft verwijderd na vernieuwen.

**Werkelijk resultaat:**
- Cheesecake verdwijnt uit de zichtbare winkelwagen.
- Het totaalbedrag verandert correct naar € 14,00.
- Na vernieuwen verschijnt Cheesecake opnieuw.

**Testresultaat:** Niet geslaagd — bug gevonden.

**Oorzaak:**
De verwijderknop verwijdert het HTML-element,
maar werkt de opgeslagen winkelwagen in
sessionStorage nog niet bij.

**Bewijs:**

![Verwijderd product komt terug](issue56-verwijderd-product-komt-terug.png)

**Vervolgactie:**
De verwijderfunctie aanpassen zodat het product
ook uit sessionStorage wordt verwijderd.
Daarna de test opnieuw uitvoeren.


### Hertest — Verwijderd product blijft weg na vernieuwen

**Doel:**
Controleren of de aangepaste verwijderfunctie
een product ook uit sessionStorage verwijdert.

**Uitgevoerde correctie:**
De verwijderknop is aangepast zodat het gekozen
product zowel uit de zichtbare winkelwagen als
uit sessionStorage wordt verwijderd.

**Teststappen:**
1. Open bestelling.html.
2. Controleer of Cappuccino en Cheesecake aanwezig zijn.
3. Klik bij Cheesecake op "Verwijderen".
4. Controleer of het totaalbedrag € 14,00 wordt.
5. Vernieuw de pagina met Ctrl + R.
6. Controleer of Cheesecake verwijderd blijft.

**Verwacht resultaat:**
- Cheesecake blijft verwijderd.
- Cappuccino blijft aanwezig met aantal 4.
- Totaalbedrag blijft € 14,00.

**Werkelijk resultaat:**
- Cheesecake verschijnt niet opnieuw.
- Cappuccino blijft aanwezig met aantal 4.
- Het totaalbedrag blijft € 14,00.

**Testresultaat:** Geslaagd — bug opgelost.

**Bewijs:**

![Verwijderfunctie hertest geslaagd](issue56-verwijderfunctie-hertest-geslaagd.png)


### Test — Handmatig toegevoegd product bewaren na vernieuwen

**Doel:**
Controleren of producten die rechtstreeks op de
bestelpagina worden toegevoegd, bewaard blijven.

**Teststappen:**
1. Open bestelling.html.
2. Controleer of Cappuccino 4 keer aanwezig is.
3. Voeg handmatig 1 Cheesecake toe.
4. Controleer of het totaalbedrag € 19,00 is.
5. Vernieuw de pagina met Ctrl + R.
6. Controleer of Cheesecake aanwezig blijft.

**Verwacht resultaat:**
- Cappuccino: 4 x € 3,50 = € 14,00.
- Cheesecake: 1 x € 5,00 = € 5,00.
- Totaal blijft € 19,00 na vernieuwen.

**Werkelijk resultaat:**
- Cheesecake wordt aanvankelijk toegevoegd.
- Na vernieuwen verdwijnt Cheesecake.
- Alleen Cappuccino blijft aanwezig.
- Het totaalbedrag wordt opnieuw € 14,00.

**Testresultaat:** Niet geslaagd — bug bevestigd.

**Vermoedelijke oorzaak:**
Handmatig toegevoegde producten worden nog niet
opgeslagen in sessionStorage.

**Vervolgactie:**
De handmatige toevoegfunctie aanpassen zodat ook
deze producten worden opgeslagen en na vernieuwen
correct worden ingeladen.

**Bewijs:**

![Handmatig product verdwijnt na vernieuwen](issue56-handmatig-product-verdwijnt-na-vernieuwen.png)


### Hertest — Handmatig toegevoegd product blijft bewaard

**Doel:**
Controleren of een product dat rechtstreeks op de
bestelpagina wordt toegevoegd, na vernieuwen behouden blijft.

**Uitgevoerde correctie:**
De toevoegfunctie slaat handmatig toegevoegde producten
nu ook op in sessionStorage.

Met de variabele winkelwagenWordtGeladen wordt voorkomen
dat automatisch ingeladen producten opnieuw worden opgeslagen.

**Teststappen:**
1. Open bestelling.html.
2. Controleer of 4 Cappuccino's aanwezig zijn.
3. Voeg handmatig 1 Cheesecake toe.
4. Controleer het totaalbedrag van € 19,00.
5. Vernieuw de pagina met Ctrl + R.
6. Controleer of beide producten behouden blijven.

**Verwacht resultaat:**
- Cappuccino: 4 x € 3,50 = € 14,00.
- Cheesecake: 1 x € 5,00 = € 5,00.
- Totaal: € 19,00.
- Geen verdwenen producten.
- Geen verdubbelde aantallen.

**Werkelijk resultaat:**
Na vernieuwen blijven beide producten zichtbaar.
De aantallen zijn correct en het totaal blijft € 19,00.

**Testresultaat:** Geslaagd — bug opgelost.

**Bewijs:**

![Hertest handmatig product geslaagd](issue56-handmatig-product-hertest-geslaagd.png)


### Hertest — Meerdere keren hetzelfde product toevoegen

**Doel:**
Controleren of meerdere toevoegingen van hetzelfde product
correct worden opgeslagen en na vernieuwen behouden blijven.

**Teststappen:**
1. Open bestelling.html.
2. Controleer de bestaande winkelwagen.
3. Voeg Cheesecake meerdere keren toe.
4. Controleer het totaalbedrag van € 34,00.
5. Vernieuw de pagina met Ctrl + R.
6. Controleer de producten en aantallen opnieuw.

**Verwacht resultaat:**
- Cappuccino: 4 x € 3,50 = € 14,00.
- Cheesecake: 4 x € 5,00 = € 20,00.
- Totaal: € 34,00.
- Geen verdwenen producten of verdubbelde aantallen.

**Werkelijk resultaat:**
Na vernieuwen worden de afzonderlijke Cheesecake-regels
samengevoegd tot één regel met 4 Cheesecakes.

Cappuccino blijft op 4 staan.
Het totaalbedrag blijft € 34,00.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Dubbele producten na vernieuwen](issue56-dubbele-producten-na-vernieuwen-geslaagd.png)


### Hertest — Meerdere exemplaren van hetzelfde product verwijderen

**Doel:**
Controleren of een product met meerdere exemplaren
correct wordt verwijderd uit de winkelwagen en sessionStorage.

**Teststappen:**
1. Open bestelling.html.
2. Controleer 4 Cappuccino's en 4 Cheesecakes.
3. Controleer het totaalbedrag van € 34,00.
4. Verwijder de regel met 4 Cheesecakes.
5. Controleer het nieuwe totaalbedrag van € 14,00.
6. Vernieuw de pagina met Ctrl + R.
7. Controleer of Cheesecake verwijderd blijft.

**Verwacht resultaat:**
- Cheesecake verdwijnt volledig.
- Cappuccino blijft aanwezig met aantal 4.
- Het totaalbedrag blijft € 14,00.
- Cheesecake verschijnt niet opnieuw na vernieuwen.

**Werkelijk resultaat:**
Alle 4 Cheesecakes zijn verwijderd.
Na vernieuwen blijft alleen Cappuccino aanwezig.
Het totaalbedrag is € 14,00.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Meerdere producten verwijderen geslaagd](issue56-verwijderen-meerdere-producten-geslaagd.png)


### Test — Controleoverzicht met vernieuwde winkelwagen

**Doel:**
Controleren of het controleoverzicht correct werkt
met producten uit de centrale JSON-menukaart.

**Teststappen:**
1. Open bestelling.html.
2. Controleer of 4 Cappuccino's aanwezig zijn.
3. Vul geldige klantgegevens in.
4. Klik op Controleer bestelling.
5. Controleer de weergegeven gegevens en producten.

**Verwacht resultaat:**
- Alle klantgegevens worden correct weergegeven.
- De bestelling bevat 4 Cappuccino's.
- Totaalbedrag: € 14,00.
- Eerder verwijderde producten verschijnen niet opnieuw.

**Werkelijk resultaat:**
Het controleoverzicht toont de ingevulde klantgegevens.
De bestelling bevat 4 Cappuccino's.
Het totaalbedrag is € 14,00.
Cheesecake is niet aanwezig.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Controleoverzicht geslaagd](issue56-controleoverzicht-geslaagd.png)


### Test — Winkelwagen leegmaken na bestelling

**Doel:**
Controleren of de winkelwagen wordt leeggemaakt
nadat een bestelling succesvol is geplaatst.

**Teststappen:**
1. Open bestelling.html.
2. Controleer de bestelling met 4 Cappuccino's.
3. Vul geldige klantgegevens in.
4. Klik op Controleer bestelling.
5. Klik op Bestelling plaatsen.
6. Controleer de bedankmelding.
7. Sluit de bedankmelding met OK.
8. Controleer of de winkelwagen leeg is.

**Verwacht resultaat:**
- De bedankmelding verschijnt.
- De winkelwagen wordt leeggemaakt.
- Het totaalbedrag wordt € 0,00.
- De klant kan een nieuwe bestelling beginnen.

**Werkelijk resultaat:**
- De bedankmelding verschijnt correct.
- De 4 Cappuccino's blijven zichtbaar.
- Het totaalbedrag blijft € 14,00.
- De winkelwagen wordt niet leeggemaakt.

**Testresultaat:** Niet geslaagd — bug bevestigd.

**Vervolgactie:**
Onderzoeken hoe de winkelwagen na een succesvolle
bestelling wordt gereset en controleren of ook
sessionStorage wordt leeggemaakt.

**Bewijs:**

![Winkelwagen niet leeg na bestelling](issue56-winkelwagen-niet-leeg-na-bestelling.png)

 
### Hertest — Winkelwagen leegmaken na succesvolle bestelling

**Doel:**
Controleren of de winkelwagen na het plaatsen van
een bestelling wordt leeggemaakt en leeg blijft
na het vernieuwen van de pagina.

**Uitgevoerde correctie:**
In de submitfunctie van bestellen.js is toegevoegd:

sessionStorage.removeItem("winkelwagen");

Hiermee worden opgeslagen winkelwagenproducten
na een succesvolle bestelling verwijderd.

**Teststappen:**
1. Open bestelling.html.
2. Controleer de bestelling met 4 Cappuccino's.
3. Vul geldige klantgegevens in.
4. Controleer de bestelling.
5. Klik op Bestelling plaatsen.
6. Sluit de bedankmelding met OK.
7. Controleer of de winkelwagen leeg is.
8. Vernieuw de pagina met Ctrl + R.
9. Controleer of de winkelwagen leeg blijft.

**Verwacht resultaat:**
- Bedankmelding verschijnt.
- Winkelwagen wordt leeggemaakt.
- Totaalbedrag wordt € 0,00.
- Oude producten verschijnen niet opnieuw na vernieuwen.

**Werkelijk resultaat:**
De bedankmelding verschijnt.
De winkelwagen wordt leeggemaakt.
Het totaalbedrag is € 0,00.
Na vernieuwen blijft de winkelwagen leeg.

**Testresultaat:** Geslaagd — bug opgelost.

**Bewijs:**

![Winkelwagen leeg na bestelling](issue56-winkelwagen-leeg-na-bestelling-geslaagd-.png)
 

### Responsive test — Bestelpagina op 375 px

**Doel:**
Controleren of bestelling.html correct wordt weergegeven
op een mobiel scherm met een breedte van 375 px.

**Testomgeving:**
- Browser: Google Chrome.
- Developer Tools: Responsive Mode.
- Schermbreedte: 375 px.

**Teststappen:**
1. Open bestelling.html.
2. Activeer de mobiele weergave.
3. Stel de schermbreedte in op 375 px.
4. Controleer de header en navigatie.
5. Controleer de klantgegevens en invoervelden.
6. Controleer de productkeuze en het aantalveld.
7. Controleer de winkelwagen en bestelknoppen.

**Verwacht resultaat:**
Alle onderdelen passen binnen de mobiele lay-out.
De invoervelden en knoppen zijn goed zichtbaar.
De vormgeving en sierlijke randen blijven behouden.

**Werkelijk resultaat:**
De header, navigatie en klantgegevens worden
netjes weergegeven.

De productkeuze, het aantalveld en de bestelknoppen
passen binnen het formulier.

Er zijn geen afgeknipte elementen zichtbaar.
De lege winkelwagen toont correct € 0,00.

**Testresultaat:** Geslaagd voor de gecontroleerde
mobiele weergave met lege winkelwagen.

**Bewijs:**

![Bestelpagina mobiel 375 px](issue56-bestelling-mobiel-375px-geslaagd-1.png)(issue56-bestelling-mobiel-375px-geslaagd.png)


### Responsive test — Bestelpagina op 1440 px

**Doel:**
Controleren of het bestelformulier correct wordt
weergegeven op een desktopbreedte van 1440 px.

**Testomgeving:**
- Browser: Google Chrome.
- Developer Tools: Responsive Mode.
- Schermbreedte: 1440 px.

**Teststappen:**
1. Open bestelling.html.
2. Stel de schermbreedte in op 1440 px.
3. Controleer de klantgegevens.
4. Controleer de productkeuze en het aantalveld.
5. Controleer de winkelwagen en bestelknoppen.
6. Controleer de uitlijning en formuliercontainer.

**Verwacht resultaat:**
- Klantgegevens staan netjes in drie kolommen.
- Productkeuze en aantalveld staan naast elkaar.
- Knoppen zijn correct uitgelijnd.
- De formuliercontainer blijft volledig zichtbaar.

**Werkelijk resultaat:**
Het bestelformulier wordt netjes weergegeven.
De invoervelden en knoppen zijn goed uitgelijnd.
De sierlijke formuliercontainer blijft behouden.
De lege winkelwagen toont € 0,00.

**Testresultaat:**
Geslaagd voor het bestelformulier met lege winkelwagen.

**Aandachtspunt:**
Nog controleren of de header op 1440 px geen
horizontale overflow veroorzaakt.

**Bewijs:**

![Bestelpagina desktop 1440 px]
### Responsive test — Bestelpagina op 1440 px

**Doel:**
Controleren of het bestelformulier correct wordt
weergegeven op een desktopbreedte van 1440 px.

**Testomgeving:**
- Browser: Google Chrome.
- Developer Tools: Responsive Mode.
- Schermbreedte: 1440 px.

**Teststappen:**
1. Open bestelling.html.
2. Stel de schermbreedte in op 1440 px.
3. Controleer de klantgegevens.
4. Controleer de productkeuze en het aantalveld.
5. Controleer de winkelwagen en bestelknoppen.
6. Controleer de uitlijning en formuliercontainer.

**Verwacht resultaat:**
- Klantgegevens staan netjes in drie kolommen.
- Productkeuze en aantalveld staan naast elkaar.
- Knoppen zijn correct uitgelijnd.
- De formuliercontainer blijft volledig zichtbaar.

**Werkelijk resultaat:**
Het bestelformulier wordt netjes weergegeven.
De invoervelden en knoppen zijn goed uitgelijnd.
De sierlijke formuliercontainer blijft behouden.
De lege winkelwagen toont € 0,00.

**Testresultaat:**
Geslaagd voor het bestelformulier met lege winkelwagen.

**Aandachtspunt:**
Nog controleren of de header op 1440 px geen
horizontale overflow veroorzaakt.

**Bewijs:**

![Bestelpagina desktop 1440 px](issue56-bestelling-desktop-1440px.png)
### Responsive test — Bestelpagina op 1440 px

**Doel:**
Controleren of het bestelformulier correct wordt
weergegeven op een desktopbreedte van 1440 px.

**Testomgeving:**
- Browser: Google Chrome.
- Developer Tools: Responsive Mode.
- Schermbreedte: 1440 px.

**Teststappen:**
1. Open bestelling.html.
2. Stel de schermbreedte in op 1440 px.
3. Controleer de klantgegevens.
4. Controleer de productkeuze en het aantalveld.
5. Controleer de winkelwagen en bestelknoppen.
6. Controleer de uitlijning en formuliercontainer.

**Verwacht resultaat:**
- Klantgegevens staan netjes in drie kolommen.
- Productkeuze en aantalveld staan naast elkaar.
- Knoppen zijn correct uitgelijnd.
- De formuliercontainer blijft volledig zichtbaar.

**Werkelijk resultaat:**
Het bestelformulier wordt netjes weergegeven.
De invoervelden en knoppen zijn goed uitgelijnd.
De sierlijke formuliercontainer blijft behouden.
De lege winkelwagen toont € 0,00.

**Testresultaat:**
Geslaagd voor het bestelformulier met lege winkelwagen.

**Aandachtspunt:**
Nog controleren of de header op 1440 px geen
horizontale overflow veroorzaakt.

**Bewijs:**

![Bestelpagina desktop 1440 px](issue56-bestelling-desktop-1440px-1.png)(issue56-bestelling-desktop-1440px.png)


### Responsive test — Gevulde winkelwagen op 375 px

**Doel:**
Controleren of meerdere producten correct worden
weergegeven op de mobiele bestelpagina.

**Testomgeving:**
- Browser: Google Chrome.
- Responsive Mode: 375 px.

**Teststappen:**
1. Open bestelling.html op 375 px.
2. Voeg 1 Cappuccino toe.
3. Voeg 1 Cheesecake toe.
4. Controleer de productregels en verwijderknoppen.
5. Controleer het totaalbedrag en de bestelknoppen.

**Verwacht resultaat:**
- Beide producten zijn volledig zichtbaar.
- Verwijderknoppen passen binnen het formulier.
- Cappuccino: € 3,50.
- Cheesecake: € 5,00.
- Totaal: € 8,50.
- Geen afgeknipte onderdelen.

**Werkelijk resultaat:**
Beide producten worden netjes onder elkaar weergegeven.
De verwijderknoppen staan onder de productnamen.
Het totaalbedrag is correct: € 8,50.
De bestelknoppen passen binnen het formulier.
De sierlijke rand blijft behouden.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Gevulde winkelwagen mobiel 375 px](issue56-bestelling-mobiel-375px-gevulde-winkelwagen-1.png)
(issue56-bestelling-mobiel-375px-gevulde-winkelwagen-2.png)
(issue56-bestelling-mobiel-375px-gevulde-winkelwagen-3.png)
(issue56-bestelling-mobiel-375px-gevulde-winkelwagen-4.png)


### Eindcontrole — Desktopheader en horizontale overflow

**Doel:**
Controleren of bestelling.html op 1440 px
geen horizontale overflow veroorzaakt.

**Testomgeving:**
- Browser: Google Chrome.
- Responsive Mode: 1440 px.
- Developer Tools: Console.

**Teststappen:**
1. Open bestelling.html.
2. Stel de schermbreedte in op 1440 px.
3. Controleer de header en navigatie.
4. Voer in de Console de volgende controle uit:

   document.documentElement.scrollWidth >
   document.documentElement.clientWidth

**Verwacht resultaat:**
- De header en navigatie passen binnen de pagina.
- De Console geeft false terug.
- Er is geen horizontale overflow op documentniveau.

**Werkelijk resultaat:**
De volledige header en navigatie zijn zichtbaar.
De Console geeft false terug.
Er is geen horizontale overflow op documentniveau.

**Testresultaat:** Geslaagd.

**Bewijs:**

![Geen horizontale overflow desktop](issue56-desktop-geen-horizontale-overflow-1.png)(issue56-desktop-geen-horizontale-overflow-2.png)


