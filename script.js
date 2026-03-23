const perguntas = [
    { pergunta: "Quanto é 5 + 3?", opcoes: ["6", "8", "10", "9"], correta: 1 },
    { pergunta: "Quanto é 7 x 2?", opcoes: ["12", "14", "16", "15"], correta: 1 },
    { pergunta: "Quanto é 10 ÷ 2?", opcoes: ["2", "4", "5", "6"], correta: 2 }
];

let pontos = 0;
let perguntaAtual = 0;

function mostrarPergunta() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    opcoesEl.innerHTML = "";

    if (perguntaAtual >= perguntas.length) {
        perguntaEl.textContent = "Parabéns! Você terminou o quiz.";
        return;
    }

    const perguntaObj = perguntas[perguntaAtual];
    perguntaEl.textContent = perguntaObj.pergunta;

    perguntaObj.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.classList.add("opcao-btn");
        btn.onclick = () => checarResposta(index);
        opcoesEl.appendChild(btn);
    });
}

function checarResposta(indiceEscolhido) {
    if (indiceEscolhido === perguntas[perguntaAtual].correta) {
        pontos += 10;
        alert("Correto! +10 pontos");
    } else {
        alert("Errado! Tente a próxima.");
    }
    perguntaAtual++;
    document.getElementById("pontos").textContent = "Pontuação: " + pontos;
    mostrarPergunta();
}

mostrarPergunta();
