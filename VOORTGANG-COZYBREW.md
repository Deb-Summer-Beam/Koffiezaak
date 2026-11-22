
# COZYBREW — VOORTGANG UPGRADE 1.0

## Projectgegevens
- Project: CozyBrew Upgrade 1.0
- Repositorymap: Koffiezaak-upgrade-1.0
- Huidige branch: debora/cozy-brew-upgrade-1.0
- Werkomgeving: VS Code
- Werkwijze: stap voor stap aanpassen, testen en controleren.
- Belangrijk: niet committen, pushen of mergen voordat alles gecontroleerd is.

## 1. Homepage — uitgevoerd
- Header en knoppen verbeterd.
- Openingstijden compacter gemaakt.
- Dark-Mode en Makkelijker lezen getest.
- Wisselende koffiebanner hersteld en getest.
- Onderste fotocarrousel hersteld.
- Zes ontbrekende afbeeldingen teruggehaald.
- Introductietekst en koppen kleiner en netter gemaakt.
- Typewriter-opmaak verbeterd.
- Homepage en navigatie gecontroleerd.

## 2. Home-knoppen
- Home-links teruggevonden in de securitycheck-branch.
- Een zichtbare Home-knop toegevoegd aan de overige pagina's.
- Alle vijf Home-knoppen getest in de browser: GESLAAGD.
- Bestelling, Contact, Menu, Reservering en Werken bij navigeren correct naar index.html.

## 3. Pagina Over ons
- Besloten dat de pagina niet wordt gebruikt.
- Geen verwijzingen naar about_us.html gevonden in gevolgde projectbestanden.
- code/about_us.html verwijderd met git rm.
- Verwijdering staat klaar voor commit.

## 4. Git-controles
- git diff --check: GESLAAGD.
- Animatie koffieSchuiven gevonden in code/css/style.css.
- Functie wisselKoffieFoto gevonden in code/javascript/script.js.
- Geen verwijzingen naar tijdelijke Issue #55-bestandsnamen gevonden.

## 5. Tijdelijke bestanden
Nog aanwezig:
- code/css/style-backup-before-issue55.css
- homepage-issue55.css
- homepage-issue55.js

Deze bestanden niet meenemen in de uiteindelijke commit.
Eerst veilig controleren en daarna opruimen.

## 6. Afbeeldingen
Zes herstelde afbeeldingen staan nog als untracked in Git.
Deze moeten bij de uiteindelijke commit worden meegenomen.

## 7. Openstaande werkzaamheden
- Home-knoppen definitief controleren.
- Tijdelijke bestanden veilig opruimen.
- Git-status opnieuw controleren.
- Gewenste bestanden selecteren voor commit.
- Laatste functionele controle uitvoeren.
- Pas daarna committen en eventueel pushen.

## 8. Laatste hervatpunt
De controle op verwijzingen naar tijdelijke bestandsnamen is uitgevoerd.
Er zijn geen overeenkomsten gevonden.

HUIDIGE STAP:
Voortgangsbestand VOORTGANG-COZYBREW.md aanmaken en opslaan.

VOLGENDE STAP:
Tijdelijke bestanden veilig opruimen, zonder projectcode of afbeeldingen te verliezen.

## 9. Mijn vaste afspraken
- Eén stap tegelijk.
- Eerst controleren, dan wijzigen.
- Na wijzigingen testen.
- Geen ongevraagde Git-acties.
- Bestaande werkende code beschermen.
- Belangrijke beslissingen en testresultaten in dit bestand bijwerken.

MOOI + WERKEND = HANDEN THUIS!
VS CODE = WERKPLAATS, GITHUB 


## 10. Opmaakverbeteringen en uniforme footer — uitgevoerd

### 10.1 Algemene huisstijl
- De warme bruine en crèmekleurige huisstijl verder doorgevoerd.
- Achtergrondkleuren van de pagina's op elkaar afgestemd.
- Tekstgroottes, witruimte, randen en knoppen verbeterd.
- De bestaande navigatie en werkende functionaliteit behouden.

### 10.2 Contactpagina
- Achtergrond en twee contactkaders aangepast.
- Invoervelden voorzien van lichte achtergrond en bruine randen.
- Verstuurknop aangepast aan de navigatieknoppen.
- E-mailadres bruin, onderstreept en vet weergegeven.

### 10.3 Reserveringspagina
- Formulier en invoervelden visueel verbeterd.
- Ruimte en uitlijning gecontroleerd.
- Focus-visible toegevoegd voor toetsenbordnavigatie.
- Reserveringsknop in de huisstijl gebracht.

### 10.4 Werken bij
- Achtergrondkleur aangepast.
- Te grote koppen en overmatige witruimte verminderd.
- Tekstbreedte en uitlijning verbeterd.
- Teksten compacter en professioneler gemaakt.
- Onderdelen 'Wat zoeken wij?' en 'Zo solliciteer je' verbeterd.
- E-mailadres aangepast aan de bruine huisstijl.

### 10.5 Bestelpagina
- Achtergrondkleur en formulierkader aangepast.
- Formulierrand afgestemd op de navigatieknoppen.
- Sterrenrand dezelfde bruine kleur gegeven.
- Overbodige emoji's verwijderd.
- Invoervelden en knoppen visueel gecontroleerd.
- Bestaande bestelfunctionaliteit behouden voor latere tests.

