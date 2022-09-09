console.log("Welcome to the game's console!");

let gameOptions = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let randomChoice = gameOptions[Math.floor(Math.random() * 3)]
  return randomChoice;
}

function getPlayerChoice() {
  let choice = prompt("Choose rock, paper or scissors");
  return choice;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      return 'Tie! Rock does not beat rock';
    } else if (computerSelection == 'paper') {
      return 'You loose! Paper beats rock!';
    } else {
      return 'You win! Rock beats Scissors!';
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'You Win! Paper beats rock';
    } else if (computerSelection == 'paper') {
      return 'Tie! Paper does not beat paper';
    } else {
      return 'You loose! Scissors beats paper!';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      return 'You loose! Rock beats scissors';
    } else if (computerSelection == 'paper') {
      return 'You win! Scissors beat paper';
    } else {
      return 'Tie! Scissors do not beat scissors!';
    }
  } else {
    return "ERORR"
  }

  return;
}

console.log(playRound('scissors', 'paper'));
// console.log(getPlayerChoice());
//
// console.log(getComputerChoice());
