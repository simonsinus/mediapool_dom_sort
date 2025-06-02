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

---

> Note: This addon only affects the visual order in the browser. No database data is changed.
