console.log("Welcome to the game's console!");

let gameOptions = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let randomChoice = gameOptions[Math.floor(Math.random() * 3)]
  return randomChoice;
}

function getPlayerChoice() {
  // let choice = prompt("Choose rock, paper or scissors");

  // buttons is a node list. It looks and acts much like an array.
  const choices = document.querySelectorAll('.choice-btn');
  console.log(choices);

  // we use the .forEach method to iterate through each button
  choices.forEach((choice) => {

    // and for each one we add a 'click' listener
    choice.addEventListener('click', () => {
      return choice.innerText.toLowerCase();
      // const round = playRound(choice.innerText.toLowerCase(), getComputerChoice());
    });
  });

}

function playRound(playerSelection, computerSelection) {
  let result = ['none', 'message'];

  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      result[0] = 'none';
      result[1] = 'Tie! Rock does not beat rock';
      return result;
    } else if (computerSelection == 'paper') {
      result[0] = 'computer';
      result[1] = 'You loose! Paper beats rock!';
      return result;
    } else {
      result[0] = 'player';
      result[1] = 'You win! Rock beats Scissors!';
      return result;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      result[0] = 'player';
      result[1] = 'You Win! Paper beats rock';
      return result;
    } else if (computerSelection == 'paper') {
      result[0] = 'none';
      result[1] = 'Tie! Paper does not beat paper';
      return result;
    } else {
      result[0] = 'computer';
      result[1] = 'You loose! Scissors beats paper!';
      return result;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      result[0] = 'computer';
      result[1] = 'You loose! Rock beats scissors';
      return result;
    } else if (computerSelection == 'paper') {
      result[0] = 'player';
      result[1] = 'You win! Scissors beat paper';
      return result;
    } else {
      result[0] = 'none';
      result[1] = 'Tie! Scissors do not beat scissors!';
      return result;
    }
  } else {
    return "ERORR";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log('im here');




  // return;

}

// buttons is a node list. It looks and acts much like an array.
const choices = document.querySelectorAll('.choice-btn');
// console.log(choices);

// we use the .forEach method to iterate through each button
choices.forEach((choice) => {

  // and for each one we add a 'click' listener
  choice.addEventListener('click', () => {
    // return choice.innerText.toLowerCase();
    const round = playRound(choice.innerText.toLowerCase(), getComputerChoice());
    console.log(round);

    if (round[0] == 'player') {
      playerScore++;
    }
    else if (round[0] == 'computer') {
      computerScore++;
    }

    currentPlayerScore.textContent = `Player Score = ${playerScore}`;
    currentComputerScore.textContent = `Computer Score = ${computerScore}`;
    currentRoundOutput.textContent = `${round[1]}`;

    if (playerScore == 5) {
      currentPlayerScore.textContent = ` Congratulations! YOU WIN`;
      currentComputerScore.textContent = ''
      playerScore = 0;
      computerScore = 0;
    }
    else if (computerScore == 5) {
      currentPlayerScore.textContent = `Sorry! YOU LOOSE`;
      currentComputerScore.textContent = ''
      playerScore = 0;
      computerScore = 0;
    } 
    
  });
});

// Add Score Counter 

let playerScore = 0;
let computerScore = 0; 

const scoreBoard = document.querySelector('#score-board');

const currentPlayerScore = document.createElement('p');
currentPlayerScore.classList.add('player-score');

const currentComputerScore = document.createElement('p');
currentComputerScore.classList.add('computer-score');

const currentRoundOutput = document.createElement('p');
currentRoundOutput.classList.add('round-output');

scoreBoard.appendChild(currentPlayerScore);
scoreBoard.appendChild(currentComputerScore);
scoreBoard.appendChild(currentRoundOutput);




//OLD GAME CODE:


// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();

//     console.log(playerChoice);
//     console.log(computerChoice);

//     playerChoice = playerChoice.toLowerCase();

//     if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
//       playerChoice = prompt("PLEASE ONLY Choose rock, paper or scissors");
//     }

//     let scoreKeeper = playRound(playerChoice, computerChoice);
//     console.log(scoreKeeper);

//     if (scoreKeeper[0] == 'player') {
//       playerScore++;
//     }
//     else if (scoreKeeper[0] == 'computer') {
//       computerScore++;
//     }
//   }

//   console.log(`Final Score -> Computer: ${computerScore}, Player: ${playerScore}`);

//   return;

// }