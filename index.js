document.addEventListener('DOMContentLoaded', function() {
    // Funkce pro náhodné rozhodnutí, zda písmeno má být velké
    function isUpperCaseRandom() {
        const probability = Math.random(); // Náhodné číslo mezi 0 a 1
        if (probability < 0.50) {
            return false; // 50% pravděpodobnost malého písmene
        } else if (probability < 0.90) {
            return true; // 40% pravděpodobnost velkého písmena (50% - 90%)
        } else if (probability < 0.95) {
            return false; // 5% pravděpodobnost malého písmene (90% - 95%)
        } else {
            return true; // 5% pravděpodobnost velkého písmena (95% - 100%)
        }
    }

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
        document.getElementById('text-output').textContent = textOutput; // Změna použití na textContent
    });
    
    const textOutput = document.getElementById('text-output');
    
    textOutput.addEventListener('click', function() {
        copyToClipboard(textOutput.textContent);
    });
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            textOutput.textContent = 'Copied!';
            setTimeout(function() {
                textOutput.textContent = text; // Použití původního textu
            }, 1500);
        }, function(err) {
            console.error('Failed to copy: ', err);
        });
    }
});
