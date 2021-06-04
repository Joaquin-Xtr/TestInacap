function inicializarEventos() {
    var x;
    x = $('#titulo1');
    x.click(presionarTitulo1);
    x = $('#titulo2');
    x.click(presionarTitulo2);
}
//**********************************
function presionarTitulo1() {
    var x;
    x = $('#titulo1');
    x.css('color', '#ff0000');
    x.css('background-color', '#ffff00');
    x.css('font-family', 'Courier');
}
//**********************************
function presionarTitulo2() {
    var x;
    x = $('#titulo2');
    x.css('color', '#ffff00');
    x.css('background-color', '#ff0000');
    x.css('font-family', 'Arial');
}

