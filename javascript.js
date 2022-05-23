
let computer = computerPlay();
function computerPlay() {
    let compChoice;
    let randomNum = Math.floor(Math.random() * 100);
    
    if (randomNum <= 33)
    {
        compChoice = 'scissors';
    }
    else if (randomNum <= 66 && randomNum > 33)
    {
        compChoice = 'rock';
    }
    else if (randomNum <= 100 && randomNum > 66)
    {
        compChoice = 'paper';
    }
    
    return compChoice;
}

console.log(computer);