const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

const PORT = 3000

app.db = db

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})