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
let computerSelection = '電腦出拳 = '+ getComputerChoice(randomNumber)
console.log(computerSelection); //檢查過了！