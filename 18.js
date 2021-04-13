// Kata 18 - 13 april 2020

// Statistics for an Athletic Association

// find range, average,median values


// ---------my solution:

const convToMS = (i) => {
  let t = i.split("|");
  return new Date(1970,1,1,t[0],t[1],t[2]).getTime()
}
const convToDate = (i) => {
  let t = new Date(i)
  return `${zero(t.getHours())}|${zero(t.getMinutes())}|${zero(t.getSeconds())}`
}
const zero = (i) => i < 10 ? `0${i}` : i;
const stat = (strg) => {
  if (!strg) return "";
  let tMS = strg.split(", ").map(convToMS).sort((a,b)=>a-b);
  let len = tMS.length;
  let range = tMS[len-1] - tMS[0];
  let average = tMS.reduce((a,b) => a+b,0) / len;
  let median = len % 2 == 0 ? (tMS[len/2] + tMS[len/2-1]) / 2: tMS[(len-1)/2];
  return `Range: ${convToDate(range)} Average: ${convToDate(average)} Median: ${convToDate(median)}`      
}

// Basically that wasn't complicated - string manipulation, main task here for me was to do it clean and readable
// Training "team point of view" when writing a code
// I see no cooler solutions than mine

// Just one additional comment - here i tried to split functionality in different functions, as i try to do clean and pure functions 
// No modification of global vars, no complex actions - just one straigntforwad action