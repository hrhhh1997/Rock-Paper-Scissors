let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1){
        return "Rock";
    } else if (choice === 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let pToLower = String(playerSelection.toLowerCase());
    let cToLower = String(computerSelection.toLowerCase());

    if (pToLower === cToLower){
        return "Draw - This game is a Tie!";
    } else if (pToLower === "rock" && cToLower === "scissors" || pToLower === "paper" && cToLower === "rock" || pToLower === "scissors" && cToLower === "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else{
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}


// const plChoice = "scissors";


function game(){
    for (let i = 0; i < 5; i++){
        let compChoice = getComputerChoice();
        let userInput = prompt("Rock, Paper, Scissors?");
        console.log(playRound(userInput, compChoice));
    }
}