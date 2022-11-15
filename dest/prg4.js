"use strict";
//number
let id = 34325;
//or
let id1 = 32434.32;
id1.toFixed();
let is = true;
console.log(is.valueOf());
//"any" keyword to get away from the syntax of typescript
let hero;
function getHero() {
    return "pikachu";
}
hero = getHero();
//any isn't type-checked
//defining functions in typescript
function addTwo(num) {
    //num.toUpperCase();  --- error message!
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(2));
console.log(getUpper("jai"));
function signUp(name, userName, password, isPaid) {
    console.log(`name: ${name} username: ${userName} isPaid: ${isPaid}`);
}
signUp("Jai", "jaibhalla2003", "firebolt", true);
