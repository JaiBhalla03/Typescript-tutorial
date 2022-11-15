"use strict";
//enums in typescript
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
//
// if(seat ==== 0){
//
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "AISLE";
    SeatChoice["MIDDLE"] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 0] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
//default is 0, 1 ,2 but can choose the index by ourselves
const hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
const Seat = 0 /* seat.AISLE */;
console.log(Seat);
