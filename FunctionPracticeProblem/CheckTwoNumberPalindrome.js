function isPalindrome(number) {
    let str = number.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 
