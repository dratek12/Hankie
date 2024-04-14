// Funkce pro náhodné rozhodnutí, zda písmeno má být velké
function isUpperCaseRandom() {
    return Math.random() < 0.50; // 50% pravděpodobnost velkého písmena
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('input-form').addEventListener('submit', event => {
        event.preventDefault();
        const textInput = event.target.getElementsByTagName('textarea')[0].value;
        const textArray = textInput.split('');
        let textOutput = '';
        textArray.forEach((character, index) => {
            if (isUpperCaseRandom()) {
                textOutput += character.toUpperCase();
            } else {
                textOutput += character.toLowerCase();
            }
        });
        document.getElementById('text-output').innerText = textOutput;
    });
    
    const textOutput = document.getElementById('text-output');
    
    textOutput.addEventListener('click', function() {
        copyToClipboard(textOutput.textContent);
    });
    
function copyToClipboard(text) {
    // Nahrazení mezer znakem nového řádku
    const textWithNewlines = text.replace(/ /g, '\n');

    navigator.clipboard.writeText(textWithNewlines).then(function() {
        textOutput.textContent = 'Copied!';
        setTimeout(function() {
            textOutput.textContent = text;
        }, 1500);
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
}
