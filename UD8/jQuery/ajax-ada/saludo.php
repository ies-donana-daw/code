<?php
//Si se pone POST habría que utilizar $.ajax con POST o $POST
//Si ponemos GET habría que utlizar $.ajax con GET o $GET 
$resultado = "Bienvenido, " . $_REQUEST['nombre'] ." ". $_REQUEST['apellido'];
echo $resultado;
?>