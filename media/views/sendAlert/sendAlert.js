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
    $scope.state = 0;
    console.log("hola");

    $scope.updateAlert = function() {
        
        //var alerta = new Alert();
        $http({
            method  : 'POST',
            url     : '/api/checkalert/', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken' : CSRF_TOKEN
            },
            data: {origin : 2}
        })
        .success(function(data) {
            console.log(data);
            if(data.statusCode === 0){
                $scope.state = 1;
                $scope.alertas.push(data);             
            }else{
                $scope.state = 2;
                $scope.alertasDisponibles();
            }

        })
        .error(function(data, status, headers, config) {
           
        });
    };
  $scope.tid = setTimeout($scope.updateAlert, 1000);

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

	 $scope.sendAlert = function(id){
        $scope.state = 3;
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
            if(data.statusCode == 0){
                $scope.alertas = new Array();
                $scope.updateAlert();
            }
                
        })
        .error(function(data, status, headers, config) {
           $scope.state = 2;
        });
  };
}]);