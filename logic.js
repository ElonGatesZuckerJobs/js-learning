
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