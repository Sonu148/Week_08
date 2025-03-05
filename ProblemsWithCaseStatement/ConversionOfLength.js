const conversionChoice = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]); 

switch (conversionChoice) {
    case 1:
        console.log(`${value} feet = ${value * 12} inches`);
        break;
    case 2:
        console.log(`${value} inches = ${value / 12} feet`);
        break;
    case 3:
        console.log(`${value} feet = ${value * 0.3048} meters`);
        break;
    case 4:
        console.log(`${value} meters = ${value * 3.28084} feet`);
        break;
    default:
        console.log("Please enter a valid conversion option (1-4).");
}
