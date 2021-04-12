// Kata 12 - 8 april 2020

// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

// decomposing factorial


// ---------my solution:

function decomp(n) {
  const subDecomp = (num,dividers) => {
    let rem = num;
    for (let i=2; i<=Math.sqrt(num); i++) {
      if (rem % i === 0){
        if (!dividers[i]) dividers[i] = 0;
        while (rem % i === 0){
          dividers[i]++;
          rem /= i;
        }
      }
    }
    if (rem > 1)
      dividers[rem] = !dividers[rem] ? 1 :dividers[rem]+1;
    return dividers;
  }
  divs = {};
  for (let i=2; i<=n; i++){
    divs=subDecomp(i,divs);
    }
  return Object.keys(divs).map(x=>divs[x] == 1 ? x : `${x}^${divs[x]}`).join(' * ');
}

// my first attempt took me too far. I shoud reduce usage of reduce and stop generating arrays all the time - 
// it didn't pass random tests due to time of execution.. of course, there are very many divisions

// and i cheated fot original solution.. dound idea on different site...

function getPrimes(n) {
  let lim = Math.sqrt(n);
  let numbers = Array(n+1).fill().map((_,i)=>i);
  numbers[0] = numbers[1]=0;
  for (i=2; i<lim; i++) 
    for (j=i*2; j<numbers.length; j+=i)
      numbers[j]=0;
  return numbers.filter(i=>!!i)
}

function getDivs(n,primes) {
  //console.log(primes);
  return primes.reduce((acc,curr)=>{
    let divs = [];
    while (n % curr == 0 && n >= curr){
      n /= curr; 
      divs = [...divs, curr]; 
    }
    return [...acc,...divs];
  },[])
}

function decomp(n) {
  let primes = getPrimes(n);
  let divs = Array(n+1).fill().map((_,i)=>i).filter(i=>i >= 2)
      .reduce((acc,curr)=>[...acc, ...getDivs(curr,primes)],[])
      .reduce(function(acc, curr) {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
      }, {});
  return Object.keys(divs).map(x=>divs[x] == 1 ? x : `${x}^${divs[x]}`).join(' * ');
}

