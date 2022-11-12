//understanding types in typescript

let myName: string = "Jai BHalla";
console.log(myName)


let x:any = 4324;
console.log(x);
let y:Number = 12345;
let z:boolean = true;
console.log(y+" "+z);

const fun = ():number =>{
    return 26;
}

console.log(fun()+23);

//object types
const printCoord = (pt:{x: number; y:number}) =>{
    console.log("Coordinate x value is "+pt.x);
    console.log("Coordinate y value is "+pt.y);
}

printCoord({x: 2, y: 7});

//optional properties
const printName =(obj:{first: string; last?:string})=> {
    console.log("First name: " + obj.first);
    console.log("Last name: " + obj.last);
    let el = <HTMLElement> document.querySelector(".main");
    el.innerHTML = obj.first+ " "+obj.last;
}

printName({first: "JAi"});
printName({first: "JAi", last: "Bhalla"});
