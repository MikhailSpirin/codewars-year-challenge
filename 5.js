// Kata 5 - 29 march 2020

// https://www.codewars.com/kata/54b724efac3d5402db00065e

// Decode morse code: 3 spaces is space, 1 space is next letter. SOS has special code. Trim spaces on start and end

// my solution:

decodeMorse = function(morseCode){
  return morseCode.split("   ").map(word=>word.split(" ").map(ch=>MORSE_CODE[ch]).join("")).join(" ").trim();
}

// Problem is internal map. I guess for best practices, it would be much better 
// if i had an internal function for decoding separate letters - much readable, 
// and i found such solution at 1st place among best practices

// cool solution is:

decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}