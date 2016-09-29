// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.checkLength);

    this.on('ended', function(event) {
      this.remove(this.at(0));
      if (this.length) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  checkLength: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  }
});