function transformText() {
    const inputText = document.getElementById("input-text").value;
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        if (i % 2 === 0) {
            outputText += inputText[i].toLowerCase();
        } else {
            outputText += inputText[i].toUpperCase();
        }
    }

    document.getElementById("output-text").value = outputText;
}
