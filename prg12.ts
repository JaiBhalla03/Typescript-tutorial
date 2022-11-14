//enums in typescript

// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
//
// if(seat ==== 0){
//
// }

enum SeatChoice {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE",
    WINDOW = 0,
}

//default is 0, 1 ,2 but can choose the index by ourselves

const hcSeat = SeatChoice.AISLE
console.log(hcSeat)

const enum seat {
    AISLE,
    MIDDLE,
    WINDOW,
}
const Seat = seat.AISLE
console.log(Seat)
