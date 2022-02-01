// Manejo de la respuesta
function respuesta() {
  if (this.readyState === 4) {
    if (this.status === 200) {
      const objDatos = JSON.parse(this.responseText);

      // Ahora con el objeto desplegamos los datos mandados desde el servidor
      document.getElementById('divId').innerHTML = objDatos.id;
      document.getElementById('divNombre').innerHTML = objDatos.nombre;
      document.getElementById('divCategoria').innerHTML = objDatos.categoria;
      document.getElementById('divPrecio').innerHTML = objDatos.precioDeSalida;
      document.getElementById('divDetalles').innerHTML = objDatos.detalles.toString();
    } else {
      // eslint-disable-next-line no-alert
      alert('Ocurrió un problema con el servidor.');
    }
  }
}

// Descarga los datos JSON del servidor.
function comprobar() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'respuestaJsonGet.php', true);
  xhr.onreadystatechange = respuesta;
  xhr.send();
}

window.onload = () => {
  document.getElementById('comprobar').onclick = comprobar;
};
