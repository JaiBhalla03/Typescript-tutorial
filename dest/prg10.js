"use strict";
//unions in typescript
//allows when don't know about the type of the data
let score = 33;
console.log(score);
score = 44;
console.log(score);
score = "55";
console.log(score);
score = true;
console.log(score);
let jai = {
    name: "Jai Bhalla",
    _id: 2432
};
console.log(jai);
jai = {
    username: "jaibhalla03",
    _id: 4353
};
console.log(jai);
const getDBID = (id) => {
    if (typeof id === "string") {
        id = id.toUpperCase();
    }
    console.log(`DB ID is: ${id}`);
};
getDBID("jai");
getDBID(4353);
//making an array contain dfferent type of values
const data = [1, 2, 34, "56", false];
console.log(data);
let seatAllotment = "window";
console.log(seatAllotment);
//seatAllotment = "crew"  error --- message
