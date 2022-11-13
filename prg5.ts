//functions in typescript

function addTwo(num: number): number{
    //return "Hello"  -- error message
    return num+2;
}

console.log(addTwo(2))

const getValue = (myVal: number): boolean =>{
    if(myVal>5){
        return true;
    }
    return false;
}

console.log(getValue(5));
console.log(getValue(7));

const heroes = ["Thor", "Iron-man", "Black Panther"];
let i: number = 0;
heroes.map(hero=>{
    i++;
    console.log(`hero is ${i} ${hero}`)
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}


//using "never" type : types that are never observed
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
// consoleError("Hye!");
// handleError("Hye!");


export{}