const _ = require('lodash/fp');
const pipe = _.pipe;

const trimFunc = (str) => str.trim();
const wrapInDiv = (tag)=> (str)=> `<${tag}>${str}<${"\\"+ tag}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trimFunc, wrapInDiv("p"), toLowerCase);
console.log(transform("      JavaScript     "));



//////////////////////add function currying///////

function add(a){
    return function(b){
        return a + b;
    }
}

console.log(add(3)(8));