// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodles Soup";
let isCustomerBanned = true;
let response = isCustomerBanned
  ? "Your're banned so no soup for you"
  : soup
  ? ` Here's your ${soup}`
  : "Sorry, No soup today";

console.log(response);

//testscore
let testScore = 59;
let myGrade =
  testScore >= 90
    ? "A"
    : testScore >= 80
    ? "B"
    : testScore >= 70
    ? "C"
    : testScore >= 60
    ? "D"
    : "F";

console.log(`My Grade is ${myGrade}`);

// Rock, Paper, Scissor

let player = "rock";
let computer = "paper";
let reply =
  player !== "rock" && player !== "paper" && player !== "scissor"
    ? "invalid"
    : computer !== "rock" && computer !== "paper" && computer !== "scissor"
    ? "invalid"
    : computer === player
    ? "tie"
    : computer === "rock" && player === "paper"
    ? "player wins"
    : computer === "paper" && player === "scissor"
    ? "player wins"
    : computer === "scissor" && player === "rock"
    ? "player wins"
    : "player lose";

console.log(reply);
