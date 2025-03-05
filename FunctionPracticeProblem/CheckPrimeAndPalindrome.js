function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return parseInt(reversedStr);
}

function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        return `The number ${num} is not prime.`;
    }

    let palindrome = getPalindrome(num);

   if (isPrime(palindrome)) {
        return `The number ${num} is prime, and its palindrome ${palindrome} is also prime.`;
    } else {
        return `The number ${num} is prime, but its palindrome ${palindrome} is not prime.`;
    }
}

console.log(checkPrimeAndPalindrome(13));  // Prime check with palindrome prime check
