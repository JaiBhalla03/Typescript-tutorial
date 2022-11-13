//using objects in typescript

const user = {
    name: "Jai Bhalla",
    email: "jaibhalla03@gmail.com",
    isActive: true,
}

const createUser =({name: string, isPaid: boolean}) =>{

}



createUser({name: "Jai", isPaid: false})

function createCourse(): {name: string, price: number}{
    return {name: "nextjs", price: 1200}
}

console.log(createCourse())



export {}
