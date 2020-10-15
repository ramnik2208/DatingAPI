//definerer model-klasse for User
class User {
    constructor(fname, lname, age, password, creditcard, image, interest) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.password = password;
        this.creditcard = creditcard;
        this.image = image;
        this.interest = interest;
 
    }
}

//eksporter user
module.exports = User;