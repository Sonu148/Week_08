function findMaxMin(a, b, c) {
    let result1 = a + b * c;
    let result2 = c + a / b;
    let result3 = a % b + c;
    let result4 = a * b + c;
    
    let results = [result1, result2, result3, result4];
    
    let maxResult = Math.max(...results);
    let minResult = Math.min(...results);
    
    console.log(`Results:`);
    console.log(`1. a + b * c = ${result1}`);
    console.log(`2. c + a / b = ${result2}`);
    console.log(`3. a % b + c = ${result3}`);
    console.log(`4. a * b + c = ${result4}`);
    
    console.log(`Maximum result: ${maxResult}`);
    console.log(`Minimum result: ${minResult}`);
}

let a = 5;
let b = 10;
let c = 3;
findMaxMin(a, b, c);
