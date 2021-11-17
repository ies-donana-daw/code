
let aleatorio = 0;

cadena="<ol>";

for (let i = 0; i < 10; i++) {
    aleatorio = Math.floor(Math.random() * 21);
    cadena += "<li> numero aleatorio entre 0 y 20 => " + aleatorio + "</li>";
}
document.getElementById("parrafo").innerHTML += cadena + "</ol>";