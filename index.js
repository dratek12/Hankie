document.getElementById('input-form').addEventListener('submit', event => {
    event.preventDefault();
    const textInput = event.target.getElementsByTagName('textarea')[0].value;
    const textArray = textInput.split('');
    let textOutput = '';
    textArray.forEach((character, index) => {
        if(index % 2 === 0) {
            textOutput += character.toUpperCase();
        }
        else {
            textOutput += character;
        }
    });
    document.getElementById('text-output').innerText = textOutput;
});