/** 
 * Classe du lecteur de musique
 * @author Ewen
 * @author Raphael
 */
class Player {

    /**
     * Constructeur du playeur
     * @param audioElt un HtmlMediaElement
     * @param tsDebutLecture le timestamp de debut de lecture
     * @param playlist la playlist
     * @param listeVisuelle la file d'attente
     */
    constructor(audioElt, tsDebutLecture, playlist, listeVisuelle) {
        this.audioElt = audioElt;
        this.tsDebutLecture = tsDebutLecture;
        this.playlist = playlist;
        this.listeVisuelle = listeVisuelle;
    }

    /**
     * Joue l'audio audioElt
     */
    play() {
        this.audioElt.play();
    }

    /**
     * Met en pause la musique.
     *
     */

    pause() {
        this.audioElt.pause();
    }

    /**
     * Pause la Pré-écoute
     */
    pausePreEcoute() {
        this.audioElt.pause();
        this.audioElt.currentTime = 0;
    }

    /**
     * Joue l'audio suivant dans la playlist
     */
    playNext() {
        console.log("appel à la fonction playNext");
    }

    /**
     * Lecture de la piste précédente
     * 
     */
    playPrev() {
        console.log("Vous avez appeler la fonction playPrev");
    }

    /**
     * Montre la playlist
     */
    showPlaylist() {
        this.listeVisuelle.style.display = "block";
    }

    /**
     * Fait disparaitre la playlist
     * 
     */

    hidePlaylist() {
        this.listeVisuelle.style.display = "none";
    }
    
    /**
    * Rends aléatoire la lecture
    */
    randomOn(){
        
    }
    
    /**
    * Remets la lecture normale de la playlist
    */
    randomOff(){
        
    }
    
    /**
    * Répète la musique en boucle
    */
    repeatOn(){
        
    }
    
    /**
    * Arrête la boucle de répétition
    */
    repeatOff(){
        
    }
}

