//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")
var numA = -10;
while(numA <= 19) {
  console.log(numA);
  numA++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
var numB = 10;
while(numB <= 40){
  if(numB % 2 === 0){ 
  console.log(numB);
  }
  numB++;
}

//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333")
var numC = 300;
while(numC <= 333){
if(numC % 2 !== 0){
  console.log(numC);
}
  numC++;
}

//Print all numbers divisible by 3 and 5 between 5 and 30
console.log("Print all numbers divisible by 3 and 5 between 5 and 30")
var numD = 5;
while(numD <= 50){
if((numD % 3 === 0) && (numD % 5 === 0)){
  console.log(numD);
}
  numD++;
}