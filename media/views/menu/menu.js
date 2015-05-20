'use strict';

angular.module('auti.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/menu/menu.html',
    controller: 'menuCtrl'
  });
}])
.controller('menuCtrl', function($global, $scope) {
	document.getElementsByTagName('body')[0].className = 'blue-grey darken-1';

	$scope.loadTiles = function(){
		var tiles = document.getElementsByClassName("tile");
		console.log(tiles);

		for (var i = 0; i < tiles.length; i++) {
			tiles[i].style.display = "none";
			$scope.load(tiles[i], i);			
		};
	};

	$scope.load = function(tile, id){
		setTimeout(function(){
      		tile.style.display = "block";
      		tile.className += " animated slideInUp";
    	},100 * id);
	};

	$scope.loadTiles();
	
});