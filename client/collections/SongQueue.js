// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {


  },

  playFirst: function() {
    // this.model.play();
    console.log(this.collection);
    this.collection.get('songQueue').at(0).play();
  }

});