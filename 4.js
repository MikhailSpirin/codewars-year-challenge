// Kata 3 - 24 march 2020

// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// my solution:

function zeros (n) {
  let factors5 = []
  let num = 1;
  do 
    factors5 = [...factors5, num *=5];
  while (num<n);
  return factors5.reduce((counter, item)=> counter += Math.floor(n / item), 0)
}

// Very cool cata, but its pure math
// I tried 3 approaches - first generate array of digits and then delete all except 2,5 and 0. Too big array. 12s timeout/
// 2nd approach was - find how many terms i have - of 2 and 5 and 0. Works with big problem,failed after 100 (because of 25)
// Solved it only by finding solutioon outside - that we have anough factors 2, so we need only how much 5s, 25s, 125s we have there
// Overengineered, generated array of factors5 and then reduce on it
// Most cool solution is this one:

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}