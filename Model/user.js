//definerer model-klasse for User
class User {
    constructor(fname, lname, age, password) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.password = password
    }
}

//eksporter user
module.exports = User;