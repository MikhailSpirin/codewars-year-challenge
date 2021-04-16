// Kata 19 - 14 april 2020

// https://www.codewars.com/kata/52724507b149fa120600031d/

// Convert number (0<n<999999) to word


// ---------my solution:

function number2words(n, result = ""){
  const d = {
    0:"zero", 1:"one", 2:"two", 3:"three", 4: "four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine",
    10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 
    16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",
    20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety",
  }
    switch (true) {
        case (n<=20 || n==30 || n==40 || n==50 || n==60 || n==70 || n==80 || n==90) : 
          result = `${result}${d[n]}`; break;
        case (n>20 && n<100): 
          result = `${d[n-n%10]}-${d[n%10]}`; break; 
        case (n%100 == 0 && n<1000):
          result = `${d[Math.round(n/100)]} hundred`; break;
        case (n>=100 && n<1000):
          result = `${d[Math.floor(n/100)]} hundred ${number2words(n%100, result)}`;break;
        case (n%1000 == 0 && n<10000):
          result = `${d[Math.floor(n/1000)]} thousand`; break;
        case (n>=1000 && n<999999):
          result = `${number2words(Math.floor(n/1000), result)} thousand ${number2words(n%1000, result)}`;break;
    }
  return result;// works for numbers between 0 and 999999   
}

// This task tought me that i really can use recursion in real life, and take this decision naturally. My solution is not perfect,
// i see that i addded to many conditions - seems that can be done only with 3. But this is MINE solution)

// Probably after refactor i could approach this best solution. This is just a lot of ternary checks + now i see that 
// i don't need object in this task

function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }