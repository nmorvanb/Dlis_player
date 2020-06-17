<?php
namespace Musiques ;

class Routing {
	const DIR_MP3 = 'ressources/audio' ;
	const DIR_VISUELS = 'ressources/images' ;
	const PARTAGE = 'urlpartage';

	//
	// RESSOURCES
	//
	public static function morceau(int $id_artiste, int $id_fichier, string $serverName) : string {
		return self::DIR_MP3.'/'.$id_fichier.'.mp3' ;
	}

	/**
	 * Retourne le chemin vers le visuel d'un morceau
	 * (aucune vérification n'est faite pour savoir si la photo existe réellement)
	 *
	 * @param int    $id_artiste ID du profil de l'artiste
	 * @param int    $id_fichier ID du fichier
	 * @param string $serverName Le nom du serveur de stockage pour cette image. Si null, on renvoie les images par defaut.
	 * @return \Visuels
	 */
	public static function morceauVisuel(int $id_artiste, int $id_fichier, string $serverName=null) : string {
		return self::DIR_VISUELS.'/'.$id_fichier.'.jpg' ;
	}

	/**
	*	Retourne le chemin vers le partage d'un morceau
	* @param int    $id_artiste ID du profil de l'artiste
	* @param int    $id_fichier ID du fichier
	*	@return	- URL pour les partage d'un morceau
	*/
	public static function morceauPartage(int $int_artiste,int $id_fichier) : string{
		return self::PARTAGE.'/'.$id_fichier;
	}
}
