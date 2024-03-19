//while
/* let myNumber = 50;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}
//do while
do {
  console.log(myNumber);
} while (myNumber < 50);
//for while
for (let i = 0; i < 10; i += 2) {
  console.log(i);
} */
/* let i = 0;
for (; i < 10; ) {
  console.log(i);
  i++;
} */
/* let myName = "Dave";
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
} */
let myName = "Dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = myName[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "v") break;
  counter++;
}
