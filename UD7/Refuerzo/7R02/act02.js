/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const xhr = new XMLHttpRequest();

function respuesta() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const empleados = JSON.parse(xhr.responseText).employees;
    console.log(empleados);
    let muestra = '';
    for (const indice in empleados) {
      muestra += `Nombre: ${empleados[indice].firstName} , Apellidos: ${empleados[indice].lastName}<br>`;
    }
    document.getElementById('disponibilidad').innerHTML = muestra;
  }
}

function comprobar() {
  if (xhr) {
    xhr.onreadystatechange = respuesta;
    xhr.open('GET', 'servidor.php', true);
    xhr.send();
  }
}

window.onload = () => {
  document.getElementById('comprobar').onclick = comprobar;
};
