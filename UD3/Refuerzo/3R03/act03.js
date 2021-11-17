let input = document.getElementById("hour");
let resultado = document.getElementById('resultado');
const patt = /^([01][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/; //? pueden darse 0 o 1 ocurrencias de (:[0-5][0-9])  
                                                            // Otra forma: /^(0\d|1\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/
function isHour() {
    if (input.value != "") {
        if (patt.test(input.value)) {
            resultado.innerHTML = `La hora (${input.value}) es correcta.`
        } else {
            resultado.innerHTML = `La hora (${input.value}) no es correcta, tiene que tener el formato hh:mm:ss o hh:mm`
        }
    } else {
        resultado.innerHTML = "No has introducido ninguna hora."
    }
}