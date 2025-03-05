// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {  
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // Taking input for range
  const start = parseInt(process.argv[2]);
  const end = parseInt(process.argv[3]);
  
  console.log(`Prime numbers between ${start} and ${end}:`);
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  