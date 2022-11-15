"use strict";
//interface in typescript
//similar to types
//loose form of a class
const jai = {
    _id: 23423,
    email: "csdc@email.com",
    userId: 345223,
    startTrial: () => {
        return "trial started";
    },
    endTrial: () => {
        return "end trial";
    },
    getCoupon(couponName, value) {
        return 69;
    }
};
const jia = {
    _id: 23412,
    email: "cs@email.com",
    userId: 346623,
    googleId: "vdvds@gmail.com",
    startTrial: () => {
        return "trial started";
    },
    endTrial: () => {
        return "end trial";
    },
    getCoupon(couponName, value) {
        return 69;
    }
};
console.log(jai);
console.log(jia);
