const express = require('express')
const app = express()
const port = 3000
const userrouter = require('./users')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-from-urlencoded

app.get('/', (req, res) => {
    res.end('Hello World!')
})

app.use(userrouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})