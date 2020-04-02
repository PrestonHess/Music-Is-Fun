export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {

    return /*html*/`
        <div class="card my-3 shadow">
          <img onclick="app.songsController.setActiveSong('${this._id}')" 
            src="${this.albumArt}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h3 class="card-title text-center">${this.artist}</h3>
            <h5 class="card-title text-center">${this.title}</h5>
          </div>
        </div>
    `;
  }


  get ActiveTemplate(){
    return /*html*/`
    
    <div class="card shadow my-3">
          <img onclick="" 
            src="${this.albumArt}" class="card-img-top img-fluid" alt="...">
          <div class="card-body text-center">
          <p>
            <span class="card-title  activeText">${this.artist} - </span>
            <span class="card-title  activeText">${this.title}</span>
            <p><audio src="${this.preview}" controls>
            </audio> </p>
            </p>
            <span class="bottomText  mr-4"> Album: ${this.album} </span> <span class="bottomText text-center"> Buy now $ ${this.price} </span>
            <span> 
            <button href="#" type='button' onclick="app.songsController.addSong('${this._id}')" class="mx-3 btn btn-primary">Add to playlist</button>
            </span>
          </div>
        </div>
    
    
    `
  }

  get playlistTemplate() {
    return /*html*/`
    <div class="card my-3 shadow">
      <img onclick="app.songsController.setActiveSong('${this._id}')" 
        src="${this.albumArt}" class="card-img-top img-fluid" alt="...">
        <button type="button" class="close text-danger" onclick="app.songsController.delete('${this._id}')">
        <span>&times;</span>
        </button>
      <div class="card-body">
        <h3 class="card-title text-center">${this.artist}</h3>
        <h5 class="card-title text-center">${this.title}</h5>
      </div>
    </div>
  `;
  }
}
