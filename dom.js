function main() {
  var fechar = [];
  var abrir = document.querySelector("#abrecardapio");
  abrir.addEventListener("click", showCardapio);
  fechar = document.querySelectorAll(".buttonsfechar");
  for (var i = 0; i < fechar.length; i++) {
    fechar[i].addEventListener("click", hideCardapio);
  }
}

function showCardapio() {
  document.querySelector(".mostrar").style.display = "block";
  document.querySelector("#abrecardapio").style.display = "none";
}

function hideCardapio() {
  document.querySelector(".mostrar").style.display = "none";
  document.querySelector("#abrecardapio").style.display = "block";
}

window.addEventListener("load", main);
