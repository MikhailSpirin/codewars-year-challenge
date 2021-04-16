// Kata 21 - 16 april 2020

// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/

// reverse or rotate


// ---------my solution:

function revrot(str, sz) {
  const isSumCubesDivsBy2 = (i) => i.reduce((acc,curr)=>acc+(+curr)**3, 0) % 2 == 0;
  let res=[];
  if (sz==0) return "";
  for (let i=0; i<=str.length; i+=sz)
      res.push(str.slice(i,i+sz).split(""));
  if (res[res.length-1].length<sz) res=res.slice(0,res.length-1);
  return res.map(i=>{
   return isSumCubesDivsBy2(i) ? i.reverse().join("") : [...i.slice(1), i[0]].join("")
  }).join("")

}

// I solved the problem, but in comparison to best answer i see that i don't have enough experience (yet) about organizing code. 
// This thing with 3 const functions looks and reads wonderful. Code in solution below is clean and clear. 
// Mine is spaghetti in comparison, but i will try
// Also i see that i named fucntion wrong here...

function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}