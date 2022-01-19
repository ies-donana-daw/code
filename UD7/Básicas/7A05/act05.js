/* eslint-disable quote-props */

// PARTE PETICIÓN AJAX
function respuesta() {
  if (this.readyState === 4 && this.status === 201) {
    // Cuando el método es post el status es 201, pq se genera un recurso
    console.log('Petición correcta');
    console.log(this.responseText);
    const objetoJSON = JSON.parse(this.responseText);
    document.getElementById('res').innerHTML = `El código de la respuesta de la petición es ${this.status}`;
    // eslint-disable-next-line no-use-before-define
    generarTabla(objetoJSON);
  }
}
function peticion(urlServidor) {
  const xhr = new XMLHttpRequest();

  const inputNombre = document.getElementById('inputNombre').value;
  const inputApellido = document.getElementById('inputApellido').value;

  const objetoJSON = {
    'first_name': inputNombre,
    'last_name': inputApellido,
  };

  const stringQuery = JSON.stringify(objetoJSON);
  // console.log(stringQuery);
  xhr.open('POST', urlServidor);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = respuesta;
  xhr.send(stringQuery);
}

document.getElementById('botAñadir').addEventListener('click', () => {
  peticion('https://reqres.in/api/users');
});

// PARTE TRATAMIENTOS DATOS - DOM

function generarCabecera(tabla) {
  const cabecera = document.createElement('thead');
  const filaCabecera = document.createElement('tr');
  const celdasCabecera = '<th>id</th><th>Nombre</th><th>Apellido</th><th>Email</th>';
  filaCabecera.innerHTML = celdasCabecera;
  cabecera.appendChild(filaCabecera);
  tabla.appendChild(cabecera);
}

function generarCelda(contenido, fila) {
  const celda = document.createElement('td');
  celda.innerText = contenido;
  fila.appendChild(celda);
}

function generarFila(usuario) {
  const fila = document.createElement('tr');
  const celdaId = usuario.id;
  const celdaNombre = usuario.first_name;
  const celdaApellido = usuario.last_name;
  const celdaEmail = '';

  generarCelda(celdaId, fila);
  generarCelda(celdaNombre, fila);
  generarCelda(celdaApellido, fila);
  generarCelda(celdaEmail, fila);

  return fila;
}

function generarCuerpo(tabla, usuario) {
  const cuerpo = document.createElement('tbody');
  const fila = generarFila(usuario);
  cuerpo.appendChild(fila);
  tabla.appendChild(cuerpo);
}

function generarTabla(objeto) {
  const tabla = document.createElement('table');
  generarCabecera(tabla);
  generarCuerpo(tabla, objeto);
  document.getElementById('res').appendChild(tabla);
}
