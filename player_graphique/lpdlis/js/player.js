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
     * @param fileAttente la file d'attente
     */
    constructor(audioElt, tsDebutLecture, playlist, fileAttente) {
        this.audioElt = audioElt;
        this.tsDebutLecture = tsDebutLecture;
        this.playlist = playlist;
        this.fileAttente = fileAttente;
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
        this.audioElt.src = this.playlist.getNextTrack().getUrlAudio();
        this.play();
    }

    /**
     * Lecture de la piste précédente
     * 
     */
    playPrev() {
        this.audioElt.src = this.playlist.getPrevTrack().getUrlAudio();
        this.play();
    }

    /**
     * Montre la playlist
     */
    showPlaylist() {
        this.fileAttente.style.display = "block";
    }

    /**
     * Fait disparaitre la playlist
     * 
     */

    hidePlaylist() {
        this.fileAttente.style.display = "none";
    }
    
    /**
    * Rends aléatoire la lecture
    */
    randomOn(){
        this.playlist.setRandom(true);
    }
    
    /**
    * Remets la lecture normale de la playlist
    */
    randomOff(){
        this.playlist.setRandom(false);
    }
    
    /**
    * Répète la musique en boucle
    */
    loopOn(){
        this.playlist.setLoop(true);
    }
    
    /**
    * Arrête la boucle de répétition
    */
    loopOff(){
        this.playlist.setLoop(false);
    }
}
