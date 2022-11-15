// class User{
//     public email: string
//     private name: string
//     city: string=""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

//this can be written is this way also
class User{
    private _courseCount = 1
    city: string = ""
    constructor(
        public email: string,
        public name: string,
    ) {
    }
    getAppleEmail(): string{
        return `apple${this.email}`
    }
    private deleteToken(){
        console.log("Token deleted");  //only accessible in class
    }

    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNum: number){
        if(courseNum<=1){
            throw new Error("Course should be more than 1");
        }
        this._courseCount = courseNum
    }
}

const jai = new User("jaibhalla@email.com", "Jai");
console.log(jai);
jai.city = "Lucknow";

console.log(jai);

//knowing about type modifiers

//getters and setters in ts
