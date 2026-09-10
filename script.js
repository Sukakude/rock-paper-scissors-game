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

function getHumanChoice(){
    return prompt("Rock, Paper or Scissors: ");
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){
    let isWinner = null;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == computerChoice){
        console.log("It's a tie.");
    }

    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        isWinner = true;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        isWinner = false;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }
    return isWinner;
}

function playGame(){
    let counter = 5, humanScore = 0, computerScore = 0;
    let computerChoice, humanChoice, isWinner;
    for(let i = 0; i < counter; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        isWinner = playRound(humanChoice, computerChoice);

        if(isWinner == true){
            humanScore += 1;
        }
        else if(isWinner == false){
            computerScore += 1;
        }
        else{
            humanScore += 1;
            computerScore += 1;
        }
    }

    console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
    if(humanScore > computerScore){
        console.log(`You win!`);
    }
    else if(humanScore === computerScore){
        console.log(`It's a tie!`);
    }
    else{
        console.log(`You lose!`);
    }
}

playGame();