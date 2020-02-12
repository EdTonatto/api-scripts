const mongoose = require('mongoose')

const ScriptSchema = new mongoose.Schema({
    name: String,
    content: String,
    author: String,
})

module.exports = mongoose.model('Script', ScriptSchema)