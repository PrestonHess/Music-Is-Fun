import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = '';
  store.State.songs.forEach(song => template += song.Template)
  document.getElementById('songs').innerHTML = template
}

function _drawActiveSong() {
  let template = store.State.activeSong.ActiveTemplate
  document.getElementById('active-song').innerHTML = template;
}

/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = '';
  store.State.playlist.forEach(playlist => template += playlist.playlistTemplate)
  document.getElementById('playlist').innerHTML = template
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe('songs', _drawResults)
    store.subscribe('activeSong', _drawActiveSong)
    store.subscribe('playlist', _drawPlaylist)
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   *
   */
  addSong(id) {
    SongService.addSong(id);
  }

  setActiveSong(id){
    SongService.setActiveSong(id)
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    SongService.removeSong(id)
  }
}
