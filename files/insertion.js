(function () {
"use strict";
var main = function () {
  $('button').click(function(e){
    e.preventDefault(); 
    
    var $copy = $('#artistContainer').clone(true);
            
    var $artist = $('#inputArtist').val();
    var $genre = $('#inputGenre').val();
    var $songs = $('#inputSongs').val();
    var $album = $('#inputAlbums').val();

    $('#content').append($copy);  

    });
};
    $(document).ready(function () {
	   main();
	});
}());