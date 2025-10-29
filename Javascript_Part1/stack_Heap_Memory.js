// Stack and Heap memory in javaScript.

// Stack (Primitive)

let myYoutubeName = "DailyActiveChannel";
let anotherId = myYoutubeName;
anotherId = "daily coding";

// console.log(myYoutubeName);
// console.log(anotherId);

// Heap (Non Primitive)
let userOne = {
    email: "dipak312@gmail.com",
    number : 12155421134,
}

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "dipaksirsath312@gmail.com";
userTwo.number = "83057*****";
console.log(userOne);
console.log(userTwo);