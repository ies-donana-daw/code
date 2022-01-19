<?php

    //Para evitar warning salgan en la pantalla y se traten como texto JSON
    error_reporting(0);

    //Creamos el objeto en PHP (acceso a propiedades mediante flecha)
    $objeto = "";
    $objeto->nombre = "Ada";
    $objeto->nacimiento = 1815;
    $objeto->pais = "UK";

    //Codificamos el objeto a JSON usando el método json_encode, es el equivalente a JSON.parse en JS
    $miJSON = json_encode($objeto);

    //Lo mostramos
    echo $miJSON;

?>