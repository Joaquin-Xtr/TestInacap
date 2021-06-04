function saludoParametrizado(nombre){
    document.write('Hola ' + nombre + '<br>');
}

//************************************************
function mostrarFechaHora(){
    var fecha = new Date();
    document.write('Hoy es: ');
    document.write(fecha.getDate() + '/');
    document.write((fecha.getMonth()+1) + '/');
    document.write(fecha.getFullYear() + '<br>');
    document.write('Es la hora ');
    document.write(fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds());
}

//************************************************
function calcularFecha (meses, dias){
    var num = prompt('Ingrese numero de mes ', '');
    num = parseInt(num);
    document.write('El mes ingresado es: ' + meses[num-1] + '<br>');
    document.write('Tiene ' + dias[num-1] + ' dias' + '<br>');
}

//************************************************
function aleatorio(){
    
    var selec = prompt('Ingrese número entre 1 y 10','');
    selec = parseInt(selec);
    var num = parseInt(Math.random() * 10) + 1;
    
    if (num === selec) {
        document.write('La media suerte, le apuntaste al ' + num + '<br>');
    }else{
        document.write('Erraste con ' + selec + ', el número era ' + num + '<br>');
    }
}

//************************************************
function cadenas(){
    var cadena = prompt('Ingrese una cadena de caracteres...', '');
    document.write('Cadena ingresada: ' + cadena + '<br>');
    document.write('Largo de la cadena: ' + cadena.length) + '<br>';
    document.write('Primer caracter: ' + cadena.charAt(0) + '<br>');
    document.write('Primeros 3 caracteres: ' + cadena.substring(0, 3) + '<br>');
    if (cadena.indexOf('hola') !== -1) {
        document.write('Encontramos la palabra "hola"' + '<br>');
    }else{
        document.write('No se encontro la palabra "hola"' + '<br>');
    }
    document.write('En Mayusculas: ' + cadena.toUpperCase() + '<br>');
    document.write('En Minusculas: ' + cadena.toLowerCase() + '<br>');
}