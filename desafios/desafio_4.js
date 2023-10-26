console.log("Bem vindo") 


//
let nome = "Matheus" 

console.log(`${nome}`) 

// 

let nome1 = "Matheus" 
alert(`Olá ${nome1}`) 

let linguagemFavorita = prompt ("Qual a sua linguagem favorita?");
console.log(`a linguagem é ${linguagemFavorita}`);

let valor1 = 10;
let valor2 = 8; 
let resultado = (`${valor1 -valor2}`);
console.log(resultado); 

let idade = prompt ("Qual é a sua idade?") 

if (18 <= idade) {
    console.log("Vocé é adulto")
}else {
    console.log("Você é juvenil")
}

let numeroTipo = prompt ("Digite um número e retornamos se é positivo ou negativo")

if (0 <= numeroTipo) {
    console.log("É positivo")
}else{
    console.log("É negativo")
}

let listaNumero = 1;

while ( listaNumero <= 10) {
    console.log(listaNumero)
    listaNumero++
}

let nota = 0;

if (7 <= nota) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

console.log(Math.random()) 

let numeroSecreto1 = parseInt(Math.random() * 10 + 1);

let numeroSecreto2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto1)
