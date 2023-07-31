// Funkce pro náhodné rozhodnutí, zda písmeno má být velké
function isUpperCaseRandom() {
    return Math.random() < 0.5; // 50% pravděpodobnost velkého písmena
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
    document.getElementById('text-output').innerText = textOutput;
});
