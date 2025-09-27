document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');
    const pasteButton = document.getElementById('pasteButton');
    const clearButton = document.getElementById('clearButton');
    const undoButton = document.getElementById('undoButton');
    const inputCharCounter = document.getElementById('inputCharCounter');
    const outputCharCounter = document.getElementById('outputCharCounter');
    const inputWordCounter = document.getElementById('inputWordCounter');
    const outputWordCounter = document.getElementById('outputWordCounter');
    const inputLineCounter = document.getElementById('inputLineCounter');
    const outputLineCounter = document.getElementById('outputLineCounter');

    let lastText = "";
    const MAX_CHARS = 1000000000;

    function processText(text) {
        if (!text || typeof text !== 'string') return '';
        return text.replace(/\s+/g, ' ').trim().substring(0, MAX_CHARS);
    }

    function countWords(text) {
        if (!text.trim()) return 0;
        return text.trim().split(/\s+/).length;
    }

    function countLines(text) {
        return text.split(/\n/).length;
    }

    function updateCounters() {
        const inputLength = inputText.value.length;
        const outputLength = outputText.value.length;

        inputCharCounter.textContent = `${inputLength} caracteres`;
        outputCharCounter.textContent = `${outputLength} caracteres`;

        inputWordCounter.textContent = `${countWords(inputText.value)} palavras`;
        outputWordCounter.textContent = `${countWords(outputText.value)} palavras`;

        inputLineCounter.textContent = `${countLines(inputText.value)} linhas`;
        outputLineCounter.textContent = `${countLines(outputText.value)} linhas`;

        inputCharCounter.classList.remove('warning', 'error');
        outputCharCounter.classList.remove('warning', 'error');

        if (inputLength > MAX_CHARS) inputCharCounter.classList.add('error');
        else if (inputLength > MAX_CHARS * 0.9) inputCharCounter.classList.add('warning');

        if (outputLength > MAX_CHARS) outputCharCounter.classList.add('error');
        else if (outputLength > MAX_CHARS * 0.9) outputCharCounter.classList.add('warning');
    }

    inputText.addEventListener('input', () => {
        const rawText = inputText.value;
        if (rawText.length > MAX_CHARS) {
            inputText.value = rawText.substring(0, MAX_CHARS);
        }
        outputText.value = processText(inputText.value);
        updateCounters();
    });

    copyButton.addEventListener('click', () => {
        if (!outputText.value) {
            showNotification('⚠️ Nenhum texto para copiar!', 'warning');
            return;
        }
        outputText.select();
        document.execCommand('copy');
        showNotification('✅ Texto copiado com sucesso!', 'success');
    });

    pasteButton.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (!text) throw new Error('Área de transferência vazia');
            
            lastText = inputText.value;
            inputText.value = text;
            outputText.value = processText(text);

            updateCounters();
            showNotification('📋 Texto colado!', 'success');
        } catch (err) {
            showNotification(`❌ Erro ao colar: ${err.message}`, 'error');
        }
    });

    clearButton.addEventListener('click', () => {
        if (!inputText.value) {
            showNotification('⚠️ Nenhum texto para limpar!', 'warning');
            return;
        }
        lastText = inputText.value;
        inputText.value = '';
        outputText.value = '';
        updateCounters();
        showNotification('🗑️ Texto limpo!', 'success');
    });

    undoButton.addEventListener('click', () => {
        if (lastText === '') {
            showNotification('⚠️ Nada para desfazer!', 'warning');
            return;
        }
        inputText.value = lastText;
        outputText.value = processText(lastText);
        updateCounters();
        showNotification('↩️ Desfeito!', 'success');
    });

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.className = `notification show ${type}`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', () => notification.remove(), { once: true });
        }, 2000);
    }

    updateCounters();
});
