
const users = require('../HardUser')
const User = require('../Model/user')

// Remove by attribute func
var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

//hardcoder ny user ud fra model-klasse
//controller
function userController(req, res) {
    res.json(users)
}

function addNewUser(req, res) {
    console.log(req.body.lname)
    const user = new User(req.body.fname, req.body.lname)
    users.push(user)
    res.sendStatus(200)
}

function deleteUser(req, res) {
    const fname = req.params.id
    console.log(fname)
    removeByAttr(users, 'fname', `${fname}`)
    res.sendStatus(200)
}

//eksporter controlleren
module.exports = {
    userController,
    addNewUser,
    deleteUser
}