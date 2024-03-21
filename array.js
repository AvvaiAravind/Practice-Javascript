// array data structure like shelf where can we store data
const myArray = [];

// we can't reassign myArray but inside we can create shelf

myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

/* console.log(myArray);
console.log(myArray.length);

// do access the last array
console.log(myArray[myArray.length - 1]); */
/* myArray.push("school"); */

/* console.log(myArray);
const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem); */

/* const newLength = myArray.unshift(true);
console.log(newLength);
 */
/* const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray[1]);
console.log(myArray[2]); */

/* delete myArray[1];
console.log(myArray);
console.log(myArray[1]); */

/* myArray.splice(1, 1);
console.log(myArray);
myArray.splice(1, 1, 55);
console.log(myArray);
myArray.splice(1, 0, 33);
console.log(myArray); */

/* const myNewArrayA = ["A", "B", "C"];
const myNewArrayB = ["D", "E", "F"];

//const myNewArray = myNewArrayA.concat(myNewArrayB);
//console.log(myNewArray);

//const myNewArray = [...myNewArrayA, ...myNewArrayB];
const myNewArray = [myNewArrayA, myNewArrayB];

console.log(myNewArray); */
/* const aArray = myNewArray.slice(1, 5);*/
/* const aArray = myNewArray.reverse();*/
/* const aArray = myNewArray.join();
const newString = aArray.split(","); */

//console.log(newString);

//nested array
const equipShelfA = ["basketball", "football", "velleyball"];
const equipShelfB = ["baseball", "golfball", "tennisball"];

const clotheShelfA = ["tank tops", "t-shirst", "jerseys"];
const clotheShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[2]);
console.log(clotheShelfB[1]);

const equibDep = [equipShelfA, equipShelfB];
const clostheDep = [clotheShelfA, clotheShelfB];

console.log(equibDep[0][2]);
