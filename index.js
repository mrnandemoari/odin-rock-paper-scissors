function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * choices.length);

  return choices[choice];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  psLowerCase = playerSelection.toLowerCase();

  if (psLowerCase == 'rock' && computerSelection == 'rock') {
    playerScore = playerScore;
    computerScore = computerScore;
    return "It's a tie! You both chose Rock";
  } else if (psLowerCase == 'rock' && computerSelection == 'paper') {
    computerScore += 1;
    return 'Computer win! Paper beats Rock';
  } else if (psLowerCase == 'rock' && computerSelection == 'scissors') {
    playerScore += 1;
    return 'You win! Rock beats Scissors';
  } else if (psLowerCase == 'paper' && computerSelection == 'rock') {
    playerScore += 1;
    return 'You win! Paper beats Rock';
  } else if (psLowerCase == 'paper' && computerSelection == 'paper') {
    playerScore = playerScore;
    computerScore = computerScore;
    return "It's a tie! You both chose Paper";
  } else if (psLowerCase == 'paper' && computerSelection == 'scissors') {
    computerScore += 1;
    return 'Computer win! Scissors beats Paper';
  } else if (psLowerCase == 'scissors' && computerSelection == 'rock') {
    computerScore += 1;
    return 'Computer win! Rock beats Scissors';
  } else if (psLowerCase == 'scissors' && computerSelection == 'paper') {
    playerScore += 1;
    return 'You win! Scissors beats Paper';
  } else if (psLowerCase == 'scissors' && computerSelection == 'scissors') {
    playerScore = playerScore;
    computerScore = computerScore;
    return "It's a tie! You both chose Scissors";
  }
}

console.log('Rock-Paper-Scissors Start!');

function playGame() {}
