"use strict";
//functions in typescript
exports.__esModule = true;
function addTwo(num) {
    //return "Hello"  -- error message
    return num + 2;
}
console.log(addTwo(2));
var getValue = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
};
console.log(getValue(5));
console.log(getValue(7));
var heroes = ["Thor", "Iron-man", "Black Panther"];
var i = 0;
heroes.map(function (hero) {
    i++;
    console.log("hero is ".concat(i, " ").concat(hero));
});
function consoleError(errmsg) {
    console.log(errmsg);
}
//using "never" type : types that are never observed
function handleError(errmsg) {
    throw new Error(errmsg);
}
