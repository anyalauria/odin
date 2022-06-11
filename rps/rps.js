var rps = ["rock", "paper", "scissors"];

function computerPlay(){
    return Math.floor(Math.random() * 3);
};
function playRound(computerSelection, playerSelection){
    if (computerSelection === "rock"){
        if (playerSelection === "paper"){
            playerWins++;
            return "Paper beats Rock! You WIN!";
        }
        else if (playerSelection === "scissors"){
            computerWins++;
            return "Rock beats Scissors! You LOSE!";
        }
        else {
            return "Looks like its a tie!";
        }
    } 
    else if (computerSelection === "paper"){
        if (playerSelection === "scissors"){
            playerWins++;
            return "Scissors beats Paper! You WIN!";
        }
        else if (playerSelection === "rock"){
            computerWins++;
            return "Paper beats Rock! You LOSE!";
        }
        else {
            return "Looks like its a tie!";
        }
    }
    else {
        if (playerSelection === "rock"){
            playerWins++;
            return "Rock beats Scissors! You WIN!";
        }
        else if (playerSelection === "paper"){
            computerWins++;
            return "Scissors beats Paper! You LOSE!";
        }
        else {
            return "Looks like its a tie!";
        }
    } 
};

function game(){
    playerWins = 0;
    computerWins = 0;

    for(let i = 1; i <= 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, Scissors. What will you choose?: ");
        console.log(playRound(rps[computerSelection], playerSelection.toLowerCase()));
    }

    if (playerWins > computerWins){
        console.log("You win with " + playerWins + " against " + computerWins);
    }
    else if (computerWins > playerWins){
        console.log("You lose with " + playerWins + " against " + computerWins);
    }
    else {
        console.log("It's a tie!");
    }
};

let playerWins = 0;
let computerWins = 0;

game();

