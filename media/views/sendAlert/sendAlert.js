'use strict';

angular.module('auti.sendAlert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/send-alert', {
    templateUrl: '/media/views/sendAlert/sendAlert.html',
    controller: 'sendCtrl'
  });
}])

.controller('sendCtrl', ['$scope', '$http',function($scope, $http) {
    console.log("Hola");
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

	 $scope.sendAlert = function(id){
      $http({
            method  : 'POST',
            url     : '/api/sendAlert/', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken' : CSRF_TOKEN
            },
            data: {alert_type: id}
        })
        .success(function(data) {
            console.log(data);
            
                        
        })
        .error(function(data, status, headers, config) {
           
        });
  };
}]);