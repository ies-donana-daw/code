var document = document;

document.addEventListener('contextmenu', evento => {
    evento = evento || window.event;
    evento.preventDefault();
});
