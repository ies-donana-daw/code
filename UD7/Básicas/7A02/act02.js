const boton = document.getElementById('cargaCatalogo');

function añadirFila(artista, titulo) {
  const celdaArtista = document.createElement('td');
  const celdaTitulo = document.createElement('td');
  celdaArtista.textContent = artista[0].textContent;
  celdaTitulo.textContent = titulo[0].textContent;

  const fila = document.createElement('tr');
  fila.appendChild(celdaArtista);
  fila.appendChild(celdaTitulo);

  const tabla = document.getElementById('resultado');
  tabla.appendChild(fila);
}

function recorrerCDs(cds) {
  cds.forEach((element) => {
    const artista = element.getElementsByTagName('ARTIST');
    const titulo = element.getElementsByTagName('TITLE');
    añadirFila(artista, titulo);
  });
}

function cargarXML(xhr) {
  const tabla = document.getElementById('resultado');
  const cabecera = '<tr><th>Artista</th><th>Título</th></tr>';
  tabla.innerHTML = cabecera;

  const docXML = xhr.responseXML;
  const discos = docXML.getElementsByTagName('CD');
  const arrayDiscos = Array.from(discos);
  recorrerCDs(arrayDiscos);
}

function cargarCatalogo() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './cd_catalog.xml');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cargarXML(xhr);
    }
  };
  xhr.send();
}

boton.addEventListener('click', cargarCatalogo);
