"use strict";
const message = "Jai BHalla";
console.log(message);
console.log(message.toLowerCase());
console.log(message.toLocaleLowerCase());
const flipCoin = () => {
    let a = Math.random();
    return a;
};
console.log(Math.round(flipCoin() * 10));
