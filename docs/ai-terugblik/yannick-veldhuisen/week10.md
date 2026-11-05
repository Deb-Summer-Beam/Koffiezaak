# AI terugblik week 1-10
AI heeft mij erg geholpen met het bijhouden, bijwerken en uitleggen van huiswerk/projectwerk. Hieronder een aantal concrete voorbeelden voor uitleg, suggesties en automatisering. 

## Eigen gebruik van AI
### Uitleg
- Hoe scope werkt. Een functie *in* een functie kan nog steeds de buitenste `let` zien en gebruiken, maar een functie kan niet *in* een andere functie kijken naar de variabelen die daarin gedeclareerd zijn. Ik heb nu een redelijk goed beeld waar en wanneer ik waardes kan gebruiken die niet binnen een functie zijn aangemaakt.
- Verschillende CSS-selectors zoals `.` vs `#` vs `:` en hoe `a .p` verschilt van `a p`. 
- Koens Python script (voor het converteren van onze .md bestanden naar PDF) om de PR beter te kunnen beoordelen. Ik kan geen Python schrijven, maar dankzij de uitleg begrijp ik in grote lijnen wel wat het script doet en waarom libraries nodig zijn.

### Suggesties
- Huiswerkplanning: wanneer ik met schoolwerk begin krijg ik een taak voorgesteld die ik moet maken. Dit kan het huiswerk zijn voor de aankomende week, maar hier zitten ook review requests, herhalingen van oude stof (spaced repetition) en het verwerken van gh issues tussen. Het scheelt mij enorm veel stress en tijd dat ik op deze manier geen opdrachten kan vergeten.
- Bij het schrijven van onderdelen in het TO laat ik AI mijn eigen tekst checken, en krijg ik suggesties voor bijvoorbeeld fouten (omwisselen van `<html>` met `<body>` in de uitleg), onafgemaakte zinnen, of simpelweg typefouten. Dit verbetert mijn output en voorkomt dat mijn teamgenoten deze fouten later moeten aanpassen. 

### Geautomatiseerd
- Oefenbestanden: om stof te herhalen is één van de stappen een soort 'fill in the gaps' oefening. Een voorbeeld kan zijn het schrijven van een HTML-bestand. Het eerste bestand mist een aantal woorden, het tweede bestand een aantal zinnen en het derde bestand is compleet leeg. AI creëert deze bestanden met de lege secties en een uitleg over de opdracht. Dit scheelt mij vooral tijd en ik kan direct eerder geleerde stof herhalen. Achteraf wordt mijn werk ook gecontroleerd en krijg ik 'passed' of 'not passed' terug, waar de volgende herhalingsdatum mee wordt bepaald. 
- Om wat makkelijker in de stof te blijven en lesstof conceptueel te herhalen gebruik ik Gemini Notebook om podcasts te laten maken. Deze gebruik ik ook als voorbereiding op het individueel gedeelte van het project, waar ik de code moet kunnen uitleggen uit onze repo. 'Context switching' met een baan die totaal niet bezig is met code schrijven kost constant wat extra moeite bij het starten van schoolwerk. Doordat ik in de auto al kan luisteren naar de lesstof, bijvoorbeeld vanuit werk naar huis, merk ik dat ik sneller en makkelijker begin met huiswerk/projectwerk.

### Minder behulpzaam
- Soms gaat AI te snel uit van aannames of oude kennis, waardoor suggesties qua taken die gemaakt moeten worden niet kloppen. Context en duidelijke aanwijzingen vanuit de gebruiker lost dit in de meeste gevallen wel op.
- Een kleine oefening van JavaScript die ik volgens AI in 20 minuten zou kunnen doen, kostte mij uiteindelijk meer dan een uur. Ook hier zijn context, regels en duidelijke aanwijzingen de oplossing. Om dit specifieke probleem op te lossen heeft elk onderwerp (fetch, HTML, CSS, async functies, etc.) een stapsgewijze progressie. Stap 1 heeft een makkelijker soort opdracht dan stap 6. 

## Teamgebruik van AI

- De foto's in `index.html` en `menu.html` zijn gegenereerd met ChatGPT en elk gecheckt of de afbeelding voldoet aan onze style en correcte item. 
- Uitleg van bepaalde delen van de code en waarom deze wel of niet werkten. Vervolgens werken we zelf de code uit voor het project.
- JavaScript bestanden checken. W3C validator checkt enkel HTML en CSS. 
- Spelfouten in documentatie FO, TO, ondernemingsplan. 
- Initiële versie CSS van de PDF-converter. We hebben deze openlijk gemaakt met AI, maar getest bij het beoordelen van de PR. Hier zijn dan ook verschillende punten uitgekomen om te verbeteren (zelf geconstateerd), met specifieke suggesties voor Python en CSS (gemaakt door AI).