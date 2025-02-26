let totalPrice = 0;
let selections = {};

function startConfigurator() {
    // Button ausblenden und Step 1 anzeigen
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
}

function selectOption(element, type, value, price) {
    // Markiere die ausgewählte Option und hebe alle anderen hervor
    const selectedOption = element;
    const allOptions = document.querySelectorAll(#step-${getStepNumber(type)} .option);

    allOptions.forEach(option => option.classList.remove('selected'));
    selectedOption.classList.add('selected');
    
    // Speichere die Auswahl und berechne den Preis
    selections[type] = { value, price };
    totalPrice += price;
    updateSummary();

    // Zeige den nächsten Schritt
    showNextStep(type);
}

function getStepNumber(type) {
    switch (type) {
        case 'vehicle':
            return 1;
        case 'media':
            return 2;
        case 'drone':
            return 3;
        case 'photoType':
        case 'locationCount':
            return 4;
        case 'videoType':
            return 4;
        default:
            return 0;
}

function showNextStep(type) {
    let nextStep;
    switch (type) 
        case 'vehicle':
            nextStep = document.getElementById('step-2');
            break;
        case 'media':
            nextStep = document.getElementById('step-3');
            break;
        case 'drone':
            nextStep = document.getElementById('step-4');
            showFotoVideoOptions();
            break;
        case 'photoType':
        case 'locationCount':
            nextStep = document.getElementById('summary');
            break;
        case 'videoType':
            nextStep = document.getElementById('summary');
            break;
        default:
            return;  

    // Verstecke den aktuellen Schritt und zeige den nächsten
    document.querySelector(#step-{getStepNumber(type)}).style.display = 'none';
    nextStep.style.display = 'block';
}

function showFotoVideoOptions() {
    const mediaType = selections['media']?.value;
    if (mediaType === 'Foto') {
        document.getElementById('foto-options').style.display = 'block';
        document.getElementById('video-options').style.display = 'none';
    } else if (mediaType === 'Video') {
        document.getElementById('foto-options').style.display = 'none';
        document.getElementById('video-options').style.display = 'block';
    } else {
        document.getElementById('foto-options').style.display = 'none';
        document.getElementById('video-options').style.display = 'none';
    }
}

function updateSummary() {
    // Aktualisiere die Zusammenfassung der Auswahl
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    for (const [key, selection] of Object.entries(selections)) {
        const li = document.createElement('li');
        li.textContent = key:{selection.value} (Preis: €selection.price);
        summaryList.appendChild(li);
    

    // Gesamtpreis aktualisieren
    document.getElementById('total-price').textContent = Gesamtpreis: €{totalPrice};
}

function confirmOrder() {
    alert('Deine Bestellung wurde bestätigt!');
    // Nach Bestätigung zurück zum Anfang
    window.location.reload();
}
