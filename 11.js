// Kata 10 - 5 april 2020

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// Maximum subarray sum


// ---------my solution:

var maxSequence = function(arr){
  let bestSum = 0;
  return arr.reduce((acc, curr)=>{
    bestSum = (bestSum + curr > curr) ? bestSum + curr : curr;
    return (acc > bestSum) ? acc : bestSum
  },0)
}

// This is another algorytm - Kadane Algorytm, which i have no chance to come up with)) So i just read about it it in wiki 
//and created my understood version of it

// nothing that clever in other solutions tho