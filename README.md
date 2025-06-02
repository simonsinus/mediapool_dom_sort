# Mediapool DOM Sort

A REDAXO addon that sorts the media list visually in the DOM using JavaScript.

## Description

This addon enhances the REDAXO media pool by adding a client-side sorting feature. Sorting is done directly in the DOM after page load and is not saved permanently. Ideal for quickly organizing files by name or date.

## Features

- Visual sorting in the backend (media pool)
- No changes to the database
- Default sorting restored on page reload
- Automatically reacts to DOM changes (e.g., via AJAX)

## Installation

1. Copy the repository to `redaxo/src/addons/`:
   ```bash
   git clone https://github.com/youraccount/mediapool_dom_sort.git redaxo/src/addons/mediapool_dom_sort
   ```

2. Activate the addon in the REDAXO backend.

## Technical Details

- Sorting logic implemented in `assets/sort.js`
- Sorts by modification date (column 4) and filename (column 3)
- Uses `MutationObserver` to keep sorting on dynamic changes

## Compatibility

- REDAXO >= 5.0
- Tested with REDAXO 5.13.2
- Supports all modern browsers

## Author

Simon Teufel  
[Teufelgraphics Werbeagentur](https://www.teufel-graphics.de)

## License

MIT License




# Mediapool DOM Sort

Ein REDAXO-Addon zur clientseitigen Sortierung der Medienpool-Tabelle mittels JavaScript.

## Beschreibung

Dieses Addon erweitert den REDAXO-Medienpool um eine clientseitige Sortierfunktion. Die Sortierung erfolgt direkt im DOM nach dem Laden der Seite und bleibt nicht dauerhaft gespeichert. Ideal zur schnellen Übersicht nach Dateinamen oder Änderungsdatum.

## Features

- Sortierung im Backend (Mediapool) per JavaScript
- Keine Eingriffe in die Datenbank
- Rückfall auf ursprüngliche Sortierung nach jedem Reload
- Automatische Sortierung bei DOM-Veränderungen (z. B. durch AJAX)

## Installation

1. Repository in den `redaxo/src/addons/`-Ordner kopieren:
   ```bash
   git clone https://github.com/deinaccount/mediapool_dom_sort.git redaxo/src/addons/mediapool_dom_sort
   ```

2. Addon im REDAXO-Backend aktivieren

## Technische Details

- Die Sortierung erfolgt clientseitig in `assets/sort.js`
- Initial und bei DOM-Änderungen wird die Tabelle nach Änderungsdatum (Spalte 4) und Dateinamen (Spalte 3) sortiert
- Nutzt `MutationObserver`, um auch bei dynamischem Nachladen die Sortierung beizubehalten

## Kompatibilität

- REDAXO ab Version 5.0
- Getestet mit REDAXO 5.13.2
- Unterstützt aktuelle Browser (Chrome, Firefox, Safari, Edge)

## Autor

Simon Teufel  
[Teufelgraphics Werbeagentur](https://www.teufel-graphics.de)

## Lizenz

MIT License

---

> Dieses Addon sortiert visuell – es verändert keine Datenbankinhalte oder Metainformationen.



---

> Note: This addon only affects the visual order in the browser. No database data is changed.
