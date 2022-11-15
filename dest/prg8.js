"use strict";
//using "readonly" keyword cannot be mutated
var myUser = {
    _id: "12345",
    name: "Jai Bhalla",
    email: "jai@gmail.com",
    isActive: true
};
console.log(myUser);
myUser.email = "jai03@gmail.com";
console.log(myUser);
const cardDetails = {
    cardnumber: "2344-3453-4232",
    carddate: "12/05",
    cvv: 453,
};
console.log(cardDetails);
