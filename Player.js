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
        console.log("appel à la fonction play");
    }

    /**
     * Met en pause la musique.
     *
     */

    pause() {
        console.log("Vous avez appeler la fonction pause");
    }

    /**
     * Pause la Pré-écoute
     */
    pausePreEcoute() {
        console.log("appel à la fonction pausePreEcoute");
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
}
