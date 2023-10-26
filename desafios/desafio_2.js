let diaDaSemana = 'segunda';


if ( diaDaSemana == 'domingo') {
    console.log("bom final de semana")
} else {
    console.log("boa semana");
} 


// desafio 2

let numero = -5;

if ( 0 < numero) {
    console.log("É um numero positivo")
} else {
    console.log("é um numero negativo")
}

// desafio 3 pontuação do jogo

let numeroDaSorte = 25;

let palpite = 3; 

if ( numeroDaSorte == palpite){
    pontuacao = 100;
} else {
    pontuacao = 0;
}
if (pontuacao == 100) {
    console.log("Você ganhou");
} else {
    console.log("você perdeu");
}

// desafio 4 

let nomeCliente = "Matheus"
let saldoBancario = 3000;


if (nomeCliente === "Matheus"){
    alert (`Seu saldo é de R$ ${saldoBancario}`)
} else {
    alert("Está conta bancária não é sua")
}


// desafio 5

let nome = prompt("Qual é o seu nome?")

alert(`Seja bem vindo ${nome}`);