let res = document.getElementById('res');

document.addEventListener('mousedown', evento => {
    evento = evento || window.event;
    switch (evento.button) {
        case 0:
            res.innerHTML += 'Has pulsado el click izquierdo. Valor: '+ evento.button + '-->' + evento.type + '<br>';
            break;
        case 1:
            res.innerHTML += 'Has pulsado el la rueda central. Valor: '+ evento.button + '-->' + evento.type + '<br>';
            break;
        case 2:
            res.innerHTML += 'Has pulsado el click derecho.  Valor: '+ evento.button + '-->' + evento.type + '<br>';
            break;
        default:
            break;
    }
});

