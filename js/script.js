document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-list-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.querySelector('.' + targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.log("Elemento alvo não encontrado");
            }
        });
    });

    const form = document.querySelector('.contato-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');
    const submitButton = document.getElementById('submit');

    function checkFormInputs() {
        if (nomeInput.value.trim() !== '' && emailInput.value.trim() !== '' && assuntoInput.value.trim() !== '' && mensagemInput.value.trim() !== '') {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Adiciona um ouvinte de evento de entrada (input) a cada campo do formulário
    nomeInput.addEventListener('input', checkFormInputs);
    emailInput.addEventListener('input', checkFormInputs);
    assuntoInput.addEventListener('input', checkFormInputs);
    mensagemInput.addEventListener('input', checkFormInputs);

    // O ouvinte de evento de envio do formulário
    form.addEventListener('submit', function(e) {
        // Verifica se algum campo do formulário está vazio antes de enviar
        if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || assuntoInput.value.trim() === '' || mensagemInput.value.trim() === '') {
            e.preventDefault();
            alert('Por favor, preencha todos os campos do formulário antes de enviar.');
        }
    });


    form.addEventListener('submit', function(e) {
        if (mensagemInput.value.trim() === '') {
            e.preventDefault(); // Impede o envio do formulário
            mensagemInput.classList.add('campo-invalido'); // Adiciona classe para estilização CSS
        }
    });

    // Adiciona um ouvinte de evento de clique no botão de envio
    submitButton.addEventListener('click', function() {
        if (mensagemInput.value.trim() === '') {
            mensagemInput.classList.add('campo-invalido'); // Adiciona classe para estilização CSS
        } else {
            // Remove a classe de campo inválido se o campo estiver preenchido
            mensagemInput.classList.remove('campo-invalido');
        }
    });

});
