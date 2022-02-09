
let hand = ['rock', 'scissor', 'paper']; //hand of computer

//generate a random hand for the computer
function computerPlay(){
    return hand[parseInt((Math.random()*3)%3)]
     Math.random();
}


//play a single round of rock paper scissor
function playRound(computerSelection, playerSelection ){
    
    
    switch (computerSelection){
        case 'rock':
            if (playerSelection == 'paper' ) return "You win! Paper beats Rock" 
            else if(playerSelection == 'scissor') return "You lose! Rock beats Scissor"
            else return "It's a tie!" 
            break;
        case 'scissor':
            if (playerSelection == 'rock' ) return "You win! Rock beats Scissor"
            else if(playerSelection == 'paper') return "You lose! Scissor beats Paper"
            else return "It's a tie!" 
            break;
        case 'paper':
            if (playerSelection == 'scissor' ) return "You win! Scissor beats Paper"
            else if(playerSelection == 'rock') return "You lose! Paper beats Rock"
            else return "It's a tie!"
            break;
        
    }
}



/**
 * Play 5 rounds of rock paper scissor. 
 * If the user gives an invalid input, then that won't count towards the total rounds of 5. 
 */

/*
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerHand; //what the user enters
    let result; //result of a single round
    let counter = 0; 


    while(counter < 5){
       playerHand = prompt("enter hand").toLowerCase();
       if(playerHand == 'rock' || playerHand == 'scissor' || playerHand == 'paper'){
           counter++;
           result = playRound(computerPlay(),playerHand);
           alert(result);
           if(result.includes("win")) playerScore++;
           else if(result.includes("lose")) computerScore++;
           alert("Player score: " + playerScore + " Computer Score: " + computerScore); 
       }else{
           alert("please input a valid hand");
       }
    }

    if(playerScore > computerScore){
        alert("Player wins the match!");
    }else if(playerScore < computerScore){
        alert("Computer wins match");
    }else alert("Tie match!");

}

game();

*/



const b = document.querySelectorAll('.buttons');
const div = document.querySelector('.result');

b.forEach( a => a.addEventListener('click',getPlayerHand));

function getPlayerHand(e){
    console.log(playRound(computerPlay(), e.target.getAttribute("data-key")));
    div.textContent = playRound(computerPlay(), e.target.getAttribute("data-key"));

}
