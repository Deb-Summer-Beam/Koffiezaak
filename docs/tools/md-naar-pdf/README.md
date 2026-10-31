# md naar pdf converter

Zet een Markdown bestand (`.md`) om naar een PDF in de CozyBrew-style,
Logo bovenaan, Comic neue-lettertype en de kleuren uit het moodboard. 

## Wat heb je nodig om de pdf converter te gebruiken?

- **Python 3** 
- **Microsoft Edge** (Staat standaard op windows)
- Het pakket **markdown** eenmaal installeren met:

```
python -m pip install markdown
```

## Gebruik

Open een terminal in de hoofdmap van het project (`koffiezaak`) en typ: 
```
python docs/tools/md-naar-pdf/md_naar_pdf.py "persona/persona 1.md"
```

`persona/persona 1.md` is een voorbeeld, dit moet vervangen worden met het `.md` bestand die je wilt converteren naar `.pdf`

De PDF komt langs de .md file te staan in de documentenlijst. 

De titel vobenaan de PDF komt uit de bestandsnaam.

## Hoe werkt het?

1. Het script leest het `.md` bestand in.
2. Het pakket `markdown` zet de tekst om naar HTML.
3. Die HTML komt in een template met het logo en `cozybrew.css`, en wordt opgeslagen als `test.html` in deze map.
4. Edge opent `test.html` onzichtbaar (daar is het headless voor) en print het als PDF.

`test.html` wordt elke keer opnieuw gemaakt en staat in `.gitignore`.

## Opmaak aanpassen

Alle opmaak staat in `cozybrew.css`. De kleuren staan bovenaan als variabelen in `:root`:

| Variabele        | Kleur     | Gebruik             |
|------------------|-----------|---------------------|
| `--bruin-donker` | `#4B2915` | tekst en koppen     |
| `--creme`        | `#EAD8BE` | lichte vlakken      |
| `--beige`        | `#D5B797` | kop met logo        |
| `--karamel`      | `#b9804f` | randen en lijnen    |
| `--olijf`        | `#7A8450` | accentkleur         |


Verandert de style van Cozybrew, dan moeten deze variabelen ook aangepast worden. Het python script kan blijven staan.

## In de toekomst werken met `.md` files

- Gebruik ## voor kopjes in plaats van **vetgedrukt**, dan krijt het een schonere / juiste opmaak. 
- Tabellen werken ook:

```
| Gegeven  | Waarde  |
|----------|---------|
| Gender   | Man     |
| Leeftijd | 21 - 40 |
```

Tabellen worden als volgt gemaakt:

1. **Kopregel:** zet de namen van de kolommen tussen verticale strepen `|`.
2. **Scheidingsregel:** zet daaronder per kolom minstens drie streepjes `---`, ook tussen `|`.
   Hiermee weet Markdown dat de regel erboven de kopregel is.
3. **Rijen:** elke volgende regel is een rij, weer met `|` tussen de cellen.

Let op:

- Elke rij moet evenveel kolommen hebben als de kopregel.
- Zet een lege regel boven en onder de tabel, anders wordt hij niet herkend.
- De streepjes hoeven niet netjes onder elkaar te staan. Dit werkt ook:

```
| Gegeven | Waarde |
|---|---|
| Gender | Man |
```

- Tekst uitlijnen doe je met `:` in de scheidingsregel:
  `|:---|` links, `|:---:|` midden, `|---:|` rechts.

In de PDF krijgt de kopregel een donkerbruine achtergrond met crème tekst,
en elke tweede rij een crème streep.

## Bekende beperkingen

- Werkt alleen op **Windows**: het pad naar Edge staat vast in het script. (Linux werkt niet)
- Eén bestand per keer.
- Afbeeldingen in je `.md`-bestand worden nog niet meegenomen.

## Bestanden

| Bestand          | Wat                                                  |
|------------------|------------------------------------------------------|
| `md_naar_pdf.py` | het script                                           |
| `cozybrew.css`   | de opmaak van de PDF                                 |
| `probeer.py`     | oefenbestand: eerste test met `subprocess` (Kladblok) |
| `.gitignore`     | zorgt dat `test.html` en `test.pdf` niet in git komen |