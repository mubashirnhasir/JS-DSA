// Concatination 
// Number + String is concatincation not addition
// let a = 10;
// let b ="11"
// console.log(typeof(a+b))

// Addition
// Number + Number is addition
// let x = 10;
// let y = 11;
// console.log(typeof(x+y))


let r =10;
let s = 20;
console.log("The sum of this is " + r +s); //This will give output as The sum of this is 1020 as we have not proovided the brackets 
console.log("The sum of r and s is" + (r+s)) // This will gice output as the sum is 30

//The Subtraction in JS will give you a Number instead of concatination  
console.log("1"-1); //or
console.log(1-1); // are same 
// This Phenomena is Called as COERCION



//Prompt Function always takes input as a String so if we have to convert this we should change the Type of age by Number Keyword and there is other way to do it as follows Example 1&2 This method of changing data Types is called Type Casting
// let age = prompt("Enter Your Age")

// Example 1
// let age = Number(prompt("Enter your age"))
// console.log(age)

// Example 2
// let age = prompt("Enter your age")
// age = Number(age);
// console.log(age)

//Swapping of variabels using 3 Methods 
// 1. Using Temp varibale 
// let a =10;
// let b= 20;
// let c;

// console.log(a,b);
// c = a; // c = 10

// a = b; // a = 20
// b = c; // b = 10
// console.log(a,b);



// 2. Using Mathematical Operations
// let a = 10;
// let b = 20;

// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20
// console.log(a,b) 

// 3. Using JS Destructuring
// let a = 10;
// let b = 20;

// [a,b] = [b,a]

// console.log(a,b)

//Division in Math give a float or decimal values, if we dont want decimal values we can use Math.floor()
// let a = 7
// let b = 2
// console.log(a/b);
// console.log(Math.floor(a/b)); // This will Give the exact value based on what you get as a reminder if you get 3.5 as a reminder it will floor it to 3 


//Sum of all Digits
// let a = 1234

// console.log(a%10);


//Equality Operator == (Checks only the data) if "12" == 12(this will be returned as true), === (Checks the dataType as well)

//Logical Operators && , || 

// let i = 11; // after i++ 12
// i =  i++ + ++i;
// console.log(i)

// let a =11, b = 22;
// let c = a+b+ a++ + ++b + ++a + ++b

// console.log("a = ",a);
// console.log("b = ",b);
// console.log("c = ",c);


// Math Functions in JS
Math.round(12.5) 
Math.ceil(11.7) // add 1 Number to original value
Math.floor(12.2) //same as original value
Math.trunc(10.223) // It removes the decimal part from given number
Math.pow(2,5) //2^5 this fucntion takes 2 values
Math.sqrt(16) // makes the square roots
Math.abs(-12) //Convert -ve numbers into +ve
Math.random() // generates random between 0 - 1
console.log(Math.max(12,23,66,44,2,1)) // Returns maximum value
let a = 2.3456
a.toFixed(2) // return only 2 digits after the decimals

a =10;
b=20;
c = 10;

s = (a+b+c)/2

console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));

// Paremiter of a rectangle
console.log(2*(a+b))

// circumfrence of a circle

r = 12;

console.log((2*Math.PI*r).toFixed(2));

// 2piR