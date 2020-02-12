require('dotenv/config')
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "Hello World!"})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))