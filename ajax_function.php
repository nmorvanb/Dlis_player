<?php
require 'function.php';



//Recupere le request payload
$requestPayload = file_get_contents("php://input");
//Si il existe c'est qu'une methode post à été appelée
$object = json_decode($requestPayload,true);
//L'object contient le nom de la fonction de l'api à appeler
//on indique donc quelle fonction utilisée, et on utilise les reste des informations contenus dans l'objet
if(isset($object)){
    if (isset($object['function'])) {
        if($object['function'] == "like"){
            like(10,$object['id_fichier']);
        }
        elseif($object['function'] == "unlike"){
            unlike(10,$object['id_fichier']);
        }
        elseif($object['function'] == "setReadTime"){
            setReadTime(10,$object['id_fichier'],$object['sec']);
        }
    }
}

else{
//à l'aide du parametre f on récupère la fonction de l'API qui doit être appelée
    if(isset($_GET["f"])){
        if($_GET["f"]=="trackjson"){
//On doit récupérer les infos de la musique en fonction de l'id de celle ci
//On vérifie donc qu'elle est existante et on appelle la fonction de l'api
//le 2eme parametre est l'id session de l'utilisateur
            if(isset($_GET["id"])){
                echo trackjson($_GET["id"],10);
            }
        }
    }
}




?>