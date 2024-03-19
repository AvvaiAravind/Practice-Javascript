//First Game

let wantToPlayGame = confirm("Do you want to play rock, paper, scissor");
if (wantToPlayGame) {
  let playerChoice = prompt("Enter rock or paper or scissor");
  if (playerChoice) {
    let playerValue = playerChoice.trim().toLowerCase();

    if (
      playerValue === "rock" ||
      playerValue === "paper" ||
      playerValue === "scissor"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computerValue =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      let result =
        computerValue === playerValue
          ? `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n tie game`
          : (computerValue === "rock" && playerValue === "paper") ||
            (computerValue === "paper" && playerValue === "scissor") ||
            (computerValue === "scissor" && playerValue === "rock")
          ? `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n player wins`
          : `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n computer wins`;
      alert(result);
      let playAgain = confirm("Do you want to play agains?");
      playAgain ? location.reload() : alert("Thank You for playing!");
    } else {
      alert("Sorry! You didn't enter rock, paper, scissor");
    }
  } else {
    alert("I think you changed your mind! It's ok!");
  }
} else {
  alert("thank you! May be next time");
}
