/**
 * Модуль player-directives.
 *
 * Содержит четыре директивы (Artists, Albums, Player panel, Sidebar panel) и одну фабрику.
 * Через фабрику myFactory планировал передавать значения между контроллерами.
 */

(function(){
    var app = angular.module('player-directives', []);

    // Empty factory
    app.factory('myFactory', function () {
        return {
            dummy: "dummy"
        }
    });

    // Artists
    app.directive("artists", function() {
      return {
        restrict: 'E',
        templateUrl: "artists.html",
        controller: function($scope, myFactory){

        }
      };
    });

    // Albums
    app.directive("albums", function() {
      return {
        restrict: 'E',
        templateUrl: "albums.html"
      };
    });

    // Player panel
    app.directive("panel", function() {
      return {
        restrict: 'E',
        templateUrl: "control-panel.html",
        controller: function(){
          this.playSong = "No song";
          this.playAlbum = "No album";
          this.playIndex = "";
          this.getPlaySong = function ($event, song, album, index){
            this.playSong = song;
            this.playAlbum = album;
            this.playIndex = index;
            $event.preventDefault();
          };
          this.processing = function ($event, button){
            console.log(button);
            $event.preventDefault();
          };
        },
        controllerAs: "playStatus"
      };
    });

    // Sidebar panel
    app.directive('sidebar', function() {
      return {
        restrict: 'E',
        templateUrl: 'sidebar-menu.html',
        controller: function(){
          this.menuItem = 1;

          this.isSet = function(checkMenu) {
            return this.menuItem === checkMenu;
          };

          this.setMenu = function(setMenu) {
            this.menuItem = setMenu;
          };
        },
        controllerAs: "menuItem"
      };
    });

  })();
