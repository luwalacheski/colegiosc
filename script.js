// Função para detectar a seleção da rota e preparar o card
function checkBus() {
    const routeSelect = document.getElementById('route');
    const card = document.getElementById('bus-card');
    const minutes = document.getElementById('minutes');
    const mapWrapper = document.getElementById('mapWrapper');

    if (routeSelect.value !== "") {
        // Exibe o painel de monitoramento
        card.style.display = 'block';
        
        // Reseta estados anteriores caso o usuário troque de rota
        mapWrapper.classList.remove('animating');
        minutes.innerText = "--";
        
        // Como você quer que a viagem comece ao selecionar ou clicar no Play,
        // vamos deixar os dados prontos para o início.
    } else {
        card.style.display = 'none';
        mapWrapper.classList.remove('animating');
    }
}

// Função que faz o ônibus andar e conta os 5 minutos
function startBusJourney() {
    const routeSelect = document.getElementById('route');
    const map = document.getElementById('mapWrapper');
    const card = document.getElementById('bus-card');
    const minDisplay = document.getElementById('minutes');
    const statusText = document.getElementById('status-text');

    // Validação: Só inicia se uma rota estiver selecionada
    if (routeSelect.value === "") {
        alert("Por favor, selecione uma rota primeiro!");
        return;
    }

    // 1. Inicia a animação visual do CSS
    map.classList.remove('animating'); // Reseta se já estava rodando
    void map.offsetWidth;             // Força o navegador a entender o reset
    map.classList.add('animating');
    
    // 2. Exibe o card e define o tempo inicial
    card.style.display = 'block';
    let tempoRestante = 5; 
    minDisplay.innerText = tempoRestante;
    statusText.innerText = "Ônibus em movimento...";

    // 3. Atualiza o contador de minutos na tela (Lógica de 5 minutos)
    // Usamos um intervalo que roda a cada 60 segundos
    const timer = setInterval(() => {
        tempoRestante--;
        
        if (tempoRestante > 0) {
            minDisplay.innerText = tempoRestante;
        } else if (tempoRestante === 0) {
            minDisplay.innerText = "0";
            statusText.innerText = "Ônibus chegou à Escola!";
            clearInterval(timer);
        }
    }, 60000); // 60.000ms = 1 minuto
}
