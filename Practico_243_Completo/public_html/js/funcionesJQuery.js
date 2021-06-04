function inicializarEventos() {
    var x;
    x = $('#boton1');
    x.click(presionarBoton);
}

function presionarBoton() {
    alert('Hiciste click en el botón');
}