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
  $scope.mensajePendiente = false;

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
		//var alerta = new Alert();
		$http({
            method  : 'POST',
            url     : '/api/checkalert/', 
            headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      			'X-CSRFToken' : CSRF_TOKEN
        	},
            data: {origin : 1}
        })
        .success(function(data) {
            console.log(data);
            if(data.statusCode === 0){
              $global.add("alert", data);
			        ngToast.create(mensaje.getContenido());
              $scope.mensajePendiente = true;
              $scope.animar();
              var audio = new Audio('/media/nuevo_mensaje.mp3');
              audio.play();
              
            }else{
              $scope.tid = setTimeout($scope.updateAlert, 5000);
            }

        })
        .error(function(data, status, headers, config) {
           
        });
	};

  $scope.mensajes = function(){
    if($scope.mensajePendiente){
      document.location.href ="#/alert";
    }else{
      document.location.href ="#/message";
    }
  };
  $scope.tid = setTimeout($scope.updateAlert, 1000);
	//$scope.updateAlert();
	$scope.loadTiles();

  $scope.foto = "robot_1.png";
  $scope.contador = 1;

  $scope.animar = function(){
    var sprite1 = "robot_1.png";
    var sprite2 = "robot_2.png";
    if($scope.contador >= 2)
    $scope.$apply(function () {
      if($scope.foto =="robot_1.png"){
        $scope.foto = sprite2;
      }else{
        $scope.foto = sprite1;
      }
    });

    $scope.contador ++;
    if($scope.contador >= 8){
      $scope.contador = 1;
       $scope.foto = sprite1;
    }else{
      setTimeout($scope.animar, 300);
    }

  };

  $scope.anim = function(){
    $scope.animar();
  };
	
});