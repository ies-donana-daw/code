
let confirmacion = confirm ("Está página usa cookies. Si pulsa aceptar, dará su consentimiento para utilizarlas. Si cancela, se borrarán");
confirmacion ? actualizarCookies() : removeCookie("visitas");

function actualizarCookies(){
    if (getCookie("visitas") == ""){
        setCookie("visitas", 1, 365); //Primera vez que entra
    } else {
        setCookie("visitas", parseInt(getCookie("visitas"))+1, 365);
    }
}



document.getElementById("parrafo").innerHTML= document.cookie;



// FUNCIONES AUXILIARES
 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  

function removeCookie(cname)
{
    setCookie(cname, "", 0);
}

