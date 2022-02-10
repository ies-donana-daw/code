<?php
  header('Content-Type: application/json');
  header('Cache-Control: no-cache, must-revalidate');
  header('Expires: Mon 26 Jul 1997 05:00:00 GMT');

  $cadena = '[{
    "Fruta": [
      {"Nombre": "Manzana","Cantidad":10},
      {"Nombre": "Pera","Cantidad":20},
      {"Nombre": "Naranja","Cantidad":30},
    ]    
  },{
    "Verdura": [
      {"Nombre": "Lechuga","Cantidad":80},
      {"Nombre": "Tomate","Cantidad":15},
      {"Nombre": "Pepino","Cantidad":50},
    ]    
  }]';

  echo $cadena;
?>
