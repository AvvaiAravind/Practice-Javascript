/* //three variables let, var, const
// var
var x = 1;
var x = 2;
var x = 89;
console.log(x);

//let
/* let y = 2;
let y = 89;
This will throw an error */

//reassigning the let

/* let y = 9;
y = 34;
console.log(y); */

//var and let allow reasignment
//both give  error

/* const z = 38;
const z = 89;
console.log(z);

const w = 33;
w = 25;
console.log(w);
 */

// global scope
/* var x = 1;
let y = 2;
const z = 3;

//local scope
//block scope
{
  let y = 4;
  console.log(y);
}
//function scope
function myFunc() {
  const z = 10;
  console.log(z);
}

myFunc();
console.log(z); */

/* var x = 1;
let y = 2;
const z = 3;

//local scope

//function scope
function myFunc() {
  const z = 10;
  console.log(z);
  console.log(y);

  //block scope
  {
    let y = 4;
    console.log(y);
  }
}

myFunc();
console.log(z);
 */

/* var x = 1;
let y = 2;
const z = 3;

//local scope

//function scope
function myFunc() {
  const z = 10;
  console.log(z);
  console.log(y);

  //block scope
  if (true) {
    const y = 4;
    console.log(y);
    console.log(z);
  }
}
myFunc();
console.log(z);
 */

/* var x = 1;
let y = 2;
const z = 3;

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  console.log(`function ${x}`);
  console.log(`function ${y}`);
  console.log(`function ${z}`);

  {
    var x = 11;
    const z = 6;
    console.log(`block ${x}`);
    console.log(`block ${y}`);
    console.log(`block ${z}`);
  }
}
myFunc(); */
var x = 1;
let y = 2;
const z = 3;

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11;
    const z = 6;
    //let z = 6;
    console.log(`block ${x}`);
    console.log(`block ${y}`);
    console.log(`block ${z}`);
  }

  console.log(`function ${x}`);
  console.log(`function ${y}`);
  console.log(`function ${z}`);
}
myFunc();
