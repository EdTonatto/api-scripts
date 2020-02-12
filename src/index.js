require('dotenv/config')
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(routes)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))