function displayPlaceValue(number) {
    let placeValue = ["Unit", "Ten", "Hundred", "Thousand", "Ten Thousand", "Hundred Thousand", "Million"];
    let numString = number.toString();  
    let length = numString.length;

    for (let i = 0; i <length; i++) {
        let digit = Math.floor(number%10);
        number = number/10;
        console.log(`Digit: ${digit} - Place Value: ${placeValue[i]}`);
    }
}

displayPlaceValue(12345);
