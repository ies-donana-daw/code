function cambiarContenido() {
  fetch('./holamundo.txt')
    .then((response) => {
      if (response.ok) {
        console.log(response.status);
        return response.text();
        // eslint-disable-next-line no-else-return
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      console.log('Los datos son:', data);
      const divi = document.getElementById('texto');
      divi.innerHTML = data;
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
}

const boton = document.getElementById('cambiaContenido');
boton.addEventListener('click', cambiarContenido);
