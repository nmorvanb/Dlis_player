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
     */
    constructor(audioElt, tsDebutLecture, playlist) {
        this.audioElt = audioElt;
        this.tsDebutLecture = tsDebutLecture;
        this.playlist = playlist;
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
        console.log("appel à la fonction showPlaylist");
    }

    /**
     * Fait disparaitre la playlist
     * 
     */

    hidePlaylist() {
        console.log("Vous avez appeler la fonction hidePlaylist");
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
