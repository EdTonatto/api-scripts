const {Router} = require('express')
const routes = Router()

const ScriptController = require('./controllers/ScriptController')
routes.get('/scripts', ScriptController.index)
routes.post('/scripts', ScriptController.store)
routes.delete('/scripts/:id', ScriptController.destroy)
routes.post('/scripts/:id', ScriptController.update)


module.exports = routes