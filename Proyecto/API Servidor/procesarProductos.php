<?php
  error_reporting(0);

  $method = $_SERVER['REQUEST_METHOD'];
  $queryString = $_SERVER['QUERY_STRING'];
 
  $json = file_get_contents ('./productos.json');
  $data = json_decode($json);
  $peticion = $data->peticion;

  switch ($method) { 
    case 'GET':
      $peticion->tipo = 'GET';
      $peticion->datos = urldecode($queryString);
      break; 
    case 'POST': 
      $peticion->tipo = 'POST';
      $peticion->datos = json_decode(file_get_contents('php://input'));
      ($data->productos)[] = $peticion->datos; 
      break;
  }

  $jsonModificado = json_encode($data);
  file_put_contents('./productos.json', $jsonModificado);
  echo $jsonModificado;

?>