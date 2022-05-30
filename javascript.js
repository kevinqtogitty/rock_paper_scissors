
//Call the game function
let playerScore = 0;
let computerScore = 0;
let winner;
// let playerSelection = prompt('Choose your weapon: ')
// playerSelection = playerSelection.toUpperCase();
let computerSelection;
// playRound(playerSelection, computerSelection);
// console.log(playerScore)
//game();

//Generates the computers choice
function computerPlay() {
    let compChoice;
    let randomNum = Math.floor(Math.random() * 100);
    
    if (randomNum <= 33)
    {
        compChoice = 'SCISSOR';
    }
    else if (randomNum <= 66 && randomNum > 33)
    {
        compChoice = 'ROCK';
    }
    else if (randomNum <= 100 && randomNum > 66)
    {
        compChoice = 'PAPER';
    }

    return compChoice;
}

//simulates one round
function playRound (playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection)
    {
        alert('It\'s a tie!');    
        playerScore++;
        computerScore++; 
    }
    else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER')
    {
        alert('PLAYER WINS');
        playerScore++;
    }
    else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK')
    {
        alert('COMPUTER WINS');
        computerScore++;
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR')
    {
        alert('COMPUTER WINS');
        computerScore++;
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        alert('PLAYER WINS');
        playerScore++;
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'PAPER')
    {
        alert('COMPUTER WINS');
        computerScore++;
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR')
    {
        alert('PLAYER WINS');
        playerScore++;
    }

}

//This function loops 5 times to simulate 5 rounds
// function game () {   
//     let playerSelection;
//     let computerSelection; 

//     for (let i = 0; i < 5; i++)
//     {
//         computerSelection = computerPlay();
//         playerSelection = prompt('Choose your weapon: ');
//         playerSelection = playerSelection.toUpperCase();

//         playRound(playerSelection, computerSelection);
//     }

// }


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener("click", e => {
    computerSelection = computerPlay();
    playRound('ROCK', computerSelection);
    updateScore(playerScore, computerScore);
    displayWinner();
})

paper.addEventListener('click', e => {
    computerSelection = computerPlay();
    playRound('PAPER', computerSelection);
    updateScore(playerScore, computerScore);
    displayWinner();
})

scissor.addEventListener('click', e => {
    computerSelection = computerPlay();
    playRound('SCISSOR', computerSelection);
    updateScore(playerScore, computerScore);
    displayWinner();
})

function updateScore() {
    const playerPoints = document.getElementById("you");
    const computerPoints = document.getElementById("comp");

    playerPoints.innerHTML = "Player: " + playerScore;
    computerPoints.innerHTML = "Computer: " + computerScore;
}

function displayWinner() {
    const display = document.getElementById("winner");

    if (playerScore == 5 || computerScore == 5)
    {
        if (playerScore == 5 && computerScore == 5)
        {   
             winner = "It\'s a tie!";
        }
        else if (playerScore == 5 && computerScore !== 5)
        {
             winner = "Player Wins!";    
        }
        else if (playerScore !== 5 && computerScore == 5)
        {
             winner = "Computer Wins!";    
        }

        display.innerHTML = winner;
    }
    return;

}