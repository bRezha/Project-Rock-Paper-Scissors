//Global game constant
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const CANCEL = 'CANCEL';

//function Helper for all Choice
function isValidChoice(choice) {
  return (
    choice === ROCK ||
    choice === PAPER ||
    choice === SCISSORS
  );
}

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

    //checking human cancel
    if (userInput === null) {
      console.log('Game Cancelled')
      checkedInput = 'CANCEL'
      break;
    }
    //checking human input
    if (!isValidChoice(checkedInput)) {
      alert('Wrong input! Only Input (rock/paper/scissors)');
    }

    // checking and looping
  } while
    (!isValidChoice(checkedInput));
  return checkedInput;
}

//Step 6: 5 Round Game Logic 
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieCount = 0;
  let humanCancel = false;

  //function helper for Early EndGame Conditions
  function isGameOver() {
    const winByThree = humanScore === 3 ||
      computerScore === 3;//human or computer first reach 3 point

    const winByLock = (humanScore === 2 ||
      computerScore === 2) && tieCount === 2;//human or computer first reach 2 point & 2 draw
    return winByThree || winByLock;
  }

  //function helper for human win
  function checkIfHumanWins(human, computer) {
    return (
      (human === 'ROCK' && computer === 'SCISSORS') ||
      (human === 'PAPER' && computer === 'ROCK') ||
      (human === 'SCISSORS' && computer === 'PAPER')
    );
  }

  //step 5: Single Round Logic
  function playRound(humanChoice, computerChoice, currentRound) {
    //humanChoice = humanChoice.toUpperCase();
    if (humanChoice === 'CANCEL') { return; }
    console.log(`ROUND: ${currentRound}`);

    console.log('Computer Choice:', computerChoice);
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
    console.log('|---------------------|');
  }

  //Round 1-5 for-Loop:
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    //human choose cancel
    if (humanSelection === 'CANCEL') {
      humanCancel = true;
      break;
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, i);

    //Early EndGAme Conditions check helper function Ln.66
    if (isGameOver()) {
      console.log('Match point has been reached !');
      break;
    }
  }

  //End Game Announcement:
  function finalResult() {

    if (humanCancel) {
      console.log('Human Choose Cancel');
    }
    else if (humanScore > computerScore) {
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