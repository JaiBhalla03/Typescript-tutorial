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
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "";
    }
    return User;
}());
var jai = new User("jaibhalla@email.com", "Jai");
console.log(jai);
jai.city = "Lucknow";
console.log(jai);
//knowing about type modifiers
