function mostrarJSON() {
  fetch('./datos.json')
    .then((response) => {
      if (response.ok) {
        console.log(response.status);
        return response.json();
      // eslint-disable-next-line no-else-return
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      console.log('Los datos son:', data);
      const resultado = document.getElementById('res');
      resultado.innerHTML = `${data.nombre} nació en ${data.nacimiento} en ${data.pais}`;
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
}

const boton = document.getElementById('mostrar');
boton.addEventListener('click', mostrarJSON);
