let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

const resetBtn = document.createElement("button")
resetBtn.addEventListener('click', resetGame);

const gameOverScreen = document.createElement("div")

const gameOver = document.createElement("div")

const interface = document.querySelector("#interface")

const logPlayerScore = document.querySelector("#score-player")
logPlayerScore.textContent = playerScore

const logComputerScore = document.querySelector("#score-computer")
logComputerScore.textContent = computerScore

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', getPlayerChoice);
rockBtn.addEventListener('click', getComputerChoice);

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', getPlayerChoice);
paperBtn.addEventListener('click', getComputerChoice);

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', getPlayerChoice);
scissorsBtn.addEventListener('click', getComputerChoice);

const logPlayerChoice = document.querySelector("#player-choice")

function getPlayerChoice(event) {
    playerChoice = event.target.id;
    logPlayerChoice.textContent = "Player selected: " + playerChoice;

    return new Promise(resolve => {
        getComputerChoice().then(() => {
            getWinner();
            getGameOver();
            resolve();
        });
    });
}

const logComputerChoice = document.querySelector("#computer-choice")

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
        
        resolve();
    });
}

const logOutcome = document.querySelector("#outcome")

function getWinner() {
    if (computerChoice === playerChoice) {
        logOutcome.textContent = "It is a draw!";
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        logOutcome.textContent ="You win this round!";
        playerScore++;
        logPlayerScore.textContent = playerScore
    } else {
        logOutcome.textContent ="You lose this round!";
        computerScore++;
        logComputerScore.textContent = computerScore
    }
}

function getGameOver () {
    if (playerScore < 5 && computerScore >= 5 ) {
        interface.parentNode.removeChild(interface);
        document.body.appendChild(gameOverScreen)
        gameOverScreen.appendChild(gameOver)
        gameOverScreen.style.backgroundColor = "red"
        gameOverScreen.style.display = "flex"
        gameOverScreen.style.flexDirection = "column"
        gameOverScreen.style.alignItems = "center"
        gameOverScreen.style.justifyContent = "center"
        gameOverScreen.style.gap = "50px"
        gameOver.textContent = "YOU LOST!"
        gameOverScreen.style.width = "100%"
        gameOverScreen.style.height = "50%"
        gameOver.style.fontSize = "100px"
        gameOver.style.textAlign = "center"
        gameOverScreen.appendChild(resetBtn)
        resetBtn.style.marginBottom = "20px"
        resetBtn.textContent = "PLAY AGAIN!"
    } else if (computerScore < 5 && playerScore >= 5) {
        interface.parentNode.removeChild(interface);
        document.body.appendChild(gameOverScreen) 
        gameOverScreen.appendChild(gameOver)
        gameOverScreen.style.backgroundColor = "green"
        gameOverScreen.style.display = "flex"
        gameOverScreen.style.flexDirection = "column"
        gameOverScreen.style.alignItems = "center"
        gameOverScreen.style.justifyContent = "center"
        gameOverScreen.style.gap = "50px"
        gameOver.textContent = "YOU WON!"
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
    computerChoice = null;
    playerChoice = null;

    logPlayerScore.textContent = playerScore;
    logComputerScore.textContent = computerScore;
    logPlayerChoice.textContent = "";
    logComputerChoice.textContent = "";
    logOutcome.textContent = "";

    document.body.removeChild(gameOverScreen);

    document.body.appendChild(interface);
}