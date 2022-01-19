function accionar() {
  function addToArray(data, array, callback) {
    if (!array) {
      callback(new Error('No existe el array'));
    } else {
      setTimeout(() => {
        array.push(data);
        callback(null);
      }, 1000);
    }
  }
  const array = [1, 2, 3];
  addToArray(4, array, (err) => {
    let mensaje;
    if (err) {
      mensaje = err.message;
    } else {
      mensaje = array;
    }
    return console.log(mensaje);
  });
}

function accionar2() {
  function addToArray2(data, array) {
    setTimeout(() => {
      array.push(data);
    }, 1000);
  }
  const array = [1, 2, 3];
  addToArray2(4, array);
  console.log(array);
}

document.getElementById('boton').addEventListener('click', accionar);
document.getElementById('boton2').addEventListener('click', accionar2);
