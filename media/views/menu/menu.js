'use strict';

angular.module('auti.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/media/views/menu/menu.html',
    controller: 'menuCtrl'
  });
}])
.controller('menuCtrl', function($global, $scope, $http, ngToast) {
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

	$scope.updateAlert = function() {
		var mensaje = new Mensaje();
		var alerta = new Alert();
		$http({
            method  : 'POST',
            url     : '/api/checkalert/', 
            headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      			'X-CSRFToken' : CSRF_TOKEN
        	},
            data: {}
        })
        .success(function(data) {
            console.log(data);
        })
        .error(function(data, status, headers, config) {
           
        });
		$global.add("alert", alerta);
		ngToast.create(mensaje.getContenido());
	}

	$scope.updateAlert();
	$scope.loadTiles();
	
});