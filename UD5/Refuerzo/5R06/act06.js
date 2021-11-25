
const patrones = {
    dni: 'Formato válido: 99.999.999-X',
    nombre: 'Introduzca al menos un nombre y un apellido. Max: 2 nombres 2 apellidos',
    fnac: 'Formato válido: dd/mm/yyyy',
    email: 'Formado válido: xxx@yyy.zzz',
    pweb: 'Formato válido: http://www.xxx.yyy',
    password: 'Debe contener entre 8 y 10 caracteres',
    cpassword: 'Debe contener entre 8 y 10 caracteres',
};

let inputs = document.getElementsByTagName('input');
let passwords = document.getElementsByName('contraseña');
let save = document.getElementById('save');
let see = document.getElementById('see');


function validarInput(e) {

        borrarError(this);

        if (this.checkValidity()) {
            error.innerHTML = '';
            return true;

        } else {
            siError(this);

            if (this.validity.valueMissing) {
                this.reportValidity();
            } else {
                this.reportValidity();
                //this.value = '';
            }
            e.preventDefault();
            return false;
        }
}


for (let i = 0; i <inputs.length; i++) {
    inputs[i].addEventListener('keyup', validarInput);
}

function validacionFormulario() {
        for (let i = 0; i <inputs.length; i++) {

            if (inputs[i].checkValidity()) {
                return true;
            } else {
                siError(inputs[i]);

                if (inputs[i].validity.valueMissing) {
                    inputs[i].reportValidity();
                } else {
                    inputs[i].reportValidity();
                }
                return false;
            }

        }
}

save.addEventListener('click', (e) => {

    if (validacionFormulario()){
        if (passwords[0].value !== passwords[1].value) {
            passwords[0].setCustomValidity(`Las contraseñas no coinciden`);
        //    passwords[0].reportValidity;
            passwords.forEach(password => (password.value = ''));
            siError(passwords[0]);
            // passwords[0].focus();
            e.preventDefault();
        } else {
            borrarError(passwords[0]);
            return true;
        }
    }else{
        e.preventDefault()
    }
});

see.addEventListener('click', () => {
    for (let i = 0; i < passwords.length; i++) {
        if (passwords[i].type == 'password') {
            passwords[i].type = 'text';
        } else {
            passwords[i].type = 'password';
        }
    }
});

function siError(elemento){
    elemento.className = "error";
   // elemento.focus();
}


function borrarError(elemento){
    elemento.className = "";
    elemento.setCustomValidity("");  //Si no ponemos el mensaje en blanco, siempre determinará validación incorrecta
}
