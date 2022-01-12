<?php
// Array de nombres
$a = array("Sara", "Imanol", "Dani", "Antonio", "David", "Igor", "Naroa", "Christian", "Joseba", "Angel", "Alex", "Dumitru", "Mikel", "Ivan", "Martin");

//Capturamos el parámetro de la URL
$nombre = $_REQUEST["nombre"]; //Se podría usar $_GET o $_POST para ser más concretos, pero REQUEST sirve para los dos métodos

$sugerencia = "";

if ($nombre!==""){

    $nombre = strtolower($nombre); //Pasamos a minúsculas
    $long = strlen($nombre);

    foreach($a as $nom){ //Cada elemento del array lo pasa a $nom en cada iteración
        if(stristr($nombre, substr($nom, 0, $long))){ //Si coincide la cadena pasada con los primeros caracteres de algún elemento del array
            if($sugerencia === ""){
                $sugerencia = $nom;
            }else{
                $sugerencia = "$sugerencia, $nom";                
            }
        }
    }
}

if ($sugerencia === "") echo "No hay sugerencias";
else echo $sugerencia;
?>