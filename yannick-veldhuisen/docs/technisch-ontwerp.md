# Technisch ontwerp – CozyBrew

> **Concept (persoonlijk).** Eigen uitwerking van Yannick, bedoeld om later met het team te vergelijken en samen te voegen in `docs/technisch/`.
> Dit TO beschrijft **hoe** de eisen uit het [functioneel ontwerp](functioneel-ontwerp.md) technisch worden gerealiseerd.

Versie: 0.1 · Laatst bijgewerkt: <!-- datum -->

---

## 1. Gebruikte technieken

| Techniek / tool | Waarvoor | Waarom deze keuze |
|---|---|---|
| HTML5 | Structuur en semantiek | Eis van de opdracht |
| CSS3 | Opmaak en responsive layout | Eis van de opdracht |
| JavaScript (vanilla) | Interactie en dynamische gegevens | Eis van de opdracht: geen frameworks |
| Git + GitHub (Desktop) | Versiebeheer, samenwerken | |
| Visual Studio Code (+ Live Server) | Ontwikkelen en lokaal testen | |
| draw.io | UML-diagrammen | |
| W3C Validator, WAVE, Lighthouse | Controle HTML, toegankelijkheid, prestaties | |

---

## 2. Projectstructuur

Huidige structuur op `main`:

```
README.md
code/
└── css/                    ← bevat alle HTML-pagina's (mapnaam past niet bij de inhoud)
    ├── index.html
    ├── menu.html
    ├── about_us.html
    ├── contact.html
    ├── resevering.html
    ├── werkenbij.html
    ├── css/style.css
    └── javascript/script.js
images/
moodboard/
```

<!-- Gewenste structuur: wordt het bijv. code/index.html + code/css/ + code/js/? Leg de keuze vast in hoofdstuk 9. -->

### 2.1 Naamgeving en codeerafspraken
- Bestandsnamen: <!-- kleine letters, geen spaties, koppelteken of underscore? -->
- Taal van variabelen en functies: <!-- Nederlands of Engels? -->
- Eén extern stylesheet en één extern JS-bestand voor alle pagina's.
- Geen `onclick` in HTML; events via `addEventListener()`.
- Gegevens in de pagina zetten met `textContent`, niet met `innerHTML`.
-

---

## 3. Componenten en verantwoordelijkheden

| Onderdeel | Bestand | Verantwoordelijkheid | Hoort bij requirement |
|---|---|---|---|
| Navigatie (header) | alle HTML-pagina's | Links naar alle pagina's, logo terug naar home | R1, R2 |
| Footer | <!-- --> | Contactgegevens op elke pagina | R3 |
| Typewriter-tekst | `script.js` → `typeWriter()` | Wisselende tekst in de header van Home | <!-- --> |
| Menukaarten | <!-- --> | Producten uit een lijst als kaarten tonen (week 6) | R4 |
| Gegevens ophalen | <!-- --> | Data via `fetch()` laden en tonen (week 7) | R6 |
| | | | |

<!-- In script.js op main staan ook oefenfuncties uit de lessen (berekeninhoud, draaifoto, wisselOpmaak). Besluit: verwijderen of een plek geven. -->

---

## 4. Gegevensstromen en API

<!-- Invullen in week 7. -->

| | |
|---|---|
| Endpoint | <!-- URL --> |
| Welke gegevens | |
| Waarom passend bij het project | |
| Sleutel / rate limit | <!-- geen geheime sleutels in front-end code --> |

### 4.1 Toestanden
| Toestand | Wat ziet de bezoeker? |
|---|---|
| Laden | |
| Gelukt | |
| Leeg resultaat | |
| Fout | |

### 4.2 Sequentiediagram
<!-- Bezoeker → pagina → script.js → API en terug. Invoegen als png. -->

### 4.3 Componentdiagram
<!-- Welke onderdelen (HTML-pagina's, script.js, style.css, API) hangen van elkaar af? -->

---

## 5. UML-overzicht

| Diagram | Week | Bestand | Status |
|---|---|---|---|
| Use-case-diagram | 3 | | ☐ |
| Activiteitendiagram | 5 | | ☐ |
| Sequentiediagram | 7 | | ☐ |
| Componentdiagram | 7 / 14 | | ☐ |
| Klassendiagram | 12 | | ☐ |

---

## 6. Responsiviteit

| Breakpoint | Schermbreedte | Wat verandert er? |
|---|---|---|
| Mobiel | < <!-- px --> | |
| Tablet | | |
| Desktop | | |

<!-- style.css op main heeft nog geen media queries. -->

---

## 7. Toegankelijkheid

- Semantische elementen: `header`, `nav`, `main`, `section`, `footer`.
- Elke afbeelding heeft een beschrijvende `alt`.
- Contrast tekst/achtergrond minimaal 4,5:1 (WCAG AA). <!-- gemeten waarden invullen -->
- Statusmeldingen met `aria-live="polite"` (week 7).
- Elke pagina heeft een eigen `<title>` en `lang="nl"`.
-

---

## 8. Security

- Geen wachtwoorden of geheime sleutels in HTML, JS, commits of README.
- Gegevens van buiten (API, invoer) tonen met `textContent`.
- Invoer in formulieren controleren voordat er iets mee gebeurt.
-

---

## 9. Testaanpak

| Soort test | Hoe | Waar vastgelegd |
|---|---|---|
| HTML/CSS-validatie | W3C Validator | `docs/testing/` |
| Toegankelijkheid | WAVE + handmatig | |
| Responsiveness | DevTools, 320–1920px | |
| Functioneel | Acceptatiecriteria uit het FO | |
| JavaScript | Console + breakpoints | |

---

## 10. Technische keuzes en bekende beperkingen

| Datum | Keuze / beperking | Reden of gevolg |
|---|---|---|
| | Geen back-end in deze module | Reserveringen/bestellingen worden niet echt verwerkt. |
| | | |
