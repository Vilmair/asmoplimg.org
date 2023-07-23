
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

})(jQuery);

});
