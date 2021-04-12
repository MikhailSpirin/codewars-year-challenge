// Kata 11 - 6 april 2020

// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

// multiply all n primes


// ---------my solution:

function numPrimorial(n){
  const findPrimes = (lim) => {
    let arr = Array(lim).fill(true);
    arr[0]=arr[1]=false;
    for (let i=2; i<=Math.sqrt(lim); i++) 
      if (arr[i] == true) for (j=i*i; j<lim; j+=i) 
        arr[j] = false;  
    return arr.reduce((out, bool, i) => bool ? out.concat(i) : out, [] ); 
  }
  primes=[];
  for (i=n; primes.length < n; i*=2) primes = findPrimes(i);
  return primes.slice(0,n).reduce((acc,curr) => acc *= curr, 1)
}

// I hope i will finally remember Sieve of Eratosthenes algorytm. Each time.. This is very logical question on any interview, i must remember it
// Another problem - i know it can be optimized, because i calculate array or primes each time