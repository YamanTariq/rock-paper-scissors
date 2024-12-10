
var computerScore = 0;
var humanScore = 0;

for(let i = 0; i < 5; i++){
    gameRound(getHumanChoice(),getComputerChoice());
}

if(computerScore > humanScore){
    console.log("Computer won the battle!");
} else if( humanScore > computerScore){
    console.log("You won the battle!");
} else {
    console.log("It was a draw!");
}










  //////////////////////
 // Helper functions //
//////////////////////


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
        console.log("You won this round"); 
    } else if(comp === "paper" && hum === "scissors") {
        humanScore++;
        console.log("You won this round"); 
    } else if( comp === "scissors" && hum === "rock"){
        humanScore++;
        console.log("You won this round"); 
    } else if ( comp == hum){
        console.log("this round was a draw");
    } else {
        computerScore++;
        console.log("You lost this round"); 
    }
}







