const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let low = 1;
let high = 100;
let guess;
let magicNumberFound = false;

function guessNumber() {
  if (low <= high) {
    guess = Math.floor((low + high) / 2);  

    rl.question(`Is your number ${guess}? (yes/no/greater/less) `, (answer) => {
      if (answer.toLowerCase() === 'yes') {
        console.log('Magic number found:', guess);
        rl.close();
      } else if (answer.toLowerCase() === 'greater') {
        low = guess + 1;  
        guessNumber(); 
      } else if (answer.toLowerCase() === 'less') {
        high = guess - 1;  
        guessNumber(); 
      } else {
        console.log('Please respond with "yes", "no", "greater", or "less".');
        guessNumber();
      }
    });
  } else {
    console.log('It seems like we are out of bounds. Are you sure about your number?');
    rl.close();
  }
}

guessNumber();
