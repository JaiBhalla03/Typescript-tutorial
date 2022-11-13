//type aliases  in typescript

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User){
    return user
}

console.log(createUser({name: "Jai", email: "dsfsd", isActive: false}))


type coordinate ={
    x: number;
    y: number;
}

const distance = (c1: coordinate, c2: coordinate) =>{
    const dis = Math.sqrt(Math.pow((c1.x - c2.x), 2) + Math.pow((c1.y - c2.y), 2))
    console.log(`Distance: ${dis}`);
}

distance({x: 23, y: 45}, {x: 67, y: 12})

export{}