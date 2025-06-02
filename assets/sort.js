window.addEventListener('load', () => {
    const table = document.querySelector('#rex-page-mediapool-media table.table');
    if (!table) return;

    const ths = table.querySelectorAll('thead th');
    const tbody = table.querySelector('tbody');

    if (!tbody || ths.length < 4) {
        console.warn("mediapool_dom_sort: Tabelle nicht gefunden oder unvollständig.");
        return;
    }

    let sortIndex = -1;
    let sortAsc = true;

    const columnExtractors = {
        2: row => {
            // Spalte 3: Dateiname aus dem letzten <p>
            const td = row.children[2];
            const ps = td.querySelectorAll('p');
            const lastP = ps[ps.length - 1];
            return lastP?.textContent.trim() || '';
        },
        3: row => {
            // Spalte 4: Datum aus .rex-date
            const el = row.children[3]?.querySelector('.rex-date');
            return el?.textContent.trim() || '';
        }
    };

    ths.forEach((th, index) => {
        if (!(index in columnExtractors)) return;

        th.style.cursor = 'pointer';
        th.title = 'Sortieren';

        th.addEventListener('click', () => {
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const isSameIndex = sortIndex === index;
            sortAsc = isSameIndex ? !sortAsc : true;
            sortIndex = index;

            const getVal = columnExtractors[index];

            rows.sort((a, b) => {
                const valA = getVal(a);
                const valB = getVal(b);
                return valA.localeCompare(valB, undefined, { numeric: true }) * (sortAsc ? 1 : -1);
            });

            rows.forEach(row => tbody.appendChild(row));
        });
    });

    console.log("mediapool_dom_sort: Sortierung aktiviert");
});
