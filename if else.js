// //if else
// if (condition) {
//   //if true then run this  code
// } else {
//   //if false then run this code
// }
let customerIsBanned = true;
let soup = "Chicken Noodles Soup";
//let reply;

if (customerIsBanned) {
  reply = `sorry, you're bannned. so no soup for you`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `sorry, we're out of soup`;
}
console.log(reply);
let newStudent = true;
let testScore = 45;
let grade;
if (testScore >= 90) {
  grade = `A`;
} else if (testScore >= 80) {
  grade = `B`;
} else if (testScore >= 70) {
  grade = `C`;
} else if (testScore >= 60) {
  grade = `D`;
} else {
  if (newStudent) {
    grade = `U`;
  } else {
    grade = `F`;
  }
}
console.log(grade);

let playerOne = "rock";
let computer = "scissor";
let reply;
if (playerOne === computer) {
  //tie game!
  reply = `tie`;
} else if (playerOne === "rock") {
  if (computer === "scissor") {
    //playerOne wins
    reply = `playerOne wins`;
  } else {
    //computer wins
    reply = `playerOne lose`;
  }
} else if (playerOne === "paper") {
  if (computer === "scissor") {
    //playerOne wins
    reply = `playerOne lose`;
  } else {
    //computer wins
    reply = `playerOne wins`;
  }
} else {
  if (computer === "rock") {
    //computer wins
    reply = `playerOne lose`;
  } else {
    //playerOne wins
    reply = `playerOne wins`;
  }
}
console.log(reply);

/* let playerOne = "rock";
let computer = "rock";
let reply;

if (playerOne !== "rock" && playerOne !== "scissor" && playerOne !== "paper") {
  reply = "invalid";
} else if (playerOne === computer) {
  reply = "tie";
} else if (
  (playerOne === "rock" && computer === "scissor") ||
  (playerOne === "scissor" && computer === "paper") ||
  (playerOne === "paper" && computer === "rock")
) {
  reply = "playerOne wins";
} else {
  reply = "playerOne lose";
}
console.log(reply); */

/* if (playerOne === computer) {
  reply = "tie";
} else if (
  (playerOne === "rock" && computer === "scissor") ||
  (playerOne === "paper" && computer === "rock") ||
  (playerOne === "scissor" && computer === "paper")
) {
  reply = "playerOne wins";
} else {
  reply = "playerOne invalid commet";
}

console.log(reply);
 */
