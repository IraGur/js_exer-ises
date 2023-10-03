/* 

ALGOS============================================================

===== 01 - 00 ==========

const makesTen = (a, b) => a == 10 || b == 10 || a + b == 10;

console.log(makesTen(13, 5));

===== 01 - 01 ==========

const calcAge = (age) => age * 365;

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

===== 01 - 02 ==========

const addUp = (num) => {
   let result = 0;
   for (let i = 1; i <= num; i++) {
      result += i;
   }
   return result;
};
console.log(addUp(3));

===== 01 - 03 ==========

const minMax = (num) => 
   [Math.min(...num),Math.max(...num)];

console.log(minMax([1, 2, 3, 4, 5]));

minMax([2334454, 5]);

minMax([1]);

===== 01 - 04 ==========

const detectWord = (str) =>
   str
      .split("")
      .filter((a) => a.match(/[a-z]/))
      .join("");

----------OR---------------

const detectWord = (str) => {
    let newStr = '';
    str.split('').forEach(letter => {
        if(letter === letter.toLowerCase()){
            newStr += letter;
        }
        
    })
    return newStr;
    
}
   ----------OR---------------

const detectWord = (str) => str.split('').filter(letter => letter === letter.toLowerCase()).join('');
    
    
console.log(detectWord("UcUNFYGaFYFYGtNUH"));

===== 01 - 05 ==========

const sort = (arr) => arr.sort((a, b) => a.price - b.price);

let drinks = [
   { name: "lemonade", price: 10 },
   { name: "lime", price: 10 },
   { name: "coke", price: 8 },
   { name: "vodka", price: 17 },
   { name: "water", price: 3 },
];

sort(drinks); 

===== 01 - 06 ==========

const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;

animals(2, 3, 5);
animals(1, 2, 3);
animals(5, 2, 8);

===== 01 - 07 ==========

const profitableGamble = (probability, prize, pay) =>
   probability * prize > pay ? true : false;

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));

===== 01 - 08 ==========

const fps = (frames, minutes) => frames * minutes * 60;

console.log(fps(1, 1));
console.log(fps(10, 1));
console.log(fps(10, 25));


===== 01 - 09 ==========

const fuel = (distance) => {
   
   let consumption = distance * 10;
   if (consumption < 100) {
      consumption = 100;
   }
   return consumption;
};


----------OR---------------

const fuel = (distance) => distance * 10 < 100 ? 100 : distance * 10;


console.log(fuel(15));
console.log(fuel(23.5));
console.log(fuel(3));

 */
