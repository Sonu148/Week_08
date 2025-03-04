var number =[123,345,321,421,101]

function max(){
let max=0;
for(let i=0; i<number.length; i++){
    if(number[i]>max){
        max=number[i];
    }
   }
   return max;
}
function min(){
    let min=maxNumber;
    for(let i=0; i<number.length; i++){
       if(number[i]<min){
        min=number[i];
       }
    }
    return min;
}
let maxNumber=max();
let minNumber=min();
console.log("Max :"+maxNumber );
console.log("Max :"+minNumber);