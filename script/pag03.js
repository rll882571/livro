document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de verificação na página
    const checkButtons = document.querySelectorAll('.checkBtn');

    checkButtons.forEach(button => {
        // 2. Adiciona um event listener para o evento de clique
        button.addEventListener('click', () => {
            // Pega o elemento pai (.exercicio) que contém a pergunta e a resposta
            const exerciseDiv = button.closest('.exercicio');
            
            // Pega o campo de input dentro do exercício
            const answerInput = exerciseDiv.querySelector('.linha-caderno');
            
            // Pega a resposta correta do atributo data-answer
            const correctAnswer = exerciseDiv.getAttribute('data-answer');
            
            // Pega a resposta digitada pelo usuário
            const userAnswer = answerInput.value;

            // Prepara as respostas para comparação:
            // 1. Remove espaços em branco extras no início/fim (.trim())
            // 2. Converte para minúsculas (.toLowerCase()) para ignorar a capitalização
            const cleanCorrectAnswer = correctAnswer.trim().toLowerCase();
            const cleanUserAnswer = userAnswer.trim().toLowerCase();
            
            let feedbackElement = exerciseDiv.querySelector('.feedback');
            
            // Cria o elemento de feedback se ele ainda não existir
            if (!feedbackElement) {
                feedbackElement = document.createElement('p');
                feedbackElement.classList.add('feedback');
                // Insere o feedback após o botão
                button.parentNode.insertBefore(feedbackElement, button.nextSibling);
            }

            // 3. Realiza a verificação
            if (cleanUserAnswer === cleanCorrectAnswer) {
                feedbackElement.textContent = '✅ Correto!';
                feedbackElement.style.color = '#4CAF50'; // Verde
            } else {
                // Se estiver incorreto, mostra a resposta esperada para ajudar o usuário
                feedbackElement.textContent = `❌ Incorreto. `;
                feedbackElement.style.color = '#CC0000'; // Vermelho
            }
        });
    });
});