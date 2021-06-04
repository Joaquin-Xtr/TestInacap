function inicializarEventos(){
    var x;
    x = $('tr');
    x.click(presionarFila);
}

function presionarFila(){
   var x;
    x = $(this);
    x.css('background-color', '#000000');
}


