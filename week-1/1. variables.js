/*
Variable Basics:
Create variables to store and log information:
 - Declare a variable for your name and console log it.
 - Declare a variable for your age and console log it.

Explore data types and type conversion:
 - Create variables of different data types (string, number, boolean).
 - Use typeof to check the data type of variables and console.log it.
 - Convert a string to a number and vice versa and return it from a function.

 Arrays:
Work with arrays:
 - Create an array of your favorite fruits and log them.
 - Write a program to find the largest number in an array and log it.

 Objects:
Explore objects:
 - Create an object representing a person with properties like name, age, and country.
 - Write a function that takes a person object as an argument and logs their information.
*/


// 1.solution1 
let name="Ram"
console.log(name)

let age=26
console.log(age)


// solution2
let a="1"
let b =true
let c=4
console.log(typeof(Number(a)))
console.log(typeof(b))
console.log(typeof(c))


// Solution3
var personalInfo= {
    name: "Ram",
    age:"26",
    country:"India"

} 

function printIt(personalInfo){
    return personalInfo
}

console.log(printIt(personalInfo))