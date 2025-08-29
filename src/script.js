document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    const MAX_CHARS = 1000000; 

    function processText(text) {
        if (!text || typeof text !== 'string') return '';
        return text
            .replace(/\s+/g, ' ') 
            .trim() 
            .substring(0, MAX_CHARS); 
    }

    inputText.addEventListener('input', () => {
        const rawText = inputText.value;
        if (rawText.length > MAX_CHARS) {
            inputText.value = rawText.substring(0, MAX_CHARS);
        }
        const processedText = processText(inputText.value);
        outputText.value = processedText;
        updateCharCounters();
    });


    outputText.addEventListener('click', () => {
        outputText.select();
    });

    updateCharCounters();
});