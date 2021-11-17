
function basico(){

    const cadena = prompt("Introduzca una frase que tenga dos delimitadores dentro de ella:");
    const lim1 = prompt("Indique el primer delimitador:");
    const lim2 = prompt("Indique el segundo delimitador:");
    
    let recorte;

    const iLim1 = cadena.indexOf(lim1);
    const iLim2 = cadena.indexOf(lim2);
    const lLim1 = cadena.lastIndexOf(lim1);
    const lLim2 = cadena.lastIndexOf(lim2);

    (iLim1 < iLim2) ? recorte = cadena.slice(iLim1 + 1, lLim2): recorte = cadena.slice(iLim2 + 1, lLim1);
    
    document.getElementById("parrafo").innerHTML += `La oración escrita es: "${cadena}". <br>`;
    document.getElementById("parrafo").innerHTML += `Los delimitadores dentro de la oración son: "${lim1}" y "${lim2}". <br>`;
    document.getElementById("parrafo").innerHTML += `La parte entre los delimitadores(su primera y última aparición): "${recorte}". <br>`;

}

