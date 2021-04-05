// Kata 9 - 4 april 2020

// https://www.codewars.com/kata/54d7660d2daf68c619000d95

// fraction to fractions with common denominator


// ---------my solution:

function convertFrac(lst){
  const lcm = (a,b) => a/gcd(a,b)*b;
  const gcd = (a,b) => b==0 ? a : gcd (b, a % b);
  let commonDenom = lst.map(x=>x[1]).reduce((acc,curr)=>lcm(acc,curr), 1);
  return lst.reduce((acc,curr)=> `${acc}(${curr[0]*commonDenom / curr[1]},${commonDenom})`,"")
}

// im very proud of my reduce usage, its very cool in this case. Also it was interesting to try again gcd recursion -
// i hope i will remember algorythm once. At least i remember gcd/lcm terms.