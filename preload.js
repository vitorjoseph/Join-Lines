const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    copyText: (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
    },
});