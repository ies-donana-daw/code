<?php

	//recibo los datos y los decodifico con PHP
	$data = json_decode(file_get_contents('php://input'));
	$art=$data->articulo;

	

	class Articulo {
		public $id;
		public $nombre;
	 	public $categoria;
	 	public $precio;
	 	public $detalles;
	}

	$articulo = new Articulo();

	if($art > 0.5){
		$articulo->id = 1;
		$articulo->nombre = "Nintendo DS";
		$articulo->categoria = "Videojuego";
		$articulo->precio = "50€";
		$articulo->detalles = array('Soporta juegos para Gameboy advance','Pantalla táctil','Reproducción de MP3');

	}
	else{
		$articulo->id = 2;
		$articulo->nombre = "HP 2100";
		$articulo->categoria = "Impresora";
		$articulo->precio = "100€";
		$articulo->detalles = array('Impresora a color','Soporta varios formatos de papel','Muy silenciosa');

	}


	echo json_encode($articulo);
?>