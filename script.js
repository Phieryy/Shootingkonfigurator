let totalPrice = 0;
let selections = [];

function selectOption(element, type, value, price) {
    // Markiere die ausgewählte Option
    const selectedOption = element;
    const allOptions = document.querySelectorAll(#step-${getStepNumber(type)} .option);

    allOptions.forEach(option => option.classList.remove('selected'));
    selectedOption.classList.add('selected');
    
    // Speichere die Auswahl und berechne den Preis
    selections[type] = { value, price };
    totalPrice += price;
    updateSummary();
    showNextStep(type);
}

function getStepNumber(type) {
    switch (type) {
        case 'vehicle':
            return 1;
        case 'media':
            return 2;
        case 'drone':
            return 3;
        case 'photoType':
        case 'locationCount':
            return 4;
        case 'videoType':
            return 4;
        default:
            return 0;
    }
}

function showNextStep(type) {
    let nextStep;
    switch (type) {
        case 'vehicle':
            nextStep = document.getElementById('step-2');
            break;
        case 'media':
            nextStep = document.getElementById('step-3');
            if (selections['media'] === 'Foto') {
                document.getElementById('foto-options').style.display = 'block';
                document.getElementById('video-options').style.display = 'none';
            } else {
                document.getElementById('foto-options').style.display = 'none';
                document.getElementById('video-options').style.display = 'block';
            }
            break;
        case 'drone':
            nextStep = document.getElementById('step-4');
            break;
        case 'photoType':
        case 'locationCount':
            nextStep = document.getElementById('summary');
            break;
        case 'videoType':
            nextStep = document.getElementById('summary');
            break;
    }

    if (nextStep) {
      nextStep.style.display = 'block';
    

function updateSummary() 
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = ”;
    Object.keys(selections).forEach(key => 
        if (selections[key]) 
            const listItem = document.createElement('li');
            listItem.textContent = {key.charAt(0).toUpperCase() + key.slice(1)}: selections[key].value - €{selections[key].price};
            summaryList.appendChild(listItem);
        }
    });

    document.getElementById('total-price').textContent = Gesamtpreis: €${totalPrice};
}

function confirmOrder() {
    alert('Deine Bestellung wurde bestätigt! Vielen Dank!');
}
