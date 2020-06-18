<?php
require 'function.php';




$requestPayload = file_get_contents("php://input");
$object = json_decode($requestPayload,true);
if(isset($object)){
    if (isset($object['function'])) {
        if($object['function'] == "like"){
            like($object['id_pers'],$object['id_fichier']);
        }
        elseif($object['function'] == "unlike"){
            unlike($object['id_pers'],$object['id_fichier']);
        }
        elseif($object['function'] == "setReadTime"){
            unlike($object['id_pers'],$object['id_fichier'],$object['sec']);
        }
    }
}
else{
    if(isset($_GET["id"])){
        echo trackjson($_GET["id"]);
    }
}




?>