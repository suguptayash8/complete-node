let cars = ["volvo", "maruti", "audi", "bmw", "rr"];

let [first, sec, ...rest] = cars;

const [a, b, ...[c, d]] = cars;

console.log("cars+ " + c + " " + d );

let obj = {
    firstName:"Suyash",
    lastName: "Gupta",
    address:{
        city: "delhi",
        pin: "460111"
    },
    proffesion:{
        designation: "IT",
        tech: ["Java", "React", "Node", "Kafka"]
    }
}

let {
    firstName, lastName
} = obj;

console.log(firstName);
console.log(lastName);

let {
    firstName: FN,
    lastName: SN
} = obj;

console.log("FN+SN " + FN + " " + SN);

let {
    firstName: FName,
    address:{
        city
    },
    proffesion:{
        salary:sal = "3LPA"
    }
} = obj;

console.log("city is " + city + " salary is " + sal);