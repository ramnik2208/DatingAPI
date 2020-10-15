//henter User model
const User = require('./Model/user')

let userArray = [] 
let User1 = new User('Ramnik', 'Singh', '26', '15');
let User2 = new User('Dilara', 'Ince', '19', '14')

userArray = [User1, User2]

module.exports = userArray