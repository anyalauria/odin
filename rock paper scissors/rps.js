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

function game(playerChoice){
    let computerSelection = computerPlay();
    let playerSelection = playerChoice;
    announcement.textContent = playRound(rps[computerSelection], playerSelection);

};

function scoreDisplay(){
    if (playerWins == 5) {
        announcement.textContent = "You are the supreme winner of this game! Let's start again!";
        playerWins = 0;
        computerWins = 0;
    }
    if (computerWins == 5) {
        announcement.textContent = "You are a LOSER in this game! Let's start again!";
        playerWins = 0;
        computerWins = 0;
    }
    scoreBoard.textContent = "Player Score: " + playerWins.toString();
    scoreBoard.textContent += "\r\nComputer Score: " + computerWins.toString()
};

let playerWins = 0;
let computerWins = 0;

rock = document.querySelector('#rock');
paper = document.querySelector('#paper');
scissors = document.querySelector('#scissors');

announcement = document.querySelector('#announcement');

scoreBoard = document.querySelector('#score');
scoreBoard.textContent = "Player Score: " + playerWins.toString();
scoreBoard.textContent += "\r\nComputer Score: " + computerWins.toString();

rock.addEventListener('click', () => {
    game("rock");
    scoreDisplay();
  });
paper.addEventListener('click', () => {
    game("paper");
    scoreDisplay();
    
  });
scissors.addEventListener('click', () => {
    game("scissors");
    scoreDisplay();
  });


