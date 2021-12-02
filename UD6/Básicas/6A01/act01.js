let inputName = document.getElementById('inputName');
let inputDWECL = document.getElementById('inputDWECL');
let inputDWESE = document.getElementById('inputDWESE');
let inputDIW = document.getElementById('inputDIW');

let button = document.getElementById('button');

let table1 = document.getElementById('tabla1');
let table2 = document.getElementById('tabla2');

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

let alumnos = [];
let countAlum = 0;

button.addEventListener("click", crearArray);
button1.addEventListener("click", crearTabla1);
button2.addEventListener("click", crearTabla2);

function crearArray() {

    if (isNaN(inputName.value) && !isNaN(inputDWECL.value) && !isNaN(inputDWESE.value) && !isNaN(inputDIW.value)) {

        if ((inputDWECL.value >= 0 && inputDWECL.value <= 10) && (inputDWECL.value >= 0 && inputDWECL.value <= 10) && (inputDWECL.value >= 0 && inputDWECL.value <= 10)) {
           
            if (countAlum != 5) {
                alumnos[countAlum] = [inputName.value, inputDWECL.value, inputDWESE.value, inputDIW.value];
            } else {
                alert("Ya has introducido los 5 alumnos");
            }
            inputName.value = "";
            inputDWECL.value = "";
            inputDWESE.value = "";
            inputDIW.value = "";
            countAlum++;
        } else {
            alert("Las notas tienen que estar comprendidas entre 0 y 10");
            inputName.value = "";
            inputDWECL.value = "";
            inputDWESE.value = "";
            inputDIW.value = "";
        }
    } else {
        alert("Los datos introducidos no son correctos");
        inputName.value = "";
        inputDWECL.value = "";
        inputDWESE.value = "";
        inputEIE.value = "";
    }
}

function crearTabla1(){

  table1.innerHTML ="<tr><th>Nombre</th><th>DWECL</th><th>DWESE</th><th>DIW</th></tr>"
 
    for (let i=0; i<alumnos.length;i++){
        table1.innerHTML += "<tr> <td>"+alumnos[i][0]+"</td><td>"+alumnos[i][1]+"</td><td>"+alumnos[i][2]+"</td><td>" +alumnos[i][3]+"</td><tr>";
    }   
}

function crearTabla2() {

    tabla2.innerHTML="";

    let cabeceras = ["Nombre", "DWECL", "DWESE", "DIW"];
    let cabeceraTabla  = document.createElement('thead');
    let filaCabecera = document.createElement('tr');
    for (let cabecera of cabeceras){
        let celdaCabecera = document.createElement('th');
        celdaCabecera.textContent = cabecera;
        filaCabecera.appendChild(celdaCabecera)
    }
    
    cabeceraTabla.appendChild(filaCabecera)
    table2.appendChild(cabeceraTabla)
        
    let cuerpoTabla = document.createElement('tbody');

    alumnos.forEach(function(datosFilas) {
        let fila = document.createElement('tr');

        datosFilas.forEach(function(datosCeldas) {
            let celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });

        cuerpoTabla.appendChild(fila);
    });

    tabla2.appendChild(cuerpoTabla);
   // document.body.appendChild(tabla2);
   // tabla2.setAttribute("border", "1");
}
