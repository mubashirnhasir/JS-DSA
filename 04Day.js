//Day 4 of DSA with JS
// FizzBuzz Problem
// let n =200
// for(let i =1; i <=n;i++){
//     if(i%3 === 0){
//         console.log("Fuzzz")
//     }
//     else if(i%5 === 0 ){
//         console.log("Buzzz")
//     }
//     else if (i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz")
//     }
//     else{
//         console.log(i)
//     }
// }

    
// Maximum Profit 

// const maxProfit = (prices)=>{

//    let minPrice = prices[0]
//    let maxProfit = 0;

//    for(let i =0;i< prices.length;i++){
//     const currentPrice = prices[i]

//     minPrice = Math.min(minPrice,currentPrice)

//     const potentialProfit = currentPrice - minPrice
    
//     maxProfit = Math.max(maxProfit, potentialProfit)
//     console.log(maxProfit);
//    }
// }

// const prices = [7,1,5,3,6,4]
// const profit = maxProfit(prices)

// Array Chunk 
// Write a function that take an array and a chunk size as input the function should return a new array where the original array is split into chunks of the specified size 
// Example EncodedAudioChunk([1,2,3,4,5,6,7],3) ===> [[1,2,3],[4,5,6],[7]]


// const chunk = (array,size)=>{
//     let chunked = [0]
//     let index = 0

//     while( index < array.length){
//         const chunkedArray = array.slice(index, index+size)
//         chunked.push(chunkedArray)
//         index += size;
//     }
//     return chunked

// }

// console.log(chunk([1,2,3,4,5,6,7,8,9,10],4));

 
// const chunkArray = (array,size)=>{
//     let chunk = []
//     let index = 0

//     while(index < array.length){
//         const chunks = array.slice(index, index+size)
//         // console.log(chunks);
        
//         chunk.push(chunks)
//         index += size
//     }
//     return chunk;

// }

// console.log(chunkArray([0,1,2,3,4,5,6],2))










