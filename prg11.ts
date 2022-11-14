//tuples in typescript

//array with some restriction
//const user: (string | number)[] = ['jai', 1]  -- in array format

let TUser: [string, number, boolean]
TUser = ["jai", 19, true]

console.log(TUser)

let rgb: [number, number, number] = [255,240, 100]
console.log(rgb)

type Student = [string, number]

let newStudent: Student = ["Jai", 19]
console.log(newStudent)

//in typescript tuple can be modified

console.log(`name: ${newStudent[0]} \t age: ${newStudent[1]}`)
newStudent[0] = "John"
console.log(`name: ${newStudent[0]} \t age: ${newStudent[1]}`)