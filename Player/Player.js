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
     * @param volumeSpan le volume
     */
    constructor(audioElt, tsDebutLecture, playlist, fileAttente, volumeSpan) {
        this.audioElt = audioElt;
        this.tsDebutLecture = tsDebutLecture;
        this.playlist = playlist;
        this.fileAttente = fileAttente;
        this.volumeSpan = volumeSpan;

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
        this.fileAttente.classList.add('active_playlist');
    }

    /**
     * Fait disparaitre la playlist
     * 
     */

    hidePlaylist() {
        this.fileAttente.classList.remove('active_playlist');
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

    /**
     * Montre le volume
     */
    showVolume(){
        this.volumeSpan.classList.add('active_volume');
        
    }

    /**
     * Fait disparaître le volume
     */
    hideVolume(){
        this.volumeSpan.classList.remove('active_volume');
    }
}
