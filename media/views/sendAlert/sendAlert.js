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
    $scope.state = 1;
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
              //$global.add("alert", data);
                //ngToast.create(mensaje.getContenido());
            }else{
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