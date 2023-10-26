// Mostrar um alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// Declarar variáveis
var nome = "Lua";
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;

// Exibir um alerta com a mensagem de erro
alert("Erro! Preencha todos os campos.");

// Declarar uma variável mensagemDeErro e exibir um alerta com seu valor
var mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro);

// Solicitar o nome do usuário usando um prompt
nome = prompt("Por favor, digite seu nome:");

// Solicitar a idade do usuário usando um prompt
idade = prompt("Por favor, digite sua idade:");

// Verificar se a idade é maior ou igual a 18 e exibir uma mensagem apropriada
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
} else {
  alert("Você não atende aos requisitos de idade para tirar a habilitação.");
}
