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
    },

    async destroy(req, res){
       const id = req.params.id

       Script.findByIdAndDelete(id, function(err){
            if(err)
                res.send(err)
            else
                res.json({script_id: id, message: 'Script deleted!'})
       })
    },

    async update(req, res){
        const id = req.params.id
        const update = req.body

        Script.updateOne({_id: id}, update, function(err){
            if(err)
                res.send(err)
            else{
                Script.update
                res.json({script_id: id, update, message: 'Script updated!'})
            }
        })
    }
}