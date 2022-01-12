const boton = document.getElementById('miBoton');
const objetoXHR = new XMLHttpRequest();

function respuesta() {
  if (objetoXHR.readyState === 4 && objetoXHR.status === 200) {
    const divi = document.getElementById('elementoDestino');
    divi.innerHTML = objetoXHR.responseText;
  }
  console.log(objetoXHR.readyState, objetoXHR.status, objetoXHR.statusText);
}

function peticion() {
  objetoXHR.open('GET', './datos.txt', true);
  objetoXHR.onreadystatechange = respuesta;
  objetoXHR.send();
}

boton.addEventListener('click', peticion);
