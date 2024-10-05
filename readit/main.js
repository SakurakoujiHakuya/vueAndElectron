// const { app, BrowserWindow } = require('electron')
import { app, BrowserWindow } from 'electron'//这里很重要啊，之前卡在这里了
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL('http://localhost:5173')
}
app.on('ready', createWindow)