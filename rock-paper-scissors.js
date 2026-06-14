//Step 2: Computer Logic Choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) { return 'ROCK' }
  else if (randomNumber === 1) { return 'PAPER' }
  else { return 'SCISSORS' }
}

//Step 3:Human Logic Choice
function getHumanChoice() {
  let userInput;
  let checkedInput;
  // Add do-while-loop for human choice input
  do {
    userInput = prompt('Input your Choice: (rock/paper/scissors)');
    checkedInput = userInput ? userInput.toUpperCase() : '';

    //checking human input
    if (checkedInput !== 'ROCK' && checkedInput !== 'PAPER' && checkedInput !== 'SCISSORS') {
      alert('Wrong input! Only Input (rock/paper/scissors)');
    }

    // checking and looping
  } while (checkedInput !== 'ROCK' && checkedInput !== 'PAPER' && checkedInput !== 'SCISSORS');

  return checkedInput;
}

//Step 6: 5 Round Game Logic 
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieCount = 0;
  let roundCount = 1;

  //function helper for human win
  function checkIfHumanWins(human, computer) {
    return (
      (human === 'ROCK' && computer === 'SCISSORS') ||
      (human === 'PAPER' && computer === 'ROCK') ||
      (human === 'SCISSORS' && computer === 'PAPER')
    );
  }

  //step 5: Single Round Logic
  function playRound(humanChoice, computerChoice) {
    //humanChoice = humanChoice.toUpperCase();
    console.log(`ROUND : ${roundCount}`);
    roundCount++;
    console.log('Computer Choice:', computerChoice)
    console.log('Human Choice:', humanChoice);

    if (humanChoice === computerChoice) {
      console.log('DRAW!');
      tieCount++;
    }

    else if (checkIfHumanWins(humanChoice, computerChoice)) {
      console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }

    else {
      console.log(`You Lose!, ${computerChoice}  beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Draw Score: ${tieCount}`);
    console.log('|---------------------|')
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