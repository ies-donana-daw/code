let res = document.getElementById('res');

document.addEventListener('mousedown', capturarEvento);
document.addEventListener('keydown', capturarEvento);
document.addEventListener('mousemove', capturarEvento);

function capturarEvento(evento) {
    evento = evento || window.event;
    switch (evento.type) {
        case 'mousedown':
            res.style.backgroundColor = '#FFFF00';
         //   res.innerHTML = evento.type + '<br>';
         //   res.innerHTML += `Coordenadas respecto al navegador x: ${evento.clientX}px y: ${evento.clientY}px<br>`;
         //   res.innerHTML += `Coordenadas respecto al navegador x: ${evento.screenX}px y: ${evento.screenY}px<br>`;
            break;
        case 'keydown':
            res.style.backgroundColor = '#CCE6FF';
        //    evento = evento || window.event;
        //    res.innerHTML = evento.type + '<br>';
        //    res.innerHTML += `Caracter: ${evento.key}<br>`;
        //    res.innerHTML += `Código: ${evento.keyCode}<br>`;
            break;
        case 'mousemove':
        //    evento = evento || window.event;
            res.style.backgroundColor = '#ffffff';
            break;
        default:
            break;
    }
}
