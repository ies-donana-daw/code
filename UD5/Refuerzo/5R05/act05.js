let img = document.getElementById('img');

img.addEventListener('mousedown', capturarEvento);
img.addEventListener('mouseup', capturarEvento);

function capturarEvento(evento) {
    evento = evento || window.event;
    switch (evento.type) {
        case 'mousedown':
            img.src =
                'https://cdn.pixabay.com/photo/2019/07/13/10/32/desk-4334506_1280.jpg';
            break;
        case 'mouseup':
            img.src =
                'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg';
            break;
        default:
            break;
    }
}
