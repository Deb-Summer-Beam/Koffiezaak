# Ondernemingsplan en Informatieplan

## 1. Probleem en projectdoel


Bij veel koffiezaken kom je binnen en sta je vervolgens lang in de rij, voor een zitplek of voor je koffie, thee of iets anders uit het assortiment. Ook als je een vraag hebt over een product of iets anders, sta je lang in de rij of wacht je dagen op een digitaal antwoord. Daarnaast komt het online menu vaak niet overeen met de werkelijkheid. Omdat het menu regelmatig verandert, loopt de website achter en staan er producten op die in de winkel niet meer verkrijgbaar zijn.

Met onze website willen we de klant de mogelijkheid geven om een zitplek te reserveren, zodat de klant zeker weet dat er plaats is. Ook kan de klant vooraf een product bestellen en direct zien wanneer de bestelling klaarstaat, zonder onverwacht in een lange rij te staan. Voor vragen over producten of andere zaken bieden we twee manieren om snel antwoord te krijgen: een contactformulier en een AI-chatbot die direct antwoord geeft op vragen, bijvoorbeeld over allergieën. Het menu is eenvoudig aan te passen via een JSON-bestand. Daarin kan de beheerder snel nieuwe producten toevoegen en oude producten verwijderen, zonder dat daar programmeerervaring voor nodig is. Zo blijft het menu altijd actueel.


## 2. Doelgroep en persona

De doelgroep van Cozy Brew bestaat uit mensen met een druk leven, zoals (deeltijd)studenten en werkenden met een veeleisende baan. Ze willen vooraf snel zien wat Cozy Brew te bieden heeft en zonder gedoe hun koffie kunnen bestellen of een plek kunnen reserveren. Kwaliteit, duurzaamheid en een gezellige plek om even tot rust te komen vinden ze belangrijk.

### 2.1 Persona 1: Erik Pieterson
 
**Naam en rol:** Erik Pieterson, bezoeker van de website die zijn bestelling wil afhalen.  
**Situatie:** Erik is 28 jaar en volgt naast zijn fulltime baan een deeltijdopleiding aan Avans Hogeschool in Breda. Hij heeft een partner en een hond. Net voordat zijn les begint, kijkt Erik op de website van Cozy Brew of hij nog snel koffie kan halen.  
**Doel:** Vóór zijn les snel koffie bestellen, zodat die klaarstaat als hij bij Cozy Brew aankomt.  
**Belangrijkste behoefte:** Eenvoud. In zijn drukke leven wil Erik zonder zoeken bij de juiste informatie komen. Een duidelijke en overzichtelijke lay-out helpt hem daarbij: hij wil binnen 2 klikken of tikken in het menu zijn.  
**Mogelijke belemmering:** De website geeft na het bestellen geen bevestiging. Erik weet dan niet of zijn bestelling is gelukt en plaatst misschien twee keer dezelfde bestelling. Een volgende keer bestelt hij liever via een andere website, waar hij wel een bevestiging krijgt.  
**Wat de website eenvoudig moet maken:** Een bestelformulier (`bestelling.html`) waarin hij zijn bestelling en eventuele wensen of opmerkingen kan doorgeven, en daarna direct een bevestiging ziet.  
**Ontwerpkeuze:** Op elke pagina staat in de navigatie de link "Bestelling plaatsen" naar `bestelling.html`, zodat Erik vanaf elke pagina direct naar de bestelpagina kan.

### 2.2 Persona 2: Sophie van Dijk

**Naam en rol:** Sophie van Dijk, bezoeker van de website die vooraf het menu bekijkt.  
**Situatie:** Sophie is 31 jaar, woont samen en werkt 32 tot 40 uur per week als marketingmedewerker bij een communicatiebureau in de Randstad. Ze begint haar werkdag graag met een kop koffie, werkt af en toe een uurtje in een koffiezaak of spreekt er af met vrienden. Kwaliteit, duurzaamheid en een gastvrije sfeer vindt ze belangrijk, en daar betaalt ze graag iets meer voor.  
**Doel:** Vooraf het menu bekijken om te zien welke koffie Cozy Brew heeft, wat het kost en of er plantaardige melk is.  
**Belangrijkste behoefte:** Duidelijke en eerlijke informatie: wat er op het menu staat, wat het kost, waar de bonen vandaan komen en of er wifi en stopcontacten zijn als ze wil blijven werken.  
**Mogelijke belemmering:** Informatie die ontbreekt of niet klopt, zoals een product dat online staat maar in de zaak niet te krijgen is. Dan kiest ze voor een andere koffiezaak.  
**Wat de website eenvoudig moet maken:** Op de menupagina (`menu.html`) in één oogopslag zien welke dranken er zijn, met prijzen en opties zoals plantaardige melk, en in de footer de openingstijden en of er wifi is.  
**Ontwerpkeuze:** Bij elk product op het menu staan de prijs en de opties (zoals plantaardige melk), en duurzame keuzes krijgen een herkenbaar icoon.


