alert("Seja bem-vindo ao nosso jogo do número secreto!");

let numeroSecreto = 10;
let tentativas = 1;

let chute;

while (chute != numeroSecreto) {
  chute = Number(prompt("Digite um número entre 0 e 10"));

  if (chute == numeroSecreto) {
    alert(
      `Parabéns! Você acertou, o número secreto é ${numeroSecreto} com ${tentativas} tentativas.`
    );
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O numero secreto é maior que ${chute}`);
    }
  }
  tentativas++;
}
