alert("Bem-vindo ao jogo");

let multiplicador = 10;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = parseInt(prompt(`Escolha um número entre 1 e ${multiplicador}`));

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que o ${chute}`);
    } else {
      alert(`O número secreto é maior que o ${chute}`);
    }
    tentativas++;
  }
}

if (tentativas > 1) {
  alert(
    `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
  );
} else {
  alert(
    `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
  );
}

/*if (tentativas > 1) {
  alert(
    `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentivas`
  );
} else {
  alert(
    `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentiva`
  );
}*/
