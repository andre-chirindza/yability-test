module.exports = app => {
    const mainController = require('../controllers/main.controller')

    app.get("/", mainController.index)
    app.post("/convert", mainController.convertRoman)
}