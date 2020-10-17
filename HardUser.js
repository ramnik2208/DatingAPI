const User = require('./Model/user');
const CreditCard = require('./Model/CreditCard');
const Image = require('./Model/Image');
const Interest = require('./Model/Interest');
const PaymentUser = require('./Model/PaymentUser')


let CreditCard1 = new CreditCard("Ramnik", 7329856483527597, 554, 05, 21)
let CreditCard2 = new CreditCard("Dilara", 2736493758697455, 665, 02, 22)

let Image1 = new Image ("facebook.com/profilepicture")
let Image2 = new Image ("facebook.com/profilepicture")

let Interest1 = new Interest("basketball", 26, "India")
let Interest2 = new Interest("hit people", 21, "Turkey")

let userArray = [] 
let User1 = new User('Ramnik', 'Singh', '26', '15', CreditCard1, Image1, Interest1)
let User2 = new User('Dilara', 'Ince', '19', '14', CreditCard2, Image2, Interest2)

let paidUser1 = new PaymentUser(User1)
let paidUser2 = new PaymentUser(User2)

userArray = [paidUser1, paidUser2]

module.exports = userArray