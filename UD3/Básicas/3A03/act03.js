
function esCoordenada() {

    const input = document.getElementById('coordenada');
    
    let resultado = document.getElementById('resultado');
    let patt = /^\(\d{1,3}\,\d{1,3}\)$/; // Otra equivalente /^/\([0-9]{1,3})\,([0-9]{1,3}\))$/; /

    if (input.value != "") {
        if (patt.test(input.value)) {  //Busca el patrón patt en la cadena que se le pasa como argumento
            resultado.innerHTML = `Enhorabuena, la coordenada ${input.value} es correcta.`;
        } else {
            resultado.innerHTML = (`Error, la coordenada ${input.value} debe seguir este formato: (999,999). Siendo posible introducir de 1 a 3 dígitos.`);
        }
    } else {
        resultado.innerHTML = ("Error: no has introducido ninguna coordenada.");
    }
}