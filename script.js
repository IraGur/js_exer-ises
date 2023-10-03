/* 
================ VARIABLES ================ 03b      

let a = "3";
let b = "8";

let c;
c = b;          OR      [a,b]=[b,a]
b = a;
a = c;

console.log("a is " + a);
console.log("b is " + b);


================ TRIM ================ 05b

const message = "    TASTE THE RAINBOW!  ";
let whisper = message.toLowerCase().trim();
console.log(whisper);


================ LAST CHARACTER ================ 05b

let a = "Dumbledore";
console.log(a.slice(-1));


================ SLICE / REPLACE ================ 05b

const word = "skateboard";
let facialHair = word.slice(5, 10).replace("o", "e");
console.log(facialHair);


================ PROMPT / ALERT ================ 07

const guest = prompt("What is your name?");
const address = prompt("Where do you live");
const age = prompt("How old are you?");
alert(`Welcome ${guest} of ${age} who lives in ${address}!`);


================ VAT ================ 07

const price = prompt("VAT");
alert(`new price with VAT is ${price * 1.21}`);


================ CIRCLE AREA ================ 07

const num = prompt("enter radius value");
let area = Math.PI * num ** 2;
alert(`the circle area is ${area.toFixed(2)}`); 

eather Math.round/floor/ceil

or not rounded:
const num = prompt("enter radius value");
alert(the circle area is ${Math.PI * num ** 2});


================ CALCULATOR ================ 07

let num1 = prompt("enter your first value");
let num2 = prompt("enter your second value");
alert(`sum is ${parseFloat(num1) + parseFloat(num2)}`);  

--------------- Complexed Calculator ---------- 07

const operator = prompt("Enter operator ( either +, -, * or / ): ");

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator == "+") {
   result = num1 + num2;
} else if (operator == "-") {
   result = num1 - num2;
} else if (operator == "*") {
   result = num1 * num2;
} else {
   result = num1 / num2;
}
alert(`${num1} ${operator} ${num2} = ${result}`);


================ LOOPS ================ 10

///CATS || DOGS ===
let user = prompt("Hi, how should I call you ?");
user = prompt(`Hi ${user}, which do you prefer, cats or dogs ?`);
if (user == "cats" || user == "Cats" || user == "CATS") {
   alert("yeah, they are cute and flufy");
} else if (user == "dogs" || user == "Dogs" || user == "DOGS") {
   alert("agree, they are the best friends");
} else {
   alert("I don't understand");
}



///MYSTERY ===
const mystery = "Pigorh7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
   console.log("YOU GOT IT!!!");
} else {
   console.log("TRY AGAIN");} 



///CAR ===
const age = prompt("enter your age");
if (age < 18) {
   alert("Sorry, you are too young to drive this car. Powering off");
} else if (age === "18") {
   alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
   alert("Powering On. Enjoy the ride!");
}



///FRUITS ===
const user = prompt("what is your favorit fruit?").toLowerCase();
if (user == "banana") {
   alert("I like bananas as well");
} else if (user == "strawberry") {
   alert("I LOVE strawberry");
} else if (user == "grapes") {
   grapes = prompt("do you prefer purple or green grapes");
   if (grapes == "purple") {
      alert("I  don't like purple grapes");
   } else if (grapes == "green") {
      alert("green grapes are ok...");
   }
} else {
   alert("I don't understand");
}



================ ARRAYS ================ 12

///POTTER ===
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
leaderboard[1] = "Luna";
console.log(leaderboard[1]);
leaderboard[3] = "Draco";
console.log(leaderboard[3]);

flat();
console.log(newArray);



///EXTRACTION ===
const initialArray = [
   null,
   true,
   ["Apple", "two", undefined],
   false,
   ["three", "BeCode"],
   4,
   "I am a big bad wolf",
   ["one"],
];
const newArray = [];
newArray.push(initialArray[7][0]);
newArray.push(initialArray[2][1]);
newArray.push(initialArray[4][0]);

console.log(newArray);

// method 2 - gives random items' order
.flat()
   .filter((item) => item === "one" || item === "two" || item === "three")
console.log(newArray);



///SOLAR SYSTEM ===
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
planets.splice(0, 1, "Mercury");
planets.push("Saturn");
console.log(planets);



================ OBJECTS ================ 13

///PRODUCT ===
const product = {
   name: "iPhone 15",
   inStock: true,
   price: 1249.9,
   includedInPackage: ["case", "earphones", "charger"],
};
console.log(product.includedInPackage);



///RESTAURANT ===
const restaurant = {
   name: "Ichiran Ramen",
   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
   city: "Brooklyn",
   state: "NY",
   zipcode: "11206",
};

let fullAdress = `${restaurant.address}',' ${restaurant.city}',' ${restaurant.state}',' ${restaurant.zipcode}`;
console.log(fullAdress);

//  let fullAdress = Object.assign({}, restaurant);
delete fullAdress.name; //  as a list 



================ FOR LOOP ================ 16

///EVEN NUMBERS ===
for (let i = 1; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}


///ODD NUMBERS ===
for (let i = 1; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}


///10 --> 100 ===
for (let i = 0; i <= 100; i++) {
   if (i % 10 === 0 && i !== 0) {
      console.log(i);
   }
}


///100 --> 10 ===
for (let i = 100; i >= 0; i--) {
   if (i % 10 === 0 && i !== 0) {
      console.log(i);
   }
}


///25 --> 0 , progression(-5) ===
 for (let i = 25; i >= 0; i -= 5) {
   console.log(i);
}


/// 10 --> 1000, progression (*10) ===
for (let i = 10; i <= 1000; i *= 10) {
   console.log(i);
}


///ANIMALS ===
const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
for (let i = animals.length - 1; i >= 0; i--) {
   console.log(animals[i]);
}

///ORDERED USERS ===
const users = [
   {
      firstName: "Vito",
      lastName: "Corleone",
   },
   {
      firstName: "William",
      lastName: "Wallace",
   },
   {
      firstName: "Harry",
      lastName: "Potter",
   },
   {
      firstName: "Amadeus",
      lastName: "Mozart",
   },
   {
      firstName: "Barack",
      lastName: "Obama",
   },
];
for (let i = 0; i < users.length; i++) {
   console.log(
      `${i + 1}. My full name is ${users[i].firstName} ${users[i].lastName}.`
   );
}


///SEATING ROWS ===
const seatingChart = [
   ["Colas", "Benoit", "Elodie"],
   ["Sola", "Irina", "Antonino", "Eli"],
   ["John", "Maryna", "Naike", "Fabrice"],
];

for (let i = 0; i < seatingChart.length; i++) {
   const row = i + 1;
   console.log("ROW #" + row);

   for (let j = 0; j < seatingChart[i].length; j++) { 
      console.log(seatingChart[i][j]);
   }
}

eather (for nested arrays) //   
 for (let item of seatingChart[i]) {
   console.log(item);


================ WHILE LOOP ================ 18
///GUESS A NUMBER ===

let maxNumber = prompt("Enter max number: ");

let correctNumber;

if (!isNaN(maxNumber)) {
   correctNumber = Math.floor(Math.random() * maxNumber);
}

console.log(maxNumber);
console.log(correctNumber);

let guess = prompt("Make your first guess: ");
let count = 1;
while (guess != correctNumber) {
   if (correctNumber < guess) {
      guess = prompt("You've guessed too high! Try again");
      count++;
   } else if (correctNumber > guess) {
      guess = prompt("You've guessed too low! Try again");
      count++;
   }
}

alert("You guessed correctly in " + count++ + " attempts");


================ FOR..OF -- FOR..IN ================ 20
///TODO LIST (LOOPS) ===


let todos = [];

while (true) {
   let input = prompt(
      "Please make your choice :   \n 1. NEW: to add a todo \n 2. LIST: to see all the todos \n 3. DELETE: to remove a specific todo \n 4. QUIT: to exit de program "
   ).toLowerCase();

   if (input === "list") {
      console.log("********* TODO LIST *********");

      if (!todos.length) {
         console.log("Todo list is empty");
      }

      for (let i = 0; i < todos.length; i++) {
         const index = i + 1;
         console.log(`${index}. ${todos[i]}`);
      }
   } else if (input === "new") {
      let newTodo = prompt("Enter new todo");
      todos.push(newTodo);
      console.log(`Item '${newTodo}' added to the list`);
   } else if (input === "delete") {
      const index = prompt("choose for deletion");
      todos.splice(parseInt(index) - 1, 1);
   } else if (input === "quit") {
      break;
   } else {
      newTodo = alert("Please enter a valid command");
   }
}

================ FUNCTIONS ================ 21
///SOLFEGGIO ===

const notes = (num) => {
   console.log(num);
   console.log("DO");
   console.log("RE");
   console.log("MI");
   console.log("FA");
   console.log("SOL");
   console.log("LA");
   console.log("SI");
   return false;
};
notes(5);
notes(7);
notes(3);


/// DIES --------------------------------------------------------------------

const result = (faces, times) => {
   for (i = 1; i <= times; i++) {
      console.log(`"Die ${i}: ${Math.floor(Math.random() * faces + 1)}" `);
   }
};
result(15, 6);

/// some ---------------------------------------------------------------------
const some = (string, times) => {
   if (isNaN(times)) {              //number is number
      return;
   }
   string = "" + string; //string is a string

   console.log(`${string.repeat(times)}`);
};

some(5, 6);

/// Marlon Brandon ------------------------------------------------------------

const greet = (firstName, secondName) => {
   console.log(
      `This is ${firstName} ${secondName.charAt(secondName.length1)}.`
   );
};
greet("Marlon", "Brandon");

/// short-weather-return boolean -----------------------------------------------

const isShortWeather = (temp) => {
   if (temp <= 24) {
      return false;
   } else {
      return true;
   }
};
console.log(isShortWeather(25));
console.log(isShortWeather(13));
console.log(isShortWeather(20));

-----------OR------------------------------------

const isShortWeather = (temp) => Boolean(temp >= 24);
console.log(isShortWeather(25));
console.log(isShortWeather(34));
console.log(isShortWeather(10));
-----------OR------------------------------------

const isShortWeather = (temp) => (temp <= 24 ? false : true);
console.log(isShortWeather(25));
console.log(isShortWeather(34));
console.log(isShortWeather(10));

/// return - array --------------------------------------------------------------

const lastElement = (array) => {
   if (array.length === 0) {
      return null;
   }

   return array[array.length - 1];
};

console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); null

-----------OR------------------------------------

const lastElement = (array) =>
   array.length === 0 ? null : array[array.length - 1];
console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([]));

/// capitalize first letter ------------------------------------------------------

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));

/// return sum --------------------------------------------------------------------

const sumArray = (array) => {
   let sum = 0;
   for (let x of array) {
      sum += x;
   }
   return sum;
};

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101

///return day ---------------------------------------------------------------------

console.log(sumArray([1, 2, 3]));

const returnDay = (day) => {
   if (day == 0) {
      return null;
   }
   let week = ["Mon", "Tue", "Wed", "Thur", "Fr", "Sut", "Sun"];
   return week[day - 1];
};

console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null
*/
