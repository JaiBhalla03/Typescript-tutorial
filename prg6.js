"use strict";
//using objects in typescript
exports.__esModule = true;
var user = {
    name: "Jai Bhalla",
    email: "jaibhalla03@gmail.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({ name: "Jai", isPaid: false });
function createCourse() {
    return { name: "nextjs", price: 1200 };
}
console.log(createCourse());
