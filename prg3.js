//understanding types in typescript
var myName = "Jai BHalla";
console.log(myName);
var x = 4324;
console.log(x);
var y = 12345;
var z = true;
console.log(y + " " + z);
var fun = function () {
    return 26;
};
console.log(fun() + 23);
//object types
var printCoord = function (pt) {
    console.log("Coordinate x value is " + pt.x);
    console.log("Coordinate y value is " + pt.y);
};
printCoord({ x: 2, y: 7 });
//optional properties
var printName = function (obj) {
    console.log("First name: " + obj.first);
    console.log("Last name: " + obj.last);
    var el = document.querySelector(".main");
    el.innerHTML = obj.first + " " + obj.last;
};
printName({ first: "JAi" });
printName({ first: "JAi", last: "Bhalla" });
