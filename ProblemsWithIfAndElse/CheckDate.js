
const day = parseInt(process.argv[2]);  
const month = parseInt(process.argv[3]); 

// Check if the date is between March 20 and June 20
function isBetweenMarchAndJune(day, month) {
    if (month > 3 && month < 6) {
        return true;
    } else if (month === 3 && day >= 20) {
        return true;
    } else if (month === 6 && day <= 20) {
        return true;
    }
    return false;
}

console.log(isBetweenMarchAndJune(day, month));
