<?php


	class Articulo {
	 public $id;
	 public $nombre;
	 public $categoria;
	 public $precioDeSalida;
	 public $detalles;
	}



	$articulo = new Articulo();
	$articulo->id = 1;
	$articulo->nombre = "Nintendo DS";
	$articulo->categoria = "Videojuego";
	$articulo->precioDeSalida = "$3 500";
	$articulo->detalles = array('Soporta juegos para Gameboy advance','Pantalla táctil','Reproducción de MP3');

	echo json_encode($articulo);
?>