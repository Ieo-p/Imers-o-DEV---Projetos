var contadorDeTentativas = 4;

var numeroAleatorio = parseInt(Math.random() * 11);

function chutar() {
  var valor = parseInt(document.getElementById("valor").value);

  if (valor > 10 || valor < 0) {
    document.getElementById("resultado").innerHTML =
      "Digite um número de 0 a 10";
  } else if (valor == numeroAleatorio) {
    document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    contadorDeTentativas = 4;
    numeroAleatorio = aleatorio();
  } else if (valor != numeroAleatorio || contadorDeTentativas != 0) {
    contador();
    document.getElementById("resultado").innerHTML =
      "Errou, você ainda tem " + contadorDeTentativas + " chances";
    if (contadorDeTentativas == 0) {
      document.getElementById("resultado").innerHTML =
        "O número sorteado era " +
        numeroAleatorio +
        "<br>Errou, o número foi trocado";
      contadorDeTentativas = 4;
      numeroAleatorio = aleatorio();
    }
  }
}

function contador() {
  contadorDeTentativas--;
  return contadorDeTentativas;
}

function aleatorio() {
  var numeroAleatorio = parseInt(Math.random() * 11);
  return numeroAleatorio;
}
