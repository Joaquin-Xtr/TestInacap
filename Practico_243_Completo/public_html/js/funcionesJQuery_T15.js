function inicializarEventos(){
    var x = $('#boton1');
    x.click(extraerTexto);
    x = $('#boton2');
    x.click(modificarTexto);
    x = $('#boton3');
    x.click(modificarDatosTabla);
    //************************************************
    var x = $('#boton4');
    x.click(agregarPropiedadBorder);
    x = $('#boton5');
    x.click(recuperarPropiedadBorder);
    x = $('#boton6');
    x.click(eliminarPropiedadBorder);
    //************************************************
    var x = $('#boton7');
    x.click(presionBoton7);
    x = $('#boton8');
    x.click(presionBoton8);
    //************************************************
    var x;
    x = $('a');
    x.mouseover(entraMouse);
    x.mouseout(saleMouse);
}
//*************************************
function extraerTexto(){
    var x=$('#parrafo1');
    alert(x.text());
}
//*************************************
function modificarTexto(){
    var x=$('#parrafo1');
    x.text('Nuevo texto del párrafo');
}
//*************************************
function modificarDatosTabla(){
    var x=$('td');
    x.text('Texto nuevo');
}
//*************************************
function agregarPropiedadBorder(){
    var x = $('#tabla1');
    x.attr('border', '1');
}
//*************************************
function recuperarPropiedadBorder(){
    var x = $('#tabla1');
    if (x.attr('border') != undefined){
        alert(x.attr('border'));
    }else{
        alert('Propiedad "Border" indefinida');
    }
}
//*************************************
function eliminarPropiedadBorder(){
    var x = $('#tabla1');
    x.removeAttr('border');
}
//*************************************
function presionBoton7(){
    var x;
    x = $('#formulario');
    x.html('<form>Ingresar nombre: <input type="text" id="nombre"><br>'+
            'Ingresar clave: <input type="text" id="clave"><br>'+
            '<input type="submit" value="confirmar"></form>');
}
//*************************************
function presionBoton8(){
    var x;
    x = $('#formulario');
    alert(x.html());
}
//*************************************
function entraMouse(){
    $(this).css('background-color','#ff0');
}
//*************************************
function saleMouse(){
    $(this).css('background-color','#ffff');
}
//*************************************