
hour = 2400;

if (hour >= 0 && hour <= 1200) {            // Se a primeira condição ('hora' >= 0) for true, verifica a segunda condição ('hora' >= 1200).
  console.log("1st half")                   // Se as duas derem true, essa parte será executada.
} else if (hour > 1200 && hour <= 2359) {   // Se uma ou as duas condições derem false. Essas novas condições serão testadas.
  console.log("2nd half")                   // Se as duas derem true, essa linha será executada.
} else {                                    // Se os 'if's anteriores derem false, executa esse bloco.
  console.log("What planet are you?") 
}

// ---------------------------------------------------

taxa = 1

console.log("A taxa é de R$" + (taxa ? 2 : 10) );
// Se o valor da variável 'taxa' for 0, undefined ou null, ele retorna 2.
// Se for qualquer outro valor ele retorna 10.

// Não entendi exatamente como funciona essa condição.

// ---------------------------------------------------

//   ||   (OR)
//   &&   (AND)
//   !    (NOT)
//   ??   (Nullish Coalescing)

// A precedência de && é maior que ||

// alert( null || 2 && 3 || 4 );

// Primeiro ele faz "2 && 3"

// ---------------------------------------------------

const matrix = [                         // Um array (matriz?) com dois arrays dentro.
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 20, 30, 40, 50, 60, 70, 80, 90],
]

console.log(matrix[0][0]) // 1
console.log(matrix[0][8]) // 9
console.log(matrix[1][5]) // 60

// ---------------------------------------------------

const ar = [
  "cavalo", "cachorro", "aranha", "ovelha"
]

ar.push("macaco") // Adiciona um item no final (do array)

console.log(ar)

ar.unshift("borboleta") // Adiciona um item no começo

console.log(ar)

ar.pop() // Remove o último item

console.log(ar)

ar.shift() // Remove o primeiro item

console.log(ar)

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
