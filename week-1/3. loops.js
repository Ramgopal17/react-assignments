/**
 Countdown Loop:
Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off!"

Even Number Sum:
Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop.

Multiplication Table:
Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.

Reverse a String:
Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it

Factorial Calculator:
Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.

Prime Number Checker:
Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.
 */

function countDown(n){
if(n==0){
    return "Blast off"
}
return countDown(n-1)

}

console.log(countDown(10))

// sol2

function sumofEvenNum(n){
    for(i=0;i<=n;n++){
        if(n%2==0){
            return n*(n+1)/2
        }
    }
}

console.log(sumofEvenNum(50))

// sol3

function multiplicationTable(n) {
    const table = [];
  
    for (let i = 1; i <= 10; i++) {
      table.push(n * i);
    }
  
    return table;
  }
  
  console.log(multiplicationTable(7));
  

  // sol4 reverse a string 
  function reverseString(str) {
    let a = "";
for (let i = str.length - 1; i >= 0; i--) {
    a += str[i];
    }
  
    return a;
  }
  
console.log(reverseString("hello"))

// sol4 

function factorial(n){
    let a=1
    for(i=1;i<=n;i++){
        a=a*i
    }
    return a
}

console.log(factorial(7))

// sol5 prime no checker
function isPrime(n) {
    if (n <= 1) {
      return false; 
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false; 
      }
    }
  
    return true;
}
console.log(isPrime(9))