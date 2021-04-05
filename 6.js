// Kata 6 - 31 march 2020

// https://www.codewars.com/kata/517abf86da9663f1d2000003

// you need to check if wal is walid: exactly 10 minutes, returns you back to orgiginal point


// ---------my solution:

function isValidWalk(walk) {
  return walk.length == 10 &&
    walk.filter(x=>x=='n').length-walk.filter(x=>x=='s').length == 0 &&
    walk.filter(x=>x=='e').length-walk.filter(x=>x=='w').length == 0 ? true : false;
}

// --------- Comments:
// First tried to solve it via reducing array - using its items as commands
// then went for some coffee and understand that there is no sense in it, 
//i can isolate each separate dimension and just count its ++ and --. 
// So task is 3 conditions now and became very simple.

// No other solutions today, i didn't find anything interesting. 
//Maybe, counting commands could be extracted to separate function