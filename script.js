const container = document.querySelector('.container');
const div = document.querySelector('#game-message');
const playRoundMessage = document.createElement('p');
const playerScoreMessage = document.createElement('p');


let humanChoice = '', humanScore = 0, computerScore = 0, maxPoints = 5;

div.appendChild(playerScoreMessage);
div.appendChild(playRoundMessage);

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0 : 
            return 'Rock';
        case 1 : 
            return 'Paper';
        case 2 : 
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice){
    let isWinner = null;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === computerChoice){
        playerScoreMessage.textContent = "It's a tie.";
    } else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        isWinner = true;
        playerScoreMessage.textContent = `${humanChoice} beats ${computerChoice}`;
    } else{
        isWinner = false;
        playerScoreMessage.textContent = `${computerChoice} beats ${humanChoice}`;
    }
    return isWinner;
}

function playGame(humanChoice){
    let computerChoice, isWinner;
    computerChoice = getComputerChoice();
    isWinner = playRound(humanChoice, computerChoice);

    if(isWinner){
        humanScore += 1;
    } else if(isWinner === false){
        computerScore += 1;
    } else {
        humanScore += 1;
        computerScore += 1;
    }
    
    if(humanScore === maxPoints || computerScore === maxPoints){
        playerScoreMessage.textContent = '';
        playRoundMessage.textContent = 
            humanScore > computerScore ? `You win! Your score: ${humanScore} | Computer score: ${computerScore}` : `You lose! Your score: ${humanScore} | Computer score: ${computerScore}`;
        humanScore = 0, computerScore = 0;
    }
}

container.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON'){
        humanChoice = e.target.innerText;
        playRoundMessage.textContent = '';
        playGame(humanChoice);
    }
});