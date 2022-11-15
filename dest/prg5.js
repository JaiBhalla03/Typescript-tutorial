"use strict";
//functions in typescript
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return "Hello"  -- error message
    return num + 2;
}
console.log(addTwo(2));
const getValue = (myVal) => {
    if (myVal > 5) {
        return true;
    }
    return false;
};
console.log(getValue(5));
console.log(getValue(7));
const heroes = ["Thor", "Iron-man", "Black Panther"];
let i = 0;
heroes.map(hero => {
    i++;
    console.log(`hero is ${i} ${hero}`);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
//using "never" type : types that are never observed
function handleError(errmsg) {
    throw new Error(errmsg);
}
