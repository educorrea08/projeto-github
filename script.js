// Lista de palavras com dica (pode adicionar mais!)
const PALAVRAS = [
  { palavra: "algoritmo", dica: "Sequência de passos para resolver um problema" },
  { palavra: "variavel", dica: "Guarda um valor na memória" },
  { palavra: "repositorio", dica: "Onde fica o projeto no GitHub" },
  { palavra: "commit", dica: "Registro de uma alteração no Git" },
  { palavra: "navegador", dica: "Programa usado para abrir sites" },
  { palavra: "teclado", dica: "Periférico usado para digitar" },
  { palavra: "internet", dica: "Rede mundial de computadores" },
  { palavra: "programacao", dica: "Arte de escrever código" },
  { palavra: "funcao", dica: "Bloco de código que pode ser reutilizado" },
  { palavra: "banco de dados", dica: "Lugar onde as informações são armazenadas" }
];

const MAX_ERROS = 6;

const elPalavra = document.getElementById("palavra");
const elDica = document.getElementById("dica");
const elErros = document.getElementById("erros");
const elMensagem = document.getElementById("mensagem");
const elTeclado = document.getElementById("teclado");
const partes = document.querySelectorAll(".parte");

let secreta = "";
let letrasCertas = [];
let letrasErradas = [];
let fimDeJogo = false;

// Tira acentos para comparar letras (ex.: "ç" vira "c")
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function criarTeclado() {
  elTeclado.innerHTML = "";
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letra => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = letra;
    botao.dataset.letra = letra.toLowerCase();
    botao.addEventListener("click", () => jogar(letra.toLowerCase()));
    elTeclado.appendChild(botao);
  });
}

function mostrarPalavra() {
  const texto = secreta.split("").map(letra => {
    if (letra === " ") return " ";
    return letrasCertas.includes(normalizar(letra)) ? letra : "_";
  });
  elPalavra.textContent = texto.join(" ");
}

function atualizarForca() {
  partes.forEach((parte, i) => parte.classList.toggle("visivel", i < letrasErradas.length));
  elErros.textContent = letrasErradas.length;
}

function terminar(ganhou) {
  fimDeJogo = true;
  elTeclado.querySelectorAll("button").forEach(b => (b.disabled = true));
  elMensagem.textContent = ganhou
    ? "Parabéns, você acertou!"
    : "Fim de jogo! A palavra era: " + secreta.toUpperCase();
}

function jogar(letra) {
  if (fimDeJogo) return;
  if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) return;

  const botao = elTeclado.querySelector(`[data-letra="${letra}"]`);
  botao.disabled = true;

  if (normalizar(secreta).includes(letra)) {
    letrasCertas.push(letra);
    botao.classList.add("acerto");
    mostrarPalavra();
    const venceu = normalizar(secreta).split("").every(l => l === " " || letrasCertas.includes(l));
    if (venceu) terminar(true);
  } else {
    letrasErradas.push(letra);
    atualizarForca();
    if (letrasErradas.length >= MAX_ERROS) terminar(false);
  }
}

function novoJogo() {
  const sorteada = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  secreta = sorteada.palavra;
  elDica.textContent = "Dica: " + sorteada.dica;
  letrasCertas = [];
  letrasErradas = [];
  fimDeJogo = false;
  elMensagem.textContent = "";
  criarTeclado();
  mostrarPalavra();
  atualizarForca();
}

// Aceita também o teclado do computador
document.addEventListener("keydown", e => {
  const letra = normalizar(e.key);
  if (/^[a-z]$/.test(letra)) jogar(letra);
});

document.getElementById("novo").addEventListener("click", novoJogo);

novoJogo();
