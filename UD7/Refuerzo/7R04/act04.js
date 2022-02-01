/* eslint-disable no-alert */
/* eslint-disable quote-props */

function respuesta() {
  if (this.readyState === 4) {
    if (this.status === 200) {
      const objDatos = JSON.parse(this.responseText);
      console.log('Respuesta', objDatos);
      // Ahora con el objeto desplegamos los datos mandados desde el servidor
      document.getElementById('divId').innerHTML = objDatos.id;
      document.getElementById('divNombre').innerHTML = objDatos.nombre;
      document.getElementById('divCategoria').innerHTML = objDatos.categoria;
      document.getElementById('divPrecio').innerHTML = objDatos.precio;
      document.getElementById('divDetalles').innerHTML = objDatos.detalles.toString();
    } else {
      alert('Ocurrió un problema con la URL.');
    }
  }
}

function comprobar() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'respuestaJsonPost.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(JSON.stringify({ "articulo" : Math.random()}));
  const obj = { 'articulo': Math.random() };
  const objT = JSON.stringify(obj);
  console.log('Parametro: artículo', objT);
  xhr.send(objT);

  xhr.onreadystatechange = respuesta;
}

window.onload = () => {
  document.getElementById('comprobar').onclick = comprobar;
};
