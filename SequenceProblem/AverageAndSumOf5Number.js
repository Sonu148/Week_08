function getRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90) + 10;
}

let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomTwoDigitNumber());
}

function sum(){
    let sum=0;
    for(let i=0; i<randomNumbers.length; i++){
        sum+=randomNumbers[i];
    }
    return sum;
}
let totalSum=sum();
let average = totalSum / randomNumbers.length;

console.log("Random 2-digit numbers: ", randomNumbers);
console.log("Sum: ", totalSum);
console.log("Average: ", average);
