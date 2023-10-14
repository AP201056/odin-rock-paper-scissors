let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {
  let computerChoice = getComputerChoice();

  // Player's turn
  let playerSelection;
  while (true) {
    playerSelection = prompt("Choose either Rock, Paper, or Scissors!");
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
      break; // Break the loop if the selection is valid
    } else {
      alert("Invalid selection, try again!");
    }
  }

  // Computer's turn
  if (computerChoice === "ROCK") {
    alert("The Computer selected ROCK!");
  } else if (computerChoice === "PAPER") {
    alert("The Computer selected PAPER!");
  } else if (computerChoice === "SCISSORS") {
    alert("The Computer selected SCISSORS!");
  } else {
    alert("RUN!");
  }

  // Determine the winner of the round
  if (computerChoice === playerSelection) {
    alert("It is a draw!");
  } else if (
    (computerChoice === "ROCK" && playerSelection === "PAPER") ||
    (computerChoice === "PAPER" && playerSelection === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerSelection === "ROCK")
  ) {
    alert("You win this round!");
    playerScore++;
  } else {
    alert("You lose this round!");
    computerScore++;
  }

  console.log("Score: Player " + playerScore + " - " + computerScore + " Computer");
}

// End game message
if (playerScore === 5) {
  alert("Congratulations! You win the game!");
} else if (computerScore === 5) {
  alert("Sorry! The computer wins the game!");
}

// Function to get computer's choice
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  let computerChoice;

  if (ranNum === 0) {
    computerChoice = "ROCK";
  } else if (ranNum === 1) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }

  return computerChoice;
}