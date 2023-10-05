function testCall(arg1, arg2, arg3){
    this.name = arg1;
    this.lastName = arg2;
    this.designation = arg3;

    console.log(this);
}

let obj = {
    "external":true
}

testCall.call(obj, "suyash", "gupta", "SE");
testCall.apply(obj, ["suyash", "gupta", "SE"]);
const newFunc  = testCall.bind(obj);
newFunc( "suyash", "gupta", "SE");