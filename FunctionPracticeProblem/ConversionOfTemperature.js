const degF= parseInt(process.argv[2]);
const degC= parseInt(process.argv[3]);

function convertTodegree(){
    console.log(`${degF}F is in degree is ${(degF-32) * 5/9} C`)
}
function convertTofarenh(){
    console.log(`${degC} C is in farenheit is ${(degC*9/5)+32} F`)
}
convertTodegree(degF);
convertTofarenh(degC);