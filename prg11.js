//tuples in typescript
//array with some restriction
//const user: (string | number)[] = ['jai', 1]  -- in array format
var TUser;
TUser = ["jai", 19, true];
console.log(TUser);
var rgb = [255, 240, 100];
console.log(rgb);
var newStudent = ["Jai", 19];
console.log(newStudent);
//in typescript tuple can be modified
console.log("name: ".concat(newStudent[0], " \t age: ").concat(newStudent[1]));
newStudent[0] = "John";
console.log("name: ".concat(newStudent[0], " \t age: ").concat(newStudent[1]));
