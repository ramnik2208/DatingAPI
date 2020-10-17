const hardMatch = require('../HardMatch')
const Match = require('../Model/Match')
const users = require('../HardUser')
const service = require('../service')

function matchController(req, res) {
    res.json(hardMatch)
}

function addMatch(req, res) {
    const match = new Match(users[0], users[1])
    hardMatch.push(match)
    res.sendStatus(200);
}

function deleteMatch(req, res) {
    delete hardMatch[0] 
    res.sendStatus(200);
}

module.exports = {
    matchController,
    addMatch,
    deleteMatch
}

