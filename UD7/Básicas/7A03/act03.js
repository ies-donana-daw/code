const boton = document.getElementById('mostrar');

function mostrarJSON() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './datos.json', true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // const respuestaJSON = JSON.parse(xhr.responseText);
      // console.log(xhr.responseText);
      // console.log(respuestaJSON);
      // No tiene mucho sentido, ya que es lo mismo que responseText, solo es para ver su uso
      // const respuestaTexto = JSON.stringify(respuestaJSON);
      // console.log(respuestaTexto);
      const respuestaJSON = xhr.response;
      console.log(respuestaJSON);
      const resultado = document.getElementById('res');

      resultado.innerHTML = `${respuestaJSON.nombre} nació en ${respuestaJSON.nacimiento} en ${respuestaJSON.pais}`;
      // eslint-disable-next-line max-len
      // resultado.innerHTML += `<br> El objeto ${respuestaJSON} en modo cadena es ${xhr.responseText} o ${respuestaTexto}`;
    }
  };
  xhr.send();
}
boton.addEventListener('click', mostrarJSON);
