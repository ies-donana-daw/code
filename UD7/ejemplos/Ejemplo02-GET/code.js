// Creamos un objeto XHR.
const miXHR = new XMLHttpRequest();

/// //////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) == 4 quiere decir que la petición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText o responseXML
/// //////////////////////////////////////////////////////
function estadoPeticion() {
  // Haremos la comprobación en este orden ya que primero tiene que llegar readyState==4
  // y por último se comprueba el status devuelto por el servidor==200.
  if (this.readyState === 4 && this.status === 200) {
    // Desactivamos el indicador AJAX.
    document.getElementById('indicador').innerHTML = '';
    // Metemos en el contenedor resultados las respuestas de la petición AJAX.
    document.getElementById('resultados').innerText = this.responseText;
  }
}

/// //////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX de forma ASINCRONA.
/// //////////////////////////////////////////////////////
function cargarAsync(url) {
  if (miXHR) {
    // Activamos el indicador Ajax antes de realizar la petición.
    document.getElementById('indicador').innerHTML = "<img src='Ajax-loader.gif'/>";
    // Si existe el objeto  miXHR
    miXHR.open('GET', url, true); // Abrimos la url, true=ASINCRONA
    // En cada cambio de estado(readyState) se llamará a la función estadoPeticion
    miXHR.onreadystatechange = estadoPeticion;
    // Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET
    miXHR.send(null);
  }
}

function iniciar() {
  // Cargamos de forma asíncrona el texto que nos devuelve la página
  // procesar.php con los parámetros indicados en la URL
  cargarAsync('procesar.php?nombre=Teresa&apellidos=Blanco Ferreiro');
}

const boton = document.getElementById('iniciar');
boton.addEventListener('click', iniciar);
