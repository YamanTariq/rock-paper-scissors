var humanScore = 0;
var computerScore = 0;




// References
const rckBtn = document.querySelector("#rock");
const papBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");
const span = document.querySelector("span");
const scoreBoard = document.querySelector("#score-board");
const hScoreDiv =  scoreBoard.querySelector("#human-score");
const cScoreDiv = scoreBoard.querySelector("#computer-score");
const roundScore = document.querySelector("#round-result");

// Event Listners

rckBtn.addEventListener("click", () => {
    gameRound(getComputerChoice(), "rock");
});

papBtn.addEventListener("click", () => {
    gameRound(getComputerChoice(), "paper");
});

sciBtn.addEventListener("click", () => {
    gameRound(getComputerChoice(), "scissors");
});



  //////////////////////
 // Helper functions //
//////////////////////

function updateScore(humanWins){
    if(humanWins){
        hScoreDiv.textContent = humanScore + "  ";
    } else {
        cScoreDiv.textContent = computerScore;
    }
}

function displayResult(result){
    roundScore.textContent = "";
    roundScore.textContent = result;
}

function getComputerChoice() {
    let randomValue =  Math.floor((1 / Math.random(100)) % 3);      
    //console.log(randomValue);
    let choice = "";
    switch(randomValue){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    return choice;
}

function gameRound(computerChoice, humanChoice){
    let comp = computerChoice.toLowerCase();
    let hum = humanChoice.toLowerCase();
    let result = 0; //+1 if human wins

    if(comp === "rock" && hum === "paper"){
        humanScore++;
        displayResult("You won this round"); 
        updateScore(true);
    } else if(comp === "paper" && hum === "scissors") {
        humanScore++;
        displayResult("You won this round"); 
        updateScore(true);
    } else if( comp === "scissors" && hum === "rock"){
        humanScore++;
        displayResult("You won this round"); 
        updateScore(true);
    } else if ( comp == hum){
        displayResult("this round was a draw");
    } else {
        computerScore++;
        displayResult("You lost this round"); 
        updateScore(false);
    }

    if(humanScore === 5 || computerScore === 5){
        setTimeout(() => {
            alert(humanScore === 5 ? "You won the game" : "Computer won the game");
            resetGame();
        }, 100)
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateScore(true);
    updateScore(false);
    displayResult("Game rest. Let's play agian!");
}



document.addEventListener("DOMContentLoaded", () => {
    updateScore(true);
    updateScore(false);
})




