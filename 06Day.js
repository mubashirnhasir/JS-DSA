// Loops 

// for(var i=200; i>99; i--){
//     console.log(i);
// }

// for(let i =1; i<10; i++){
//     // console.log(i);
//     i += 1
//     console.log(i);
    
// }




// sum of n natural numbers // + //

// var n = 4;
// var sum = 0;

// for(let i =1;i<=n ;i++){
//     sum = sum + i 
// }
// console.log(sum)

// var n = Number(10)

// if(isNaN(n)){
//     console.log("Number de re bhaiii!!!");
// }
// else{
//     if(n>0){
//         var sum = 0
//         for(let i=1;i<=n;i++){
//             sum = sum+ i
//         }
//         console.log(sum);
        
//     } 
//     else{
//         console.log("Positive number de bhaii")
//     }
// }


// factorals of n natural numbers // * //
// var n = Number(10)

// if(isNaN(n)){
//     console.log("Number de re bhaiii!!!");
// }
// else{
//     if(n>0){
//         var fact = 1
//         for(let i=1;i<=n;i++){
//             fact = fact * i
//         }
//         console.log(fact);
        
//     }
//     else{
//         console.log("Positive number de bhaii")
//     }
// }





// factorial of the number

// var n=36;

// for(let i =1;i<=Math.floor(n/2);i++){
//     if(n%i === 0){
//         console.log(i); 
//     }
// }

// console.log(n);


// Prime number ki logic

// Jo bhi number lere uska half kardo (n/2) and usku check karo ki wo divisible hai kiya 1-(n/2) ke loop men ? agr hai divisible by 0 to prime number nai hai, agar nai hai divisible to prime number hai.

// var n =11;

// let isPrime = true; // assume karo ki already prime hai

// for(let i =2;i<=Math.floor(n/2);i++){
//     if(n%i === 0){
//         isPrime = false; // agr divisible by zero hai to prime number nai hai 
//         break;
//     }
    
// }
// console.log(isPrime);

// function isPrime(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2 ==0) return false;
//     for(let i =3; i<= Math.floor(Math.sqrt(n));i+=2){
//         if(n%i === 0) return false
//     }
//     return true
// }

// console.log(isPrime(12))
