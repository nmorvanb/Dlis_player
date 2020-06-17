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

    //url pour le partage
    $tabtrack['urlPartage'] = $routing->morceauPartage($tabtrack['idart'], $tabtrack['id']);

    //Supprime les valeurs qui ne sont plus necessaire dans l'envoi JSON
    unset($tabtrack['idart']);
    unset($tabtrack['serveur']);
    unset($tabtrack['serveur_visuel']);
    unset($tabtrack['id_pers']);

    //Conversion en JSON
    $trackjson = json_encode($tabtrack);
    return $trackjson;


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

/**
* Fonction qui permet d'ajouter le temps de lecture et le nombre d'écoute
* @param idfichier - id du fichier de musique
* @param idPers - id de la session
* @param sec - temps d'écoute pour un utilisateur
*/
function setReadTime($idpers,$idfichier,$sec){
  $req = DAO::getInstance()->prepare("INSERT INTO `mp3_ecoutes`(`id_fichier`, `id_pers`, `date_first_ecoute`,`date_last_ecoute`,`ip`) VALUES (?,?,NOW(),NOW(),0) ON DUPLICATE KEY UPDATE `date_last_ecoute`= NOW() ");
  $req->execute(array($idfichier,$idpers));

  $req = DAO::getInstance()->prepare("UPDATE `mp3_fichiers` SET `nb_ecoutes`= nb_ecoutes+1 WHERE `id` = ?");
  $req->execute(array($idfichier));
}


//Test
//setReadTime(2,353,16);

//like(6,353);
//unlike(6,353);
//like(18,422);


trackjson(209,2);
