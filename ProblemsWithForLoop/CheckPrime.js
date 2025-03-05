const n= parseInt(process.argv[2]);
function isPrime(n) {
    if (n <= 1)
      return false;
  
    for (let i = 2; i < n; i++)
      if (n % i == 0){
        return false;
      }
      return true;
  }
  
  
  isPrime(n) ? console.log("it is prime"): console.log("it is not prime");
  