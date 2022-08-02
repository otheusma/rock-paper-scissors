let playerPoints = 0;
let computerPoints = 0;
const playerCards = document.querySelectorAll(".playerCard");
const middleBoard = document.querySelector(".middleBoard");
const playerCardChoice = document.querySelector("#playerChoice");
const computerCardChoice = document.querySelector("#computerChoice");
const computerCardImage = document.querySelector("#computerImage");
const playerCardImage = document.querySelector("#playerImage");
const resultText = document.querySelector("#resultText");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

playerCards.forEach(card => card.addEventListener("click", () => {
    playRound(getPlayerChoice(card.id), getComputerChoice())
    if (playerPoints === 5 || computerPoints === 5) {
        endGame();
    }
}));

function getPlayerChoice(choice) {
    switch(choice) {
        case "rock":
            playerCardImage.setAttribute("src", "/img/rock");
            return "Rock";
        case "paper":
            playerCardImage.setAttribute("src", "/img/paper");
            return "Paper"
        case "scissors":
            playerCardImage.setAttribute("src", "/img/scissors");
            return "Scissors"
    }
}
function getComputerChoice() {
    switch(Math.floor(Math.random()*3)){
        case 0:
            computerCardImage.setAttribute("src", "/img/rock");
            return "Rock";
        case 1:
            computerCardImage.setAttribute("src", "/img/paper");
            return "Paper";
        case 2:
            computerCardImage.setAttribute("src", "/img/scissors");
            return "Scissors"
    }
}
function playRound(playerChoice, computerChoice) {
    playerCardChoice.innerText = playerChoice;
    computerCardChoice.innerText = computerChoice;
    if (playerChoice === computerChoice) {
        resultText.innerText = "Draw!";
    }
    else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            playerPoints++;
            resultText.innerText = "You Win!\nRock beats Scissors";
        }
        else {
            computerPoints++;
            resultText.innerText = "You Lose!\nPaper beats Rock";
        }
    }
    else if (playerChoice === "Paper") {
        
        if (computerChoice === "Rock") {
            playerPoints++;
            resultText.innerText = "You Win!\nPaper beats Rock";
        } 
        else {
            resultText.innerText = "You Lose!\nScissors beats Paper";
            computerPoints++;
        } 
    }
    else {
        if (computerChoice === "Paper") {
            playerPoints++;
            resultText.innerText = "You Win!\nScissors beats Paper";
        }
        else {
            computerPoints++;
            resultText.innerText = "You Lose!\nRocks beats Scissors";
        }
    }
    playerScore.innerText = playerPoints;
    computerScore.innerText = computerPoints;
    middleBoard.style.opacity = "100%";
}
function endGame() {
    playerPoints === 5 ? location.href = "/pages/winScreen.html" : location.href = "/pages/loseScreen.html";
}