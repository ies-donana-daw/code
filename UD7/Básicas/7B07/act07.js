/* eslint-disable no-use-before-define */
/* eslint-disable quote-props */

// PARTE PETICIÓN AJAX
function peticion(urlServidor) {
  const resultado = document.getElementById('res');
  const inputNombre = document.getElementById('inputNombre').value;
  const inputApellido = document.getElementById('inputApellido').value;

  // eslint-disable-next-line prefer-const
  let objForm = new FormData();
  objForm.append('first_name', inputNombre);
  objForm.append('last_name', inputApellido);

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: objForm,
  };

  fetch(urlServidor, options)
    .then((response) => {
      if (response.ok) {
        resultado.innerHTML = `El código de la respuesta de la petición es ${response.status}`;
        return response.json();
      // eslint-disable-next-line no-else-return
      } else {
        console.log('Fallo peticion');
        throw new Error(response.status);
      }
    })
    .then((data) => {
      console.log('Los datos son:', data);
      generarTabla(data);
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
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
