<?php
/**
*Class de connexion
*/
define('DB_HOST', 'localhost');
define('DB_NAME','dlis_player');
define('DB_USER','root');
define('DB_PASS','');

class DAO extends PDO{

  private static $dao;

  /**
  * constructor DAO
  */
  public function __construct(){
    $dns = 'mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8mb4';
    try{
      parent::__construct($dns,DB_USER,DB_PASS);
      $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      self::$dao = $this;
    }catch(PDOException $e){
      die("Echec lors de la connexion: ".$e->getMessage());
    }
  }

  /**
  * Methode qui retourne l'instance de dao
  */
  public static function getInstance(){
    if(!self::$dao) self::$dao = new DAO();
    return self::$dao;
  }

  /**
  * Methode qui ferme la connexion
  */
  public static function close(){
    self::$dao = null;
  }
}
