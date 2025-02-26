function selectOption(element) {
    // Entferne die "selected"-Klasse von allen Optionen
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected')); 

    // Füge die "selected"-Klasse der angeklickten Option hinzu
    element.classList.add('selected');
}
