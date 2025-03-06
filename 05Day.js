// Conditionals in JS & Its type of questions

// Range Question give the payable amount for 5,10,20% of discount

let amount = 10000;

if(amount>0 && amount <=5000){
    console.log(amount)
} 
else if(amount>5000 && amount <= 7000){
    console.log(amount - Math.floor((5*amount)/100))
}
else if(amount> 7000 && amount<= 9000){
    console.log(amount - Math.floor((10*amount)/100))
}
else if(amount>9000){
    console.log(amount - Math.floor((20*amount)/100))
}