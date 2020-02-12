require('dotenv/config')
const express = require('express');
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "Hello World!"})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))