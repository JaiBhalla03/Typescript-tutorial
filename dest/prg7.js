"use strict";
//type aliases  in typescript
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
console.log(createUser({ name: "Jai", email: "dsfsd", isActive: false }));
const distance = (c1, c2) => {
    const dis = Math.sqrt(Math.pow((c1.x - c2.x), 2) + Math.pow((c1.y - c2.y), 2));
    console.log(`Distance: ${dis}`);
};
distance({ x: 23, y: 45 }, { x: 67, y: 12 });
