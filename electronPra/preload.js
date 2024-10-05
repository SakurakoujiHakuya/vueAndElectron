const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: ipcRenderer
})
console.log(process)
contextBridge.exposeInMainWorld('process', {
    platform: process.platform,
    master: 'hakuya',
    saveFile: (data) => {
        ipcRenderer.send('save-file', data)
    },
    async readFile(data) {
        return ipcRenderer.invoke('read-file', data)
    }
})

// alert('preload.js')
// console.log(process.platform)