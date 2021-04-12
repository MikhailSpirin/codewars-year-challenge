// Kata 16 - 11 april 2020

// https://www.codewars.com/kata/54a2e93b22d236498400134b

// Count presses

// Given - old phone, need to enter SMS, what is number of presses?


// ---------my solution:

function presses(phrase) {
  let combi = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#' ];
  return phrase.toUpperCase().split("").reduce((acc, curr)=>{
    let word = combi.filter(i=>i.includes(curr))[0];
    return acc+word.indexOf(curr)+1;
  },0);
}

// Very iportant in this kata for my POV - how to make it simple and effective, 
// so that in real life you can give it diffreent keyboard layouts

// But now i think that simples solution might be better - just additional helper to transform 
//layouts to number of presses and store object with "symbol":"number of presses"