//interface in typescript
//similar to types
//loose form of a class

interface UserDetail {
    readonly _id: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial:  ()=>string
    endTrial(): string
    getCoupon(couponName: string, value: number): number
}

const jai: UserDetail = {
    _id: 23423,
    email: "csdc@email.com",
    userId: 345223,
    startTrial: ()=>{
        return "trial started"
    },
    endTrial: ()=>{
        return "end trial"
    },
    getCoupon(couponName: "jai", value: 12): number {
        return 69;
    }
}

const jia: UserDetail = {
    _id: 23412,
    email: "cs@email.com",
    userId: 346623,
    googleId: "vdvds@gmail.com",
    startTrial: ()=>{
        return "trial started"
    },
    endTrial: ()=>{
        return "end trial"
    },
    getCoupon(couponName: "jia", value: 12): number {
        return 69;
    }
}

console.log(jai)
console.log(jia)