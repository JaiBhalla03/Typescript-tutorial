"use strict";
//understanding types in typescript
let myName = "Jai BHalla";
console.log(myName);
let x = 4324;
console.log(x);
let y = 12345;
let z = true;
console.log(y + " " + z);
const fun = () => {
    return 26;
};
console.log(fun() + 23);
//object types
const printCoord = (pt) => {
    console.log("Coordinate x value is " + pt.x);
    console.log("Coordinate y value is " + pt.y);
};
printCoord({ x: 2, y: 7 });
//optional properties
const printName = (obj) => {
    console.log("First name: " + obj.first);
    console.log("Last name: " + obj.last);
    let el = document.querySelector(".main");
    el.innerHTML = obj.first + " " + obj.last;
};
printName({ first: "JAi" });
printName({ first: "JAi", last: "Bhalla" });
