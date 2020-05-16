export class LiveModel {

  constructor() {
    this.title = ""
    this.artist = ""
    //this.date = new Date().toISOString().substr(0, 10)
    this.eventDate = ""
    this.categories = ""
  }


  /**
   * Returns a serialized JSON-like object
   * @returns {Object}
   *
   */
  dump() {
    let serialized = {
      title: this.title,
      artist: this.artist,
      eventDate: this.eventDate,
      categories: this.categories,
    }
    return serialized
  }
}
