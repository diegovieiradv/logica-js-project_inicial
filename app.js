alert("Seja bem-vindo ao nosso jogo do número secreto!");

let numeroSecreto = 10;

let chute = Number(prompt("Digite um número entre 0 e 10"));

if (chute === numeroSecreto) {
    alert(`Parabéns! Você acertou, o número secreto é ${numeroSecreto}`);
}
else {
    alert("Que pena! Você errou.");
    }