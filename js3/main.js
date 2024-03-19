//strings
const myVariable = "Mathematics";

//The Lenght Property
console.log(myVariable.length);

//strings method

//charAt method
console.log(myVariable.charAt(6));

//indexOf method
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat")); //charachter sensitive

//lastIndexOf method

console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));

//slice methode

console.log(myVariable.slice(5, 8));
console.log(myVariable.slice(5));
console.log(myVariable.slice());
console.log(myVariable.slice(5, 5));
console.log(myVariable.slice(8, 5));
console.log(myVariable.slice(5, 6));

//toUpperCase method

console.log(myVariable.toUpperCase());

//toLowerCase method

console.log(myVariable.toLocaleLowerCase());

//split method

console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John, Doe,Varma".split(","));
console.log("Every day is a good day".split(" "));
