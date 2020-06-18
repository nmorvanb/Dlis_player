const list = [
    {
       id: 1,
       tracks:[{
         titre: "House of The Rising Sun",
         artiste: "The Animals",
         duree: 320,
         urlAudio: "",
         urlVisuel: "",
         urlPartage: "",
         dureeEcoute: 1,
         read: 1,
         liked: 0,
         validUntil: ""
       }]
   },
   {
      id: 2,
      tracks:[{
        titre: "Sultans of Swing",
        artiste: "Dire Straits",
        duree: 320,
        urlAudio: "",
        urlVisuel: "",
        urlPartage: "",
        dureeEcoute: 1,
        read: 1,
        liked: 0,
        validUntil: ""
      }]
  }
];

class ApiConnector{

        
    
    static getInstance(){
  
    }
  
    /**
     *@function getTrackInfos()
     *Cette fonction les information d'une musique
     *Cette durée sera récupérer par l'API et ajouter au totale d'écoute dans la bdd
     *@param idTrack
     *l'id de la musique dont on modifie la duree d'écoute
     *@param xhr
     *Requette XTHML
     *Une requete a un etat
     *On veux donc savoir quand cet etat change, si il passe a 4 c'est la requete GET est appelée
     *trackInfos recupere les donnes sous 
     *xhr open effectue un POST sur la page ajax_function.php
     *xhr send envoie a travers le POST, la varialble jsonString
    */
    getTrackInfos(idTrack){
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
          if(xhr.status == 200){
            var trackInfos = xhr.response;
            var obj = JSON.parse(trackInfos);
            console.log(obj);
            return obj;
          }
          else{
            if(xhr.status == 404){
              console.log("Ressource introuvable")
            }
          }

          }
        }
      
      xhr.open("GET", "ajax_function.php?id="+idTrack,true);
      xhr.send();
 
       
    }
    
  
    /**
     *@function setReadTime()
     *Cette fonction envoie une durée d'écoute d'une musique par un utilisateur à l'aide d'un POST
     *Cette durée sera récupérer par l'API et ajouter au totale d'écoute dans la bdd
     *@param idTrack
     *l'id de la musique dont on modifie la duree d'écoute
     *@param sec
     *le nombre de seconde a ajouter au compteur d'écoute
     *Création d'une liste qui correspont aux données à envoyer dans le POST
     *@param list
     *liste des informations envoyer par le post
     *function indique la fonction php à effectuer
     *id_pers indique l'utilisateur
     *id_fichier indique la musique où l'on doit modifier la durée d'écoute
     *sec indique les secondes à ajouter a la durée
     *@param jsonString
     *recupere la liste JSON en format String pour pouvoir l'envoyer dans le payloadRequest
     *@param xhr
     *Requette XTHML
     *xhr open effectue un POST sur la page ajax_function.php
     *xhr send envoie a travers le POST, la varialble jsonString
    */
    setReadTime(idTrack, sec){
      var list = {
        function:"setReadTime",
        id_pers : "10",
        id_fichier: idTrack,
        sec:sec
      }
      const jsonString = JSON.stringify(list);

      const xhr = new XMLHttpRequest();
        
      xhr.open("POST", "ajax_function.php",true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(jsonString);
      //affiche dans la console le request payload
      console.log(jsonString);
    }
  
    /**
     *@function like()
     *Cette fonction envoie une musique like par un utilisateur à l'aide d'un POST
     *
     *@param idTrack
     *l'id de la musique qui doit être like
     *@param list
     *liste des informations envoyer par le post
     *function indique la fonction php à effectuer
     *id_pers indique l'utilisateur
     *id_fichier indique la musique à like
     *@param jsonString
     *recupere la liste JSON en format String pour pouvoir l'envoyer dans le payloadRequest
     *@param xhr
     *Requette XTHML
     *xhr open effectue un POST sur la page ajax_function.php
     *xhr send envoie a travers le POST, la varialble jsonString
    */
    like(idTrack){
        
      var list = {
        function:"like",
        id_pers : "10",
        id_fichier: idTrack,
      }
      const jsonString = JSON.stringify(list);
      console.log(jsonString);
      const xhr = new XMLHttpRequest();
        
      xhr.open("POST", "ajax_function.php",true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(jsonString);
      
  
    }
    /**
     *@function unlike()
     *Cette fonction envoie une musique unlike par un utilisateur à l'aide d'un POST
     *
     *@param idTrack
     *l'id de la musique qui doit être unlike
     *@param list
     *liste des informations envoyer par le post
     *function indique la fonction php à effectuer
     *id_pers indique l'utilisateur
     *id_fichier indique la musique à unlike
     *@param jsonString
     *recupere la liste JSON en format String pour pouvoir l'envoyer dans le payloadRequest
     *@param xhr
     *Requette XTHML
     *xhr open effectue un POST sur la page ajax_function.php
     *xhr send envoie a travers le POST, la varialble jsonString
    */
    unlike(idTrack){
      var list = {
        function:"unlike",
        id_pers : "10",
        id_fichier: idTrack,
      }
      const jsonString = JSON.stringify(list);
      console.log(jsonString);

      const xhr = new XMLHttpRequest();
        
      xhr.open("POST", "ajax_function.php",true);
      xhr.setRequestHeader("Content-type", "application/json");
      console.log(jsonString);
    }
  }
  