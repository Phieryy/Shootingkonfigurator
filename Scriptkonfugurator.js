`javascript
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const summaryText = document.getElementById('summary-text');

    // Funktionsweise für die Auswahl der Optionenconst getSelections = () => {
        const vehicle = document.querySelector('input[name="vehicle"]:checked')?.value || 'Nicht ausgewählt';
        const types = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value).join(', ') || 'Nicht ausgewählt';
        const shootings = Array.from(document.querySelectorAll('input[name="shooting"]:checked')).map(input => input.value).join(', ') || 'Nicht ausgewählt';
        const locations = document.querySelector('input[name="locations"]:checked')?.value || 'Nicht ausgewählt';
        const options = Array.from(document.querySelectorAll('input[name="options"]:checked')).map(input => input.value).join(', ') || 'Keine';

        return `
            Fahrzeug: vehicle<br>
            Art der Aufnahmen:{types}<br>
            Art der Aufnahme: shootings<br>
            Anzahl der Locations:{locations}<br>
            Zusätzliche Optionen: ${options}
        `;
    };

    // Funktion zum Anzeigen der Auswahl im Summary
    submitButton.addEventListener('click', () => {
        const selectionSummary = getSelections();
        summaryText.innerHTML = selectionSummary;
    });
});
```