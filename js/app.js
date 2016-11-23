/**
 * Angular 1.5.8
 */

(function() {

  var app = angular.module( 'musicPlayer', ['player-directives'] );

  // Хранилище в localStorage для записи и получения музыкальной библиотеки
  app.controller("PlayerController", function() {
    var player = this;

    player.library = [];
    player.library = JSON.parse( localStorage.getItem('player') );
  });

  // Хранилище в localStorage для записи и получения плейлистов
  app.controller("PlaylistController", function() {
    this.addPlaylist = function(newPlaylist) {
      this.storage = {};

      var storage = this.storage = JSON.parse( localStorage.getItem('playlists' ));

      if (storage == null) {
          this.storage = {
            playlists:[{

            }]
          };
          localStorage.setItem( 'playlists', JSON.stringify(this.storage) );
      }

      var playlistID = this.storage.playlists.length + 1;
      this.storage.playlists[playlistID] = {id: playlistID, name: newPlaylist};
      localStorage.setItem( 'playlists', JSON.stringify(this.storage) );
      location.reload();
    };

    this.playlists = JSON.parse( localStorage.getItem('playlists') );
  });

  // Загрузка и обработка файла библиотеки
  app.controller('UploadFileController', function($scope) {
    $scope.data = {};

    $scope.uploadFile = function() {
      var file = document.getElementById('file').files[0],
          reader = new FileReader();

      reader.onloadend = function(e) {
        $scope.data = e.target.result;
        json = JSON.parse($scope.data);

        alert( JSON.stringify(json) );
        storage = localStorage.setItem( 'player', JSON.stringify(json) );

        location.reload();
      };
      reader.readAsBinaryString(file);
    };

  });

})();
