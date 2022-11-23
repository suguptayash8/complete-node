const cars1 = ["Saab", "Volvo", ..."BMW"];
const cars2 = ["Fiat", "Toyota"];

const combined = [cars1, ...cars2];


/***
 * destructuring on object
 */

let name = {
    firstName:"",
    lastName:"",

    setFirstNamefName: function(fName){
        this.firstName = fName;
    },
    setLastName: function(lName){
        this.lastName = lName;
    }
}

let user = {
    ...name,
    designation:"",
    setDesignatiion: function(designation){
        this.designation = designation;
    }
}

console.log(user);