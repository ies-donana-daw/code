const boton = document.getElementById('cambiaContenido');

function cambiarContenido() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(this); // Para usar this no puede ser función flecha
    if (this.readyState === 4 && this.status === 200) {
      const texto = document.getElementById('texto');
      texto.innerHTML = this.responseText;
    }
  };
  xhr.open('GET', 'holamundo.txt');
  xhr.send();
}

boton.addEventListener('click', cambiarContenido);
