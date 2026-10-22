# SNAVA-DEFENCE

Website van SNAVA-DEFENCE, een fictieve defensie-startup die off-grid radiosystemen op een lage frequentieband ontwikkelt. Schoolproject voor Front-end design & development (Avans), gebouwd met HTML, CSS en JavaScript.

**Gemaakt door:** Koen van de Wouw

## Voor wie is de website?

Onze doelgroep bestaat uit defensie-inkopers, met name in de radiosector. Zij zorgen ervoor dat parate eenheden op elke plek ter wereld kunnen communiceren, ook waar geen mobiel netwerk beschikbaar is.

## Wat kan de bezoeker op de website doen?

- De nieuwste producten en technologische ontwikkelingen bekijken.
- Per product de technische specificaties en testrapporten lezen.
- Per product een korte, inhoudelijke video bekijken.
- Producten in een winkelmandje plaatsen en een bestelling plaatsen (demo, er vindt geen echte betaling plaats).

## Wat heeft de bezoeker aan de website?

- **Eerlijke informatie:** specificaties en rapporten worden zonder overdrijving weergegeven, zodat een inkoper direct kan beoordelen of een product geschikt is.
- **Tijdwinst:** geen lange offertetrajecten of eindeloze meetings. De inkoper vindt alles op één plek en kan direct bestellen.

## Motto

*Waar LTE ophoudt, begint SNAVA-DEFENCE.*


## Controle week 1

Beide pagina's (index en producten) in browser getest. Alle nav links in de header en footer werken. De link werkt in beide richtingen en het logo linkt terug naar de homepagina (index) beide pagina's zijn gecheckt met W3C Validator en middels CLAUDE CODE en bevat geen errors of waarschuwingen. Gekozen voor een div in plaats van section bij productenpagina op aanraden van W3C validator. Sections zijn zonder kop dus voor een schermlezer word dit niet aangekondigd.


## Controle week 2

De HTML van index.html en producten.html en het stylesheet code/css/style.css zijn gecontroleerd met de W3C HTML Validator en de W3C CSS Validator. 2 pagina's en de stylesheet bevatten nu geen fouten.

Aangebrachte verbeteringen: het stylesheet is verplaatst naar code/css/ en met een pad op beide pagina's gekoppeld. De navigatielinks staan nu in een <ul>, waarbij de bolletjes met CSS zijn weggehaald. Selectors die niet overeenkwamen met de HTML zijn hersteld. Ook heb ik claude code gevraagd om mij te helpen het kleurenpalet te genereren, omdat ik geen mooi verloop kon vinden.  Claude heeft de volgende kleuren als aanbeveling gegeven: donkerblauwgrijs (#232D3A) als hoofdkleur, een lichte achtergrond (#E3E8EE) en oranjebruin (#C8742B) als accentkleur voor knoppen, prijzen en hover-effecten. Ook heb ik REM-waarde toegepast. Dit is gedaan om de tekst mee te schalen met de instellingen van de bezoeker / gebruiker van de website.

## Ontwerp week 3

Voor wie: defensie-inkopers die met name in de radiosector werken (Sectie 6), deze moeten namelijk snel kunnen beoordelen of een radiosysteem geschikt is voor de gebruiker (parate eenheid).


Pagina's en navigatie: De site heeft een aantal pagina's namelijk: Home, Bedrijf, Producten, Nieuws, Vacatures en Contact. De navigatie staat in de header en wordt nogmaals getoond in de footer. Wanneer een potentiele klant of gebruiker de volledige pagina gelezen heeft, kan hij makkelijk onderaan navigeren zonder terug naar boven te moeten scrollen. Momenteel zijn alleen index.html (home) en producten.html (productenlijst) uitgewerkt. De rest volgt nog later. 

Kleuren: Zoals in week 2 benoemd, heeft Claude Code mij hierin geholpen, de opmaak die er was voelde niet 'vloeiend'. Hierdoor heb ik de keuze gemaakt hulp te vragen aan Claude Code. 
Kleuren zijn als volgt:
#232D3A — hoofdkleur (donkerblauwgrijs) afgeleid van mijn logo. Gebruikt voor de achtergrond van de header en de footer en voor de koppen.
#E3E8EE — achtergrondkleur (lichtgrijsblauw) de basis van de pagina. Bewust niet wit, omdat fel wit op den duur vermoeiend is voor de ogen.
#1F2733 — tekstkleur (bijna zwart) rustiger dan puur zwart en goed leesbaar op de lichte achtergrond.
#FFFFFF — wit:** voor tekst op de donkere header en footer.
#C8742B — accentkleur (oranjebruin) voor knoppen, prijzen en hover-effecten. 

Lettertype: Barlow via Google Fonts, in de diktes 400 en 700. Deze heb ik gekozen, omdat ik het goed vond passen bij het industriele thema van mijn producten. Het geeft het gevoel van andere professionele sites in dezelfde sector, zoals; Rheinnmetall, Lockheed martin, L3Harris Technologies etc.

