//arrays in typescript
const superHeroes: string[] = []

superHeroes.push("spider-man")
console.log(superHeroes)

const heroPower: number[] = []
heroPower.push(200)
console.log(heroPower)

type Person = {
    name: string;
    isActive: boolean;
}

const allUser: Person[] = []
allUser.push({name: "Jai", isActive: true})
allUser.push({name: "John", isActive: false})
console.log(allUser)

const MLModels: number[][] = [
    [23,45,56],
    [45,67,34],
    [45,32,78],
]

console.log(MLModels)

