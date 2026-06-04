//Step 2: Computer Logic Choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) { return 'ROCK' }
  else if (randomNumber === 1) { return 'PAPER' }
  else { return 'SCISSORS' }
}
//console.log(getComputerChoice());

//Step 3:Human Logic Choice
function getHumanChoice() {
  const userInput = prompt('Input your Choice');
  return userInput;
}
//console.log(getHumanChoice());

//Step 4:  Game Score Initialization
let humanScore = 0;
let computerScore = 0;

//step 5: Single Round Logic
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  console.log('Computer Choice:', computerChoice)
  console.log('Human Choice:', humanChoice);

  if (humanChoice === computerChoice) {
    console.log('DRAW');
    console.log('Human Score: 0');
    console.log('Computer Score: 0');
  }

  else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    console.log('You Win!, Rock beats Scissors');
    humanScore++; console.log('Human Score: ' + humanScore);
    console.log('Computer Score :' + computerScore);
  }

  else if (humanChoice === 'PAPER' && computerChoice === "ROCK") {
    console.log('You Win!, Paper beats Rock');
    humanScore++; console.log('Human Score: ' + humanScore);
    console.log('Computer Score :' + computerScore);
  }

  else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    console.log('You Win!, Scissors beats Paper');
    humanScore++; console.log('Human Score: ' + humanScore);
    console.log('Computer Score :' + computerScore);
  }

  else {
    console.log("You Lose!, Computer beats You");
    computerScore++; console.log('Computer Score: ' + computerScore);
    console.log('Human Score: ' + humanScore);
  }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

/*
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
*/