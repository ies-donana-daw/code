let cerrojo = false;
let reloj;

let button = document.getElementById('button');

function clock() {

    let date = new Date();
    let h = formatZero(date.getHours());
    let m = formatZero(date.getMinutes());
    let s = formatZero(date.getSeconds());
    document.title = `${h}:${m}:${s}`;

}

function stopStart() {
  
  cerrojo = !cerrojo;

    if (cerrojo) {         
        reloj = setInterval(clock, 500);         
    } else {
        clearTimeout(reloj);            
    }

}

function formatZero(num) {

    return num < 10 ? "0" + num : num;

}