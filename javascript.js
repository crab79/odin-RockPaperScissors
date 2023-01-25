function getPlayerChoice() {
    let selection = window.prompt("Rock, Paper, or Scissors?");
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

function playRound(/*playerSelection, computerSelection*/) {
    //不知道怎麼引入兩個變數的情況下完成。
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log('電腦出拳 = '+computerSelection);
    console.log('你的選擇是 = '+playerSelection);
    if (computerSelection == playerSelection) {
        return "平局！" ;
    }else if (computerSelection == "ROCK" && playerSelection =="SCISSORS") {
        return "電腦贏一局！";
    }else if (computerSelection == "SCISSORS" && playerSelection =="PAPER") {
        return "電腦贏一局！";
    }else if (computerSelection == "PAPER" && playerSelection =="ROCK") {
        return "電腦贏一局！";
    }else {
        return "你贏一局！";
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<=2;i++) {
        let result = playRound();
        if (result == "電腦贏一局！") {
         computerScore = computerScore + 1;
         console.log(result);
         console.log(playerScore, computerScore);
        }else if (result == "你贏一局！") {
         playerScore = playerScore + 1;
         console.log(result);
         console.log(playerScore, computerScore);
        }else if (result == "平局！") {
         console.log(result);
         console.log(playerScore, computerScore); 
        }
    }
    if (playerScore > computerScore) {
        return "恭喜！你贏了^-^";
    }else if (playerScore < computerScore) {
        return "QAQ 不~電腦贏了";
    }else {
        return "平手~再接再勵！";
    }
}

console.log(game());

