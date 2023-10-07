
/** Must read how new keyworkd work with function and classes in java script
 * 
 * When you use new, it creates a new empty object {}.

It sets the this keyword to point to the newly created object.

It calls the constructor function or the class constructor with the provided arguments. The constructor function or constructor method initializes the object by setting its properties based on the arguments passed in.

Finally, the new operator returns the newly created and initialized object.

It's important to note that using the new operator is typically used when working with constructor functions or classes. If you attempt to use it with a regular function that is not designed to be a constructor, it may not behave as expected, and you might encounter errors.
*/

/** Must read
 * Prototypes are used to define shared properties and methods that can be inherited by multiple objects.
 * prototype for function
 * @param {} name 
 * @param {*} age 
 */

let person = function(name, age){
    this.name = name;
    this.age = age || -1;
     function displayName(){
        console.log("this scoope is within the function"+ this.name);
    }
    displayName();
}

person.prototype.greet = function(){
    console.log(`Hi ${this.name}`);
}

person.prototype.isOldAge = function(){
    if(this.age > 60){
        console.log("is old age ");
    }else if(this.age > 30  && this.age < 60){
        console.log("elder people");
    }else if(this.age > 0) {
        console.log("young generation");
    }
}

const p = new person("Suyash", 31);
const p2 = new person("Aditya", 13);
//p.displayName();
p.greet()
p.isOldAge();

p2.greet();
p2.isOldAge();
