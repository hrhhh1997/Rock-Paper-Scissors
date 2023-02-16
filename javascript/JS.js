let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}


let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

const winnerResult = document.createElement('div');

const checkWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore){
        return 'Player Wins!';
    } else if (computerScore > playerScore){
        return 'Computer Wins!';
    } else {
        return 'User ties with Computer';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        gameRound++;
        computerScore += 1;
        playerScore += 1;
        if(gameRound === 5){
            let finalResult = checkWinner(playerScore, computerScore);
            winnerResult.textContent = "After 5 rounds: " + finalResult;
            gameRound = 0;
            playerScore = 0;
            computerScore = 0;
        }
        return "Draw - This game is a Tie! Selection - " + playerSelection.toUpperCase();
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && 
                computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        gameRound++;
        playerScore += 1;
        if(gameRound === 5){
            let finalResult = checkWinner(playerScore, computerScore);
            winnerResult.textContent = "After 5 rounds: " + finalResult;
            gameRound = 0;
            playerScore = 0;
            computerScore = 0;
        }
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else{
        gameRound++;
        computerScore += 1;
        if(gameRound === 5){
            let finalResult = checkWinner(playerScore, computerScore);
            winnerResult.textContent = "After 5 rounds: " + finalResult;
            gameRound = 0;
            playerScore = 0;
            computerScore = 0;
        }
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}


const container = document.querySelector('#container');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

const result = document.createElement('div');
result.style.backgroundColor = 'white';
result.style.fontSize ='42px';


rockBtn.addEventListener('click', ()=>{
    let theResult = playRound('rock', getComputerChoice());
    result.textContent = theResult;
});

paperBtn.addEventListener('click', ()=>{
    let theResult = playRound('paper', getComputerChoice());
    result.textContent = theResult;
});

scissorBtn.addEventListener('click', ()=>{
    let theResult = playRound('scissors', getComputerChoice());
    result.textContent = theResult;
});


container.appendChild(result);
container.appendChild(winnerResult);


