function getPlayerChoice(selection) {
    while (selection.toUpperCase() != "ROCK" && 
        selection.toUpperCase() != "PAPER" && 
        selection.toUpperCase() != "SCISSORS") {  
        alert('Please type "Rock", "Paper", or "Scissors"');
        selection = window.prompt("Rock, Paper, or Scissors?");
    }
    return selection.toUpperCase();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerSelection;
    if (randomNumber <= 30) {
        computerSelection = "SCISSORS";
    }else if (randomNumber > 30 & randomNumber <= 60) {
        computerSelection = "ROCK";
    }else {
        computerSelection = "PAPER";
    }
    return computerSelection;
}

function playRound(selection) {
    //Should use playerSelection and computerSelection as parameters.

    let playerSelection = getPlayerChoice(selection);
    let computerSelection = getComputerChoice();
    computerSelectionDisplay.textContent = '電腦出拳 = '+computerSelection;
    playerSelectionDisplay.textContent = '你的選擇是 = '+playerSelection;
    container.appendChild(computerSelectionDisplay);
    container.appendChild(playerSelectionDisplay);
   
    if (computerSelection == playerSelection) {
        roundResultDisplay.textContent = '平局！';
        container.appendChild(roundResultDisplay);
        return "平局！" ;
    }else if (computerSelection == "ROCK" && playerSelection =="SCISSORS") {
        roundResultDisplay.textContent = '電腦贏一局！';
        container.appendChild(roundResultDisplay);
        return "電腦贏一局！";
    }else if (computerSelection == "SCISSORS" && playerSelection =="PAPER") {
        roundResultDisplay.textContent = '電腦贏一局！';
        container.appendChild(roundResultDisplay);
        return "電腦贏一局！";
    }else if (computerSelection == "PAPER" && playerSelection =="ROCK") {
        roundResultDisplay.textContent = '電腦贏一局！';
        container.appendChild(roundResultDisplay);
        return "電腦贏一局！";
    }else {
        roundResultDisplay.textContent = '你贏一局！';
        container.appendChild(roundResultDisplay);
        return "你贏一局！";
    }
  }

let ROCK = document.querySelector('#rock');
let PAPER = document.querySelector('#paper');
let SCISSORS = document.querySelector('#scissors');
let container = document.querySelector('#container');
let computerSelectionDisplay = document.createElement('p');
let playerSelectionDisplay = document.createElement('p');
let roundResultDisplay = document.createElement('h1');
let scoreDisplay = document.createElement('h2');
let finalWinnerDisplay = document.createElement('h1');
let playerScore = 0;
let computerScore = 0;

ROCK.addEventListener('click', () => {
    let selection = 'rock';
    let result = playRound(selection);
    if (result == "電腦贏一局！") {
        computerScore = computerScore + 1;
       }else if (result == "你贏一局！") {
        playerScore = playerScore + 1;
       }else if (result == "平局！") {
       }
    scoreDisplay.textContent = `玩家：${playerScore}，電腦：${computerScore}`;
    container.appendChild(scoreDisplay);
    if (playerScore == 5 && playerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is YOU!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore == 5 && computerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is Computer!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else {container.removeChild(finalWinnerDisplay);}
});

PAPER.addEventListener('click', () => {
    let selection = 'paper';
    let result = playRound(selection);
    if (result == "電腦贏一局！") {
        computerScore = computerScore + 1;
       }else if (result == "你贏一局！") {
        playerScore = playerScore + 1;
       }else if (result == "平局！") {
       }
    scoreDisplay.textContent = `玩家：${playerScore}，電腦：${computerScore}`;
    container.appendChild(scoreDisplay);
    if (playerScore == 5 && playerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is YOU!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore == 5 && computerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is Computer!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else {container.removeChild(finalWinnerDisplay);}
});

SCISSORS.addEventListener('click', () => {
    let selection = 'scissors';
    let result = playRound(selection);
    if (result == "電腦贏一局！") {
        computerScore = computerScore + 1;
       }else if (result == "你贏一局！") {
        playerScore = playerScore + 1;
       }else if (result == "平局！") {
       }
    scoreDisplay.textContent = `玩家：${playerScore}，電腦：${computerScore}`;
    container.appendChild(scoreDisplay);
    if (playerScore == 5 && playerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is YOU!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore == 5 && computerScore != 0) {
        finalWinnerDisplay.textContent = 'Final winner is Computer!';
        container.appendChild(finalWinnerDisplay);
        playerScore = 0;
        computerScore = 0;
    }else {container.removeChild(finalWinnerDisplay);}
});








