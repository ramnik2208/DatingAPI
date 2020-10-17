const express = require('express')
const server = express()
const port = 3000

server.use(express.json())


const userController = require('./Controller/userController.js')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')
const matchController = require('./Controller/matchController')
const interestController = require('./Controller/interestController')


const ensureToken = require('./Middleware/ensureToken')

server.get('/', userController.userController)

server.get('/protected', ensureToken,  protectedController)

server.get('/match', matchController.matchController)

server.post('match', matchController.addMatch)

server.delete('/match/delete/:id', matchController.deleteMatch)

server.get('/interest', interestController.interestController)

server.post('/interest', interestController.addInterest)

server.delete('/interest/delete/:id', interestController.deleteInterest)

server.post('/login', loginController)

server.post('/user', userController.addNewUser)

server.delete('/delete/:id', userController.deleteUser)


server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})