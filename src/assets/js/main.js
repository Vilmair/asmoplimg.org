
$(document).ready(function(){

    $("#cpf").focusout(function(){
        $('input[name="cpf"]').val( this.value.toUpperCase() );
              //Início do Comando AJAX
        console.log($("#cpf")[0].value, $("#cpf")[0]);
    });

(function($) {

    // $('input[name="cpf"]').mask('000.000.000-00');
    // $('input[name="cep"]').mask('00000-000');
    // $('input[name="phone"]').mask('(00) 00000 0000');

    $('#cep').on('focus', function() {
        console.log('main.js');
        //$(this).toggleClass('input1 input2');
    });

    jQuery.validator.addMethod('celular', function (value, element) {
        value = value.replace(/\D/g, '');
        if (parseInt(value) == 0) {
            return (this.optional(element) || false);
        }
        if (["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
        .indexOf(value.substring(0, 2)) != -1) {
            return (this.optional(element) || false);
        }
        if (value.length < 10 || value.length > 11) {
            return (this.optional(element) || false);
        }
        if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
            return (this.optional(element) || false);
        }
        return (this.optional(element) || true);
    }, 'Informe um número de telefone celular válido!');

    jQuery.validator.addMethod('cpf', function (value, element) {
        var Soma = 0;
        var Resto = 0;

        value = value.replace(/\D/g, '');
        if (parseInt(value) == 0) {
            return (this.optional(element) || false);
        }

        for (i=1; i<=9; i++) Soma += parseInt(value.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(value.substring(9, 10))) return false;

        Soma = 0;

        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(value.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(value.substring(10, 11))) return false;

        console.log('Len', value);
        if (value.length != 11) {
            return (this.optional(element) || false);
        }
        return (this.optional(element) || true);
    }, 'Informe um número de cpf válido!');

    jQuery.extend(jQuery.validator.messages, {
        required: "Preencimento obrigatório",
        remote: "",
        email: "@",
        phone: "(##) #####-####",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

})(jQuery);

});
