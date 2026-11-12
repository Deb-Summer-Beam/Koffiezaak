# AI-terugblik week 1–10 — Koen

Ik heb AI gebruikt om lesstof uitgelegd te krijgen, gemaakte opdrachten bij te houden, mij te herinneren aan openstaande opdrachten en mijn code te controleren op syntax- en spelfouten. De AI-tools die ik gebruik, zijn Claude Code, ChatGPT en VS Code-Copilot.

Claude Code gebruik ik als mijn belangrijkste AI-tool vanwege de goede reputatie op het gebied van het schrijven en begrijpen van code. Ik heb Claude Code ook gekoppeld aan VS Code. Daardoor kan de tool gemakkelijk zien wat ik aanpas en waar eventuele fouten staan, zonder dat ik steeds code hoef te kopiëren en in de chat te plakken.

ChatGPT heb ik met name gebruikt voor het genereren van afbeeldingen, met behulp van prompts die Claude Code had opgesteld. De productafbeeldingen moesten bijvoorbeeld allemaal dezelfde stijl hebben en bij het algemene thema van onze website passen. Daarom heb ik Claude Code gevraagd hiervoor een prompt te schrijven, omdat de tool de volledige codebase kan lezen en het moodboard kan bekijken.

VS Code-Copilot heeft mij geholpen bij het aanvullen van de code die ik aan het typen ben. Daarbij merk ik wel dat ik de tool regelmatig uitzet, omdat er anders te veel wordt voorgezegd. Daardoor denk ik minder zelf na en begrijp ik de code minder goed.

## Eigen gebruik van AI

### Uitleg

AI heeft mij vooral uitleg gegeven over de koppeling tussen HTML, CSS en JavaScript. Ik had moeite met het aanspreken van de juiste elementen en het gebruiken van de juiste variabelen. AI heeft mij geholpen dit te begrijpen door voorbeelden te geven en mij te laten oefenen. Achteraf werden mijn antwoorden gecontroleerd en kreeg ik uitleg over eventuele fouten.

Hierdoor begrijp ik beter hoe HTML, CSS en JavaScript samenwerken en hoe ik vanuit JavaScript de juiste HTML-elementen kan aanspreken.

### Suggesties

Omdat mijn rol binnen het team developer is, kijk ik de code na voordat deze naar `main` gaat. Ik heb AI gebruikt om ingeleverd werk te controleren. Zo wees AI mij bij de controle van `reservering.html` van Deborah op het gebruik van `innerHTML` en stelde de tool voor om voor gewone tekst `textContent` te gebruiken. Zelf had ik daar nog niet aan gedacht.

### Geautomatiseerd

Mijn voortgang laat ik door AI bijhouden. Ik heb een keer ingelogd op Brightspace, zodat de tool kon bekijken wat er iedere week van mij wordt verwacht. Op basis van die informatie en het werk dat ik maak, houdt AI mijn voortgang bij en geeft de tool aan welke opdrachten nog ontbreken of aandacht nodig hebben.

### Minder behulpzaam

Ik merkte dat AI niet altijd goed inschatte hoeveel tijd ik voor opdrachten nodig had. Ik gaf bijvoorbeeld aan dat ik om 18.00 uur wilde stoppen met leren en daarvoor nog een bepaald aantal oefeningen of opdrachten wilde afronden. Vervolgens kreeg ik oefeningen die volgens AI gemakkelijk binnen die tijd te maken waren. Na één opdracht was het echter al 18.30 uur. Er werd dus niet altijd voldoende rekening gehouden met mijn programmeerervaring.

In het begin had ik ook moeite om AI zo aan te sturen dat de tool mij hielp bij het leren, zonder meteen het volledige antwoord te geven. Om dit op te lossen, heb ik een Markdown-bestand (`.md`) gemaakt met duidelijke instructies:

- Informatie moet afkomstig zijn van W3C of MDN, tenzij de benodigde informatie daar niet te vinden is. Dit kwam bijvoorbeeld voor bij het maken van de PDF-converter. Daarvoor kreeg ik informatie van python.org.
- Ik moet de informatie zelf opzoeken en doorlezen. Vervolgens maak ik een samenvatting en stuur ik die in de chat. Zo kan ik controleren of ik de stof goed heb begrepen. Als ik iets nog niet begrijp, krijg ik een duwtje in de juiste richting.
- AI moet als docent optreden. Alles moet worden uitgelegd en de tool mag er niet van uitgaan dat ik iets volledig begrijp nadat ik het één keer heb gedaan.
- De tijdsinschatting van AI bepaalt niet hoeveel opdrachten ik moet afronden. In plaats daarvan spreek ik een stoptijd af en zet ik zelf een wekker. Ik vraag AI om aan het einde te noteren waar we zijn gebleven, zodat we de volgende keer verder kunnen gaan.
- AI heeft duidelijke instructies om zelf niets aan te passen in VS Code. Ik typ altijd alles zelf. 

Na het aanscherpen van deze instructies werkte deze aanpak een stuk beter.

## Teamgebruik van AI

- De foto's in `index.html` en `menu.html` zijn gegenereerd met ChatGPT. Iedere afbeelding is gecontroleerd op aansluiting bij onze stijl en op de juiste weergave van het product.
- We hebben AI gebruikt om uitleg te krijgen over delen van de code en waarom deze wel of niet werkten. Vervolgens werkten we de code zelf uit voor het project.
- We hebben AI gebruikt om JavaScript-bestanden te controleren, omdat de gebruikte W3C-validators alleen HTML en CSS controleren.
- We hebben AI gebruikt om spelling te controleren in het functioneel ontwerp (FO), het technisch ontwerp (TO) en het ondernemingsplan.
- De eerste versie van de CSS voor de PDF-converter is met AI gemaakt. Dit hebben we binnen het team aangegeven. Bij het beoordelen van de pull request (PR) hebben we het resultaat zelf getest en verbeterpunten vastgesteld. Vervolgens hebben we AI gebruikt voor specifieke suggesties voor Python en CSS.
- De feedback uit week 9 is met behulp van AI verwerkt tot issues in het format van week 11. Ik heb zelf met zo'n issue gewerkt (#22). Door de vaste opbouw, met een aanleiding, checklist en afbakening, was voor mij duidelijk wat er van mij werd verwacht.