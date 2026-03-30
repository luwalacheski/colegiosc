function checkBus() {
    const routeSelect = document.getElementById('route');
    const card = document.getElementById('bus-card');
    const minutes = document.getElementById('minutes');
    const progress = document.getElementById('progress');
    const routeName = document.getElementById('route-name');

    if (routeSelect.value !== "") {
        // Exibe o painel de monitoramento
        card.style.display = 'block';
        
        // Simulação de banco de dados
        const rotas = {
            "1": { nome: "Linha Amarela", tempo: 5, perc: 85 },
            "2": { nome: "Linha Verde", tempo: 12, perc: 40 },
            "3": { nome: "Linha Azul", tempo: 20, perc: 15 }
        };

        const dados = rotas[routeSelect.value];
        
        // Reseta animação para dar efeito de carregamento
        minutes.innerText = "--";
        progress.style.width = "0%";
        
        // Aplica os novos dados após um pequeno delay
        setTimeout(() => {
            routeName.innerText = dados.nome;
            minutes.innerText = dados.tempo;
            progress.style.width = dados.perc + "%";
        }, 400);

    } else {
        card.style.display = 'none';
    }
}
