// Kata 7 - 1 april 2020

// https://www.codewars.com/kata/5208f99aee097e6552000148

// break camelcase with spaces. camelCase => camel Case


// ---------my solution:

function solution(string) {
    return string.split("")
      .reduce((acc,c)=> c.toLowerCase()!=c ? acc+" "+c : acc+c, "")
}

// --------- Comments:
// I know i know its regexp. Capturing groups, lookahead probably and $1 $2. 
//But i wanted to train reduce, its the only higher order function, which i don't "feel" yet. 
//But i definitely feel its very powerful.
//Solution came suprisingly fast, i just had to remember how to return acc. BTW, correct namings helped, need to remember this