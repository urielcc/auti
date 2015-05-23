'use strict';

angular.module('auti.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/media/views/menu/menu.html',
    controller: 'menuCtrl'
  });
}])
.controller('menuCtrl', function($global, $scope, ngToast) {
	ngToast.create('<i class="mdi-content-add"></i> Tienes un mensaje nuevo!');
	document.getElementsByTagName('body')[0].className = 'blue-grey darken-1';

	$scope.loadTiles = function(){
		var tiles = document.getElementsByClassName("tile");

		for (var i = 0; i < tiles.length; i++) {
			tiles[i].style.display = "none";
			$scope.load(tiles[i], i);			
		};
	};

	$scope.load = function(tile, id){
		setTimeout(function(){
      		tile.style.display = "block";
      		tile.className += " animated slideInUp";
    	},50 * id);
	};

	$scope.loadTiles();
	
});