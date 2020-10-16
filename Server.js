//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000

server.use(express.json())

//henter controller fra sti
const userController = require('./Controller/userController.js')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')
const matchController = require('./Controller/matchController')
const interestController = require('./Controller/interestController')

//henter middleware
const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'
server.get('/', userController.userController)

server.get('/protected', ensureToken,  protectedController)

server.get('/match', matchController)

server.get('/interest', interestController)

server.post('/login', loginController)

server.post('/user', userController.addNewUser)

server.delete('/delete/:id', userController.deleteUser)

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})