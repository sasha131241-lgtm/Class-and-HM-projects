const number1 = 1210;
const numStr1 = String(number1);

let oddPosSum1 = Number(numStr1[0]); 
let evenPosSum1 = Number(numStr1[1]); 

if (numStr1[2]) {
    oddPosSum1 += Number(numStr1[2]); 
}
if (numStr1[3]) {
    evenPosSum1 += Number(numStr1[3]); 
}

if (oddPosSum1 === evenPosSum1) {
    console.log(number1 + " — счастливое");
} else {
    console.log(number1 + " — не счастливое");
}



const number2 = 135;
const numStr2 = String(number2);

let oddPosSum2 = Number(numStr2[0]);  
let evenPosSum2 = Number(numStr2[1]); 

if (numStr2[2]) {
    oddPosSum2 += Number(numStr2[2]); 
}
if (numStr2[3]) {
    evenPosSum2 += Number(numStr2[3]);
}

if (oddPosSum2 === evenPosSum2) {
    console.log(number2 + " — счастливое");
} else {
    console.log(number2 + " — не счастливое");
}


console.log("=====================================");



const number3 = 123321;
const numStr3 = String(number3);


let sumFirst3 = Number(numStr3[0]) + Number(numStr3[1]) + Number(numStr3[2]);


let sumLast3 = Number(numStr3[3]) + Number(numStr3[4]) + Number(numStr3[5]);

if (sumFirst3 === sumLast3) {
    console.log(number3 + " — счастливое");
} else {
    console.log(number3 + " — не счастливое");
}




const number4 = 712004;
const numStr4 = String(number4);


let sumFirst4 = Number(numStr4[0]) + Number(numStr4[1]) + Number(numStr4[2]);


let sumLast4 = Number(numStr4[3]) + Number(numStr4[4]) + Number(numStr4[5]);

if (sumFirst4 === sumLast4) {
    console.log(number4 + " — счастливое");
} else {
    console.log(number4 + " — не счастливое");
}


console.log("=====================================");


let sum1=0
let sum2=0
let pos=1
let num=3234
while(num!=0){
    if (pos%2==0){
        sum1+=num%10
    } else{
        sum2+=num%10
    }
    num = (num=num%10 )/10
    pos++
}
if (sum1 === sum2){
    console.log("Счастливое число");
} else {
 console.log("Не счастилвое")    
}


console.log("===========================")
num=1234
sum1=0;
sum2=0;
while(num){
    sum1+=num%10;
    num=(num-num%10)/10
    sum2+=num%10;
    num=(num-num%10)/10
}

if(sum1 === sum2){
    console.log("Счастливое число");
} else {
    console.log("Не счастливое число")
}

console.log("==================");


num=3234
let sum=0;
while (num){
    sum=num%10-sum;
    num=(num-num%10)/10
}
if (sum===0) {
    console.log( "good");
} else {
    comsole.log("no good");    
}
