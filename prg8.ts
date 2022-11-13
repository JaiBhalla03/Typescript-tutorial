//using "readonly" keyword cannot be mutated

type User={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

var myUser: User = {
    _id: "12345",
    name: "Jai Bhalla",
    email: "jai@gmail.com",
    isActive: true
};

console.log(myUser)
myUser.email = "jai03@gmail.com";
console.log(myUser)

//myUser._id = "sdcsd";  error -- message cannot be changed


//learning to combine two types in typescript
type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    carddate: string;
}

type cardDetails = cardNumber & cardDate &{
    cvv: number;
}

const cardDetails: cardDetails = {
    cardnumber: "2344-3453-4232",
    carddate: "12/05",
    cvv: 453,
}

console.log(cardDetails)