### 10.6 Uniforme footer
- Footer toegevoegd aan alle zes pagina's.
- Crèmekleurige achtergrond gebruikt.
- E-mailadres links geplaatst: info@cozybrew.nl.
- Copyright gecentreerd: © 2026 CozyBrew.
- Fictief telefoonnummer rechts geplaatst: 06 1234 1234.
- Uitlijning en vormgeving in de browser gecontroleerd.

### 10.7 Git en GitHub
- Zeven gewijzigde bestanden gecontroleerd en gestaged.
- Commit aangemaakt:
  9aa6db8 — CozyBrew Upgrade 1.0: opmaak en footer verbeterd
- Push naar debora/cozy-brew-upgrade-1.0: GESLAAGD.
- GitHub-branchbeveiliging is actief.
- Push is toegestaan via de ingestelde uitzondering.

### 10.8 Nog te doen
- Functionaliteit van de pagina's uitgebreid testen.
- Responsive weergave op verschillende schermformaten controleren.
- Dark-Mode en Makkelijker lezen opnieuw controleren na de opmaakwijzigingen.
- Toegankelijkheid en formuliergedrag controleren.
- Eventuele verbeteringen afzonderlijk uitvoeren en testen.

STATUS: Opmaakverbeteringen en uniforme footer afgerond.
VOLGENDE FASE: Testen en kwaliteitscontrole.


## 11. Testen en kwaliteitscontrole — CozyBrew Upgrade 1.0

### 11.1 Dark-Mode
- Dark-Mode gecontroleerd op alle zes pagina's:
  - Homepage
  - Menu
  - Contact
  - Reservering
  - Werken bij
  - Bestelling plaatsen
- Achtergrondkleuren en contrasten verbeterd.
- Invoervelden op de reserverings- en bestelpagina beter leesbaar gemaakt.
- Tekstkleur van het berichtveld op de contactpagina gecorrigeerd.

STATUS: Geslaagd.

### 11.2 Makkelijker lezen
- De functie Makkelijker lezen op alle zes pagina's getest.
- De functie werkt op alle gecontroleerde pagina's.

STATUS: Geslaagd.

### 11.3 Bestelformulier — JavaScript
- Producten toevoegen aan de winkelwagen getest.
- Aantallen rechtstreeks wijzigen in de winkelwagen toegevoegd.
- Productprijzen en totaalbedrag worden automatisch herberekend.
- Ongeldige aantallen worden afgewezen.
- Product verwijderen na een aantalwijziging getest.
- Controleoverzicht wordt gewist wanneer de bestelling verandert.
- Controleoverzicht kan opnieuw worden opgebouwd met de actuele bestelling.
- Test met meerdere verschillende producten uitgevoerd.
- Emoji's uit de koppen van het controleoverzicht verwijderd.

STATUS: Uitgevoerde tests geslaagd.

### 11.4 Bestelformulier — Vormgeving
- Aantalveld toegevoegd aan iedere winkelwagenregel.
- Aantalvelden compacter gemaakt.
- Winkelwagenregels ingedeeld met CSS Grid.
- Productnamen, aantalvelden en verwijderknoppen uitgelijnd.
- Bestaande vormgeving en kleuren behouden.

STATUS: Desktopweergave gecontroleerd en goedgekeurd.

### 11.5 Knopanimaties
- Zwevende hoverbeweging toegevoegd.
- Gouden Pulse-animatie toegevoegd.
- Klikanimatie toegevoegd.
- Hoverkleur verfijnd met Koninklijk Goud (#D4AF37).
- Animaties toegepast op:
  - Toevoegen aan bestelling
  - Bestelling plaatsen
  - Reservering plaatsen
  - Verstuur op de contactpagina
- Afwijkende hoverkleur van de contactknop gecorrigeerd.

STATUS: Animaties getest en voorlopig goedgekeurd.
VERBETERPUNT: Definitieve kleur- en animatieafwerking kan later plaatsvinden.

### 11.6 Testdocumentatie
- Aantal wijzigen van 1 naar 3 cappuccino's: € 10,50.
- Aantal wijzigen van 3 naar 2 cappuccino's: € 7,00.
- Product verwijderen na aantalwijziging: totaal € 0,00.
- Meerdere producten: 3 cappuccino's en 1 espresso, totaal € 13,00.
- Na verwijderen espresso: totaal € 10,50.
- Screenshots vastgelegd:
  - Test_Aantal_Wijzigen_Voor.png
  - Test_Aantal_Wijzigen_Na.png

STATUS: Uitgevoerde tests geslaagd en screenshots vastgelegd.

### 11.7 Nog te doen
- Responsive weergave op mobiele schermen controleren.
- Winkelwagen met CSS Grid op kleinere schermformaten testen.
- Overige functionele eindtests uitvoeren.
- Formuliergedrag en toegankelijkheid verder controleren.
- Eventuele laatste visuele verbeteringen uitvoeren.
- Git-wijzigingen controleren, committen en pushen naar de eigen branch.

STATUS: Functionele verbeteringen en uitgevoerde controles geslaagd.
VOLGENDE FASE: Responsive eindcontrole en GitHub-update.
