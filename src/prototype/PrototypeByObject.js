
const myObject = {
    city: "Madrid",
    greet(par) {
      console.log("Greet Method is executed with param " + par);
      console.log(`Greetings from ${this.city}`);

    },
    test: function(){
        console.log('test function executed');
    }
  };
  
  myObject.greet(); // Greetings from Madrid
  console.log(JSON.stringify(Object.getPrototypeOf(myObject)));


  const otherObj = Object.create(myObject);
  
  
  
  /**
   * it has  inherited the properties of myObject 
   */
  
  otherObj.greet('suyash');
  otherObj.test();
  console.log(otherObj.city);