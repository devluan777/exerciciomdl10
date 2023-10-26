$(document).ready(function() {
    // Aplicar máscaras
    $('#phone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Validar o formulário
    $('#registration-form').submit(function(e) {
        e.preventDefault();

        // Verificar se todos os campos estão preenchidos
        var valid = true;
        $('#registration-form input[required]').each(function() {
            if ($(this).val() === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                valid = false;
                return false;
            }
        });

        if (valid) {
            // Simulação de envio de dados
            setTimeout(function() {
                $('#registration-form').hide();
                $('#message').show('validaçao concluida');
            }, 1000);
        }
    });
});
