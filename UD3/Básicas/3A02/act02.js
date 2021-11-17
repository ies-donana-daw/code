const input = document.getElementById("input");
const parrafo = document.getElementById("parrafo");

function getWords() {
    if (input.value != "") {
        const palabras = input.value.trim().split(" ");
        parrafo.innerHTML += "<ul>";
        parrafo.innerHTML += "<li>" + "La primera palabra de la frase es: " + palabras[0] + "</li>";
        parrafo.innerHTML += "<li>" + "La última palabra de la frase es: " + palabras[palabras.length - 1] + "</li>";
        parrafo.innerHTML += "<li>" + "La frase tiene " + palabras.length + " palabras." + "</li>";
        parrafo.innerHTML += "</ul>";
    } else {
        alert("Debes introducir una frase.");
    }
}