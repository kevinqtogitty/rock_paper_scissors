
//Call the game function
let playerScore = 0;
let computerScore = 0;
// let playerSelection = prompt('Choose your weapon: ')
// playerSelection = playerSelection.toUpperCase();
// let computerSelection = computerPlay();
// playRound(playerSelection, computerSelection);
// console.log(playerScore)
game();
if (playerScore > computerScore)
{
    console.log('Player Wins!');
}
else if (computerScore > playerScore)
{
    console.log('Computer Wins!');
}
else if (playerScore === computerScore)
{
    console.log('It\'s a tie!');
}

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
function game () {   
    let playerSelection;
    let computerSelection; 

    for (let i = 0; i < 5; i++)
    {
        computerSelection = computerPlay();
        playerSelection = prompt('Choose your weapon: ');
        playerSelection = playerSelection.toUpperCase();

        playRound(playerSelection, computerSelection);
    }

}


