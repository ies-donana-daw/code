
let caja = document.getElementById('caja');

document.addEventListener('keydown', evento => {
    evento = evento || window.event;
    
    let position = 0;

    console.log("dentro evento, tecla pulsada: " + evento.code);

    switch (evento.code) {
        
        
        case 'ArrowLeft': // left
        case 'Numpad4': // left
            position += caja.offsetLeft - 10 + 'px';
            caja.style.left = position;
            break;
        
        case 'ArrowUp':
        case 'Numpad8': // up
            position = caja.offsetTop - 10 + 'px'; 
            caja.style.top = position;
            break;
        case 'ArrowRight': // right
        case 'Numpad6': // right
            position = caja.offsetLeft + 10 + 'px';
            caja.style.left = position;
            break;
        case 'ArrowDown': //down
        case 'Numpad2': // down
            position = caja.offsetTop + 10 + 'px';
            caja.style.top = position;
            break;
        default:
            break;
    }
});
//Otra opcion
/*          let arriba = 0;
			let izquierda = 0;
			function mover(e){

				switch(e.code){
					case 'ArrowUp': {caja.style.top = (arriba -= 10) + "px"; break;}
					case 'ArrowDown': {caja.style.top = (arriba += 10 ) + "px"; break;}
					case 'ArrowLeft': {caja.style.left = (izquierda -= 50) + "px"; break;}
					case 'ArrowRight': {caja.style.left = (izquierda += 50) + "px"; break;}

				}
			}

			window.onkeydown = mover;
                */