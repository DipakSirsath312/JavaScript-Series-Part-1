//Number ant Mathsin javaScript.
 
const score = 400;
//console.log(score);

const balance = new Number(400);
//console.log(balance);

// Methods
// console.log(balance.toString()); // toString method
// console.log(balance.toFixed(2)); // toFixed method

const anotherNumber = 123.4567;
//console.log(anotherNumber.toPrecision(4)); // toPrecision

const value = 10000000;
//console.log(value.toLocaleString()) // toLocaleString method
//console.log(value.toLocaleString('en-IN')); // toLocaleString method

// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); // -5 -> 5
// console.log(Math.PI) // PI -> 3.141592653589793
// console.log(Math.round(8.46)); // 8.46 -> 8
// console.log(Math.ceil(8.14)); // 8.14 -> 9
// console.log(Math.floor(5.4)); // 5.4 -> 5
// console.log(Math.min(5,2,1,4)); // 1
// console.log(Math.max(6,3,5,2,7)); // 7

// random method
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Note
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);