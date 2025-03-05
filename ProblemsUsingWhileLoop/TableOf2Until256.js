// Taking command-line argument for n
const n = parseInt(process.argv[2]);

let power = 1;
let i = 1;

// Loop to print powers of 2 up to 256
while (power <= 256 && i <= n) {
  console.log(`${power}`);
  power *= 2;  
  i++; 
}
