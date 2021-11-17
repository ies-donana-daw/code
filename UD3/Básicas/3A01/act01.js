let frase = prompt("Introduzca una sentencia:");
let parrafo  = document.getElementById("parrafo");

parrafo.innerHTML += "<br/> <br/>La frase que has introducido es: " + frase + "</br> La frase sin números es: ";

for (let i = 0; i <= frase.length; i++) {
    let caracter = frase.charAt(i);
    if (isNaN(caracter) || caracter == " ") { //El espacio en blanco se detecta como 0, por tanto habrá que especificar que se muestre
        alert(caracter);
        parrafo.innerHTML += caracter;
    }
}
