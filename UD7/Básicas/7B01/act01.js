/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable function-paren-newline */
/* eslint-disable no-alert */

function temporizador(milisegundos) {
  const promesa = new Promise((resolver, rechazar) => {
    const temp = setTimeout(() => {
      resolver('Tiempo Concluido');
      // clearTimeout(temp2); // Realmente no hace falta pq al resolverse la promesa, se finaliza y no se ejecuta reject
    }, milisegundos);

    setTimeout(() => {
      rechazar(Error('El tiempo no va bien'));
      clearTimeout(temp);
    }, milisegundos * 2);
  });

  return promesa;
}

function iniciar() {
  const ms = prompt('¿Cuántos milisegundos quieres contabilizar?');
  const promesa = temporizador(ms);

  promesa.then((resultado) => document.getElementById('resultado').innerHTML = resultado)
    .catch((resultado) => document.getElementById('resultado').innerHTML = resultado);
}

document.getElementById('boton').addEventListener('click', iniciar);
