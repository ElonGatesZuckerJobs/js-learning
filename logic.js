
hour = 2400;

if (hour >= 0 && hour <= 1200) {            // Se a primeira condição ('hora' >= 0) for true, verifica a segunda condição ('hora' >= 1200).
  console.log("1st half")                   // Se as duas derem true, essa parte será executada.
} else if (hour > 1200 && hour <= 2359) {   // Se uma ou as duas condições derem false. Essas novas condições serão testadas.
  console.log("2nd half")                   // Se as duas derem true, essa linha será executada.
} else {                                    // Se os 'if's anteriores derem false, executa esse bloco.
  console.log("What planet are you?") 
}

// ---------------------------------------------------

randomNumber = 3;

console.log("The answer is well known: " + (randomNumber ? "Wrong" : 42) );
// Se o valor da variável 'randomNumber' for 0, undefined ou null, ele retorna "Wrong".
// Se for qualquer outro valor (verdadeiro) ele retorna 42.

// ---------------------------------------------------

//   ||   (OR)
//   &&   (AND)
//   !    (NOT)
//   ??   (Nullish Coalescing)

// A precedência de && é maior que ||

console.log( null || 4 && 11 || 4 ); // 11

// Primeiro ele faz "2 && 3"

// ---------------------------------------------------

// Um array com dois arrays dentro (uma matriz?).

const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 20, 30, 40, 50, 60, 70, 80, 90],
]

console.log(matrix[0][0]) // 1
console.log(matrix[0][8]) // 9
console.log(matrix[1][5]) // 60

// ---------------------------------------------------

const animals = [
  "cavalo", "cachorro", "aranha", "ovelha"
]

animals.push("macaco") // Adiciona um item no final (do array)

console.log(animals)

animals.unshift("borboleta") // Adiciona um item no começo

console.log(animals)

animals.pop() // Remove o último item

console.log(animals)

animals.shift() // Remove o primeiro item

console.log(animals)

// ---------------------------------------------------

trials = [
  1, 3, 5, 9, 11, 17, 32
]

let good = trials.find((element) => element < 10);
let bad = trials.find((a) => a > 20);

console.log(good)
console.log(bad)

// find retorna o primeiro valor que for verdadeiro, caso contrário 'undefined'.

// ---------------------------------------------------

// SWITCH

let number = 2;

switch (number) {
  case 2: 
    console.log(`Seu número é ${number}`);
    break;
  case 3:
    console.log(`${number} é demais`);
    break;
  default:
    console.log("Você quebrou a Matrix");
}

// IF

const browser = "";

if (browser == "edge") {
  console.log("You are in the edge");
} else if (
  browser == ("chrome" || "safari" || "opera")
  // Sem "()" a condição iria verificar apenas se 'browser' = "chrome"
  //
) {
  console.log("We support you too");
} else {
  console.log("I hope this website is working");
}

// Primeiro, verifica se browser é igual a "chrome". Se for verdadeiro, ele retornará true.
// Em seguida, ele avalia "safari" e "opera", que são sempre verdadeiros porque são strings não vazias.


// ---------------------------------------------------

// Exercise 1 - (https://replit.com/@OdinProject/troubleshooting#troubleshooting.js)

const a = 1;
const b = 1;

let result = a + b;

if(result === 2) {
	console.log(`a + b é igual a ${result}`);
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}

// ---------------------------------------------------

// Exercise 2 - (https://replit.com/@OdinProject/enter-a-number#script.js)

// ---------------------------------------------------

// Exercise 3 - (https://replit.com/@OdinProject/lets-do-some-math#math.js)

const v = 1 + 8
const w = 22 * 3
const x = 5 % 4
const y =  - 17
const z = v+ w + x + y

console.log(v)
console.log(w)
console.log(x)
console.log(y)
console.log(z)
// ---------------------------------------------------

// Exercise 4 - (https://replit.com/@OdinProject/direction-follow#follow.js)

const firstName = "Carlos";
const lastName = "Stevenson";

const fullName = firstName + " " + lastName;

const thisYear = 1965;
const birthYear = 1948;

const age = thisYear - birthYear

// First part:
const firstGreeting = (`Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`);

// Second part:
const secondGreeting = (`Hello! My name is ${fullName} and I am ${age} years old.`)

console.log(firstGreeting);
console.log(secondGreeting);

// ---------------------------------------------------

const n1 = (Math.random()); // 'Math.random' gera um número aleatório.
const n2 = (Math.random() * 100);
const n3 = (Math.random() * 100);

console.log(n1); // 'Math.round' arredonda os números.
console.log(Math.round(n2));
console.log(Math.round(n3)); 

// ---------------------------------------------------

const harryPotterArray = ["I", "love", "chocolate", "frogs"];

const dafaultJoin = harryPotterArray.join(); // Por padrão '.join' junta os items com uma vírgula.

const customJoin = harryPotterArray.join(" | ");

console.log(harryPotterArray);
console.log(dafaultJoin);
console.log(customJoin);

// ---------------------------------------------------

function hiFunction(name = "Dave") {
  console.log(`Hi ${name}!`);
}

googleCoFounder = "Larry";

hiFunction(googleCoFounder); // Hi Larry!
hiFunction("Brian"); // Hi Brian!
hiFunction(); // Hi Dave!

// ---------------------------------------------------

// Replace

const genericText = "My name is Jordan Belfort";

console.log(genericText);
console.log(genericText.replace("My", "Your"));
/* 
  Muda a primeira palavra que for igual a "true" (nesse caso "My"),
  para a segunda palavra dentro de 'replace' ("Your").
*/

const anotherGenericText = "Word, word and word";

console.log(anotherGenericText.replace("word", "what"));
// Mudou apenas o primeiro valor igual ("word") para "what".

// ---------------------------------------------------