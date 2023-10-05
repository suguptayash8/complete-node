//console.log(b); // cannot acces b before initialization
//console.log(c); // cannot acces b before initialization
//console.log(a); // b is undefined
let b;
var a;
const c = 8;
accessible(); //will print accessible
//newFunc(); // cannot access before initialization
//someOther(); //someother is not a function

function accessible(){
    console.log('accessible');
}

let newFunc = function(){
    console.log('not accesible');
}

var someOther = function(){
    console.log('lets try some new');
}

const x = 1;
{
 //console.log(x); // ReferenceError which shows some form of hoisting is there 
  //as otherwise x shoulde print(1)
  const x = 2;
}