let player = "scissor";
let computer = "paper";

if (player !== "rock" && player !== "paper" && player !== "scissor") {
  console.log("invalid");
} else if (
  computer !== "rock" &&
  computer !== "paper" &&
  computer !== "scissor"
) {
  console.log("invalid");
} else {
  switch (player) {
    case computer:
      console.log("tie");
      break;
    case "rock":
      if (computer === "scissor") {
        console.log("playerWins");
      } else {
        console.log("playerLose");
      }

      break;
    case "paper":
      if (computer === "rock") {
        console.log("playerWins");
      } else {
        console.log("playerLose");
      }

      break;
    default:
      if (computer === "paper") {
        console.log("playerWins");
      } else {
        console.log("playerLose");
      }
  }
}
