function responderConvite() {
    var dataSelecionada = document.getElementById("data").value;
    var resposta = "Obrigada por confirmar sua presença para o jantar no dia " + dataSelecionada + ". Mal posso esperar para compartilhar esse momento incrível com você!";
    document.getElementById("resposta").innerText = resposta;

    // Salvando a resposta no armazenamento local do navegador
    localStorage.setItem("resposta", resposta);
}

// Recuperando a resposta do armazenamento local ao carregar a página
window.onload = function() {
    var respostaSalva = localStorage.getItem("resposta");
    if (respostaSalva) {
        document.getElementById("resposta").innerText = respostaSalva;
    }
};
