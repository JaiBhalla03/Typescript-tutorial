"use strict";
//type aliases  in typescript
exports.__esModule = true;
function createUser(user) {
    return user;
}
console.log(createUser({ name: "Jai", email: "dsfsd", isActive: false }));
var distance = function (c1, c2) {
    var dis = Math.sqrt(Math.pow((c1.x - c2.x), 2) + Math.pow((c1.y - c2.y), 2));
    console.log("Distance: ".concat(dis));
};
distance({ x: 23, y: 45 }, { x: 67, y: 12 });
