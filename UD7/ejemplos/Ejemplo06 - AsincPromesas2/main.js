/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
function usarPromesa() {
  const promesa = new Promise((resolver) => {
    let n = 0;
    const intervalo = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      n++;
      if (n === 10) {
        resolver('Han pasado 10 segundos');
        clearInterval(intervalo);
      }
      // else { // No se añade esto pq la promesa finaliza con el reject 
      // rechazar(Error(`Han pasado solo ${n} segundos`));
      // }
    }, 1000);
  });

  promesa.then((resultado) => console.log(resultado))
    .catch((error) => console.log(error.message));
}

document.getElementById('boton').addEventListener('click', usarPromesa);
