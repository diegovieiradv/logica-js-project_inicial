/*
alert("Seja bem-vindo ao nosso jogo do número secreto!");

let numeroSecreto = 10;
alert("Seja bem-vindo ao nosso jogo do número secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;

let chute;

while (chute != numeroSecreto) {
  chute = Number(prompt(`Digite um número entre 1 e ${numeroMaximo}`));

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O numero secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.` 
);

// e a mesma coisa que esse codigo abaixo
/*if (tentativas > 1) {
  alert(
    `Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`
  );
} else {
  alert(
    `Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`
  );
}

let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto";

function chute() {
  console.log("Você clicou no botão chute!");
}

function amoJS() {
  alert("Eu amo JavaScript!");
}   */
