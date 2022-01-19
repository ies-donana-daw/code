<?php
  error_reporting(0);

  file_put_contents('./productos.json', file_get_contents('php://input'));
  $json = file_get_contents ('./productos.json');

  echo $json;
