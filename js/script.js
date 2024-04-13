document.addEventListener('DOMContentLoaded', function() {
    // Scrow menu header
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
    
    // Desabilitar o label quando nao tiver nada escrito
    const inputsForLabels = document.querySelectorAll('.box-input, .box-input-mensagem');
    inputsForLabels.forEach(input => {
        input.addEventListener('input', () => {
            const label = input.previousElementSibling;
            const parentDiv = input.parentElement;
            if (input.value.trim() !== '') {
                label.classList.remove('hidden');
                input.classList.remove('unset');
                parentDiv.classList.remove('ajust');
            } else {
                label.classList.add('hidden');
                input.classList.add('unset');
                parentDiv.classList.add('ajust');
            }
        });
    });

    // Adicionar o script para mudar a cor da label quando o input estiver em foco
    const inputFields = document.querySelectorAll('.box-input');
    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.previousElementSibling.classList.remove('focused');
        });
    });

    // Habilitar o botao contato e verificar se os inputs são validos
    const form = document.querySelector('.contato-form');
    const submitButton = document.getElementById('submit');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');

    nomeInput.addEventListener('input', () => {
        checkFormInputs(nomeInput);
    });
    
    emailInput.addEventListener('input', () => {
        checkFormInputs(emailInput);
    });
    
    assuntoInput.addEventListener('input', () => {
        checkFormInputs(assuntoInput);
    });
    
    mensagemInput.addEventListener('input', () => {
        checkFormInputs(mensagemInput);
    });

    function checkFormInputs(input) {
        if (input.id === 'email') {
            if (!isEmailValid(input.value)) {
                input.parentElement.classList.add('invalid');
            } else {
                input.parentElement.classList.remove('invalid');
            }
        } else {
            if (!input.value.trim()){
                input.parentElement.classList.add('invalid');
            } else {
                input.parentElement.classList.remove('invalid');
            }
        }

        const inputs = [nomeInput, emailInput, assuntoInput, mensagemInput];
        let formIsValid = true;
    
        inputs.forEach(input => {
            if (!input.checkValidity() || input.parentElement.classList.contains('invalid')) {
                formIsValid = false;
            }
        });
        
        console.log("formIsValid", formIsValid);
        submitButton.disabled = !formIsValid;
    }
    

    function isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '')
            return 0;
       return emailPattern.test(email);
    }
});