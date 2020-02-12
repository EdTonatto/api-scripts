const Script = require('../models/Script')

module.exports = {
    async index(req, res){
        const scripts = await Script.find()

        return res.json(scripts)
    }
}