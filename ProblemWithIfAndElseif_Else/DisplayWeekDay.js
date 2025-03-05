const number =parseInt(process.argv[2]);
const weekDay=["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"];

if(number<1 || number>7){
    console.log("Enter number between --> 1-7");
}
else{
    console.log(weekDay[number-1]);
}