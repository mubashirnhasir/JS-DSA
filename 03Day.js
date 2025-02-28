// Reverse a string
// methods to reverse a strings are 
// 1. Convert String to Array
// 2. reverse the Array
// 3. Convert array back to string

// let str ="mubashir"

// const reverseString = (str) => str.split('')
// This will change the text into array and then we can reverse it

// const reverseString = (str) => str.split('').reverse('')
// this will reverse the array 
// console.log(reverseString("mubashir"))

// join is used to convert the array into string 
// const reverseString = (str) => str.split('').reverse('').join('')
// console.log(reverseString("affan"))


// let updated = str.split('').reverse().join('')

// console.log(updated);


//Pallindrome 
// if the reverse string is equal to the original one then that word is pallindrome
// EX:CDDC ===> CDDC
// Method

// 1. Convert string to array 
// 2. Resverse the array
// 3. Convert array back to string
// 4. Compare Strings

// Tried Method 
// const reversed = (str)=>{
// if(str.split('').reverse().join('') === str){
//     console.log(`found the Pllindrome String ${str}`)
//     return;
// }
// else{
//     console.log(`Not a pallindrome`)
// }
// }

// reversed("abba");

// Video Method 
// const pallindrome = (str)=> str.split('').reverse().join('') === str
// console.log(pallindrome("cddc"));


// Integer Reversal
// 1234 ===> 4321

// const reverseInt = (int)=> {
//     const reversed =  int.toString().split('').reverse('').join('') 
//     return parseInt(reversed) 
    
// }

// console.log(reverseInt(1234));

