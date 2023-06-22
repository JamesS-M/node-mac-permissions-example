const { app, BrowserWindow } = require('electron')

const {
    askForScreenCaptureAccess,
    askForAccessibilityAccess,
  } = require("node-mac-permissions");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  askForAccessibilityAccess()
})


app.on('window-all-closed', () => {
    app.quit()
  })