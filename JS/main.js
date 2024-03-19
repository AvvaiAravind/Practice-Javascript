let player = "paper";
let computer = "scissor";
let reply;

if (player !== "rock" && player !== "paper" && player !== "scissor") {
  reply = "invalidEntry";
} else if (
  computer !== "rock" &&
  computer !== "paper" &&
  computer !== "scissor"
) {
  reply = "invalidEntry";
} else if (player === computer) {
  reply = "tie";
} else if (
  (player === "rock" && computer === "scissor") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissor" && computer === "paper")
) {
  reply = "player wins";
} else {
  reply = "player lose";
}

console.log(reply);
