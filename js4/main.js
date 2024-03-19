const myNumber = 42;
const duplicatNumber = 42;
const myFloat = 42.0583;
const myString = "42";
const alphaNumeric = "42.123Abchi";

//comparing datas
console.log(myNumber === duplicatNumber);
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(typeof myString);

console.log(myString + 3);

// Number function
console.log(Number(myString) === myNumber);
console.log(Number(myString) + 3);

console.log(Number("dave"));
console.log(Number(true));
console.log(Number(false));

//isInteger method
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myString));
//parseFloat method
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(duplicatNumber));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(alphaNumeric));
//tofixed method
console.log(Number.parseFloat(myFloat).toFixed(2));
//parseInt method
console.log(Number.parseInt(alphaNumeric).toFixed(3));
//toString method
console.log(typeof Number.parseFloat(myFloat).toString());
console.log(myFloat.toString());
console.log(typeof myFloat.toString());
//chaining
console.log(Number.parseFloat(myString).toFixed(1).toString());
//NaN mehtod
console.log(Number.isNaN("dave"));
//important
console.log(Number.isNaN(NaN)); // true
//important
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(42)); // false

//globalisNan mehod
console.log(isNaN(42));
//important
console.log(isNaN(NaN)); // true, because NaN is NaN
console.log(isNaN("hello")); // true, because "hello" cannot be converted to a number
console.log(isNaN(undefined)); // true, because undefined cannot be converted to a number
//important
console.log(isNaN(42)); // false, because 42 is a valid number
console.log(isNaN(null)); // false, because null can be coerced to 0, which is a valid number
