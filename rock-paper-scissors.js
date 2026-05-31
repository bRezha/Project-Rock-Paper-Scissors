function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) { return 'ROCK' }
  else if (randomNumber === 1) { return 'PAPER' }
  else { return 'SCISSORS' }
}
console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt('Input your Choice');
  return userInput;
}
console.log(getHumanChoice());
