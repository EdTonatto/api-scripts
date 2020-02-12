const {Router} = require('express')
const routes = Router()

const ScripController = require('./controllers/ScriptController')
routes.get('/scripts', ScripController.index)
routes.post('/scripts', ScripController.store)
routes.delete('/scripts/:id', ScripController.destroy)
routes.post('/scripts/:id', ScripController.update)

module.exports = routes