// Why string to number conversion is confusing.

let str1 = "hello";
let str2 = "_dipak";

let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2); // 12 
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1");  //41

console.log(+true); // +true => 1;
console.log(-true); // -true => -1;
console.log(+false); // +false => 0;
console.log(-false); // -false => -0;
console.log(+""); // +"" => 0;
console.log(-""); // -"" => -0;