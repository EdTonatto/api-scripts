const Script = require('../models/Script')

module.exports = {
    async index(req, res){
        const scripts = await Script.find()

        return res.json(scripts)
    },

    async store(req, res){
        const {name, content, author} = req.body
        
        const script = await Script.create({
            name, 
            content, 
            author
        })

        return res.json(script)
    }
}