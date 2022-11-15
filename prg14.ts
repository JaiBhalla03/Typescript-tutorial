
interface Person{
    readonly _pin: number
    name: string
    age: number
    email?: string
    account(): number
}

//reopening the interfaces
interface Person{
    githubUserName: string
}

const Jai: Person = {
    _pin: 34,
    name: "jai",
    age: 19,
    email: "vdv@gmail.com",
    account(): number{
        return 324343;
    },
    githubUserName: "JaiBhalla2003",
}

console.log(Jai)

//inheritance in interface

interface Admin extends Person{
    role: "admin" | "ta" | "learner"
}

const John: Admin = {
    _pin: 34,
    name: "jai",
    age: 19,
    email: "vdv@gmail.com",
    account(): number{
        return 324343;
    },
    githubUserName: "JaiBhalla2003",
    role: "admin"
}

console.log(John)
