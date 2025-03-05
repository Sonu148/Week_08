// function to calcalate factorial of number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  const num = parseInt(process.argv[2]);
  
  console.log(`Factorial of ${num} is: ${factorial(num)}`);
  