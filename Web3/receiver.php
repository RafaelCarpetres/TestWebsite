<?php

$jsonText = '{
  "name": "receptor videos",
  "err" : null,
  "data": {
    "Titulo": "Phasmophobia - Fantasma Asesino",
    "Desc": "Video de Phasmophobia, videojuego donde atrapan fantasmas",
  "url": "https://youtu.be/cmASKLvCJ2I"
  }
}';

if($_POST('user')){
    echo $jsonText;
}else{
    echo "no ha ingresado los datos";
}

?>