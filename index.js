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

function playGame() {
  const roundsPerGame = 5;
  for (let index = 1; index <= roundsPerGame; index++) {
    let playerSelection = prompt(
      'Choose your sign: (Rock, Paper, or Scissors)'
    ).toLowerCase();
    let computerSelection = getComputerChoice();

    if (
      playerSelection != 'rock' &&
      playerSelection != 'paper' &&
      playerSelection != 'scissors'
    ) {
      alert('Invalid choice. Please choose Rock, Paper, or Scissors');
      index--;
      continue;
    }

    console.log("You've chosen " + playerSelection);
    console.log('Computer has chosen ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      'player: ' + playerScore + ' | ' + 'computer: ' + computerScore
    );
  }

  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else {
    console.log("Don't worry. Try better next time.");
  }
}

playGame();
