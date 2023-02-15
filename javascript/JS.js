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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw - This game is a Tie! Selection - " + playerSelection.toUpperCase();
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && 
                computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else{
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

