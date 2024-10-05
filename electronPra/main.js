
const { app, BrowserWindow, ipcRenderer, ipcMain } = require('electron')
const path = require('path')
//在根目录写入test.txt文件
const fs = require('fs')
function writeToFile(event, data) {
    fs.writeFileSync('test.txt', data)
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {

            preload: path.join(__dirname, 'preload.js'),

            //下面两行代码是什么意思？
            // 这两行代码通常出现在 Electron 应用的配置文件中，用于配置 BrowserWindow 的选项。具体作用如下：
            //             nodeIntegration: true:
            // 允许在渲染进程中使用 Node.js API。
            // 这意味着你可以在前端代码中直接使用 Node.js 模块，例如 require、fs 等。

            /*             nodeIntegration: true:
            
                        允许在渲染进程中使用 Node.js API。
                        这意味着你可以在前端代码中直接使用 Node.js 模块，例如 require、fs 等。 */

            // 总结：这两行代码使得渲染进程可以直接使用 Node.js API 和 Electron 的 API，但同时也降低了应用的安全性。
            // nodeIntegration: true,
            // contextIsolation: false


        }
    })
    ipcMain.on('save-file', (event, data) => {
        writeToFile(event, data)
    })

    ipcMain.handle('read-file', (event) => {
        return fs.readFileSync('test.txt').toString()
    })

    console.log('i am here  ss')
    win.webContents.openDevTools()
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        console.log('window-all-closed')
        app.quit()
    }
})
