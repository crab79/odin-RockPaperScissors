
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
let computerSelection = getComputerChoice(randomNumber)


let  playerSelection = window.prompt("Rock, Paper, or Scissors?");

if (playerSelection.toUpperCase() == "ROCK") {
    console.log('你的選擇是： '+playerSelection);
}else if (playerSelection.toUpperCase() == "PAPER") {
    console.log('你的選擇是： '+playerSelection);
}else if (playerSelection.toUpperCase() == "SCISSORS") {
console.log('你的選擇是： '+playerSelection);
}else {
    while (playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS") {
        alert('Please type "Rock", "Paper", or "Scissors"');
        playerSelection = window.prompt("Rock, Paper, or Scissors?");
    }
    console.log('你的選擇是： '+playerSelection);
}
console.log('電腦出拳 = '+computerSelection);

        



