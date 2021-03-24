// Kata 2 - 23 march 2020

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// find next perfect square

// ---------my solution:

function findNextSquare(sq) {
  let base = Math.sqrt(sq);
  return base % 1 != 0 ? -1 : (base+1)*(base+1);
}
