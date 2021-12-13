const express = require('express')

const route = require('./route')

const path = require('path')

const server = express()

const port = 3000

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.use(express.static('public'))

server.listen(port, () => {
  console.log(`RODANDO NA PORTA ${port}`)
})
