/* eslint-disable quote-props */
//
// PETICIONES GET
//
function procesarRespuestaGet() {
  if (this.readyState === 4 && this.status === 200) {
    const objetoJSON = this.response;
    // Aquí tendréis que filtrar la información que interese del JSON
    const resultado = document.getElementById('resultadoGet');
    resultado.innerText = JSON.stringify(objetoJSON);
  }
}

function lanzarPeticionGet() {
  const parametro1 = document.getElementById('param1').value;
  const parametro2 = document.getElementById('param2').value;
  const queryString = `?parametro1=${parametro1}&parametro2=${parametro2}`;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', `./procesarProductos.php${queryString}`, true);
  xhr.onreadystatechange = procesarRespuestaGet;
  xhr.send();
}

const botonGet = document.getElementById('lanzaGet');
botonGet.addEventListener('click', lanzarPeticionGet);

//
// PETICIONES POST
//
function procesarRespuestaPost() {
  if (this.readyState === 4 && this.status === 200) {
    const objetoJSON = this.response;
    const resultado = document.getElementById('resultadoPost');
    resultado.innerText = JSON.stringify(objetoJSON);
  }
}

function crearObjeto() {
  const id = document.getElementById('id').value;
  const categoria = document.getElementById('categoria').value;
  const nombre = document.getElementById('nombre').value;
  const imagen = document.getElementById('imagen').value;
  const precio = document.getElementById('precio').value;
  const descripcion = document.getElementById('descripcion').value;
  const objetoJSON = {
    'id': id,
    'categoria': categoria,
    'nombre': nombre,
    'imagen': imagen,
    'precio': precio,
    'descripcion': descripcion,
  };
  return objetoJSON;
}

function lanzarPeticionPost() {
  const objetoJSON = crearObjeto();
  const dataString = JSON.stringify(objetoJSON);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', './procesarProductos.php', true);
  xhr.onreadystatechange = procesarRespuestaPost;
  xhr.send(dataString);
}

const botonPost = document.getElementById('lanzaPost');
botonPost.addEventListener('click', lanzarPeticionPost);

//
// MACHACAR JSON
//
function procesarRespuestaMachaque() {
  if (this.readyState === 4 && this.status === 200) {
    const objetoJSON = this.response;
    const resultado = document.getElementById('resultadoMachaque');
    resultado.innerText = JSON.stringify(objetoJSON);
  }
}

function crearJSON() {
  const objetoJSON = {
    'productos': [
      {
        'id': 1,
        'categoria': 'hardware',
        'nombre': 'Procesador Intel i7',
        'imagen': './img/procesadorIntel.jpg',
        'precio': 295,
        'descripcion': 'Procesador de 10 generación',
      },
      {
        'id': 2,
        'categoria': 'hardware',
        'nombre': 'Procesador AMD Ryzen',
        'imagen': './img/procesadorAMD.jpg',
        'precio': 255,
        'descripcion': 'Procesador de la familia Zen+',
      },
    ],
    'peticion': {
      'tipo': '',
      'datos': '',
    },
  };
  return objetoJSON;
}

function lanzarMachaque() {
  const objetoJSON = crearJSON();
  const dataString = JSON.stringify(objetoJSON);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', './machacarProductos.php', true);
  xhr.onreadystatechange = procesarRespuestaMachaque;
  xhr.send(dataString);
}

const botonPost2 = document.getElementById('lanzaMachaque');
botonPost2.addEventListener('click', lanzarMachaque);
