<?php
require 'DAO.php';
require 'Routing.class.php';


/**
* Fonction pour retourner au format JSON les caractéristique d'un morceaux
* @param idTrack - id du fichier de musique
* @param idPers - id de la session
* @return trackjson - Les caractéristique de la musique au format JSON
*/
function trackjson($idTrack,$idpers = null){

  //Requête pour récuperer un morceau qui à déja été liker
  $req = DAO::getInstance()->prepare("SELECT mp3_fichiers.id,profil_profils.id as idart,serveur,profil_profils.serveur_visuel,libelle as titre,libelle_hyper_lien as artiste,liked,mp3_coup_de_coeur.id_pers, nb_ecoutes as 'read', duree
                                      FROM `profil_profils` INNER JOIN `mp3_fichiers` ON profil_profils.id = mp3_fichiers.id_profil_artiste INNER JOIN `mp3_coup_de_coeur` ON mp3_fichiers.id = mp3_coup_de_coeur.id_fichier
                                      WHERE mp3_fichiers.id=? AND mp3_coup_de_coeur.id_pers=?");
  $req->execute(array($idTrack,$idpers));
  $tabtrack = $req->fetch(PDO::FETCH_ASSOC);

  //Si la musique n'a jamais été liker on récupère seulement les information de la musique
  if($tabtrack==null){
    $req = DAO::getInstance()->prepare("SELECT mp3_fichiers.id, profil_profils.id as idart, serveur, profil_profils.serveur_visuel, libelle as titre, libelle_hyper_lien as artiste,nb_ecoutes as 'read',duree
                                        FROM `profil_profils` INNER JOIN `mp3_fichiers` ON profil_profils.id = mp3_fichiers.id_profil_artiste
                                        WHERE mp3_fichiers.id=?");
    $req->execute(array($idTrack));
    $tabtrack = $req->fetch(PDO::FETCH_ASSOC);
    $tabtrack["liked"] = 0;
  }

  //Recupération des url
  $routing = new Musiques\Routing();

  //Le morceau mp3
  $tabtrack['urlAudio'] = $routing->morceau($tabtrack['idart'],$tabtrack['id'],$tabtrack['serveur']);

  //Le visuel
  $tabtrack['urlVisuel'] = $routing->morceauVisuel($tabtrack['idart'], $tabtrack['id'], $tabtrack['serveur_visuel']);

  //Supprime les valeurs qui ne sont plus necessaire dans l'envoi JSON
  unset($tabtrack['idart']);
  unset($tabtrack['serveur']);
  unset($tabtrack['serveur_visuel']);
  unset($tabtrack['id_pers']);

  //Conversion en JSON
  $trackjson = json_encode($tabtrack);
  return $trackjson;
  //print_r($trackjson);
}

/**
* Fonction qui permet de sauvegarder le like d'une musique dans la bdd
* @param idfichier - id du fichier de musique
* @param idPers - id de la session
*/
function like($idpers,$idfichier){
  $req = DAO::getInstance()->prepare("INSERT INTO `mp3_coup_de_coeur`(`id_fichier`, `id_pers`, `liked`) VALUES (?,?,1) ON DUPLICATE KEY UPDATE `liked` = 1");
  $req->execute(array($idfichier,$idpers));
}

/**
*Fonction qui permet de sauvegarder le unlike d'une musique dans la bdd
* @param idfichier - id du fichier de musique
* @param idPers - id de la session
*/
function unlike($idpers, $idfichier){
  $req = DAO::getInstance()->prepare("INSERT INTO `mp3_coup_de_coeur`(`id_fichier`, `id_pers`, `liked`) VALUES (?,?,0) ON DUPLICATE KEY UPDATE `liked` = 0");
  $req->execute(array($idfichier,$idpers));
}

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

var_dump($requestPayload);

//Test
//like(6,353);
//unlike(6,353);
//like(18,422);


trackjson(209,2);
