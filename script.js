const jogo = document.getElementById("jogo");
const quadrados = document.querySelectorAll("[quadrado]");
const jogadores = ["X", "O"];

let jogadorAtual = jogadores[0];
let jogadorAtivo = false;

//COMBINAÇÃO VENCEDORA
const combinacoes = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
]



function jogada(e) {
    console.log(e)
    const quadrado = e.target;
    console.log(quadradoSelecionado)
    const quadradoI = Array.from(quadrados).indexOf(quadrado);

    quadrado.textContent = jogadorAtual;
    console.log(quadradoI)
}