## 3. Productidentiteit en moodboard

Drie woorden: Rustig, Betrouwbaar, Modern

Toelichting     

Rustig: Zachte kleuren, veel witruimte en een eenvoudige lay-out.

Betrouwbaar: Strakke typografie, consistente iconen en duidelijke structuur.

Modern: Ronde vormen, subtiele schaduwen en een frisse accentkleur.

Het moodboard staat in: docs/ontwerp/week03-moodboard.png.

## 4. Informatieplan

Informatie 1: Dienstenoverzicht	
Voor wie: Bezoeker
Bron: Opdrachtgever
Waar gebruikt?: Home Pagina		
Wie houdt dit bij?: Opdrachtgever 
Informatie 2: Contact gegevens
Voor wie: Bezoeker
Bron: Opdrachtgever
Waar gebruikt?: Contact Pagina + Footer
Wie houdt dit bij?: Opdrachtgever
Informatie 3:Openingstijden
Voor wie: Bezoeker
Bron: Opdrachtgever
Waar gebruikt?: Contact Pagina
Wie houdt dit bij?: Eigenaar van de website
Informatie 4: Introductie tekst
Voor wie: Bezoeker
Bron: Opdrachtgever
Waar gebruikt?: Home Pagina
Wie houdt dit bij?: Team
			
				
				
## 5. Huidige en gewenste werkwijze

### 5.1 Huidige werkwijze (contact opnemen)

-Bezoeker zoekt contactgegevens op verschillende pagina’s.
-Contactgegevens staan soms in een document.
-Bezoeker moet scrollen om het juiste onderdeel te vinden.
-Bezoeker belt of mailt, maar mist soms belangrijke informatie.

### 5.2 Gewenste werkwijze via de website

-Contactgegevens staan altijd zichtbaar in de footer en de contact paginas.
-De contactpaginas tonen telefoonnummer, e-mail en openingstijden in een aparte blad.
-De website verwerkt geen gegevens, maar toont alle benodigde informatie duidelijk.
-De bezoeker hoeft niet te zoeken: alles staat op één plek.

## 6. Eerste eisen en acceptatiecriteria

### 6.1 Eis: De bezoeker kan vanaf iedere pagina naar de homepagina
- Waarom nodig?: Om eenvoudig terug te keren.
- Acceptatiecriterium: Iedere pagina bevat een werkende link naar index.html.

### 6.2 Eis: De navigatie is op desktop en mobiel duidelijk zichtbaar.
-Waarom nodig: Toegankelijkheid.
-Acceptatiecriterium: Menu werkt op 320px t/m 1920px schermbreedte.

### 6.3 Eis: Contactgegevens zijn altijd vindbaar.
-Waarom nodig: Minder zoekwerk.
-Acceptatiecriteria: Minder zoekwerk.	Footer bevat telefoonnummer en e-mail op alle pagina’s.

### 6.4 Eis: De website laadt binnen 2 seconden.
-Waarom nodig: Gebruiksvriendelijkheid.
-Acceptatiecriteria: Lighthouse-test toont laadtijd ≤ 2s.


## 7. Start testoverzicht

Het testoverzicht staat in docs/testing/deel1-testoverzicht.md.

## 8. Globale planning

### 8.1 Week 3–4 Basisstructuur website + moodboard, wireframes, ondernemingsplan
- Verdeling: Team.
-Controle: Review door projectleider en commit.
### 8.2 - Week 5–7 Pagina’s vullen, responsive menu's, JS, navigatie afronden.
-verdeling: Team.
-Controle: Test-overzicht bijwerken.
### 8.3 - Week 8-10	Verbeteringen, responsive design, eerste use-cases.
- Verdeling: Team.
-Controle: Eindcontrole + commit.

## 9. Eerste use-case-overzicht

Rol: Bezoeker

Doelen:

-Informatie zoeken

-Contact opnemen

-Diensten bekijken

Diagram opgeslagen als:

docs/uml/Home-koffie.svg

docs/uml/Specialiteiten-koffie.svg

## 10. Controle en vastleggen

Plan sluit aan op projectbeschrijving en wireframes.

Doelgroep, persona en productidentiteit passen bij elkaar.

Informatie heeft duidelijke bron en toepassing.

Werkwijze is helder beschreven.

Eisen hebben controleerbare acceptatiecriteria.

Testoverzicht bevat uitgevoerde tests.

Planning is haalbaar.

Use-case-overzicht bevat rol en doelen.

Verwijzingen naar bestanden werken.

Alles is gecommit en gepusht naar de teamrepository.