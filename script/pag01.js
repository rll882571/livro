function playAudio(caminhoDoArquivo) {
    var audio = new Audio(caminhoDoArquivo);
    audio.play().catch(error => {
        console.error(
            "Erro ao tentar reproduzir o áudio. Verifique se o arquivo existe e o caminho está correto.",
            error
        );
    });
}