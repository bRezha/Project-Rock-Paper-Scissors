// 1. Fungsi Pembantu: Khusus menyimpan aturan "Siapa mengalahkan Siapa"
function checkIfHumanWins(human, computer) {
  return (
    (human === 'ROCK' && computer === 'SCISSORS') ||
    (human === 'PAPER' && computer === 'ROCK') ||
    (human === 'SCISSORS' && computer === 'PAPER')
  );
}

// 2. Fungsi Utama: Mesin Pengadu Ronde
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  console.log('Computer Choice:', computerChoice);
  console.log('Human Choice:', humanChoice);

  // EVALUASI KONDISI (Jauh lebih pendek dan mudah dibaca seperti buku)
  if (humanChoice === computerChoice) {
    console.log('DRAW!');
    tieCount++;
  }
  else if (checkIfHumanWins(humanChoice, computerChoice)) {
    // Memanfaatkan Template Literals agar pesan dinamis sesuai pilihan yang menang
    console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
  else {
    // Jika tidak seri dan manusia tidak menang, PASTI komputer yang menang
    console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  // 3 Baris Console Log milikmu yang sudah rapi berdasarkan prinsip KISS
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Draw Score: ${tieCount}`);
}