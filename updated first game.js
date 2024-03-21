//Rock, paper, scissor updated added the array and loops
let wantToPlayGame = confirm("Do you want to play rock, paper, scissor");
if (wantToPlayGame) {
  //play
  while (wantToPlayGame) {
    const playerChoice = prompt("Enter rock or paper or scissor");
    if (playerChoice || playerChoice === "") {
      const playerValue = playerChoice.trim().toLowerCase();

      if (
        playerValue === "rock" ||
        playerValue === "paper" ||
        playerValue === "scissor"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissor"];
        const computerValue = rpsArray[computerChoice];
        /*  computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissor"; */
        const result =
          computerValue === playerValue
            ? `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n tie game`
            : (computerValue === "rock" && playerValue === "paper") ||
              (computerValue === "paper" && playerValue === "scissor") ||
              (computerValue === "scissor" && playerValue === "rock")
            ? `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n player wins`
            : `computerChoice = ${computerValue}\n plaeyerChoice = ${playerValue}\n computer wins`;
        alert(result);
        wantToPlayGame = confirm("Do you want to play agains?");
        if (!wantToPlayGame) alert("Ok! Thank you for playing the game");
        continue;
      } else {
        alert("Sorry! You didn't enter rock, paper, scissor");
        continue;
      }
    } else {
      alert("I think you changed your mind! It's ok!");
      break;
    }
  }
} else {
  alert("thank you! May be next time");
}

// you can if in 2 ways
/* if (!wantToPlayGame) alert("Ok! Thank you for playing the game"); */
// continue;
/* if (wantToPlayGame) {
          continue;
        } else {
          alert("Ok! Thank you for playing the game");
        } */
