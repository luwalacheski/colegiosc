<script>
    // --- 1. NAVEGAÇÃO ENTRE TELAS ---
    function abrirRastreador() {
        document.getElementById('secao-apresentacao').style.display = 'none';
        document.getElementById('secao-busschool').style.display = 'block';
        window.scrollTo(0, 0);
    }

    function voltarParaSite() {
        document.getElementById('secao-apresentacao').style.display = 'block';
        document.getElementById('secao-busschool').style.display = 'none';
        // Para a viagem e limpa o timer se o usuário sair da tela
        if (window.timerViagem) clearInterval(window.timerViagem);
    }

    // --- 2. LÓGICA DO BUSSCHOOL ---

    // Atualiza o texto do botão ao selecionar a rota (opcional, mas bom para o visual)
    function updateButtonTime() {
        const routeSelect = document.getElementById('route');
        const btnText = document.getElementById('btn-text');
        if (routeSelect.value) {
            // Pega o valor do "value" do select que você definiu no HTML anterior
            btnText.innerText = `INICIAR VIAGEM (${routeSelect.value} MIN)`;
        }
    }

    function startBusJourney() {
        const routeSelect = document.getElementById('route');
        const map = document.getElementById('mapWrapper');
        const card = document.getElementById('bus-card');
        const minDisplay = document.getElementById('minutes');
        const statusText = document.getElementById('status-text');
        const busIcon = document.getElementById('bus-marker-dynamic');

        if (routeSelect.value === "") {
            alert("Por favor, selecione uma rota!");
            return;
        }

        // Definição dos tempos (usando o valor do select como base)
        const tempoOriginal = parseInt(routeSelect.value) || 5; 
        let tempoRestante = tempoOriginal;

        // --- AJUSTE DA ANIMAÇÃO ---
        map.classList.remove('animating');
        void map.offsetWidth; // Força reset da animação
        
        // Sincroniza a duração da animação CSS com o tempo da rota (em segundos)
        if (busIcon) {
            busIcon.style.animationDuration = (tempoOriginal * 60) + "s";
        }
        
        map.classList.add('animating');
        card.style.display = 'block';

        // --- LÓGICA DO CRONÔMETRO ---
        minDisplay.innerText = tempoRestante;
        statusText.innerText = "Ônibus em movimento...";

        // Limpa qualquer intervalo anterior
        if (window.timerViagem) clearInterval(window.timerViagem);

        window.timerViagem = setInterval(() => {
            tempoRestante--;
            
            if (tempoRestante > 0) {
                minDisplay.innerText = tempoRestante;
            } else {
                minDisplay.innerText = "0";
                statusText.innerText = "Chegou ao destino!";
                clearInterval(window.timerViagem);
                map.classList.remove('animating'); // Para o ônibus no final
            }
        }, 60000); // 1 minuto real
    }
</script>
