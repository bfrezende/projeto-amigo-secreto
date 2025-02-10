// Array para armazenar os nomes dos amigos secretos
let listaDeAmigos = [];

function adicionarAmigo() {
    // Armazena o Nome do amigo secreto no campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços desnecessários

    // Valida se o campo está vazio ou não
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    listaDeAmigos.push(nomeAmigo);

    // Atualiza a lista exibida na página
    atualizarLista();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

function atualizarLista() {
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona os nomes do array na lista HTML
    listaDeAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Valida se há amigos disponíveis
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado na tela
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}!`;
}