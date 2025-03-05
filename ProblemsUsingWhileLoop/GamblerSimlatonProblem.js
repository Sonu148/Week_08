// Gambler's problem simulation
let balance = 100;
let betCount = 0;
let winCount = 0;

function placeBet() {
  return Math.random() < 0.5; 
}

while (balance > 0 && balance < 200) {
  betCount++;
  if (placeBet()) {
    balance += 1; 
    winCount++;
  } else {
    balance -= 1;  
  }
  console.log(`Balance: Rs ${balance}, Wins: ${winCount}, Bets: ${betCount}`);
}

if (balance >= 200) {
  console.log(`Gambler reached the goal of Rs 200!`);
} else {
  console.log(`Gambler went broke!`);
}