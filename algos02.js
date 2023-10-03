/* 
===== 02 - 00 ==========

const countTrue = (arr) => arr.filter((elem) => elem).length;

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

===== 02 - 01 ==========

const possibleBonus = (a, b) => b <= a ? false : a + 6 >= b;

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));

===== 02 - 02 ==========

const num_of_digits = (n) => n.toString().length;

console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));

===== 02 - 03 ==========  

const toArray = (obj) => Object.entries(obj);

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

===== 02 - 04 ==========

const arrayOfMultiples = (num, length) =>
   Array.from({ length: length }, (_, i) => num * (i + 1));

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

===== 02 - 05 ==========

const removeLeadingTrailing = (num) => Number(num).toString();

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));

===== 02 - 06 ==========

const sortIt = (nums) => nums.sort();

console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));

===== 02 - 07 ==========

const calculator = (a, b, c) =>
   eval(`${a}${b}${c}`) === Infinity
      ? "Can't divide by 0!"
      : eval(`${a}${b}${c}`);
console.log(calculator(2, "*", 2));

===== 02 - 08 ==========

const areaOfCountry = (country, arrea) => {
   let total = 148940000 / 100;
   arrea = arrea / total;
   return `${country} is ${arrea.toFixed(2)}% of the total world's landmass `;
};

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));

===== 02 - 09 ==========

const reverseWords = (text) => text.split(" ").reverse().join(" ");
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));

 */
