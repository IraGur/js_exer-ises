/*
===== 03 - 00 ==========
 
const oddishOrEvenish = (num) =>
   num
      .toString()
      .split("")
      .map((num) => parseInt(num))
      .reduce((a, b) => a + b, 0) %
      2 ===
   1
      ? "Oddish"
      : "Evenish";
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));

===== 03 - 01 ==========


const getTotalPrice = (arr) => {
   let sum = 0;
   for (let i = 0; i <= arr.length; i++) {
      let o = arr[i];

      if (o) {
         sum = sum + o.quantity * o.price;
      }
   }
   return sum;
};
===== 03 - 02 ==========

const reverseOdd = (text) =>
   text
      .split(" ")
      .map((word) =>
         word.length % 2 === 1 ? word.split("").reverse().join("") : word
      )
      .join(" ");

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));


===== 03 - 03 ==========

const isSmooth = (str) =>{
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];

    if (currentWord.charAt(currentWord.length - 1) !== nextWord.charAt(0)) {
      return false;
    }
  }

  return true;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
console.log(isSmooth("Someone is outside the doorway"))
console.log(isSmooth("She eats super righteously"))

===== 03 - 04 ==========

const sevenBoom = (arr) =>arr.includes(7) ? "Boom!" : "there is no 7 in the array" ;

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

===== 03 - 05 ==========

const convert = (degree) =>
   degree.includes("°C")
      ? `${Math.round((parseInt(degree) * 9) / 5 + 32)} °F`
      : degree.includes("°F")
      ? `${Math.round(((parseInt(degree) - 32) * 5) / 9)} °C`
      : "Error";

console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));

===== 03 - 06 ==========

const findBrokenKeys = (expected, actual) => [
   ...new Set(expected.split("").filter((char, i) => char !== actual[i])),
];

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));

*/
