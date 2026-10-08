# Functioneel ontwerp – CozyBrew

> **Concept (persoonlijk).** Eigen uitwerking van Yannick, bedoeld om later met het team te vergelijken en samen te voegen in `docs/ontwerp/`.
> Product = de website op `main` (`code/css/`).
> Dit FO beschrijft **wat** de website voor de bezoeker doet. Het **hoe** staat in [technisch-ontwerp.md](technisch-ontwerp.md).

Versie: 0.1 · Laatst bijgewerkt: <!-- datum -->

---

## 1. Doel, doelgroep en afbakening

### 1.1 Doel
<!-- 2–4 zinnen: wat moet de website voor CozyBrew bereiken? Bijv. bezoekers vooraf laten zien wat er te koop is, wat het kost en hoe ze een tafel reserveren of contact opnemen. -->

### 1.2 Doelgroep
<!-- Wie is de bezoeker? Verwijs naar de persona's in het ondernemingsplan in plaats van ze te kopiëren.
Let op: persona 1 (Erik) in de huidige versie gaat over "diensten" en past nog niet bij een koffiezaak. -->

### 1.3 Binnen de scope
<!-- Wat doet de website wél? -->
-

### 1.4 Buiten de scope
<!-- Wat doet de website (in deze module) níet? Bijv. inloggen, echte betalingen, back-end/database. -->
-

---

## 2. Requirements en prioriteiten (MoSCoW)

Must = moet erin · Should = belangrijk, niet strikt nodig · Could = als er tijd over is · Won't = bewust niet (nu).

| ID | Requirement | Waarom nodig? | Prioriteit | Acceptatiecriterium |
|---|---|---|---|---|
| R1 | De bezoeker kan vanaf iedere pagina naar de homepagina. | Eenvoudig terugkeren. | Must | Iedere pagina bevat een werkende link naar `index.html`. |
| R2 | De navigatie is op desktop en mobiel duidelijk zichtbaar. | Toegankelijkheid. | <!-- --> | Menu werkt op 320px t/m 1920px schermbreedte. |
| R3 | Contactgegevens zijn altijd vindbaar. | Minder zoekwerk. | <!-- --> | Footer bevat telefoonnummer en e-mail op alle pagina's. |
| R4 | <!-- menu met producten en prijzen --> | | | |
| R5 | <!-- reserveren? --> | | | |
| R6 | <!-- gegevens ophalen via API (week 7) --> | | | |
| R7 | | | | |

<!-- R1–R3 komen uit hoofdstuk 6 van het ondernemingsplan. R4 "laadt binnen 2 seconden" (Lighthouse) is daar ook genoemd; besluit of je die houdt. -->

---

## 3. Gebruikers en use-cases

### 3.1 Actoren
| Actor | Omschrijving |
|---|---|
| Bezoeker | <!-- --> |

### 3.2 Use-case-diagram
<!-- Tekenen in draw.io: één actor "bezoeker" verbonden met 3–5 doelen (werkwoord eerst).
Opslaan als .drawio + .png en hier invoegen:
![Use-case-diagram](uml/usecase.png) -->

### 3.3 Use-case-beschrijvingen

#### UC1 – Menu bekijken
| | |
|---|---|
| Actor | Bezoeker |
| Doel | <!-- --> |
| Startsituatie | <!-- --> |
| Stappen | 1. <br>2. <br>3. |
| Resultaat | <!-- --> |
| Uitzonderingen | <!-- bijv. gegevens laden mislukt --> |

#### UC2 – Tafel reserveren
| | |
|---|---|
| Actor | Bezoeker |
| Doel | |
| Startsituatie | |
| Stappen | 1. <br>2. <br>3. |
| Resultaat | |
| Uitzonderingen | |

#### UC3 – Contact opnemen
| | |
|---|---|
| Actor | Bezoeker |
| Doel | |
| Startsituatie | |
| Stappen | 1. <br>2. <br>3. |
| Resultaat | |
| Uitzonderingen | |

### 3.4 Activiteitendiagram
<!-- Voor de route met echte logica (reserveren of bestellen). Debora heeft er al één voor bestellen op `debora/next-gen` (`docs/uml/activiteit_bestelling .drawio`). -->

---

## 4. Sitemap

Huidige pagina's op `main`:

```
index.html (Home)
├── menu.html (Menu)
├── about_us.html (Over ons)       ← nog niet in de navigatie
├── contact.html (Contact)
├── resevering.html (Reservering)  ← link vanaf Home wijst naar "reservering.html"
└── werkenbij.html (Werken bij)
```

<!-- Pas aan na de MoSCoW-keuzes: welke pagina's blijven, welke vervallen, welke komen erbij? -->

---

## 5. Wireframes en interactie

Per pagina: wireframe (mobiel + desktop), wat de bezoeker er kan doen en wat er gebeurt.

| Pagina | Wireframe | Inhoud | Interactie |
|---|---|---|---|
| Home | [home page wireframe.png](../design/wireframes/home%20page%20wireframe.png) | <!-- --> | Typewriter-tekst in de header |
| Menu | <!-- --> | | |
| Over ons | | | |
| Contact | | | |
| Reservering | | | |
| Werken bij | | | |

---

## 6. Content

| Content | Waar op de site | Bron | Wie houdt dit bij? |
|---|---|---|---|
| Producten en prijzen | Menu | <!-- README / JSON / API --> | |
| Openingstijden | | | |
| Contactgegevens | Contact + footer | | |
| Afbeeldingen | | `images/` | |

<!-- Sluit aan op het informatieplan (hoofdstuk 4 van het ondernemingsplan). -->

---

## 7. Functionele acceptatiecriteria

<!-- Hoe controleer je dat de website als geheel doet wat dit FO beschrijft? Koppel aan de requirements (R1, R2 …) en aan het testoverzicht. -->

| Requirement | Test | Resultaat | Bewijs |
|---|---|---|---|
| R1 | | | |

---

## 8. Keuzes en wijzigingen

| Datum | Keuze of wijziging | Reden |
|---|---|---|
| | Product = website op `main` (versie van Koen). | |

---

## Bronnen en verwijzingen
- Ondernemingsplan en informatieplan: `docs/project/ondernemingsplan-en-informatieplan.md`
- Moodboard: `moodboard/moodboard.png`
- Testoverzicht: `docs/testing/deel1-testoverzicht.md`
