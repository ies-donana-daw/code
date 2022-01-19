/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
function usarPromesa() {
  const promesa = new Promise((resolver, rechazar) => {
    const n1 = prompt('Introduce variable 1');
    const n2 = prompt('Introduce variable 2');
    // eslint-disable-next-line no-unused-expressions
    (n1 == n2) ? resolver('Son iguales') : rechazar(Error('Algo raro ha pasado'));
  });

  promesa.then((resultado) => console.log(resultado))
    .catch((error) => console.log(error.message));
}

document.getElementById('boton').addEventListener('click', usarPromesa);
