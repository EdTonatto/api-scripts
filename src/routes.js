const {Router} = require('express')
const routes = Router()

const ScripController = require('./controllers/ScriptController')
routes.get('/scripts', ScripController.index)

module.exports = routes