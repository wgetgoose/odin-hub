//                          TO-DO... maybe
//  1. Add a button that reloads the page if the user wants to play again
//  2. Make it look better. 
// 

//global scope for querySelectors
let playerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => button.addEventListener("click", setPlayerSelect));

// this.id is the ID of the button pressed
function setPlayerSelect() {
    playerSelection = this.id; 
    playRound();
}

const computerRandom = () => { 
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*choices.length); // returns random number 0-2 based on length of array
    return choices[random]; // uses number to pick from array
}

let i = 0;
let roundText = document.querySelector('.round');
document.querySelector('.score').textContent = 'Start the game!';

function playRound() {
    if (computerScore >= 3) { 
        roundText.textContent = "Game over! The computer won!";
        return;
    }
    else if (playerScore >= 3) {
        roundText.textContent = "Game over! You beat that silly computer!"
        return;
    }
    let computerSelection = computerRandom();
    switch (null == null) { // switch statement needs to test for an expression, but tests are in cases below, so switch always runs
        case (computerSelection == playerSelection):
            roundText.textContent = "You tied! Go again!";
            document.querySelector('.score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;
            i--;
            break;
        case (computerSelection == 'rock') && (playerSelection == 'paper'):
        case (computerSelection == 'paper' && playerSelection == 'scissors'):
        case (computerSelection == 'scissors') && (playerSelection == 'rock'): 
            playerScore = (playerScore) + 1;
            roundText.textContent = "You win!";
            document.querySelector('.score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;
            i++;
            break;
        case (computerSelection == 'rock') && (playerSelection == 'scissors'):
        case (computerSelection == 'paper') && (playerSelection == 'rock'):
        case (computerSelection == 'scissors') && (playerSelection == 'paper'):
            computerScore = (computerScore) + 1;
            roundText.textContent = "You lose!";
            document.querySelector('.score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;
            i++;
            break;
        default:
            roundText.textContent = 'Try another input!';
            document.querySelector('.score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;
            i--;
            break;
    }
    return;
};