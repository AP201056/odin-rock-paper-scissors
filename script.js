let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
let gameInProgress = false;

const resetBtn = document.createElement("button");
resetBtn.addEventListener('click', resetGame);

const gameOverScreen = document.createElement("div");

const gameOver = document.createElement("div");

const interface = document.querySelector("#interface");

const logPlayerScore = document.querySelector("#score-player");
logPlayerScore.textContent = playerScore;

const logComputerScore = document.querySelector("#score-computer");
logComputerScore.textContent = computerScore;

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => {
    if (!gameInProgress) {
        getPlayerChoice("rock");
    }
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => {
    if (!gameInProgress) {
        getPlayerChoice("paper");
    }
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => {
    if (!gameInProgress) {
        getPlayerChoice("scissors");
    }
});

const logPlayerChoice = document.querySelector("#player-choice");

function getPlayerChoice(choice) {
    if (gameInProgress) {
        return;
    }

    playerChoice = choice;
    logPlayerChoice.textContent = "Player selected: " + playerChoice;
    gameInProgress = true;

    getComputerChoice().then(() => {
        getWinner();
        getGameOver();
        gameInProgress = false;
    });
}

const logComputerChoice = document.querySelector("#computer-choice");

function getComputerChoice() {
    return new Promise(resolve => {
        let ranNum = Math.floor(Math.random() * 3);
        if (ranNum === 0) {
            computerChoice = "rock";
        } else if (ranNum === 1) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        logComputerChoice.textContent = "Computer selected: " + computerChoice;

        setTimeout(() => {
            resolve();
        }, 500);
    });
}

const logOutcome = document.querySelector("#outcome")

function getWinner() {
    if (computerChoice === playerChoice) {
        logOutcome.textContent = "It is a draw!";
        logOutcome.style.backgroundColor = "blue";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        logOutcome.textContent = "You lose this round!";
        logOutcome.style.backgroundColor = "red";
        computerScore++;
        logComputerScore.textContent = computerScore;
    } else {
        logOutcome.textContent = "You win this round!";
        logOutcome.style.backgroundColor = "green";
        playerScore++;
        logPlayerScore.textContent = playerScore;
    }
}

function getGameOver() {
    if (playerScore >= 5 || computerScore >= 5) {
        interface.parentNode.removeChild(interface);
        document.body.appendChild(gameOverScreen)
        gameOverScreen.appendChild(gameOver)
        gameOverScreen.style.backgroundColor = playerScore >= 5 ? "green" : "red";
        gameOverScreen.style.display = "flex"
        gameOverScreen.style.flexDirection = "column"
        gameOverScreen.style.alignItems = "center"
        gameOverScreen.style.justifyContent = "center"
        gameOverScreen.style.gap = "50px"
        gameOver.textContent = playerScore >= 5 ? "YOU WON!" : "YOU LOST!";
        gameOverScreen.style.width = "100%"
        gameOverScreen.style.height = "50%"
        gameOver.style.fontSize = "100px"
        gameOver.style.textAlign = "center"
        gameOverScreen.appendChild(resetBtn)
        resetBtn.style.marginBottom = "20px"
        resetBtn.textContent = "PLAY AGAIN!"
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerChoice = null;
    gameInProgress = false

    logPlayerScore.textContent = playerScore;
    logComputerScore.textContent = computerScore;
    logPlayerChoice.textContent = "";
    logComputerChoice.textContent = "";
    logOutcome.textContent = "";
    logOutcome.style.backgroundColor = "";

    document.body.removeChild(gameOverScreen);

    document.body.appendChild(interface);
}