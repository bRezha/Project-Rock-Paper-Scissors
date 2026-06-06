//Step 2: Computer Logic Choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) { return 'ROCK' }
  else if (randomNumber === 1) { return 'PAPER' }
  else { return 'SCISSORS' }
}

//Step 3:Human Logic Choice
function getHumanChoice() {
  const userInput = prompt('Input your Choice');
  return userInput;
}

//Step 6: 5 Round Game Logic 
function playGame() {
  //Step 4:  Game Score Initialization
  let humanScore = 0;
  let computerScore = 0;
  let tieCount = 0;

  //step 5: Single Round Logic
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    console.log('Computer Choice:', computerChoice)
    console.log('Human Choice:', humanChoice);

    if (humanChoice === computerChoice) {
      console.log('DRAW!');
      tieCount++;
    }

    else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
      console.log('You Win!, Rock beats Scissors');
      humanScore++;
    }

    else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
      console.log('You Win!, Paper beats Rock');
      humanScore++;
    }

    else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
      console.log('You Win!, Scissors beats Paper');
      humanScore++;
    }

    else {
      console.log("You Lose!, Computer beats You");
      computerScore++;
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Draw Score: ${tieCount}`);
  }

  //Round 1:
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  //Round 2:
  const humanSelection2 = getHumanChoice();
  const computerSelection2 = getComputerChoice();
  playRound(humanSelection2, computerSelection2);
  //Round 3:
  const humanSelection3 = getHumanChoice();
  const computerSelection3 = getComputerChoice();
  playRound(humanSelection3, computerSelection3);
  //Round 4:
  const humanSelection4 = getHumanChoice();
  const computerSelection4 = getComputerChoice();
  playRound(humanSelection4, computerSelection4);
  //Round 5:
  const humanSelection5 = getHumanChoice();
  const computerSelection5 = getComputerChoice();
  playRound(humanSelection5, computerSelection5);

  //End Game Announcement:
  function finalResult() {
    if (humanScore > computerScore) {
      console.log('===================================');
      console.log('CONGRATULATIONS! YOU WIN THE MATCH!');
      console.log('===================================');
    }
    else if (computerScore > humanScore) {
      console.log('++++++++++++++++++++++++++++++++++');
      console.log('GAME OVER! COMPUTER WINS THE MATCH');
      console.log('++++++++++++++++++++++++++++++++++');
    }
    else {
      console.log('***********************');
      console.log('THE MATCH ENDS IN A TIE');
      console.log('***********************');
    }
  }
  finalResult();
}
playGame();