"use strict";
//using objects in typescript
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Jai Bhalla",
    email: "jaibhalla03@gmail.com",
    isActive: true,
};
const createUser = ({ name: string, isPaid: boolean }) => {
};
createUser({ name: "Jai", isPaid: false });
function createCourse() {
    return { name: "nextjs", price: 1200 };
}
console.log(createCourse());
