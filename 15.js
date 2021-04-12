// Kata 15 - 10 april 2020

// https://www.codewars.com/kata/5375f921003bf62192000746

// Word of a10n


// ---------my solution:

const abbreviate = (string) => string.replace(/\w+/gim,
        (s)=>s.length<4 ? s : `${s.slice(0,1)}${s.length-2}${s.slice(s.length-1)}`);

// Oneliner - which i do like. Cool that my solution is actually almost exactly "best practices" + "clever" solution. 