Leesbaarheid en contrast: Ik heb gekozen voor een witte tekst op de nav, omdat ik hier gebruik maar vna een donkere achtergrond. Dit zorgt er ook voor dat de aandacht nog meer getrokken wordt naar de nav kopjes.
Verder heb ik gekozen voor een lichte achtergrond, maar niet wit. Dit kan na verloop van tijd vermoeiend worden op de ogen. Vanwege deze keuze is de tekst daarom ook "bijna zwart" gemaakt. Deze week heb ik ook als ontwerpverbetering de leesbreedte van de body beperkt, hierdoor worden de regels niet te lang wat onprettig leest.

## Ontwerp week 4

JS met meerdere elementen: Voor deze pagina heb ik gewerkt op de nieuwspagina. Alle h2 koppen worden binnen de main geselecteert met querySelectorAll("main h2"). De eerste functie toont het aantal nieuwsberichten (deze hebben de h> kop gekregen) op de pagina. 
De tweede functie selecteerd met de :not(.oudnieuws) alleen de koppen die de class(.oudnieuws) nog niet hebben en zet die class er met een forEach herhaling per kop erop. De selector is op de main gefocust omdat ik in de footer ook nog h2's heb, hierdoor worden deze niet meegenomen. 

Layoutkeuzes: Het productenoverzicht gedeelte op producten.html gebruikt via CSS een Grid dmv grid-template-columns: repeat(3, 1fr). Dit zorgt ervoor dat de huidige 5 productenblokken even breed zijn maar verdeeld over 3 kolommen. Dit maakt het overzichtelijker om producten te kiezen en heeft de bezoeker / klant meer overzicht. De afbeeldingen heb ik kunnen beperken tot hun grid box middels max width 100%, en height auto. Hierdoor blijft alles netjes in hun vak staan. 


Leesbaarheid en breakpoints: De main is tot maximaal 1200px beperkt en ook gecentreerd. De tekst is daarbij ook nog is beperkt tot maximaal 70ch, ofwel 70 tekens per regel. De productenblokken hebben wel een voledig witte achtergrond, hierdoor 'poppen' ze nog meer van de net niet witte achtergrond.  
Voor breakpoints is gekozen voor een mediaquery op max 700px. Hierdoor schakelt het raster naar 1 kolom ipv 3. (grid-template-columns: 1fr). Door deze toevoeging komen de producten overzichtelijk en leesbaar onder elkaar terecht. Dit is met name bedoelt voor de telefoonbezoeker en past bij het Phonefirst concept uitgelegd in de video. 

## Ontwerp week 5 

If-statements: Op de oefenpagina heb ik if / if else / else gebruikt voor een groet die verandert op basis van de tijd. Met new Date().getHours() lees ik het uur van de gebruiker. is het voor 10:00, dat krijgt de gebruiker de tekst "Goede morgen!".
Voor 20:00 krijgt de bezoeker "Goede middag!" en tussen 20:00 en 10:00 krijgt de bezoeker "Goede avond!". De uitkomst wordt in een variabele (greeting) opgeslagen en met getElementById op de pagina geplaatst. 

Teller met voorwaardes: Een knop telt bij elke klik op 1 op (count += 1) en toont het aantal clicks in een paragraaf. Ook hier bepaalt een if / else if / else welke melding de bezoeker te zien krijgt: "Blijf klikken!", "Bijna!" en "Stop maar hoor!". Hierdoor reageert de pagina op wat de bezoeker doet. 

Filteren met data-attributen: Op producten.html heeft elke productkaart een data-categorie (Draagbaar, stationair of voertuig.) De functie filterPagina(categorie) loopt met forEach langs alle kaarten. Past de categorie bij de knop, of is de keuze alles, dan wordt de class verborgen weggehaald, anders wordt hij toegevoegd. Dit helpt de bezoeker die eventueel een product wilt kopen om een duidelijk overzicht te krijgen naar zijn interesses. Deze functie levert de bezoeker tijdswinst op, daardat hij / zei niet de pagina door hoeft te zoeken.

Paginavulling: De paginas bedrijf en vacatures hebben inhoud gekregen, zodat alle navigatielinks naar een basis uitgewerkte pagina leiden. 

Extra opdrachten week 4 en week 5, pas ik toe wanneer ik volledig bij ben. 


## Ontwerp week 6

Producten uit een array: Op producten.html staan de producten niet meer als "Platte tekst" in HTML, maar in een array in script.js/ Elk product is een object met dezelfde propertynamen: Naam, Categorie, Afbeelding, Omschrijving, Specificaties en Prijs. Hierdoor heof ik alleen nog een object toe te voegen en geen blokken HTML meer te kopieren. In de HTML staat nu alleen nog een lege div met de class productenoverzicht, hier worden de kaarten in geplaatst. Voor de bezoeker verandert er niks, maar voor mij is de pagina nu een stuk makkelijker te onderhouden in het geval van een extra product of verwijdering van een product. 

