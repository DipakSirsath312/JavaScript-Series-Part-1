// Data types of javaScript summary.

// 1.Primitive
// types :- String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.20
const isLoggedIn = false
const outsideTem = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 655218623014945997521575n;
console.log(bigNumber);
console.log(typeof outsideTem); //object


// 2.Refference (Non Primitive)
// Array, Objects, Functions.

const heros = ["shaktiman","nagraj","doga"];
const myObj = {
    name : "Dipak",
    age : 22,
    Add : "At_post_Khetia",
}

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunc); //function