const express = require('express')

const server = express()
const views  = __dirname + '/views/'
const PORT   = process.env.PORT || 5000

server.use(express.static(`${__dirname}/public`))

server.get('/', (req, res) => res.sendFile(`${views}index.html`))

server.listen(PORT)