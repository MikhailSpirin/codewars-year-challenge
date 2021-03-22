// Kata 1 - 22 march 2020

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/

// vowel count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ---------my solution:

function getCount(str) {
  let vowelsArr = str.match(/[aeiou]/ig)
  return vowelsArr != null ? vowelsArr.length : 0;
}

// ---------comments after checking other options:

// Cool lesson is working with null - this is clever solution:

const getCount = (str)=>(str.match(/[aeiou]/ig)||[]).length;