//alert("Hello World!");
//confirm("ok === true\ncancel === false");

//let myBoolean = confirm("ok === true\ncancel === false");
//console.log(myBoolean);
/* let myName = prompt("Enter your Name");
console.log(myName ?? "You didn't enter your name");
console.log(typeof myName); */
/* let name = prompt("Enter your Name");
if (name.length) {
  console.log(name ?? "You didn't enter your name");
} else {
  console.log("You didn't enter your name");
} */
let name = prompt("Enter your Name");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name");
}
