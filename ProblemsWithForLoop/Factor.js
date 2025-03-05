// method to  find the factor using prime factorization
function primeFactors(n) {
    let factors = [];
    
    while (n % 2 === 0) {
      factors.push(2);
      n = n / 2;
    }
    
    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
    
    if (n > 2) {
      factors.push(n);
    }
    
    return factors;
  }
  
  //taking the command line input 
  const number = parseInt(process.argv[2]);
  
  console.log(`Prime factors of ${number}:`);
  const factors = primeFactors(number);
  console.log(factors.join(", "));
  