- [Project: Rock Paper Scissors - Pseudocode](#project-rock-paper-scissors---pseudocode)
  - [Step 1: Project Setup](#step-1-project-setup)
  - [Step 2: Computer Choice Logic](#step-2-computer-choice-logic)
    - [FUNCTION: getComputerChoice()](#function-getcomputerchoice)
  - [Step 3: Human Choice Logic](#step-3-human-choice-logic)
    - [FUNCTION: getHumanChoice()](#function-gethumanchoice)
  - [Step 4: Game Scores Initialization](#step-4-game-scores-initialization)
  - [Step 5: Single Round Logic](#step-5-single-round-logic)
    - [FUNCTION: playRound(humanChoice, computerChoice)](#function-playroundhumanchoice-computerchoice)
  - [Step 6: 5 Round Game Logic](#step-6-5-round-game-logic)
    - [FUNCTION: playGame()](#function-playgame)
  - [Execution](#execution)

# Project: Rock Paper Scissors - Pseudocode

## Step 1: Project Setup

- Create an HTML file.
- Create an external JavaScript file and link it to the HTML file.

## Step 2: Computer Choice Logic

### FUNCTION: getComputerChoice()

- **STORE** a random integer from 0 to 2 (0 = 'ROCK', 1 = 'PAPER', 2 = 'SCISSORS').
- **IF** number is 0:
  - **RETURN** 'ROCK'
- **ELSE IF** number is 1:
  - **RETURN** 'PAPER'
- **ELSE**:
  - **RETURN** 'SCISSORS'

## Step 3: Human Choice Logic

### FUNCTION: getHumanChoice()

- **STORE** `userInput` = **PROMPT** the user to input their choice.
- **RETURN** `userInput`

## Step 4: Game Scores Initialization

- **STORE** `humanScore` = 0
- **STORE** `computerScore` = 0
- **STORE** `tieCount` = 0

  _(Moved inside the playGame function in Step 6 to keep global scope clean)_

## Step 5: Single Round Logic

### FUNCTION: playRound(humanChoice, computerChoice)

- **STORE** `humanChoice` = Convert `humanChoice` to uppercase.
- **IF** `humanChoice` === `computerChoice`:
  - **PRINT** "DRAW!"
- **ELSE IF** `humanChoice` === 'ROCK' **AND** `computerChoice` === 'SCISSORS':
  - **PRINT** "You Win! Rock beats Scissors"
  - **ADD** 1 to `humanScore`
- **ELSE IF** `humanChoice` === 'PAPER' **AND** `computerChoice` === 'ROCK':
  - **PRINT** "You Win! Paper beats Rock"
  - **ADD** 1 to `humanScore`
- **ELSE IF** `humanChoice` === 'SCISSORS' **AND** `computerChoice` === 'PAPER':
  - **PRINT** "You Win! Scissors beats Paper"
  - **ADD** 1 to `humanScore`
- **ELSE**:
  - **PRINT** "You LOSE! COMPUTER BEATS YOU."
  - **ADD** 1 to `computerScore`

## Step 6: 5 Round Game Logic

### FUNCTION: playGame()

- **STORE** `humanScore` = 0
- **STORE** `computerScore` = 0
- **STORE** `tieCount` = 0

- ### ROUND 1
  - **STORE** `humanSelection` = **CALL** getHumanChoice()
  - **STORE** `computerSelection` = **CALL** getComputerChoice()
  - **CALL** playRound(humanSelection, computerSelection)

- ### ROUND 2 (Recall functions and overwrite old data)
  - `humanSelection` = **CALL** getHumanChoice()
  - `computerSelection` = **CALL** getComputerChoice()
  - **CALL** playRound(humanSelection, computerSelection)

- ### ROUND 3
  - `humanSelection` = **CALL** getHumanChoice()
  - `computerSelection` = **CALL** getComputerChoice()
  - **CALL** playRound(humanSelection, computerSelection)

- ### ROUND 4
  - `humanSelection` = **CALL** getHumanChoice()
  - `computerSelection` = **CALL** getComputerChoice()
  - **CALL** playRound(humanSelection, computerSelection)

- ### ROUND 5
  - `humanSelection` = **CALL** getHumanChoice()
  - `computerSelection` = **CALL** getComputerChoice()
  - **CALL** playRound(humanSelection, computerSelection)

- ### END GAME (Final Results)
  - **PRINT** "Final Score -> Human: " + `humanScore` + " vs Computer: " + `computerScore`
  - **IF** `humanScore` > `computerScore`:
    - **PRINT** "CONGRATULATIONS! YOU WIN THE MATCH!"
  - **ELSE IF** `humanScore` < `computerScore`:
    - **PRINT** "GAME OVER! COMPUTER WINS THE MATCH."
  - **ELSE**:
    - **PRINT** "THE MATCH ENDS IN A TIE!"

---

## Execution

- **CALL** playGame() to start the game.
