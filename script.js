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
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == computerChoice){
        console.log("It's a tie.");
    }

    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);