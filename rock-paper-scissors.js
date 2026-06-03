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

//step 5: Single Round Logic
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  console.log('Computer Choice:', computerChoice)
  console.log('Human Choice:', humanChoice);

  if (humanChoice === computerChoice) console.log('DRAW');
  else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') console.log('You Win!, Rock beats Scissors');

  else if (humanChoice === 'PAPER' && computerChoice === "ROCK") console.log('You Win!, Paper beats Rock');

  else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') console.log('You Win!, Scissors beats Paper');
  else console.log("You Lose!, computer beats You");
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