Herbruikbare functie: De functie maakProductKaart(product) krijgt een product binnen en bouwt hier met document.createElement() een kaart van: Een article met een foto, h2, een omschrijving, een lijst met specificaties en een knop. Alel tekst wordt middels textContent geplaatst en niet met innerHTML, hierdoor wordt data nooit als HTML uitgevoerd. De functie geeft de kaart terug met return. Met een forEach loop ik langs de hele array, roep ik de functie aan en voeg ik elke kaart met appendChild toe aan de container. De specificaties zijn zelf ook met een Array, hiervoor heb ik een tweede forEach gebruikt die er li-elementen van maakt. Elke kaart krijgt ook een data-categorie mee, hierdoor werken de filterknoppen van week 5 nog steeds. 

Oefenpagina: op oefeningen.html heb ik dezelfde techniek eerst apart geoefend met een kleinere array (oefenRadios, drie objecten met een naam en een bereik) en de functie maakOefenKaart. Deze kaarten komen in de container met id oefenkaarten.

Media querys: De container is een CSS grid met auto-fit, waardoor het aantal kolommen meeschuift met de breedte van het scherm. Onder 700px staat er 1 kolom. In dezelfde media query heb ik ook de header en de navigatie aangepast, omdat deze op 375 niet meer paste en werd afgeknipt. De header en de navigatie in de header en foorter klappen nu om (flex-wrap), het logo is kleiner (60 px) en de koppen zijn wat kleiner. De footer heeft ook padding gekregen, zodat de tekst niet meer tegen de rand staat. Ik heb het gecontroleerd op 375, 768 en 1280 px, door gebruik te maken van ctrl + shift + M en er is geen horizontale scrollbar meer.

Controle: Ik heb de console gecheckt, ook na het klikken van meerdere knoppen en geen foutmeldingen.

Hulp van Claude Code: Claude Code heeft me geholpen met uitleg en met het nakijken van met name de mediaquery, omdat de pagina op moebiel niet goed werd weergeven. De code heb ik zelf aangepast en getest.

## Ontwerp week 7 

Fetch API: Op oefeningen.html heb jik voor het eerst data vvan een externe API opgehaald. De bezoeker typt een Pokemon-naam in een invoerveld. De functie fetchData() maakt die naam met toLowerCase() en trim() netjes, zodat hoofdletters en spaties geen fout geven. Daarna wordt met fetch() een verzoek naar de POKEAPI, dit kan even duren daar is de functie async voor die wacht op het antwoord. Met reponse.ok controleer ik of het verzoek gelukt is, zo niet dat gooi ik met een throw een fout. Het antwoord zet ik met response.json() om naar een object, waarna ik de afbeelding (spirtes.front_default) in een img-element plaats en zichtbaar maak.

Fetch API met createElement: In de tweede oefening haal ik 5 posts op van JSONPlaceholder. De functie maakPostkaart(post) werkt op dezelfde manier als maakProductKaart uit week 6. Met document.creatElement() bouw ik een article met een h3 en een p, de tekstwordt geplaatst met textContent en de kaart wordt met return teruggegeven. Met een forEach voeg ik elke kaart met appendChild toe aan de container met id posts. Hierdoor zie je dat dezelfde techniek werkt voor data uit mijn eigen array en voor data van een externe bron. 

Foutafhandeling en status voor de bezoeker: Ophalen via internet kan mislukken, daarom staat de code in een try / catch / finally. Tijdens het laden ziet de bezoeker "Posts worden geladen..." , als het gelukt is hoeveel posts er geladen zijn, en als het misgaat een duidelijke melding in plaats van een lege pagina. Als er geen posts terugkomen, krijgt de bezoeker "Geen post is gevonden". De technische fout schrijf ik met console.error naar de console. De statusparagraaf heeft een aria-live='polite', zodat een schermlezer de melding ook voorleest.

Knop met addEventListener: Er is een knop "Posts opnieuw laden" bijgekomen. Deze is gekoppeld met addEventListener in plaats van onclick in de HTML. Zo blijft de HTML schoon en staat al het gedrag in script.js. Tijdens het laden wordt de knop uitgeschakeld (disabled), zodat de bezoeker niet meerdere keren tegelijk kan klikken. In finally wordt de knop weer aangezet, of het ophalen nu gelukt is of niet. Met replaceChildren() maak ik de container eerst leeg, zodat de posts niet dubbel op de pagina komen. De dark-mode knop heb ik op dezelfde manier omgezet van onclick naar addEventListener.

Hulp van AI: Claude-Code heeft me geholpen met validatie en uitleg van de opdrachten. Claude-Code heeft duidelijke instructies dat hij niet het antwoord geeft maar alleen informatie of waar ik informatie kan vinden met betrekking tot het onderwerp. Ook kijkt hij naar mijn code voor spelfouten, vergeten ; en dergelijke als validatietool. Claude past niks aan in mijn code.