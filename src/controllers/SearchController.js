const Script = require('../models/Script');

module.exports = {
    async index(req, res){
        const scripts = await Script.find({
            $or: [
                {
                    name: { 
                        '$regex' : req.query.q, 
                        '$options' : 'i' 
                    }
                },
                {
                    author: {
                        '$regex' : req.query.q, 
                        '$options' : 'i' 
                    }
                }
            ]
        });

        return res.json(scripts);
    }
}