const {Router} = require('express')
const routes = Router()

routes.get('/', (req, res) => {
    res.send({message: "API-Scripts is running!"})
})

const ScriptController = require('./controllers/ScriptController')
routes.get('/scripts', ScriptController.index)
routes.post('/scripts', ScriptController.store)
routes.delete('/scripts/:id', ScriptController.destroy)
routes.post('/scripts/:id', ScriptController.update)

const SearchController = require('./controllers/SearchController')
routes.get('/search', SearchController.index)

module.exports = routes