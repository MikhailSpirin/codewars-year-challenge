// Kata 17 - 12 april 2020

// longest_palindrome

// find logest palindrome in some str


// ---------my solution:

longestPalindrome=function(s){
  const checkIfPalindrome = (arr) => arr.join("") == arr.reverse().join("")
  const findMaxPalindrome = (acc,c,ind,arr)=> {    
    let maxP = "";
    //check case of odd length palindrome
    let j=1;
    let tryP = c;
    while((ind-j)>=0 && (ind+j)<=arr.length) {
      tryP = [arr[ind-j], ...tryP, arr[ind+j]];
      if (checkIfPalindrome(tryP) && tryP.length > maxP.length) {
        maxP = tryP.join("");
      } else break;
      j++;
    }

    j=1;
    tryP = [c, arr[ind+1]];
    while((ind-j)>=0 && (ind+j+1) <= arr.length) {
      tryP = [arr[ind-j], ...tryP, arr[ind+j+1]];
      if (checkIfPalindrome(tryP) && tryP.length > maxP.length) {
        maxP = tryP.join("");
      } else break;
      j++;
    } 
    if (checkIfPalindrome(tryP) && tryP.length > maxP.length)
      maxP = tryP.join("");    
    if (!maxP) {
      maxP = c;
    } 
    return acc.length < maxP.length ? maxP : acc;
  }
  
   return s.split("").reduce(findMaxPalindrome,[]).length;
}

// that was really tough for me, as i couldn't find small cool algorytm for this. Except bruteforce, only
// idea which i thought of is check all symbols and check if to both forward and backward it has palindrome. 
// Complexity looks like O(n2)
// My silution has a lot to enhance, but i can't come up with good enhancements
// Anyway, as o understand, there is only 1 algorytm which is simpler - manaker algorytm
// Also not sure, but maybe approach which is called dynamic programming could be better than mine

// by far - the most complicated task for me