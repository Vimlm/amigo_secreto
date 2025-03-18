//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. criar um array para armazenar os amigos
let listaDeAmigos = [];

// 2. pegar o input do usuário
const input = document.getElementById("amigo");

// 3. criar uma função para adicionar o amigo ao array
function adicionarAmigo() {
  const amigo = input.value;

  listaDeAmigos.push(amigo);

  input.value = "";

  listarAmigos();

  const resultado = document.getElementById("resultado");

  resultado.textContent = "";
}

// 4. criar função para listar os amigos na tela
function listarAmigos() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  listaDeAmigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;

    lista.appendChild(item);
  });
}

// 5. criar função para sortear um amigo
function sortearAmigo() {
  const sorteado = Math.floor(Math.random() * listaDeAmigos.length);

  verificarArray(sorteado);
}

// 6. criar função para mostrar o amigo sorteado na tela colocando na ul com id resultado
function mostrarAmigo(amigoSorteado) {
  const resultado = document.getElementById("resultado");

  resultado.textContent = `O amigo secreto sorteado foi: ${listaDeAmigos[amigoSorteado]}`;

  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  listaDeAmigos = []
}

// 7. criar função para verificar se o array está vazio

function verificarArray(amigoSorteado) {
  if (listaDeAmigos.length === 0) {
    alert("Adicione amigos para sortear!");
  } else {
    mostrarAmigo(amigoSorteado);
  }
}