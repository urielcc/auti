'use strict';

angular.module('auti.adminIndex', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/media/views/adminIndex/adminIndex.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', ['$scope', '$http',function($scope, $http) {
	
	$scope.alertas = new Array();
	console.log("hola");
	$scope.alertasDisponibles = function(){
		$http({
            method  : 'POST',
            url     : '/api/alertsAvailables/', 
            headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      			'X-CSRFToken' : CSRF_TOKEN
        	},
            data: {}
        })
        .success(function(data) {
            console.log(data);
      			 $scope.alertas = data;             
        })
        .error(function(data, status, headers, config) {
           
        });
	};

	$scope.alertasDisponibles();

  $scope.deleteAlert = function(id){
      $http({
            method  : 'POST',
            url     : '/api/deleteAlert/', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken' : CSRF_TOKEN
          },
            data: {alert_id: id}
        })
        .success(function(data) {
            console.log(data);
            if(data.statusCode == 0){
                $scope.alertasDisponibles();
            }
                        
        })
        .error(function(data, status, headers, config) {
           
        });
  };
}]);