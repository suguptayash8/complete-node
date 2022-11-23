/**
 * In object having funcrion this refers to object properties 
 */

const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };

// expected output: 42

  //This with prototype chain.
  /**
   * prototype are not part of this as seen in below code
   */

  const obj1 = {fName: "suyash"};

  const obj3 = {
    __proto__: obj1,
    name: "obj3",
    getThis:function(){
        return this;
    }
  };
  console.log(obj3.getThis()); //OUTPUT { name: 'obj3', getThis:[Fynction] }


  /**
   * THIS WITH NEW 
   */
  function C() {
    this.a = 37;
  }

  let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38

/***
 * this with bind
 */

 function f() {
    return this.a;
  }
  
  const g = f.bind({ a: "azerty" });
  console.log(g()); // azerty
  
  const h = g.bind({ a: "yoo" }); // bind only works once!
  console.log(h()); // azerty