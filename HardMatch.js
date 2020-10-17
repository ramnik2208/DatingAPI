const Match = require('./Model/Match')
const users = require('./HardUser')

let matchOne = new Match(users[0], users[1])
let matchArray = []
matchArray.push(matchOne)
module.exports = matchArray;