let playerPoints = 0;
let computerPoints = 0;

game();

function game() {
    while(playerPoints != 5 && computerPoints != 5) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    showWinner();
}

function showWinner() {
    playerPoints === 5 ? alert("You Win! :)") : alert("You Lose! :(")
}

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function getPlayerChoice() {
    return capitalizePlayerChoice(prompt("Do you want to choose Rock, Paper or Scissors? "));
}

function capitalizePlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function displayScore() {
    return `\nPlayer: ${playerPoints} pts.\nComputer: ${computerPoints} pts.`
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("Draw!");
    }
    else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            playerPoints++;
            alert("You Win! Rock beats Scissors" + displayScore());
        }
        else {
            computerPoints++;
            alert("You Lose! Paper beats Rock" + displayScore());
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            playerPoints++;
            alert("You Win! Scissors beats Paper" + displayScore());
        }
        else {
            computerPoints++;
            alert("You Lose! Rock beats Scissors" + displayScore());
        }
    }
    else {
        if (computerChoice === "Rock") {
            playerPoints++;
            alert("You Win! Paper beats Rock" + displayScore());
        }
        else {
            computerPoints++;
            alert("You Lose! Scissors beats Paper" + displayScore());
        }
    }
}