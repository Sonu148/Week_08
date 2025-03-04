const year = parseInt(process.argv[2]);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

console.log(isLeapYear(year) ? `${year} is a Leap Year` : `${year} is not a Leap Year`);
