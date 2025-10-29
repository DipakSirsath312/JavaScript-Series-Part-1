const name = "Dipak_Shirsath";
const val = 10;                   //outdated
//console.log(name + val + "value");

console.log(`Hello my name is ${name} my github repo is:- ${val}`); //new

// string define.
const gameName = new String("BlackDevil");
//console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

//String Methods
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase())
console.log(gameName.toLocaleUpperCase());
console.log(gameName.indexOf("D"));
console.log(gameName.charAt(5));

//substring
const newString = gameName.substring(5,gameName.length);
console.log(newString);
//slice
const anotherString = gameName.slice(-7,gameName.length);
console.log(anotherString);
//trim
const oneString = "  Dipak  ";
console.log(oneString);
console.log(oneString.trim());
//replace method
const myUrl = "https://localhost:/dipaksirsath--.com";
console.log(myUrl.replace('--','312'));

console.log(myUrl.includes('dipaksirsath')); //include method.
//split method.
console.log(myUrl.split('/'))
