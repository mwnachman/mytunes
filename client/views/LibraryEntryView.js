// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)<%= title %></td>'),

  // template: _.template('<td class="song"><div class="artwork"><img src="<%= artwork_url =%>"></img></div></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    // console.log(this.model.attributes);
    var node = this.buildNode();
    // return this.$el.html(this.template(this.model.attributes));
    return this.$el.html(node);
  },

  buildNode: function() {
    var $song = $('<div class="song" />');

    // build album art
    var $artworkContainer = $('<div class="artwork" />');
    var $artwork = $('<img height="100"/>');
    $artwork.attr('src', this.model.attributes.artwork_url);
    $artworkContainer.append($artwork);
    $artworkContainer.append($('<i class="fa fa-play-circle-o" style="font-size:64px;color:rgba(255,0,0,.4)"></i>'));
    $song.append($artworkContainer);

    var $songInfo = $('<div class="songInfo" />');
    var $header = $('<div class="songHeader" />');
    $header.text(this.model.attributes.title);
    var $album = $('<div />');
    $album.text(this.model.attributes.album);
    var $artist = $('<div />');
    $artist.text(this.model.attributes.artist);

    var $songDetails = $('<div class="songDetails" />');
    $songDetails.append($album);
    $songDetails.append($artist);


    $songInfo.append($header);
    $songInfo.append($songDetails);
    $song.append($songInfo);

    return $song;
  }

});
