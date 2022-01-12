function mostrarNombre(e) {
  const cadena = e.target.value; // Captura el valor del input
  // const cadena = document.getElementById("nombre").value // Sin parámetro objeto del evento.

  if (cadena.length === 0) {
    document.getElementById('sugerencia').innerHTML = '';
    // return;
  } else {
    // Creamos el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Definimos la función que será llamada cuando cambie el estado de la solicitud,
    // es decir, cuando cambie la propieddad readyState.
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('sugerencia').innerHTML = this.responseText; // Porque el PHP devuelve un echo
      }
    };

    // Especificamos la solicitud con el método open
    // true--> envío asíncrono, el navegador no espera la respuesta y sigue interpretando.
    xhr.open('POST', 'arraynombres.php', true);

    // Otra novedad es que con POST hay que especificar el tipo de datos de la cabecera
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // Realizamos el envío de la solicitud al servidor
    xhr.send(`nombre=${cadena}`);
  }
}

document.getElementById('nombre').addEventListener('keyup', mostrarNombre);
