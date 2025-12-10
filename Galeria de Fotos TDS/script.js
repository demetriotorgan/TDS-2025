// Lista de imagens locais
const imagens = ["praia1.jpg", "praia2.avif", "praia3.avif", "praia4.jpg"];

// Começa na primeira imagem
let indice = 0;

// Seleciona elementos HTML
const imagem = document.getElementById("imagem");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

// Quando clicar em "próximo"
botaoProximo.addEventListener("click", () => {
  indice++;
  if (indice >= imagens.length) {
    indice = 0; // volta para a primeira
  }
  imagem.src = imagens[indice];
});

// Quando clicar em "anterior"
botaoAnterior.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = imagens.length - 1; // vai para a última
  }
  imagem.src = imagens[indice];
});
