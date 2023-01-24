let selection = window.prompt("Rock, Paper, or Scissors?");
let playerSelection = selection.toUpperCase();
while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
    alert('Please type "Rock", "Paper", or "Scissors"');
    selection = window.prompt("Rock, Paper, or Scissors?");
    playerSelection = selection.toUpperCase();
}


let randomNumber = Math.floor(Math.random() * 100) + 1;
function getComputerChoice(randomNumber) {
    if (randomNumber <= 30) {
        return "Scissors";
    }else if (randomNumber > 30 & randomNumber <= 60) {
        return "Rock";
    }else {
        return "Paper";
    }
}
let computerSelection = getComputerChoice(randomNumber).toUpperCase()


function playRound(playerSelection, computerSelection) {
    console.log('電腦出拳 = '+computerSelection);
    console.log('你的選擇是 = '+playerSelection);
    if (computerSelection == playerSelection) {
        return "平局！";
    }else if (computerSelection == "ROCK" && playerSelection =="SCISSORS") {
        return "電腦獲勝！";
    }else if (computerSelection == "SCISSORS" && playerSelection =="PAPER") {
        return "電腦獲勝！";
    }else if (computerSelection == "PAPER" && playerSelection =="ROCK") {
        return"電腦獲勝！";
    }else {
        return "你贏了！"
    }
  }

  console.log(playRound(playerSelection, computerSelection));


        


        



