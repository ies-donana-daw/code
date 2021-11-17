
let hoy = new Date();
let cumple = new Date (1990, 00, 01); //Date(Año, Mes (empieza en 0), Dia)
let ms = hoy - cumple;
let anos = ((((ms / 1000) /60) /60) /24) /365.25;
years = Math.floor(anos);
let meses= (anos-years)*12;
let mes=Math.floor(meses);
let dias= parseInt((meses-mes)*30);

meses = Math.floor(meses)
document.getElementById("parrafo").innerHTML = (`Tienes ${years} años, ${meses} meses y ${dias} dias  desde hoy (${hoy.toLocaleDateString()}) hasta el día (${cumple.toLocaleDateString()}).`);

