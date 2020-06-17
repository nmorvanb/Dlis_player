<?php
$requestPayload = file_get_contents("php://input");
$object = json_decode($requestPayload,true);
if (isset($object['liked'])) {
  if($object['liked'] == 1){
    like($object['id_pers'],$object['id_fichier']);
  }
  elseif($object['liked'] == 0){
    unlike($object['id_pers'],$object['id_fichier']);
  }
}

var_dump($requestPayload);?>