// Kata 14 - 9 april 2020

// https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

// return difference between arrays


// ---------my solution:

function arrayDiff(a, b) {
  return a.reduce((acc, curr) => b.indexOf(curr) == -1 ? [...acc, curr] : acc, []);
}

//i thought it is very clever until i saw this one:

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

//i forgot about filter...