//number

let id: number = 34325;
//or
let id1 = 32434.32;
id1.toFixed()

let is: boolean = true;
console.log(is.valueOf());

//"any" keyword to get away from the syntax of typescript
let hero: string;

function getHero(){
    return "pikachu";
}

hero = getHero();

//any isn't type-checked

//defining functions in typescript
function addTwo(num: number){
    //num.toUpperCase();  --- error message!
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase();
}

console.log(addTwo(2));
console.log(getUpper("jai"));


function signUp(name: string, userName: string, password: string, isPaid: boolean){
    console.log(`name: ${name} username: ${userName} isPaid: ${isPaid}`);
}

signUp("Jai", "jaibhalla2003", "firebolt", true);
