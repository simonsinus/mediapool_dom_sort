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
