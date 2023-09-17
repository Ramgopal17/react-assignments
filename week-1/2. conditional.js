/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 - result should be logged in the terminal
 */

 function evenOrOdd(num){
    if(num%2==0){
        return "number is even"
    }else{
        return "number is odd"  
    }

 }

 console.log(evenOrOdd(4))

//  --------creating a calculator--------------

function add(a,b){
    return a+b
}
function substract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

console.log(add(5, 2));
console.log(substract(5, 2));
console.log(multiply(5, 2));
console.log(divide(5, 2));
