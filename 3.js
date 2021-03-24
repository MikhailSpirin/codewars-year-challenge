// Kata 3 - 24 march 2020

// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).


// ---------my solution:

function toCamelCase(str){
  return str.split(/[-_]/).map((x,i) => i==0 ? x : x.charAt(0).toUpperCase() + x.slice(1)).join("")
}

// --------- Comments:
// Main problem here for me was:
// 1.several separators for split (now it know i can use regexp in split(re))
// 2.to exclude first character. Solved with checking index, 
// but i think better way may be is to use reduce. But i didn't find how to do it... 
// Example of something similar is here:

var products = [{ Name: 'milk', price: 2.50, Category: 'groceries' }, { Name: 'shirt', price: 10, Category: 'clothing' }, { Name: 'apples', price: 5, Category: 'groceries' }],
    categories = products.reduce(function (r, a) {
        if (!~r.indexOf(a.Category)) {
            r.push(a.Category);
        }
        return r;
    }, []);

// this solution is also cool, based completely on regexps. Didn't know i can use function in replace:
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}