
const users = require('../HardUser')
const User = require('../Model/user')
const service = require('../service')

function userController(req, res) {
    res.json(users);
}

function addNewUser(req, res) {
    console.log(req.body.lname)
    const user = new User(req.body.fname, req.body.lname)
    users.push(user)
    res.sendStatus(200);
}

function deleteUser(req, res) {
    const fname = req.params.id
    console.log(fname)
    service.removeByAttr(users, 'fname', `${fname}`)
    res.sendStatus(200);
}

module.exports = {
    userController,
    addNewUser,
    deleteUser
}