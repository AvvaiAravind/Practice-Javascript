//rock, paper scissor game using function

// start the Game

function initGame() {
  const startGame = confirm("shall we play rock, paper, scissor");
  startGame ? playGame() : alert("Ok! Thank you! May be next time!");
}

// Game flow
const playGame = function () {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);

    if (playerChoice === "") {
      notEnteredAnything();
      continue;
    }
    if (!playerChoice) {
      decidNotToPlay();
      break;
    }

    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    //play game

    const computerChoice = getComputerChoice();
    const result = decideWinner(computerChoice, playerChoice);
    displayResult(result);
    if (wantToPlayAgain()) {
      continue;
    } else {
      thaksForPlaying();
      break;
    }
  }
};

// helper function

//getting player choice

const getPlayerChoice = () => {
  return prompt("Enter rock or paper or scissor");
};

//formating player choice
const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

// decide not to play

const decidNotToPlay = () => {
  alert("I think you changed the mind! May be next time! Thank You!");
};
// not entered anything

const notEnteredAnything = () => {
  alert("Sorry! you didn't enter anything");
};

//invalid choice
const invalidChoice = () => {
  alert("Invalid choice. Please enter rock or paper or scisssor correctly");
};

// evaluate player choice

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissor"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

// get computer choice

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissor"];
  return rpsArray[randomNumber];
};

//decide winner

const decideWinner = (computerChoice, playerChoice) => {
  const winner =
    computerChoice === playerChoice
      ? ` computer choice = ${computerChoice} \n player choice = ${playerChoice} \n Tie Game`
      : (computerChoice === "rock" && playerChoice === "scissor") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissor" && playerChoice === "paper")
      ? ` computer choice = ${computerChoice} \n player choice = ${playerChoice} \n computer wins`
      : ` computer choice = ${computerChoice} \n player choice = ${playerChoice} \n player wins`;
  return winner;
};

// display result

const displayResult = (result) => {
  return alert(result);
};

// want to play again

const wantToPlayAgain = () => {
  return confirm("Do you want to play again?");
};

// thanks playing game

const thaksForPlaying = () => {
  return alert("Thanks for playing the game!");
};
//initialising the game

initGame();
