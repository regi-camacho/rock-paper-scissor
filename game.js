
let hand = ['rock', 'scissor', 'paper']; //hand of computer

let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');
const endText = document.createElement('div');
const container = document.querySelector(".container");
const playAgainButton = document.createElement('button');

playAgainButton.addEventListener('click',restartGame);


function checkScore(){
    if(playerScore == 5 || computerScore == 5){
        playerScoreBoard.textContent = "player score: " + playerScore;
        computerScoreBoard.textContent = "computer score: " + computerScore;
        endText.textContent ="game over"
        container.append(endText);     
        playAgainButton.textContent = "restart"
        container.append(playAgainButton);   
        b.forEach(a=> a.removeEventListener('click', getPlayerHand));
    }
}

function restartGame (){
    playerScore =0;
    computerScore =0;
    playerScoreBoard.textContent = "player score: " + playerScore;
    computerScoreBoard.textContent = "computer score: " + computerScore;
    container.removeChild(endText);
    container.removeChild(playAgainButton);
    b.forEach(a=>a.addEventListener('click', getPlayerHand));
}



//generate a random hand for the computer
function computerPlay(){
    return hand[parseInt((Math.random()*3)%3)]
     Math.random();
}


function updateScore(winner){
    if(winner==='player') playerScoreBoard.textContent = "player score: " + playerScore;
    else if(winner ==='computer') computerScoreBoard.textContent = "computer score: " + computerScore;
    checkScore()
}

//play a single round of rock paper scissor
function playRound(computerSelection, playerSelection ){

    switch (computerSelection){
        case 'rock':
            if (playerSelection == 'paper' ) {
                playerScore++;
                updateScore('player');
                
                return "You win! Paper beats Rock"
            } 
            else if(playerSelection == 'scissor') {
                computerScore++; 
                updateScore('computer');
                return "You lose! Rock beats Scissor"
            }    
            else return "It's a tie!" 
            break;
        case 'scissor':
            if (playerSelection == 'rock' ) {
                playerScore++;
                updateScore('player');
                return "You win! Rock beats Scissor"
            }
            else if(playerSelection == 'paper') {
                computerScore++;
                updateScore('computer');
                return "You lose! Scissor beats Paper"
            }
            else return "It's a tie!" 
            break;
        case 'paper':
            if (playerSelection == 'scissor' ){
                playerScore++;
                updateScore('player');
                return "You win! Scissor beats Paper"
            }
            else if(playerSelection == 'rock'){
                computerScore++;
                updateScore('computer');
                return "You lose! Paper beats Rock"
            } 
            else return "It's a tie!"
            break;
        
    }

}

const b = document.querySelectorAll('.buttons');
const div = document.querySelector('.result');

b.forEach( a => a.addEventListener('click',getPlayerHand));

function getPlayerHand(e){

    div.textContent = playRound(computerPlay(), e.target.getAttribute("data-key"));

}
