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
    *Fonction like
    *@param idTrack
    *  l'id de la musique qui doit être like
    * @param sec
    * le nombre de seconde a ajouter au compteur d'écoute
    *result recupere une liste des musiques ayant l'id demander à l'aide de filter
    *comme il n'ya qu'une seule musique dans la liste, on va la récupérer en utilisant result[0].tracks[0]
    *@return result[0].tracks[0]
    *renvoie l'intégralité des infos d'une musique
    */
    getTrackInfos(idTrack){
        var result = list.filter(function(element){
          if (element.id == idTrack){
            return true;
          } else {
            return false;
          }
        });
    
        
        var track = {
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

        }
      }
    
  
    /**
    *Fonction like
    * @param idTrack
    *  l'id de la musique qui doit être like
    * @param sec
    * le nombre de seconde a ajouter au compteur d'écoute
    *result recurepere un²²e liste des musiques ayant l'id demander à l'aide de filter
    *comme il n'ya qu'une seule musique dans la liste, on va la récupérer en utilisant result[0].tracks[0]
    *On additionne le compteur existant aux secondes à ajouter
    */
    setReadTime(idTrack, sec){
        var result = list.filter(function(element){
            if (element.id == idTrack){
              return true;
            } else {
              return false;
            }
          });
          result[0].tracks[0].dureeEcoute = result[0].tracks[0].dureeEcoute + sec;
    }
  
    /**
    *Fonction like
    *@param idTrack
    *   l'id de la musique qui doit être like
    *result recurepere une liste des musiques ayant l'id demander à l'aide de filter
    *comme il n'ya qu'une seule musique dans la liste, on va la récupérer en utilisant result[0].tracks[0]
    *On fixe l'attribue liked a 1 pour indiquer qu'il est like
    */
    like(idTrack){
        
      var result = {
        function:"unlike",
        id_pers : "10",
        id_fichier: idTrack,
      }
      const jsonString = JSON.stringify(result);

      const xhr = new XMLHttpRequest();
        
      xhr.open("POST", "ajax_function.php");
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(jsonString);
  
    }
    /**
    *Fonction unlike
    *@param idTrack
    *   l'id de la musique qui doit être unlike
    *result recurepere une liste des musiques ayant l'id demander à l'aide de filter
    *comme il n'ya qu'une seule musique dans la liste, on va la récupérer en utilisant result[0].tracks[0]
    *On fixe l'attribue liked a 0 pour indiquer qu'il est dislike
    */
    unlike(idTrack){
      var result = {
        function:"unlike",
        id_pers : "10",
        id_fichier: idTrack,
      }
      const jsonString = JSON.stringify(result);

      const xhr = new XMLHttpRequest();
        
      xhr.open("POST", "ajax_function.php");
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(jsonString);
    }
  }
  